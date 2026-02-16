import React from "react";
import ikaruslogo from "../../public/images/ikaruslogo.png";
import PrimaryButton from "./primaryButton";
import getBrowserEnv from "../utils/browserEnv";
import LazyLoad from "react-lazyload";

export const GetInTouch = (props) => {
  
  const env = getBrowserEnv();
  const bgColor =
    props.bgcolor === undefined
      ? "dark:bg-[#222B36]"
      : props.bgcolor;

  const description =
    props.desc === undefined
      ? "Let us know your requirements and we’ll outline an option that works just for you!"
      : props.desc;

  const LightbgColor =
    props.lightbgcolor === undefined
      ? "bg-secondaryBackground"
      : props.lightbgcolor;

  const linkto = props.link === undefined ? "/contact-us" : props.link;
  const textcontent =
    props.textcontent === undefined ? "Get in touch" : props.textcontent;

  return (
    <div
      className={`text-center parallaxEffect z-2 py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob:px-10 tab:px-24 lap:px-32 xl:px-[10vw] xxl:px-[18vw] bg-${LightbgColor} dark:bg-${bgColor}`}
    >
      <div className="flex justify-center">
        <LazyLoad>
          <img src={`${env.CDN_BASE_URL}/miscellaneous/ikaruslogo.png`} className="max-w-[6rem] h-[50%]" />          
        </LazyLoad>
      </div>
      <div className="tab:text-lg lap:text-xl dark:text-darkHeading">{description}</div>
      <div className="header z-3 flex justify-center">
        <PrimaryButton link="/contact-us" content={textcontent}></PrimaryButton>
      </div>
    </div>
  );
};
export default GetInTouch;
