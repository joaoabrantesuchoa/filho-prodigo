// filepath: /d:/Projects/filho-prodigo/next.config.mjs
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  // eslint-disable-next-line no-undef
  enabled: typeof process !== "undefined" && process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // other next config here...
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

export default bundleAnalyzer(nextConfig);

class VeliteWebpackPlugin {
  static started = false;
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs !!!
  }
}
