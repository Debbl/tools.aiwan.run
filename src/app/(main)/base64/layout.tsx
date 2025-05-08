import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'base64',
  description: 'encode and decode base64',
  icons: ['/base64/icon.svg'],
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
