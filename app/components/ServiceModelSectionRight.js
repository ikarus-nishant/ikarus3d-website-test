import React from "react";
import { ClientOnly } from "remix-utils";
import Model from "./Model";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OnDemandModelLoad from "./OnDemandModelLoad";
import { useInView } from "react-intersection-observer";

const ServicesModelSectionRight = (props) => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [hasUserInteractedWithModel, setHasUserInteractedWithModel] =
    useState(false);

    const { ref: ref, inView: loadModelViewerScript, entry: entry } = useInView({ triggerOnce: true });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!hasUserInteractedWithModel) {
        setSelectedModel((current) =>
          current === props.items.length - 1 ? 0 : current + 1
        );
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [hasUserInteractedWithModel]);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row-reverse items-center justify-center gap-11 w-full">
      <div className="px-8 lg:px-0 w-full lg:w-fit">
        <div
          className="w-full lg:w-[500px] h-[300px] lg:h-[550px]"
          onPointerDown={() => {
            if (!hasUserInteractedWithModel) {
              setHasUserInteractedWithModel(true);
            }
          }}
        >
          {/* <ClientOnly>
            {() => (
              <Model
                poster={props.items?.[selectedModel]?.imageSrc
                  ? props.items[selectedModel].imageSrc
                  : ""}
                cameraControls
                touchActions="pan-y pinch-zoom"
                src={
                  props.items?.[selectedModel]?.modelUrl
                    ? props.items[selectedModel].modelUrl
                    : ""
                }
                environment="/mod/Neutral.hdr"
                scale="-1 1 1"
                rotation={`calc(4.1rad + env(window-scroll-y) * 12rad) calc(80deg + env(window-scroll-y) * 45deg) ${
                  props.items?.[selectedModel]?.customDistance
                    ? props.items[selectedModel].customDistance
                    : "100%"
                }`}
              />
            )}
          </ClientOnly> */}


{/* <OnDemandModelLoad
          loaderPadding={"mb-[68px]"}
           src={
            props.items?.[selectedModel]?.modelUrl
              ? props.items[selectedModel].modelUrl
              : ""
          }
          modelKey="AR"
          poster={ props.items?.[selectedModel]?.imageSrc
            ? props.items[selectedModel].imageSrc
            : ""}
          /> */}


{props?.items?.[selectedModel]?.setIsModelLoadedOnce?(<>          
          <ClientOnly>
            {() => (
              <Model
              is360={true}
                poster={ props.items?.[selectedModel]?.imageSrc
                    ? props.items[selectedModel].imageSrc
                    : ""}
                cameraControls
                touchActions="pan-y pinch-zoom"
                src={props.items?.[selectedModel]?.modelUrl}
                environment="/mod/Neutral.hdr"
                scale="-1 1 1"
                rotation={`25deg auto auto ${
                  props.items?.[selectedModel]?.customDistance
                    ? props.items[selectedModel].customDistance
                    : "100%"
                }`}
              />
            )}
          </ClientOnly>
          </>):(
            <>
            <OnDemandModelLoad
              formHeading={props.formHeading}
              loaderPadding={"mb-[68px]"}
              loadModelViewerScript={loadModelViewerScript}
              src={props.items?.[selectedModel]?.modelUrl}
              cameraOrbit="25deg auto auto"
              modelKey="AR"
              poster={ props.items?.[selectedModel]?.imageSrc
              ? props.items[selectedModel].imageSrc
              : ""}
            // setIsModelLoadedOnce={props?.items?.[selectedModel]?.setIsModelLoadedOnce}
            setTheModelLoad={props.setTheModelLoad}
            selectedModel={selectedModel}
          />
            </>
          )}

        </div>
      </div>
      <div className="grid grid-cols-2 tab:grid-cols-4 lg:grid-cols-2 gap-4 tab:gap-[20px] lg:gap-8 h-[250px] tab:h-full lg:h-[400px]">
        {props.items.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => {
              if (!hasUserInteractedWithModel) {
                setHasUserInteractedWithModel(true);
              }
              setSelectedModel(index);
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`${
              index === selectedModel
                ? "bg-[#2086D1] bg-gradient-to-r from-[#0052D4] to-[#2175BB]"
                : "bg-[#11141A]"
            } flex justify-center lg:block max-w-[250px] min-h-[160px] px-2 lg:px-5 rounded-[5px] overflow-hidden cursor-pointer`}
          >
            <img
              src={item.imageSrc}
              alt="Halo 4: Strider helmet 3D Model"
              className="object-cover object-bottom h-[100%] w-[100%]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesModelSectionRight;
