/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  sassOptions: {
    compress: true,
  },
};

module.exports = nextConfig;
