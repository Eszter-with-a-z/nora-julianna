/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",         // <-- required for GitHub Pages
  basePath: isProd ? '/nora-julianna' : '',
  assetPrefix: isProd ? '/nora-julianna' : '',
};

export default nextConfig;

