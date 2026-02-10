import { exec } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { env } from "@/env";

const execAsync = promisify(exec);

const AGENT_WORKSPACE = env.AGENT_WORKSPACE
  ? path.resolve(env.AGENT_WORKSPACE)
  : null;

const REPOS_SUBDIR = "repos";

/**
 * Parse a GitHub repository string into owner and repo.
 */
function parseRepository(repository: string): { owner: string; repo: string } {
  const parts = repository.trim().split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    throw new Error(
      `Invalid repository format: ${repository}. Expected 'owner/repo'.`,
    );
  }
  return { owner: parts[0], repo: parts[1] };
}

/**
 * Get the local path where a repository should be cloned.
 */
function getRepoPath(owner: string, repo: string): string {
  if (!AGENT_WORKSPACE) {
    throw new Error("AGENT_WORKSPACE is not configured");
  }
  return path.join(AGENT_WORKSPACE, REPOS_SUBDIR, owner, repo);
}

/**
 * Check if a directory exists.
 */
async function directoryExists(dirPath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Check if a directory is a git repository.
 */
async function isGitRepo(dirPath: string): Promise<boolean> {
  const gitDir = path.join(dirPath, ".git");
  return directoryExists(gitDir);
}

export const gitService = {
  /**
   * Clone a GitHub repository to the workspace.
   * If the repository already exists, pulls latest changes instead.
   *
   * @param repository - Repository in 'owner/repo' format
   * @returns The relative path within workspace where the repo is cloned
   */
  async cloneOrPull(repository: string): Promise<string> {
    const { owner, repo } = parseRepository(repository);
    const repoPath = getRepoPath(owner, repo);
    const relativePath = path.join(REPOS_SUBDIR, owner, repo);

    // Build the clone URL
    const token = env.GITHUB_TOKEN;
    const cloneUrl = token
      ? `https://${token}@github.com/${owner}/${repo}.git`
      : `https://github.com/${owner}/${repo}.git`;

    // Check if repo already exists
    if (await directoryExists(repoPath)) {
      if (await isGitRepo(repoPath)) {
        // Repo exists, pull latest changes
        console.log(`[git.service] Repository exists, pulling: ${repository}`);
        try {
          await execAsync("git fetch --all && git reset --hard origin/HEAD", {
            cwd: repoPath,
            env: {
              ...process.env,
              GIT_TERMINAL_PROMPT: "0",
            },
          });
          console.log(`[git.service] Pull successful: ${repository}`);
        } catch (error) {
          console.warn(
            `[git.service] Pull failed, will re-clone: ${repository}`,
            error,
          );
          // Remove and re-clone
          await fs.rm(repoPath, { recursive: true, force: true });
          await this.clone(cloneUrl, repoPath, repository);
        }
      } else {
        // Directory exists but is not a git repo, remove and clone
        console.log(
          `[git.service] Directory exists but not a git repo, removing: ${repoPath}`,
        );
        await fs.rm(repoPath, { recursive: true, force: true });
        await this.clone(cloneUrl, repoPath, repository);
      }
    } else {
      // Clone fresh
      await this.clone(cloneUrl, repoPath, repository);
    }

    return relativePath;
  },

  /**
   * Clone a repository to a specific path.
   */
  async clone(
    cloneUrl: string,
    targetPath: string,
    repository: string,
  ): Promise<void> {
    // Ensure parent directory exists
    const parentDir = path.dirname(targetPath);
    await fs.mkdir(parentDir, { recursive: true });

    console.log(`[git.service] Cloning repository: ${repository}`);

    try {
      // Clone with depth 1 for faster initial clone
      // Use --single-branch to only get the default branch
      await execAsync(
        `git clone --depth 1 --single-branch "${cloneUrl}" "${targetPath}"`,
        {
          env: {
            ...process.env,
            GIT_TERMINAL_PROMPT: "0",
          },
          timeout: 300000, // 5 minute timeout
        },
      );
      console.log(`[git.service] Clone successful: ${repository}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      // Sanitize error message to remove token
      const sanitizedMessage = message.replace(
        /https:\/\/[^@]+@github\.com/g,
        "https://***@github.com",
      );
      throw new Error(`Failed to clone repository: ${sanitizedMessage}`);
    }
  },

  /**
   * Get the absolute path for a repository.
   */
  getAbsolutePath(repository: string): string {
    const { owner, repo } = parseRepository(repository);
    return getRepoPath(owner, repo);
  },

  /**
   * Get the relative path (within workspace) for a repository.
   */
  getRelativePath(repository: string): string {
    const { owner, repo } = parseRepository(repository);
    return path.join(REPOS_SUBDIR, owner, repo);
  },

  /**
   * Check if AGENT_WORKSPACE is configured.
   */
  isWorkspaceConfigured(): boolean {
    return AGENT_WORKSPACE !== null;
  },
};
