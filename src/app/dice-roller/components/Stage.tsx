"use client";

import { Debug, Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function Stage() {
  return (
    <div className="h-full">
      <Canvas>
        <Physics gravity={[0, -10, 0]} broadphase="SAP">
          <Debug color="green" scale={1}>
            <Scene />
          </Debug>
        </Physics>
      </Canvas>
    </div>
  );
}
