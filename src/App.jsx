import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./styles.css";
import {OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {
 
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight />
        <Cyl />  
        <EffectComposer >
        
        <Bloom 

      mipmapBlur
      intensity={4.0}
      luminanceThreshold={0}
      luminanceSmoothing={0}

        />
        
        </EffectComposer>
    </Canvas>
  )
}

export default App
