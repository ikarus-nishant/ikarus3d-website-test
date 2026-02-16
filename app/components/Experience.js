import {
  CameraControls,
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  useCursor,  
  Text
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Desk } from "./Desk";
import { Room } from "./Room2"
const Experience = (props) => {

  const [active, setActive] = useState(null);  
  const [hovered, setHovered] = useState(null);  
  useCursor(hovered);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);
  const [ yOffset, setYOffset ] = useState(-1);
  const [ roomScale, setRoomScale ] = useState(0.6)

  useEffect(()=>{
    const viewportWidth = document.body.clientWidth;

    if(viewportWidth < 1440){
      setYOffset(-0.6);
      setRoomScale(0.4);
    }
    else{
      setYOffset(-1);
      setRoomScale(0.6);
    }
  }, [])

  useEffect(() => {
    const targetPosition = new THREE.Vector3();
    if (active) {      
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        2,
        7,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(
        0, 
        0, 
        10, 
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    }
  }, [active]);  

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment files="mod/venice_sunrise_1k.hdr" />
      <CameraControls
        ref={controlsRef}
        maxAzimuthAngle={active ? Infinity : Math.PI/24}
        minAzimuthAngle={active ? -Infinity : -Math.PI/8}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/4}
        maxDistance={props.openPortal ? 10 : 15}
        minDistance={props.openPortal ? 3 : 7.5}              
      />            
      <MonsterStage
        name="Cactoro"
        color="#0A0C10"        
        position-x={props.viewportWidth < 960 ? 0 : props.viewportWidth < 1440 ? 2.3 : props.viewportWidth < 1920 ? 2.5 : 2.5} 
        position-y={props.viewportWidth < 960 ? 0 : props.viewportWidth < 1440 ? 1.2: props.viewportWidth < 1920 ? 1 : 0.75}
        rotation-z={Math.PI/2}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        openPortal={props.openPortal}
        setOpenPortal={props.setOpenPortal}
      >
        {/* <Desk rotation={[-Math.PI/3,0,-Math.PI/2]} scale={12} hovered={hovered === "Cactoro"} /> */}
        <Room yOffset={yOffset} roomScale={roomScale} active={active}/>
      </MonsterStage>
    </>
  );
};

const MonsterStage = ({
  children,  
  name,
  color,
  active,
  setActive,
  hovered,
  setHovered,
  openPortal,
  setOpenPortal,
  ...props
}) => {  
  const portalMaterial = useRef();

  const [ roundedBoxWidth, setRoundedBoxWidth ] = useState(3.75);
  const [ roundedBoxHeight, setRoundedBoxHeight ] = useState(2.5);  

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  useEffect(()=>{
    const viewportWidth = document.body.clientWidth;
    if(viewportWidth < 1440){
      setRoundedBoxWidth(0.85*3.75);
      setRoundedBoxHeight(0.85*2.5);      
    }
    else if(viewportWidth < 1920){
      setRoundedBoxWidth(3.75);
      setRoundedBoxHeight(2.5);      
    }
    else{
      setRoundedBoxWidth(1.2*3.75);
      setRoundedBoxHeight(1.2*2.5);
    }
  }, [])

  return (
    <group {...props}>      
      <RoundedBox
        name={name}
        args={[roundedBoxHeight, roundedBoxWidth, 0.2]}
        onDoubleClick={() =>{ setActive(active === name ? null : name); setOpenPortal(!openPortal) }}
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}                        
      >
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment files="mod/st_fagans_interior_1k.hdr" />
          {children}
          <mesh>
            {openPortal ?
              <Text style={{ cursor: 'pointer' }} onClick={()=>{setActive(active === name ? null : name); setOpenPortal(!openPortal)}} position={[1,2.5,0]} fontSize={0.2} rotation={[0, 0, -Math.PI / 2]} color="white" anchorX="center" anchorY="middle">
                Go back
              </Text>
              :<></>
            }
            <sphereGeometry args={[5, 64, 64]} />            
            <meshStandardMaterial color="#0A0C10" side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

export default Experience
