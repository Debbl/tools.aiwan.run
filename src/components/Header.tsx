"use client";
import { useGitHubInfo } from "@debbl/ahooks";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useI18nHelper } from "~/hooks/useI18nHelper";
import { Icon } from "~/icons";

export default function Header() {
  const { switchLocale } = useI18nHelper();
  const { GitHubInfo } = useGitHubInfo(
    "https://github.com/Debbl/tools.aiwan.run/",
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="relative flex justify-center py-4 text-center text-3xl font-medium"
    >
      <h1>Magic Tools</h1>

      <div className="absolute right-4 flex items-center gap-x-2">
        <Button size="sm" variant="ghost" isIconOnly onClick={switchLocale}>
          <Icon icon="FlowbiteLanguageOutline" />
        </Button>
        <GitHubInfo className="size-6" />
      </div>
    </motion.header>
  );
}
