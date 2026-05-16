import { buildToolSitemap } from '~/app/sitemap-shared'
import { baseUrl as baseUrlWithoutLocale } from '~/constants'
import { locales, sourceLocale } from '~/i18n'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return locales.filter((l) => l !== sourceLocale).map((locale) => ({ locale }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = `${baseUrlWithoutLocale}/zh`

  return buildToolSitemap(baseUrl)
}
