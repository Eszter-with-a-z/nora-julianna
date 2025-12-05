/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // required for GitHub Pages
  basePath: "/nora-julianna",    // always use repo name
  assetPrefix: "/nora-julianna/",

  images: {
    unoptimized: true,           // fixes static export issues with images
  },
};

export default nextConfig;
