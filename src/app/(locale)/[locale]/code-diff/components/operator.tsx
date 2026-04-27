'use client'
import { useHydrated } from '@debbl/ahooks'
import { useLingui } from '@lingui/react/macro'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { useI18nHelper } from '~/hooks/use-i18n-helper'
import { useMainStore } from '../hooks/use-main-store'
import { FlowbiteLanguageOutline, RiResetRightFill } from '../icons'
import type { Monaco, Theme } from '@monaco-editor/react'

interface MonacoModel {
  setValue: (value: string) => void
}

export default function Operator({ monaco }: { monaco?: Monaco }) {
  const {
    language,
    languages,
    theme: editorTheme,
    setTheme: setEditorTheme,
    renderSideBySide,
    setLanguage,
    setRenderSideBySide,
  } = useMainStore()

  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(editorTheme === 'light' ? 'light' : 'dark')
  }, [editorTheme, setTheme])

  const resetMonacoValue = () => {
    const models = monaco?.editor.getModels() as MonacoModel[] | undefined

    models?.forEach((model) => {
      model.setValue('')
    })
  }

  const { isHydrated } = useHydrated()

  const { t } = useLingui()
  const { switchLocale } = useI18nHelper()

  const handleSetTheme = (value: string | null) => {
    if (!value) return
    const theme = value as Theme

    setEditorTheme(theme)
  }

  if (!isHydrated) return null

  return (
    <div className='flex items-center justify-center gap-x-4 py-4'>
      <label className='flex max-w-xs items-center gap-2 text-sm'>
        <span>{t`Select Language`}</span>
        <Select
          value={language}
          onValueChange={(value) => {
            if (value) setLanguage(value)
          }}
        >
          <SelectTrigger size='sm' className='min-w-36'>
            <SelectValue placeholder={t`Select Language`} />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.id} value={lang.id}>
                {lang.id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className='flex max-w-52 items-center gap-2 text-sm'>
        <span className='text-nowrap'>{t`Select Theme`}</span>
        <Select value={editorTheme} onValueChange={handleSetTheme}>
          <SelectTrigger size='sm' className='min-w-28'>
            <SelectValue placeholder={t`Select Theme`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>light</SelectItem>
            <SelectItem value='vs-dark'>vs-dark</SelectItem>
          </SelectContent>
        </Select>
      </label>

      <label className='flex items-center gap-2 text-sm'>
        <Checkbox
          checked={renderSideBySide}
          onCheckedChange={setRenderSideBySide}
        />
        <span>{t`Side By Side`}</span>
      </label>

      <Button size='icon-sm' onClick={resetMonacoValue}>
        <RiResetRightFill />
      </Button>
      <Button size='icon-sm' variant='ghost' onClick={switchLocale}>
        <FlowbiteLanguageOutline />
      </Button>
    </div>
  )
}
