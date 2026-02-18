"use client";

import {
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  FileText,
  Key,
  Loader2,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/trpc/react";

type ApiClientData = {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  secrets: {
    id: string;
    name: string;
    keyPrefix: string;
    lastUsedAt: Date | null;
    createdAt: Date;
  }[];
  callLogsCount: number;
};

type ApiCallLogData = {
  id: string;
  clientId: string;
  endpoint: string;
  method: string;
  statusCode: number;
  ipAddress: string | null;
  userAgent: string | null;
  responseMs: number | null;
  errorMessage: string | null;
  createdAt: Date;
  client: { id: string; name: string };
};

type CreateClientModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Modal for creating a new API client.
 */
function CreateClientModal({ open, onClose }: CreateClientModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const utils = api.useUtils();

  const createMutation = api.apiClients.create.useMutation({
    onSuccess: () => {
      utils.apiClients.list.invalidate();
      setName("");
      setDescription("");
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createMutation.mutate({
      name: name.trim(),
      description: description.trim() || undefined,
    });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close"
      />
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-(--oc-panel-strong) p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">New API Client</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div className="grid gap-2">
            <label
              htmlFor="client-name"
              className="text-xs font-medium uppercase tracking-wider text-slate-400"
            >
              Name
            </label>
            <input
              id="client-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Application"
              className="w-full rounded-xl border border-white/10 bg-(--oc-panel) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
              autoComplete="off"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="client-description"
              className="text-xs font-medium uppercase tracking-wider text-slate-400"
            >
              Description (optional)
            </label>
            <input
              id="client-description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Production server integration"
              className="w-full rounded-xl border border-white/10 bg-(--oc-panel) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={createMutation.isPending}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange-500/90 text-white hover:bg-orange-500"
            disabled={!name.trim() || createMutation.isPending}
          >
            {createMutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

type CreateSecretModalProps = {
  open: boolean;
  clientId: string;
  onClose: () => void;
};

/**
 * Modal for creating a new API secret.
 */
function CreateSecretModal({
  open,
  clientId,
  onClose,
}: CreateSecretModalProps) {
  const [name, setName] = useState("");
  const [createdSecret, setCreatedSecret] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const utils = api.useUtils();

  const createMutation = api.apiClients.createSecret.useMutation({
    onSuccess: (data) => {
      utils.apiClients.list.invalidate();
      setCreatedSecret(data.secretKey);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createMutation.mutate({
      clientId,
      name: name.trim(),
    });
  };

  const handleCopy = useCallback(() => {
    if (createdSecret) {
      navigator.clipboard.writeText(createdSecret);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [createdSecret]);

  const handleClose = () => {
    setName("");
    setCreatedSecret(null);
    setCopied(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0"
        onClick={handleClose}
        aria-label="Close"
      />
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-(--oc-panel-strong) p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            {createdSecret ? "Secret Created" : "New API Secret"}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {createdSecret ? (
          <div className="mt-4">
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4">
              <p className="text-sm text-orange-200">
                Copy this secret key now. You won't be able to see it again!
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <code className="flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-sm text-slate-200 break-all">
                {createdSecret}
              </code>
              <Button
                type="button"
                size="icon-sm"
                variant="ghost"
                onClick={handleCopy}
                className="flex-shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                type="button"
                className="bg-orange-500/90 text-white hover:bg-orange-500"
                onClick={handleClose}
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mt-4 grid gap-2">
              <label
                htmlFor="secret-name"
                className="text-xs font-medium uppercase tracking-wider text-slate-400"
              >
                Name
              </label>
              <input
                id="secret-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="production-key"
                className="w-full rounded-xl border border-white/10 bg-(--oc-panel) px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
                autoComplete="off"
              />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                onClick={handleClose}
                disabled={createMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-orange-500/90 text-white hover:bg-orange-500"
                disabled={!name.trim() || createMutation.isPending}
              >
                {createMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Secret"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

type ApiClientItemProps = {
  client: {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    secrets: {
      id: string;
      name: string;
      keyPrefix: string;
      lastUsedAt: Date | null;
      createdAt: Date;
    }[];
    callLogsCount: number;
  };
};

/**
 * Single API client item with expandable secrets list.
 */
function ApiClientItem({ client }: ApiClientItemProps) {
  const [expanded, setExpanded] = useState(false);
  const [createSecretOpen, setCreateSecretOpen] = useState(false);
  const [logsModalOpen, setLogsModalOpen] = useState(false);
  const utils = api.useUtils();

  const deleteMutation = api.apiClients.delete.useMutation({
    onSuccess: () => utils.apiClients.list.invalidate(),
  });

  const deleteSecretMutation = api.apiClients.deleteSecret.useMutation({
    onSuccess: () => utils.apiClients.list.invalidate(),
  });

  return (
    <div className="rounded-xl border border-white/10 bg-(--oc-panel)">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-200">
            <Key className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{client.name}</p>
            {client.description && (
              <p className="text-xs text-slate-400">{client.description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="muted">{client.secrets.length} keys</Badge>
          <Button
            size="sm"
            variant="ghost"
            className="text-slate-400 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLogsModalOpen(true);
            }}
          >
            <FileText className="h-3.5 w-3.5" />
            Logs
          </Button>
          {expanded ? (
            <ChevronDown className="h-4 w-4 text-slate-400" />
          ) : (
            <ChevronRight className="h-4 w-4 text-slate-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Secret Keys
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
                onClick={() => {
                  if (
                    confirm(
                      `Delete client "${client.name}" and all its secrets?`,
                    )
                  ) {
                    deleteMutation.mutate({ id: client.id });
                  }
                }}
                disabled={deleteMutation.isPending}
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete Client
              </Button>
              <Button
                size="sm"
                className="bg-orange-500/90 text-white hover:bg-orange-500"
                onClick={() => setCreateSecretOpen(true)}
              >
                <Plus className="h-3.5 w-3.5" />
                Add Key
              </Button>
            </div>
          </div>

          {client.secrets.length === 0 ? (
            <p className="text-sm text-slate-500 italic">
              No secret keys yet. Create one to access the API.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {client.secrets.map((secret) => (
                <div
                  key={secret.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    <code className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-slate-300">
                      {secret.keyPrefix}...
                    </code>
                    <span className="text-sm text-slate-300">
                      {secret.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {secret.lastUsedAt && (
                      <span className="text-xs text-slate-500">
                        Used {new Date(secret.lastUsedAt).toLocaleDateString()}
                      </span>
                    )}
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      className="text-slate-400 hover:text-rose-400"
                      onClick={() => {
                        if (confirm(`Delete secret "${secret.name}"?`)) {
                          deleteSecretMutation.mutate({ id: secret.id });
                        }
                      }}
                      disabled={deleteSecretMutation.isPending}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 pt-3 border-t border-white/5">
            <p className="text-xs text-slate-500">
              {client.callLogsCount} API calls • Created{" "}
              {new Date(client.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}

      <CreateSecretModal
        open={createSecretOpen}
        clientId={client.id}
        onClose={() => setCreateSecretOpen(false)}
      />

      <ApiLogsModal
        open={logsModalOpen}
        clientId={client.id}
        clientName={client.name}
        onClose={() => setLogsModalOpen(false)}
      />
    </div>
  );
}

type ApiLogsModalProps = {
  open: boolean;
  clientId: string;
  clientName: string;
  onClose: () => void;
};

/**
 * Modal for viewing API call logs for a specific client.
 */
function ApiLogsModal({
  open,
  clientId,
  clientName,
  onClose,
}: ApiLogsModalProps) {
  const logsQuery = api.apiClients.getCallLogs.useQuery(
    { clientId, limit: 50 },
    { enabled: open },
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative z-10 flex max-h-[85vh] w-full max-w-4xl flex-col rounded-2xl border border-white/10 bg-(--oc-panel-strong) shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-200">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-white">
                API Logs: {clientName}
              </h2>
              {logsQuery.data && (
                <p className="text-xs text-slate-400">
                  {logsQuery.data.total} total calls
                </p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          {logsQuery.isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
            </div>
          ) : logsQuery.data?.logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12">
              <FileText className="h-10 w-10 text-slate-500" />
              <p className="text-sm text-slate-400">No API calls yet</p>
              <p className="text-xs text-slate-500">
                Calls made using your API keys will appear here.
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-black/20">
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-500">
                      Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-500">
                      Endpoint
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-500">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-500">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-slate-500">
                      IP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(logsQuery.data?.logs as ApiCallLogData[] | undefined)?.map(
                    (log) => (
                      <tr
                        key={log.id}
                        className="border-b border-white/5 hover:bg-white/5"
                      >
                        <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                          {new Date(log.createdAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-3">
                          <code className="rounded bg-white/5 px-2 py-0.5 text-xs text-slate-300">
                            {log.method} {log.endpoint}
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              log.statusCode < 300 ? "success" : "danger"
                            }
                          >
                            {log.statusCode}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-slate-400">
                          {log.responseMs ?? "-"}ms
                        </td>
                        <td className="px-4 py-3 text-slate-500 text-xs font-mono">
                          {log.ipAddress ?? "-"}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-white/10 p-4">
          <Button type="button" variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * Panel for managing API clients and secrets.
 */
export function ApiClientsPanel() {
  const [createClientOpen, setCreateClientOpen] = useState(false);

  const clientsQuery = api.apiClients.list.useQuery();
  const clients = clientsQuery.data ?? [];

  return (
    <Card className="h-full border-white/10 bg-(--oc-panel-strong) shadow-lg">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-sm uppercase tracking-[0.3em] text-slate-400">
          API Clients
        </CardTitle>
        <Button
          size="sm"
          className="bg-orange-500/90 text-white hover:bg-orange-500"
          onClick={() => setCreateClientOpen(true)}
        >
          <Plus className="h-3.5 w-3.5" />
          New Client
        </Button>
      </CardHeader>
      <CardContent>
        {clientsQuery.isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
          </div>
        ) : clients.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/10 py-8">
            <Key className="h-8 w-8 text-slate-500" />
            <p className="text-sm text-slate-400">No API clients yet</p>
            <Button
              size="sm"
              className="bg-orange-500/90 text-white hover:bg-orange-500"
              onClick={() => setCreateClientOpen(true)}
            >
              <Plus className="h-3.5 w-3.5" />
              Create your first client
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {(clients as ApiClientData[]).map((client) => (
              <ApiClientItem key={client.id} client={client} />
            ))}
          </div>
        )}
      </CardContent>

      <CreateClientModal
        open={createClientOpen}
        onClose={() => setCreateClientOpen(false)}
      />
    </Card>
  );
}
