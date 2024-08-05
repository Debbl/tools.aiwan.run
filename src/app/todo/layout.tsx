import type { Metadata } from "next/types";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "todo",
  description: "a local-first todo app",
};

export default function TodoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
