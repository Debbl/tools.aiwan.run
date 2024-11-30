"use client";

/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import type { Mesh } from "three";

export default function Dice() {
  const gltf = useGLTF("/dice.gltf", "/draco-gltf");
  const meshRef = useRef<Mesh>();
  const [isDragging, _setIsDragging] = useState(false);

  return (
    <RigidBody type={isDragging ? "kinematicPosition" : "dynamic"}>
      <mesh receiveShadow castShadow position={[0, 4, 0]}>
        <primitive object={gltf.scene} ref={meshRef} />
      </mesh>
    </RigidBody>
  );
}
