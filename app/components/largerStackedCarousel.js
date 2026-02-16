import { useEffect, useState, useRef } from "react";
import { debounce } from "../utils/debounce";
import getBrowserEnv from "~/utils/browserEnv";
import ResponsiveImages from "./ResponsiveImages";
import useViewportWidth from "../hooks/useViewportWidth";

const env = getBrowserEnv();


//TODO: Replace oldImageSrc with imageSrc and add sources. Right now they are different due to different intrinsic sizes of pictures
const servicesWeOffer = [
  {
    imageSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/AR-Services.webp`
    ),
    oldImageSrc: `${env.CDN_BASE_URL}/Homepage/services/arServices.webp`,
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_471.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_626.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_816.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_916.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1016.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1119.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1237.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1327.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1561.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1634.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1783.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1860.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1920.webp`
      ),
    ],
    alt: "3D Augmented Reality Lamp Placement",
  },
  {
    imageSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Baby-Yoda--Scan.webp`
    ),
    oldImageSrc: `${env.CDN_BASE_URL}/Homepage/services/yoda.webp`,
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_565.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_914.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_966.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1118.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1311.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1475.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1652.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1857.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1920.webp`
      ),
    ],
    alt: "Baby Yoda 3D Scanned Model",
  },
  {
    imageSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Virtual-Spaces-3D-Room.webp`
    ),
    oldImageSrc: `${env.CDN_BASE_URL}/Homepage/services/virtualSpaces.webp`,
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_570.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_855.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1067.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1173.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1332.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1519.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1716.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1909.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1920.webp`
      ),
    ],
    alt: "Interior Virtual Space 3D Room",
  },
  {
    imageSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/VTO-Ready.webp`
    ),
    oldImageSrc: `${env.CDN_BASE_URL}/Homepage/services/vtoReady.webp`,
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_844.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_1298.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_1730.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_1920.webp`
      ),
    ],
    alt: "Timepiece Virtual Try-On 3D Asset",
  },
  {
    imageSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/metaverse.webp`
    ),
    oldImageSrc: `${env.CDN_BASE_URL}/Homepage/services/metaverse.webp`,
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_460.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_615.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_754.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_880.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1003.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1092.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1144.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1237.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1332.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1432.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1521.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1692.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1786.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1920.webp`
      ),
    ],
    alt: "Man Metaverse 3D Avatar",
  },
  {
    imageSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/VR-Service.webp`
    ),
    oldImageSrc: `${env.CDN_BASE_URL}/Homepage/services/vrService.webp`,
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_414.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_567.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_684.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_835.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_916.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1013.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1101.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1193.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1274.webp`
      ),      
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1438.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1523.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1608.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1679.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1740.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1800.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1870.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1920.webp`
      ),
    ],
    alt: "3D  Virtual Reality Services",
  },
];

const largerStackedCarousel = (props) => {  

  const [ normalClasses, setNormalClasses ] = useState([
    "sixthElem",
    "fifthElem",
    "fourthElem",
    "thirdElem",
    "secondElem",
    "firstElem",
  ]); // Rotates up  

  const [ revClasses, setRevClasses ] = useState([                
    "fifthElemRev",
    "fourthElemRev",
    "thirdElemRev",
    "secondElemRev",    
    "firstElemRev",
    "sixthElemRev",    
  ]); //Rotate up

  const [ classes, setClasses ] = useState(normalClasses);
  
  // const [dragging, setDragging] = useState(false);
  const [ viewportWidth ] = useViewportWidth();     

  const handleMouseDown = (e) => {        
    clearInterval(props.intervalId.current);
    props.dragging.current = true;
    props.setInitialX(e.clientX);    
  };

  const handleTouchDown = (e) => {
    clearInterval(props.intervalId.current);
    props.dragging.current = true;
    props.setInitialX(e.touches[0].clientX);
  };

  useEffect(() => { 
    setNormalClasses([
      "sixthElem",
      "fifthElem",
      "fourthElem",
      "thirdElem",
      "secondElem",
      "firstElem",
    ]);    
  }, [props.screen]);

  const revRotateArray = (prevClasses) => {
    let newArr = [];
    newArr[0] = prevClasses[5];
    newArr[1] = prevClasses[0];
    newArr[2] = prevClasses[1];
    newArr[3] = prevClasses[2];
    newArr[4] = prevClasses[3];
    newArr[5] = prevClasses[4];

    return newArr;
  };

  const rotateArray = (prevClasses) => {
    
    let newArr = [];
    newArr[0] = prevClasses[1];
    newArr[1] = prevClasses[2];
    newArr[2] = prevClasses[3];
    newArr[3] = prevClasses[4];
    newArr[4] = prevClasses[5];
    newArr[5] = prevClasses[0];

    return newArr;
  };

  let intervalRef = useRef();  

  useEffect(()=>{
    if(props.rotateClasses === 1){
      
      clearInterval(intervalRef.current)

      setRevClasses((prevClasses) => {
        const rotatedArray = rotateArray(prevClasses);        
        return rotatedArray
      });

      setNormalClasses((prevClasses) => {
        const rotatedArray = rotateArray(prevClasses);        
        setClasses(rotatedArray);
        return rotatedArray
      });      
      props.setRotateClasses(0);      
    }
    if(props.rotateClasses === -1){

      clearInterval(intervalRef.current)
      setRevClasses((prevClasses) => {
        const rotatedArray = revRotateArray(prevClasses);
        setClasses(rotatedArray);
        return rotatedArray
      });
      setNormalClasses((prevClasses) => {
        const rotatedArray = revRotateArray(prevClasses);        
        return rotatedArray
      });      
      props.setRotateClasses(0);      
    }
  },[ props.rotateClasses ])

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      setClasses((prevClasses) => rotateArray(prevClasses));
      setNormalClasses((prevClasses) => rotateArray(prevClasses))
      setRevClasses((prevClasses) => rotateArray(prevClasses))
    }, 5000)  
    
    return ()=>{
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <div
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onMouseUp}
        onTouchStart={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleTouchDown(e);
        }}
        onMouseDown={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleMouseDown(e);
        }}
        id="one"
        draggable={false}
        className={`bg-[#1F2227] no-drag h-[220px] tab:h-[275px] w-[165px] tab:w-[210px] rounded-md absolute ${classes[0]}`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <ResponsiveImages
            className="w-[79%] h-full mx-auto object-contain"
            src={servicesWeOffer[0].oldImageSrc}
            sources={servicesWeOffer[0].sources}
            alt={servicesWeOffer[0].alt}
          />
          {/* <img
            src={`${env.CDN_BASE_URL}/Homepage/services/arServices.webp`}
            className="w-[79%] h-full mx-auto object-contain"
            alt={"3D Augmented Reality Lamp Placement"}
          /> */}
          <div className="absolute w-full h-full z-10 bg-transparent top-0 left-0"></div>
        </div>
      </div>
      <div
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onMouseUp}
        onTouchStart={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) || 
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleTouchDown(e);
        }}
        onMouseDown={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            )  ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleMouseDown(e);
        }}
        id="two"
        draggable={false}
        className={`bg-[#1F2227] no-drag h-[220px] tab:h-[275px] w-[165px] tab:w-[210px] rounded-md absolute ${classes[1]}`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <ResponsiveImages
            className="w-[75%] h-full mx-auto object-contain"
            src={servicesWeOffer[1].oldImageSrc}
            sources={servicesWeOffer[1].sources}
            alt={servicesWeOffer[1].alt}
          />
          {/* <img
            src={`${env.CDN_BASE_URL}/Homepage/services/yoda.webp`}
            className="w-[75%] h-full mx-auto object-contain"
            alt={"Baby Yoda 3D Scanned Model"}
          /> */}
          <div className="absolute w-full h-full z-10 bg-transparent top-0 left-0"></div>
        </div>
      </div>
      <div
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onMouseUp}
        onTouchStart={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )          
          )
            handleTouchDown(e);
        }}
        onMouseDown={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) || 
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleMouseDown(e);
        }}
        id="three"
        draggable={false}
        className={`bg-[#1F2227] no-drag h-[220px] tab:h-[275px] w-[165px] tab:w-[210px] rounded-md absolute ${classes[2]}`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <ResponsiveImages
            className="w-[70%] h-full mx-auto object-contain"
            src={servicesWeOffer[4].oldImageSrc}
            sources={servicesWeOffer[4].sources}
            alt={servicesWeOffer[4].alt}
          />
          {/* <img
            src={`${env.CDN_BASE_URL}/Homepage/services/metaverse.webp`}
            className="w-[70%] h-full mx-auto object-contain"
            alt={"Man Metaverse 3D Avatar"}
          /> */}
          <div className="absolute w-full h-full z-10 bg-transparent top-0 left-0"></div>
        </div>
      </div>
      <div
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onMouseUp}
        onTouchStart={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleTouchDown(e);
        }}
        onMouseDown={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) || 
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleMouseDown(e);
        }}
        id="four"
        draggable={false}
        className={`bg-[#1F2227] no-drag h-[220px] tab:h-[275px] w-[165px] tab:w-[210px] rounded-md absolute ${classes[3]}`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <ResponsiveImages
            className="h-[75%] m-auto object-contain"
            src={servicesWeOffer[3].oldImageSrc}
            sources={servicesWeOffer[3].sources}
            alt={servicesWeOffer[3].alt}
          />
          {/* <img
            src={`${env.CDN_BASE_URL}/Homepage/services/vtoReady.webp`}
            className="h-[75%] m-auto object-contain"
            alt={"Timepiece Virtual Try-On 3D Asset "}
          /> */}
          <div className="absolute w-full h-full z-10 bg-transparent top-0 left-0"></div>
        </div>
      </div>
      <div
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onMouseUp}
        onTouchStart={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleTouchDown(e);
        }}
        onMouseDown={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) || 
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleMouseDown(e);
        }}
        id="five"
        draggable={false}
        className={`bg-[#1F2227] no-drag h-[220px] tab:h-[275px] w-[165px] tab:w-[210px] rounded-md absolute ${classes[4]}`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <ResponsiveImages
            className="w-[81%] h-full mx-auto object-contain"
            src={servicesWeOffer[5].oldImageSrc}
            sources={servicesWeOffer[5].sources}
            alt={servicesWeOffer[5].alt}
          />
          {/* <img
            src={`${env.CDN_BASE_URL}/Homepage/services/vrService.webp`}
            className="w-[81%] h-full mx-auto object-contain"
            alt={"3D  Virtual Reality Services"}
          /> */}
          <div className="absolute w-full h-full z-10 bg-transparent top-0 left-0"></div>
        </div>
      </div>
      <div
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onMouseUp}
        onTouchStart={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) ||
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleTouchDown(e);
        }}
        onMouseDown={(e) => {
          if (
            e.target.parentElement.parentElement.classList.contains(
              "secondElem"
            ) || 
            e.target.parentElement.parentElement.classList.contains(
              "firstElemRev"
            )
          )
            handleMouseDown(e);
        }}
        id="six"
        draggable={false}
        className={`bg-[#1F2227] no-drag h-[220px] tab:h-[275px] w-[165px] tab:w-[210px] rounded-md absolute ${classes[5]}`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <ResponsiveImages
            className="w-[75%] h-full mx-auto object-contain"
            src={servicesWeOffer[2].oldImageSrc}
            sources={servicesWeOffer[2].sources}
            alt={servicesWeOffer[2].alt}
          />
          {/* <img
            src={`${env.CDN_BASE_URL}/Homepage/services/virtualSpaces.webp`}
            className="w-[75%] h-full mx-auto object-contain"
            alt={"Interior Virtual Space 3D Room"}
          /> */}
          <div className="absolute w-full h-full z-10 bg-transparent top-0 left-0"></div>
        </div>
      </div>
      <div className="hidden md:flex absolute z-50 justify-center items-center tab:justify-between gap-2 md:gap-0 left-0 tab:w-[240px] md:w-[260px] right-0 w-full tab:mx-auto tab:left-0 tab:right-0 md:left-auto md:right-auto md:translate-x-[10%] xl:right-[26%] top-72 tab:top-88 md:top-80 lg:top-88 xl:top-96">
        
        <button          
          className="w-9 h-9 flex justify-center items-center rounded-full bg-gradient-to-r from-[#015EF1] to-[#489BE1]"
          onClick={()=>props.moveServiceCard(-1)}      
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: "rotateZ(180deg)" }}
          >
            <path
              d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="flex justify-center w-20 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="relative bg-[#35383D] transition-all duration-500 h-[8px] w-[8px] min-w-[8px] min-h-[8px] max-h-[8px] max-w-[8px] rounded-full overflow-hidden"
              // style={{
              //   width:
              //     index === cardIndex
              //       ? viewportWidth < 600
              //         ? "28.8px"
              //         : viewportWidth < 1600
              //         ? "32px"
              //         : "35.2px"
              //       : viewportWidth < 600
              //       ? "14.4px"
              //       : viewportWidth < 1600
              //       ? "17.8px"
              //       : "20.8px",
              // }}
            >
              <div
                className={`absolute z-30 h-full bg-[#1F73BC] top-0 left-0 transition-all ease-linear aspect-square rounded-full ${
                  index === props.cardIndex ? "duration-[5000ms]" : ""
                }`}
                style={{
                  width:
                    index === props.cardIndex
                      ? viewportWidth < 600
                        ? "8px"
                        : "8px"
                      : "0px",
                }}
              ></div>
            </div>
          ))}
        </div>        
        <button          
          className="w-9 h-9 flex justify-center items-center rounded-full bg-gradient-to-r from-[#489BE1] to-[#015EF1]"
          onClick={()=>props.moveServiceCard(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
              fill="white"
            />
          </svg>                  
        </button>
      </div>      
    </>
  );
};

export default largerStackedCarousel;
