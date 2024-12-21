import { setI18n } from "@lingui/react/server";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { getI18nInstance } from "~/i18n";
import { LinguiClientProvider } from "~/providers/LinguiClientProvider";
import { Providers } from "../providers";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic tools",
  description: "a magic tools for developers",
  icons: ["/favicon.ico"],
};

export function getRootLayout(lang: string) {
  function RootLayout({ children }: { children: ReactNode }) {
    const i18n = getI18nInstance(lang);
    setI18n(i18n);

    return (
      <html lang={lang} suppressHydrationWarning>
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
  return RootLayout;
}
