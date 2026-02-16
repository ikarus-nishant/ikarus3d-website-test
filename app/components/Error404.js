import React from "react";
import astronaut from '../../public/images/astronaut.webp';
import getBrowserEnv from '../utils/browserEnv';

const env = getBrowserEnv();

const Error404 = () => {
  const fallback = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center px-4 mob:px-10 tab:px-16 lap:px-24 desk:px-32 xl:px-[10vw] xxl:px-[18vw] h-screen tab:h-max bg-cover py-12 tab:py-16 xl:py-24 bg-repeat bg-gradient-to-tl from-[#0052D4] via-[#4380F7] to-[#0052D4]">
          <h1
            className={`text-primaryBlack dark:text-white font-[500] text-6xl tab:text-7xl lap:text-8xl xl:text-8xl text-center tab:-ml-12`}
          >
            404
          </h1>
          <h3 className="text-primaryBlack dark:text-white font-[400] text-xl mob:text-3xl tab:text-5xl lap:text-7xl xl:text-8xl text-center mt-6 lap:mt-10">
            OOPS THIS IS AWKWARD....
          </h3>
          <div className="my-[24px]">
            <img className="flex-1" src={`${env.CDN_BASE_URL}/miscellaneous/astronaut.webp`} alt="Image of an astronaut floating" style={{
                width: "clamp(4rem, 30vw, 28rem)",
                height: "clamp(4rem, 30vw, 28rem)",
              }}></img>
          </div>

          <h3 className="text-primaryBlack dark:text-darkHeading text-base font-[400] tab:text-2xl xl:text-4xl leading-[1.35rem] text-center">
            We couldn't find the page you were looking for, or maybe it never
            existed.
            <br /> Try heading back to the home page.
          </h3>
          <a
            href='/'
            className={`border-1 mt-[30px] lap:mt-6 flex items-center px-4 mob:px-5 tab:px-8 py-2 xl:py-3 xl:px-16 group rounded-[5px] text-xs mob:text-sm tab:text-base lap:text-lg xl:text-xl transition ease-in-out duration-200 text-primaryBlack bg-white mx-auto`}
          >
            <span className="font-[500]">Back home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-0 h-6 opacity-0 group-hover:opacity-100 group-hover:ml-2 group-hover:w-4 transition-all duration-300 ease-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </>
    );
  };

  return fallback();
};

export default Error404;
