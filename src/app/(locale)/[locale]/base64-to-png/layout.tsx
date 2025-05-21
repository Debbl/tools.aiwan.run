import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`base64 to png`),
    description: i18n._(msg`convert base64 to png`),
    icons: ['/base64-to-png/icon.svg'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
