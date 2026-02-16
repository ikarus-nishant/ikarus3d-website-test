import React from 'react';
import { useEffect, useState } from 'react';
import ImageComparisionSlider from './imageComparisionSlider';
import ResponsiveImages from './ResponsiveImages';
import useViewportWidth from "../hooks/useViewportWidth";

const ImageComparison = (props) => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [hasUserInteractedWithModel, setHasUserInteractedWithModel] = useState(false);
  const [ viewportWidth ] = useViewportWidth();   

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
    <div className='flex flex-col lg:flex-row items-center justify-center gap-[48px] lg:gap-11 w-full mx-auto'>
      <div className='hidden lg:block mx-auto'>
        <div className='grid grid-cols-2 gap-4 tab:gap-[20px] lg:gap-8 h-[250px] tab:h-fit lg:h-[400px]'>
          {props.items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (!hasUserInteractedWithModel) {
                  setHasUserInteractedWithModel(true);
                }
                setSelectedModel(index);
              }}
              className={`${
                index === selectedModel
                  ? 'bg-[#2086D1] bg-gradient-to-r from-[#0052D4] to-[#2175BB]'
                  : 'bg-[#11141A]'
              } max-w-[250px] h-[180px] px-5 pt-4 rounded-[5px] overflow-hidden`}
            >
              <div className='flex flex-col'>
                <span
                  className={` mx-auto ${
                    index === selectedModel
                      ? 'text-white transition-all duration-1000 '
                      : 'opacity-60 text-transparent'
                  }  text-2xl font-semibold`}
                >
                  {item.label}
                </span>
                <ResponsiveImages
                  src={item.img1}
                  sources={item.img1Sources}
                  alt={item.alt}
                  className={`${
                    index === selectedModel
                      ? 'translate-y-[10%]'
                      : '-translate-y-[23%]'
                  } object-cover transition-all duration-500`}
                />
                {/* <img
                  src={item.img1}
                  alt="Model"
                  className={`${
                    index === selectedModel
                      ? "translate-y-[10%]"
                      : "-translate-y-[23%]"
                  } object-cover transition-all duration-500`}
                /> */}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* <div
              className={`w-full lap:w-[80%] mx-auto h-full`}
            > */}
      {/* <div className=""> */}

      {viewportWidth < 1080 ? (
        <ImageComparisionSlider
          bgSize='contain'
          img1={props.items[selectedModel].img1}
          img2={props.items[selectedModel].img2}
          alt={props.items[selectedModel].alt}
          // bgImg={props.items[selectedModel].bgImg}
          setHasUserInteractedWithModel={setHasUserInteractedWithModel}
          hasUserInteractedWithModel={hasUserInteractedWithModel}
        />
      ) : (
        <ImageComparisionSlider
          bgSize='contain'
          img1={props.items[selectedModel].img1}
          img2={props.items[selectedModel].img2}
          alt={props.items[selectedModel].alt}
          // bgImg={props.items[selectedModel].bgImg}
          setHasUserInteractedWithModel={setHasUserInteractedWithModel}
          hasUserInteractedWithModel={hasUserInteractedWithModel}
        />
      )}
      {/* </div> */}
      {/* </div> */}

      <div className='lg:hidden  grid grid-cols-2 tab:grid-cols-4 gap-4 tab:gap-[20px] lg:gap-8 lg:h-[400px]'>
        {props.items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (!hasUserInteractedWithModel) {
                setHasUserInteractedWithModel(true);
              }
              setSelectedModel(index);
            }}
            className={`${
              index === selectedModel
                ? "bg-[#2086D1] bg-gradient-to-r from-[#0052D4] to-[#2175BB]"
                : "bg-[#11141A]"
            } max-w-[250px] max-h-[180px] px-5 pt-4 rounded-[5px] overflow-hidden`}
          >
            <div className='flex flex-col'>
              <span
                className={`mx-auto ${
                  index === selectedModel
                    ? 'text-white transition-all duration-500 '
                    : 'opacity-60 text-transparent'
                }  text-xl font-semibold`}
              >
                {item.label}
              </span>
              <ResponsiveImages
                src={item.img1}
                sources={item.img1Sources}
                alt={item.alt}
                className={`${
                  index === selectedModel
                    ? 'translate-y-[10%]'
                    : '-translate-y-[23%]'
                } object-cover transition-all duration-500`}
              />
              {/* <img
                src={item.img1}
                alt="Model"
                className={`${
                  index === selectedModel
                    ? "translate-y-[10%]"
                    : "-translate-y-[23%]"
                } object-cover transition-all duration-500`}
              /> */}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageComparison;
