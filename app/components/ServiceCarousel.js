import React, { useState, useEffect, useRef } from "react";
import { debounce } from "../utils/debounce";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import ServicesSection from "./ServicesSection";
import ServiceSectionHeading from "./ServiceSectionHeading";
import ServiceSectionText from "./ServiceSectionText";
import MobileSplide from "./mobileSplide";
import { motion, useInView } from "framer-motion";
import ResponsiveImages from "./ResponsiveImages";
import useViewportWidth from "../hooks/useViewportWidth";

function SwipeIt({
  children,
  arrows,
  perPage,
  perPageLessThan1080,
  perPageLessThan720,
  perMove,
  padding,
  paddingLessThan1080,
  paddingLessThan720,
  splideElRef,
  pagination,
  direction,
  type,
  firstWindow,
  lastWindow,
}) {
  let _perPageLessThan1080 =
    perPageLessThan1080 === undefined || perPageLessThan1080 === null
      ? perPage - 1
      : perPageLessThan1080;
  let _perPageLessThan720 =
    perPageLessThan720 === undefined || perPageLessThan720 === null
      ? perPage - 1
      : perPageLessThan720;
  let _paddingLessThan720 =
    paddingLessThan720 === undefined || paddingLessThan720 === null
      ? padding
      : paddingLessThan720;
  let _paddingLessThan1080 =
    paddingLessThan1080 === undefined || paddingLessThan1080 === null
      ? padding
      : paddingLessThan1080;

  // useEffect(() => {
  //   if (splideElRef) {
  //     splideElRef.current.splide.on("moved", (splide, event) => {
  //       setIndex(splide);
  //     });
  //   }
  // }, []);

  //If autoWidth is set then perPage is disregarded
  return (
    <>
      <div className="hidden tab:block relative">
        <div
          className={`hidden ${
            firstWindow ? "" : "tab:block"
          } tab:absolute h-full z-40 bg-gradient-to-r from-black left-0`}
          style={{ width: `${padding}px` }}
        ></div>
        <div
          className={`hidden ${
            lastWindow ? "" : "tab:block"
          } tab:absolute h-full z-40 bg-gradient-to-r from-transparent to-black right-0`}
          style={{ width: `${padding}px` }}
        ></div>
        <Splide
          tag="section"
          ref={splideElRef}
          options={{
            direction: direction || "ltr",
            height: direction ? "100%" : "auto",
            pagination: pagination,
            focus: 0,
            arrows: arrows,
            type: type || "slide",
            perPage: perPage,
            perMove: perMove,
            gap: 24,
            padding: padding,
            breakpoints: {
              1080: {
                perPage: _perPageLessThan1080,
                padding: _paddingLessThan1080,
              },
              720: {
                perPage: _perPageLessThan720,
                padding: _paddingLessThan720,
              },
            },
            speed: 2000,
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {React.Children.map(children, (child, index) => {
              return (
                <SplideSlide className="flex justify-center mb-0">
                  {child}
                </SplideSlide>
              );
            })}
          </SplideTrack>
          <div className="splide__arrows" style={{ opacity: "100%" }}>
            <button
              className="splide__arrow splide__arrow--prev"
              style={{
                opacity: "100%",
                padding: "8px",
                background: "linear-gradient(90deg, #015EF1 0%, #489BE1 100%)",
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                zIndex: 50,
                display: `${firstWindow ? "none" : "flex"}`,
                alignItems: "center",
                justifyContent: "content",
              }}
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
            <button
              className="splide__arrow splide__arrow--next"
              style={{
                opacity: "100%",
                padding: "8px",
                background: "linear-gradient(90deg, #015EF1 0%, #489BE1 100%)",
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                zIndex: 50,
                display: `${lastWindow ? "none" : "flex"}`,
                alignItems: "center",
                justifyContent: "content",
              }}
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
        </Splide>
      </div>
    </>
  );
}

export const ServiceCarouselHelper = (props) => {
  const carouselRef = useRef();
  const [ viewportWidth ] = useViewportWidth(); 
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    if (carouselRef) {
      carouselRef.current.splide.on("moved", (splide, event) => {
        setIndex(splide);
      });
    }
  }, []);

  const carousel = ({
    perPage,
    arrows,
    type,
    autoScroll,
    perMove,
    padding,
    paddingLessThan1080,
    paddingLessThan720,
    pagination,
  }) => {
    return (
      <SwipeIt
        splideElRef={carouselRef}
        firstWindow={index === 0}
        lastWindow={index >= props.items.length - perPage}
        perPage={perPage}
        arrows={arrows}
        type={type}
        autoScroll={autoScroll}
        perMove={perMove}
        padding={padding}
        paddingLessThan1080={paddingLessThan1080}
        paddingLessThan720={paddingLessThan720}
        pagination={pagination}
        autoWidth={false}
      >
        {props.children}
      </SwipeIt>
    );
  };

  return (
    <div className="w-full">
      <div className="w-full">
        {/* TODO: SET THE PADDING ACCORDINGLY */}
        {viewportWidth <= 600
          ? carousel({
              perPage: 1,
              arrows: false,
              autoScroll: false,
              perMove: 1,
              padding: 24,
              paddingLessThan1080: "0%",
              paddingLessThan720: "9%",
              pagination: true,
            })
          : viewportWidth < 1280
          ? carousel({
              perPage: 2,
              arrows: true,
              autoScroll: false,
              perMove: 2,
              padding: 48,
              paddingLessThan1080: "0%",
              paddingLessThan720: "9%",
              pagination: false,
            })
          : viewportWidth < 1600
          ? carousel({
              perPage: 3,
              arrows: true,
              autoScroll: false,
              perMove: 3,
              padding: 112,
              paddingLessThan1080: "0%",
              paddingLessThan720: "9%",
              pagination: false,
            })
          : viewportWidth < 1920
          ? carousel({
              perPage: 3,
              arrows: true,
              autoScroll: false,
              perMove: 3,
              padding: 138,
              paddingLessThan1080: "0%",
              paddingLessThan720: "9%",
              pagination: false,
            })
          : viewportWidth < 3200
          ? carousel({
              perPage: 4,
              arrows: true,
              autoScroll: false,
              perMove: 4,
              padding: 150,
              paddingLessThan1080: "0%",
              paddingLessThan720: "9%",
              pagination: false,
            })
          : carousel({
              perPage: 5,
              arrows: true,
              autoScroll: false,
              perMove: 5,
              padding: 150,
              paddingLessThan1080: "0%",
              paddingLessThan720: "9%",
              pagination: false,
            })}
      </div>
    </div>
  );
};

const ServiceCarousel = (props) => {
  const [ viewportWidth ] = useViewportWidth();

  return (
    <ServicesSection blockXPadding={true}>
      <div className="flex flex-col items-center justify-center gap-12 lg:gap-16 w-full">
        <div className="w-full text-center px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
          <ServicesHeadingAndSubheading
            element="h2"
            heading={props.heading}
            subheading={props.subheading}
          />
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full relative"
        >
          {/* <div className="absolute top-1/2 z-10 w-full h-full">
            <img src="/temp/Rectangle 23632.svg" />
          </div> */}
          <div className="z-20 relative w-full">
            {viewportWidth > 600 ? (
              <ServiceCarouselHelper items={props.items}>
                {props.items.map((item, index) => (
                  <motion.div
                    key={`carousel-${item.title}-${index}`}
                    variants={{
                      offscreen: {
                        opacity: 0,
                        scale: 0.5,
                      },
                      onscreen: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 2,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        },
                      },
                    }}
                    className={`flex flex-col gap-6 p-7 lg:p-8 rounded-[10px] bg-[#11141A] w-full h-full`}
                  >
                    <div className="h-16 w-16 overflow-hidden">
                      <ResponsiveImages
                        className="w-full h-full object-contain object-center"
                        src={item.iconSrc}
                        alt={item.title}
                        sources={item.sources}
                        loading={"lazy"}
                      />
                      {/* <img
                        src={item.iconSrc}
                        alt={item.title}
                        className="w-full h-full object-contain object-center"
                      /> */}
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-4">
                      <ServiceSectionHeading heading={item.title} />
                      <ServiceSectionText text={item.description} />
                    </div>
                  </motion.div>
                ))}
              </ServiceCarouselHelper>
            ) : (
              <div className="w-full max-w-full">
                <MobileSplide data={props.items} padding={24}>
                  {props.items.map((item, index) => (
                    <motion.div
                      key={`carousel-${item.title}-${index}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className={`flex flex-col gap-6 p-7 lg:p-8 rounded-[10px] bg-[#11141A] w-full h-full`}
                    >
                      <div className="h-16 w-16 overflow-hidden">
                        <ResponsiveImages
                          className="w-full h-full object-contain object-center"
                          src={item.iconSrc}
                          alt={item.title}
                          sources={item.sources}
                          loading={"lazy"}
                        />
                        {/* <img
                          src={item.iconSrc}
                          alt={item.title}
                          className="w-full h-full object-contain object-center"
                        /> */}
                      </div>
                      <div className="flex flex-col gap-3 lg:gap-4">
                        <ServiceSectionHeading heading={item.title} />
                        <ServiceSectionText text={item.description} />
                      </div>
                    </motion.div>
                  ))}
                </MobileSplide>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </ServicesSection>
  );
};

export default ServiceCarousel;
