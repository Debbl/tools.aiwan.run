import type { Metadata } from "next/types";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "battery",
  description: "get battery information",
  icons: ["battery/icon.svg"],
};

export default function BatteryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
