import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keep Screen On - A page to prevent your device from sleeping',
  description:
    'Keep your device screen always on with a simple click. Say goodbye to interruptions caused by screen timeouts. Keep Screen On offers an easy solution to keep your device alert, ensuring uninterrupted usage while reading, watching, or multitasking. Experience a hassle-free browsing experience with our convenient tool. Keep your screen on and your device engaged with Keep Screen On - the perfect companion for extended screen time.',
  icons: ['/keep-screen-on/icon.svg'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
