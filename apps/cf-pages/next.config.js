/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true, // https://nextjs.org/docs/messages/swc-disabled
  },
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts"],
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dycpos4uc/image/upload",
  },
};
module.exports = nextConfig;
