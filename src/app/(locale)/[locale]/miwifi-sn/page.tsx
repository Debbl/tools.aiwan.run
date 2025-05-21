'use client'
import { Input, Link } from '@heroui/react'
import { useMemo, useState } from 'react'
import { CopyButton } from '~/components/copy-button'
import { getPasswd } from './utils'

export default function Page() {
  const [sn, setSn] = useState('')

  const password = useMemo(() => (sn ? getPasswd(sn) : ''), [sn])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1>
        <Link href='https://miwifi.dev/ssh' target='_blank' rel='noreferrer'>
          MiWiFi SSH Password Calculator
        </Link>
      </h1>
      <div className='mt-10 flex flex-col gap-y-8'>
        <div className='flex gap-x-4'>
          <Input
            label='SN'
            classNames={{
              base: 'w-auto',
              label: 'w-20',
              mainWrapper: 'w-60',
            }}
            labelPlacement='outside-left'
            placeholder='Enter SN'
            value={sn}
            onValueChange={setSn}
          />
        </div>
        <div className='flex items-center justify-start gap-x-4'>
          <Input
            classNames={{
              base: 'w-auto',
              label: 'w-20',
              mainWrapper: 'w-60',
            }}
            label='Password'
            labelPlacement='outside-left'
            value={password}
            disabled
          />
          <CopyButton text={password} />
        </div>
      </div>
    </div>
  )
}
