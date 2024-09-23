"use client";
import { Progress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function BatteryPage() {
  const [batteryInfo, setBatteryInfo] = useState({
    charging: false,
    level: 0,
    chargingTime: 0,
    dischargingTime: 0,
  });

  useEffect(() => {
    let battery: any = null;
    const updateAllBatteryInfo = () => {
      setBatteryInfo({
        charging: battery.charging,
        level: battery.level,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    if ("getBattery" in navigator) {
      (navigator.getBattery as any)().then((e: any) => {
        battery = e;
        updateAllBatteryInfo();

        battery.addEventListener("chargingchange", updateAllBatteryInfo);
        battery.addEventListener("levelchange", updateAllBatteryInfo);
        battery.addEventListener("chargingtimechange", updateAllBatteryInfo);
        battery.addEventListener("dischargingtimechange", updateAllBatteryInfo);
      });

      return () => {
        if (!battery) return;
        battery.removeEventListener("chargingchange", updateAllBatteryInfo);
        battery.removeEventListener("levelchange", updateAllBatteryInfo);
        battery.removeEventListener("chargingtimechange", updateAllBatteryInfo);
        battery.removeEventListener(
          "dischargingtimechange",
          updateAllBatteryInfo,
        );
      };
    }
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="">
        <h1 className="mt-6 text-center text-lg font-bold">Battery</h1>
        <p className="mt-2 text-center">{JSON.stringify(batteryInfo)}</p>
        <Progress
          className="mt-4"
          color="success"
          aria-label="charging"
          value={batteryInfo.level * 100}
        />
      </div>
    </div>
  );
}
