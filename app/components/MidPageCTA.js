import React, { useState } from "react";
import Model from "./Model";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./SecondaryButton";
import SubSectionSubHeading from "./text/SubSectionSubHeading";
import SubSectionHeading from "./text/SubSectionHeading";
import SubSectionText from "./text/SubSectionText";
import ContentHeading from "./text/ContentHeading";
import getBrowserEnv from "~/utils/browserEnv";
import { ClientOnly } from "remix-utils";

export function MidPageCTA_with_model(props) {
  const env = getBrowserEnv();
  const [selectedModel, setSelectedModel] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [thirdSectionSelectedModel, setThirdSectionSelectedModel] = useState(0);
  return (
    <div className="relative text-white dark:bg-primaryDarkBg flex flex-col gap-10 items-center py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-16 lap:px-24 desk:px-32 xl:px-[10vw] xxl:px-[18vw]">
      <div className="flex flex-col xs:gap-6 tab:gap-10 lap_gen:basis-1/2">
        <div className="xs:text-center lap_gen:text-center">
          <SubSectionHeading text={props.midPageCTA_details.heading} />
        </div>
        <div className="xs:text-center lap_gen:text-start">
          <SubSectionSubHeading text={props.midPageCTA_details.subtext} />
        </div>

        <div className="mx-auto lap_gen:hidden xs:block ">
          {/* <img
            src={`${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/washingmachine.webp`}
            className="h-[200px]"
          /> */}
          {/* <Model
          src={props.midPageCTA_details.model_src}
          environment="/mod/Neutral.hdr"
          height="400px"
          width="100%"
        /> */}
          <div className="w-[500px] h-[250px] tab:h-[550px]">
            {/* <ClientOnly> */}
            {() => (
              <Model
                poster={env.HORSE}
                touchActions="pan-y pinch-zoom"
                src={
                  props.modelsData?.[thirdSectionSelectedModel]?.modelUrl ?? ""
                }
                environment="/mod/Neutral.hdr"
                scale="-1 1 1"
                rotation={`calc(4.1rad + env(window-scroll-y) * 12rad) calc(80deg + env(window-scroll-y) * 45deg) 1.5m`}
              />
            )}
            {/* </ClientOnly> */}
          </div>
        </div>

        <button className="flex items-center justify-center tab_old:w-fit min-h-[44px] group mx-auto xs:w-full font-medium border-[1.5px] px-2 xs:px-6 tab:px-8 py-2 xl:py-5 xl:px-12 border-white text-xs tab:text-sm xl:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground rounded-[5px] hover:bg-white">
          <span className="text-center">
            {props.midPageCTA_details.first_button_content}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="ml-1 w-0 h-6 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300 ease-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="xs:hidden lap_gen:flex basis-1/3 my-auto">
        <div className="justify-end my-auto">
          {/* <img
            src={`${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/washingmachine.webp`}
            className="h-[150px]"
          /> */}
        </div>
        <div className="w-[500px] h-[250px] tab:h-[550px]">
          {/* <ClientOnly> */}
          {() => (
            <Model
              poster={env.HORSE}
              touchActions="pan-y pinch-zoom"
              src={
                props.modelsData?.[thirdSectionSelectedModel]?.modelUrl ?? ""
              }
              environment="/mod/Neutral.hdr"
              scale="-1 1 1"
              rotation={`calc(4.1rad + env(window-scroll-y) * 12rad) calc(80deg + env(window-scroll-y) * 45deg) 1.5m`}
            />
          )}
          {/* </ClientOnly> */}
        </div>
        {/* <Model
          src={props.midPageCTA_details.model_src}
          environment="/mod/Neutral.hdr"
          height="400px"
          width="100%"
        /> */}
      </div>
    </div>
  );
}

export function MidPageCTA_consultaiton_call(props) {
  return (
    <div className="bg-secondaryDarkBackground flex gap-10 justify-center items-center py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-16 lap:px-24 desk:px-32 xl:px-[10vw] xxl:px-[18vw]">
      <div className="flex gap-6">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[15px] lap:gap-[30px] xl:gap-[45px] text-center max-w-[100%] tab:text-start">
            <SubSectionHeading text={props.consultation_call_data.heading} />

            <SubSectionSubHeading text={props.consultation_call_data.subtext} />
          </div>

          <div className="lap_gen:hidden flex tab:flex-row xs:flex-col gap-2 tab:max-w-[70%]">
            <button className="min-h-[40px] xs:min-w-[100%] tab:min-w-[70%] tab:max-w-[70%] mx-auto whitespace-nowrap font-[500] basis-1/2 border-[1.5px] px-2 tab:px-4 lap:w-[100%] py-2 xl:py-5 xl:px-12 border-white text-xs tab:text-sm xl:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground rounded-[5px] hover:bg-white">
              {props.consultation_call_data.first_button_content}
            </button>
            <button className="min-h-[40px] border-[1.5px] border-transparent xs:min-w-[100%] tab:min-w-[70%] tab:max-w-[70%] mx-auto whitespace-nowrap font-[500] basis-1/2 px-2 tab:px-4 lap:w-[100%] py-2 xl:py-5 xl:px-12 rounded-[5px] text-xs tab:text-sm xl:text-xl duration-200 text-white animated-gradient">
              {props.consultation_call_data.second_button_content}
            </button>
          </div>
        </div>
        <div className="items-end xs:hidden lap_gen:flex gap-2 w-full">
          <button className="min-h-[44px] whitespace-nowrap font-[500] border-[1.5px] px-2 tab:px-4 lap:w-[100%] py-2 xl:py-5 xl:px-12 border-white text-xs mob:text-sm tab:text-sm xl:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground rounded-[5px] hover:bg-white">
            {props.consultation_call_data.first_button_content}
          </button>
          <button className="min-h-[44px] border-[1.5px] border-transparent whitespace-nowrap font-[500] px-2 tab:px-4 lap:w-[100%] py-[9px] xl:py-5 xl:px-12 rounded-[5px] text-xs tab:text-sm xl:text-xl duration-200 text-white animated-gradient">
            {props.consultation_call_data.second_button_content}
          </button>
        </div>
      </div>
    </div>
  );
}

export function MidPageCTA_without_image(props) {
  return (
    <div className="bg-primaryDarkBg flex gap-10 justify-center items-center py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-16 lap:px-24 desk:px-32 xl:px-[10vw] xxl:px-[18vw]">
      <div className="flex gap-6">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[15px] lap:gap-[30px] xl:gap-[45px] text-center max-w-[100%] tab:text-start">
            <SubSectionHeading text={props.WithoutImageCTA.heading} />

            <SubSectionSubHeading text={props.WithoutImageCTA.subtext} />
          </div>

          <div className="lap_gen:hidden flex tab:flex-row xs:flex-col gap-2 tab:max-w-[70%] ">
            <button className="min-h-[40px] xs:min-w-[100%] tab:justify-start tab:min-w-[70%] tab:max-w-[70%] xs:mx-auto whitespace-nowrap font-[500] tab:basis-1/4 xs:basis-1/2 border-[1.5px] px-2 tab:px-4 lap:w-[100%] py-2 xl:py-5 xl:px-12 border-white text-xs tab:text-sm xl:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground rounded-[5px] hover:bg-white">
              {props.WithoutImageCTA.first_button_content}
            </button>
            <button className="border-[1.5px] tab:justify-start border-transparent min-h-[40px] xs:min-w-[100%] tab:min-w-[70%] tab:max-w-[70%] xs:mx-auto whitespace-nowrap font-[500] tab:basis-1/4 xs:basis-1/2 px-2 tab:px-4 lap:w-[100%] py-2 xl:py-5 xl:px-12 rounded-[5px] text-xs tab:text-sm xl:text-xl duration-200 text-white animated-gradient">
              {props.WithoutImageCTA.second_button_content}
            </button>
          </div>
        </div>
        <div className="items-end xs:hidden lap_gen:flex gap-2 w-full">
          <button className="min-h-[44px] whitespace-nowrap font-[500] border-[1.5px] px-2 tab:px-4 lap:w-[100%] py-2 xl:py-5 xl:px-12 border-white text-xs mob:text-sm tab:text-sm xl:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground rounded-[5px] hover:bg-white">
            {props.WithoutImageCTA.first_button_content}
          </button>
          <button className="min-h-[44px] whitespace-nowrap font-[500] border-[1.5px] border-transparent px-2 tab:px-4 lap:w-[100%] py-[9px] xl:py-5 xl:px-12 rounded-[5px] text-xs tab:text-sm xl:text-xl duration-200 text-white animated-gradient">
            {props.WithoutImageCTA.second_button_content}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MidPageCTA(props) {
  return (
    <div className="relative text-white dark:bg-[#222B36] flex bg-[url('../../public/images/blue_bg.webp')] bg-no-repeat bg-cover bg-center flex-col gap-10 justify-center items-center py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-16 lap:px-24 desk:px-32 xl:px-[10vw] xxl:px-[18vw]">
      <div className="flex flex-col gap-[15px] lap:gap-[30px] xl:gap-[45px] text-center max-w-[80%]">
        <div className="text-center">
          <SubSectionHeading text={props.midPageCTA_details.heading} />
        </div>
        <div className="text-center">
          <SubSectionSubHeading text={props.midPageCTA_details.subtext} />
        </div>
      </div>

      <div className="flex flex-col tab:flex-row gap-2 xs:justify-center tab:gap-4">
        <button className="flex items-center whitespace-nowrap min-h-[44px] group mx-auto xs:w-full font-medium border-[1.5px] px-2 xs:px-6 tab:px-8 py-2 xl:py-5 xl:px-12 border-white text-xs tab:text-sm xl:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground rounded-[5px] hover:bg-white">
          <span>{props.midPageCTA_details.first_button_content}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="ml-1 w-0 h-6 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300 ease-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>

        <button className="whitespace-nowrap mx-auto xs:w-full font-medium px-2 xs:px-6 tab:px-8 lap:px-8 py-2 xl:py-5 xl:px-12 rounded-[5px] text-xs tab:text-sm xl:text-xl duration-200 bg-white text-primaryBlue">
          {props.midPageCTA_details.second_button_content}
        </button>
      </div>
    </div>
  );
}
