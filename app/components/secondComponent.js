import React, { useEffect, useState } from "react";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import SubSectionText from "../components/text/SubSectionText";
import ContentHeading from "../components/text/ContentHeading";
import SwipeIt from "../components/SwipeIt";
import { debounce } from "../utils/debounce";
import getBrowserEnv from "~/utils/browserEnv";
import useViewportWidth from "../hooks/useViewportWidth";




export default function SecondComponent(props) {
  const getPortfolio = () => {
    const env = getBrowserEnv();

    return props.secondComponentData.keypoints.map((keypoint, index) => (
      <a
        key={index}
        href="/portfolio"
        className="group border-cyan-400 lap:hover:scale-[1.35] transition-all duration-300 py-8 flex  overflow-hidden cursor-pointer hover:dark:shadow-cardShadow group w-full p-0"
      >
        <div
          className={`px-2 flex flex-col gap-6 lap:group-hover:py-[15px] h-[18rem] xl:h-[22rem] py-2 w-full bg-secondaryDarkBackground lap:hover:bg-primarysecondBackground rounded-[5px] border-white `}
        >
          
          <div className="flex flex-col gap-6 xs:mt-[26px]">
          <div className="mx-auto ">
           <img
              src={`${keypoint.icon}`}
              alt={keypoint.keypoint_heading}
              className="h-[50px] tab:h-[70px]"
            />     
            </div>       
          
          <div className="mt-[30px] dark:text-darkHeading text-center flex flex-col gap-4 items-center justify-center lap:group-hover:justify-start lap:group-hover:mt-2 lap:group-hover:flex-col h-[35%] lap:group-hover:h-[60%]  border-blue-500">
            
              <h3 className="text-primaryBlack font-[500] dark:text-darkHeading text-base lap:text-2xl xl:text-3xl leading-[1.35rem] lap:group-hover:text-[18px]">
                {keypoint.keypoint_heading}
              </h3>
            
              <h4 className="lap:group-hover:text-[12px] text-primaryBlack font-[400] dark:text-darkSubHeading text-[12px] lap:text-[16px] xl:text-[1.5rem] tab:leading-[1.15] lap:leading-[1.1] desk:leading-tight">
                {keypoint.keypoint_desc}
              </h4>
            
          </div>
          </div>
        </div>
      </a>
    ));
  };

  const getPortfolioSlider = (
    perPage,
    perPageLessThan1080,
    perPageLessThan720,
    arrows,
    type,
    autoScroll,
    perMove,
    gap,
    padding,
    paddingLessThan1080,
    paddingLessThan720,
    pagination,
    key
  ) => {
    return (
      <SwipeIt
        perPage={1}
        perPageLessThan1080={1}
        perPageLessThan720={1}
        arrows={false}
        type={type}
        autoScroll={autoScroll}
        perMove={perMove}
        gap={0}
        padding={0}
        paddingLessThan1080={0}
        paddingLessThan720={0}
        pagination={true}
        key={key}
        // autoWidth={true}
      >
        {getPortfolio()}
      </SwipeIt>
    )    
  }

  const [ viewportWidth ] = useViewportWidth(); 
  const env = getBrowserEnv();  

  return (
   <>
   <div className="dark:bg-tertiaryBackground">
    <div className="flex flex-col items-center gap-[30px] lap:gap-[60px] xl:gap-[150px] dark:bg-tertiaryBackground w-full py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-16 lap:px-24 desk:px-32 xl:px-[10vw] xxl:px-[18vw]">
      
      <div className="flex flex-col gap-[16px] lap:gap-[30px] xl:gap-[45px] text-center max-w-[95%] lap_gen:max-w-[80%]">
        <div className="text-center">
          
          <SubSectionHeading text={props.secondComponentData.heading}/>
        </div>
        <div className="text-center">          
          <SubSectionSubHeading text={props.secondComponentData.subtext} />
        </div> 
      </div>
      
      <div className="lap_gen:grid lap_gen:grid-cols-3 tab:gap-10 tab:grid tab:grid-cols-2 gap-6 hidden">
          {props.secondComponentData.keypoints.map((keypoint,index)=>(
              <>
              <div key={index} className="text-darkHeading flex flex-col gap-2">
                  <div className="flex justify-start ">
                    
                 
                    <img
                    key={index}
                    src={`${keypoint.icon}`}
                    className="h-[70px] bg-secondaryDarkBackground aspect-square rounded-full p-2"
                    />
                  
                  </div>
                      <div className="flex flex-col gap-4">
                      
                      <ContentHeading text={keypoint.keypoint_heading}/>
                      
                      <SubSectionText text={keypoint.keypoint_desc}/>
                      </div>
                  </div>
              </>
          ))}
          
      </div>
      <div className="w-[100%] tab:hidden">
            <div className="pb-smCustomHead tab:pb-[30px]  xl:pb-xlCustom w-full tab:hidden">
              {
                
                viewportWidth < 360 ? (
                  getPortfolioSlider(1, 2, 1, false, "loop", false, 1, "0.5rem", "10%", "2.5%", "7.5%", true, "smallerPortfolio")                
                )
                : viewportWidth < 720 ? (              
                  getPortfolioSlider(1, 3, 1, false, "loop", false, 1, "1.5rem", "10%", "2.5%", "10%", true, "smallPortfolio")
              ) : null}
            </div>
          </div>
      </div>
    
   </div>
   
   </>
  )
}
