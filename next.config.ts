import bundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line n/prefer-global/process
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader",
      },
    });
    return config;
  },
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  transpilePackages: ["three"],
};

function pipeline(fns: ((config: NextConfig) => NextConfig)[]) {
  return fns.reduce((acc, fn) => fn(acc), nextConfig);
}

export default pipeline([withSerwist, withBundleAnalyzer]);
