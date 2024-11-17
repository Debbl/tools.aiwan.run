"use client";
/* eslint-disable react/no-unknown-property */

import { useBox, usePlane, useSphere } from "@react-three/cannon";
import { CameraControls } from "@react-three/drei";
import Dice from "./Dice";

function Plane() {
  const [plane] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 0,
    type: "Static",
  }));

  return (
    <mesh ref={plane}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color="lightblue" />
    </mesh>
  );
}

function Cube() {
  const [ref] = useBox(() => ({
    args: [1, 1, 1],
    mass: 1,
    position: [1, 5, 0],
  }));

  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" transparent opacity={0.5} />
    </mesh>
  );
}

function Sphere() {
  const [ref] = useSphere(() => ({
    args: [1],
    mass: 1,
    position: [0, 5, 0],
  }));

  return (
    <mesh receiveShadow castShadow ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" transparent opacity={0.5} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1} position={[3, 3, 3]} />
      <directionalLight position={[0, 0, 5]} />

      <Plane />

      <Dice />
      <Cube />
      <Sphere />
      <CameraControls />
    </>
  );
}
