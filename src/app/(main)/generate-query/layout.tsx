import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'generate query',
  description: 'generate query',
  icons: ['/generate-query/icon.svg'],
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
