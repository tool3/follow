
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Object3D } from 'three';

export default function RedEye(props) {
    const { nodes, materials } = useGLTF('/models/red_eye.glb')
    const instancedMeshRef = useRef()
    const count = props.count || 30;
    const temp = props.temp || new Object3D();

    useFrame(({ mouse, viewport }) => {
        const x = (mouse.x * viewport.width) / 2.5
        const y = (mouse.y * viewport.height) / 2.5
        instancedMeshRef.current.lookAt(x, y, 1)
    })

    useEffect(() => {
        for (let i = 0; i < count; i++) {
            temp.position.set(Math.random(), Math.random(), Math.random())
            temp.updateMatrix()
            instancedMeshRef.current.setMatrixAt(i, temp.matrix)
        }

        instancedMeshRef.current.instanceMatrix.needsUpdate = true

    }, []);
    return (
        <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
            <group rotation={[-1.807, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group position={[0, 0, 16.654]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Eye_Eye_0.geometry}
                            material={materials.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Eye_Iris_0.geometry}
                            material={materials.Iris}
                        />
                    </group>
                </group>
            </group>
        </instancedMesh>
    )
}

useGLTF.preload('/models/red_eye.glb')
