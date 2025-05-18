import { HeroUIProvider } from '@heroui/react'
import { domMax, LazyMotion } from 'motion/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className='min-h-screen'>
      <LazyMotion features={domMax}>{children}</LazyMotion>
    </HeroUIProvider>
  )
}
