/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/OpenTerminal-investment-terminalal',
  assetPrefix: '/OpenTerminal-investment-terminalal/',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: '/OpenTerminal-investment-terminalal',
  },
}

module.exports = nextConfig
