import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Stars from './Stars'

// Responsive system center based on screen size
function useResponsiveCenter() {
  const [centerX, setCenterX] = useState(4) // Default desktop position

  useEffect(() => {
    const updateCenter = () => {
      if (window.innerWidth < 768) { // Mobile
        setCenterX(0) // Center on mobile
      } else if (window.innerWidth < 1024) { // Tablet
        setCenterX(2) // Slightly right on tablet
      } else { // Desktop
        setCenterX(4) // Right side on desktop
      }
    }

    updateCenter()
    window.addEventListener('resize', updateCenter)
    return () => window.removeEventListener('resize', updateCenter)
  }, [])

  return centerX
}

// Central Purple Sun
function PurpleSun() {
  const sun = useRef()
  const centerX = useResponsiveCenter()
  
  useFrame((state, delta) => {
    if (sun.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 + 1
      sun.current.scale.set(pulse, pulse, pulse)
      sun.current.rotation.y += delta * 0.1
      
      // Update position when center changes
      sun.current.position.x = centerX
    }
  })

  return (
    <mesh ref={sun} position={[centerX, 0, 0]} scale={1} renderOrder={1}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial 
        color="#8B5CF6"
        toneMapped={false}
      />
    </mesh>
  )
}

// Neural Network Node
function NeuralNode() {
  const node = useRef()
  const centerX = useResponsiveCenter()
  
  useFrame((state, delta) => {
    if (node.current) {
      const time = state.clock.elapsedTime
      const orbitRadius = window.innerWidth < 768 ? 2.0 : 3.0 // Smaller on mobile
      const orbitSpeed = 0.6
      
      node.current.position.x = centerX + Math.cos(time * orbitSpeed) * orbitRadius
      node.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius
      node.current.position.y = 0
      
      node.current.rotation.x += delta * 0.3
      node.current.rotation.y += delta * 0.4
    }
  })

  return (
    <mesh ref={node} scale={window.innerWidth < 768 ? 0.5 : 0.7}>
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

// Data Cube
function DataCube() {
  const cube = useRef()
  const centerX = useResponsiveCenter()
  
  useFrame((state, delta) => {
    if (cube.current) {
      const time = state.clock.elapsedTime
      const orbitRadius = window.innerWidth < 768 ? 2.0 : 3.0
      const orbitSpeed = 0.6
      
      cube.current.position.x = centerX + Math.cos(time * orbitSpeed + Math.PI * 0.66) * orbitRadius
      cube.current.position.y = Math.sin(time * orbitSpeed + Math.PI * 0.66) * orbitRadius * 0.8
      cube.current.position.z = 0
      
      cube.current.rotation.x += delta * 0.5
      cube.current.rotation.y += delta * 0.7
    }
  })

  return (
    <mesh ref={cube} scale={window.innerWidth < 768 ? 0.4 : 0.6}>
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

// Tensor Grid
function TensorGrid() {
  const grid = useRef()
  const centerX = useResponsiveCenter()
  
  useFrame((state, delta) => {
    if (grid.current) {
      const time = state.clock.elapsedTime
      const orbitRadius = window.innerWidth < 768 ? 2.0 : 3.0
      const orbitSpeed = 0.6
      
      grid.current.position.x = centerX + Math.cos(time * orbitSpeed + Math.PI * 1.33) * orbitRadius
      grid.current.position.y = Math.sin(time * orbitSpeed + Math.PI * 1.33) * orbitRadius * 0.8
      grid.current.position.z = 0
      
      grid.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group ref={grid} scale={window.innerWidth < 768 ? 0.6 : 0.8}>
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

// Simple orbital guides
function OrbitalGuide({ radius, color }) {
  const centerX = useResponsiveCenter()
  
  return (
    <mesh position={[centerX, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
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
  const centerX = useResponsiveCenter()
  
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [centerX - 2, 0, 10], fov: 50 }} // Camera follows center
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight intensity={1.2} position={[centerX + 3, 5, 5]} />
        <pointLight intensity={0.8} color="#7A3FF2" position={[centerX, 0, 0]} />
        
        <Suspense fallback={null}>
          {/* Hide orbital guides on mobile for better performance */}
          {window.innerWidth >= 768 && (
            <OrbitalGuide radius={window.innerWidth < 768 ? 2.0 : 3.0} color="#7A3FF2" />
          )}
          
          <PurpleSun />
          <NeuralNode />
          <DataCube />
          <TensorGrid />
          <Stars count={window.innerWidth < 768 ? 800 : 1500} /> {/* Fewer stars on mobile */}
        </Suspense>
        
        <OrbitControls 
          enablePan={window.innerWidth >= 768} // Disable pan on mobile
          enableZoom={window.innerWidth >= 768} // Disable zoom on mobile
          enableRotate={window.innerWidth >= 768} // Disable rotate on mobile
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>
    </div>
  )
}