'use client'
import { useHydrated } from '@debbl/ahooks'
import { Button, Popover } from '@heroui/react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Icon } from '~/icons'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const { isHydrated } = useHydrated()

  if (!isHydrated) return null

  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    setIsOpen(false)
  }

  return (
    <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Popover.Trigger>
        <Button size='sm' variant='ghost' isIconOnly>
          <Icon icon={theme === 'dark' ? 'Sun' : 'Moon'} />
        </Button>
      </Popover.Trigger>
      <Popover.Content placement='right'>
        <div className='flex flex-col px-1 py-2'>
          <Button
            size='sm'
            variant='ghost'
            className='justify-start'
            onPress={() => handleThemeChange('system')}
          >
            <Icon icon='MajesticonsDesktopComputerLine' />
            System
          </Button>
          <Button
            size='sm'
            variant='ghost'
            className='justify-start'
            onPress={() => handleThemeChange('light')}
          >
            <Icon icon='Sun' />
            Light
          </Button>
          <Button
            size='sm'
            variant='ghost'
            className='justify-start'
            onPress={() => handleThemeChange('dark')}
          >
            <Icon icon='Moon' />
            Dark
          </Button>
        </div>
      </Popover.Content>
    </Popover>
  )
}
