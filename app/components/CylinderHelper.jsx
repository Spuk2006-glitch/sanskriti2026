'use client'
import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import React, { useRef, useEffect } from 'react'

const CylinderHelper = () => {
    let texture = useTexture('/texture.png');
    const meshRef = useRef();
    const scrollYRef = useRef(0);
    const { camera } = useThree();

    // Auto-rotation animation
    useFrame((state, delta) => {
        if (meshRef.current) {
            // Auto-rotate on y-axis at a slow pace
            meshRef.current.rotation.y += delta * 0.5;

            // Gradually move x-rotation toward 0 based on scroll
            const targetX = 0.5 - (scrollYRef.current * 0.001);
            meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;

            // Move camera away (zoom out) based on scroll
            const targetZ = 5 + (scrollYRef.current * 0.005);
            const newZ = camera.position.z + (targetZ - camera.position.z) * 0.05;
            camera.position.set(camera.position.x, camera.position.y, newZ);
        }
    });

    // Listen for scroll events
    useEffect(() => {
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <mesh ref={meshRef} rotation={[0.5, 0, 0]}>
            <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
            <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
    )
}

export default CylinderHelper