import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Provider>
        <NextUIProvider className="h-full">{children}</NextUIProvider>
      </Provider>
    </ThemeProvider>
  );
}
