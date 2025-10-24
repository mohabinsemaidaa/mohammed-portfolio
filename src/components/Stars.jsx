import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Stars({ count = 1500 }) {
  const stars = useRef()
  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 2 + Math.random() * 40
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      arr[i3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i3 + 2] = radius * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (stars.current) {
      stars.current.rotation.y += delta * 0.001
    }
  })

  return (
    <points ref={stars}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05}
        sizeAttenuation={true}
        color="#E0E0FF"  // Soft blue-white
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}