"use client";
import { createContext, use, useState } from "react";
import type { ReactNode } from "react";

const Content = createContext<{
  cameraEnabled?: boolean;
  setCameraEnabled?: (enabled: boolean) => void;
}>({});

// eslint-disable-next-line react-refresh/only-export-components
export const useDice = () => use(Content);

export default function Provider({ children }: { children: ReactNode }) {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  return (
    <Content
      value={{
        cameraEnabled,
        setCameraEnabled,
      }}
    >
      {children}
    </Content>
  );
}
