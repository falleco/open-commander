"use client";

import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { useState } from "react";
import SuperJSON from "superjson";
import { IS_DEV } from "@/config/constants";
import { env } from "@/env";
import type { AppRouter } from "@/server/api/root";
import { createQueryClient } from "./query-client";

let clientQueryClientSingleton: QueryClient | undefined;
const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  if (!clientQueryClientSingleton) {
    clientQueryClientSingleton = createQueryClient();
  }
  return clientQueryClientSingleton;
};

export const api = createTRPCReact<AppRouter>();

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            IS_DEV || (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchLink({
          transformer: SuperJSON,
          url: `${env.NEXT_PUBLIC_APP_URL}/api/trpc`,
          headers: () => {
            const headers = new Headers();
            headers.set("x-trpc-source", "nextjs-react");
            return headers;
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
}
