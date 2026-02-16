import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ClientOnly } from "remix-utils";
import ScenesInteraction from "../scripts/scenesInteraction.json";
import spinner from "../scripts/spinner.json";
import Lottie from 'react-lottie-player';
import { debounce } from "../utils/debounce";

const Spaces = (props) => {    

    const viewportWidth = useRef(null);
    const containerRef = useRef(null)
    const [hasModelLoaded, setHasModelLoaded] = useState(false)    
    const [hasLoadingBegun, setHasLoadingBegun] = useState(false)

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

    const modelViewerRef = useCallback((viewer) => {        
        if (viewer) {                 
          
          setMvPointer(viewer);
          const ModelViewerElement = customElements.get("model-viewer");
          if(ModelViewerElement){
            ModelViewerElement.modelCacheSize = 2; 
            
            viewer.addEventListener("load", ()=>setHasModelLoaded(true));

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
          
            viewer.addEventListener('poster-dismissed', () => {
              prompt();
            }, {once: true});
          
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
        import('@google/model-viewer').catch((e) => console.log(e)); // We're importing the model viewer like this instead of using the cdn link to reduce js execution time.
        viewportWidth.current = document.body.clientWidth;
      },[])

      useEffect(()=>{
        setHasModelLoaded(false)
      }, [props.src])
      
  return (
    <div className='h-full w-full mx-auto my-auto relative' ref={containerRef}>
        <ClientOnly>
            {()=>              
                <model-viewer
                    key={props.modelKey}
                    reveal="manual"     
                    interaction-prompt-style="basic"                              
                    src={props.src}                    
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
                      <div slot='interaction-prompt' className="h-20 w-20 xl:h-40 xl:w-40">
                        <Lottie
                          loop
                          animationData={ScenesInteraction}
                          play                        
                          className="mx-auto h-20 w-20 xl:h-40 xl:w-40"
                        />                  
                      </div>
                    : "" }                    
                    <div id="lazy-load-poster" className={`absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat `} style={{backgroundImage:`url(${props.poster})`}} slot="poster"></div>
                    <button id="button-load" onClick={(e)=>{console.log("mvPointer is",mvPointer); if(typeof mvPointer !== 'undefined') mvPointer.dismissPoster(); setHasLoadingBegun(true)}} className='absolute left-0 right-0 mx-auto text-center my-auto top-0 bottom-0 hover:bg-primaryBlack hover:text-primaryWhite cursor-pointer rounded-[5px] px-3 py-2 font-[500] shadow-buttonShadow w-fit h-fit flex gap-2 items-end bg-primaryWhite text-primaryBlack' slot="poster" style={{zIndex:"100"}}>                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        <span>
                            Load 3D Model
                        </span>                                                
                    </button>                    
                </model-viewer>
            
            }
            
        </ClientOnly>        

    </div>
  )
}

export default Spaces