import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const ImageComparisionSlider = (props) => {
  const [imageRevealFraction, setImageRevealFraction] = useState(0.5);
  const imgContainer = useRef(null);
  const [interacted, setInteracted] = useState(false);

  const slide = (xPosition) => {
    const containerBoundingRect = imgContainer.current.getBoundingClientRect();
    setImageRevealFraction(() => {
      if (xPosition < containerBoundingRect.left) return 0;
      else if (xPosition > containerBoundingRect.right) return 1;

      return (
        (xPosition - containerBoundingRect.left) / containerBoundingRect.width
      );
    });
  };

  const handleMouseDown = () => {
    if (typeof window !== 'undefined') {
      setInteracted(true);
      window.onmousemove = handleMouseMove;
      window.onmouseup = handleMouseUp;
    }
  };
  const handleMouseMove = (e) => {
    slide(e.clientX);
  };
  const handleMouseUp = () => {
    if (typeof window !== 'undefined') {
      window.onmousemove = undefined;
      window.onmouseup = undefined;
    }
  };

  const handleTouchMove = (e) => {
    setInteracted(true);
    slide(e.touches[0].clientX);
  };

  useEffect(() => {
    let myInterval;

    if (!interacted) {
      myInterval = setInterval(() => {
        setImageRevealFraction(0.6);
        setTimeout(() => setImageRevealFraction(0.4), 600);
      }, 2000);
    } else clearInterval(myInterval);

    return () => clearInterval(myInterval);
  }, [interacted]);

  return (
    <div
      className='w-full lg:w-[50%] h-full'
      style={{
        backgroundImage: `url(${props.bgImg})`,
        backgroundSize: props.bgSize,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='block  w-[50%] mx-auto relative select-none'>
        <div
          ref={imgContainer}
          onPointerDown={() => {
            if (!props.hasUserInteractedWithModel) {
              props.setHasUserInteractedWithModel(true);
            }
          }}
          className='relative xs:w-[100%] xs:h-[100%] mx-auto'
        >
          <img
            src={props.img1}
            alt={props.alt}
            className={`${
              !interacted ? 'transition-all ease-linear duration-500' : ''
            } pointer-events-none object-contain mx-auto lap:max-h-100 xl:max-h-150`}
          />
          <img
            src={props.img2}
            alt={props.alt}
            className={`${
              !interacted ? 'transition-all ease-linear duration-500' : ''
            } absolute inset-0 pointer-events-none object-contain mx-auto lap:max-h-100 xl:max-h-150`}
            style={{
              clipPath: `polygon(0 0, ${imageRevealFraction * 100}% 0, ${
                imageRevealFraction * 100
              }% 100%, 0 100%)`,
            }}
          />
          <div
            style={{ left: `${imageRevealFraction * 100}%` }}
            className={`absolute inset-y-0 ${
              !interacted ? 'transition-all ease-linear duration-500' : ''
            }`}
          >
            <div className='relative h-full'>
              <div className='absolute inset-y-0 w-0.5 bg-white'></div>
              <div
                style={{ touchAction: 'none' }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className='h-12 w-12 -ml-6 -mt-6 absolute top-1/2 shadow-2xl rounded-full flex gap-4 justify-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='w-6 h-6 lap:w-12 lap:h-12 xl:w-16 xl:h-16 stroke-white stroke-[3px]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='w-6 h-6 lap:w-12 lap:h-12 xl:w-16 xl:h-16 stroke-white stroke-[3px]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisionSlider;
