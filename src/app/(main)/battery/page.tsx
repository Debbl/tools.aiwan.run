'use client'
import { Progress } from '@heroui/react'
import { useBattery } from './hooks/use-battery'

export default function BatteryPage() {
  const battery = useBattery()

  if (!battery) return null

  return (
    <div className='flex h-full items-center justify-center'>
      <div className=''>
        <h1 className='mt-6 text-center text-lg font-bold'>Battery</h1>
        <p className='mt-2 text-center'>{JSON.stringify(battery)}</p>
        <Progress className='mt-4' color='success' aria-label='charging' value={battery.level * 100} />
      </div>
    </div>
  )
}
