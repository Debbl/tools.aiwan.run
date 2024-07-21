"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "~/hooks/useTranslations";
import { FlowbiteLanguageOutline } from "~/icons";

export default function Header() {
  const { locale, setLocale } = useTranslations();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "circInOut" }}
      className="relative flex justify-center py-4 text-center text-3xl font-medium"
    >
      <h1>Magic Tools</h1>

      <Button
        className="absolute right-4"
        variant="ghost"
        isIconOnly
        onClick={() => {
          setLocale(locale === "en" ? "zh" : "en");
        }}
      >
        <FlowbiteLanguageOutline />
      </Button>
    </motion.header>
  );
}
