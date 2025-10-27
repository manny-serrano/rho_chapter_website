import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';

export default function TmanModel({ color = "#ffffff", ...props }) {
  const { nodes, materials } = useGLTF('/models/tmanlogo-transformed.glb')

  useEffect(() => {
    if (nodes.Node1.geometry) {
      nodes.Node1.geometry.computeVertexNormals();
    }
  }, [nodes]);
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node1.geometry}>
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/tmanlogo-transformed.glb')