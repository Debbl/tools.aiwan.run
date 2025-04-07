import type { Metadata } from "next/types";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pinyin",
  description: "Convert chinese to pinyin",
  icons: "/pinyin/icon.svg",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
