import { useLingui } from '@lingui/react/macro'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

export function Link({
  href: _href,
  ...props
}: ComponentProps<typeof NextLink>) {
  const { i18n } = useLingui()

  let href = _href.toString()
  const locale = i18n.locale
  if (locale !== 'en') href = `/${locale}${href}`

  return <NextLink href={href} {...props} />
}
