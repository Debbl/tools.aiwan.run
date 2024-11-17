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
      miwifiSn: "MiWiFi SSH Password Calculator",
      generateQuery: "Generate Query",
      diceRoller: "Dice Roller",
    },
    zh: {
      codeDiff: "代码对比是一个工具，允许您将两个代码片段并排进行比较。",
      battery: "获取电池信息",
      base64: "一个将文本转换为base64的工具",
      miwifiSn: "小米路由器SSH密码计算器",
      generateQuery: "生成查询",
      diceRoller: "掷骰子",
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
    {
      title: "MiWiFi SN",
      description: t("miwifiSn"),
      link: "miwifi-sn",
      icon: "./miwifi-sn/icon.svg",
    },
    {
      title: "Generate Query",
      description: t("generateQuery"),
      link: "generate-query",
      icon: "./generate-query/icon.svg",
    },
    {
      title: "Dice Roller",
      description: t("diceRoller"),
      link: "dice-roller",
      icon: "./dice-roller/icon.svg",
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
                isBlurred
                classNames={{
                  img: "rounded-none",
                }}
                alt={`${item.title} logo`}
                height={40}
                src={item.icon}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-xl">{item.title}</p>
                <Link isExternal href={item.link} showAnchorIcon>
                  {item.link}
                </Link>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{item.description}</p>
            </CardBody>
          </Skeleton>
        </MotionCard>
      ))}
    </div>
  );
}
