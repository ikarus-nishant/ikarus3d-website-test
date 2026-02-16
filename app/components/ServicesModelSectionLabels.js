import React from 'react';
import { ClientOnly } from 'remix-utils';
import Model from './Model';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import OnDemandModelLoad from './OnDemandModelLoad';
import ResponsiveImages from './ResponsiveImages';
import { useInView } from "react-intersection-observer";

const ServicesModelSection = (props) => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [hasUserInteractedWithModel, setHasUserInteractedWithModel] =
    useState(false);  

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
    <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-11 w-full'>
      <div className='px-8 py-10 lg:px-0 w-full lg:w-fit h-full'>
        <div
          className='w-fit mx-auto mob:w-full models_mob:w-[50%] tab:w-full tab_old:w-[50%] h-[300px] tab:h-[500px] lg:w-[500px] lg:h-[550px]'
          onPointerDown={() => {
            if (!hasUserInteractedWithModel) {
              setHasUserInteractedWithModel(true);
            }
          }}
        >
          {/* <ClientOnly>
            {() => (
              <Model
                poster={ props.items?.[selectedModel]?.imageSrc
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

          {props?.items?.[selectedModel]?.setIsModelLoadedOnce ? (
            <>              
              <ClientOnly>
                {() => (
                  <Model
                    is360={true}
                    poster={
                      props.items?.[selectedModel]?.imageSrc
                        ? props.items[selectedModel].imageSrc
                        : ''
                    }
                    cameraControls
                    touchActions='pan-y pinch-zoom'
                    src={props.items?.[selectedModel]?.modelUrl}
                    environment='/mod/Neutral.hdr'
                    scale='-1 1 1'
                    rotation={`calc(4.1rad + env(window-scroll-y) * 12rad) calc(80deg + env(window-scroll-y) * 45deg) ${props.items?.[selectedModel]?.customDistance
                        ? props.items[selectedModel].customDistance
                        : '100%'
                      }`}
                  />
                )}
              </ClientOnly>
            </>
          ) : (
            <>
              <OnDemandModelLoad
                formHeading={props.formHeading}
                loaderPadding={'mb-[68px]'}
                alt={props.items?.[selectedModel]?.alt}
                src={props.items?.[selectedModel]?.modelUrl}
                modelKey='AR'
                poster={props.items?.[selectedModel]?.imageSrc}
                // setIsModelLoadedOnce={props?.items?.[selectedModel]?.setIsModelLoadedOnce}
                setTheModelLoad={props.setTheModelLoad}
                selectedModel={selectedModel}
                loadModelViewerScript={props.loadModelViewerScript}
              />
            </>
          )}

        </div>
      </div>
      <div className='grid grid-cols-2 tab:grid-cols-4 lg:grid-cols-2 gap-4 tab:gap-[20px] lg:gap-8 h-[250px] tab:h-fit lg:h-[400px]'>
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
            className={`${index === selectedModel
                ? 'bg-[#2086D1] bg-gradient-to-r from-[#0052D4] to-[#2175BB] '
                : 'bg-[#11141A]'
              } flex justify-center lg:block max-w-[250px] max-h-[180px] px-2 lg:px-5 pt-2 lg:pt-4 rounded-[5px] overflow-hidden cursor-pointer `}
          >
            <div className='flex flex-col'>
              <span
                className={`mx-auto ${index === selectedModel
                    ? 'text-white transition-all duration-500 '
                    : 'opacity-60 text-transparent'
                  }  text-2xl font-semibold`}
              >
                {item.label}
              </span>
              <ResponsiveImages
                src={item.imageSrc}
                alt={item.alt}
                className={`${index === selectedModel
                    ? 'translate-y-[8%]'
                    : '-translate-y-[23%]'
                  } object-cover transition-all duration-500`}
                loading={"lazy"}
              />
              {/* <img
              src={item.imageSrc}
              alt="Model"
              className={`${index===selectedModel?"translate-y-[8%]":"-translate-y-[23%]"} object-cover transition-all duration-500`}
            /> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesModelSection;
