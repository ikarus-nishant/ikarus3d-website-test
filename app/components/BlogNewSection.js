import React, { useState, useEffect } from "react";
import ContentHeading from "../components/text/ContentHeading";
import SwipeIt from "../components/SwipeIt";
import { debounce } from "../utils/debounce";
import getBrowserEnv from "~/utils/browserEnv";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import SubSectionText from "../components/text/SubSectionText";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import ServicesSection from "./ServicesSection";
import MobileSplide from "./mobileSplide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import useViewportWidth from "../hooks/useViewportWidth";

export default function BlogNewSection(props) {
  const env = getBrowserEnv();
  const [posts, setPosts] = useState([]);
  const [ viewportWidth ] = useViewportWidth();  

  useEffect(() => {
    console.log("endpoint",`${env.BLOG_API}?tag=${props.tag}`);
    if (
      (props.callBlogs === true || props.callBlogsFooter === true)
    ) {
      (async () => {
        const response = await fetch(`${env.BLOG_API}?tag=${props.tag}`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        // const response = await fetch(`http://localhost:3001/api/v1/blog?tag=${props.tag}`, {
        //   method: "GET",
        //   credentials: "include",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        // });
        // let tags=['hash-homepage', '3d-blog'];
  
        // if(props.tag)
        //   tags = props.tag.split(',');
        // const response = await fetch(`https://ikarus3d.com/media/ghost/api/content/posts/?key=2630db53e27ebf746ee76df7a9&&filter=tags%3A${tags[0]}%2Btags%3A${tags[1]}&include=tags&limit=4`, {
        //   method: "GET",
        //   credentials: "include",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        // });
        
        const data = await response.json();
        setPosts(data?.message?.posts ? data.message.posts.slice(0, 3) : []);
      })();
    }
  }, [props.callBlogs, props.callBlogsFooter]);

  return (
    <>
      {posts && posts.length > 0 && (
        <ServicesSection blockXPadding={true}>
          <div className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16">
            <div
              className={`flex flex-col lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between lg:items-end w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]`}
            >
              <div className="text-left">
                <ServicesHeadingAndSubheading
                  element="h4"
                  heading={props.heading}
                  subheading={props.subheading}
                />
              </div>
              {/* <ServicesPrimaryButton
                buttonText={props.buttonText}
                handleButtonClick={() => navigate(env.BLOG_URL)}
              /> */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                className="h-12 w-full tab:w-fit"
              >
                <a
                  className="whitespace-nowrap flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] shadow-xs rounded-[5px] text-center text-white px-6 tab:px-9 py-[11px] lg:py-3 h-full w-full tab:w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1]"
                  //  onClick={props.handleButtonClick}
                  href={env.BLOG_URL}
                >
                  {props.buttonText}
                </a>
              </motion.div>
            </div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full"
            >
              {viewportWidth > 1280 ? (
                <div className="grid lg:grid-cols-3 gap-8 px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
                  {posts.map((post) => (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      href={post.url}
                      key={post.uuid}
                      className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                    >
                      <img
                        src={post.feature_image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                        loading="lazy"
                      />
                      <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                        <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                          {post.title}
                        </div>
                        <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                          <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                          {post.reading_time} min read
                        </div>
                      </div>
                      <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                    </motion.a>
                  ))}
                </div>
              ) : viewportWidth > 600 ? (
                <Splide
                  tag="section"
                  options={{
                    direction: "ltr",
                    pagination: false,
                    focus: 0,
                    arrows: false,
                    type: "slide",
                    perPage: 2,
                    perMove: 1,
                    gap: 24,
                    padding: 48,
                    speed: 2000,
                    height: "auto",
                  }}
                  hasTrack={false}
                  className="h-full"
                >
                  <SplideTrack className="h-full">
                    {posts.map((post, index) => (
                      <SplideSlide
                        key={post.uuid}
                        className="flex flex-col w-full h-full"
                      >
                        <motion.a
                          variants={{
                            offscreen: {
                              opacity: 0,
                            },
                            onscreen: {
                              opacity: 1,
                              transition: {
                                duration: 2,
                                delay: 0.5,
                              },
                            },
                          }}
                          href={post.url}
                          className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                        >
                          <img
                            src={post.feature_image}
                            alt={post.title}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                            loading="lazy"
                          />
                          <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                            <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                              {post.title}
                            </div>
                            <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                              <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                              {post.reading_time} min read
                            </div>
                          </div>
                          <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                        </motion.a>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </Splide>
              ) : (
                <div className="w-full max-w-full px-6">
                  <MobileSplide data={posts}>
                    {posts.slice(0, 3).map((post) => (
                      <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: 2,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        href={post.url}
                        key={post.uuid}
                        className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                      >
                        <img
                          src={post.feature_image}
                          alt={post.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                          loading="lazy"
                        />
                        <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                          <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                            {post.title}
                          </div>
                          <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                            <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                            {post.reading_time} min read
                          </div>
                        </div>
                        <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                      </motion.a>
                    ))}
                  </MobileSplide>
                </div>
              )}
            </motion.div>
          </div>
        </ServicesSection>
      )}
      {/* <ServicesSection
        blockXPadding={
          viewportWidth >= 600 && viewportWidth < 1280 ? true : false
        }
      >
        <div className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16">
          <div
            className={`flex flex-col lg:flex-row gap-7 lg:gap-9 justify-between items-center w-full ${
              viewportWidth >= 600 && viewportWidth < 1280
                ? "px-6 tab:px-12 lg:px-[112px] xl:px-[138px]"
                : ""
            }`}
          >
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={props.heading}
                subheading={props.subheading}
              />
            </div>
            <ServicesPrimaryButton
              buttonText={props.buttonText}
              handleButtonClick={props.handleButtonClick}
            />
          </div>
          {viewportWidth > 1280 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <a
                  href={post.url}
                  key={post.uuid}
                  className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                >
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                  />
                  <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                    <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                      {post.title}
                    </div>
                    <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                      <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                      {post.reading_time} min read
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                </a>
              ))}
            </div>
          ) : viewportWidth > 600 ? (
            <Splide
              tag="section"
              options={{
                direction: "ltr",
                pagination: false,
                focus: 0,
                arrows: false,
                type: "slide",
                perPage: 2,
                perMove: 1,
                gap: 24,
                padding: 48,
                speed: 2000,
              }}
              hasTrack={false}
              className="h-full"
            >
              <SplideTrack className="h-full">
                {posts.map((post, index) => (
                  <SplideSlide
                    key={post.uuid}
                    className="flex flex-col w-full h-full"
                  >
                    <a
                      href={post.url}
                      className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                    >
                      <img
                        src={post.feature_image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                      />
                      <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                        <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                          {post.title}
                        </div>
                        <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                          <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                          {post.reading_time} min read
                        </div>
                      </div>
                      <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                    </a>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          ) : (
            <div className="w-full max-w-full">
              <MobileSplide data={posts} padding={0}>
                {posts.slice(0, 3).map((post) => (
                  <a
                    href={post.url}
                    key={post.uuid}
                    className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                  >
                    <img
                      src={post.feature_image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                    <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                      <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                        {post.title}
                      </div>
                      <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                        <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                        {post.reading_time} min read
                      </div>
                    </div>
                    <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                  </a>
                ))}
              </MobileSplide>
            </div>
          )}
        </div>
      </ServicesSection> */}
      {/* {posts && posts.length > 0 && (
        <ServicesSection>
          <div className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16">
            <div className="flex flex-col lg:flex-row gap-7 lg:gap-9 justify-between items-center w-full">
              <div className="text-left">
                <ServicesHeadingAndSubheading
                  heading={props.heading}
                  subheading={props.subheading}
                />
              </div>
              <ServicesPrimaryButton
                buttonText={props.buttonText}
                handleButtonClick={props.handleButtonClick}
              />
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {posts.slice(0, 3).map((post) => (
                <a
                  href={post.url}
                  key={post.uuid}
                  className="group h-[380px] w-full relative rounded-[10px] overflow-hidden hover:border-[1px] border-primaryBlue"
                >
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
                  />
                  <div className="flex flex-col gap-4 absolute bottom-[40px] left-[26px] right-[26px] z-20">
                    <div className="text-[20px] font-[550] leading-[30px] tracking-[-0.2px] text-white">
                      {post.title}
                    </div>
                    <div className="flex items-center justify-center relative rounded-[5px] h-[42px] px-3 text-white font-[550] text-[14px] overflow-hidden w-fit">
                      <div className="absolute w-full h-full bg-white opacity-[0.15]"></div>
                      {post.reading_time} min read
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-black via-transparent via-80% absolute w-full h-full z-10 bottom-0"></div>
                </a>
              ))}
            </div>
          </div>
        </ServicesSection>
      )} */}
    </>
  );
}
