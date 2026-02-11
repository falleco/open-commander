import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@appletosolutions/reactbits"],
};

export default nextConfig;
