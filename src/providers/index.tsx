import { domMax, LazyMotion } from 'motion/react'
import { SerwistProvider } from './serwist-provider'

// eslint-disable-next-line n/prefer-global/process
const isDev = process.env.NODE_ENV === 'development'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SerwistProvider swUrl='/sw.js' disable={isDev}>
      <LazyMotion features={domMax}>{children}</LazyMotion>
    </SerwistProvider>
  )
}
