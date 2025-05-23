import { msg } from '@lingui/core/macro'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`code-diff`),
    description: i18n._(msg`a code-diff tool for comparing code`),
  }
}

export default function CodeDiffLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
