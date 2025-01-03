// filepath: /d:/Projects/filho-prodigo/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // other next config here...
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

export default nextConfig;

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