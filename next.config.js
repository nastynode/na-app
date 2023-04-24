/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendUrl: "https://localhost:5001/"
  }
}

module.exports = nextConfig
