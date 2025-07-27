import { msg } from '@lingui/core/macro'
import { getLangUrl } from '~/i18n/get-lang-url'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)
  const locale = getLangUrl(i18n.locale)

  return {
    title: i18n._(msg`battery`),
    description: i18n._(msg`get battery information`),
    alternates: {
      canonical: `${locale}/battery`,
      languages: {
        en: `/battery`,
        zh: `/zh/battery`,
      },
    },
  }
}

export default function BatteryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
