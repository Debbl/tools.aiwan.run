'use client'
import { useHydrated } from '@debbl/ahooks'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Icon } from '~/icons'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const icon = useMemo(() => {
    const themeIcons = {
      dark: 'Moon',
      light: 'Sun',
      system: 'MajesticonsDesktopComputerLine',
    } as const

    return themeIcons[theme as keyof typeof themeIcons] ?? themeIcons.system
  }, [theme])

  const { isHydrated } = useHydrated()

  if (!isHydrated) return null

  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger
        render={(props) => (
          <Button {...props} size='icon-sm' variant='ghost'>
            <Icon icon={icon} />
          </Button>
        )}
      />
      <PopoverContent side='right' align='end' className='w-fit p-0'>
        <div className='flex flex-col px-1 py-2'>
          <Button
            size='sm'
            variant='ghost'
            className='justify-start'
            onClick={() => handleThemeChange('system')}
          >
            <Icon icon='MajesticonsDesktopComputerLine' />
            System
          </Button>
          <Button
            size='sm'
            variant='ghost'
            className='justify-start'
            onClick={() => handleThemeChange('light')}
          >
            <Icon icon='Sun' />
            Light
          </Button>
          <Button
            size='sm'
            variant='ghost'
            className='justify-start'
            onClick={() => handleThemeChange('dark')}
          >
            <Icon icon='Moon' />
            Dark
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
