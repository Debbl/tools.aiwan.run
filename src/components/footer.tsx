'use client'
import { Image } from '@heroui/react'
import { useI18nHelper } from '~/hooks/use-i18n-helper'
import { Icon } from '~/icons'
import { Link } from './link'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'

export function Footer() {
  const { switchLocale } = useI18nHelper()

  return (
    <div className='bg-background/50 flex items-center justify-center gap-x-4 border-t pt-20 pb-16 text-gray-300 backdrop-blur-xs hover:text-gray-500'>
      <Link href='/'>
        <Image src='/favicon.ico' alt='logo' width={16} height={16} />
      </Link>

      <a
        href='https://github.com/Debbl/tools.aiwan.run'
        target='_blank'
        rel='noreferrer noopener'
      >
        GitHub
      </a>

      <a href='https://aiwan.run' target='_blank' rel='noreferrer noopener'>
        About
      </a>

      <ThemeSwitcher />

      <Button size='sm' variant='ghost' onClick={switchLocale}>
        <Icon icon='FlowbiteLanguageOutline' />
      </Button>
    </div>
  )
}
