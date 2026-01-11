/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
  },
  outputFileTracingRoot: process.env.VERCEL ? undefined : process.cwd(),
  allowedDevOrigins: ["192.168.1.37"],
}

export default nextConfig