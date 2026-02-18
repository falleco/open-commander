#!/bin/bash
# Task Runner Script for Open Commander
# Executes a task using the specified AI agent in non-interactive mode
# Returns JSON result with completion status

set -e

# Configuration
TASK_FILE="${TASK_FILE:-/tmp/task-input.json}"
RESULT_FILE="${RESULT_FILE:-/tmp/task-result.json}"
LOG_FILE="${LOG_FILE:-/tmp/task-execution.log}"
TIMEOUT="${TASK_TIMEOUT:-3600}"

# Colors for logging
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
  local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo -e "${timestamp} $1" | tee -a "$LOG_FILE"
}

error() {
  log "${RED}[ERROR]${NC} $1"
}

success() {
  log "${GREEN}[SUCCESS]${NC} $1"
}

info() {
  log "${YELLOW}[INFO]${NC} $1"
}

write_result() {
  local completed="$1"
  local needs_input="$2"
  local input_request="$3"
  local result="$4"
  local error_message="$5"

  # Escape strings for JSON
  result=$(echo "$result" | jq -Rs '.')
  input_request=$(echo "$input_request" | jq -Rs '.')
  error_message=$(echo "$error_message" | jq -Rs '.')

  cat > "$RESULT_FILE" <<EOF
{
  "completed": $completed,
  "needsInput": $needs_input,
  "inputRequest": $input_request,
  "result": $result,
  "errorMessage": $error_message,
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
}
EOF
}

# Read task input
if [ ! -f "$TASK_FILE" ]; then
  error "Task file not found: $TASK_FILE"
  write_result "false" "false" '""' '""' '"Task file not found"'
  exit 1
fi

TASK_TITLE=$(jq -r '.title // ""' "$TASK_FILE")
TASK_BODY=$(jq -r '.body // ""' "$TASK_FILE")
AGENT_ID=$(jq -r '.agentId // "claude"' "$TASK_FILE")
WORKSPACE=$(jq -r '.workspace // "/workspace"' "$TASK_FILE")

info "Starting task execution"
info "Agent: $AGENT_ID"
info "Title: $TASK_TITLE"
info "Workspace: $WORKSPACE"

cd "$WORKSPACE" 2>/dev/null || cd /workspace

# Build the prompt
PROMPT="You are executing a task. Please complete it and provide your result.

TASK TITLE: $TASK_TITLE

TASK DESCRIPTION:
$TASK_BODY

IMPORTANT: After completing the task, you MUST output a final status in the following JSON format on a new line:
\`\`\`json
{\"status\": \"completed\", \"summary\": \"Brief summary of what was done\"}
\`\`\`

OR if you need more information/action from the user:
\`\`\`json
{\"status\": \"needs_input\", \"question\": \"What information do you need?\"}
\`\`\`

Now execute the task:"

# Execute based on agent type
AGENT_OUTPUT=""
AGENT_EXIT_CODE=0

case "$AGENT_ID" in
  "claude")
    info "Executing with Claude Code..."
    AGENT_OUTPUT=$(timeout "$TIMEOUT" claude --print --dangerously-skip-permissions "$PROMPT" 2>&1) || AGENT_EXIT_CODE=$?
    ;;

  "codex")
    info "Executing with Codex..."
    # Codex uses different flags
    AGENT_OUTPUT=$(timeout "$TIMEOUT" codex --dangerously-bypass-approvals-and-sandbox exec "$PROMPT" 2>&1) || AGENT_EXIT_CODE=$?
    ;;

  "opencode")
    info "Executing with OpenCode..."
    AGENT_OUTPUT=$(timeout "$TIMEOUT" opencode "$PROMPT" 2>&1) || AGENT_EXIT_CODE=$?
    ;;

  "cursor")
    info "Executing with Cursor..."
    AGENT_OUTPUT=$(timeout "$TIMEOUT" cursor "$PROMPT" 2>&1) || AGENT_EXIT_CODE=$?
    ;;

  *)
    error "Unknown agent: $AGENT_ID"
    write_result "false" "false" '""' '""' "\"Unknown agent: $AGENT_ID\""
    exit 1
    ;;
esac

# Log the output
echo "$AGENT_OUTPUT" >> "$LOG_FILE"

# Parse the agent output to find the JSON status
if [ $AGENT_EXIT_CODE -eq 124 ]; then
  error "Task execution timed out after ${TIMEOUT}s"
  write_result "false" "false" '""' '"Task execution timed out"' '"Timeout exceeded"'
  exit 1
fi

if [ $AGENT_EXIT_CODE -ne 0 ]; then
  error "Agent exited with code $AGENT_EXIT_CODE"
  write_result "false" "false" '""' '"Agent execution failed"' "\"Agent exited with code $AGENT_EXIT_CODE\""
  exit 1
fi

# Try to extract JSON status from output
STATUS_JSON=$(echo "$AGENT_OUTPUT" | grep -oP '```json\s*\K\{[^}]+\}' | tail -1 || true)

if [ -z "$STATUS_JSON" ]; then
  # Try alternative format without code block
  STATUS_JSON=$(echo "$AGENT_OUTPUT" | grep -oP '\{"status":\s*"[^"]+",\s*"(summary|question)":\s*"[^"]+"\}' | tail -1 || true)
fi

if [ -n "$STATUS_JSON" ]; then
  STATUS=$(echo "$STATUS_JSON" | jq -r '.status // "unknown"')

  if [ "$STATUS" = "completed" ]; then
    SUMMARY=$(echo "$STATUS_JSON" | jq -r '.summary // "Task completed"')
    success "Task completed: $SUMMARY"
    write_result "true" "false" '""' "\"$SUMMARY\"" '""'
  elif [ "$STATUS" = "needs_input" ]; then
    QUESTION=$(echo "$STATUS_JSON" | jq -r '.question // "Additional input required"')
    info "Task needs input: $QUESTION"
    write_result "false" "true" "\"$QUESTION\"" '""' '""'
  else
    info "Unknown status: $STATUS"
    write_result "false" "false" '""' "\"Unknown status: $STATUS\"" '""'
  fi
else
  # No JSON found, assume completed based on exit code
  info "No status JSON found, assuming completed based on exit code"
  write_result "true" "false" '""' '"Task executed successfully (no explicit status)"' '""'
fi

success "Task execution finished"
cat "$RESULT_FILE"
