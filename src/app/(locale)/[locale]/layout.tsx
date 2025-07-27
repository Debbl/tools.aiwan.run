import { locales, sourceLocale } from '~/i18n'
import { generateMetadataWithLang, getRootLayout } from '../../_layout'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params).locale

  return generateMetadataWithLang({ lang: locale })
}

export async function generateStaticParams() {
  return locales.filter((l) => l !== sourceLocale).map((locale) => ({ locale }))
}

interface IProps {
  params: Promise<{
    locale: string
  }>
  children: React.ReactNode
}

export default async function Layout({ params, children }: IProps) {
  const { locale } = await params
  const RootLayout = await getRootLayout(locale)

  return <RootLayout>{children}</RootLayout>
}
