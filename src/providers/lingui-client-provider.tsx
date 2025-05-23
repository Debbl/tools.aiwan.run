'use client'
import { setupI18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useState } from 'react'
import type { Messages } from '@lingui/core'

export function LinguiClientProvider({
  children,
  initialLocale,
  initialMessages,
}: {
  children: React.ReactNode
  initialLocale: string
  initialMessages: Messages
}) {
  const [i18n] = useState(() => {
    return setupI18n({
      locale: initialLocale,
      messages: { [initialLocale]: initialMessages },
    })
  })

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
