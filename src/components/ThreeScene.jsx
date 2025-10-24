import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Stars from './Stars'

const SYSTEM_CENTER_X = 4; // Moved from 2 to 4 (more to the right)

// Central Purple Sun
function PurpleSun() {
  const sun = useRef()
  
  useFrame((state, delta) => {
    if (sun.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 + 1
      sun.current.scale.set(pulse, pulse, pulse)
      sun.current.rotation.y += delta * 0.1
    }
  })

  return (
    <mesh ref={sun} position={[SYSTEM_CENTER_X, 0, 0]} scale={1} renderOrder={1}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial 
        color="#8B5CF6"
        toneMapped={false}
      />
    </mesh>
  )
}

// Neural Network Node - Fixed position
function NeuralNode() {
  const node = useRef()
  
  useFrame((state, delta) => {
    if (node.current) {
      const time = state.clock.elapsedTime
      const orbitRadius = 3.0
      const orbitSpeed = 0.6
      
      node.current.position.x = SYSTEM_CENTER_X + Math.cos(time * orbitSpeed) * orbitRadius
      node.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius
      node.current.position.y = 0
      
      node.current.rotation.x += delta * 0.3
      node.current.rotation.y += delta * 0.4
    }
  })

  return (
    <mesh ref={node} scale={0.7}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial 
        color="#4ECDC4"
        wireframe={true}
        emissive="#2BBBAD"
        emissiveIntensity={0.4}
      />
    </mesh>
  )
}

// Data Cube - Fixed position with different orbit plane
function DataCube() {
  const cube = useRef()
  
  useFrame((state, delta) => {
    if (cube.current) {
      const time = state.clock.elapsedTime
      const orbitRadius = 3.0
      const orbitSpeed = 0.6
      
      cube.current.position.x = SYSTEM_CENTER_X + Math.cos(time * orbitSpeed + Math.PI * 0.66) * orbitRadius
      cube.current.position.y = Math.sin(time * orbitSpeed + Math.PI * 0.66) * orbitRadius * 0.8
      cube.current.position.z = 0
      
      cube.current.rotation.x += delta * 0.5
      cube.current.rotation.y += delta * 0.7
    }
  })

  return (
    <mesh ref={cube} scale={0.6}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#FF6B6B"
        transparent={true}
        opacity={0.8}
        wireframe={true}
        emissive="#FF4757"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

// Tensor Grid - Fixed position with different orbit plane
function TensorGrid() {
  const grid = useRef()
  
  useFrame((state, delta) => {
    if (grid.current) {
      const time = state.clock.elapsedTime
      const orbitRadius = 3.0
      const orbitSpeed = 0.6
      
      grid.current.position.x = SYSTEM_CENTER_X + Math.cos(time * orbitSpeed + Math.PI * 1.33) * orbitRadius
      grid.current.position.y = Math.sin(time * orbitSpeed + Math.PI * 1.33) * orbitRadius * 0.8
      grid.current.position.z = 0
      
      grid.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group ref={grid} scale={0.8}>
      <mesh>
        <boxGeometry args={[1.5, 0.05, 0.05]} />
        <meshBasicMaterial color="#FFE66D" />
      </mesh>
      <mesh>
        <boxGeometry args={[0.05, 1.5, 0.05]} />
        <meshBasicMaterial color="#FFE66D" />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1.5, 0.05, 0.05]} />
        <meshBasicMaterial color="#FFE66D" />
      </mesh>
    </group>
  )
}

// Simple orbital guides (optional)
function OrbitalGuide({ radius, color }) {
  return (
    <mesh position={[SYSTEM_CENTER_X, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
      <meshBasicMaterial 
        color={color} 
        transparent={true}
        opacity={0.1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [2, 0, 10], fov: 50 }} // Adjusted camera to look at right side
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight intensity={1.2} position={[7, 5, 5]} /> // Moved light right
        <pointLight intensity={0.8} color="#7A3FF2" position={[SYSTEM_CENTER_X, 0, 0]} />
        
        <Suspense fallback={null}>
          {/* Optional orbital guides - remove if still flickering */}
          <OrbitalGuide radius={3.0} color="#7A3FF2" />
          
          <PurpleSun />
          <NeuralNode />
          <DataCube />
          <TensorGrid />
          <Stars count={1500} />
        </Suspense>
        
        <OrbitControls 
          enablePan={true}  // Allow panning to see the right side better
          enableZoom={true} 
          enableRotate={true}
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>
    </div>
  )
}