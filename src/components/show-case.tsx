'use client'
import { useHydrated } from '@debbl/ahooks'
import { useLingui } from '@lingui/react/macro'
import { ExternalLinkIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { Skeleton } from '~/components/ui/skeleton'
import { useI18nHelper } from '~/hooks/use-i18n-helper'

const MotionCard = motion.create(Card)

export function Showcase() {
  const { getRealPathname } = useI18nHelper()
  const { t } = useLingui()

  const LIST = [
    {
      title: 'Code Diff',
      description: t`Code Diff is a tool that allows you to compare two code snippets side by side.`,
      link: 'code-diff',
      icon: './code-diff/icon.svg',
    },
    {
      title: 'Battery',
      description: t`Get battery information`,
      link: 'battery',
      icon: './battery/icon.svg',
    },
    {
      title: 'Base64',
      description: t`A tool that transforms text to base64 and vice versa`,
      link: 'base64',
      icon: './base64/icon.svg',
    },
    {
      title: 'MiWiFi SN',
      description: t`MiWiFi SSH Password Calculator`,
      link: 'miwifi-sn',
      icon: './miwifi-sn/icon.svg',
    },
    {
      title: 'Generate Query',
      description: t`Generate Query`,
      link: 'generate-query',
      icon: './generate-query/icon.svg',
    },
    {
      title: 'Random Name',
      description: t`Generate random readable names from word lists`,
      link: 'random-name',
      icon: './random-name/icon.svg',
    },
    {
      title: 'Dice Roller',
      description: t`Dice Roller`,
      link: 'dice-roller',
      icon: './dice-roller/icon.svg',
    },
    {
      title: 'Pin Yin',
      description: t`Convert chinese to pinyin`,
      link: 'pinyin',
      icon: './pinyin/icon.svg',
    },
    {
      title: 'Base64 to png',
      description: t`transform base64 data to png`,
      link: 'base64-to-png',
      icon: './base64-to-png/icon.svg',
    },
    {
      title: 'Keep Screen On',
      description: t`Keep your device screen always on`,
      link: 'keep-screen-on',
      icon: './keep-screen-on/icon.svg',
    },
    {
      title: 'VSCode Extension Download',
      description: t`Download VSCode extensions from marketplace links`,
      link: 'vscode-extension-download',
      icon: './vscode-extension-download/icon.svg',
    },
    {
      title: 'Mnemonic Generator',
      description: t`Generate and validate BIP-39 mnemonic phrases locally in your browser`,
      link: 'mnemonic',
      icon: './mnemonic/icon.svg',
    },
  ].map((i) => ({
    ...i,
    href: getRealPathname(i.link),
  }))

  const { isHydrated } = useHydrated()

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
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
          className='max-w-95'
        >
          {isHydrated ? (
            <>
              <CardHeader className='flex grid-cols-none flex-row gap-3'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`${item.title} logo`}
                  className='size-10 rounded-none'
                  src={item.icon}
                />
                <div className='flex flex-col'>
                  <p className='text-xl'>{item.title}</p>
                  <Link
                    target='_blank'
                    className='text-primary inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline'
                    href={item.href}
                  >
                    {item.link}
                    <ExternalLinkIcon className='size-3.5' />
                  </Link>
                </div>
              </CardHeader>
              <Separator />
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </>
          ) : (
            <CardContent className='space-y-3'>
              <Skeleton className='h-10 w-3/4' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-2/3' />
            </CardContent>
          )}
        </MotionCard>
      ))}
    </div>
  )
}
