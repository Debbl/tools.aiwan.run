import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'code-diff',
  description: 'a code-diff tool for comparing code',
}

export default function CodeDiffLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
