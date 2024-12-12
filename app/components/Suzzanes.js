import { useControls } from 'leva'
import Eye from './Eye'
import RedEye from './RedEye'

export default function Suzzanes({ text, ...props }) {
    const { model } = useControls({
        model: {
            value: 'redEye',
            options: {
                eye: 'eye',
                redEye: 'redEye'
            }
        }
    });

    const Model = model === 'eye' ? Eye : RedEye;
    const scale = model === 'eye' ? 0.3 : 0.6;

    return (
        <group {...props}>
            {
                [...Array(5).keys()].map((i) => (
                    <group key={i * 6}>
                        <Model scale={scale} position={[-5, -3 + i * 1.5, 0]} />
                        <Model scale={scale} position={[-3, -3 + i * 1.5, 0]} />
                        <Model scale={scale} position={[-1, -3 + i * 1.5, 0]} />
                        <Model scale={scale} position={[1, -3 + i * 1.5, 0]} />
                        <Model scale={scale} position={[3, -3 + i * 1.5, 0]} />
                        <Model scale={scale} position={[5, -3 + i * 1.5, 0]} />
                    </group>
                ))
            }
        </group>
    )
}

