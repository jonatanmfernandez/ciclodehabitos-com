import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ciclodehabitos.com'

  const staticRoutes = [
    '',
    '/blog',
    '/directorio-ia',
    '/landing',
    '/about',
    '/contact',
    '/privacidad',
    '/cookies',
    '/terminos',
    '/tienda',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const posts = getSortedPostsData()
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}

