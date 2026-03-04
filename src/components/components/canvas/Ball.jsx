import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Decal, Float, Preload, useTexture, Html} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motion';
import { styles } from '../../../styles';



const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
<>


    <Float speed={.75} rotationIntensity={1} floatIntensity={2}>
<ambientLight intensity={0.25} />
<directionalLight position={[0,0,0.05]} />


<mesh castShadow receiveShadow scale={2.75}>
  <icosahedronGeometry args={[1, 1]} />
  
 <meshStandardMaterial  polygonOffset polygonOffsetFactor={-5} flatShading/>
 <Decal map={decal} position={[0,0,1]} rotation={[2*Math.PI, 0, 6.25]}/>
</mesh>
    </Float>
    </>
  )
}

const BallCanvas=({icon})=>{
  return(
    <>
    

     <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
    
      <Suspense fallback={<Html center><CanvasLoader /></Html>}>
      
        <OrbitControls enableZoom={false}
         
        />
       <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
    </>
  )
}

export default BallCanvas