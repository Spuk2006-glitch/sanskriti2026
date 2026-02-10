'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'

import CylinderHelper from './CylinderHelper'

import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const CylinderComp = () => {
    return (
        <Canvas flat camera={{ fov: 20 }}>
            <ambientLight />
            <CylinderHelper />
            <EffectComposer>
                <Bloom
                    mipmapBlur
                    intensity={5}
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.2}
                />
            </EffectComposer>
            <ToneMapping adaptive={true} />

        </Canvas>
    )
}

export default CylinderComp;