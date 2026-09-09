/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 使用相对路径前缀，彻底解决 GitHub Pages 子路径及大小写导致的 404
  assetPrefix: './',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
