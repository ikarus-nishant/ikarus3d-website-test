import React, { useState, useEffect, useRef } from "react";
import { debounce } from "../utils/debounce";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ServiceSectionHeading from "./ServiceSectionHeading";
import ServiceSectionText from "./ServiceSectionText";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";
import getBrowserEnv from "../utils/browserEnv";
import ResponsiveImages from "./ResponsiveImages";
import useViewportWidth from "../hooks/useViewportWidth";

function SwipeIt({ children, perPage, padding }) {
  return (
    <div className="relative">
      <Splide
        tag="div"
        options={{
          type: "loop",
          gap: 24,
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: perPage,
          padding: padding,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <SplideSlide className="flex justify-center">{child}</SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

const Carousel = ({ children, perPage, padding, viewportWidth }) => {
  return (
    <SwipeIt perPage={perPage} padding={padding}>
      {children}
    </SwipeIt>
  );
};

const ServicesAutoplayCarouselHelper = (props) => {
  const [ viewportWidth ] = useViewportWidth(); 
  
  return (
    <div className="w-full">
      {viewportWidth <= 600 ? (
        <Carousel perPage={1} padding={24}>
          {props.children}
        </Carousel>
      ) : viewportWidth < 1280 ? (
        <Carousel perPage={2} padding={48}>
          {props.children}
        </Carousel>
      ) : viewportWidth < 1600 ? (
        <Carousel perPage={3} padding={112}>
          {props.children}
        </Carousel>
      ) : viewportWidth < 1920 ? (
        <Carousel perPage={4} padding={138}>
          {props.children}
        </Carousel>
      ) : viewportWidth < 3200 ? (
        <Carousel perPage={4} padding={150}>
          {props.children}
        </Carousel>
      ) : (
        <Carousel perPage={5} padding={150}>
          {props.children}
        </Carousel>
      )}
    </div>
  );
};

const ServicesAutoplayCarousel = (props) => {
  const env = getBrowserEnv();
  return (
    <ServicesSection blockXPadding={true}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay: 0.5, amount: 0.25 }}
        className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16"
      >
        <div className="flex flex-col tab:flex-row justify-between tab:items-end gap-7 lg:gap-9 px-6 lg:px-[112px] xl:px-[138px]">
          <div className="flex flex-col text-left">
            <ServicesHeadingAndSubheading
            element="h2"
              heading={props.heading}
              subheading={props.subheading}
            />
          </div>
          <ServicesPrimaryButton
            buttonText={props.buttonText}
            handleButtonClick={props.handleButtonClick}
          />
        </div>
        <ServicesAutoplayCarouselHelper items={props.items}>
          {props.items.map((item, index) => (
            <div
              key={`service-carousel-${item.title}-${index}`}
              className="group flex flex-col gap-3 lg:gap-4 rounded-[10px] bg-[#11141A] w-full relative overflow-hidden"
            >
              <img
                src={`${env.CDN_BASE_URL}/miscellaneous/carouselBg.svg`}
                alt="Background"
                className="hidden group-hover:block w-full h-full absolute top-0 left-0 object-cover object-center transition-opacity ease-in-out duration-500"
                loading="lazy"
                fetchpriority="low"
              />
              <div className="px-8 pt-8">
                <ServiceSectionHeading heading={item.title} />
              </div>
              <div className="grow flex items-end justify-center relative pt-11 tab:pt-14 tab:px-14">
                <ResponsiveImages
                  src={item.imageSrc}
                  sources={item.sources}
                  alt={item.title}
                  className="w-full h-60 opacity-100 group-hover:opacity-0 transition-opacity ease-in-out duration-500 object-contain object-bottom"
                  loading={"lazy"}
                />
                {/* <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-60 opacity-100 group-hover:opacity-0 transition-opacity ease-in-out duration-500 object-contain object-bottom"
                /> */}
                <div className="absolute top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 px-8">
                  <ServiceSectionText text={item.description} />
                </div>
              </div>
            </div>
          ))}
        </ServicesAutoplayCarouselHelper>
      </motion.div>
    </ServicesSection>
  );
};

export default ServicesAutoplayCarousel;
