/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.yapily.com',
            port: '',
            pathname: '/image/**',
          },
        ],
      },
}

module.exports = nextConfig
