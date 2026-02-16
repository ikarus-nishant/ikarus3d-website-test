import { useState, useRef, useCallback, useEffect } from "react";
import HeroSectionHeading from "../components/text/HeroSectionHeading";
import HeroSectionSubHeading from "../components/text/HeroSectionSubHeading";
import SubSectionText from "../components/text/SubSectionText";
import SubSectionHeading from "../components/text/SubSectionHeading";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import PrimaryButton from "../components/primaryButton";
import ServicesFooterDynamic from "../components/ServicesFooterDynamic";
import { Footer } from "../components/Footer";
import StatsCircle from "../components/StatsCircle";
import getBrowserEnv from "../utils/browserEnv";
import { ClientOnly } from "remix-utils";
import OnDemandModelLoad from "../components/OnDemandModelHomepage";
import {siteMapTags as nextRoute } from "./portfolio";
const heroData = {
  heroSectionHeading:
    "Ikarus 3D is your all-in-one store for custom 3D models at scale",
  heroSectionSubHeading:
    "Join us and wow your customers through epic product visualizations",
};

export const siteMapTags = () => {
  return [
      {name:"route", content: "/why-us"},
      {name:"priority", content: 0.8},
      {name:"next-route", content: nextRoute()}
  ]
};

const serviceFooter = {
  ctaHeading:
    "Get in touch to create an immersive 3D experience for your customers",
  ctaText: "Let's connect!",
  ctaLink: "/portfolio",
  formHeading: "Here’s what you get:",
  buttonText: "Let's have a chat",
};

class WhyUsSections {
  static TEAM_ARTISTS = "TEAM_ARTISTS";
  static QUALITY_ASSURANCE = "QUALITY_ASSURANCE";
  static SUPPORT_TEAM = "SUPPORT_TEAM";
}

const env = getBrowserEnv();

const WhyUs = () => {
  let statsCircleBgColor1 = "#0052D4";
  let statsCircleBgColor2 = "#4364F7";
  let statsCircleBgColor3 = "#6FB1FC";
  let statsCircleTextColor =
    "bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC]";
  const [section, setSection] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === WhyUsSections.TEAM_ARTISTS) {
      setSection(WhyUsSections.TEAM_ARTISTS);
    } else if (e.target.id === WhyUsSections.QUALITY_ASSURANCE) {
      setSection(WhyUsSections.QUALITY_ASSURANCE);
    } else if (e.target.id === WhyUsSections.SUPPORT_TEAM) {
      setSection(WhyUsSections.SUPPORT_TEAM);
    } else {
      setSection(null);
    }
  };

  const [loadModelOnMouseMove, setLoadModelOnMouseMove] = useState(false);

  const handleLoadingModelOnMouseMove = () => {
    setLoadModelOnMouseMove(true);
  };

  const scrollRef = useRef();

  // The scroll listener
  const handleScroll = useCallback(() => {
    setLoadModelOnMouseMove(true);
  }, []);

  useEffect(() => {
    const div = scrollRef.current;
    div.addEventListener("wheel", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={scrollRef}
      onMouseMoveCapture={() => handleLoadingModelOnMouseMove()}
      onTouchStartCapture={()=> handleLoadingModelOnMouseMove()}
      className="dark:bg-primaryDarkBg"
    >
      <div className="flex justify-between mob_old:flex-col lap:flex-row h-full py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom lap:gap-[30px] px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-[#F8F9FC] dark:bg-primaryDarkBg">
        <div className="text-center lap:text-left lap:w-1/2 bleh:w-[45%] flex flex-col gap-[36px] lap:justify-center">
          <div className="flex flex-col gap-[16px]">
            <div className="">
              <HeroSectionHeading
                headings={[heroData.heroSectionHeading]}
              />
            </div>
            <div className="">
              <HeroSectionSubHeading subheadings={[heroData.heroSectionSubHeading]} />
            </div>
          </div>
          {/* Model for mobile and tab views */}
          <div className="flex lap:hidden relative items-center h-[250px] mob_old:h-[350px] xl_old:h-auto w-full mt-[25px] tab_old:my-[30px]">
            <ClientOnly>
              {() => (
                <OnDemandModelLoad
                  loadModelOnMouseMove={loadModelOnMouseMove}
                  poster={`${env.CDN_BASE_URL}/miscellaneous/Fullerum.webp`}
                  src={`${env.CDN_BASE_URL}/3D Models/why-us/fullerene-abstract.glb`}
                  alt="custom 3D models at scale"
                  rotation="calc(5deg + env(window-scroll-y) * 45deg) 0 5.0m)"
                  shadowIntensity="0"
                  posterWidth="100%"
                  posterHeight="100%"
                />
              )}
            </ClientOnly>
          </div>
          <div className="w-fit mx-auto lap:ml-0">
            <PrimaryButton content="Let's get started" link="/contact-us" />
          </div>
        </div>

        {/* Model laptop and above views */}
        <div className="hidden lap:flex relative lap:mr-4 tab_old:w-1/2 h-[350px] xl_old:h-[1000px] items-center">
          <ClientOnly>
            {() => (
              <OnDemandModelLoad
                loadModelOnMouseMove={loadModelOnMouseMove}
                src={`${env.CDN_BASE_URL}/3D Models/why-us/fullerene-abstract.glb`}
                modelKey="AR"
                poster={`${env.CDN_BASE_URL}/miscellaneous/Fullerum.webp`}
                alt="custom 3D models at scale"
                cameraOrbit="calc(5deg + env(window-scroll-y) * 45deg) 5.5m)"
                shadowIntensity="0"
                posterWidth="100%"
                posterHeight="100%"
              />
            )}
          </ClientOnly>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="text-secondaryBackground overflow-hidden bg-[url('../../public/images/ctaBg_whyUs.png')] bg-cover"
        // style={{
        //   backgroundImage: `url(${underwater})`,
        //   backgroundSize: "cover",
        //   backgroundposition: "center",
        //   backgroundrepeat: "no-repeat",
        // }}
      >
        {/* BG color applied with percent is primaryBackgroundColour */}
        <div className="w-full lap:w-[75%] xl_old:w-[90%] xxl_old:w-[80%] mx-auto text-center py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom backdrop-blur-sm tab_old:backdrop-blur-none tab_old:bg-inherit bg-[rgba(32, 40, 50,0.2)] px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw]">
          <div className="w-[90%] lap:w-full mx-auto text-center ">
            <SubSectionHeading
              text="Get quick conversions with 3D models tailored to your platform"
              section
              position="center"
            />
          </div>
          <div className="w-full lap:w-[75%] mx-auto text-center mt-[15px]">
            <div className="text-primaryBlack dark:text-darkSubHeading mob_old:text-base tab_old:text-lg lap:text-[2.25rem] font-extraligh mt-[7.5px] lap:mt-4 bleh:mt-8 w-[90%] tab_old:w-[100%] bleh:w-[80%] text-center mx-auto">
              <div className="leading-relaxed pt-[7.5px] lap:pt-4 mx-auto tab_old:mx-0">
                <SubSectionText
                  text="We have a dedicated team of more than 80 3D artists and an internal
                  quality assurance tool to give your customers the best
                  experience when interacting with your products."
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center mx-auto mt-8 tab_old:mt-[30px] w-full tab_old:w-[55%]">
            <div className="text-center mx-auto w-full">
              <div className="text-primaryBlack dark:text-darkHeading mob_old:text-base tab_old:text-lg lap:text-[2.25rem] font-medium w-[90%] tab_old:w-[100%] text-center mx-auto">
                <div className="mx-auto leading-[1.35rem]">
                  <h3 className="text-primaryBlack dark:text-darkHeading text-base font-[500] tab_old:text-2xl xl_old:text-4xl leading-[1.35rem]">
                    Our clients have achieved
                  </h3>
                </div>
              </div>
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
            <div className="mt-[30px] flex flex-col gap-[15px] mx-auto tab_old:hidden w-fit">
              <div className="flex items-center justify-start gap-[15px] text-left">
                <StatsCircle
                  statValue="72"
                  statField=""
                  textColor={statsCircleTextColor}
                  bgColor1={statsCircleBgColor1}
                  bgColor2={statsCircleBgColor2}
                  bgColor3={statsCircleBgColor3}
                />
                <h2 className="text-darkHeading">Increased buyer confidence</h2>
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

      {/* Section 3 */}
      <div className="flex flex-col text-center items-center py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-[#F8F9FC] dark:bg-primaryDarkBg">
        <SubSectionHeading text="Why work with us?" section position="center" />
        <div className="text-primaryBlack dark:text-darkSubHeading mob_old:text-base tab_old:text-lg lap:text-[2.25rem] mt-[15px] lap:mt-4 w-full lap:w-[60%] ">
          <div className="leading-relaxed lap:pt-4 tab_old:mx-0">
            <SubSectionSubHeading
              text="Trusted by clients in 17+ countries, we craft detail oriented 3D
              models for your customers so they see your product and envision its
              benefits clearly."
            />
          </div>
        </div>
        <div className="flex flex-col tab_old:flex-row gap-4 xl_old:gap-8 text-center mt-[30px] tab_old:mt-[60px] xl_old:mt-[150px]">
          <div
            className={`bg-[#F6F8F9] dark:bg-cardBackgroundColor ${
              section === null ? "" : "h-fit"
            } w-full lap:w-[50%] text-primaryBlack dark:text-darkSubHeading p-4 rounded-[5px]`}
          >
            <div className="w-16 h-16 tab_old:w-20 tab_old:h-20 xl_old:w-24 xl_old:h-24 rounded-full bg-tertiaryBackground mx-auto flex justify-center items-center">
              <img
                src={`${env.CDN_BASE_URL}/What+You+Get+Images/team.png`}
                className="w-[90%] object-contain mx-auto"
                alt="Team of more than 80 3D Artists"
              />
            </div>
            <div className="font-semibold mt-4">
              <SubSectionSubHeading
                element="h3"
                text="Team of more than 80 3D Artists"
              />
            </div>
            <div className="mt-8 text-xs mob_old:text-base xl_old:text-xl">
              <p
                className={
                  section === WhyUsSections.TEAM_ARTISTS
                    ? "line-clamp-0"
                    : "line-clamp-4 lap:line-clamp-[10]"
                }
              >
                We have a skilled team of over 80 in-house 3D artists to handle
                a variety of 3D projects from start to finish, so you don’t have
                to hire freelancers or a full-fledged team for it.
                <br />
                <br />
                Being a one-stop-shop for many project types and industries
                including gaming, jewellery and footwear, we train our artists
                to have functional specializations in modelling, texturing,
                sculpting, retopology, etc. Through suitable design
                infrastructure and our development programs, we upskill our 3D
                artists to ensure perfection in the entire 3D asset creation
                process for the e-commerce, AR, VR or WebAR industries, cutting
                down your operating costs.
                <br />
                <br />
                Depending upon the project size, we dedicate a team specifically
                for your project. Each team headed by an expert project manager
                builds product-accurate 3D models that are compatible with any
                platform. Every feedback is absorbed to deliver the project
                exactly how you would expect your product visualizations to be -
                no compromises.
              </p>
              {section === WhyUsSections.TEAM_ARTISTS ? null : (
                <a
                  id={WhyUsSections.TEAM_ARTISTS}
                  className="text-ikarus-blue hover:underline hover:cursor-pointer mt-4"
                  onClick={handleClick}
                >
                  Read More. . .
                </a>
              )}
              {section === WhyUsSections.TEAM_ARTISTS && (
                <a
                  id={WhyUsSections.TEAM_ARTISTS}
                  className="text-ikarus-blue hover:underline hover:cursor-pointer mt-4"
                  onClick={() => {
                    setSection(null);
                  }}
                >
                  Read Less. . .
                </a>
              )}
            </div>
          </div>
          <div
            className={`bg-[#F6F8F9] dark:bg-cardBackgroundColor ${
              section === null ? "" : "h-fit"
            } w-full lap:w-[50%] text-primaryBlack dark:text-darkSubHeading p-4 rounded-[5px]`}
          >
            <div className="w-16 h-16 tab_old:w-20 tab_old:h-20 xl_old:w-24 xl_old:h-24 rounded-full bg-tertiaryBackground mx-auto flex justify-center items-center">
              <img
                src={`${env.CDN_BASE_URL}/How+we+work+images/extensiveQualityCheck.webp`}
                className="h-[60%] object-contain mx-auto"
                alt="In-House Quality Assurance Tool"
              />
            </div>
            <div className="font-semibold mt-4">
              <SubSectionSubHeading
                element="h3"
                text="In-House Quality Assurance Tool"
              />
            </div>
            <div className="mt-8 text-xs mob_old:text-base xl_old:text-xl">
              <div
                className={
                  section === WhyUsSections.QUALITY_ASSURANCE
                    ? "line-clamp-0"
                    : "line-clamp-4 lap:line-clamp-[10]"
                }
              >
                Through our in-house Quality Assurance (QA) tool, we check your
                entire project internally at all levels. The tool is deployed
                with Quality Assurance experts to identify and correct errors in
                the 3D models, bringing down corrections by 35%.
                <br />
                <br />
                The QA tool improves the build and detail of 3D assets, leading
                to minimum revisions over feedback on assets produced. We have
                numerous quality checkpoints throughout the workflow for
                inspection and correction of any potential issues before the
                project reaches you, and we’re able to deliver your 3D models
                within the shortest turnaround time.
                <br />
                <br />
                One of the key benefits of the QA tool is its ability to improve
                accuracy over a number of nitty-gritties in the models. A few of
                the features in the tool are:
                <br />
                1. Grid Helper to check the model’s position in the 3D space
                <br />
                2. Axis Helper to view the direction in which the model is
                facing (X, Y or Z)
                <br />
                3. Channel Debugger to resolve any issues in the base color,
                metalness, normal, roughness, opacity, etc.
              </div>
              {section === WhyUsSections.QUALITY_ASSURANCE ? null : (
                <a
                  id={WhyUsSections.QUALITY_ASSURANCE}
                  className="text-ikarus-blue hover:underline hover:cursor-pointer mt-4"
                  onClick={handleClick}
                >
                  Read More. . .
                </a>
              )}
              {section === WhyUsSections.QUALITY_ASSURANCE && (
                <a
                  id={WhyUsSections.QUALITY_ASSURANCE}
                  className="text-ikarus-blue hover:underline hover:cursor-pointer mt-4"
                  onClick={() => {
                    setSection(null);
                  }}
                >
                  Read Less. . .
                </a>
              )}
            </div>
          </div>
          <div
            className={`bg-[#F6F8F9] dark:bg-cardBackgroundColor ${
              section === null ? "" : "h-fit"
            } w-full lap:w-[50%] text-primaryBlack dark:text-darkSubHeading p-4 rounded-[5px]`}
          >
            <div className="w-16 h-16 tab_old:w-20 tab_old:h-20 xl_old:w-24 xl_old:h-24 rounded-full bg-tertiaryBackground mx-auto flex justify-center items-center">
              <img
                src={`${env.CDN_BASE_URL}/What+You+Get+Images/24x7.png`}
                className="h-[80%] object-contain mx-auto"
                alt="Support Team That’s Always There"
              />
            </div>
            <div className="font-semibold mt-4">
              <SubSectionSubHeading
                element="h3"
                text="Support Team That’s Always There"
              />
            </div>
            <div className="mt-8 text-xs mob_old:text-base xl_old:text-xl">
              <p
                className={
                  section === WhyUsSections.SUPPORT_TEAM
                    ? "line-clamp-0"
                    : "line-clamp-4 lap:line-clamp-[10]"
                }
              >
                We understand that your project deserves 100% attention. We
                dedicate an entire team handled by a project manager to your
                task depending on the volume of 3D assets - with a 24x7
                available person of contact for a seamless communication.
                <br />
                <br />
                Building long-lasting and successful partnerships is our
                priority, and it is achieved when communication is transparent,
                clear and unrestricted. Your project manager and POC is
                available to you 24x7 for smooth and timely updates so you’re in
                on the progress of your project at all times. Through the POC,
                we invite any feedback and suggestions you have and implement it
                real-time so the end delivery has minimal to no revisions.
                <br />
                <br />
                You’re not just a customer to us, but a partner, so we assure
                prompt assistance throughout the progress of your project.
              </p>
              {section === WhyUsSections.SUPPORT_TEAM ? null : (
                <a
                  id={WhyUsSections.SUPPORT_TEAM}
                  className="text-ikarus-blue hover:underline hover:cursor-pointer mt-4"
                  onClick={handleClick}
                >
                  Read More. . .
                </a>
              )}
              {section === WhyUsSections.SUPPORT_TEAM && (
                <a
                  id={WhyUsSections.SUPPORT_TEAM}
                  className="text-ikarus-blue hover:underline hover:cursor-pointer mt-4"
                  onClick={() => {
                    setSection(null);
                  }}
                >
                  Read Less. . .
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      {/* <ServicesFooterDynamic {...serviceFooter} />*/}

      <ServicesFooterDynamic {...serviceFooter} />
      <Footer />
    </div>
  );
};

export function links() {
  return [{ rel: "canonical", href: `/why-us` }];
}

export function meta() {
  return [
    {title: "Why Choose Ikarus 3D ?"},
    {name:"description", content:"With 80+ skilled artists and a dedicated QA tool , our 3D creations speak volumes. Trusted by clients in 17+ countries, we bring your vision to life."},
    {property:"og:title", content: "Why Choose Ikarus 3D ?"},
    {property:"og:url", content: `/why-us`},
    {property:"og:description", content:"With 80+ skilled artists and a dedicated QA tool , our 3D creations speak volumes. Trusted by clients in 17+ countries, we bring your vision to life."},
    {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:"twitter:title", content: "Why Choose Ikarus 3D ?"},
    {property:"twitter:description", content:"With 80+ skilled artists and a dedicated QA tool , our 3D creations speak volumes. Trusted by clients in 17+ countries, we bring your vision to life."},
  ];
}

export default WhyUs;
