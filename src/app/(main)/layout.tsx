import { getRootLayout } from '../_layout'
import type { ReactNode } from 'react'

export { metadata } from '../_layout'

export default async function Layout({ children }: { children: ReactNode }) {
  const RootLayout = await getRootLayout('en')

  return <RootLayout>{children}</RootLayout>
}
