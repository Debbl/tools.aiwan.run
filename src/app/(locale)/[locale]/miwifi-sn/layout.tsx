import { msg } from '@lingui/core/macro'
import { getLangUrl } from '~/i18n/get-lang-url'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)
  const locale = getLangUrl(i18n.locale)

  return {
    title: i18n._(msg`MiWiFi SN`),
    description: i18n._(msg`MiWiFi SN`),
    icons: ['/miwifi-sn/icon.svg'],
    alternates: {
      canonical: `${locale}/miwifi-sn`,
      languages: {
        en: `/miwifi-sn`,
        zh: `/zh/miwifi-sn`,
      },
    },
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
