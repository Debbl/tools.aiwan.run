import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'MiWiFi SN',
  description: 'MiWiFi SN',
  icons: ['/miwifi-sn/icon.svg'],
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
