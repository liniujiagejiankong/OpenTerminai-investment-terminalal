/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/OpenTerminal-investment-terminalal',
  // 去掉 assetPrefix，避免大小写或多斜杠导致的 404
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
