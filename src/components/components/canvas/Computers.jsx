import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

// preload model to warm cache and reduce initial load
useGLTF.preload("/public/desktop_pc/scene.gltf");

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/public/desktop_pc/scene.gltf");
  

  return (
    <mesh >
       
      <hemisphereLight intensity={0.99} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
       />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.55}   // slightly smaller to avoid overflow
        position={isMobile ? [0, -1.5, -1.2] : [0, -3.8, -1]}  // lift up a bit
        rotation={[-0.01, -0.2, -0.1]}
      />
    
    </mesh>  
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    
    setIsMobile(mediaQuery.matches);

   
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

   
    mediaQuery.addEventListener("change", handleMediaQueryChange);

   
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={1}  // fixed device pixel ratio for faster rendering
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Html center><CanvasLoader /></Html>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;