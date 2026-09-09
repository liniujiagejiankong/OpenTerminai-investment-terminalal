/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  output: 'export', // 开启静态导出，把网页打包成纯静态文件，放在 out 目录下
  eslint: {
    ignoreDuringBuilds: true, // 构建时忽略 ESLint 语法报错
  },
  typescript: {
    ignoreBuildErrors: true, // 构建时忽略 TypeScript 类型报错
  },
};

module.exports = nextConfig;
