import { setI18n } from '@lingui/react/server'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Footer } from '~/components/footer'
import { getWebsite } from '~/constants'
import { getI18nInstance } from '~/i18n'
import { LinguiClientProvider } from '~/providers/lingui-client-provider'
import { Providers } from '../providers'
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadataWithLang({ lang = 'en' }: { lang: string }): Promise<Metadata> {
  const website = getWebsite(lang)
  const baseUrl = website.domain + (lang === 'zh' ? '/zh' : '')

  const metadata: Metadata = {
    title: website.title,
    description: website.description,
    keywords: website.keywords,
    appleWebApp: {
      title: website.title,
    },
    metadataBase: new URL(website.domain),
    alternates: {
      canonical: baseUrl,
      languages: {
        en: '/',
        zh: '/zh',
      },
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
    category: website.category,
    creator: website.authors[0].name,
    publisher: website.authors[0].name,
    twitter: {
      creator: 'Debbl66',
    },
    openGraph: {
      url: website.domain,
      title: website.title,
      description: website.description,
      siteName: website.title,
      type: 'website',
      emails: [website.email],
      images: [
        {
          alt: website.title,
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          type: 'image/png',
        },
      ],
    },
  }

  return metadata
}

export async function getRootLayout(lang: string) {
  async function RootLayout({ children }: { children: ReactNode }) {
    const i18n = await getI18nInstance(lang)
    setI18n(i18n)

    const website = getWebsite(lang)

    return (
      <html lang={lang} suppressHydrationWarning>
        <head>
          <script
            defer
            src='https://umami.aiwan.run/script.js'
            data-website-id='5797cc0c-aef5-451e-b650-bd96e54f49c9'
            data-domains='tools.aiwan.run'
          />
          <script
            type='application/ld+json'
            // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
            dangerouslySetInnerHTML={{ __html: JSON.stringify(website.structuredData) }}
          />
        </head>
        <body>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <LinguiClientProvider initialLocale={lang} initialMessages={i18n.messages}>
              <Toaster richColors />
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
