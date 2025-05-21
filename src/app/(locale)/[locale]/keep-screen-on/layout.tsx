import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const i18n = await generateMetadataWithI18n(params)

  return {
    title: i18n._(msg`Keep Screen On - A page to prevent your device from sleeping`),
    description: i18n._(
      msg`Keep your device screen always on with a simple click. Say goodbye to interruptions caused by screen timeouts. Keep Screen On offers an easy solution to keep your device alert, ensuring uninterrupted usage while reading, watching, or multitasking. Experience a hassle-free browsing experience with our convenient tool. Keep your screen on and your device engaged with Keep Screen On - the perfect companion for extended screen time.`,
    ),
    icons: ['/keep-screen-on/icon.svg'],
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
