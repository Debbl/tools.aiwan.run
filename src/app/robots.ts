import { baseUrl } from '~/constants'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/zh/sitemap.xml`],
  }
}
