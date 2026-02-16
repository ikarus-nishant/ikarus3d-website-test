import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { Environment } from '@react-three/drei';
import Experience from './Experience'


extend(geometry)

const Portals = (props) => {    

    return(
        <Canvas shadows onWheel={(e)=>e.preventDefault()} style={{ width:"100%", height:"100%", zIndex: props.openPortal ? 40 : 0, overflow:'visible' }} camera={{ position: [0, 0, 20], fov: 30 }}>        
            <Experience viewportWidth={props.viewportWidth} openPortal={props.openPortal} setOpenPortal={props.setOpenPortal} />
        </Canvas>
    )
}

export default Portals
