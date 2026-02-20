import type { NextConfig } from "next";

const wsProxyHost = process.env.WS_PROXY_HOST ?? "localhost";
const wsProxyPort = process.env.WS_PROXY_PORT ?? "7682";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@appletosolutions/reactbits"],
  async rewrites() {
    return [
      {
        source: "/terminal/:sessionId",
        destination: `http://${wsProxyHost}:${wsProxyPort}/terminal/:sessionId`,
      },
      {
        source: "/presence/:projectId",
        destination: `http://${wsProxyHost}:${wsProxyPort}/presence/:projectId`,
      },
      {
        source: "/sessions/:projectId",
        destination: `http://${wsProxyHost}:${wsProxyPort}/sessions/:projectId`,
      },
    ];
  },
};

export default nextConfig;
