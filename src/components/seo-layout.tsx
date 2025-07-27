'use client'
import { useLingui } from '@lingui/react'
import Markdown from 'react-markdown'
import { useIsHydrated } from '~/hooks/use-is-hydrated'

export function SEOLayout({
  className,
  markdownEn,
  markdownZh,
}: {
  className?: string
  markdownEn: string
  markdownZh: string
}) {
  const { i18n } = useLingui()
  const isHydrated = useIsHydrated()

  if (isHydrated) return null

  return (
    <div className={cn('prose', className)}>
      <Markdown>{i18n.locale === 'en' ? markdownEn : markdownZh}</Markdown>
    </div>
  )
}
