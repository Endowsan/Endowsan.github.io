/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS ? "/endow7.com" : "",
  assetPrefix: '/'
}

module.exports = nextConfig
