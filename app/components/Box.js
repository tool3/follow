import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Suzanne } from './Suzzane'

export default function Box({ text, ...props }) {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    useFrame(({ mouse, viewport }) => {
        const x = (mouse.x * viewport.width) / 2.5
        const y = (mouse.y * viewport.height) / 2.5
        ref.current.lookAt(x, y, 1)
    })

    return (
        <group
            {...props}
            ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <Suzanne scale={0.5} />
        </group>
    )
}