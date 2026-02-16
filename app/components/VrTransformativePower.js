import React, { useState } from "react";
import getBrowserEnv from "../utils/browserEnv";
import VrBridgeImage from "../temp_images/VrBridgeImage.png";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import SubSectionText from "../components/text/SubSectionText";
import ContentHeading from "../components/text/ContentHeading";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import ServicesSubHeading from "./ServicesSubHeading";
import ServicesHeading from "./ServicesHeading";
import ServiceSectionHeading from "./ServiceSectionHeading";
import ServiceSectionText from "./ServiceSectionText";
import ReactPlayer from "react-player/youtube";
import { useInView } from "react-intersection-observer";
import ResponsiveImages from "./ResponsiveImages";
import { useNavigate } from "@remix-run/react";

export function VrVisionToLife(props) {
  const { ref: videoRef, inView: videoInView } = useInView();
  const [sectionClicked, setSectionClicked] = useState(0);
  const navigate = useNavigate();
  const env = getBrowserEnv();
  return (
    <div className="flex flex-col items-center gap-[30px] lap:gap-[64px] w-full tab:px-[50px]">
      <div className="flex flex-col tab:items-center lg:items-start lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between w-full">
        <div className="tab:text-center lg:text-left">
          <ServicesHeadingAndSubheading
            heading={props.VrTransformativeVisionToLife.heading}
            subheading={props.VrTransformativeVisionToLife.subtext}
          />
        </div>
        <div className="flex items-end">
          <ServicesPrimaryButton
            buttonText="Contact us"
            handleButtonClick={() => navigate("/virtual-reality-3d-modeling-services#contact-us")}
          />
        </div>
      </div>

      <div className="w-full h-full rounded-[10px] relative" ref={videoRef}>
        <div className="absolute top-0 left-0 h-full w-full"></div>

        <ReactPlayer
          url={props.VrTransformativeVisionToLife.video_src}
          playing={videoInView}
          loop={true}
          volume={0}
          muted={true}
          light={false}
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/9",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          playsinline={true}
        />
      </div>
    </div>
  );
}

export default function VrTransformativePower(props) {
  const { ref: videoRef, inView: videoInView } = useInView();
  const { ref: videoRefMobile, inView: videoOutViewMobile } = useInView({triggerOnce:true});

  const env = getBrowserEnv();
  return (
    <div className="flex flex-col items-center gap-[38px] lap:gap-16 bg-primaryDarkBg w-full tab:px-[50px]">
      <div className="flex flex-col gap-3 tab:gap-4 text-center">
        <ServicesHeading
          headings={[props.VrTransformativePowerContent.heading]}
        />
        <ServicesSubHeading
          subheading={props.VrTransformativePowerContent.subtext}
        />
      </div>

      <div
        className="tab:hidden xs:block basis-1/2 w-full h-full relative"
        ref={videoRefMobile}
      >
        <div className="absolute top-0 left-0 h-full w-full"></div>
        <ReactPlayer
          url={props.VrTransformativePowerContent.video_src}
          playing={videoOutViewMobile}
          loop={true}
          volume={0}
          muted={true}
          light={false}
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/9",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          playsinline={true}
        />
      </div>

      <div className="basis-1/2 flex flex-col gap-[64px] xl:gap-[80px]">
        <div
          className="xs:hidden tab:block basis-1/2 rounded-[10px] w-full relative"
          ref={videoRef}
        >
          <div className="absolute top-0 left-0 h-full w-full"></div>

          <ReactPlayer
            url={props.VrTransformativePowerContent.video_src}
            playing={videoInView}
            loop={true}
            volume={0}
            muted={true}
            light={false}
            width="100%"
            height="auto"
            style={{
              aspectRatio: "16/9",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            playsinline={true}
          />
        </div>
        <div className="xs:flex xs:flex-col xs:gap-[36px] tab:grid tab:grid-cols-2 tab:gap-[24px] md:flex md:flex-row md:gap-[48px] xl:gap-[48px]">
          {props.VrTransformativePowerContent.keypoints.map(
            (keypoint, index) => (
              <>
                <div key={index} className="text-darkHeading flex gap-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-[12px] xxl:gap-[16px]">
                      <div className="rounded-[5px] w-[5px] bg-gradient-to-r from-[#0052D4]  to-[#2175BB] bg-[#2086D1]"></div>
                      <ServiceSectionHeading
                        heading={keypoint.keypoint_heading}
                      />
                    </div>

                    <ServiceSectionText text={keypoint.keypoint_desc} />
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}
