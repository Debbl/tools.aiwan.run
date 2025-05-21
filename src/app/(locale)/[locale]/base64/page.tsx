'use client'
import { useLingui } from '@lingui/react/macro'
import { CircleXIcon } from 'lucide-react'
import { useState } from 'react'
import { useIsMatchMedia } from 'use-is-match-media'
import { CopyButton } from '~/components/copy-button'
import { Button } from '~/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~/components/ui/resizable'
import { Textarea } from '~/components/ui/textarea'

export default function Page() {
  const [inputText, setInputText] = useState('')
  const [base64Text, setBase64Text] = useState('')

  const { t } = useLingui()

  const isMobile = useIsMatchMedia('(max-width: 768px)')
  const handleInputTextChange = (value: string) => {
    setInputText(value)
    let newBase64Text = ''
    try {
      newBase64Text = btoa(value)
    } catch {
      newBase64Text = 'Invalid input'
    }
    setBase64Text(newBase64Text)
  }

  const handleBase64TextChange = (value: string) => {
    setBase64Text(value)
    let newInputText = ''
    try {
      newInputText = atob(value)
    } catch {
      newInputText = 'Invalid input'
    }
    setInputText(newInputText)
  }

  const handleReset = () => {
    setInputText('')
    setBase64Text('')
  }

  return (
    <div className='flex min-h-screen flex-col items-start gap-y-2'>
      <header className='mt-4 flex w-full items-end justify-between gap-1 px-4 text-left text-2xl font-medium'>
        <h1 className='text-center'>Base64</h1>
      </header>

      <div className='border-border flex size-full flex-1 flex-col overflow-hidden p-4'>
        <ResizablePanelGroup
          className='border-border flex-1 rounded-md border'
          direction={isMobile ? 'vertical' : 'horizontal'}
        >
          <ResizablePanel>
            <ResizablePanelGroup direction='vertical'>
              <ResizablePanel className='border-b' style={{ minHeight: 42, maxHeight: 42 }}>
                <div className='flex h-full items-center justify-end gap-2 px-2'>
                  <CopyButton text={inputText} />

                  <Button variant='ghost' size='icon' onClick={handleReset}>
                    <CircleXIcon className='size-4' />
                  </Button>
                </div>
              </ResizablePanel>
              <ResizablePanel>
                <Textarea
                  placeholder={t`Enter your input text`}
                  className='h-full resize-none border-none focus-visible:border-none focus-visible:ring-0'
                  value={inputText}
                  onChange={(e) => handleInputTextChange(e.target.value)}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResizablePanelGroup direction='vertical'>
              <ResizablePanel className='border-b' style={{ minHeight: 42, maxHeight: 42 }}>
                <div className='flex h-full items-center justify-end gap-2 px-2'>
                  <CopyButton text={inputText} />

                  <Button variant='ghost' size='icon' onClick={handleReset}>
                    <CircleXIcon className='size-4' />
                  </Button>
                </div>
              </ResizablePanel>
              <ResizablePanel>
                <Textarea
                  placeholder={t`Enter your base64 text`}
                  className='h-full resize-none border-none focus-visible:border-none focus-visible:ring-0'
                  value={base64Text}
                  onChange={(e) => handleBase64TextChange(e.target.value)}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
