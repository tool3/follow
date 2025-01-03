'use client';

import { Html, Stats, useProgress } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Leva, useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { Suspense, useEffect, useState } from 'react';
import { Vector3 } from 'three';
import Credits from './components/Credit';
import CursorLight from './components/CursorLight';
import Debug from './components/Debug';
import Suzzanes from './components/Suzzanes';
import './index.scss';


function Loader() {
    const { progress } = useProgress();

    const style = {
        backdropFilter: 'blur(10px)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Html style={style} center className='overlay'>
            <div className="title-wrapper">
                <div className="title">FOLLOWERS</div>
                <div className="loading">{progress.toFixed(2)} % loaded</div>
            </div>
        </Html>
    );
}

function FPS({ fps }) {
    return fps ? <Stats className="stats" /> : null
}



function Rig() {
    const { camera, mouse } = useThree()
    const vec = new Vector3()

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.001)
        camera.lookAt(0, 0, 0)
    })
}

export default function Page() {
    const [active, setActive] = useState(false);


    useEffect(() => {
        addEventListener('debug', () => setActive(true))
        addEventListener('debugClose', () => setActive(false))
        return () => {
            removeEventListener('debug', () => setActive(true))
            addEventListener('debugClose', () => setActive(false))
        }
    }, [])

    const { fps, perf, background } = useControls({
        fps: { value: false, color: 'red' },
        perf: false,
        background: 'black',
    });

    const bloom = useControls('bloom', {
        enabled: false,
        intensity: 1.5,
        luminanceThreshold: 0.1,
        luminanceSmoothing: 0.1,
    }, { collapsed: true, order: 1 })

    return (
        <>
            <Leva hidden={!active} />
            <FPS fps={fps} />
            <Debug />
            <Credits />

            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
                camera={{ frustumCulled: true, fov: 65, position: [0, 0, 6] }}>

                <color attach="background" args={[background]} />

                <Suspense fallback={<Loader />}>

                    {perf ? <Perf align="top-right" /> : null}

                    <Suzzanes />
                    {/* <Eye /> */}
                    {/* <Rig /> */}
                    {/* <OrbitControls /> */}
                    {/* <ambientLight intensity={1} /> */}
                    {/* <Environment files="./textures/environments/studio_small_03_2k.hdr" environmentIntensity={0.3} resolution={1024} /> */}
                    <CursorLight />
                    <EffectComposer multisampling={0}>
                        {bloom.enabled ?
                            <Bloom
                                intensity={bloom.intensity}
                                luminanceThreshold={bloom.luminanceThreshold}
                                luminanceSmoothing={bloom.luminanceSmoothing}
                                height={1024} /> :
                            null}
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </>
    );
}


