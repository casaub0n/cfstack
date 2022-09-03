/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts"],
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dycpos4uc/'
  }
};

module.exports = nextConfig;
