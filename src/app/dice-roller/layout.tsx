import Provider from "./Provider";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dice Roller",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
