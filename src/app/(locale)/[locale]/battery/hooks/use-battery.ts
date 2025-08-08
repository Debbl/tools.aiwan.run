import { useSyncExternalStore } from 'react'

let batteryManager: BatteryManager | null = null
function subscribeBattery(onStoreChange: () => void) {
  if ('getBattery' in navigator) {
    window.navigator.getBattery().then((e) => {
      batteryManager = e
      onStoreChange()
      batteryManager.addEventListener('chargingchange', onStoreChange)
      batteryManager.addEventListener('levelchange', onStoreChange)
      batteryManager.addEventListener('chargingtimechange', onStoreChange)
      batteryManager.addEventListener('dischargingtimechange', onStoreChange)
    })
  }

  return () => {
    if (!batteryManager) return

    batteryManager.removeEventListener('chargingchange', onStoreChange)
    batteryManager.removeEventListener('levelchange', onStoreChange)
    batteryManager.removeEventListener('chargingtimechange', onStoreChange)
    batteryManager.removeEventListener('dischargingtimechange', onStoreChange)
  }
}

function getBatterySnapshot() {
  return batteryManager
}

function getServerBatterySnapshot() {
  return null
}

export function useBattery() {
  const batteryManager = useSyncExternalStore(
    subscribeBattery,
    getBatterySnapshot,
    getServerBatterySnapshot,
  )

  if (!batteryManager) return null
  return {
    charging: batteryManager.charging,
    level: batteryManager.level,
    chargingTime: batteryManager.chargingTime,
    dischargingTime: batteryManager.dischargingTime,
  }
}
