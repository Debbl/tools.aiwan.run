import { msg } from '@lingui/core/macro'
import { generateMetadataWithI18n } from '~/i18n'
import { getLangUrl } from '~/i18n/get-lang-url'
import { SEO } from './seo'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)
  const locale = getLangUrl(i18n.locale)

  return {
    title: i18n._(msg`Random Name`),
    description: i18n._(msg`Generate random readable names from word lists`),
    icons: ['/random-name/icon.svg'],
    alternates: {
      canonical: `${locale}/random-name`,
      languages: {
        en: '/random-name',
        zh: '/zh/random-name',
      },
    },
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SEO className='mx-auto mt-10 max-w-2xl px-4' />
    </>
  )
}
