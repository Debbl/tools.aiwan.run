'use client'
import { useMemo, useState } from 'react'
import { CopyButton } from '~/components/copy-button'
import { Input } from '~/components/ui/input'
import { getPasswd } from './utils'

export default function Page() {
  const [sn, setSn] = useState('')

  const password = useMemo(() => (sn ? getPasswd(sn) : ''), [sn])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1>
        <a
          className='text-primary underline-offset-4 hover:underline'
          href='https://miwifi.dev/ssh'
          target='_blank'
          rel='noreferrer'
        >
          MiWiFi SSH Password Calculator
        </a>
      </h1>
      <div className='mt-10 flex flex-col gap-y-8'>
        <div className='flex items-center gap-x-4'>
          <label className='w-20 text-sm font-medium' htmlFor='sn'>
            SN
          </label>
          <Input
            id='sn'
            className='w-60'
            placeholder='Enter SN'
            value={sn}
            onChange={(event) => setSn(event.target.value)}
          />
        </div>
        <div className='flex items-center justify-start gap-x-4'>
          <label className='w-20 text-sm font-medium' htmlFor='password'>
            Password
          </label>
          <Input id='password' className='w-60' value={password} disabled />
          <CopyButton text={password} />
        </div>
      </div>
    </div>
  )
}
