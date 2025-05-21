import { msg } from '@lingui/core/macro'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`battery`),
    description: i18n._(msg`get battery information`),
  }
}

export default function BatteryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
