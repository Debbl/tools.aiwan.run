"use client";
/* eslint-disable react/no-unknown-property */

import { CameraControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import Dice from "./Dice";

function Plane() {
  return (
    <RigidBody type="fixed">
      <mesh receiveShadow position={[0, 0, 0]} rotateZ={90}>
        <boxGeometry args={[20, 0.5, 20]} />
        <meshBasicMaterial color="#65a30d" />
      </mesh>
    </RigidBody>
  );
}

export default function Scene() {
  const camera = useRef<CameraControls>(null);

  useEffect(() => {
    if (camera.current) {
      camera.current.setPosition(5, 8, -4);
    }
  }, []);

  return (
    <>
      <Plane />

      <Dice />
      <CameraControls ref={camera} />
    </>
  );
}
