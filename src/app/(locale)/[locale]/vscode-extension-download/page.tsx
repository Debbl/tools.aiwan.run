'use client'
import { Trans, useLingui } from '@lingui/react/macro'
import { AlertCircleIcon, DownloadIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'

interface ParseResult {
  itemName: string
  publisher: string
  extension: string
  downloadUrl: string
}

function getItemName(input: string) {
  const value = input.trim()
  if (!value) return null

  try {
    const url = new URL(value)
    return url.searchParams.get('itemName')?.trim() ?? null
  } catch {
    return value
  }
}

function parseInput(input: string): ParseResult | null {
  const itemName = getItemName(input)
  if (!itemName) return null

  const parts = itemName.split('.').filter(Boolean)
  if (parts.length !== 2) return null

  const [publisher, extension] = parts
  if (!publisher || !extension) return null

  const downloadUrl = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension}/latest/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`

  return {
    itemName: `${publisher}.${extension}`,
    publisher,
    extension,
    downloadUrl,
  }
}

export default function Page() {
  const [rawInput, setRawInput] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)
  const { t } = useLingui()

  const parsed = useMemo(() => parseInput(rawInput), [rawInput])
  const hasInput = rawInput.trim().length > 0
  const hasError = hasInput && !parsed

  const handleDownload = () => {
    if (!parsed) return

    setIsDownloading(true)
    const link = document.createElement('a')
    link.href = parsed.downloadUrl
    link.download = `${parsed.itemName}.vsix`
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    link.remove()
    setIsDownloading(false)
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-6 py-10'>
      <header className='flex w-full max-w-3xl items-center justify-center gap-1 py-4 text-center text-2xl font-medium'>
        <h1>
          <Trans>VSCode Extension Download</Trans>
        </h1>
      </header>

      <main className='w-full max-w-3xl space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>
            <Trans>Marketplace URL or itemName</Trans>
          </label>
          <Input
            value={rawInput}
            placeholder={t`Paste https://marketplace.visualstudio.com/items?itemName=vscodevim.vim or vscodevim.vim`}
            onChange={(event) => setRawInput(event.target.value)}
          />
        </div>

        {hasError && (
          <div className='text-destructive flex items-center gap-2 text-sm'>
            <AlertCircleIcon className='size-4' />
            <span>
              <Trans>Please enter a valid Marketplace URL or itemName.</Trans>
            </span>
          </div>
        )}

        <div className='flex justify-center sm:justify-start'>
          <Button
            className='w-full sm:w-auto'
            disabled={!parsed || isDownloading}
            onClick={handleDownload}
          >
            <DownloadIcon className='size-4' />
            {isDownloading ? (
              <Trans>Downloading...</Trans>
            ) : (
              <Trans>Download Extension</Trans>
            )}
          </Button>
        </div>

        <Card>
          <CardContent className='space-y-2 text-sm'>
            <h2 className='font-medium'>
              <Trans>Resolved Data</Trans>
            </h2>
            <p>
              <span className='text-muted-foreground'>
                <Trans>itemName</Trans>:&nbsp;
              </span>
              <code>{parsed?.itemName ?? '-'}</code>
            </p>
            <p className='break-all'>
              <span className='text-muted-foreground'>
                <Trans>VSIX URL</Trans>:&nbsp;
              </span>
              <code>{parsed?.downloadUrl ?? '-'}</code>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
