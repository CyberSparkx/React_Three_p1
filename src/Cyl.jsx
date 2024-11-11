import React, { useRef } from 'react'
import * as THREE from "three";
import {useTexture} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
const Cyl = () => {
    let tex = useTexture("./image.png");
    let cyl =useRef(null);
    useFrame((state,delta)=> {
      cyl.current.rotation.y += delta;
      
    })

  return (
    
      <mesh ref={cyl} rotation={[0,1.3,0.3]}>
        <cylinderGeometry args={[2.5, 2.5, 2.5, 35, 35, true]}/>
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
  )
}

export default Cyl