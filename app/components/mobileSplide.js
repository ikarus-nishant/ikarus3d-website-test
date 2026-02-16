import { useEffect, useState, useRef } from "react";
import SeparateButtonsSplide from "./SeparateButtonsSplide";

const MobileSplide = ({ children, ...props }) => {
  const _splideElRef = useRef();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [modelsIndex, setModelsIndex] = useState(0);

  const modelsInterval = useRef();

  useEffect(() => {
    if (_splideElRef.current) {
      _splideElRef.current.splide.on("moved", (splide, event) => {
        setModelsIndex((prevIndex)=>splide > props.data.length - 1 ? 0 : splide);
      });      
    }
  }, []);  

  return (
    <>
      <SeparateButtonsSplide
        type="loop"
        perMove={1}
        perPage={1}
        index={modelsIndex}
        splideElRef={_splideElRef}
        length={props.data.length}
        prevRef={prevButtonRef}
        nextRef={nextButtonRef}
        padding={props.padding}
        drag={false}
      >
        {children}
      </SeparateButtonsSplide>
      <div className="grid grid-cols-[36px_1fr_36px] tab:grid-cols-[36px_1fr_36px] w-full justify-between items-center px-6 tab:px-16 md:px-[86px] lg:px-[112px] xl:px-[138px] mt-6">
        <button
          onClick={() => {
            prevButtonRef.current.click();            
          }}
          className="flex justify-center items-center  w-9 h-9 tab:w-full aspect-square bg-gradient-to-r from-[#0052d4] to-[#2175bb] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{transform:'rotateZ(180deg)'}}
          >
            <path
              d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
              fill="white"
            />
          </svg>          
        </button>
        <div className="px-3 flex justify-center gap-1">
          {props.data.map((item, index) => (
            <div
              className={`relative bg-[#D9D9D9] h-1 flex justify-center items-center text-white rounded-[5px] cursor-pointer transition-all duration-[500ms] overflow-x-hidden`}
              style={{ width: index === modelsIndex ? "45px" : "25px" }}
              key={index}
            >
              <div
                className={`absolute z-30  h-full rounded-[5px] bg-[#1F73BC] top-0 left-0`}
                style={{ width: index === modelsIndex ? "45px" : "0px" }}
              ></div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            nextButtonRef.current.click();            
          }}
          className="flex justify-center items-center w-9 h-9 aspect-square bg-gradient-to-r from-[#0052d4] to-[#2175bb] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default MobileSplide;
