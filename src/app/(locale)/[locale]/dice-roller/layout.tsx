import Provider from './provider'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`Dice Roller`),
    description: i18n._(msg`roll a dice`),
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>
}
