"use client";
import { useHydrated } from "@debbl/ahooks";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Link,
  Skeleton,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "~/hooks/useTranslations";

const MotionCard = motion(Card);

export default function Showcase() {
  const { t } = useTranslations({
    en: {
      codeDiff:
        "Code Diff is a tool that allows you to compare two code snippets side by side.",
    },
    zh: {
      codeDiff: "代码对比是一个工具，允许您将两个代码片段并排进行比较。",
    },
  });

  const { isHydrated } = useHydrated();

  return (
    <MotionCard
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 80,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      whileHover={{ scale: 1.05 }}
      className="max-w-[380px]"
    >
      <Skeleton isLoaded={isHydrated}>
        <CardHeader className="flex gap-3">
          <Image
            alt="code-diff logo"
            height={40}
            radius="sm"
            src="./code-diff/icon.svg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-xl">Code Diff</p>
            <Link isExternal href="/code-diff" showAnchorIcon>
              https://tools.aiwan.run/code-diff
            </Link>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{t("codeDiff")}</p>
        </CardBody>
        <Divider />
      </Skeleton>
    </MotionCard>
  );
}
