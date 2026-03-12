import { baseUrl } from '~/constants'
import { buildToolSitemap } from './sitemap-shared'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildToolSitemap(baseUrl)
}
