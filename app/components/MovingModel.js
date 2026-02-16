import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ClientOnly } from 'remix-utils';

const MovingModel = (props) => {

    const [hasModelViewerScriptLoaded, setHasModelViewerScriptLoaded] = useState(false);    

    const rotation = props.rotation === undefined ? "auto auto auto" : props.rotation;    
    const containerRef = useRef(null);  
    const modelViewerRef = useCallback((viewer) => {
      if (viewer) {
        const ModelViewerElement = customElements.get("model-viewer");
        if(ModelViewerElement)
          ModelViewerElement.modelCacheSize = 4;
        viewer.addEventListener("progress", onProgress);
        viewer.addEventListener("load", () => {                        
          const initialCameraOrbit = viewer.cameraOrbit;    
          viewer.cameraOrbit = initialCameraOrbit;
        });
        if(props.resetRotation){            
            viewer.cameraOrbit = props.antiRotation;
        }
      }
    });

    // if(props.resetRotation){
    //     console.log("reset has begun")
    //     modelViewerRef.current.cameraOrbit = props.rotation
    // }

    const [hidden, setHidden] = useState("");

    const onProgress = (event) => {
      if (event.detail.totalProgress == 1){
        if(typeof props.setIsModelLoaded !== 'undefined'){
          props.setIsModelLoaded(true)
        }      
        setHidden("invisible");
      }
      else setHidden("");
    };

    var modelViewer;

    
  useEffect(() => {
    import('@google/model-viewer').then(()=>setHasModelViewerScriptLoaded(true)).catch((e) => console.log(e)); // We're importing the model viewer like this instead of using the cdn link to reduce js execution time.

    modelViewer = document.getElementById("viewer");  
  })

    return (
        <div className={`h-[100%] w-full ${hasModelViewerScriptLoaded ? "" : "flex items-center justify-center"}`} ref={containerRef}>
            {
                hasModelViewerScriptLoaded 
                ? <ClientOnly>
                    {() =>
                        <model-viewer
                            ref={modelViewerRef}              
                            src={props.src}
                            // environment={props.environment}
                            style={{ height: "100%", width: "100%"}}
                            camera-controls              
                            disable-pan
                            touch-action={props.touchActions}   
                            camera-orbit={props.rotation} 
                            disable-zoom={props.disableZoom}    
                            interaction-prompt='none'                          
                        >

                            <div
                                className={
                                  "loader-15 left-1/2 top-1/2 transition-all duration-300 border-purple-400 "+hidden
                                }
                                id="model-progress-bar"
                                slot="progress-bar"
                            ></div>
                            <div
                              className={
                                "absolute w-full h-full transition-all duration-300 bg-primaryBlack border-red-400 "+hidden
                              }                                
                            >                
                              <img className={"absolute left-0 right-0 h-[90%] my-auto top-0 bottom-0 object-contain mx-auto border-green-400 "} src={props.poster}/>                
                            </div>

                        </model-viewer>
                    }
                  </ClientOnly>                
                : <img src={props.poster} className="object-contain h-[90%]" />                    
            }   

        </div>
    )
}

export default MovingModel