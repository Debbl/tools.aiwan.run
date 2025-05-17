import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'base64 to png',
  description: 'convert base64 to png',
  icons: ['/base64-to-png/icon.svg'],
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
