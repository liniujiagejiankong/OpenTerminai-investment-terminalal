/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/OpenTerminal-investment-terminalal', // 必须加上你的仓库名
  assetPrefix: '/OpenTerminal-investment-terminalal/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
