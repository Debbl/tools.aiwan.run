'use client'
import { Trans, useLingui } from '@lingui/react/macro'
import { RefreshCwIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CopyButton } from '~/components/copy-button'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import {
  formatRandomName,
  generateRandomNameParts,
  normalizeRandomNameCount,
} from '~/utils/random-name'
import type { RandomNameParts, RandomNameSeparator } from '~/utils/random-name'

const DEFAULT_COUNT = 6

function buildResultParts(countValue: string): RandomNameParts[] {
  return generateRandomNameParts(normalizeRandomNameCount(Number(countValue)))
}

export default function Page() {
  const { t } = useLingui()
  const [prefix, setPrefix] = useState('')
  const [countValue, setCountValue] = useState(String(DEFAULT_COUNT))
  const [separator, setSeparator] = useState<RandomNameSeparator>('_')
  const [results, setResults] = useState<RandomNameParts[]>(() =>
    buildResultParts(String(DEFAULT_COUNT)),
  )

  const separatorOptions = useMemo(
    () => [
      {
        value: '_',
        label: t`Underscore`,
      },
      {
        value: '-',
        label: t`Hyphen`,
      },
      {
        value: ' ',
        label: t`Space`,
      },
    ],
    [t],
  )

  const resultItems = useMemo(
    () =>
      results.map((parts) => ({
        key: `${parts.adjective}-${parts.hero}`,
        text: formatRandomName(parts, {
          prefix,
          separator,
        }),
      })),
    [results, prefix, separator],
  )

  const handleGenerate = () => {
    setResults(buildResultParts(countValue))
  }

  const handleReset = () => {
    setPrefix('')
    setCountValue(String(DEFAULT_COUNT))
    setSeparator('_')
    setResults(buildResultParts(String(DEFAULT_COUNT)))
  }

  const handleCopyAll = () => {
    navigator.clipboard.writeText(
      resultItems.map((item) => item.text).join('\n'),
    )
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-6 py-10'>
      <header className='w-full max-w-4xl space-y-2 text-center'>
        <h1 className='text-3xl font-semibold'>
          <Trans>Random Name</Trans>
        </h1>
        <p className='text-muted-foreground text-sm'>
          <Trans>Generate random names inspired by Drizzle word lists</Trans>
        </p>
      </header>

      <main className='mt-8 flex w-full max-w-4xl flex-col gap-4'>
        <Card>
          <CardContent className='grid gap-4 md:grid-cols-[1.2fr_140px_160px]'>
            <label className='space-y-2'>
              <span className='text-sm font-medium'>{t`Prefix`}</span>
              <Input
                value={prefix}
                onChange={(event) => setPrefix(event.target.value)}
                placeholder={t`Optional prefix`}
              />
            </label>

            <label className='space-y-2'>
              <span className='text-sm font-medium'>{t`Count`}</span>
              <Input
                value={countValue}
                onChange={(event) => setCountValue(event.target.value)}
                type='number'
                min={1}
                max={20}
              />
              <span className='text-muted-foreground block text-xs'>
                {t`Count is limited to 1-20`}
              </span>
            </label>

            <label className='space-y-2'>
              <span className='text-sm font-medium'>{t`Separator`}</span>
              <Select
                value={separator}
                onValueChange={(value) => {
                  if (value) setSeparator(value as RandomNameSeparator)
                }}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue
                    placeholder={t`Separator`}
                    render={(props, state) => {
                      const option = separatorOptions.find(
                        (option) => option.value === state.value,
                      )

                      return <span {...props}>{option?.label}</span>
                    }}
                  />
                </SelectTrigger>
                <SelectContent>
                  {separatorOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </CardContent>
        </Card>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <Button onClick={handleGenerate}>
            <RefreshCwIcon className='size-4' />
            <Trans>Generate</Trans>
          </Button>
          <Button variant='outline' onClick={handleReset}>
            <Trans>Reset</Trans>
          </Button>
          <Button variant='outline' onClick={handleCopyAll}>
            <Trans>Copy All</Trans>
          </Button>
        </div>

        <Card>
          <CardContent className='space-y-3'>
            <div className='space-y-1'>
              <h2 className='text-lg font-medium'>
                <Trans>Random name results</Trans>
              </h2>
              <p className='text-muted-foreground text-sm'>
                <Trans>
                  Each click combines one adjective and one hero-style word.
                </Trans>
              </p>
            </div>

            <div className='grid gap-3 sm:grid-cols-2'>
              {resultItems.map((item) => (
                <div
                  key={item.key}
                  className='border-border flex items-center justify-between gap-3 rounded-xl border px-4 py-3'
                >
                  <code className='truncate text-sm'>{item.text}</code>
                  <CopyButton text={item.text} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className='text-muted-foreground text-center text-xs'>
          <Trans>Names are generated locally in your browser.</Trans>
        </p>
      </main>
    </div>
  )
}
