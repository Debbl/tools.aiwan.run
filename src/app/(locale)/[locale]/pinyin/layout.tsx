import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`Pinyin`),
    description: i18n._(msg`Convert chinese to pinyin`),
    icons: '/pinyin/icon.svg',
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
