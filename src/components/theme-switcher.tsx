'use client'
import { useHydrated } from '@debbl/ahooks'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
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
    <Popover placement='right' isOpen={isOpen} onOpenChange={setIsOpen} shouldCloseOnBlur>
      <PopoverTrigger>
        <Button size='sm' variant='light' isIconOnly>
          <Icon icon={theme === 'dark' ? 'Sun' : 'Moon'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex flex-col px-1 py-2'>
          <Button
            size='sm'
            variant='light'
            className='justify-start'
            onPress={() => handleThemeChange('system')}
            startContent={<Icon icon='MajesticonsDesktopComputerLine' />}
          >
            System
          </Button>
          <Button
            size='sm'
            variant='light'
            className='justify-start'
            onPress={() => handleThemeChange('light')}
            startContent={<Icon icon='Sun' />}
          >
            Light
          </Button>
          <Button
            size='sm'
            variant='light'
            className='justify-start'
            onPress={() => handleThemeChange('dark')}
            startContent={<Icon icon='Moon' />}
          >
            Dark
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
