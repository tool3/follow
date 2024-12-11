import { useFrame } from "@react-three/fiber"
import { useControls } from "leva";
import { useRef } from "react"
import { MeshBasicMaterial, MeshStandardMaterial } from "three";

export default function CursorLight() {
    const ref = useRef();
    useFrame(({ mouse, viewport }) => {
        const x = (mouse.x * viewport.width) / 2.5
        const y = (mouse.y * viewport.height) / 2.5
        ref.current.position.set(x, y, 2);
    });

    const { light, distance, intensity } = useControls('Cursor Light', {
        light: {
            value: '#bef3ff',
        },
        distance: {
            value: 3,
            min: 0,
            max: 50,
            step: 0.01
        },
        intensity: {
            value: 3,
            min: 0,
            max: 10,
            step: 0.001
        }
    })

    return (
        <pointLight ref={ref} distance={distance} intensity={intensity} color={light} />
    )
}