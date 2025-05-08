'use client'

import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Scene from './Scene'

export default function Stage() {
  return (
    <div className='h-full'>
      <Canvas shadows>
        <Physics gravity={[0, -9.8, 0]} debug>
          <color attach='background' args={['#171720']} />
          <ambientLight intensity={0.2 * Math.PI} />
          <pointLight decay={0} position={[0, 10, 0]} color='white' intensity={1.5 * Math.PI} />

          <Scene />
        </Physics>
      </Canvas>
    </div>
  )
}
