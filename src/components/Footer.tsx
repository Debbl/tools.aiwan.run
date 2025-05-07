import { Image } from "@heroui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Footer() {
  return (
    <div className="bg-background/50 flex items-center justify-center gap-x-4 pt-20 pb-16 text-gray-300 backdrop-blur-xs hover:text-gray-500">
      <a href="https://tools.aiwan.run">
        <Image src="/favicon.ico" alt="logo" width={16} height={16} />
      </a>

      <a
        href="https://github.com/Debbl/tools.aiwan.run"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </a>

      <a href="https://aiwan.run" target="_blank" rel="noreferrer noopener">
        About
      </a>

      <ThemeSwitcher />
    </div>
  );
}
