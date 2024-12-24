"use client";
import { Button } from "@nextui-org/react";
import { motion } from "motion/react";
import { useI18nHelper } from "~/hooks/useI18nHelper";
import { Icon } from "~/icons";

export function Header() {
  const { switchLocale } = useI18nHelper();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="relative flex justify-center py-4 text-center text-3xl font-medium"
    >
      <h1>Magic Tools</h1>

      <div className="absolute right-4 flex items-center gap-x-2">
        <Button size="sm" variant="ghost" isIconOnly onPress={switchLocale}>
          <Icon icon="FlowbiteLanguageOutline" />
        </Button>
      </div>
    </motion.header>
  );
}
