import { useCallback, useState, useEffect, useRef } from "react";
import { ClientOnly } from "remix-utils";

const MetaverseModel = (props) => {

  const [mvPointer, setMvPointer] = useState();
  const rotation =
    props.rotation === undefined ? "auto auto auto" : props.rotation;
  const shadowIntensity =
    props.shadowIntensity === undefined ? "1" : props.shadowIntensity;
  const envImage =
    props.environment === undefined
      ? "mod/studio_small_08_1k.hdr"
      : props.environment; //TODO: This should be added in Model.js too
  const [hasModelViewerScriptLoaded, setHasModelViewerScriptLoaded] =
    useState(false);

  const containerRef = useRef(null);

  const modelViewerRef = useCallback((viewer) => {
    if (viewer) {
      setMvPointer(viewer);
      const ModelViewerElement = customElements.get("model-viewer");
      if (ModelViewerElement) ModelViewerElement.modelCacheSize = 4;
      viewer.addEventListener("progress", onProgress);
      viewer.addEventListener("load", () => {
        const initialCameraOrbit = viewer.cameraOrbit;
        viewer.cameraOrbit = initialCameraOrbit;
      });
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

  if( hasModelViewerScriptLoaded && mvPointer )
    mvPointer?.dismissPoster();

  useEffect(() => {
    if( props.loadModelOnMouseMove )
      import("@google/model-viewer")
        .then(() => setHasModelViewerScriptLoaded(true))
        .catch((e) => console.log(e)); // We're importing the model viewer like this instead of using the cdn link to reduce js execution time.

    modelViewer = document.getElementById("viewer");
  }, [ props.loadModelOnMouseMove ]);

  useEffect(() => {
    if (props.checkARSupport && modelViewer)
      props.ARModeAction(modelViewer.canActivateAR, modelViewer);
  }, [props.checkARSupport]);

  return (
    <div
      className="h-[100%] w-full flex items-center justify-center" ref={containerRef}>
      {hasModelViewerScriptLoaded ? (
        <ClientOnly>
          {() =>
            props.disableZoom === false ? (
              <model-viewer
                reveal="manual"
                ar
                ar-modes="webxr scene-viewer quick-look"
                id="viewer"
                alt={props.alt}
                style={{ height: "100%", width: "100%" }}
                ios-src={props.iosSrc}
                src={props.src}
                shadow-intensity={shadowIntensity}
                skybox-image={props.skybox}
                camera-controls
                disable-pan
                touch-action={props.touchActions}
                environment-image={envImage} //TODO: Shouldn't this be updated to "/mod/Neutral.hdr" too?
                camera-orbit={rotation}
                ref={modelViewerRef}
                scale={props.scale || "1 1 1"}
                poster={props.poster}
                autoplay
              >
                <div slot="ar-button"></div>{" "}
                {/* This div is used to hide the default AR/VR button of the model-viewer*/}
              </model-viewer>
            ) : (
              <model-viewer
                reveal="manual"
                ar
                ar-modes="webxr scene-viewer quick-look"
                id="viewer"
                alt={props.alt}
                style={{ height: "100%", width: "100%" }}
                ios-src={props.iosSrc}
                src={props.src}
                shadow-intensity={shadowIntensity}
                skybox-image={props.skybox}
                camera-controls
                disable-pan
                disable-zoom
                touch-action={props.touchActions}
                environment-image={envImage}
                camera-orbit={rotation}
                ref={modelViewerRef}
                scale={props.scale || "1 1 1"}
                poster={props.poster}
                autoplay
              >
                <div slot="ar-button"></div>{" "}
                {/* This div is used to hide the default AR/VR button of the model-viewer*/}
              </model-viewer>
            )
          }
        </ClientOnly>
      ) : (
        <img
          src={props.poster}
          className="object-contain h-full"
          fetchpriority="high"
        />
      )}
    </div>
  );
};
export default MetaverseModel;
