import { msg } from '@lingui/core/macro'
import { generateMetadataWithI18n } from '~/i18n'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`base64`),
    description: i18n._(msg`encode and decode base64`),
    icons: ['/base64/icon.svg'],
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
