import React from 'react'

const LpModelViewer = (props) => {
  return (
    // <div className='w-full h-full relative'>
    <model-viewer
        min-camera-orbit={props.minCameraOrbit || "auto auto auto"}
        // interaction-prompt={props.interactionPrompt}
        ar
        // reveal={props.reveal || "auto"}
        // poster={props.poster}
        ar-modes="webxr scene-viewer quick-look"
        id="Newviewer"
        alt={props.alt}
        style={{ height: "100%", width: "100%", display:"block"}}
        ios-src={props.iosSrc}
        src={props.src}
        shadow-intensity={"1"}
        // skybox-image={props.skybox}
        camera-controls
        disable-pan
        // touch-action={props.touchActions}
        // environment-image="mod/studio_small_08_1k.hdr"
        camera-orbit={props.rotation}
        scale={props.scale || "1 1 1"}
        camera-target={props.cameraTarget || "auto auto auto"}
        max-camera-orbit={props.maxCameraOrbit || "auto auto auto"}
        tone-mapping="commerce"
      >
    </model-viewer>
    // </div>
  )
}

export default LpModelViewer