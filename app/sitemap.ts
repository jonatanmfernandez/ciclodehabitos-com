import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ciclodehabitos.com'

  const routes = [
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

  return [...routes]
}
