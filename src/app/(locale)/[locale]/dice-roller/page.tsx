'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ClientStage = dynamic(() => import('./components/stage'), { ssr: false })

export default function Page() {
  return (
    <div className='h-screen'>
      <Suspense fallback={<div className='h-full'>loading</div>}>
        <ClientStage />
      </Suspense>
    </div>
  )
}
