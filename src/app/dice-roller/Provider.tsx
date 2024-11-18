"use client";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

const Content = createContext<{
  cameraEnabled?: boolean;
  setCameraEnabled?: (enabled: boolean) => void;
}>({});

// eslint-disable-next-line react-refresh/only-export-components
export const useDice = () => useContext(Content);

export default function Provider({ children }: { children: ReactNode }) {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  return (
    <Content.Provider
      value={{
        cameraEnabled,
        setCameraEnabled,
      }}
    >
      {children}
    </Content.Provider>
  );
}
