import React, { useEffect, useState } from "react";
import StatsCircle from "../components/StatsCircle";
import Model from "../components/Model";
import Confetti from "react-confetti";
import Lottie from "react-lottie-player";
import emailLottie from "../scripts/mailLottie.json";
import emailLottieWarn from "../scripts/mail-warn.json";
import botLottieWarn from "../scripts/botLottieWarn.json"

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getBrowserEnv from '../utils/browserEnv';
import { debounce } from "../utils/debounce";
import useViewportWidth from "../hooks/useViewportWidth";

const env = getBrowserEnv();

import {
  contactUsRegistered,
  readCookie,
  parseUserSessionCookie,
} from "~/utils/cookies";
import Error404 from "../components/Error404";

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/thank-you` }
  ]
}

export function meta() {
  return [
    {title: "Thank you | Ikarus 3D"},
    {name:"description", content:"Thank you for getting in touch. Read our blogs or follow us on social platforms. Speed up your 3D journey."},
    {property:"og:title", content: "Thank you - Ikarus 3D"},
    {property:"og:url", content: `${env.SITE_URL}/contact-us`},
    {property:"og:description", content:"Thank you for getting in touch. Read our blogs or follow us on social platforms. Speed up your 3D journey."},
    {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:"twitter:title", content: "Thank you - Ikarus 3D"},
    {property:"twitter:description", content:"Thank you for getting in touch. Read our blogs or follow us on social platforms. Speed up your 3D journey."},
  ];
}

const parseQueryParams = (queryParams) => {
  if (!queryParams)
    return {
      status: "unknown",
    };

  switch (queryParams.get("status_code")) {
    case "201":
      if (queryParams.get("status") === "registered") {
        return {
          status: "registered",
        };
      }
      break;
    case "429":
      if (queryParams.get("status") === "existing") {
        return {
          status: "existing",
        };
      }
      break;
    case "403":
        return{
          status: "bot",
        }
    default:
      return {
        status: "error",
      };
  }

  return {
    status: "unknown",
  };
};

export async function loader({ request }) {
  // https://github.com/remix-run/remix/discussions/3407
  const url = new URL(request.url);
  const status = parseQueryParams(url.searchParams);

  const cookieHeader = request.headers.get("Cookie");
  const cookie = readCookie(contactUsRegistered.name, cookieHeader);
  let cookieData = parseUserSessionCookie(cookie);

  // only render if cookie is set by Get in Touch form
  return json({
    cookie: cookieData["getInTouch"],
    ...status,
    nextRequestDate: cookieData["next_req_date"],
  });
}

const ThankYou = () => {
  const data = useLoaderData();

  const [ viewportWidth ] = useViewportWidth();
  const [viewportHeight, setViewportHeight] = useState(0);
  
  if (typeof window !== "undefined") {
    window.addEventListener(
      "resize",
      debounce(function (e) {
        setViewportHeight(document.body.clientHeight);
      })
    );
  }

  useEffect(() => {
    setViewportHeight(document.body.clientHeight);
  }, []);

  useEffect(()=>{
    var gtmScriptTrigger = document.createElement('script');
    gtmScriptTrigger.textContent = `
      gtag('event','Submittedform',{
        // <event_parameters>
      })
      gtag('event', 'conversion', {'send_to': 'AW-10905166632/wE6uCP33-K0YEKjG_s8o'});
    `;
    document.head.appendChild(gtmScriptTrigger);
  },[]);

  const thankYouPage = (status, nextRequestDate) => {
    // let date = new Date(nextRequestDate);
    // let humanReadableString = date.toUTCString();

    let statsCircleBgColor1 = "#0052D4";
    let statsCircleBgColor2 = "#4364F7";
    let statsCircleBgColor3 = "#6FB1FC";
    let statsCircleTextColor =
      "bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC]";

    if (status === "registered") {
      statsCircleTextColor =
        "bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC]";

      statsCircleBgColor1 = "#0052D4";
      statsCircleBgColor2 = "#4364F7";
      statsCircleBgColor3 = "#6FB1FC";
    } else if (status === "existing") {
      statsCircleTextColor = "bg-[#FAC023]";

      statsCircleBgColor1 = "#F8BB14";
      statsCircleBgColor2 = "#F8BB14";
      statsCircleBgColor3 = "#FAEFD0";
    }

    return (
      <>
        <div className="flex flex-col items-center px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] pb-smCustomHead tab_old:pt-smCustomHead tab_old:pb-mdCustomHead xl_old:py-mdCustomHead">
          { data.status !== "bot" ? <Confetti
            recycle={false}
            numberOfPieces={500}
            tweenDuration={10000}
            width={viewportWidth - 5} //Giving full viewportWidth leads to horizontal scrollbar to appear
            height={viewportHeight}
          /> : ""}
          {
          status === "bot" ? (
            <>
              <div className="mt-[24px] tab_old:mt-0 xl_old:hidden">
                <Lottie
                  loop={true}
                  animationData={botLottieWarn}
                  play
                  style={{ width: "8rem", height: "8rem" }}
                  className="mx-auto"
                />
              </div>
              <div className="mt-[30px] tab_old:mt-0 hidden xl_old:block">
                <Lottie
                  loop={false}
                  animationData={botLottieWarn}
                  play
                  style={{ width: "14rem", height: "14rem" }}
                  className="mx-auto"
                />
              </div>
            </>
          )
          :
          status === "existing" ? (
            <>
              <div className="mt-[24px] tab_old:mt-0 xl_old:hidden">
                <Lottie
                  loop={false}
                  animationData={emailLottieWarn}
                  play
                  style={{ width: "8rem", height: "8rem" }}
                  className="mx-auto"
                />
              </div>
              <div className="mt-[30px] tab_old:mt-0 hidden xl_old:block">
                <Lottie
                  loop={false}
                  animationData={emailLottieWarn}
                  play
                  style={{ width: "14rem", height: "14rem" }}
                  className="mx-auto"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mt-[24px] tab_old:mt-0 xl_old:hidden">
                <Lottie
                  loop={false}
                  animationData={emailLottie}
                  play
                  style={{ width: "8rem", height: "8rem" }}
                  className="mx-auto"
                />
              </div>
              <div className="mt-[30px] tab_old:mt-0 hidden xl_old:block">
                <Lottie
                  loop={false}
                  animationData={emailLottie}
                  play
                  style={{ width: "14rem", height: "14rem" }}
                  className="mx-auto"
                />
              </div>
            </>
          )}
          <div className="text-center mt-[4px] tab_old:mt-[16px] xl_old:mt-0">
            <h1
              className={`font-[500] text-darkHeading text-2xl tab_old:text-[32px] lap:text-5xl xl_old:text-8xl`}
            >
              <span className="leading-[1.15rem] tab_old:leading-[39px] xl_old:leading-[1.25]">
                {status === "registered"
                  ? "You're all set!"
                  : status === "existing"
                  ? "We have already received your request."
                  : status === "bot"
                  ? "You seem to be a bot."
                  : null}
              </span>
            </h1>
          </div>
          <div className="text-center mt-[8px] tab_old:mt-[20px]">
            <h3 className="text-primaryBlack dark:text-darkHeading text-base font-[400] tab_old:text-2xl xl_old:text-5xl leading-[1.35rem]">
              {status === "registered"
                ? "Your response has been recorded and we will get back to you soon."
                : status === "existing"
                ? "Our team will get in touch with you within 48 hours of your first request. Sit tight!"
                : status === "bot"
                ? "If you're not, give it another shot!"
                : null}
            </h3>
            {/* {status === "existing" ? (
              <h4 className="text-primaryBlack dark:text-darkHeading text-base font-[400] tab_old:text-2xl xl_old:text-5xl leading-[1.35rem] mt-4">
                You can contact us again after <span className="font-[500]">{humanReadableString}</span>                
              </h4>
            ) : null} */}
          </div>
          <div className="rounded-[5px] overflow-hidden my-[30px] tab_old:my-[60px] max-w-[1680px]">
            <div className="flex justify-center w-full mx-auto tab_old:px-4 tab_old:gap-4 lap:gap-0 pb-12 lap:justify-start xl_old:gap-24 bg-gradient-to-r from-[#0052D4] to-[#2175BB] lap:w-auto lap:pr-[170px] lap:pl-[30px] xl_old:pl-[115px]">
              <div className="min-w-[220px] lap:min-w-[294px] tab_old:h-[250px] lap:h-[300px] xl_old:h-[520px] mt-[50px] xl_old:mt-[65px] hidden tab_old:block">
                <Model
                  touchActions="pan-y pinch-zoom"
                  src="mod/others/snoopy.glb"
                  environment="/mod/Neutral.hdr"
                  scale="2 2 2"
                  rotation={`calc(0.25rad + env(window-scroll-y) * 45deg) auto ${
                    viewportWidth < 1920 ? "60cm" : "57cm"
                  }`}
                />
              </div>
              <div className="px-4 mob_old:px-10 tab_old:px-0 text-center tab_old:text-left tab_old:w-[470px] lap:w-[545px] xl_old:w-[760px] py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom">
                <div className="">
                  <p className="flex w-full dark:text-darkHeading tab_old:text-2xl xl_old:text-5xl leading-[1.35rem] mb-12">
                     We have helped our clients achieve:
                  </p>
                </div>
                <div className="tab_old:w-[45%] h-[200px] mt-[15px] tab_old:hidden mx-auto">
                  <Model
                    touchActions="pan-y pinch-zoom"
                    src="mod/others/snoopy.glb"
                    environment="/mod/Neutral.hdr"
                    rotation={`calc(0.25rad + env(window-scroll-y) * 45deg) auto 30cm`}
                  />
                </div>
                <div className="justify-center tab_old:justify-start gap-8 xl_old:gap-16 mt-[30px] hidden tab_old:flex">
                  <div>
                    <StatsCircle
                      statValue="72"
                      statField="Increased buyer confidence"
                      textColor={statsCircleTextColor}
                      bgColor1={statsCircleBgColor1}
                      bgColor2={statsCircleBgColor2}
                      bgColor3={statsCircleBgColor3}
                    />
                  </div>
                  <div>
                    <StatsCircle
                      statValue="40"
                      statField="Higher conversion rate"
                      textColor={statsCircleTextColor}
                      bgColor1={statsCircleBgColor1}
                      bgColor2={statsCircleBgColor2}
                      bgColor3={statsCircleBgColor3}
                    />
                  </div>
                  <div>
                    <StatsCircle
                      statValue="79"
                      statField="Better customer satisfaction"
                      textColor={statsCircleTextColor}
                      bgColor1={statsCircleBgColor1}
                      bgColor2={statsCircleBgColor2}
                      bgColor3={statsCircleBgColor3}
                    />
                  </div>
                </div>
                <div className="mt-[30px] flex flex-col gap-[15px] mx-auto tab_old:hidden w-full">
                  <div className="flex items-center justify-start gap-[15px] text-left">
                    <StatsCircle
                      statValue="72"
                      statField=""
                      textColor={statsCircleTextColor}
                      bgColor1={statsCircleBgColor1}
                      bgColor2={statsCircleBgColor2}
                      bgColor3={statsCircleBgColor3}
                    />
                    <h2 className="text-darkHeading">
                      Increased buyer confidence
                    </h2>
                  </div>
                  <div className="flex items-center justify-start gap-[15px] text-left">
                    <StatsCircle
                      statValue="40"
                      statField=""
                      textColor={statsCircleTextColor}
                      bgColor1={statsCircleBgColor1}
                      bgColor2={statsCircleBgColor2}
                      bgColor3={statsCircleBgColor3}
                    />
                    <h2 className="text-darkHeading">Higher conversion rate</h2>
                  </div>
                  <div className="flex items-center justify-start gap-[15px] text-left">
                    <StatsCircle
                      statValue="79"
                      statField=""
                      textColor={statsCircleTextColor}
                      bgColor1={statsCircleBgColor1}
                      bgColor2={statsCircleBgColor2}
                      bgColor3={statsCircleBgColor3}
                    />
                    <h2 className="text-darkHeading">
                      Better customer satisfaction
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-primaryBlack dark:text-darkHeading text-base font-[400] tab_old:text-2xl xl_old:text-4xl leading-[1.35rem]">
              Join us on our social media platforms and become part of our
              vibrant family
            </h3>
            <div className="flex flex-wrap mx-auto tab_old:mx-0 tab_old:w-full tab_old:mt-[30px] justify-center items-center mt-[30px] gap-[30px]">
              <a
                href="https://www.linkedin.com/company/ikarus3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 "
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 24.000005010356844 22.999996364968613"
                  width="24.000005010356844"
                  height="22.999996364968613"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on LinkedIn</title>
                  <g transform="translate(0, 0)">
                    <g transform="translate(0.0000033771003919269544, -0.000003635031387801309) rotate(0)">
                      <path
                        d="M0.30032,7.4675v15.5325h5.15578v-15.5325zM5.78582,2.68132c0.01499,-0.72244 -0.26978,-1.41478 -0.79435,-1.92651c-0.55455,-0.51173 -1.30393,-0.78265 -2.06831,-0.75254c-0.76437,-0.0301 -1.51376,0.24081 -2.09828,0.75254c-0.53956,0.49668 -0.83931,1.18902 -0.82432,1.92651c-0.01499,0.72244 0.26978,1.41478 0.77936,1.91146c0.55455,0.52678 1.28894,0.7977 2.05332,0.76759v0c0.77936,0.0301 1.54374,-0.24081 2.11327,-0.76759c0.52457,-0.49668 0.82432,-1.18902 0.79435,-1.91146v0zM23.98092,14.10493c0.13489,-1.88136 -0.44963,-3.73262 -1.61867,-5.2076c-1.10909,-1.18902 -2.66781,-1.83621 -4.28649,-1.776c-0.59951,0 -1.19902,0.07525 -1.78354,0.24081c-0.47961,0.15051 -0.91425,0.37627 -1.30393,0.67729c-0.31474,0.24081 -0.6145,0.51173 -0.88428,0.81275c-0.2398,0.27092 -0.44963,0.57193 -0.64447,0.87295v0v-2.25763h-5.17076v0.75254c0,0.49668 0,2.04692 0,4.63567c0,2.58875 0,5.9752 0,10.14429h5.20074v-8.6693c-0.04496,-0.45153 0,-0.888 0.10491,-1.32448c0.20983,-0.52678 0.55455,-0.97831 0.98919,-1.33953c0.46462,-0.37627 1.04914,-0.55688 1.64865,-0.54183c0.77936,-0.0602 1.52875,0.30102 1.97838,0.93315c0.46462,0.78265 0.67445,1.67065 0.62948,2.5737v8.30808h5.14079z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                    <defs>
                      <path
                        id="path-1669959029110149"
                        d="M0.30032,7.4675v15.5325h5.15578v-15.5325zM5.78582,2.68132c0.01499,-0.72244 -0.26978,-1.41478 -0.79435,-1.92651c-0.55455,-0.51173 -1.30393,-0.78265 -2.06831,-0.75254c-0.76437,-0.0301 -1.51376,0.24081 -2.09828,0.75254c-0.53956,0.49668 -0.83931,1.18902 -0.82432,1.92651c-0.01499,0.72244 0.26978,1.41478 0.77936,1.91146c0.55455,0.52678 1.28894,0.7977 2.05332,0.76759v0c0.77936,0.0301 1.54374,-0.24081 2.11327,-0.76759c0.52457,-0.49668 0.82432,-1.18902 0.79435,-1.91146v0zM23.98092,14.10493c0.13489,-1.88136 -0.44963,-3.73262 -1.61867,-5.2076c-1.10909,-1.18902 -2.66781,-1.83621 -4.28649,-1.776c-0.59951,0 -1.19902,0.07525 -1.78354,0.24081c-0.47961,0.15051 -0.91425,0.37627 -1.30393,0.67729c-0.31474,0.24081 -0.6145,0.51173 -0.88428,0.81275c-0.2398,0.27092 -0.44963,0.57193 -0.64447,0.87295v0v-2.25763h-5.17076v0.75254c0,0.49668 0,2.04692 0,4.63567c0,2.58875 0,5.9752 0,10.14429h5.20074v-8.6693c-0.04496,-0.45153 0,-0.888 0.10491,-1.32448c0.20983,-0.52678 0.55455,-0.97831 0.98919,-1.33953c0.46462,-0.37627 1.04914,-0.55688 1.64865,-0.54183c0.77936,-0.0602 1.52875,0.30102 1.97838,0.93315c0.46462,0.78265 0.67445,1.67065 0.62948,2.5737v8.30808h5.14079z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ikarus_3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:py-0 min-w-10 "
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 23.999999999999996 24"
                  width="23.999999999999996"
                  height="24"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Instagram</title>
                  <g transform="translate(0, 0)">
                    <g transform="translate(0.00001000000000020429, 5.828670879282072e-16) rotate(0)">
                      <path
                        d="M14.82,14.82c-1.56,1.56 -4.08,1.56 -5.64,0.015l-0.015,-0.015c-1.56,-1.56 -1.56,-4.08 -0.015,-5.64l0.015,-0.015c1.56,-1.56 4.08,-1.56 5.64,-0.015l0.015,0.015c1.425,1.53 1.29,4.005 0,5.655zM16.31999,7.635c-1.14,-1.155 -2.7,-1.8 -4.32,-1.785c-3.39,-0.015 -6.135,2.73 -6.15,6.12c0,0.015 0,0.015 0,0.03c-0.015,3.39 2.73,6.135 6.12,6.15c0.015,0 0.015,0 0.03,0c3.39,0.015 6.135,-2.73 6.15,-6.12c0,-0.015 0,-0.015 0,-0.03c0.015,-1.635 -0.63,-3.21 -1.8,-4.35zM19.31999,4.635c-0.57,-0.6 -1.53,-0.615 -2.115,-0.045c-0.585,0.57 -0.615,1.53 -0.045,2.115c0.57,0.585 1.53,0.615 2.115,0.045c0.3,-0.285 0.465,-0.69 0.465,-1.095c0.06,-0.39 -0.06,-0.78 -0.315,-1.08zM13.2,2.16h1.65h1.5c0.54,0.015 1.08,0.06 1.605,0.15c0.375,0.06 0.75,0.15 1.11,0.285c1.035,0.42 1.86,1.245 2.28,2.28c0.135,0.36 0.225,0.735 0.285,1.11c0.09,0.525 0.135,1.065 0.15,1.605c0,0.63 0,1.125 0,1.5c0,0.375 0,0.915 0,1.65c0,0.72 0,1.125 0,1.2c0,0.12 0,0.465 0,1.2c0,0.735 0,1.275 0,1.65c0,0.375 0,0.87 0,1.5c-0.015,0.54 -0.06,1.08 -0.15,1.605c-0.06,0.375 -0.15,0.75 -0.285,1.11c-0.42,1.035 -1.245,1.86 -2.28,2.28c-0.36,0.135 -0.735,0.225 -1.11,0.285c-0.525,0.09 -1.065,0.135 -1.605,0.15h-1.5h-5.685h-1.5c-0.555,0.015 -1.11,-0.015 -1.665,-0.075c-0.375,-0.06 -0.75,-0.15 -1.11,-0.285c-1.035,-0.42 -1.86,-1.245 -2.28,-2.28c-0.12,-0.345 -0.195,-0.72 -0.255,-1.08c-0.09,-0.525 -0.135,-1.065 -0.15,-1.605c0,-0.63 0,-1.125 0,-1.5c0,-0.375 0,-0.915 0,-1.65c0,-0.72 0,-1.125 0,-1.2c0,-0.12 0,-0.465 0,-1.2c0,-0.735 0,-1.275 0,-1.65c0,-0.375 0,-0.87 0,-1.5c0.015,-0.57 0.06,-1.14 0.15,-1.695c0.06,-0.375 0.15,-0.75 0.285,-1.11c0.42,-1.035 1.245,-1.845 2.28,-2.25c0.345,-0.12 0.705,-0.225 1.08,-0.285c0.525,-0.09 1.065,-0.135 1.605,-0.15h1.5h4.095zM23.90999,7.05c0.015,-1.86 -0.675,-3.66 -1.935,-5.025c-1.365,-1.26 -3.165,-1.95 -5.025,-1.935c-0.915,-0.06 -2.565,-0.09 -4.95,-0.09c-2.385,0 -4.035,0.03 -4.95,0.075c-1.86,-0.015 -3.66,0.69 -5.025,1.95c-1.26,1.365 -1.95,3.165 -1.935,5.025c-0.06,0.915 -0.09,2.565 -0.09,4.95c0,2.385 0.03,4.035 0.075,4.95c-0.015,1.86 0.675,3.66 1.935,5.025c1.365,1.26 3.18,1.95 5.04,1.935c0.915,0.06 2.565,0.09 4.95,0.09c2.385,0 4.035,-0.03 4.95,-0.075c1.86,0.015 3.66,-0.675 5.025,-1.935c1.26,-1.365 1.95,-3.165 1.935,-5.025c0.06,-0.93 0.09,-2.58 0.09,-4.965c0,-2.385 -0.03,-4.035 -0.09,-4.95z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                    <defs>
                      <path
                        id="path-166995902908594"
                        d="M14.82,14.82c-1.56,1.56 -4.08,1.56 -5.64,0.015l-0.015,-0.015c-1.56,-1.56 -1.56,-4.08 -0.015,-5.64l0.015,-0.015c1.56,-1.56 4.08,-1.56 5.64,-0.015l0.015,0.015c1.425,1.53 1.29,4.005 0,5.655zM16.31999,7.635c-1.14,-1.155 -2.7,-1.8 -4.32,-1.785c-3.39,-0.015 -6.135,2.73 -6.15,6.12c0,0.015 0,0.015 0,0.03c-0.015,3.39 2.73,6.135 6.12,6.15c0.015,0 0.015,0 0.03,0c3.39,0.015 6.135,-2.73 6.15,-6.12c0,-0.015 0,-0.015 0,-0.03c0.015,-1.635 -0.63,-3.21 -1.8,-4.35zM19.31999,4.635c-0.57,-0.6 -1.53,-0.615 -2.115,-0.045c-0.585,0.57 -0.615,1.53 -0.045,2.115c0.57,0.585 1.53,0.615 2.115,0.045c0.3,-0.285 0.465,-0.69 0.465,-1.095c0.06,-0.39 -0.06,-0.78 -0.315,-1.08zM13.2,2.16h1.65h1.5c0.54,0.015 1.08,0.06 1.605,0.15c0.375,0.06 0.75,0.15 1.11,0.285c1.035,0.42 1.86,1.245 2.28,2.28c0.135,0.36 0.225,0.735 0.285,1.11c0.09,0.525 0.135,1.065 0.15,1.605c0,0.63 0,1.125 0,1.5c0,0.375 0,0.915 0,1.65c0,0.72 0,1.125 0,1.2c0,0.12 0,0.465 0,1.2c0,0.735 0,1.275 0,1.65c0,0.375 0,0.87 0,1.5c-0.015,0.54 -0.06,1.08 -0.15,1.605c-0.06,0.375 -0.15,0.75 -0.285,1.11c-0.42,1.035 -1.245,1.86 -2.28,2.28c-0.36,0.135 -0.735,0.225 -1.11,0.285c-0.525,0.09 -1.065,0.135 -1.605,0.15h-1.5h-5.685h-1.5c-0.555,0.015 -1.11,-0.015 -1.665,-0.075c-0.375,-0.06 -0.75,-0.15 -1.11,-0.285c-1.035,-0.42 -1.86,-1.245 -2.28,-2.28c-0.12,-0.345 -0.195,-0.72 -0.255,-1.08c-0.09,-0.525 -0.135,-1.065 -0.15,-1.605c0,-0.63 0,-1.125 0,-1.5c0,-0.375 0,-0.915 0,-1.65c0,-0.72 0,-1.125 0,-1.2c0,-0.12 0,-0.465 0,-1.2c0,-0.735 0,-1.275 0,-1.65c0,-0.375 0,-0.87 0,-1.5c0.015,-0.57 0.06,-1.14 0.15,-1.695c0.06,-0.375 0.15,-0.75 0.285,-1.11c0.42,-1.035 1.245,-1.845 2.28,-2.25c0.345,-0.12 0.705,-0.225 1.08,-0.285c0.525,-0.09 1.065,-0.135 1.605,-0.15h1.5h4.095zM23.90999,7.05c0.015,-1.86 -0.675,-3.66 -1.935,-5.025c-1.365,-1.26 -3.165,-1.95 -5.025,-1.935c-0.915,-0.06 -2.565,-0.09 -4.95,-0.09c-2.385,0 -4.035,0.03 -4.95,0.075c-1.86,-0.015 -3.66,0.69 -5.025,1.95c-1.26,1.365 -1.95,3.165 -1.935,5.025c-0.06,0.915 -0.09,2.565 -0.09,4.95c0,2.385 0.03,4.035 0.075,4.95c-0.015,1.86 0.675,3.66 1.935,5.025c1.365,1.26 3.18,1.95 5.04,1.935c0.915,0.06 2.565,0.09 4.95,0.09c2.385,0 4.035,-0.03 4.95,-0.075c1.86,0.015 3.66,-0.675 5.025,-1.935c1.26,-1.365 1.95,-3.165 1.935,-5.025c0.06,-0.93 0.09,-2.58 0.09,-4.965c0,-2.385 -0.03,-4.035 -0.09,-4.95z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ikarus3d"
                target="_blank"
                rel="noopener noreferrer"
                className="py-0 min-w-10"
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 12 23.099166870117188"
                  width="12"
                  height="23.099166870117188"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] dark:fill-white dark:hover:fill-sky-500  fill-gray-600 hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Facebook</title>
                  <g transform="translate(0, 0)">
                    <defs>
                      <path
                        id="path-1669959029088110"
                        d="M22 4.613333023541718 C20.946666666666665 4.493333031599882 19.89333333333333 4.439999701847954 18.839999999999996 4.453333034285936 C17.41333333333333 4.386666372096027 16.026666666666664 4.893333004739337 14.986666666666665 5.866666272712012 C13.973333333333331 6.946666200188542 13.45333333333333 8.38666610349058 13.546666666666663 9.866666004106564 C13.546666666666663 9.866666004106564 13.546666666666663 12.906665799966424 13.546666666666663 12.906665799966424 C13.546666666666663 12.906665799966424 10 12.906665799966424 10 12.906665799966424 C10 12.906665799966424 10 17.013332190864833 10 17.013332190864833 C10 17.013332190864833 13.533333333333333 17.013332190864833 13.533333333333333 17.013332190864833 C13.533333333333333 17.013332190864833 13.533333333333333 27.54666481687049 13.533333333333333 27.54666481687049 C13.533333333333333 27.54666481687049 17.786666666666665 27.54666481687049 17.786666666666665 27.54666481687049 C17.786666666666665 27.54666481687049 17.786666666666665 17.013332190864833 17.786666666666665 17.013332190864833 C17.786666666666665 17.013332190864833 21.333333333333332 17.013332190864833 21.333333333333332 17.013332190864833 C21.333333333333332 17.013332190864833 21.88 12.906665799966424 21.88 12.906665799966424 C21.88 12.906665799966424 17.786666666666665 12.906665799966424 17.786666666666665 12.906665799966424 C17.786666666666665 12.906665799966424 17.786666666666665 10.239999312370056 17.786666666666665 10.239999312370056 C17.746666666666666 9.706666014850782 17.89333333333333 9.18666604976949 18.2 8.746666079316089 C18.64 8.359999438614615 19.226666666666667 8.17333278448287 19.813333333333333 8.25333277911076 C19.813333333333333 8.25333277911076 22 8.25333277911076 22 8.25333277911076 C22 8.25333277911076 22 4.613333023541718 22 4.613333023541718 C22 4.613333023541718 22 4.613333023541718 22 4.613333023541718 Z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                    <g transform="translate(-10, -4.4474979467533045)">
                      <path
                        d="M22 4.613333023541718 C20.946666666666665 4.493333031599882 19.89333333333333 4.439999701847954 18.839999999999996 4.453333034285936 C17.41333333333333 4.386666372096027 16.026666666666664 4.893333004739337 14.986666666666665 5.866666272712012 C13.973333333333331 6.946666200188542 13.45333333333333 8.38666610349058 13.546666666666663 9.866666004106564 C13.546666666666663 9.866666004106564 13.546666666666663 12.906665799966424 13.546666666666663 12.906665799966424 C13.546666666666663 12.906665799966424 10 12.906665799966424 10 12.906665799966424 C10 12.906665799966424 10 17.013332190864833 10 17.013332190864833 C10 17.013332190864833 13.533333333333333 17.013332190864833 13.533333333333333 17.013332190864833 C13.533333333333333 17.013332190864833 13.533333333333333 27.54666481687049 13.533333333333333 27.54666481687049 C13.533333333333333 27.54666481687049 17.786666666666665 27.54666481687049 17.786666666666665 27.54666481687049 C17.786666666666665 27.54666481687049 17.786666666666665 17.013332190864833 17.786666666666665 17.013332190864833 C17.786666666666665 17.013332190864833 21.333333333333332 17.013332190864833 21.333333333333332 17.013332190864833 C21.333333333333332 17.013332190864833 21.88 12.906665799966424 21.88 12.906665799966424 C21.88 12.906665799966424 17.786666666666665 12.906665799966424 17.786666666666665 12.906665799966424 C17.786666666666665 12.906665799966424 17.786666666666665 10.239999312370056 17.786666666666665 10.239999312370056 C17.746666666666666 9.706666014850782 17.89333333333333 9.18666604976949 18.2 8.746666079316089 C18.64 8.359999438614615 19.226666666666667 8.17333278448287 19.813333333333333 8.25333277911076 C19.813333333333333 8.25333277911076 22 8.25333277911076 22 8.25333277911076 C22 8.25333277911076 22 4.613333023541718 22 4.613333023541718 C22 4.613333023541718 22 4.613333023541718 22 4.613333023541718 Z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://twitter.com/ikarus_3d?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 "
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 20"
                  width="24"
                  height="20"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Twitter</title>
                  <g transform="translate(0, 0)">
                    <defs>
                      <path
                        id="path-166995902908698"
                        d="M29.5609756097561 10.383449846443987 C28.653658536585368 10.78858445027923 27.70243902439025 11.058674186169391 26.721951219512196 11.163709083460008 C27.7609756097561 10.54850468504353 28.536585365853657 9.55817565344627 28.887804878048783 8.387786797922239 C27.921951219512195 8.972981225684254 26.868292682926832 9.393120814846728 25.770731707317076 9.603190609427966 C23.91219512195122 7.562512604924522 20.78048780487805 7.457477707633905 18.80487804878049 9.378115829519498 C18.760975609756102 9.40812580017396 18.731707317073173 9.453140756155653 18.687804878048784 9.483150726810116 C17.73658536585366 10.413459817098449 17.209756097560977 11.703888555240333 17.22439024390244 13.054337234691138 C17.22439024390244 13.44446685319915 17.26829268292683 13.834596471707162 17.34146341463415 14.20972110488794 C15.380487804878053 14.119691192924554 13.448780487804878 13.579511721144232 11.707317073170733 12.649202630855896 C9.98048780487805 11.763908496549258 8.458536585365856 10.518494714389067 7.229268292682929 9.002991196338717 C6.365853658536586 10.533499699716298 6.33658536585366 12.409122865620198 7.15609756097561 13.954636354325014 C7.551219512195124 14.659870664704878 8.107317073170734 15.245065092466895 8.78048780487805 15.680209666956598 C7.990243902439026 15.650199696302137 7.214634146341464 15.410119931066438 6.526829268292683 15.004985327231196 C6.526829268292683 15.004985327231196 6.526829268292683 15.004985327231196 6.526829268292683 15.004985327231196 C6.512195121951222 16.175374182755228 6.9073170731707325 17.315753067624797 7.653658536585368 18.216052187258672 C8.370731707317075 19.116351306892543 9.365853658536587 19.73155570530902 10.478048780487807 19.95663048521749 C10.053658536585367 20.06166538250811 9.629268292682928 20.121685323817033 9.190243902439025 20.121685323817033 C8.882926829268294 20.121685323817033 8.560975609756099 20.09167535316257 8.253658536585368 20.046660397180876 C8.897560975609759 22.10234338701155 10.741463414634149 23.49780702244405 12.84878048780488 23.542821978425746 C11.136585365853664 24.99830555516717 8.970731707317075 25.79356977751042 6.7463414634146375 25.808574762837655 C6.351219512195126 25.838584733492116 5.956097560975613 25.838584733492116 5.560975609756101 25.808574762837655 C7.82926829268293 27.29406831023354 10.478048780487807 28.059322561922333 13.17073170731708 27.99930262061341 C14.839024390243909 28.014307605940644 16.507317073170736 27.71420789939602 18.087804878048786 27.14401845696123 C19.49268292682927 26.633848955835372 20.809756097560978 25.86859470414658 21.951219512195127 24.878265672549322 C23.03414634146342 23.93295159693375 23.98536585365854 22.822582682718643 24.760975609756102 21.59217388588569 C25.5219512195122 20.391775059707193 26.121951219512205 19.08634133623808 26.517073170731717 17.70588268613281 C26.897560975609768 16.38544397733646 27.102439024390247 15.019990312558424 27.102439024390247 13.654536647780384 C27.102439024390247 13.369441926562992 27.102439024390247 13.144367146654524 27.102439024390247 12.994317293382213 C28.06829268292683 12.274077997675118 28.902439024390247 11.388783863368477 29.5609756097561 10.383449846443987 C29.5609756097561 10.383449846443987 29.5609756097561 10.383449846443987 29.5609756097561 10.383449846443987 Z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                    <g transform="translate(-5.560975609756101, -8.00258150371965)">
                      <path
                        d="M29.5609756097561 10.383449846443987 C28.653658536585368 10.78858445027923 27.70243902439025 11.058674186169391 26.721951219512196 11.163709083460008 C27.7609756097561 10.54850468504353 28.536585365853657 9.55817565344627 28.887804878048783 8.387786797922239 C27.921951219512195 8.972981225684254 26.868292682926832 9.393120814846728 25.770731707317076 9.603190609427966 C23.91219512195122 7.562512604924522 20.78048780487805 7.457477707633905 18.80487804878049 9.378115829519498 C18.760975609756102 9.40812580017396 18.731707317073173 9.453140756155653 18.687804878048784 9.483150726810116 C17.73658536585366 10.413459817098449 17.209756097560977 11.703888555240333 17.22439024390244 13.054337234691138 C17.22439024390244 13.44446685319915 17.26829268292683 13.834596471707162 17.34146341463415 14.20972110488794 C15.380487804878053 14.119691192924554 13.448780487804878 13.579511721144232 11.707317073170733 12.649202630855896 C9.98048780487805 11.763908496549258 8.458536585365856 10.518494714389067 7.229268292682929 9.002991196338717 C6.365853658536586 10.533499699716298 6.33658536585366 12.409122865620198 7.15609756097561 13.954636354325014 C7.551219512195124 14.659870664704878 8.107317073170734 15.245065092466895 8.78048780487805 15.680209666956598 C7.990243902439026 15.650199696302137 7.214634146341464 15.410119931066438 6.526829268292683 15.004985327231196 C6.526829268292683 15.004985327231196 6.526829268292683 15.004985327231196 6.526829268292683 15.004985327231196 C6.512195121951222 16.175374182755228 6.9073170731707325 17.315753067624797 7.653658536585368 18.216052187258672 C8.370731707317075 19.116351306892543 9.365853658536587 19.73155570530902 10.478048780487807 19.95663048521749 C10.053658536585367 20.06166538250811 9.629268292682928 20.121685323817033 9.190243902439025 20.121685323817033 C8.882926829268294 20.121685323817033 8.560975609756099 20.09167535316257 8.253658536585368 20.046660397180876 C8.897560975609759 22.10234338701155 10.741463414634149 23.49780702244405 12.84878048780488 23.542821978425746 C11.136585365853664 24.99830555516717 8.970731707317075 25.79356977751042 6.7463414634146375 25.808574762837655 C6.351219512195126 25.838584733492116 5.956097560975613 25.838584733492116 5.560975609756101 25.808574762837655 C7.82926829268293 27.29406831023354 10.478048780487807 28.059322561922333 13.17073170731708 27.99930262061341 C14.839024390243909 28.014307605940644 16.507317073170736 27.71420789939602 18.087804878048786 27.14401845696123 C19.49268292682927 26.633848955835372 20.809756097560978 25.86859470414658 21.951219512195127 24.878265672549322 C23.03414634146342 23.93295159693375 23.98536585365854 22.822582682718643 24.760975609756102 21.59217388588569 C25.5219512195122 20.391775059707193 26.121951219512205 19.08634133623808 26.517073170731717 17.70588268613281 C26.897560975609768 16.38544397733646 27.102439024390247 15.019990312558424 27.102439024390247 13.654536647780384 C27.102439024390247 13.369441926562992 27.102439024390247 13.144367146654524 27.102439024390247 12.994317293382213 C28.06829268292683 12.274077997675118 28.902439024390247 11.388783863368477 29.5609756097561 10.383449846443987 C29.5609756097561 10.383449846443987 29.5609756097561 10.383449846443987 29.5609756097561 10.383449846443987 Z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCspV_0wT6sPc-NL8wLibQFQ"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 "
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 23.999983953107115 16.99999"
                  width="23.999983953107115"
                  height="16.99999"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Youtube</title>
                  <g transform="translate(0, 0)">
                    <g transform="translate(-0.000008023446441561034, 0) rotate(0)">
                      <path
                        d="M9.51794,11.71516v-6.82083l6.43022,3.42343l-6.43022,3.38438v0zM12,0c-3.35657,0 -6.14729,0.0781 -8.39787,0.24732h-0.23149h-0.30865h-0.30865c-0.1286,0.02603 -0.25721,0.05207 -0.38581,0.10413l-0.37295,0.18224c-0.14146,0.0781 -0.28293,0.1562 -0.41153,0.26034c-0.14146,0.10413 -0.27007,0.2343 -0.38581,0.36447l-0.19291,0.37749c-0.18005,0.26034 -0.32151,0.53369 -0.42439,0.83308c-0.16719,0.41654 -0.28293,0.85911 -0.33437,1.30168c-0.16719,1.28867 -0.25721,2.60337 -0.24435,3.90505v2.38208c0,0.37749 0.02572,0.88515 0.07716,1.53599c0.05144,0.65084 0.10288,1.26263 0.16719,1.84839c0.0643,0.46861 0.18005,0.9242 0.36009,1.36677c0.10288,0.27335 0.23149,0.54671 0.38581,0.79403l0.20577,0.32542c0.21863,0.2343 0.47584,0.41654 0.75877,0.55972c0.21863,0.11715 0.45012,0.20827 0.6816,0.28637c0.24435,0.05207 0.4887,0.10413 0.73304,0.13017h0.47584h0.65588l2.68783,0.10413c1.36321,0 2.97076,0.02603 4.8098,0.09112c3.35657,0 6.14729,-0.09112 8.39787,-0.26034h0.21863h0.30865h0.32151c0.1286,-0.02603 0.25721,-0.05207 0.38581,-0.10413l0.37295,-0.16922c0.14146,-0.06508 0.28293,-0.1562 0.41153,-0.26034c0.14146,-0.10413 0.27007,-0.2343 0.38581,-0.36447l0.19291,-0.2343c0.18005,-0.26034 0.32151,-0.53369 0.42439,-0.83308c0.16719,-0.41654 0.28293,-0.85911 0.33437,-1.30168c0.16719,-1.28867 0.25721,-2.60337 0.24435,-3.90505v-2.46018c0,-0.37749 -0.02572,-0.88515 -0.07716,-1.53599c-0.05144,-0.65084 -0.10288,-1.27565 -0.16719,-1.86141c-0.0643,-0.46861 -0.18005,-0.9242 -0.36009,-1.36677c-0.10288,-0.27335 -0.23149,-0.54671 -0.38581,-0.79403l-0.20577,-0.24732c-0.11574,-0.13017 -0.24435,-0.26034 -0.38581,-0.36447c-0.1286,-0.10413 -0.27007,-0.18224 -0.41153,-0.26034l-0.37295,-0.18224c-0.1286,-0.05207 -0.25721,-0.0781 -0.38581,-0.10413h-0.30865h-0.30865h-0.23149h-0.97739c-0.65588,-0.16922 -1.68472,-0.26034 -3.07364,-0.29939c-1.38893,-0.03905 -2.84216,-0.05207 -4.34683,-0.06508v0z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                    <defs>
                      <path
                        id="path-1669959029087106"
                        d="M9.51794,11.71516v-6.82083l6.43022,3.42343l-6.43022,3.38438v0zM12,0c-3.35657,0 -6.14729,0.0781 -8.39787,0.24732h-0.23149h-0.30865h-0.30865c-0.1286,0.02603 -0.25721,0.05207 -0.38581,0.10413l-0.37295,0.18224c-0.14146,0.0781 -0.28293,0.1562 -0.41153,0.26034c-0.14146,0.10413 -0.27007,0.2343 -0.38581,0.36447l-0.19291,0.37749c-0.18005,0.26034 -0.32151,0.53369 -0.42439,0.83308c-0.16719,0.41654 -0.28293,0.85911 -0.33437,1.30168c-0.16719,1.28867 -0.25721,2.60337 -0.24435,3.90505v2.38208c0,0.37749 0.02572,0.88515 0.07716,1.53599c0.05144,0.65084 0.10288,1.26263 0.16719,1.84839c0.0643,0.46861 0.18005,0.9242 0.36009,1.36677c0.10288,0.27335 0.23149,0.54671 0.38581,0.79403l0.20577,0.32542c0.21863,0.2343 0.47584,0.41654 0.75877,0.55972c0.21863,0.11715 0.45012,0.20827 0.6816,0.28637c0.24435,0.05207 0.4887,0.10413 0.73304,0.13017h0.47584h0.65588l2.68783,0.10413c1.36321,0 2.97076,0.02603 4.8098,0.09112c3.35657,0 6.14729,-0.09112 8.39787,-0.26034h0.21863h0.30865h0.32151c0.1286,-0.02603 0.25721,-0.05207 0.38581,-0.10413l0.37295,-0.16922c0.14146,-0.06508 0.28293,-0.1562 0.41153,-0.26034c0.14146,-0.10413 0.27007,-0.2343 0.38581,-0.36447l0.19291,-0.2343c0.18005,-0.26034 0.32151,-0.53369 0.42439,-0.83308c0.16719,-0.41654 0.28293,-0.85911 0.33437,-1.30168c0.16719,-1.28867 0.25721,-2.60337 0.24435,-3.90505v-2.46018c0,-0.37749 -0.02572,-0.88515 -0.07716,-1.53599c-0.05144,-0.65084 -0.10288,-1.27565 -0.16719,-1.86141c-0.0643,-0.46861 -0.18005,-0.9242 -0.36009,-1.36677c-0.10288,-0.27335 -0.23149,-0.54671 -0.38581,-0.79403l-0.20577,-0.24732c-0.11574,-0.13017 -0.24435,-0.26034 -0.38581,-0.36447c-0.1286,-0.10413 -0.27007,-0.18224 -0.41153,-0.26034l-0.37295,-0.18224c-0.1286,-0.05207 -0.25721,-0.0781 -0.38581,-0.10413h-0.30865h-0.30865h-0.23149h-0.97739c-0.65588,-0.16922 -1.68472,-0.26034 -3.07364,-0.29939c-1.38893,-0.03905 -2.84216,-0.05207 -4.34683,-0.06508v0z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.behance.net/ikarus_3d"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 "
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 24.000003847841533 15.000012048289218"
                  width="24.000003847841533"
                  height="15.000012048289218"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Behance</title>
                  <g transform="translate(0, 0)">
                    <g transform="translate(0, 0) rotate(0)">
                      <path
                        d="M21.6277,2.43431h-5.98022v-1.44712h5.98022zM18.72752,5.96798c1.19155,-0.08974 2.23696,0.79648 2.33813,1.98559c0.01124,0.08974 0.01124,0.16827 0,0.25801h-4.82239c0,-1.23398 1.00045,-2.2436 2.23696,-2.25482c0.06745,0 0.13489,0 0.20234,0.01122v0zM18.91862,12.79975c-0.71942,0.04487 -1.42761,-0.21314 -1.94469,-0.70673c-0.48336,-0.54968 -0.71942,-1.27885 -0.67446,-2.00802h7.70009c0,-0.23558 0,-0.41507 0,-0.54968c0.01124,-0.9984 -0.1911,-1.98559 -0.59577,-2.89425c-0.38219,-0.85257 -1.00045,-1.57052 -1.78732,-2.08655c-0.85432,-0.5609 -1.86601,-0.83013 -2.88894,-0.79648c-1.48381,-0.05609 -2.91142,0.52725 -3.93435,1.60418c-1.03417,1.08815 -1.58498,2.54649 -1.52878,4.03848c-0.06745,1.49199 0.47212,2.95034 1.48381,4.0497c1.04541,1.05449 2.4955,1.60418 3.97932,1.53687c2.31565,0.16827 4.42896,-1.34616 5.00225,-3.58976h-2.58543c-0.14613,0.44872 -0.46088,0.81891 -0.88804,1.02084c-0.4384,0.2468 -0.933,0.37019 -1.42761,0.37019v0zM3.29362,12.21641v-4.06092h3.48471c1.55126,0 2.32689,0.69552 2.32689,2.09777c0,1.40225 -0.79811,2.0529 -2.40558,1.96315h-3.46223zM3.29362,2.51283h2.99011c1.49505,0 2.2482,0.5609 2.2482,1.6827c0.04496,0.50481 -0.15737,0.98718 -0.52833,1.32372c-0.41592,0.30289 -0.933,0.45994 -1.45009,0.42628h-3.3161v-3.44393zM0,0v14.70681h7.14928c0.52833,0 1.05665,-0.05609 1.57374,-0.15705c0.4946,-0.10096 0.96673,-0.26923 1.41637,-0.49359c0.41592,-0.21314 0.79811,-0.49359 1.1241,-0.83013c0.34847,-0.35898 0.61826,-0.77404 0.79811,-1.2452c0.20234,-0.50481 0.29227,-1.04327 0.29227,-1.59296c0.03372,-0.84135 -0.20234,-1.67148 -0.67446,-2.37822c-0.4946,-0.67308 -1.20279,-1.15545 -2.01214,-1.34616c1.24775,-0.50481 2.0571,-1.72757 2.01214,-3.07373c0,-0.59455 -0.13489,-1.16667 -0.38219,-1.70514c-0.23606,-0.47116 -0.59577,-0.86379 -1.05665,-1.1218c-0.46088,-0.25801 -0.95549,-0.4375 -1.48381,-0.54968c-0.59577,-0.11218 -1.19155,-0.16827 -1.8098,-0.16827h-6.94694z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                    <defs>
                      <path
                        id="path-1669959029087102"
                        d="M21.6277,2.43431h-5.98022v-1.44712h5.98022zM18.72752,5.96798c1.19155,-0.08974 2.23696,0.79648 2.33813,1.98559c0.01124,0.08974 0.01124,0.16827 0,0.25801h-4.82239c0,-1.23398 1.00045,-2.2436 2.23696,-2.25482c0.06745,0 0.13489,0 0.20234,0.01122v0zM18.91862,12.79975c-0.71942,0.04487 -1.42761,-0.21314 -1.94469,-0.70673c-0.48336,-0.54968 -0.71942,-1.27885 -0.67446,-2.00802h7.70009c0,-0.23558 0,-0.41507 0,-0.54968c0.01124,-0.9984 -0.1911,-1.98559 -0.59577,-2.89425c-0.38219,-0.85257 -1.00045,-1.57052 -1.78732,-2.08655c-0.85432,-0.5609 -1.86601,-0.83013 -2.88894,-0.79648c-1.48381,-0.05609 -2.91142,0.52725 -3.93435,1.60418c-1.03417,1.08815 -1.58498,2.54649 -1.52878,4.03848c-0.06745,1.49199 0.47212,2.95034 1.48381,4.0497c1.04541,1.05449 2.4955,1.60418 3.97932,1.53687c2.31565,0.16827 4.42896,-1.34616 5.00225,-3.58976h-2.58543c-0.14613,0.44872 -0.46088,0.81891 -0.88804,1.02084c-0.4384,0.2468 -0.933,0.37019 -1.42761,0.37019v0zM3.29362,12.21641v-4.06092h3.48471c1.55126,0 2.32689,0.69552 2.32689,2.09777c0,1.40225 -0.79811,2.0529 -2.40558,1.96315h-3.46223zM3.29362,2.51283h2.99011c1.49505,0 2.2482,0.5609 2.2482,1.6827c0.04496,0.50481 -0.15737,0.98718 -0.52833,1.32372c-0.41592,0.30289 -0.933,0.45994 -1.45009,0.42628h-3.3161v-3.44393zM0,0v14.70681h7.14928c0.52833,0 1.05665,-0.05609 1.57374,-0.15705c0.4946,-0.10096 0.96673,-0.26923 1.41637,-0.49359c0.41592,-0.21314 0.79811,-0.49359 1.1241,-0.83013c0.34847,-0.35898 0.61826,-0.77404 0.79811,-1.2452c0.20234,-0.50481 0.29227,-1.04327 0.29227,-1.59296c0.03372,-0.84135 -0.20234,-1.67148 -0.67446,-2.37822c-0.4946,-0.67308 -1.20279,-1.15545 -2.01214,-1.34616c1.24775,-0.50481 2.0571,-1.72757 2.01214,-3.07373c0,-0.59455 -0.13489,-1.16667 -0.38219,-1.70514c-0.23606,-0.47116 -0.59577,-0.86379 -1.05665,-1.1218c-0.46088,-0.25801 -0.95549,-0.4375 -1.48381,-0.54968c-0.59577,-0.11218 -1.19155,-0.16827 -1.8098,-0.16827h-6.94694z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                href=" https://sketchfab.com/ikarus3d"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 cursor-pointer group"
              >
                <svg
                  id="a"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2000 2000"
                  version="1.2"
                  overflow="visible"
                  preserveAspectRatio="none"
                  width="24"
                  height="24"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Sketchfab</title>
                  <g id="b">
                    <path
                      className="c"
                      d="M863.12,1985.04L152.03,1574.57V746.51l711.08,384.08v854.45Zm126.67-1049.32L148.47,489.76,989.79,3.95l841.45,485.81-841.45,445.96Zm841.98,640.44l-708.45,409.02v-851.28l708.45-382.76v825.02ZM148.47,489.76L989.79,3.95l841.45,485.81-841.45,445.96L148.47,489.76Zm974.85,644.13l708.45-382.76v825.02l-708.45,409.02v-851.28Z"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="https://www.artstation.com/ikarus3d "
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 cursor-pointer group"
              >
                <svg
                  role="img"
                  id="a"
                  className="stroke-white group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                  width="23.999969618307645"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2500 2190"
                >
                  <title>Ikarus 3D on Artstation</title>
                  <path
                    className="fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500 group-hover:fill-[#1d75bd] darl:hover:fill-sky-500"
                    d="M.57,1688.97l210.21,362.24c42.51,82.33,127.53,138.78,224.37,138.78H1835.74l-288.13-501.03H.57Zm2498.86,2.34c0-49.42-14.19-96.46-40.17-136.44L1637.34,134.1C1594.83,54.11,1512.16,0,1415.32,0h-434.57l1268.31,2187.66,200.77-345.8c37.79-65.86,49.61-94.09,49.61-150.54Zm-1159.69-359.9L772.92,355.21,206.06,1331.42H1339.74Z"
                  />
                </svg>
              </a>
              <a
                href="https://discord.gg/mDFrhzzBS3"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-10 cursor-pointer"
              >
                <svg
                  role="img"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  overflow="visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 23.999969618307645 18"
                  width="23.999969618307645"
                  height="18"
                  className="stroke-white stroke-[.55px] hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:hover:fill-sky-500  hover:fill-[#1d75bd]"
                >
                  <title>Ikarus 3D on Discord</title>
                  <g transform="translate(0, 0)">
                    <g transform="translate(-0.000002829208097417102, 0) rotate(0)">
                      <path
                        d="M20.33027,1.50747c-1.57682,-0.71438 -3.24146,-1.22119 -4.95138,-1.50747c-0.23399,0.41393 -0.4457,0.8398 -0.63426,1.27584c-1.82139,-0.2716 -3.67363,-0.2716 -5.49503,0c-0.18866,-0.436 -0.40037,-0.86186 -0.63426,-1.27584c-1.71102,0.2887 -3.37675,0.79671 -4.95515,1.51121c-3.13354,4.5878 -3.983,9.06164 -3.55827,13.47198v0c1.83508,1.3417 3.88906,2.36209 6.07266,3.01681c0.49168,-0.6544 0.92676,-1.34863 1.30061,-2.07534c-0.71008,-0.26244 -1.39544,-0.58623 -2.04813,-0.96762c0.17178,-0.12329 0.33978,-0.25031 0.50212,-0.3736c3.84519,1.78945 8.29635,1.78945 12.14154,0c0.16423,0.13263 0.33223,0.25965 0.50212,0.3736c-0.65396,0.38201 -1.34056,0.70642 -2.05191,0.96949c0.37339,0.72637 0.8085,1.42003 1.30061,2.07347c2.18546,-0.65209 4.24102,-1.672 6.07643,-3.01494v0c0.49835,-5.11457 -0.85134,-9.54732 -3.56771,-13.47758zM8.01317,12.27086c-1.18357,0 -2.16139,-1.06289 -2.16139,-2.37049c0,-1.3076 0.94384,-2.37983 2.15762,-2.37983c1.21378,0 2.18404,1.07223 2.16328,2.37983c-0.02076,1.3076 -0.95328,2.37049 -2.1595,2.37049zM15.98672,12.27086c-1.18546,0 -2.1595,-1.06289 -2.1595,-2.37049c0,-1.3076 0.94384,-2.37983 2.1595,-2.37983c1.21566,0 2.17838,1.07223 2.15762,2.37983c-0.02076,1.3076 -0.95139,2.37049 -2.15762,2.37049z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </g>
                    <defs>
                      <path
                        id="path-1669959029107136"
                        d="M20.33027,1.50747c-1.57682,-0.71438 -3.24146,-1.22119 -4.95138,-1.50747c-0.23399,0.41393 -0.4457,0.8398 -0.63426,1.27584c-1.82139,-0.2716 -3.67363,-0.2716 -5.49503,0c-0.18866,-0.436 -0.40037,-0.86186 -0.63426,-1.27584c-1.71102,0.2887 -3.37675,0.79671 -4.95515,1.51121c-3.13354,4.5878 -3.983,9.06164 -3.55827,13.47198v0c1.83508,1.3417 3.88906,2.36209 6.07266,3.01681c0.49168,-0.6544 0.92676,-1.34863 1.30061,-2.07534c-0.71008,-0.26244 -1.39544,-0.58623 -2.04813,-0.96762c0.17178,-0.12329 0.33978,-0.25031 0.50212,-0.3736c3.84519,1.78945 8.29635,1.78945 12.14154,0c0.16423,0.13263 0.33223,0.25965 0.50212,0.3736c-0.65396,0.38201 -1.34056,0.70642 -2.05191,0.96949c0.37339,0.72637 0.8085,1.42003 1.30061,2.07347c2.18546,-0.65209 4.24102,-1.672 6.07643,-3.01494v0c0.49835,-5.11457 -0.85134,-9.54732 -3.56771,-13.47758zM8.01317,12.27086c-1.18357,0 -2.16139,-1.06289 -2.16139,-2.37049c0,-1.3076 0.94384,-2.37983 2.15762,-2.37983c1.21378,0 2.18404,1.07223 2.16328,2.37983c-0.02076,1.3076 -0.95328,2.37049 -2.1595,2.37049zM15.98672,12.27086c-1.18546,0 -2.1595,-1.06289 -2.1595,-2.37049c0,-1.3076 0.94384,-2.37983 2.1595,-2.37983c1.21566,0 2.17838,1.07223 2.15762,2.37983c-0.02076,1.3076 -0.95139,2.37049 -2.15762,2.37049z"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </defs>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-tertiaryBackground flex flex-col items-center py-smCustomHead tab_old:py-mdCustomHead">
          <div className="text-center">
            <h3 className="text-primaryBlack dark:text-darkHeading text-xs font-[400] tab_old:text-2xl xl_old:text-4xl leading-[1.35rem]">
              Meanwhile, we think you’ll enjoy our{" "}
              <a className="text-primaryBlue" href={env.BLOG_URL}>
                blog
              </a>{" "}
              post about:
            </h3>
            <h3 className="text-primaryBlack mt-[11px] dark:text-darkHeading text-xs font-[400] tab_old:text-2xl xl_old:text-4xl leading-[1.35rem]">
              What sets Ikarus 3D apart from the competition. 
            </h3>
          </div>
          <a href={env.BLOG_URL}>
            <button
              className={`border-1 mt-[30px] lap:mt-6 flex items-center px-4 mob_old:px-5 tab_old:px-8 py-2 xl_old:py-3 xl_old:px-16 group rounded-[5px] text-xs mob_old:text-sm xl_old:text-xl transition ease-in-out duration-200 text-primaryBlack bg-white mx-auto`}
            >
              <span className="font-[500]">Read more here</span>
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
            </button>
          </a>
        </div>
        <div className="footer flex justify-center tab_old:justify-start py-4 bg-[#F8F9FC] w-full dark:bg-primarysecondBackground dark:text-darkHeading text-[14px] xl_old:text-base px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw]">
          <div className="flex flex-col-reverse justify-center tab_old:justify-start tab_old:flex-row text-sm items-center">
            <span className="tab_old:mr-10 text-primaryBlack dark:text-darkSubHeading font-[400] text-[12px] xl_old:text-[14px] leading-[21px]">{`© ${new Date().getFullYear()} Ikarus Unkindled`}</span>
            <div className="flex flex-row items-center">
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="tab_old:mr-10"
              >
                <span className="text-primaryBlack dark:text-darkSubHeading font-[400] text-[12px] xl_old:text-[14px] leading-[21px]">
                  Terms of Service
                </span>
              </a>
              <div className="tab_old:hidden mx-1 w-[1px] h-[70%] bg-white"></div>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <span className="text-primaryBlack dark:text-darkSubHeading font-[400] text-[12px] xl_old:text-[14px] leading-[21px]">
                  Privacy Policies
                </span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {data.cookie &&
      (data.status === "registered" || data.status === "existing" || data.status === "bot") ? (
        thankYouPage(data.status, data.nextRequestDate)
      ) : (
        <Error404 />
      )}
    </>
  );
};

export default ThankYou;
