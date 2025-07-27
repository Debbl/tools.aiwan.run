import { generateMetadataWithLang, getRootLayout } from '../_layout'
import type { ReactNode } from 'react'

export function generateMetadata() {
  return generateMetadataWithLang({ lang: 'en' })
}

export default async function Layout({ children }: { children: ReactNode }) {
  const RootLayout = await getRootLayout('en')

  return <RootLayout>{children}</RootLayout>
}
