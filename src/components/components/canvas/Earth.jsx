import React, { Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' 
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader'
import { useThree } from '@react-three/fiber'

const Earth = () => {
  const earth = useGLTF('public/Tom/scene.gltf')
  const { viewport } = useThree()

  const scale = viewport.width < 5 ? 1.3 : 2


  return (
    <primitive 
      object={earth.scene}
      scale={scale}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ near: 0.1, far:200,
        position: [-4, 3, 5], fov: 45 }}
    >
      
      {/* ✅ ADD LIGHTS HERE */}
      <ambientLight intensity={0.99} />
      <directionalLight position={[5, 5, 5]} intensity={4} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas