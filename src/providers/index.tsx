import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="h-full min-h-screen">{children}</HeroUIProvider>
  );
}
