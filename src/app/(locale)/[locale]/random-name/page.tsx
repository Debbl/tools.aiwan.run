'use client'
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from '@heroui/react'
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
          <CardBody className='grid gap-4 md:grid-cols-[1.2fr_140px_160px]'>
            <Input
              value={prefix}
              onValueChange={setPrefix}
              label={t`Prefix`}
              placeholder={t`Optional prefix`}
              variant='bordered'
            />

            <Input
              value={countValue}
              onValueChange={setCountValue}
              label={t`Count`}
              type='number'
              min={1}
              max={20}
              variant='bordered'
              description={t`Count is limited to 1-20`}
            />

            <Select
              selectedKeys={[separator]}
              onChange={(event) =>
                setSeparator(event.target.value as RandomNameSeparator)
              }
              label={t`Separator`}
              variant='bordered'
            >
              <SelectItem key='_'>{t`Underscore`}</SelectItem>
              <SelectItem key='-'>{t`Hyphen`}</SelectItem>
              <SelectItem key=' '>{t`Space`}</SelectItem>
            </Select>
          </CardBody>
        </Card>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <Button color='primary' onPress={handleGenerate}>
            <RefreshCwIcon className='size-4' />
            <Trans>Generate</Trans>
          </Button>
          <Button variant='flat' onPress={handleReset}>
            <Trans>Reset</Trans>
          </Button>
          <Button variant='flat' onPress={handleCopyAll}>
            <Trans>Copy All</Trans>
          </Button>
        </div>

        <Card>
          <CardBody className='space-y-3'>
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
                  className='border-default-200 flex items-center justify-between gap-3 rounded-xl border px-4 py-3'
                >
                  <code className='truncate text-sm'>{item}</code>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <p className='text-muted-foreground text-center text-xs'>
          <Trans>Names are generated locally in your browser.</Trans>
        </p>
      </main>
    </div>
  )
}
