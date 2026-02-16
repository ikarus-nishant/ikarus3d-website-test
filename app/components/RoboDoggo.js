import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader, FBXLoader } from 'three-stdlib';
import { CameraControls } from '@react-three/drei';
import { AxesHelper } from 'three';

const ModelScene = () => {
  // const gltf = useLoader(GLTFLoader, 'mod/Final_GLB.glb');
  const gltf = useLoader(GLTFLoader, 'mod/others/Robo_Doggo.glb');
  

  // const axesHelper = new AxesHelper(200);
  

  const [headBone, setHeadBone] = useState(null);
  const [neckBone, setNeckBone] = useState(null);

  const printBoneNames = (bone, level = 0) => {    
    // console.log(`${'  '.repeat(level)}${bone.name}`);
    for (const child of bone.children) {
      printBoneNames(child, level + 1);
    }
  };

  if (gltf.scene && !headBone) {
    const headBone = gltf.scene.getObjectByName('Main_Head_Bone');            
    const neckBone = gltf.scene.getObjectByName('Main__Neck_Bone');
    // headBone.add(axesHelper);
    printBoneNames(gltf.scene);
    if (headBone && neckBone) {
      setNeckBone(neckBone)
      setHeadBone(headBone);      
    }
  }

  useFrame(({ mouse }) => {
    // if (headBone && neckBone) {
      // Calculate rotation angles based on cursor position
      const rotationX = (( mouse.y ) * Math.PI * 0.5) - Math.PI/8; // Adjust the sensitivity
      const rotationY = ( (mouse.x) * Math.PI * 2 ) - Math.PI;        
    // }
      // Apply rotations to the head bone      
      
      if( rotationY < -2.035 && rotationY > -4.319)
        neckBone.rotation.y = rotationY;
      neckBone.rotation.x = 0;
      neckBone.rotation.z = 0;      
      if( rotationX > -0.85 && rotationX < 0.5)
        headBone.rotation.x = rotationX;
      headBone.rotation.y = 0;
      headBone.rotation.z = 0;                
    
  });

  return (
    <mesh>
      <primitive object={gltf.scene} scale={[3, 3, 3]} position={[0, -3.5, 0]} rotation={[0, 0, 0]} />
    </mesh>
  );
};

const RiggedModel = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#0A0C10' }}
      camera={{ position: [0, 0, 5]}}      
    >
      <ambientLight intensity={1} color={'white'}/>
      {/* <axesHelper args={[20]}/> */}
      <pointLight position={[0, 0, 5]} />
      <pointLight position={[4, 0, 5]} />
      <CameraControls 
        maxDistance={5.5}
        minDistance={4.5}
        enableZoom={false} 
      />
      <ModelScene />
    </Canvas>
  );
};

export default RiggedModel;
