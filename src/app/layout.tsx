import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "../providers";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic tools",
  description: "a magic tools for developers",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
