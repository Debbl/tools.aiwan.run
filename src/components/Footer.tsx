import { Image } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Footer() {
  return (
    <div className="flex items-center justify-center gap-x-4 bg-background/50 pb-16 pt-20 text-gray-300 backdrop-blur-sm hover:text-gray-500">
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
