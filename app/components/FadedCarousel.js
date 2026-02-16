import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ResponsiveImages from "./ResponsiveImages";
import { useLocation } from "@remix-run/react";
import { useSelector } from "react-redux";

const FadedCarousel = (props) => {
  const headerHeight = useSelector((state) => state.header.currentHeight);
  const location = useLocation();
  const [buildBrandIndex, setBuildBrandIndex] = useState(-1);
  const carouselRef = useRef();
  const {
    ref: buildBrandRef,
    inView: buildBrandInView,
    entry: buildBrandEntry,
  } = useInView({ triggerOnce: false });

  const buildBrandInterval = useRef();

  useEffect(() => {
    const query = location.search.slice(1).split("=");

    if (
      query[0] === "slide" &&
      typeof parseInt(query[1]) === "number" &&
      carouselRef.current
    ) {
      setBuildBrandIndex(parseInt(query[1]));
      setTimeout(() => {
        var carouselPosition = carouselRef.current.getBoundingClientRect().top;
        var offsetPosition = carouselPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 1500);
    }
  }, [headerHeight]);

  useEffect(() => {
    if (buildBrandInView) {
      if (buildBrandIndex === -1) {
        setBuildBrandIndex(0);
      }
      console.log("buildBrandIndex before interval is ", buildBrandIndex);
      buildBrandInterval.current = setInterval(() => {
        setBuildBrandIndex((prevIndex) => {
          console.log("interval's on! ", prevIndex);
          return 1 + prevIndex;
        });
      }, 3000);
    }
    return () => {
      clearInterval(buildBrandInterval.current);
    };
  }, [buildBrandInView]);

  useEffect(() => {
    if (buildBrandIndex === props.carouselData.length) setBuildBrandIndex(0);
  }, [buildBrandIndex]);

  return (
    <div
      id="fadedCarousel"
      ref={buildBrandRef}
      className="bg-primaryDarkBg mt-12 md:mt-[89px] xl:mt-16"
    >
      <div
        ref={carouselRef}
        className="relative mx-6 tab:mx-12 lg:mx-[112px] xl:mx-[138px] flex flex-col-reverse md:flex-row justify-between md:h-[488px] xl:h-[560px] bg-[#11141A] rounded-[10px] overflow-hidden no-scrollbar md:overflow-auto"
      >
        <div className="absolute top-0 right-0 w-full md:hidden md:w-[55%] h-[287px] md:h-full z-10 bg-gradient-to-t md:bg-gradient-to-r from-[#11141A]"></div>
        <div className="mx-[30px] tab:mr-0 tab:ml-11 xl:ml-12 w-fit md:w-[45%] h-full flex flex-col-reverse justify-start gap-[30px] md:gap-0 md:flex-col md:justify-between z-20 relative bg-transparent pb-[30px] tab:pb-16 md:pt-12">
          <div className="text-white font-[600] flex gap-2">
            {props.carouselData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setBuildBrandIndex(index);
                  console.log(
                    "clear ",
                    clearInterval(buildBrandInterval.current)
                  );
                }}
                className={`relative bg-[#D9D9D9] w-${
                  index === buildBrandIndex ? "10" : "5"
                } h-[5px] flex justify-center items-center text-white rounded-[5px] cursor-pointer transition-all duration-[500ms]`}
              >
                <div
                  className={`absolute z-30 ${
                    index === buildBrandIndex
                      ? "w-10 transition-all duration-[3000ms]"
                      : "w-0"
                  } h-full rounded-[5px] bg-[#1F73BC] top-0 left-0`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 tab:gap-4">
            <p
              className={`text-white text-[18px] leading-7 -tracking-[0.16px] md:text-[20px] xl:text-[21px] xl:leading-[32px] xl:font-[600] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-300`}
            >
              {props.carouselData[buildBrandIndex]?.heading}
            </p>
            <p
              className={`text-[#B4B4B4] text-[16px] leading-[24px] xl:text-[18px] lg:font-light transition-all duration-[1000ms] text-white/80`}
            >
              {props.carouselData[buildBrandIndex]?.subHeading}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[55%] relative h-[285px] md:h-full">
          <div className="absolute z-10 -left-[0.75px] hidden md:block bg-gradient-to-r from-[#11141A] w-[75%] h-full"></div>
          {props.carouselData.map((item, index) => (
            <ResponsiveImages
              key={item?.alt}
              src={item.img}
              sources={item.sources}
              className={`h-full w-full object-cover absolute transition-opacity duration-300 ease-linear opacity-${
                index === buildBrandIndex ? "100" : "0"
              }`}
              alt={item?.alt}
              loading={"lazy"}
            />
            // <img
            //   src={item.img}
            //   className={`h-full w-full object-cover absolute transition-opacity duration-300 ease-linear opacity-${
            //     index === buildBrandIndex ? "100" : "0"
            //   }`}
            //   alt={item?.alt}
            // />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FadedCarousel;
