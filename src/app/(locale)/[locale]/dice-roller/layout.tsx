import { msg } from '@lingui/core/macro'
import { getLangUrl } from '~/i18n/get-lang-url'
import Provider from './provider'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)
  const locale = getLangUrl(i18n.locale)

  return {
    title: i18n._(msg`Dice Roller`),
    description: i18n._(msg`roll a dice`),
    alternates: {
      canonical: `${locale}/dice-roller`,
      languages: {
        en: `/dice-roller`,
        zh: `/zh/dice-roller`,
      },
    },
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>
}
