/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  }
}

module.exports = nextConfig
