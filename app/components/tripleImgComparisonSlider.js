import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { debounce } from "../utils/debounce";
import { useInView } from "react-intersection-observer";
import useViewportWidth from "../hooks/useViewportWidth";

const TripleImgComparisonSlider = (props) => {
  const [imageRevealFraction1, setImageRevealFraction1] = useState(0);
  const [imageRevealFraction2, setImageRevealFraction2] = useState(0);
  const [ viewportWidth ] = useViewportWidth(); 
  const imgContainer = useRef(null);
  const [interacted, setInteracted] = useState(false);
  const [round1, setRound1] = useState(true);
  const [ref, inView, entry] = useInView({ triggerOnce: true });
  
  const slide = (slider, xPosition) => {
    const containerBoundingRect = imgContainer.current.getBoundingClientRect();
    if (slider === 1) {
      setImageRevealFraction1(() => {
        if (xPosition < containerBoundingRect.left) return 0;
        else if (xPosition > containerBoundingRect.right) return 1;
        else if (xPosition / viewportWidth >= imageRevealFraction2)
          return imageRevealFraction2;

        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      });
    }

    if (slider === 2) {
      setImageRevealFraction2(() => {
        if (xPosition < containerBoundingRect.left) return 0;
        else if (xPosition > containerBoundingRect.right) return 1;
        else if (xPosition / viewportWidth < imageRevealFraction1)
          return imageRevealFraction1;

        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      });
    }
  };

  const handleMouseDown = (slider) => {
    if (typeof window !== "undefined") {
      setInteracted(true);
      window.onmousemove = (e) => handleMouseMove(slider, e);
      window.onmouseup = handleMouseUp;
    }
  };
  const handleMouseMove = (slider, e) => {
    slide(slider, e.clientX);
  };
  const handleMouseUp = () => {
    if (typeof window !== "undefined") {
      window.onmousemove = undefined;
      window.onmouseup = undefined;
    }
  };

  const handleTouchMove = (slider, e) => {
    setInteracted(true);
    slide(slider, e.touches[0].clientX);
  };

  useEffect(() => {
    if (!interacted && inView) {
      setImageRevealFraction1(1);
      setImageRevealFraction2(1);

      setTimeout(() => {
        setRound1(false);
        setImageRevealFraction1(0.35);
        setImageRevealFraction2(0.65);
      }, 3100);
    }
  }, [interacted, inView]);

  return (
    <div className="w-full h-full" ref={ref}>
      <div
        ref={imgContainer}
        className="w-full h-full mx-auto relative select-none overflow-hidden"
      >
        <img
          src={props.img3}
          className={`${
            !interacted ? "transition-all ease-linear duration-[3000ms]" : ""
          } pointer-events-none h-full w-full object-cover`}
          alt="From Physical to Virtual: Revolutionize Your World with 3D Space"
          loading="lazy"
        />
        <img
          src={props.img2}
          className={`${
            interacted
              ? ""
              : round1
              ? "transition-all ease-linear duration-[3000ms]"
              : "transition-all ease-linear duration-[2000ms]"
          } absolute inset-0 pointer-events-none h-full w-full object-cover`}
          alt="From Physical to Virtual: Revolutionize Your World with 3D Space"
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraction1 * 100}% 0, ${
              imageRevealFraction1 * 100
            }% 100%, 0 100%)`,
          }}
          loading="lazy"
        />
        <img
          src={props.img1}
          className={`${
            interacted
              ? ""
              : round1
              ? "transition-all ease-linear duration-[3000ms]"
              : "transition-all ease-linear duration-[1000ms]"
          } absolute inset-0 pointer-events-none h-full w-full object-cover`}
          alt="From Physical to Virtual: Revolutionize Your World with 3D Space"
          style={{
            clipPath: `polygon(${imageRevealFraction1 * 100}% 0, ${
              imageRevealFraction2 * 100
            }% 0, ${imageRevealFraction2 * 100}% 100%, ${
              imageRevealFraction1 * 100
            }% 100%)`,
          }}
          loading="lazy"
        />
        <div
          style={{ left: `${imageRevealFraction1 * 100}%` }}
          className={`absolute inset-y-0 ${
            interacted
              ? ""
              : round1
              ? "transition-all ease-linear duration-[3000ms]"
              : "transition-all ease-linear duration-[1000ms]"
          }`}
        >
          <div className="relative h-full">
            <div className="absolute inset-y-0 w-0.5 -ml-px bg-black shadow-2xl"></div>
            <div
              style={{ touchAction: "none" }}
              onMouseDown={() => handleMouseDown(1)}
              onTouchMove={(e) => handleTouchMove(1, e)}
              className="h-[50px] w-[50px] xxl:h-16 xxl:w-16 -ml-6 -mt-6 xxl:-ml-8 xxl:-mt-8 absolute top-1/2 rounded-full bg-black flex gap-4 justify-center items-center cursor-pointer"
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' className="w-6 h-6 lap:w-12 lap:h-12 xl:w-16 xl:h-16 stroke-white stroke-[3px] lap:stroke-[4px] xl:stroke-[5px]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' className="w-6 h-6 lap:w-12 lap:h-12 xl:w-16 xl:h-16 stroke-white stroke-[3px] lap:stroke-[4px] xl:stroke-[5px]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.235 13.2342H4.765V16.7282L0 11.9642L4.765 7.19922V10.6932H19.235V7.19922L24 11.9642L19.235 16.7292V13.2342Z"
                  fill="white"
                />
              </svg>
              {/* <img
                        src={"/images/Virtual space slider icon - black.svg"}
                        className="h-full w-full"
                        /> */}
            </div>
          </div>
        </div>
        <div
          style={{ left: `${imageRevealFraction2 * 100}%` }}
          className={`absolute inset-y-0 ${
            interacted
              ? ""
              : round1
              ? "transition-all ease-linear duration-[3000ms]"
              : "transition-all ease-linear duration-[1000ms]"
          }`}
        >
          <div className="relative h-full">
            <div className="absolute inset-y-0 w-0.5 -ml-px bg-gradient-to-r from-[#015EF1] to-[#489BE1]"></div>
            <div
              style={{ touchAction: "none" }}
              onMouseDown={() => handleMouseDown(2)}
              onTouchMove={(e) => handleTouchMove(2, e)}
              className="h-[50px] w-[50px] xxl:h-16 xxl:w-16 -ml-6 -mt-6 xxl:-ml-8 xxl:-mt-8 absolute top-1/2 bg-gradient-to-r from-[#015EF1] to-[#489BE1] rounded-full flex gap-4 justify-center items-center cursor-pointer"
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' className="w-6 h-6 lap:w-12 lap:h-12 xl:w-16 xl:h-16 stroke-primaryBlue stroke-[3px] lap:stroke-[4px] xl:stroke-[5px]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' className="w-6 h-6 lap:w-12 lap:h-12 xl:w-16 xl:h-16 stroke-primaryBlue stroke-[3px] lap:stroke-[4px] xl:stroke-[5px]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.235 13.2342H4.765V16.7282L0 11.9642L4.765 7.19922V10.6932H19.235V7.19922L24 11.9642L19.235 16.7292V13.2342Z"
                  fill="white"
                />
              </svg>

              {/* <img 
                        src={"/images/virtual space slider icon.svg"}
                        className=""
                        /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleImgComparisonSlider;
