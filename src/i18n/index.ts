import { setupI18n } from '@lingui/core'
import linguiConfig from '../../lingui.config'
import { loadCatalog } from './load'
import type { I18n } from '@lingui/core'

export const { locales, sourceLocale } = linguiConfig

export type SupportedLocales = string

type AllI18nInstances = { [K in SupportedLocales]: I18n }

export async function getAllI18nInstances(): Promise<AllI18nInstances> {
  const catalogs = await Promise.all(locales.map(loadCatalog))

  return locales.reduce((acc, locale) => {
    const allMessages = catalogs.reduce((acc, oneCatalog) => {
      return { ...acc, ...oneCatalog }
    }, {})

    const messages = allMessages[locale] ?? {}
    const i18n = setupI18n({
      locale,
      messages: { [locale]: messages },
    })

    return { ...acc, [locale]: i18n }
  }, {})
}

export async function getI18nInstance(locale?: SupportedLocales): Promise<I18n> {
  const allI18nInstances = await getAllI18nInstances()

  const realLocale = (locale ?? sourceLocale) as SupportedLocales

  if (!allI18nInstances[realLocale]) {
    console.warn(`No i18n instance found for locale "${realLocale}"`)
  }
  return allI18nInstances[realLocale]!
}

export async function generateMetadataWithI18n(params: Promise<{ locale: string }>) {
  const { locale } = await params

  const i18n = await getI18nInstance(locale)

  return i18n
}
