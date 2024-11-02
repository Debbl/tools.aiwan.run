"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "twl";
import { Icon } from "~/icons";

export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <motion.button
      type="button"
      aria-label="Copy button"
      data-value={text}
      className={className}
      onClick={handleCopy}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon
        icon={isCopied ? "CarbonCheckmark" : "Copy"}
        className={cn(isCopied && "text-green-500")}
      />
    </motion.button>
  );
}
