import { msg } from '@lingui/core/macro'
import { getLangUrl } from '~/i18n/get-lang-url'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)
  const locale = getLangUrl(i18n.locale)

  return {
    title: i18n._(msg`code-diff`),
    description: i18n._(msg`a code-diff tool for comparing code`),
    alternates: {
      canonical: `${locale}/code-diff`,
      languages: {
        en: `/code-diff`,
        zh: `/zh/code-diff`,
      },
    },
  }
}

export default function CodeDiffLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
