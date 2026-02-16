import React, { useState, useEffect } from 'react'
import Model from '../../components/Model';
import { motion } from 'framer-motion';
import SubSectionText from '../../components/text/SubSectionText';
import { useLoaderData } from '@remix-run/react';
import getBrowserEnv from '../../utils/browserEnv';
import useViewportWidth from "../../hooks/useViewportWidth";

export default function Postid() {

    const env = getBrowserEnv();    
    const [ viewportWidth ] = useViewportWidth();
    const currentModel = useLoaderData();        
    const [checkARSupport, setCheckARSupport] = useState(false);
    const [showError, setShowError] = useState(false);
    
    const ARModeAction = (isSupported, modelViewer) =>{
      if(isSupported)
        modelViewer.activateAR();
      else
        setShowError(true);
    }

    return (
      <div className='relative h-screen bg-primarysecondBackground'>     
        <div className={`absolute left-0 right-0 top-0 bottom-0 ${!showError ? "hidden":""}`}>
          <div className="fixed w-full top-0 bottom-0 h-full backdrop-brightness-50 z-30"></div>
          <div className="fixed top-0 bottom-0 my-auto h-fit left-0 right-0 mx-auto z-40 bg-secondaryDarkBackground rounded-[5px] flex flex-col justify-center min-w-[250px] w-[23vw] pb-smCustomHead xl:pb-mdCustomHead">
            <div className="cursor-pointer text-darkHeading w-full text-end h-[30px] xl:h-[60px] text-xl flex items-end justify-end pt-[4px]" onClick={()=>setShowError(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1 w-[25px] h-[25px] stroke-[1.5px] hover:stroke-[2px] transition-all duration-300 ease-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>                        
            <div className="mt-[15px] xl:mt-[30px] px-10">
              <SubSectionText text="This device does not support AR viewing. Scan the QR code with a supported device." />
            </div>          
          </div>
        </div>           
        <div className='w-full h-full'>
          <Model
            cameraControls={true}
            checkARSupport={checkARSupport}
            ARModeAction={ARModeAction}
            touchActions="pan-y pinch-zoom"
            src={viewportWidth > 600 ? currentModel.src : (currentModel.mobSrc ? currentModel.mobSrc : currentModel.src) }
            ios-src={currentModel.iosSrc}
            poster={currentModel.pic}
            environment="/mod/Neutral.hdr"
            scale="1 1 1"              
          />
        </div>   
        <motion.div 
          initial={{backgroundColor:"#F8F9FC", color:"rgb(13,14,16)"}}
          whileTap={{backgroundColor:"#10151C", color:"rgb(255,255,255,0.87)"}}
          onClick={()=>setCheckARSupport(true)} className="cursor-pointer flex gap-3 items-center transition-all duration-500 ease-out rounded-[5px] p-2 mob:px-3 mob:py-2 absolute right-4 top-16">              
          <img className='w-6 h-6 mob:w-8  mob:h-8 tab:w-6 tab:h-6' src={`${env.CDN_BASE_URL}/miscellaneous/ARMode.svg`} />                          
          <h4 className="right-0 font-[400] text-xs tab:text-base xl:text-2xl leading-[21px]">      
              View in AR      
          </h4>
        </motion.div>
    </div>
    );
  }

  export async function loader({ params }) {
        
    const correctedPath = params.modelSrc.replaceAll('\\','/');    
    const modelType = correctedPath.split('/')[4];    
    let modelSubType = null;
    if(modelType === "Furniture"){
      modelSubType = correctedPath.split('/')[5];
    }    
    let arrayToLoad;
    
    switch(modelType){
      case "Furniture":
        switch(modelSubType){
          case "Chairs":
            arrayToLoad = "chairModels";
            break;
          
          case "Tables":
            arrayToLoad = "tableModels";
            break;

          case "Beds":
            arrayToLoad = "bedModels";
            break;

          case "Sofas":
            arrayToLoad = "sofaModels";
            break;
          
          case "Cabinets":
            arrayToLoad = "cabinetModels";
            break;
        }
        break;
      
      case "Shoes":
        arrayToLoad = 'shoeModels';        
        break;

      case "Accessories":
        arrayToLoad = 'accesoryModels';
        break;

      case "Eyewear":
        arrayToLoad = 'eyewearModels';        
        break;
      
      case "Avatars":
        arrayToLoad = 'avatarModels';        
        break;
  
      case "Electronics":
        arrayToLoad = 'electronicModels';        
        break;
      
      case "Others":
        arrayToLoad = 'othersModels'
        break;
      default:
        arrayToLoad = 'othersModels'
        break;
    }    

    const module = await import(`../../../public/data/modelsData`);
    const currentModels = module[arrayToLoad];   
    const currentModel = currentModels.filter((model)=>{      
      return model.src == correctedPath || model.mobSrc == correctedPath;
    })[0];      

    return currentModel;

  }