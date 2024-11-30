import { locales } from "~/i18n";
import { getRootLayout } from "../../_layout";

export { metadata } from "../../_layout";

interface Props {
  params: Promise<{
    lang: string;
  }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function Layout({ params, children }: Props) {
  const { lang } = await params;
  const RootLayout = getRootLayout(lang);

  return <RootLayout>{children}</RootLayout>;
}
