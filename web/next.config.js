/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/OpenTerminal-investment-terminalal',
  assetPrefix: '/OpenTerminal-investment-terminalal/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
