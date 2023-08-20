/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    domains: ['localhost'],
    path: '/',
    loader: "custom",
  },
}

module.exports = nextConfig
