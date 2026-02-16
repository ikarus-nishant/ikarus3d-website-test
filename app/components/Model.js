import { useCallback, useState, useEffect, useRef } from "react";
import { ClientOnly } from "remix-utils";
import getBrowserEnv from "~/utils/browserEnv";
import ResponsiveImages from "./ResponsiveImages";
import { useInView } from "react-intersection-observer";

const Model = (props) => {
  const env = getBrowserEnv();
  // Code commented below is for dynamically resizing the model to perfectly fit the modelViewer's div and might be needed in the future.
  // const [ rot, setRot ] = useState(props.rotation || 'auto auto auto');  dynamically resizing the model to perfectly fit the modelViewer's div
  const rotation =
    props.rotation === undefined ? "auto auto auto" : props.rotation;
  const shadowIntensity =
    props.shadowIntensity === undefined ? "1" : props.shadowIntensity;
  const [hasModelViewerScriptLoaded, setHasModelViewerScriptLoaded] =
    useState(false);

  // Code commented below is for dynamically resizing the model to perfectly fit the modelViewer's div and might be needed in the future.
  // const [viewportWidth, setViewportWidth] = useState(0);  dynamically resizing the model to perfectly fit the modelViewer's div

  // if (typeof window !== "undefined") {
  //   window.addEventListener(
  //     "resize",
  //     debounce(function (e) {
  //       setViewportWidth(document.body.clientWidth);
  //     })
  //   );
  // }

  const { ref: smallModelRef, inView: modelDivInView } = useInView({
    threshold: 0.8,
    triggerOnce:true
  });

  const containerRef = useRef(null);

  const modelViewerRef = useCallback((viewer) => {
    if (viewer) {
      const ModelViewerElement = customElements.get("model-viewer");
      if (ModelViewerElement) ModelViewerElement.modelCacheSize = 4;
      viewer.addEventListener("progress", onProgress);
      viewer.addEventListener("load", () => {
        const initialCameraOrbit = viewer.cameraOrbit;
        viewer.cameraOrbit = initialCameraOrbit;
      });
      ModelViewerElement.meshoptDecoderLocation =
        "https://cdn.jsdelivr.net/npm/meshoptimizer/meshopt_decoder.js";
    }
  });

  const [hidden, setHidden] = useState("");

  const onProgress = (event) => {
    if (event.detail.totalProgress == 1) {
      if (typeof props.setIsModelLoaded !== "undefined") {
        props.setIsModelLoaded(true);
      }
      setHidden("invisible");
    } else setHidden("");
  };

  var modelViewer;  

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => {
        setHasModelViewerScriptLoaded(true);
      })
      .catch((e) => console.log(e)); // We're importing the model viewer like this instead of using the cdn link to reduce js execution time.

    modelViewer = document.getElementById("viewer");
    // Code commented below is for dynamically resizing the model to perfectly fit the modelViewer's div and might be needed in the future.
    // setViewportWidth(document.body.clientWidth);

    // if(modelViewer !== null){
    // console.log("model is here",modelViewer)
    // modelViewer.addEventListener('load', () => {
    //   let cuboidDiagonal = Math.sqrt(Math.pow(modelViewer.getDimensions().x.toFixed(3),2)+Math.pow(modelViewer.getDimensions().y.toFixed(3),2)+Math.pow(modelViewer.getDimensions().z.toFixed(3),2));
    //   // console.log('Model dimensions:', modelViewer.getDimensions().y.toFixed(3), (cuboidDiagonal*100)/2);
    //   if(cuboidDiagonal/2 < 1){
    //     cuboidDiagonal *= 100;
    //     console.log(Math.atan(0.47153));
    //     if(viewportWidth < 1080 || modelViewer.getDimensions().y.toFixed(3) > modelViewer.getDimensions().x.toFixed(3)){
    //       // console.log("viewPort Width 1 is ", viewportWidth, props.rotation);
    //     }
    //     else{
    //       setRot("auto auto "+(cuboidDiagonal*0.5).toFixed(2)+"cm")
    //     }
    //   }
    //   else{
    //     setRot("auto auto "+(cuboidDiagonal/2).toFixed(2)+"m")
    //   }

    // console.log(modelViewer.getDimensions().x.toFixed(3),modelViewer.getDimensions().y.toFixed(3),modelViewer.getDimensions().z.toFixed(3), cuboidDiagonal);
    // });
    // }
  });

  useEffect(() => {
    if (props.checkARSupport && modelViewer)
      props.ARModeAction(modelViewer.canActivateAR, modelViewer);
  }, [props.checkARSupport]);

  return (
    <div className="w-full h-full flex flex-col my-auto">
      <div
        className={`h-[100%] w-full ${
          hasModelViewerScriptLoaded ? "" : "flex items-center justify-center"
        }`}
        ref={containerRef}
      >
        {hasModelViewerScriptLoaded &&
        props.heroSectionModel &&
        modelDivInView ? (
          <ClientOnly>
            {() =>
              props.disableZoom === false ? (
                <model-viewer
                  min-camera-orbit={props.minCameraOrbit || "auto auto auto"}
                  max-camera-orbit={props.maxCameraOrbit || "auto auto auto"}
                  interaction-prompt={props.interactionPrompt}
                  ar
                  reveal={props.reveal || "auto"}
                  poster={props.poster}
                  ar-modes="webxr scene-viewer quick-look"
                  id="viewer"
                  alt={props.alt}
                  style={{ height: "100%", width: "100%" }}
                  ios-src={props.iosSrc}
                  src={props.src}
                  shadow-intensity={shadowIntensity}
                  skybox-image={props.skybox}
                  camera-controls={props.cameraControls}
                  disable-pan
                  touch-action={props.touchActions}
                  environment-image="mod/studio_small_08_1k.hdr"
                  camera-orbit={rotation}
                  ref={modelViewerRef}
                  scale={props.scale || "1 1 1"}
                  camera-target={props.cameraTarget || "auto auto auto"}
                >
                  <div slot="ar-button"></div>{" "}
                  {/* This div is used to hide the default AR/VR button of the model-viewer*/}
                  {/* <div
                  className={
                    "loader-15 left-1/2 top-1/2 transition-all duration-300 border-purple-400 " +
                    hidden
                  }
                  id="model-progress-bar"
                  slot="progress-bar"
                ></div> */}
                  {/* <div
                  className={
                    "absolute w-full h-full transition-all duration-300 border-red-400 " +
                    hidden
                  }
                >
                  <img
                    className={
                      "absolute left-0 right-0 h-[60%] my-auto top-0 bottom-0 object-contain mx-auto border-green-400 "
                    }
                    src={props.poster}
                  />
                </div> */}
                  <div
                    id="loaderr"
                    className={
                      "relative top-1/2 left-0 right-0 mx-auto mt-12 h-fit w-fit " +
                      hidden
                    }
                  >
                    <p className="font-[500] mx-auto h-fit text-3xl text-darkHeading text-[16px] lap:text-[24px]">
                      Loading 3D Model...
                    </p>
                  </div>
                </model-viewer>
              ) : (
                <model-viewer
                  min-camera-orbit={props.minCameraOrbit || "auto auto auto"}
                  max-camera-orbit={props.maxCameraOrbit || "auto auto auto"}
                  interaction-prompt={props.interactionPrompt}
                  ar
                  reveal={props.reveal || "auto"}
                  poster={props.poster}
                  ar-modes="webxr scene-viewer quick-look"
                  id="viewer"
                  alt={props.alt}
                  style={{ height: "100%", width: "100%" }}
                  ios-src={props.iosSrc}
                  src={props.src}
                  shadow-intensity={shadowIntensity}
                  skybox-image={props.skybox}
                  camera-controls={props.cameraControls}
                  disable-pan
                  disable-zoom
                  touch-action={props.touchActions}
                  environment-image={props.environment}
                  camera-orbit={rotation}
                  ref={modelViewerRef}
                  scale={props.scale || "1 1 1"}
                  camera-target={props.cameraTarget || "auto auto auto"}
                >
                  <div slot="ar-button"></div>{" "}
                  {/* This div is used to hide the default AR/VR button of the model-viewer*/}
                  {/* <div
                  className={
                    "loader-15 left-1/2 top-1/2 transition-all duration-300 " +
                    hidden
                  }
                  id="model-progress-bar"
                  slot="progress-bar"
                ></div> */}
                  {/* <div
                  className={
                    "absolute flex justify-center items-center w-full h-full transition-all duration-300 " +
                    hidden
                  }
                >
                  <img
                    className={
                      "h-[80%] w-[80%] object-contain"
                    }
                    src={props.poster}
                  />
                </div> */}
                </model-viewer>
              )
            }
          </ClientOnly>
        ) : hasModelViewerScriptLoaded && !props.heroSectionModel ? (
          <ClientOnly>
            {() =>
              props.disableZoom === false ? (
                <model-viewer
                  min-camera-orbit={props.minCameraOrbit || "auto auto auto"}
                  max-camera-orbit={props.maxCameraOrbit || "auto auto auto"}
                  interaction-prompt={props.interactionPrompt}
                  ar
                  reveal={props.reveal || "auto"}
                  poster={props.poster}
                  ar-modes="webxr scene-viewer quick-look"
                  id="viewer"
                  alt={props.alt}
                  style={{ height: "100%", width: "100%" }}
                  ios-src={props.iosSrc}
                  src={props.src}
                  shadow-intensity={shadowIntensity}
                  skybox-image={props.skybox}
                  camera-controls={props.cameraControls}
                  disable-pan
                  touch-action={props.touchActions}
                  environment-image="mod/studio_small_08_1k.hdr"
                  camera-orbit={rotation}
                  ref={modelViewerRef}
                  scale={props.scale || "1 1 1"}
                  camera-target={props.cameraTarget || "auto auto auto"}
                >
                  <div slot="ar-button"></div>{" "}
                  {/* This div is used to hide the default AR/VR button of the model-viewer*/}
                  {/* <div
                className={
                  "loader-15 left-1/2 top-1/2 transition-all duration-300 border-purple-400 " +
                  hidden
                }
                id="model-progress-bar"
                slot="progress-bar"
              ></div> */}
                  {/* <div
                className={
                  "absolute w-full h-full transition-all duration-300 border-red-400 " +
                  hidden
                }
              >
                <img
                  className={
                    "absolute left-0 right-0 h-[60%] my-auto top-0 bottom-0 object-contain mx-auto border-green-400 "
                  }
                  src={props.poster}
                />
              </div> */}
                  <div
                    id="loaderr"
                    className={
                      "relative top-1/2 left-0 right-0 mx-auto mt-12 h-fit w-fit " +
                      hidden
                    }
                  >
                    <p className="font-[500] mx-auto h-fit text-3xl text-darkHeading text-[16px] lap:text-[24px]">
                      Loading 3D Model...
                    </p>
                  </div>
                </model-viewer>
              ) : (
                <model-viewer
                  min-camera-orbit={props.minCameraOrbit || "auto auto auto"}
                  max-camera-orbit={props.maxCameraOrbit || "auto auto auto"}
                  interaction-prompt={props.interactionPrompt}
                  ar
                  reveal={props.reveal || "auto"}
                  poster={props.poster}
                  ar-modes="webxr scene-viewer quick-look"
                  id="viewer"
                  alt={props.alt}
                  style={{ height: "100%", width: "100%" }}
                  ios-src={props.iosSrc}
                  src={props.src}
                  shadow-intensity={shadowIntensity}
                  skybox-image={props.skybox}
                  camera-controls={props.cameraControls}
                  disable-pan
                  disable-zoom
                  touch-action={props.touchActions}
                  environment-image={props.environment}
                  camera-orbit={rotation}
                  ref={modelViewerRef}
                  scale={props.scale || "1 1 1"}
                  camera-target={props.cameraTarget || "auto auto auto"}
                >
                  <div slot="ar-button"></div>{" "}
                  {/* This div is used to hide the default AR/VR button of the model-viewer*/}
                  {/* <div
                className={
                  "loader-15 left-1/2 top-1/2 transition-all duration-300 " +
                  hidden
                }
                id="model-progress-bar"
                slot="progress-bar"
              ></div> */}
                  {/* <div
                className={
                  "absolute flex justify-center items-center w-full h-full transition-all duration-300 " +
                  hidden
                }
              >
                <img
                  className={
                    "h-[80%] w-[80%] object-contain"
                  }
                  src={props.poster}
                />
              </div> */}
                </model-viewer>
              )
            }
          </ClientOnly>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            ref={smallModelRef}
          >
            <ResponsiveImages
              src={props.poster}
              className="object-contain h-[80%] w-[80%]"
              alt={props.alt}
            />
          </div>
        )}
      </div>
      <div className={`w-full  ${props?.is360 ? "flex" : "hidden"}`}>
        <ResponsiveImages
          src={`${env.CDN_BASE_URL}/miscellaneous/360.svg`}
          alt="Podium"
          className="object-contain"
        />
        {/* <img
          src={`${env.CDN_BASE_URL}/miscellaneous/360.svg`}
          className="object-contain"
        /> */}
      </div>
    </div>
  );
};
export default Model;
