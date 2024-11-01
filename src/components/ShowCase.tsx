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
      battery: "Get battery information",
      base64: "a tool that transforms text to base64 and vice versa",
    },
    zh: {
      codeDiff: "代码对比是一个工具，允许您将两个代码片段并排进行比较。",
      battery: "获取电池信息",
      base64: "一个将文本转换为base64的工具",
    },
  });

  const LIST = [
    {
      title: "Code Diff",
      description: t("codeDiff"),
      link: "code-diff",
      icon: "./code-diff/icon.svg",
    },
    {
      title: "Battery",
      description: t("battery"),
      link: "battery",
      icon: "./battery/icon.svg",
    },
    {
      title: "Base64",
      description: t("base64"),
      link: "base64",
      icon: "./base64/icon.svg",
    },
  ];

  const { isHydrated } = useHydrated();

  return (
    <div className="grid grid-cols-2 gap-4">
      {LIST.map((item) => (
        <MotionCard
          key={item.title}
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
                alt={`${item.title} logo`}
                height={40}
                radius="sm"
                src={item.icon}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-xl">Code Diff</p>
                <Link isExternal href={item.link} showAnchorIcon>
                  {item.link}
                </Link>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{item.description}</p>
            </CardBody>
            <Divider />
          </Skeleton>
        </MotionCard>
      ))}
    </div>
  );
}
