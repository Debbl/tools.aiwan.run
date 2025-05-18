/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client'
import { useEffectEvent } from '@debbl/ahooks'
import { Trans, useLingui } from '@lingui/react/macro'
import { imageMeta } from 'image-meta'
import { CircleXIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { match } from 'ts-pattern'
import { useIsMatchMedia } from 'use-is-match-media'
import { CopyButton } from '~/components/copy-button'
import { Button } from '~/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~/components/ui/resizable'
import { Textarea } from '~/components/ui/textarea'
import type { ImageMeta } from 'image-meta'

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} B`
  }
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`
  }
  if (size < 1024 * 1024 * 1024) {
    return `${(size / 1024 / 1024).toFixed(2)} MB`
  }
  return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`
}

export default function Base64ToPngPage() {
  const [base64, setBase64] = useState('')
  const [img, setImg] = useState('')
  const [status, setStatus] = useState<'ready' | 'loading' | 'success' | 'error'>('ready')
  const [meta, setMeta] = useState<ImageMeta | null>(null)
  const [fileSize, setFileSize] = useState(0)

  const { t } = useLingui()
  const isMobile = useIsMatchMedia('(max-width: 768px)')

  const handleBase64Change = useEffectEvent((base64: string) => {
    if (!base64) {
      setStatus('ready')
      setMeta(null)
      setImg('')
      return
    }

    const image = document.createElement('img')

    const parsedBase64 = base64.startsWith('data:') ? base64 : `data:image/png;base64,${base64}`

    setStatus('loading')
    image.src = parsedBase64
    image.onload = () => {
      const src = image.src
      // const meta = imageMeta()
      fetch(src)
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => {
          setFileSize(arrayBuffer.byteLength)
          const meta = imageMeta(new Uint8Array(arrayBuffer))
          setMeta(meta)
        })

      setImg(src)
      setStatus('success')
    }
    image.onerror = () => {
      setImg('')
      setStatus('error')
      setMeta(null)
    }
  })

  useEffect(() => {
    handleBase64Change(base64)
  }, [base64, handleBase64Change])

  return (
    <div className='flex min-h-screen flex-col items-center px-6'>
      <header className='flex w-full items-end justify-between gap-1 py-4 text-left text-2xl font-medium'>
        <h1>Base64 to PNG</h1>
      </header>

      <div className='border-border mb-2 flex size-full flex-1 flex-col gap-1 overflow-hidden'>
        <ResizablePanelGroup
          className='border-border flex-1 rounded-md border'
          direction={isMobile ? 'vertical' : 'horizontal'}
        >
          <ResizablePanel defaultSize={50} minSize={10}>
            <ResizablePanelGroup direction='vertical'>
              <ResizablePanel className='border-b' style={{ minHeight: 42, maxHeight: 42 }}>
                <div className='flex h-full items-center justify-end gap-2 px-2'>
                  <CopyButton text={base64} />
                  <Button variant='ghost' size='icon' onClick={() => setBase64('')}>
                    <CircleXIcon className='size-4' />
                  </Button>
                </div>
              </ResizablePanel>
              <ResizablePanel>
                <Textarea
                  className='h-full resize-none border-none focus-visible:border-none focus-visible:ring-0'
                  value={base64}
                  placeholder={t`Paste base64 here...`}
                  onChange={(e) => setBase64(e.target.value)}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction='vertical'>
              <ResizablePanel className='border-b' style={{ minHeight: 42, maxHeight: 42 }}>
                {status === 'success' && (
                  <div className='text-muted-foreground flex h-full items-center justify-end gap-2 px-2 text-sm'>
                    <p>W: {meta?.width}</p>
                    <p>H: {meta?.height}</p>
                    <p>F: {meta?.type}</p>
                    <p>S: {formatFileSize(fileSize)}</p>
                  </div>
                )}
              </ResizablePanel>
              <ResizablePanel>
                <div className='flex size-full items-center justify-center'>
                  {match(status)
                    .with('ready', () => (
                      <div className='text-muted-foreground'>
                        <Trans>Ready</Trans>
                      </div>
                    ))
                    .with('loading', () => (
                      <div className='text-muted-foreground'>
                        <Trans>Loading...</Trans>
                      </div>
                    ))
                    // eslint-disable-next-line @next/next/no-img-element
                    .with('success', () => <img src={img} className='size-full object-contain' />)
                    .with('error', () => (
                      <div className='text-destructive'>
                        <Trans>Error</Trans>
                      </div>
                    ))
                    .exhaustive()}
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
