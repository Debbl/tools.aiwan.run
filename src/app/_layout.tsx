import { setI18n } from '@lingui/react/server'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { Footer } from '~/components/footer'
import { getI18nInstance } from '~/i18n'
import { LinguiClientProvider } from '~/providers/lingui-clien-provider'
import { Providers } from '../providers'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Magic tools',
  description: 'a magic tools for developers',
  appleWebApp: {
    title: 'Magic Tools',
  },
  icons: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '96x96',
      type: 'image/png',
      url: '/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/apple-icon.png',
    },
  ],
}

export function getRootLayout(lang: string) {
  function RootLayout({ children }: { children: ReactNode }) {
    const i18n = getI18nInstance(lang)
    setI18n(i18n)

    return (
      <html lang={lang} suppressHydrationWarning>
        <head>
          <script
            defer
            src='https://umami.aiwan.run/script.js'
            data-website-id='5797cc0c-aef5-451e-b650-bd96e54f49c9'
            data-domains='tools.aiwan.run'
          />
        </head>
        <body>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <LinguiClientProvider initialLocale={lang} initialMessages={i18n.messages}>
              <Toaster />
              <Providers>{children}</Providers>
              <Footer />
            </LinguiClientProvider>
          </ThemeProvider>
        </body>
      </html>
    )
  }
  return RootLayout
}
