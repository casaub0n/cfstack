/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dycpos4uc/image/upload",
  },
};

module.exports = nextConfig;
