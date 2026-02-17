import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ClientOnly } from "remix-utils";
import ScenesInteraction from "../scripts/scenesInteraction.json";
import Lottie from 'react-lottie-player';
import { debounce } from "../utils/debounce";
import SecondaryButton from './SecondaryButton';
import HeroSectionHeading from './text/HeroSectionHeading';
import HeroSectionSubHeading from './text/HeroSectionSubHeading';
import { motion } from "framer-motion";
import CubeLoader from '../scripts/3D Cube.json'
import ModalHeroSection from "../components/ModalHeroSection";
import getBrowserEnv from "../utils/browserEnv";
import { Link } from 'react-router-dom';
import ResponsiveImages from "./ResponsiveImages";

const env = getBrowserEnv();

const VirtualSpacesHeroSection = (props) => {    

    const viewportWidth = useRef(null);
    const containerRef = useRef(null)
    const [hasModelLoaded, setHasModelLoaded] = useState(false)        
    const [hasModelViewerScriptLoaded, setHasModelViewerScriptLoaded] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [mvPointer, setMvPointer] = useState();  // this is used to get the model-viewer element after it finishes loading.
    
    const updateModelViewerAttributes = (viewer, operation) => {

      let cameraTarget = viewer.getCameraTarget();
      let cameraOrbit =  viewer.getCameraOrbit();
      let x = parseFloat(cameraTarget.x*100);
      let y = parseFloat(cameraTarget.y*100);
      let z = parseFloat(cameraTarget.z*100);  
      let theta = parseFloat(cameraOrbit.theta);
      let phi = parseFloat(cameraOrbit.phi);
      let radius = parseFloat(cameraOrbit.radius);  
      const movementAmount = 2.5;

      if(operation === "add"){        
        x += Math.abs(viewer.getBoundingBoxCenter().x - (x + movementAmount * Math.sin(theta))/100) < viewer.getDimensions().x/2*0.7 ? movementAmount * Math.sin(theta) : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
        y += Math.abs(viewer.getBoundingBoxCenter().y - (y + movementAmount * Math.cos(phi))/100) < viewer.getDimensions().y/2*0.8 ? movementAmount * Math.cos(phi) : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
        z += Math.abs(viewer.getBoundingBoxCenter().z - (z + movementAmount * Math.cos(theta))/100) < viewer.getDimensions().z/2*0.7 ? movementAmount * Math.cos(theta) : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
      }
      else if(operation === "subtract"){        
        x -= Math.abs(viewer.getBoundingBoxCenter().x - (x - movementAmount * Math.sin(theta))/100) < viewer.getDimensions().x/2*0.7 ? movementAmount * Math.sin(theta) : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
        y -= Math.abs(viewer.getBoundingBoxCenter().y - (y - movementAmount * Math.cos(phi))/100) < viewer.getDimensions().y/2*0.8 ? movementAmount * Math.cos(phi) : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
        z -= Math.abs(viewer.getBoundingBoxCenter().z - (z - movementAmount * Math.cos(theta))/100) < viewer.getDimensions().z/2*0.7 ? movementAmount * Math.cos(theta) : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
      }

      viewer.setAttribute('camera-target', `${x}cm ${y}cm ${z}cm`);
      viewer.setAttribute('camera-orbit', `${theta}rad ${phi}rad ${radius}m`);

    }

    const handleShowPoster = () =>{
      if(typeof mvPointer !== "undefined"){    

        setShowLoader(false);
        mvPointer.interactionPrompt = 'none'
        setHasModelLoaded(false);                
        mvPointer.showPoster();        
      }
    }    

    const modelViewerRef = useCallback((viewer) => {        
        if (viewer) {                 
          
          setMvPointer(viewer);
          const ModelViewerElement = customElements.get("model-viewer");
          if(ModelViewerElement){
            ModelViewerElement.modelCacheSize = 2; 
            
            viewer.addEventListener("load", ()=>{                
                setHasModelLoaded(true)
            });

            const PROMT_MS = 3000;
            const REPEAT_MS = 6700;

            const finger0 = {
              x: {
                initialValue: 1,
                keyframes: [
                  {frames: 0.75, value: 0.975},
                  {frames: 0.9, value: 1.025},              
                  {frames: 0.7, value: 1},
                ]
              },
              y: {
                initialValue: 0.45,
                keyframes: [              
                  {frames: 1, value: 0.45},
                ]
              }
            };        
          
            let hasInteracted = false;
          
            const prompt = () => {
              if (!hasInteracted) {
                viewer.interact(PROMT_MS, finger0);
                setTimeout(prompt, REPEAT_MS);
              }
            };
          
            viewer.addEventListener('model-visibility',(e)=>{
              
              const modelVisiblitiy = e.detail.visible;
              console.log('model-visibility changes to ', modelVisiblitiy);
              if(!modelVisiblitiy){
                hasInteracted = true;                
              }
            })

            viewer.addEventListener('poster-dismissed', () => {

              viewer.interactionPrompt = 'auto';
              viewer.resetInteractionPrompt();
              if(hasInteracted)
                setHasModelLoaded(true)
              hasInteracted = false;              
              prompt();
            }, {once: false});
          
            const interacted = (event) => {
              if (event.detail.source === 'user-interaction') {
                hasInteracted = true;
                viewer.removeEventListener('camera-change', interacted);
              }
            };
          
            viewer.addEventListener('camera-change', interacted);
          }
          
          let startDistance = null;                    

          viewer.addEventListener('touchstart', (event) => {
                        
            // Record the starting distance between the two touch points
            if (event.touches.length === 2) {
              const touch1 = event.touches[0];
              const touch2 = event.touches[1];
              startDistance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
              );
            }
          });
          
          viewer.addEventListener('touchmove', (event) => {           
            // Handle pinch-to-zoom events here                        

            if (event.touches.length === 2) {
              const touch1 = event.touches[0];
              const touch2 = event.touches[1];
              const distance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
              );
              const deltaDistance = distance - startDistance;            
              startDistance = distance;
              // if deltaDistance == 0, it would mean that the touch has only begun without any movement with the touchpoints. 
              if(deltaDistance > 0){
                updateModelViewerAttributes(viewer, "subtract")                
              }
              else if(deltaDistance < 0){
                updateModelViewerAttributes(viewer, "add")                
              }              
            }
          });

          viewer.addEventListener('wheel', function(event) {   
                      
            if(viewportWidth.current > 720 && event.ctrlKey)   
                return;            
            if(event.deltaY >=0)
              updateModelViewerAttributes(viewer, "add")                                                            
            else
              updateModelViewerAttributes(viewer, "subtract")                                                                       
          });

          viewer.addEventListener('keydown', function(event) {          
                        
            let cameraTarget = viewer.getCameraTarget();
            let cameraOrbit =  viewer.getCameraOrbit();
            let x = parseFloat(cameraTarget.x*100);
            let y = parseFloat(cameraTarget.y*100);
            let z = parseFloat(cameraTarget.z*100);  
            let theta = parseFloat(cameraOrbit.theta);
            let phi = parseFloat(cameraOrbit.phi);
            let radius = parseFloat(cameraOrbit.radius);              
            const rotationAmount = 0.25;

            switch(event.code) {
                case 'ArrowUp': 
                  updateModelViewerAttributes(viewer, "subtract")                                                                
                  return;
                case 'ArrowDown':
                  updateModelViewerAttributes(viewer, "add")                                               
                  return;
                case 'ArrowLeft':
                  theta += rotationAmount;
                  break;
                case 'ArrowRight':
                  theta -= rotationAmount;
                  break;
                default:
                  return; // Quit when this doesn't handle the key event.
            }            
            // Ensure theta stays within [0, 360]
            if (theta < 0) theta += 360;
            if (theta > 360) theta -= 360;
        
            // Update the attributes                  
            viewer.setAttribute('camera-target', `${x}cm ${y}cm ${z}cm`);
            viewer.setAttribute('camera-orbit', `${theta}rad ${phi}rad ${radius}m`);
          });          
          
        }
      });              
      
      if (typeof window !== "undefined") {
        window.addEventListener(
          "resize",
          debounce(function (e) {        
            viewportWidth.current = document.body.clientWidth;        
          })
        );
      }

      useEffect(()=>{
        import('@google/model-viewer').then(()=>setHasModelViewerScriptLoaded(true)).catch((e) => console.log(e)); // We're importing the model viewer like this instead of using the cdn link to reduce js execution time.
        viewportWidth.current = document.body.clientWidth;
      },[])

      useEffect(()=>{
        setHasModelLoaded(false)
      }, [props.src])
      
  return (
    <div className='h-full w-full mx-auto my-auto relative' ref={containerRef}>
        {
          hasModelViewerScriptLoaded ?
          <ClientOnly>
          {()=>        
            <>      
              <model-viewer
                  key={props.modelKey}
                  alt="3D Virtual Spaces for Immersive Visualization"
                  reveal="manual"     
                  interaction-prompt-style="basic"                              
                  src={ viewportWidth < 600 ? `${env.CDN_BASE_URL}/3D+Models/3D+Spaces/modernInterior.glb` : `${env.CDN_BASE_URL}/3D+Models/3D+Spaces/modernInterior-mob.glb`}
                  environment="/mod/Neutral.hdr"                                        
                  camera-controls
                  style={{ height: "100%", width: "100%" }}
                  environment-image="mod/studio_small_08_1k.hdr"
                  camera-orbit="175deg 90deg 1cm"
                  min-camera-orbit="auto auto 0cm"
                  max-camera-orbit="auto auto 2cm"     
                  camera-target="50cm 100cm 50cm"           
                  field-of-view="180deg"
                  ref={modelViewerRef}
                  disable-pan
              >                    
                  {hasModelLoaded ?                     
                    <div slot='interaction-prompt' className={`${!hasModelLoaded ? 'hidden' : ''} h-20 w-20 xl:h-40 xl:w-40`}>
                      <Lottie
                        loop
                        animationData={ScenesInteraction}
                        play                        
                        className="mx-auto h-20 w-20 xl:h-40 xl:w-40"
                      />                  
                    </div>
                  : "" }  
                  {
                    hasModelLoaded 
                    ? <button onClick={handleShowPoster} className='absolute top-8 right-8 bg-black/50 rounded-[5px] backdrop-blur-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-12 h-12 stroke-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    :''
                  }                  
                  <div id="lazy-load-poster" className={`absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat `} style={{backgroundImage:`url(${props.poster})`}} slot="poster">
                    <div className={`w-full h-full absolute z-10 flex items-center transition-opacity duration-700 ease-out ${showLoader ? "opacity-0":"opacity-100" }`}>
                      <div className="mx-6 tab:mx-12 md:mx-[86px] lg:mx-[112px] xl:mx-[138px] flex flex-col text-center lap:text-left w-full justify-center mob:justify-start lap:justify-center lap:w-[75%] xl:w-[80%]">
                        <div>
                          <HeroSectionHeading headings={["3D Virtual Spaces for ", "Immersive Visualization"]} />
                        </div>
                        <div className="mx-auto tab:mx-0 mt-[15px] lap:mt-[30px] w-full xl:min-w-[740px]">
                          <HeroSectionSubHeading subheadings={["Achieve interactivity in the digital-verse, from meetings", "to conferences."]} />
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true, delay: 0.5 }}
                          className="lap:flex lap:gap-2"
                        >
                          <div
                            
                            className="flex flex-row flex-wrap gap-[12px] text-white justify-start tab:justify-center md:justify-start lap:pb-8 lap:mr-4 mt-[30px] lap:mt-[60px] min-w-[8.25rem] items-center"
                          >
                            <div className="">
                              <button                                
                                onClick={(e) => setShowModal(true)}
                                className={`h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] xl:font-[400] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px] bg-gradient-to-r from-[#015EF1] to-[#489BE1] text-white`}
                              >
                                Get a free sample
                              </button>
                            </div>
                            <div className="">
                            <Link
                              to={props.formURL}
                              className='h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]'
                              style={{ color: '#fff', borderColor: '#fff' }}
                            >
                              Get a custom quote
                            </Link>
                          </div>
                          <button id="button-load" onClick={()=>{!hasModelLoaded ? setShowLoader(true) : setShowLoader(false); mvPointer.dismissPoster()}} className='flex gap-2 bg-primaryWhite text-primaryBlack hover:bg-primaryBlack hover:text-primaryWhite cursor-pointerh-fit xl:h-12 w-fit tab:w-auto text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] xl:font-[400] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]' slot="poster" style={{zIndex:"100"}}>                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <span>
                                Load 3D Model
                            </span>                                                
                          </button>
                          </div>
                           
                        </motion.div>
                      </div>
                    </div> 
                    <div className={`${showLoader ? 'opacity-100' : 'opacity-0'} overflow-hidden h-full w-fit m-auto transition-opacity duration-700 ease-in-out flex justify-center items-center`}>
                        <Lottie
                            loop
                            animationData={CubeLoader}
                            play                        
                            className="mx-auto h-20 w-20 xl:h-40 xl:w-40 bg-secondaryBackground rounded-full"
                        />  
                    </div>       
                  </div>                                     
              </model-viewer>
              {showModal && (
                <ModalHeroSection
                  setShowModal={setShowModal}
                  acceptedFiles={["png", "jpg", "jpeg"]} //TODO: accept these from props
                  formHeading="Get a free sample"
                />
              )}
          </>
          }
          
      </ClientOnly>  

      : <div className='w-full h-full'>
          <ResponsiveImages
              src={props.poster}
              className="object-cover w-full h-full"
              alt={props.alt}
            />
        </div>
        }                    

    </div>
  )
}

export default VirtualSpacesHeroSection