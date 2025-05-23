'use client'
import { useHydrated, useLatest } from '@debbl/ahooks'
import { useLingui } from '@lingui/react/macro'
import { DiffEditor } from '@monaco-editor/react'
import hljs from 'highlight.js'
import { useRef } from 'react'
import { toast } from 'sonner'
import { useMainStore } from '../hooks/use-main-store'
import Operator from './operator'
import type { DiffOnMount, Monaco } from '@monaco-editor/react'

export function DiffEditorContainer() {
  const {
    originalValue,
    modifiedValue,
    language,
    languages,
    theme,
    renderSideBySide,
    setOriginalValue,
    setModifiedValue,
    setLanguage,
    setLanguages,
  } = useMainStore()

  const monacoRef = useRef<Monaco | undefined>(undefined)

  const { isHydrated } = useHydrated()

  const languageRef = useLatest(language)
  const themeRef = useLatest(theme)

  const { t } = useLingui()

  const handleOnMount: DiffOnMount = (editor, monaco) => {
    monacoRef.current = monaco

    setLanguages(monaco.languages.getLanguages())
    editor.getOriginalEditor().setValue(originalValue)
    editor.getModifiedEditor().setValue(modifiedValue)

    editor.onDidUpdateDiff(() => {
      const ov = editor.getModel()?.original.getValue() || ''
      const mv = editor.getModel()?.modified.getValue() || ''

      const guessLanguage = hljs.highlightAuto(ov).language
      const languagesId = languages.map((v) => v.id)

      if (guessLanguage && guessLanguage !== languageRef.current && languagesId.includes(guessLanguage)) {
        toast.success(`${t`auto detect language`}: ${guessLanguage}`, {
          position: 'top-right',
          ...(themeRef.current === 'vs-dark' && {
            style: {
              background: '#333',
              color: '#fff',
            },
          }),
        })
        setLanguage(guessLanguage)
      }

      setOriginalValue(ov)
      setModifiedValue(mv)
    })
  }

  return (
    <>
      {}
      <Operator monaco={monacoRef.current} />

      {isHydrated && (
        <DiffEditor
          options={{
            originalEditable: true,
            renderSideBySide,
          }}
          onMount={handleOnMount}
          height='100%'
          theme={theme}
          language={language}
        />
      )}
    </>
  )
}
