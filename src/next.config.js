/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? "/endow7.com" : "",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/',
}

module.exports = nextConfig
