/* eslint-disable @next/next/no-img-element */
'use client'
import { Textarea } from '@heroui/react'
import { useMemo, useState } from 'react'

export default function Base64ToPngPage() {
  const [base64, setBase64] = useState('')

  const img = useMemo(() => {
    if (base64.startsWith('data:') || !base64) return base64

    return `data:image/png;base64,${base64}`
  }, [base64])

  return (
    <div className='flex h-full flex-col items-center justify-center px-6'>
      <header className='py-4 text-center text-2xl font-medium'>Base64 to PNG</header>

      <div className='flex flex-col gap-1'>
        <Textarea
          minRows={8}
          cols={80}
          value={base64}
          variant='bordered'
          isClearable
          onValueChange={setBase64}
        ></Textarea>
        <div className='flex items-center justify-center'>{img && <img src={img} />}</div>
      </div>
    </div>
  )
}
