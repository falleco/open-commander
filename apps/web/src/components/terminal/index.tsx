"use client";

import type { FitAddon } from "@xterm/addon-fit";
import { useCallback, useEffect, useRef, useState } from "react";
import type { IDisposable, ITerminalAddon, Terminal } from "xterm";
import { api } from "@/trpc/react";
import type { TerminalPaneProps, TerminalStatus } from "./types";
import { xtermTheme } from "./xterm-theme";

/**
 * Terminal session pane with ttyd lifecycle management.
 */
export function TerminalPane({
  sessionId,
  active,
  resetToken,
  workspaceSuffix,
  className,
  wsUrl: _wsUrl,
  errorMessage,
  onStatusChange,
  onErrorMessage,
  onContainerName,
  onWsUrl,
  onSessionEnded,
  onConnected,
  onLog,
}: TerminalPaneProps) {
  const [terminalHost, setTerminalHost] = useState<HTMLDivElement | null>(null);
  const [isTerminalReady, setIsTerminalReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const terminalDisposablesRef = useRef<IDisposable[]>([]);
  const textEncoderRef = useRef<TextEncoder | null>(null);
  const textDecoderRef = useRef<TextDecoder | null>(null);
  const connectionIdRef = useRef(0);
  const terminalReadyRef = useRef<Promise<void> | null>(null);
  const terminalReadyResolveRef = useRef<(() => void) | null>(null);
  const statusRef = useRef<TerminalStatus>("idle");
  const errorRef = useRef<string | null>(null);
  const sessionEndedRef = useRef(false);
  const resetTokenRef = useRef(resetToken);
  const startSessionRef = useRef<
    ((options?: { reset?: boolean }) => Promise<void>) | null
  >(null);
  const sendRawInputRef = useRef<((payload: string) => void) | null>(null);
  const startSessionMutation = api.terminal.startSession.useMutation();

  const log = useCallback(
    (message: string) => {
      onLog(`[${new Date().toISOString()}] ${message}`);
    },
    [onLog],
  );

  const setStatus = useCallback(
    (next: TerminalStatus) => {
      statusRef.current = next;
      onStatusChange(next);
    },
    [onStatusChange],
  );

  const setError = useCallback(
    (message: string | null) => {
      errorRef.current = message;
      onErrorMessage(message);
    },
    [onErrorMessage],
  );

  if (!terminalReadyRef.current) {
    terminalReadyRef.current = new Promise((resolve) => {
      terminalReadyResolveRef.current = resolve;
    });
  }

  const setTerminalNode = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
    setTerminalHost(node);
  }, []);

  useEffect(() => {
    if (!terminalHost) return;
    let isMounted = true;
    let removeResizeListener: (() => void) | null = null;
    let removeWheelListener: (() => void) | null = null;

    const setupTerminal = async () => {
      const [
        { Terminal },
        { FitAddon },
        { ClipboardAddon },
        { ImageAddon },
        { LigaturesAddon },
        { Unicode11Addon },
        { WebFontsAddon },
        { WebLinksAddon },
        { WebglAddon },
      ] = await Promise.all([
        import("xterm"),
        import("@xterm/addon-fit"),
        import("@xterm/addon-clipboard"),
        import("@xterm/addon-image"),
        import("@xterm/addon-ligatures"),
        import("@xterm/addon-unicode11"),
        import("@xterm/addon-web-fonts"),
        import("@xterm/addon-web-links"),
        import("@xterm/addon-webgl"),
      ]);

      if (!isMounted || !terminalHost) return;

      if (document?.fonts?.load) {
        await Promise.all([
          document.fonts.load('14px "MesloLGS NF"'),
          document.fonts.load('bold 14px "MesloLGS NF"'),
          document.fonts.load('italic 14px "MesloLGS NF"'),
          document.fonts.load('bold italic 14px "MesloLGS NF"'),
        ]);
        await document.fonts.ready;
      }

      const terminal = new Terminal({
        allowTransparency: false,
        cursorBlink: true,
        cursorStyle: "block",
        fontFamily:
          '"MesloLGS NF", var(--font-oc-mono), "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        fontSize: 14,
        fontWeight: 400,
        fontWeightBold: 700,
        drawBoldTextInBrightColors: false,
        macOptionIsMeta: true,
        scrollback: 10000,
        disableStdin: true,
        theme: xtermTheme,
        allowProposedApi: true,
        convertEol: true,
      });
      const fitAddon = new FitAddon();
      const clipboardAddon = new ClipboardAddon();
      const imageAddon = new ImageAddon();
      const unicode11Addon = new Unicode11Addon();
      const webFontsAddon = new WebFontsAddon(true);
      const webLinksAddon = new WebLinksAddon();
      const loadedAddons: Array<{ dispose?: () => void }> = [];

      terminal.open(terminalHost);

      const safeLoadAddon = (addon: ITerminalAddon, label: string) => {
        try {
          terminal.loadAddon(addon);
          loadedAddons.push(addon);
        } catch (error) {
          console.warn(`[terminal] addon ${label} failed`, error);
        }
      };

      safeLoadAddon(fitAddon, "fit");
      safeLoadAddon(clipboardAddon, "clipboard");
      safeLoadAddon(imageAddon, "image");
      safeLoadAddon(unicode11Addon, "unicode11");
      safeLoadAddon(webFontsAddon, "web-fonts");
      safeLoadAddon(webLinksAddon, "web-links");

      if (typeof window !== "undefined" && "FontFace" in window) {
        try {
          const ligaturesAddon = new LigaturesAddon();
          safeLoadAddon(ligaturesAddon, "ligatures");
        } catch {
          // Ligatures addon may fail on some systems
        }
      }

      try {
        const webglAddon = new WebglAddon();
        safeLoadAddon(webglAddon, "webgl");
      } catch (error) {
        console.error("[terminal] addon webgl failed", error);
      }

      fitAddon.fit();

      /**
       * Handle mouse wheel for scrolling in both normal and alternate buffer modes.
       * In alternate buffer (tmux), sends X10 mouse sequences.
       * In normal buffer, uses xterm's native scrollLines.
       */
      const handleWheel = (event: WheelEvent) => {
        const activeTerminal = terminalRef.current;
        if (!activeTerminal) return;
        if (event.ctrlKey || event.metaKey) return;
        if (event.deltaY === 0) return;

        event.preventDefault();
        event.stopPropagation();

        const base = event.deltaMode === 1 ? 20 : 40;
        const magnitude = Math.max(1, Math.round(Math.abs(event.deltaY) / base)) / 20;
        const direction = event.deltaY > 0 ? 1 : -1;

        if (activeTerminal.buffer.active.type === "alternate") {
          const sendRaw = sendRawInputRef.current;
          if (!sendRaw) return;

          const rect = (event.currentTarget as HTMLElement)?.getBoundingClientRect();
          const cellWidth = activeTerminal.cols > 0 ? rect.width / activeTerminal.cols : 9;
          const cellHeight = activeTerminal.rows > 0 ? rect.height / activeTerminal.rows : 17;
          const x = Math.min(Math.max(1, Math.floor((event.clientX - rect.left) / cellWidth) + 1), 223);
          const y = Math.min(Math.max(1, Math.floor((event.clientY - rect.top) / cellHeight) + 1), 223);

          // X10 mouse format: ESC [ M Cb Cx Cy (button 64=up, 65=down)
          const button = direction < 0 ? 64 : 65;
          const sequence = `\x1b[M${String.fromCharCode(button + 32)}${String.fromCharCode(x + 32)}${String.fromCharCode(y + 32)}`;

          for (let i = 0; i < magnitude; i++) {
            sendRaw(sequence);
          }
          return;
        }

        activeTerminal.scrollLines(direction * magnitude);
      };

      const wheelTarget = terminal.element ?? terminalHost;
      wheelTarget.addEventListener("wheel", handleWheel, { passive: false });
      /**
       * Custom text selection handling that bypasses tmux mouse capture.
       * Intercepts mouse events and uses xterm's selection API directly.
       */
      let isSelecting = false;
      let selectionStartCol = 0;
      let selectionStartRow = 0;

      const getCellPosition = (clientX: number, clientY: number) => {
        const rect = wheelTarget.getBoundingClientRect();
        const cellWidth = terminal.cols > 0 ? rect.width / terminal.cols : 9;
        const cellHeight = terminal.rows > 0 ? rect.height / terminal.rows : 17;
        return {
          col: Math.max(0, Math.min(Math.floor((clientX - rect.left) / cellWidth), terminal.cols - 1)),
          row: Math.max(0, Math.min(Math.floor((clientY - rect.top) / cellHeight), terminal.rows - 1)),
        };
      };

      const handleMouseDown = (event: MouseEvent) => {
        if (event.button !== 0) return;
        if (event.ctrlKey || event.metaKey || event.altKey) return;

        const { col, row } = getCellPosition(event.clientX, event.clientY);
        selectionStartCol = col;
        selectionStartRow = row + terminal.buffer.active.viewportY;
        isSelecting = true;
        terminal.clearSelection();
        event.preventDefault();
        event.stopPropagation();
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (!isSelecting) return;

        const { col, row } = getCellPosition(event.clientX, event.clientY);
        const currentRow = row + terminal.buffer.active.viewportY;

        let startRow = selectionStartRow;
        let startCol = selectionStartCol;
        let endRow = currentRow;
        let endCol = col;

        if (startRow > endRow || (startRow === endRow && startCol > endCol)) {
          [startRow, startCol, endRow, endCol] = [endRow, endCol, startRow, startCol];
        }

        if (startRow === endRow) {
          terminal.select(startCol, startRow, endCol - startCol + 1);
        } else {
          const totalCols = terminal.cols;
          const length = (totalCols - startCol) + ((endRow - startRow - 1) * totalCols) + (endCol + 1);
          terminal.select(startCol, startRow, length);
        }

        event.preventDefault();
        event.stopPropagation();
      };

      const handleMouseUp = (event: MouseEvent) => {
        if (!isSelecting) return;
        isSelecting = false;

        event.preventDefault();
        event.stopPropagation();
      };

      wheelTarget.addEventListener("mousedown", handleMouseDown, { capture: true });
      document.addEventListener("mousemove", handleMouseMove, { capture: true });
      document.addEventListener("mouseup", handleMouseUp, { capture: true });

      removeWheelListener = () => {
        wheelTarget.removeEventListener("wheel", handleWheel);
        wheelTarget.removeEventListener("mousedown", handleMouseDown, { capture: true });
        document.removeEventListener("mousemove", handleMouseMove, { capture: true });
        document.removeEventListener("mouseup", handleMouseUp, { capture: true });
      };
      webFontsAddon.loadFonts(["MesloLGS NF"]).catch(() => {});
      if (terminal.unicode.versions.includes("11")) {
        terminal.unicode.activeVersion = "11";
      }

      terminalRef.current = terminal;
      fitAddonRef.current = fitAddon;

      setIsTerminalReady(true);
      terminalReadyResolveRef.current?.();
      terminalReadyResolveRef.current = null;

      const handleResize = () => fitAddon.fit();
      window.addEventListener("resize", handleResize);
      removeResizeListener = () => {
        window.removeEventListener("resize", handleResize);
      };

      const cleanup = () => {
        socketRef.current?.close();
        terminalDisposablesRef.current.forEach((disposable) => {
          disposable.dispose();
        });
        terminalDisposablesRef.current = [];
        loadedAddons.forEach((addon) => {
          try {
            addon.dispose?.();
          } catch (error) {
            console.warn("[terminal] addon dispose failed", error);
          }
        });
        fitAddonRef.current?.dispose();
        terminal.dispose();
      };

      return cleanup;
    };

    let cleanup: (() => void) | undefined;

    setupTerminal()
      .then((dispose) => {
        cleanup = dispose;
      })
      .catch(() => {
        setStatus("error");
        setError("Failed to load terminal in browser.");
      });

    return () => {
      isMounted = false;
      removeResizeListener?.();
      removeWheelListener?.();
      cleanup?.();
    };
  }, [setError, setStatus, terminalHost]);

  useEffect(() => {
    if (!fitAddonRef.current) return;
    const timer = window.setTimeout(() => {
      fitAddonRef.current?.fit();
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!terminalRef.current) return;
    if (!active) {
      terminalRef.current.options.disableStdin = true;
      return;
    }
    terminalRef.current.options.disableStdin = false;
    terminalRef.current.focus();
    fitAddonRef.current?.fit();
    const timer = window.setTimeout(() => {
      fitAddonRef.current?.fit();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [active]);

  /**
   * Single attempt to start the backend and connect the websocket.
   * Returns true on success, throws on failure.
   */
  const startSessionOnce = useCallback(
    async (connectionId: number, options?: { reset?: boolean }) => {
      const data = await startSessionMutation.mutateAsync({
        sessionId: sessionId!,
        reset: options?.reset,
        workspaceSuffix,
      });
      log(`startSession: backend ok ${JSON.stringify(data)}`);
      const protocol = window.location.protocol === "https:" ? "wss" : "ws";
      const host = window.location.hostname;
      const nextWsUrl = `${protocol}://${host}:${data.port}${data.wsPath}`;
      log(`ws: url ${nextWsUrl}`);

      onContainerName(data.containerName);
      onWsUrl(nextWsUrl);
      setStatus("connecting");

      terminalDisposablesRef.current.forEach((disposable) => {
        disposable.dispose();
      });
      terminalDisposablesRef.current = [];
      if (socketRef.current) {
        log("startSession: closing previous socket");
        socketRef.current.onopen = null;
        socketRef.current.onclose = null;
        socketRef.current.onerror = null;
        socketRef.current.onmessage = null;
        socketRef.current.close();
      }

      if (!textEncoderRef.current) {
        textEncoderRef.current = new TextEncoder();
      }
      if (!textDecoderRef.current) {
        textDecoderRef.current = new TextDecoder();
      }
      const encoder = textEncoderRef.current;
      const decoder = textDecoderRef.current;

      const connectSocket = async (url: string) => {
        const maxAttempts = 3;
        for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
          log(`ws: attempt ${attempt + 1}/${maxAttempts} ${url}`);
          const socket = new WebSocket(url, ["tty"]);
          socket.binaryType = "arraybuffer";
          const opened = await new Promise<boolean>((resolve) => {
            const timeout = window.setTimeout(
              () => {
                log("ws: open timeout");
                socket.close();
                resolve(false);
              },
              1500 + attempt * 500,
            );
            socket.onopen = () => {
              window.clearTimeout(timeout);
              log("ws: open");
              resolve(true);
            };
            socket.onerror = () => {
              window.clearTimeout(timeout);
              log("ws: error during open");
              resolve(false);
            };
          });
          if (opened) {
            return socket;
          }
          await new Promise((resolve) =>
            window.setTimeout(resolve, 400 * (attempt + 1)),
          );
        }
        throw new Error("Failed to connect to ttyd.");
      };

      const mouseInputPatterns = [
        "\\u001b\\[<\\d+;\\d+;\\d+;?\\d*[mM]",
        "\\u001b\\[\\d+;\\d+;\\d+[mM]",
        "\\u001b\\[M.{3}",
      ].map((pattern) => new RegExp(pattern, "g"));
      const filterMouseInput = (input: string) =>
        mouseInputPatterns.reduce(
          (next, pattern) => next.replace(pattern, ""),
          input,
        );

      const sendInput = (payload: string | Uint8Array) => {
        const activeSocket = socketRef.current;
        if (!activeSocket || activeSocket.readyState !== WebSocket.OPEN)
          return;

        if (typeof payload === "string") {
          const filtered = filterMouseInput(payload);
          if (filtered.length === 0) {
            return;
          }
          const buffer = new Uint8Array(3 * payload.length + 1);
          buffer[0] = "0".charCodeAt(0);
          const result = encoder.encodeInto(filtered, buffer.subarray(1));
          const written =
            typeof result.written === "number"
              ? result.written
              : filtered.length;
          activeSocket.send(buffer.subarray(0, written + 1));
          return;
        }

        const buffer = new Uint8Array(payload.length + 1);
        buffer[0] = "0".charCodeAt(0);
        buffer.set(payload, 1);
        activeSocket.send(buffer);
      };

      // Raw input without mouse filtering (for wheel scroll sequences)
      const sendRawInput = (payload: string) => {
        const activeSocket = socketRef.current;
        if (!activeSocket || activeSocket.readyState !== WebSocket.OPEN)
          return;
        const buffer = new Uint8Array(3 * payload.length + 1);
        buffer[0] = "0".charCodeAt(0);
        const result = encoder.encodeInto(payload, buffer.subarray(1));
        const written =
          typeof result.written === "number" ? result.written : payload.length;
        activeSocket.send(buffer.subarray(0, written + 1));
      };
      sendRawInputRef.current = sendRawInput;

      const sendResize = (cols: number, rows: number) => {
        const activeSocket = socketRef.current;
        if (!activeSocket || activeSocket.readyState !== WebSocket.OPEN)
          return;
        const message = `1${JSON.stringify({ columns: cols, rows })}`;
        activeSocket.send(encoder.encode(message));
      };

      const ensureTerminalSize = async () => {
        if (!terminalRef.current) return null;
        for (let attempt = 0; attempt < 10; attempt += 1) {
          fitAddonRef.current?.fit();
          const { cols, rows } = terminalRef.current;
          if (cols >= 20 && rows >= 5) {
            return { cols, rows };
          }
          await new Promise((resolve) => window.setTimeout(resolve, 100));
        }
        return {
          cols: terminalRef.current.cols,
          rows: terminalRef.current.rows,
        };
      };

      setStatus("connecting");
      const socket = await connectSocket(nextWsUrl);
      if (connectionIdRef.current !== connectionId) {
        log("ws: stale connection, closing");
        socket.close();
        return;
      }
      socketRef.current = socket;

      if (terminalRef.current) {
        terminalRef.current.reset();
        terminalRef.current.writeln("Connecting to ttyd...");
        terminalRef.current.focus();
        terminalRef.current.options.disableStdin = false;
        terminalDisposablesRef.current = [
          terminalRef.current.onData((data) => sendInput(data)),
          terminalRef.current.onResize(({ cols, rows }) =>
            sendResize(cols, rows),
          ),
        ];
      }

      socket.onerror = () => {
        if (connectionIdRef.current !== connectionId) return;
        log("ws: error");
        setStatus("error");
        setError("Failed to connect to ttyd. Check the container.");
      };

      socket.onclose = () => {
        if (connectionIdRef.current !== connectionId) return;
        log("ws: close");
        if (statusRef.current === "connected") {
          setStatus("idle");
        } else {
          setStatus("error");
        }
        if (!sessionEndedRef.current && !errorRef.current) {
          setError("Connection closed before opening.");
        }
      };

      const handleMessage = (
        messageType: string,
        payload: Uint8Array | string,
      ) => {
        if (connectionIdRef.current !== connectionId) return;
        if (messageType !== "0") {
          log(`ws: message type=${messageType}`);
        }
        switch (messageType) {
          case "0":
            {
              const text =
                typeof payload === "string"
                  ? payload
                  : decoder.decode(payload);
              const lowerText = text.toLowerCase();
              if (
                lowerText.includes("screen is terminating") ||
                lowerText.includes("session terminated") ||
                lowerText.includes("[exited]") ||
                lowerText.includes("no server running")
              ) {
                log("ws: terminal session termination detected");
                sessionEndedRef.current = true;
                onSessionEnded(
                  true,
                  "Session ended. Start again to continue.",
                );
                socket.close();
                return;
              }
              terminalRef.current?.write(payload);
            }
            break;
          case "1":
            document.title =
              typeof payload === "string" ? payload : decoder.decode(payload);
            break;
          case "2":
            break;
          default:
            break;
        }
      };

      socket.onmessage = (event) => {
        if (typeof event.data === "string") {
          const messageType = event.data.charAt(0);
          const payload = event.data.slice(1);
          handleMessage(messageType, payload);
          return;
        }

        if (!(event.data instanceof ArrayBuffer)) return;
        const view = new Uint8Array(event.data);
        if (view.length === 0) return;
        const messageType = String.fromCharCode(view[0]);
        const payload = view.subarray(1);
        handleMessage(messageType, payload);
      };

      setStatus("connected");
      onConnected?.();
      if (terminalRef.current) {
        const size = await ensureTerminalSize();
        const cols = size?.cols ?? terminalRef.current.cols;
        const rows = size?.rows ?? terminalRef.current.rows;
        log(`ws: terminal size cols=${cols} rows=${rows}`);
        const handshake = JSON.stringify({
          AuthToken: "",
          columns: cols,
          rows,
        });
        log(`ws: handshake ${handshake}`);
        socket.send(encoder.encode(handshake));
        terminalRef.current.focus();
        sendResize(cols, rows);
        log("ws: resize sent");
        window.setTimeout(() => {
          const refreshCols = terminalRef.current?.cols ?? cols;
          const refreshRows = terminalRef.current?.rows ?? rows;
          sendResize(refreshCols, refreshRows);
          log(`ws: resize refresh cols=${refreshCols} rows=${refreshRows}`);
        }, 200);
      }
    },
    [
      log,
      onConnected,
      onContainerName,
      onSessionEnded,
      onWsUrl,
      sessionId,
      setError,
      setStatus,
      startSessionMutation,
      workspaceSuffix,
    ],
  );

  /**
   * Starts or resets the ttyd container and connects the websocket.
   * Retries the full flow up to 5 times, suppressing errors until
   * all attempts are exhausted.
   */
  const startSession = useCallback(
    async (options?: { reset?: boolean }) => {
      if (!sessionId) return;
      sessionEndedRef.current = false;
      onSessionEnded(false, null);
      setStatus("starting");
      setError(null);

      const connectionId = ++connectionIdRef.current;
      log(
        `startSession: id=${connectionId} reset=${
          options?.reset ? "1" : "0"
        }`,
      );

      if (!terminalRef.current && terminalReadyRef.current) {
        log("startSession: waiting for terminal");
        try {
          await Promise.race([
            terminalReadyRef.current,
            new Promise<void>((_, reject) =>
              window.setTimeout(
                () => reject(new Error("Terminal is not ready.")),
                10000,
              ),
            ),
          ]);
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Unexpected error.";
          log(`startSession: terminal wait failed: ${message}`);
          setStatus("error");
          setError(message);
          return;
        }
        log("startSession: terminal ready");
      }

      const maxOuterAttempts = 5;
      let lastError: string | null = null;

      for (let attempt = 0; attempt < maxOuterAttempts; attempt += 1) {
        if (connectionIdRef.current !== connectionId) return;
        log(
          `startSession: outer attempt ${attempt + 1}/${maxOuterAttempts}`,
        );

        try {
          await startSessionOnce(connectionId, options);
          return; // success
        } catch (error) {
          lastError =
            error instanceof Error ? error.message : "Unexpected error.";
          log(
            `startSession: attempt ${attempt + 1} failed: ${lastError}`,
          );

          if (attempt < maxOuterAttempts - 1) {
            // Keep status as "starting" so the connecting overlay stays visible
            setStatus("starting");
            setError(null);
            const delay = 2000 * (attempt + 1);
            await new Promise((resolve) =>
              window.setTimeout(resolve, delay),
            );
          }
        }
      }

      // All attempts exhausted
      log(`startSession: all ${maxOuterAttempts} attempts failed`);
      setStatus("error");
      setError(lastError ?? "Failed to connect after multiple attempts.");
    },
    [
      log,
      onSessionEnded,
      sessionId,
      setError,
      setStatus,
      startSessionOnce,
    ],
  );

  useEffect(() => {
    startSessionRef.current = startSession;
  }, [startSession]);

  useEffect(() => {
    if (!sessionId) {
      socketRef.current?.close();
      socketRef.current = null;
      sessionEndedRef.current = false;
      setStatus("idle");
      setError(null);
      onContainerName(null);
      onWsUrl(null);
      onSessionEnded(false, null);
      return;
    }
    void startSessionRef.current?.();
  }, [
    onContainerName,
    onSessionEnded,
    onWsUrl,
    sessionId,
    setError,
    setStatus,
  ]);

  useEffect(() => {
    if (!sessionId) return;
    if (resetTokenRef.current === resetToken) return;
    resetTokenRef.current = resetToken;
    void startSessionRef.current?.({ reset: true });
  }, [resetToken, sessionId]);

  return (
    <div
      className={`relative flex h-full w-full min-h-0 flex-1 flex-col overflow-hidden p-4 ${
        className ?? ""
      }`}
    >
      <div
        ref={setTerminalNode}
        className="h-full min-h-0 w-full flex-1"
        role="application"
        aria-label="Terminal"
        onMouseEnter={() => {
          if (terminalRef.current) {
            terminalRef.current.options.disableStdin = false;
            terminalRef.current.focus();
          }
        }}
        onPointerDown={() => {
          if (terminalRef.current) {
            terminalRef.current.options.disableStdin = false;
            terminalRef.current.focus();
          }
        }}
      />
      {!isTerminalReady ? (
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-(--oc-panel-strong)/90 text-slate-300">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-500/60 border-t-emerald-400" />
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Loading terminal
          </p>
        </div>
      ) : null}
      {errorMessage ? (
        <p className="absolute bottom-4 left-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
