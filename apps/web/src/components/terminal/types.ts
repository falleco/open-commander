export type TerminalStatus =
  | "idle"
  | "starting"
  | "connecting"
  | "connected"
  | "error";

export type StartResponse = {
  port: number;
  wsPath: string;
  containerName: string;
};

export type TerminalPaneProps = {
  sessionId: string | null;
  active: boolean;
  resetToken: number;
  workspaceSuffix?: string;
  className?: string;
  wsUrl: string | null;
  errorMessage: string | null;
  /** Command to auto-execute once after the first successful handshake. */
  autoCommand?: string | null;
  onStatusChange: (status: TerminalStatus) => void;
  onErrorMessage: (message: string | null) => void;
  onContainerName: (name: string | null) => void;
  onWsUrl: (url: string | null) => void;
  onSessionEnded: (ended: boolean, message: string | null) => void;
  onConnected?: () => void;
  onLog: (line: string) => void;
};
