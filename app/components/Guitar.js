import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Guitar(props) {
    const { nodes, materials } = useGLTF('/models/guitar.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={nodes.Plane.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials['Material.001']}
            />
        </group>
    )
}

useGLTF.preload('/models/guitar.glb')