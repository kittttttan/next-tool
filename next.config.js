/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    path: '/',
    loader: "custom",
  },
}

module.exports = nextConfig
