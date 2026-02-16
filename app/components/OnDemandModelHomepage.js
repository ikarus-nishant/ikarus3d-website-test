import { useCallback, useEffect, useRef, useState } from "react";
import { ClientOnly } from "remix-utils";
import { debounce } from "../utils/debounce";
import ModalHeroSection from "../components/ModalHeroSection";
import getBrowserEnv from "~/utils/browserEnv";
import ResponsiveImages from "./ResponsiveImages";

const OnDemandModelLoad = (props) => {
  const env = getBrowserEnv();
  const viewportWidth = useRef(null);
  const containerRef = useRef(null);
  const [hasModelLoaded, setHasModelLoaded] = useState(false);
  const [hasModelViewerScriptLoaded, setHasModelViewerScriptLoaded] =
    useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [mvPointer, setMvPointer] = useState(); // this is used to get the model-viewer element after it finishes loading.

  const updateModelViewerAttributes = (viewer, operation) => {
    let cameraTarget = viewer.getCameraTarget();
    let cameraOrbit = viewer.getCameraOrbit();
    let x = parseFloat(cameraTarget.x * 100);
    let y = parseFloat(cameraTarget.y * 100);
    let z = parseFloat(cameraTarget.z * 100);
    let theta = parseFloat(cameraOrbit.theta);
    let phi = parseFloat(cameraOrbit.phi);
    let radius = parseFloat(cameraOrbit.radius);
    const movementAmount = 2.5;

    if (operation === "add") {
      x +=
        Math.abs(
          viewer.getBoundingBoxCenter().x -
          (x + movementAmount * Math.sin(theta)) / 100
        ) <
          (viewer.getDimensions().x / 2) * 0.7
          ? movementAmount * Math.sin(theta)
          : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
      y +=
        Math.abs(
          viewer.getBoundingBoxCenter().y -
          (y + movementAmount * Math.cos(phi)) / 100
        ) <
          (viewer.getDimensions().y / 2) * 0.8
          ? movementAmount * Math.cos(phi)
          : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
      z +=
        Math.abs(
          viewer.getBoundingBoxCenter().z -
          (z + movementAmount * Math.cos(theta)) / 100
        ) <
          (viewer.getDimensions().z / 2) * 0.7
          ? movementAmount * Math.cos(theta)
          : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
    } else if (operation === "subtract") {
      x -=
        Math.abs(
          viewer.getBoundingBoxCenter().x -
          (x - movementAmount * Math.sin(theta)) / 100
        ) <
          (viewer.getDimensions().x / 2) * 0.7
          ? movementAmount * Math.sin(theta)
          : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
      y -=
        Math.abs(
          viewer.getBoundingBoxCenter().y -
          (y - movementAmount * Math.cos(phi)) / 100
        ) <
          (viewer.getDimensions().y / 2) * 0.8
          ? movementAmount * Math.cos(phi)
          : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
      z -=
        Math.abs(
          viewer.getBoundingBoxCenter().z -
          (z - movementAmount * Math.cos(theta)) / 100
        ) <
          (viewer.getDimensions().z / 2) * 0.7
          ? movementAmount * Math.cos(theta)
          : 0; // This condition makes sure that the x, y and z coordinates remain within the 3D space's boundary.
    }

    viewer.setAttribute("camera-target", `${x}cm ${y}cm ${z}cm`);
    viewer.setAttribute("camera-orbit", `${theta}rad ${phi}rad ${radius}m`);
  };

  const handleShowPoster = () => {
    if (typeof mvPointer !== "undefined") {
      setShowLoader(false);
      mvPointer.interactionPrompt = "none";
      setHasModelLoaded(false);
      mvPointer.showPoster();
    }
  };

  const modelViewerRef = useCallback((viewer) => {
    if (viewer) {
      setMvPointer(viewer);
      const ModelViewerElement = customElements.get("model-viewer");
      if (ModelViewerElement) {
        ModelViewerElement.modelCacheSize = 2;

        viewer.addEventListener("load", () => {
          setHasModelLoaded(true);
        });

        const PROMT_MS = 3000;
        const REPEAT_MS = 6700;

        const finger0 = {
          x: {
            initialValue: 1,
            keyframes: [
              { frames: 0.75, value: 0.975 },
              { frames: 0.9, value: 1.025 },
              { frames: 0.7, value: 1 },
            ],
          },
          y: {
            initialValue: 0.45,
            keyframes: [{ frames: 1, value: 0.45 }],
          },
        };

        let hasInteracted = false;

        const prompt = () => {
          if (!hasInteracted) {
            viewer.interact(PROMT_MS, finger0);
            setTimeout(prompt, REPEAT_MS);
          }
        };

        viewer.addEventListener("model-visibility", (e) => {
          const modelVisiblitiy = e.detail.visible;
          if (!modelVisiblitiy) {
            hasInteracted = true;
          }
        });

        viewer.addEventListener(
          "poster-dismissed",
          () => {
            mvPointer.interactionPrompt = "auto";
            mvPointer.resetInteractionPrompt();
            if (hasInteracted) setHasModelLoaded(true);
            hasInteracted = false;
            prompt();
          },
          { once: false }
        );

        const interacted = (event) => {
          if (event.detail.source === "user-interaction") {
            hasInteracted = true;
            viewer.removeEventListener("camera-change", interacted);
          }
        };

        viewer.addEventListener("camera-change", interacted);
      }

      let startDistance = null;

      viewer.addEventListener("touchstart", (event) => {
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

      viewer.addEventListener("touchmove", (event) => {
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
          if (deltaDistance > 0) {
            updateModelViewerAttributes(viewer, "subtract");
          } else if (deltaDistance < 0) {
            updateModelViewerAttributes(viewer, "add");
          }
        }
      });

      ModelViewerElement.meshoptDecoderLocation =
        "https://cdn.jsdelivr.net/npm/meshoptimizer/meshopt_decoder.js";
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

  useEffect(() => {
    viewportWidth.current = document.body.clientWidth;
  }, []);

  useEffect(() => {
    // setHasModelLoaded(false)
    if (typeof mvPointer !== "undefined") {
      setShowLoader(false);
      mvPointer.interactionPrompt = "none";
      setHasModelLoaded(false);
      mvPointer.showPoster();
    }
  }, [props.src]);

  const [isHoverLoader, setIsHoverLoader] = useState(false);

  useEffect(() => {
    if (props.loadModelOnMouseMove) {      
      import("@google/model-viewer")
        .then(() => { 
          setHasModelViewerScriptLoaded(true);       
        })
        .catch((e) => console.log(e)); // We're importing the model viewer like this instead of using the cdn link to reduce js execution time.            
    }

  }, [props.loadModelOnMouseMove]);
    
  if( hasModelViewerScriptLoaded && mvPointer )
    mvPointer?.dismissPoster();

  const handleMouseEnter = () => {
    setIsHoverLoader(true);
    mvPointer?.dismissPoster();
  };
  const handleMouseLeave = () => {
    setIsHoverLoader(false);
  };

  return (
    <div
      className="w-full h-full flex flex-col my-auto cursor-grab"
      ref={containerRef}
    >
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="h-full w-full mx-auto my-auto relative"
      >        
        {hasModelViewerScriptLoaded ? (
          <ClientOnly>
            {() => (
              <>
                <model-viewer
                  min-camera-orbit={props.minCameraOrbit}
                  max-camera-orbit={props.maxCameraOrbit}
                  key={props.modelKey}
                  reveal="manual"
                  src={props.src}
                  environment="/mod/Neutral.hdr"
                  camera-controls
                  style={{ height: "100%", width: "100%" }}
                  ref={modelViewerRef}
                  camera-target={props.cameraTarget}
                  disable-pan={true}
                  disable-zoom={true}
                  ar-modes="webxr scene-viewer quick-look"
                  shadow-intensity={props.shadowIntensity}
                  camera-orbit={props.cameraOrbit}
                  touch-action={"pany-y pinch-zoom"}
                  scale={props?.scale}
                >
                  <div
                    id="lazy-load-poster "
                    className={`image_poster flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat hover:opacity-100`}
                    style={{ backgroundSize: "contain" }}
                    slot="poster"
                  >
                    <ResponsiveImages
                      src={props?.poster}
                      className="object-contain"
                      alt={props?.alt}
                      loading={"lazy"}
                      style={{ height: props.posterHeight || "80%", width: props.posterWidth || "80%" }}
                    />
                    <div
                      className={`w-full h-full absolute z-10 flex items-center transition-opacity duration-700 ease-out`}
                    >
                      <div className="mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw]  flex flex-col text-center lap:text-left w-full justify-center mob:justify-start lap:justify-center lap:w-[75%] xl:w-[80%]"></div>
                    </div>
                  </div>
                </model-viewer>
                {showModal && (
                  <ModalHeroSection
                    setShowModal={setShowModal}
                    acceptedFiles={["png", "jpg", "jpeg"]} //TODO: accept these from props
                  />
                )}
              </>
            )}
          </ClientOnly>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <ResponsiveImages
              src={props?.poster}
              className="object-contain"
              alt={props?.alt}
              loading={"lazy"}
              style={{ height: props.posterHeight || "80%", width: props.posterWidth || "80%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OnDemandModelLoad;
