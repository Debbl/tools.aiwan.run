'use client'
import { Button, Card, Input, ListBox, Select } from '@heroui/react'
import { Trans, useLingui } from '@lingui/react/macro'
import { RefreshCwIcon } from 'lucide-react'
import { useState } from 'react'
import { CopyButton } from '~/components/copy-button'
import {
  generateRandomNames,
  normalizeRandomNameCount,
} from '~/utils/random-name'
import type { RandomNameSeparator } from '~/utils/random-name'

const DEFAULT_COUNT = 6

function buildResults(
  countValue: string,
  separator: RandomNameSeparator,
  prefix: string,
) {
  return generateRandomNames(normalizeRandomNameCount(Number(countValue)), {
    prefix,
    separator,
  })
}

export default function Page() {
  const { t } = useLingui()
  const [prefix, setPrefix] = useState('')
  const [countValue, setCountValue] = useState(String(DEFAULT_COUNT))
  const [separator, setSeparator] = useState<RandomNameSeparator>('_')
  const [results, setResults] = useState<string[]>(() =>
    buildResults(String(DEFAULT_COUNT), '_', ''),
  )

  const handleGenerate = () => {
    setResults(buildResults(countValue, separator, prefix))
  }

  const handleReset = () => {
    setPrefix('')
    setCountValue(String(DEFAULT_COUNT))
    setSeparator('_')
    setResults(buildResults(String(DEFAULT_COUNT), '_', ''))
  }

  const handleCopyAll = () => {
    navigator.clipboard.writeText(results.join('\n'))
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
          <Card.Content className='grid gap-4 md:grid-cols-[1.2fr_140px_160px]'>
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
                aria-label={t`Separator`}
                selectedKey={separator}
                onChange={(key) => {
                  if (key) setSeparator(String(key) as RandomNameSeparator)
                }}
              >
                <Select.Trigger className='w-full'>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id='_' textValue={t`Underscore`}>
                      {t`Underscore`}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id='-' textValue={t`Hyphen`}>
                      {t`Hyphen`}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id=' ' textValue={t`Space`}>
                      {t`Space`}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </label>
          </Card.Content>
        </Card>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <Button variant='primary' onPress={handleGenerate}>
            <RefreshCwIcon className='size-4' />
            <Trans>Generate</Trans>
          </Button>
          <Button variant='outline' onPress={handleReset}>
            <Trans>Reset</Trans>
          </Button>
          <Button variant='outline' onPress={handleCopyAll}>
            <Trans>Copy All</Trans>
          </Button>
        </div>

        <Card>
          <Card.Content className='space-y-3'>
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
              {results.map((item) => (
                <div
                  key={item}
                  className='border-border flex items-center justify-between gap-3 rounded-xl border px-4 py-3'
                >
                  <code className='truncate text-sm'>{item}</code>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        <p className='text-muted-foreground text-center text-xs'>
          <Trans>Names are generated locally in your browser.</Trans>
        </p>
      </main>
    </div>
  )
}
