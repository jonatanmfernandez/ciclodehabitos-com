/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  outputFileTracingRoot: process.env.VERCEL ? undefined : process.cwd(),
  // El endpoint del newsletter lee content/blog con fs en runtime; sin esto,
  // los .mdx no se incluyen en el bundle serverless de Vercel.
  outputFileTracingIncludes: {
    '/api/newsletter/weekly': ['./content/blog/**/*'],
    '/blog/[slug]': ['./content/blog/**/*'],
  },
  allowedDevOrigins: ["192.168.1.37"],
  // guia.ciclodehabitos.com (links de Pinterest) sirve la landing del lead magnet.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'guia.ciclodehabitos.com' }],
          destination: '/landing',
        },
      ],
    }
  },
}

export default nextConfig