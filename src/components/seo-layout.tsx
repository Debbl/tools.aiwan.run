'use client'
import { useLingui } from '@lingui/react'
import Markdown from 'react-markdown'

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

  return (
    <div className={cn('prose mb-6', className)}>
      <Markdown>{i18n.locale === 'en' ? markdownEn : markdownZh}</Markdown>
    </div>
  )
}
