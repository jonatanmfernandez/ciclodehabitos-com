/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure Turbopack resolves the project root correctly when Next is
  // invoked from tools or workspaces that change the CWD. Set to this
  // repository directory (the directory containing this config file).
  experimental: {
    turbopack: {
      // `root` must be an absolute path. Using `resolve(__dirname, '.')`
      // keeps the config ESM-compatible and stable across platforms.
      root: resolve(__dirname, '.'),
    },
  },
}

export default nextConfig
