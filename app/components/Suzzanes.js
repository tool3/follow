import Eye from './Eye'

export default function Suzzanes({ text, ...props }) {
    return (
        <group {...props}>
            {
                [...Array(5).keys()].map((i) => (
                    <group key={i * 6}>
                        <Eye scale={0.3} position={[-5, -3 + i * 1.5, 0]} />
                        <Eye scale={0.3} position={[-3, -3 + i * 1.5, 0]} />
                        <Eye scale={0.3} position={[-1, -3 + i * 1.5, 0]} />
                        <Eye scale={0.3} position={[1, -3 + i * 1.5, 0]} />
                        <Eye scale={0.3} position={[3, -3 + i * 1.5, 0]} />
                        <Eye scale={0.3} position={[5, -3 + i * 1.5, 0]} />
                    </group>
                ))
            }
        </group>
    )
}

