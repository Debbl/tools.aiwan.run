import linguiConfig from '../../lingui.config'
import 'server-only'
import type { Messages } from '@lingui/core'

export const { locales, sourceLocale } = linguiConfig

export type SupportedLocales = string

export async function loadCatalog(locale: SupportedLocales): Promise<{
  [k: string]: Messages
}> {
  const { messages } = await import(`../locales/${locale}/messages.po`)
  return {
    [locale]: messages,
  }
}
