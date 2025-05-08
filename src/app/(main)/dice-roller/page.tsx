'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ClientStage = dynamic(() => import('./components/Stage'), { ssr: false })

export default function Page() {
  return (
    <div className='h-full'>
      <Suspense fallback={<div>loading</div>}>
        <ClientStage />
      </Suspense>
    </div>
  )
}
