import { setI18n } from "@lingui/react/server";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { getI18nInstance, locales } from "~/i18n";
import { LinguiClientProvider } from "~/providers/LinguiClientProvider";
import { Providers } from "../../../providers";
import "../../(main)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export { metadata } from "../../(main)/layout";

interface Props {
  params: Promise<{
    lang: string;
  }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ params, children }: Props) {
  const { lang } = await params;
  const i18n = getI18nInstance(lang);
  setI18n(i18n);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Toaster />
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={i18n.messages}
        >
          <Providers>{children}</Providers>
        </LinguiClientProvider>
      </body>
    </html>
  );
}
