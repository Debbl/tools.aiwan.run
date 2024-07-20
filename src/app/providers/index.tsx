import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "jotai";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <NextUIProvider className="h-full">{children}</NextUIProvider>
    </Provider>
  );
}
