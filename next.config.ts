import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  eslint: {
    dirs: ['src'],
  },
}

export default nextConfig
