'use client'
import { useMemo, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Icon } from '~/icons'

export default function Page() {
  const [rawUrl, setRawUrl] = useState('')
  const [queries, setQueries] = useState<[string, string][]>([])

  const url = useMemo(() => {
    try {
      return new URL(rawUrl)
    } catch {
      return null
    }
  }, [rawUrl])

  const handleParse = () => {
    setQueries(Array.from(url?.searchParams.entries() ?? []))
  }

  const handleQueryKeyChange = (index: number, newKey: string) => {
    setQueries((queries) =>
      queries.map(([currentKey, value], i) =>
        i === index ? [newKey, value] : [currentKey, value],
      ),
    )
  }

  const handleQueryValueChange = (index: number, value: string) => {
    setQueries((queries) =>
      queries.map(([currentKey, currentValue], i) =>
        i === index ? [currentKey, value] : [currentKey, currentValue],
      ),
    )
  }

  const handleQueryAdd = (index: number) => {
    setQueries((queries) => {
      const newQueries = [...queries]
      newQueries.splice(index + 1, 0, ['', ''])
      return newQueries
    })
  }

  const handleOpen = () => {
    if (!url) return
    const newUrl = `${url.origin + url.pathname}?${new URLSearchParams(queries).toString()}`

    window.open(newUrl, '_blank')
  }

  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='flex items-center gap-x-2'>
        <label className='flex items-center gap-2'>
          <span className='text-sm font-medium'>URL</span>
          <Input
            className='w-160'
            value={rawUrl}
            onChange={(event) => setRawUrl(event.target.value)}
          />
        </label>
        <Button onClick={handleParse}>parse</Button>
      </div>
      <div className='mt-6 grid gap-y-2'>
        {queries.map(([key, value], index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className='grid grid-cols-[1fr_4fr_40px] items-center gap-x-4'
          >
            <Input
              value={key}
              onChange={(event) =>
                handleQueryKeyChange(index, event.target.value)
              }
            />
            <Input
              value={value}
              onChange={(event) =>
                handleQueryValueChange(index, event.target.value)
              }
            />
            <div>
              <Button size='icon' onClick={() => handleQueryAdd(index)}>
                <Icon icon='MaterialSymbolsAdd' />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className='m-8 flex justify-center'>
        <Button onClick={handleOpen}>Get</Button>
      </div>
    </div>
  )
}
