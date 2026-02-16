import React from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib'
import { KTX2Loader } from 'three-stdlib'

// function useMyGLTF(path) {
//   console.log("GLTFLoader is ", GLTFLoader);
//   const gltf = useLoader(GLTFLoader, path, (loader) => {
//     const ktx2Loader = new KTX2Loader();
//     loader.setKTX2Loader(ktx2Loader);
//   });
//   return gltf;
// }

// export function Desk(props) {
//   const { nodes, materials } = useMyGLTF("/models/deskCompressed.glb");
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.pPlane6_2.geometry}
//           material={materials.OTHERS}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.pPlane6_3.geometry}
//           material={materials.OP}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.pPlane6_4.geometry}
//           material={materials.Chair_Mat}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.pPlane6_5.geometry}
//           material={materials.table}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/deskCompressed.glb");


export function Desk(props) {
  const gltf = useLoader(GLTFLoader, '/mod/Furniture/Tables/Table_Compressed.glb')
  return <primitive object={gltf.scene} rotation={props.rotation} scale={props.scale} position={[-0.75,0,0]} hovered={props.hovered}/>
}