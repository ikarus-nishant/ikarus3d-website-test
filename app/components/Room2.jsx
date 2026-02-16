import { useGLTF } from '@react-three/drei'
import { KTX2Loader } from 'three-stdlib'
import { useThree } from '@react-three/fiber'
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from 'three-stdlib';
import {useKTX2} from "@react-three/drei";
export function Room(props) {

    const { gl } = useThree()    
    // const texture = useKTX2("/mod/Spaces/dRoom.glb")

  const { nodes, materials } = useGLTF("/mod/Spaces/dRoom.glb", true, false, (loader) => {    
      const ktx2Loader = new KTX2Loader().setTranscoderPath(`https://unpkg.com/three@0.154.x/examples/jsm/libs/basis/`)
      loader.setKTX2Loader(ktx2Loader.detectSupport(gl))
  });

// const loader = new GLTFLoader();
// const ktx2Loader = new KTX2Loader().setTranscoderPath(`https://unpkg.com/three@0.154.x/examples/jsm/libs/basis/`);
// loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
// const { nodes, materials } = useLoader(GLTFLoader, "/mod/Spaces/dRoom.glb");

return (   
    <group rotation={[-Math.PI/2, 0, -Math.PI / 2]} scale={props.roomScale} position={props.active ? [ -0.25, 0, 0] :  [props.yOffset, 0, 0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lights_Mesh.geometry}
        material={materials.Glow}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.129}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.129}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials.LightBake_Batch1_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials.LightBake_Batch2_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_2.geometry}
          material={materials.LightBake_Batch3_Material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LightBake_Mesh_O001.geometry}
        material={materials.LightBake_Batch3_Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.129}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.129}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007.geometry}
          material={materials.LightBake_Batch2_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_1.geometry}
          material={materials.LightBake_Batch3_Material}
        />
      </group>
    </group>
  );
}
// TODO find a way to make the commented code work refer https://github.com/pmndrs/drei/blob/master/src/core/useGLTF.tsx https://github.com/pmndrs/drei/blob/master/src/core/useKTX2.tsx
// useGLTF.preload("/mod/Spaces/dRoom.glb", true, false, (loader) => {
//     const ktx2Loader = new KTX2Loader().setTranscoderPath(`https://unpkg.com/three@0.154.x/examples/jsm/libs/basis/`)
//     loader.setKTX2Loader(ktx2Loader.detectSupport(gl))
// });