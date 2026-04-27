'use client'
import { useHydrated } from '@debbl/ahooks'
import { Button, Checkbox, ListBox, Select } from '@heroui/react'
import { useLingui } from '@lingui/react/macro'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { useI18nHelper } from '~/hooks/use-i18n-helper'
import { useMainStore } from '../hooks/use-main-store'
import { FlowbiteLanguageOutline, RiResetRightFill } from '../icons'
import type { Monaco, Theme } from '@monaco-editor/react'
import type { Key } from 'react'

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

  const handleSetTheme = (key: Key | null) => {
    if (!key) return
    const theme = String(key) as Theme

    setEditorTheme(theme)
  }

  if (!isHydrated) return null

  return (
    <div className='flex items-center justify-center gap-x-4 py-4'>
      <label className='flex max-w-xs items-center gap-2 text-sm'>
        <span>{t`Select Language`}</span>
        <Select
          aria-label={t`Select Language`}
          selectedKey={language}
          onChange={(key) => {
            if (key) setLanguage(String(key))
          }}
        >
          <Select.Trigger className='min-w-36'>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {languages.map((lang) => (
                <ListBox.Item key={lang.id} id={lang.id} textValue={lang.id}>
                  {lang.id}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </label>

      <label className='flex max-w-52 items-center gap-2 text-sm'>
        <span>{t`Select Theme`}</span>
        <Select
          aria-label={t`Select Theme`}
          selectedKey={editorTheme}
          onChange={handleSetTheme}
        >
          <Select.Trigger className='min-w-28'>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id='light' textValue='light'>
                light
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id='vs-dark' textValue='vs-dark'>
                vs-dark
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </label>

      <label className='flex items-center gap-2 text-sm'>
        <Checkbox
          isSelected={renderSideBySide}
          onChange={setRenderSideBySide}
        />
        <span>{t`Side By Side`}</span>
      </label>

      <Button size='sm' isIconOnly onPress={resetMonacoValue}>
        <RiResetRightFill />
      </Button>
      <Button size='sm' isIconOnly variant='ghost' onPress={switchLocale}>
        <FlowbiteLanguageOutline />
      </Button>
    </div>
  )
}
