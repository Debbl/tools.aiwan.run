import type { MetadataRoute } from 'next'

export const TOOL_SITEMAP_PATHS = [
  'base64',
  'base64-to-png',
  'battery',
  'code-diff',
  'dice-roller',
  'generate-query',
  'keep-screen-on',
  'miwifi-sn',
  'mnemonic',
  'random-name',
  'pinyin',
  'vscode-extension-download',
] as const

export function buildToolSitemap(baseUrl: string): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...TOOL_SITEMAP_PATHS.map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    })),
  ]
}
