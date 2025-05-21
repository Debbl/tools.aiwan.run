import { locales, sourceLocale } from '~/i18n'
import { getRootLayout } from '../../_layout'

export { metadata } from '../../_layout'

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
