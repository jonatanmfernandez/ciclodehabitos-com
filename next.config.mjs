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
  },
  allowedDevOrigins: ["192.168.1.37"],
}

export default nextConfig