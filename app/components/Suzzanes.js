import { Suzanne } from './Suzzane'

export default function Suzzanes({ text, ...props }) {
    return (
        <group {...props}>
            {
                [...Array(5).keys()].map((i) => (
                    <group key={i * 6}>
                        <Suzanne scale={0.5} position={[-5, -3 + i * 1.5, 0]} />
                        <Suzanne scale={0.5} position={[-3, -3 + i * 1.5, 0]} />
                        <Suzanne scale={0.5} position={[-1, -3 + i * 1.5, 0]} />
                        <Suzanne scale={0.5} position={[1, -3 + i * 1.5, 0]} />
                        <Suzanne scale={0.5} position={[3, -3 + i * 1.5, 0]} />
                        <Suzanne scale={0.5} position={[5, -3 + i * 1.5, 0]} />
                    </group>
                ))
            }
        </group>
    )
}

