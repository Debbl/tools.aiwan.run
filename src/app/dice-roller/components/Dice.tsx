"use client";

/* eslint-disable react/no-unknown-property */
import { useBox, useContactMaterial } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

export default function Dice() {
  const [box] = useBox(() => ({
    mass: 6,
    position: [1, 1, -1],
    rotation: [0, 0, 0],
  }));
  const gltf = useGLTF("/dice.gltf", "/draco-gltf");

  useContactMaterial("box", "default", { friction: 0.5 });

  return (
    <mesh receiveShadow castShadow ref={box}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
