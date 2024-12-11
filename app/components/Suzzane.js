import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useControls } from 'leva';

export function Suzanne(props) {
    const { nodes, materials } = useGLTF('/models/suzanne.glb');


    const options = Array.from({ length: 56 }, (_, i) => 'glass_' + (i + 1) + '.png')
        .reduce((acc, curr) => {
            acc[curr.replace('.png', '')] = curr;
            return acc;
        }, {});


    const matcap = useControls('Suzanne Matcap', {
        matcap: {
            value: 'glass_16.png',
            options
        }
    })

    const [map] = useLoader(TextureLoader, [`/textures/matcaps/${matcap.matcap}`]);

    nodes.Suzanne.geometry.computeVertexNormals(true);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Suzanne.geometry}
                material={nodes.Suzanne.material}
            >
                <meshMatcapMaterial matcap={map} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/models/suzanne.glb')
