"use client";
import { useHydrated } from "@debbl/ahooks";
import { useLingui } from "@lingui/react/macro";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Link,
  Skeleton,
} from "@nextui-org/react";
import { motion } from "motion/react";
import { useI18nHelper } from "~/hooks/useI18nHelper";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const MotionCard = motion.create(Card);

export function Showcase() {
  const { getRealPathname } = useI18nHelper();
  const { t } = useLingui();

  const LIST = [
    {
      title: "Code Diff",
      description: t`Code Diff is a tool that allows you to compare two code snippets side by side.`,
      link: "code-diff",
      icon: "./code-diff/icon.svg",
    },
    {
      title: "Battery",
      description: t`Get battery information`,
      link: "battery",
      icon: "./battery/icon.svg",
    },
    {
      title: "Base64",
      description: t`A tool that transforms text to base64 and vice versa`,
      link: "base64",
      icon: "./base64/icon.svg",
    },
    {
      title: "MiWiFi SN",
      description: t`MiWiFi SSH Password Calculator`,
      link: "miwifi-sn",
      icon: "./miwifi-sn/icon.svg",
    },
    {
      title: "Generate Query",
      description: t`Generate Query`,
      link: "generate-query",
      icon: "./generate-query/icon.svg",
    },
    {
      title: "Dice Roller",
      description: t`Dice Roller`,
      link: "dice-roller",
      icon: "./dice-roller/icon.svg",
    },
    {
      title: "Pin Yin",
      description: t`Convert chinese to pinyin`,
      link: "pinyin",
      icon: "./pinyin/icon.svg",
    },
  ].map((i) => ({
    ...i,
    href: getRealPathname(i.link),
  }));

  const { isHydrated } = useHydrated();

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
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
                <Link isExternal href={item.href} showAnchorIcon>
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
