import React, { useState } from "react";
import coreTeam from "../../public/images/CoreTeam3.webp";
import Cube_video from "../../public/videos/Updated_Cube.mp4";
import { motion } from "framer-motion";
import GetInTouch from "~/components/GetInTouch";
import pplBehindIkarus1 from "../../public/images/pplBehindIkarus1.png";
import pplBehindIkarus2 from "../../public/images/pplBehindIkarus2.png";
import ananya2 from "../../public/images/ananya2.png";
import ishan from "../../public/images/ishan.webp";
import archna from "../../public/images/archana.webp";
import nishant from "../../public/images/nishantSir.webp";
import aavleen from "../../public/images/aavleenMa'am.webp";
import pritish from "../../public/images/pritishSir1.webp";
import ananya from "../../public/images/ananyaMa'am.webp";
import indiaToday from "../../public/images/indiaToday.webp";
import logo2 from "../../public/images/logo2.webp";
import ht from "../../public/images/ht.webp";
import siliconIndia from "../../public/images/siliconIndia.webp";
import globalHues from "../../public/images/globalHues.webp";
import PplBehindIkarusSection from "../components/pplBehindIkarusSection";
import axe from "../../public/images/axe.png";
import yields from "../../public/images/yield.png";
import mistakes from "../../public/images/mistakes.png";
import passionate from "../../public/images/passionate.png";
import almost from "../../public/images/almost.png";
import hr1 from "../../public/images/hr1.jpg";
import hr2 from "../../public/images/hr2.jpg";
import mk1 from "../../public/images/mk1.jpg";
import mk2 from "../../public/images/mk2.jpg";
import tech1 from "../../public/images/tech1.jpg";
import tech2 from "../../public/images/tech2.jpg";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import HeroSectionSubHeading from "../components/text/HeroSectionSubHeading";
import Quote from "../components/text/Quote";
import SubSectionHeading from "../components/text/SubSectionHeadingOld";
import ContentHeading from "../components/text/ContentHeading";
import SubSectionText from "../components/text/SubSectionText";
import SwipeIt from "../components/SwipeIt";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import LazyLoad from "react-lazyload";
import {siteMapTags as nextRoute } from "./augmented-reality-3d-modeling-services";
const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/about-us"},
      {name:"priority", content: 0.8},
      {name:"next-route", content: nextRoute()}
  ]
};

const AboutUs = () => {
  const threeDsection = {
    title: "3D Design",
    name: " Nishant Verma",
    designation: "Vice President 3D & Co-founder",
    text: "It’s time for lateral thinking in 3D - to gather extensive insights of previous concepts and use them as stepping stones to find greater efficiencies. We’re recognizing how design has been implemented and unearthing newer ways to refine execution with 3D.",
    img0: `${env.CDN_BASE_URL}/Core+Team/nishantSir.webp`,
    img1: pplBehindIkarus1,
    img2: pplBehindIkarus2,
    img3: pplBehindIkarus2,
  };
  const HRsection = {
    title: "Human Resource",
    name: "Pragya Jain",
    designation: "Senior HR Manager",
    text: "We build visions into reality. Our very reason for existing is to induct individual excellence, channelize it into a cadre of brilliance and improve on our own previous conquests. We augment inspiration, we augment triumphs.",
    img0: `${env.CDN_BASE_URL}/Core+Team/pragyaMa'am.webp`,
    img1: hr1,
    img2: hr2,
    img3: pplBehindIkarus2,
  };
  // const Techsection = {
  //   title: "Technology",
  //   name: " Pritish Sehzpaul",
  //   designation: "Head of Technology",
  //   text: "We’re on an endeavour to become a team capable of next generation innovation with an in-depth knowledge of our domain and technology. Finding ourselves at the cross-section of tech, art, and physics, we’re not just engineers, but creative problem solvers.",
  //   img0: `${env.CDN_BASE_URL}/Core+Team/pritishSir1.webp`,
  //   img1: tech1,
  //   img2: tech2,
  //   img3: pplBehindIkarus2,
  // };
  const Marketingsection = {
    title: "Marketing",
    name: "Ishan Kumar Giddu",
    designation: "Interim Head of Marketing",
    text: "Brands are not built with content, but with stories. At Ikarus, we document our stories most earnestly, so anyone who joins us either as a client or as a colleague, they can see where we come from, and feel our passion towards our goals. Curiosity guides us, and data directs us. We add innovation to our execution with the latest tech and a team that is willing to put in their best. From strategy to design, our commitment in marketing is to foster growth for all, ensuring we soar just right.",
    img0: `${env.CDN_BASE_URL}/Core+Team/ishan.webp`,
    img1: mk1,
    img2: mk2,
    img3: pplBehindIkarus2,
  };
  const Businesssection = {
    title: "Business Development",
    name: " Archna Luthra",
    designation: "Head of IR",
    text: "We as a team, aim to identify opportunities to build win-win Business Partnerships with our clients by uncovering their needs and requirements. To grow our business capabilities and synergies, we focus on creating development plans and forecasting growth projections to entail new partnerships and bringing tremendous efficiency to our partners’ modus operandi.",
    img0: `${env.CDN_BASE_URL}/Core+Team/archana.webp`,
    img1: pplBehindIkarus1,
    img2: pplBehindIkarus2,
    img3: pplBehindIkarus2,
  };

  const pplBehinIkarusdMobView = [
    threeDsection,
    HRsection,
    // Techsection,
    Marketingsection,
    Businesssection,
  ];

  const values = [
    {
      img: `${env.CDN_BASE_URL}/Our+Values/axe.png`,
      heading: "Sharpen your axe",
      desc: "Before getting into action, we make sure that no stone is left unturned in our research. We prioritise analysing the models of approach, their ‘whys’ and ‘hows’ and subsequent improvements - so our work is always backed by a store of knowledge.",
      alt:"Sharpen your axe"
    },
    {
      img: `${env.CDN_BASE_URL}/Our+Values/almost.png`,
      heading: "Almost is nothing",
      desc: "Nobody remembers whoever ran the race; everyone remembers who won. We passionately believe that output is either 1 or 0. We will never settle for anything less than an absolute 1, because fractional effort or a half-hearted attempt is meaningless.",
      alt:"Almost is nothing"
    },
    {
      img: `${env.CDN_BASE_URL}/Our+Values/mistakes.png`,
      heading: "Make smart mistakes",
      desc: "We encourage mistakes because they’re essential to growth. If any of us takes a well thought out bet and it doesn’t work out, it’s absolutely fine. There’s only one rule - the mistakes shouldn’t be on account of negligence, lack of work ethic or impulsivity.",
      alt:"Make smart mistakes"
    },
    {
      img: `${env.CDN_BASE_URL}/Our+Values/yield.png`,
      heading: "More pots yield better results than a perfect one",
      desc: "We balance out both quality and quantity, which ultimately maximizes our efficiency. Instead of hyperfixation on achieving one perfect result, we put in effort for multiple quality results achieved timely.",
      alt:"More pots yield better results than a perfect one"
    },
    {
      img: `${env.CDN_BASE_URL}/Our+Values/passionate.png`,
      heading: "If you’re not obsessed, you’re not passionate enough",
      desc: "We’re at 200% when it comes to passion. We obsess over finding solutions and upgrading our execution, which is why we’re able to innovate.",
      alt:"If you’re not obsessed, you’re not passionate enough"
    },
  ];

  const [currentModel, setCurrentModel] = useState("TheLeaders");
  const leaders = [
    {
      name: "Ishan Kumar Giddu",
      designation: "CEO & Founder",
      linkedin: "https://www.linkedin.com/in/ikgiddu/",
      image: `${env.CDN_BASE_URL}/Core+Team/ishan.webp`,
      bannerPos: "top-1/2 left-5",
      alt:"Mr. Ishan Kumar Giddu the CEO of Ikarus 3D"
    },
    {
      name: "Archna Luthra",
      designation: "Head of IR",
      linkedin: "https://www.linkedin.com/in/archnaluthra007/",
      image: `${env.CDN_BASE_URL}/Core+Team/archana.webp`,
      bannerPos: "top-48 left-5",
      alt:"Ms. Archana Luthra the Head of IR"
    },
    {
      name: "Nishant Verma",
      designation: "Vice President 3D & Co-founder",
      linkedin: "https://www.linkedin.com/in/nishant-verma-6202321a4/",
      image: `${env.CDN_BASE_URL}/Core+Team/nishantSir.webp`,
      bannerPos: "bottom-16 right-6 ",
      alt:" Mr. Nishant Verma the Co Founder of Ikarus 3D"
    },
    {
      name: "Pragya Jain",
      designation: "Senior HR Manager",
      linkedin: "https://www.linkedin.com/in/pragya-j/",
      image: `${env.CDN_BASE_URL}/Core+Team/pragyaMa'am.webp`,
      bannerPos: "left-1/4 ",
      alt:"Ms. Pragya Jain the HR Manager of Ikarus 3D"
    },
    // {
    //   name: "Pritish Sehzpaul",
    //   designation: "Head of Technology",
    //   linkedin: "https://www.linkedin.com/in/pritishsehzpaul/",
    //   image: `${env.CDN_BASE_URL}/Core+Team/pritishSir1.webp`,
    //   bannerPos: "bottom-16 right-4 ",
    //   alt:"Mr. Pritish Sehzpaul the Head of Technology of Ikarus 3D"
    // },
    // {
    //   name:"Ananya Nigam",
    //   designation:"Head of Marketing",
    //   linkedin:"https://www.linkedin.com/in/ananyahere/",
    //   image:`${env.CDN_BASE_URL}/Core+Team/ananyaMa'am.webp`,
    //   bannerPos:"bottom-16 right-8"
    // }
  ];
  return (
    <div className="text-primaryBlack">
      <div className="flex justify-between py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom xl_old:pt-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-secondaryBackground dark:bg-primaryDarkBg">
        <div className="w-full lap:w-[55%] flex flex-col lap:justify-center">
          <h1 className="dark:text-darkHeading text-center lap:text-left">
            <h1 className="font-[500] text-4xl tab_old:text-6xl xl_old:text-9xl tab_old:leading-normal lap:leading-loose desk:leading-loose">
              Hi!
            </h1>
            {/* <p className='text-3xl tab_old:text-5xl xl_old:text-8xl font-semibold tab_old:leading-normal desk:leading-snug'>We at <span className='text-primaryBlue'>IKARUS 3D</span> build 3D models
              so your brand has a creative edge</p> */}
            <h1 className="font-[500] text-primaryBlack dark:text-darkHeading text-2xl tab_old:text-[32px] lap:text-5xl xl_old:text-8xl">
              <span className="leading-[1.15rem] tab_old:leading-[39px] xl_old:leading-[1.25]">
                We at <span className="text-primaryBlue">IKARUS 3D</span> build
                3D models so your brand has a creative edge
              </span>
            </h1>
          </h1>
          <div className="text-center lap:text-left my-[15px] lap:my-[30px] w-full tab_old:w-[80%] mx-auto lap:mx-0">
            <HeroSectionSubHeading subheadings={["Be it product Demos, Virtual try-ons or VR based stores, we’ve got you covered."]} />
          </div>
          <div className="font-semibold justify-center flex my-2 tab_old:my-4 lap:hidden w-full tab_old:w-[90%] mx-auto">
            <video
              className="mx-auto lap:mr-auto xl_old:mx-auto"
              src={`${env.CDN_BASE_URL}/Videos/about-us/Updated_Cube.mp4`}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
            />
          </div>
        </div>
        <div className="w-[45%] tab_old:w-full hidden lap:w-[50%] lap:flex lap:items-start">
          <video
            className="mr-auto xl_old:mx-auto"
            src={`${env.CDN_BASE_URL}/Videos/about-us/Updated_Cube.mp4`}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
          />
        </div>
      </div>
      <div className="min-h-[29rem] lg:mt-[100px] flex flex-col lap:flex-row py-smCustomHead tab_old:py-mdCustomHead lap:py-16 desk:py-24 xl_old:py-[13rem] px-0 lap:px-32 desk:px-[10vw] xxl_old:px-[18vw] bg-secondaryBackground dark:bg-primaryDarkBg">
        <div className="w-[91%] lap:w-1/2 xl_old:w-[40%] relative mx-auto lap:mx-0 h-auto tab_old:h-[360px]">
          <div className="tab_old:absolute  -top-[4.5rem] mob_old:-left-24 tab_old:left-0 tab_old:right-0 lap:right-auto lap:left-0 mob_old:-top-[5rem] tab_old:-top-[6.25rem] lap:-top-[9rem] desk:-top-[12.5rem] xl_old:-top-[19.5rem]">
            <img
              src={`${env.CDN_BASE_URL}/Core+Team/CoreTeam3.webp`}
              className="tab_old:w-[350px] lap:w-[320px] desk:w-[400px] xl_old:w-[600px] mx-auto"
              alt="Mr. Ishan Kumar Giddu the CEO & Mr. Nishant Verma the Co Founder of Ikarus 3D"
            />
            <div className="tab_old:w-[400px] desk:w-[500px] xl_old:w-[650px] mx-auto tab_old:mx-auto py-2 px-3 mob_old:py-4 mob_old:px-6 tab_old:py-5 xl_old:py-7 tab_old:px-[2rem] lap:px-9 desk:px-[3.25rem] dark:text-darkHeading text-secondaryBackground animated-gradient flex rounded-[60px] xl_old:rounded-[70px] justify-around tab_old:justify-between">
              <div>
                <p className="text-xs mob_old:text-base lap:text-xl xl_old:text-3xl font-[500]">
                  Nishant Verma
                </p>
                <p className="text-xs mob_old:text-base lap:text-base xl_old:text-xl font-[400]">
                  VP-3D | Co-Founder
                </p>
              </div>
              <div>
                <p className="text-xs mob_old:text-base lap:text-xl xl_old:text-3xl font-[500]">
                  Ishan Kumar
                </p>
                <p className="text-xs mob_old:text-base lap:text-base xl_old:text-xl font-[400]">
                  CEO | Founder
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] lap:w-[40%] xl_old:w-[55%] relative mx-auto mt-[10px] tab_old:mt-[30px] lap:mt-0 dark:text-darkHeading text-lg text-center lap:text-left">
          <div className="mt-[30px] tab_old:mt-[60px] lap:mt-0">
            <div className="flex w-full dark:text-darkHeading">
              <span className="text-sm tab_old:text-xl xl_old:text-[36px] xl_old:leading-[1.35]">
                <span className="text-[1.625rem] tab_old:text-[2rem] xl_old:text-[3rem] xl_old:leading-[1.35]">
                  "
                </span>
                Have you ever wondered what if I were alive during the Internet
                boom? Could I have contributed? Could I have helped further
                mankind? Today we have a similar opportunity. What we create
                today at Ikarus 3D, will contribute directly to the future that
                we will live in. The drawings we draw on the virtual walls might
                seem like a small cog in the greater scheme of things, but so
                did Thomson’s discovery of the electron.
                <span className="text-[1.625rem] tab_old:text-[2rem] xl_old:text-[2.5rem]">
                  "
                </span>
              </span>
            </div>
          </div>
          <p className="text-sm tab_old:text-xl xl_old:text-3xl font-bold mt-2 text-[#0091C2]">
            Ishan Kumar Giddu, CEO & Founder
          </p>
        </div>
      </div>
      <div className="flex flex-col lap:flex-row py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-secondaryBackground dark:bg-primaryDarkBg">
        <div className="w-full lap:w-[40%] desk:w-[63%] xl_old:w-[47.5%] flex items-center">
          <div>
            <div className="tab_old:leading-normal desk:leading-snug text-center lap:text-left">
              <SubSectionHeading text="From a dorm to one of the biggest 3D Design teams in the world" />
            </div>
            <div className="text-center lap:text-left mt-[15px] lap:mt-4 tab_old:mt-8 text-primaryBlack dark:text-darkSubHeading text-base tab_old:text-2xl xl_old:text-4xl leading-[1.35rem]">
              Here's what our journey looks like so far
            </div>
          </div>
        </div>
        <div className="rounded-[5px] overflow-hidden mt-[30px] lap:mt-8 top-0 lap:my-auto mx-auto tab_old:h-[220.5px] lap:h-[370.8px] tab_old:w-[392px] lap:w-[759px] lap:ml-[10%] desk:ml-[2%] xl_old:ml-auto xl_old:mr-0 xl_old:w-[45%] xl_old:h-[540px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PaVaP_p1yWM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="hidden tab_old:block py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom dark:text-darkHeading bg-secondaryBackground dark:bg-primaryDarkBg">
        <div className="text-center">
          <div className="mx-auto">
            {" "}
            <SubSectionHeading element="h3" text="Meet the people behind Ikarus 3D" />
          </div>
          <div className="hidden tab_old:flex tab_old:w-[85vw] items-center justify-between mx-auto">
            {/* <div className='w-[4%] border-[1.5px] border-ikarus-blue'></div>          */}
            <ul className="relative mx-auto tab_old:w-[95%] dark:text-darkSubHeading hidden justify-around rounded-xl pt-12 pb-4 tab_old:flex">
              <div
                className={`absolute bottom-4 w-1/6 border-b-2 border-primaryBlue bg-transparent transition-all duration-300 ease-linear ${
                  currentModel === "TheLeaders"
                    ? "left-1"
                    : currentModel === "3DDesign"
                    ? "left-[16.66%]"
                    : currentModel === "HumanResource"
                    ? "left-[33.33%]"
                    : currentModel === "Technology"
                    ? "left-1/2"
                    : currentModel === "Marketing"
                    ? "left-[66.66%]"
                    : "left-[83%]"
                }`}
              ></div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex h-12 w-1/6 cursor-pointer items-center justify-center hover:text-primaryBlue ${
                  currentModel === "TheLeaders" ? "text-primaryBlue" : ""
                }`}
                onClick={() => setCurrentModel("TheLeaders")}
              >
                <li className="flex flex-col mb-4">
                  <a className="text-xs desk:text-lg xl_old:text-3xl dark:text-darkHeading">
                    <h4>
                      The Leaders
                    </h4>
                  </a>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`flex h-12 w-1/6 cursor-pointer items-center justify-center hover:text-primaryBlue ${
                  currentModel === "3DDesign" ? "text-primaryBlue" : ""
                }`}
                onClick={() => setCurrentModel("3DDesign")}
              >
                <li className="flex flex-col mb-4">
                  <a className="text-xs desk:text-lg xl_old:text-3xl dark:text-darkHeading">
                    <h4>
                      3D Design
                    </h4>
                  </a>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className={`+ flex h-12 w-1/6 cursor-pointer items-center justify-center hover:text-primaryBlue ${
                  currentModel === "HumanResource" ? "text-primaryBlue" : ""
                }`}
                onClick={() => setCurrentModel("HumanResource")}
              >
                <li className="flex flex-col mb-4">
                  <a className="text-xs desk:text-lg xl_old:text-3xl dark:text-darkHeading">
                    <h4>
                      Human Resources
                    </h4>
                  </a>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className={`+ flex h-12 w-1/6 cursor-pointer items-center justify-center hover:text-primaryBlue ${
                  currentModel === "Technology" ? "text-primaryBlue" : ""
                }`}
                onClick={() => setCurrentModel("Technology")}
              >
                <li className="flex flex-col mb-4">
                  <a className="text-xs desk:text-lg xl_old:text-3xl dark:text-darkHeading">
                    <h4>
                      Technology
                    </h4>
                  </a>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className={`+ flex h-12 w-1/6 cursor-pointer items-center justify-center hover:text-primaryBlue ${
                  currentModel === "Marketing" ? "text-primaryBlue" : ""
                }`}
                onClick={() => setCurrentModel("Marketing")}
              >
                <li className="flex flex-col mb-4">
                  <a className="text-xs desk:text-lg xl_old:text-3xl dark:text-darkHeading">
                    <h4>
                      Marketing
                    </h4>
                  </a>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className={`+ flex h-12 w-1/6 cursor-pointer items-center justify-center hover:text-primaryBlue ${
                  currentModel === "BusinessDevelopment"
                    ? "text-primaryBlue"
                    : ""
                }`}
                onClick={() => setCurrentModel("BusinessDevelopment")}
              >
                <li className="flex flex-col mb-4">
                  <a className="text-xs desk:text-lg xl_old:text-3xl dark:text-darkHeading">
                    <h4>
                      Business Development
                    </h4>
                  </a>
                </li>
              </motion.div>
            </ul>
            {/* <div className='w-[4%] border-[1.5px] border-ikarus-blue'></div> */}
          </div>
          <div></div>
        </div>
        <div
          id="leaders"
          className={`${
            currentModel === "TheLeaders" ? "block" : "hidden"
          } grid tab_old:grid-cols-3 gap-0 w-full tab_old:w-[85%] lap:w-[63%] mx-auto mt-8 xl_old:mt-24`}
        >
          {leaders.map((leader, index) => (
            <div key={leader.name} className="relative overflow-y-hidden group">
              <img className="w-full h-full object-cover" src={leader.image} 
              alt={leader.alt}
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={leader.linkedin}
                className="absolute bottom-0 lap:-bottom-24 left-0 right-0 bg-[#257abfc4] group-hover:bottom-0 transition-all ease-out duration-500"
              >
                <div className="my-1 lap:my-2 mx-1 lap:mx-3 border-l-[1.5px] border-l-white px-1 lap:px-2">
                  <div className="flex gap-[8px]">
                    <h3 className="text-[11px] leading-3 tab_old:text-base desk:text-xl xl_old:text-3xl">
                      {leader.name}
                    </h3>
                    {/* The rel attribute sets the relationship between your page and the linked URL. Setting it to noopener noreferrer is to prevent a type of phishing known as tabnabbing. */}
                    {/* <div
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primaryBlue ml-2 px-[2px] py-[2px] xl_old:px-2 xl_old:py-[6px] rounded-[5px] text-[10px] xl_old:text-sm h-[65%]"
                    > */}
                      <div className="h-[20%]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
                      </div>
                    {/* </div> */}
                  </div>
                  <h4 className="text-[8px] tab_old:text-[10px] leading-3 desk:text-base xl_old:text-xl">
                    {leader.designation}
                  </h4>
                </div>
              </a>
            </div>
          ))}
        </div>
        {currentModel === "Marketing" ? (
          <PplBehindIkarusSection section={Marketingsection} />
        ) : currentModel === "3DDesign" ? (
          <PplBehindIkarusSection section={threeDsection} />
        ) : currentModel === "HumanResource" ? (
          <PplBehindIkarusSection section={HRsection} />
        ) : currentModel === "BusinessDevelopment" ? (
          <PplBehindIkarusSection section={Businesssection} />
        ) : (
          ""
        )}
      </div>
      <div className="tab_old:hidden bg-primaryDarkBg py-smCustomHead">
        <h1 className="text-3xl text-center dark:text-darkHeading mb-8">
          Meet the people behind IKARUS 3D
        </h1>
        <div className="px-4">
          {pplBehinIkarusdMobView.map((person, index) => (
            <div className="flex justify-between mt-8">
              <div className="w-[230px] h-[250px]">
                <img
                  src={person.img0}
                  alt={person.name + ' - ' + person.designation}
                  className="object-cover h-full w-full mx-auto object-top"
                />
              </div>
              <div className="w-[58%] ml-2">
                <h2 className="dark:text-darkHeading text-xl font-semibold">
                  {person.title}
                </h2>
                <h4 className="mt-3 dark:text-darkSubHeading text-[10px]">
                  {person.text}
                </h4>
                <h3 className="mt-3 text-primaryBlue text-[12px]">
                  {person.name}, {person.designation}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dark:bg-primaryDarkBg dark:text-darkHeading">
        <div className="text-center pt-smCustomHead tab_old:pt-mdCustomHead lap:pt-custom xl_old:pt-xlCustom">
          <SubSectionHeading element="h3" text="Recent Recognitions" />
        </div>
        <div className="w-full flex justify-between pt-smCustomHead tab_old:pt-mdCustomHead lap:pt-custom xl_old:pt-xlCustom border-red-400">
          <div className="mb-[30px] tab_old:mb-[60px] lap:mb-[4.5rem] xl_old:mb-[9rem]">
            <SwipeIt type="loop" autoScroll speed={-0.5} autoWidth gap={"8%"}>
              <img
                className="h-[33px] tab_old:h-[45px] lap:h-[60px] xl_old:h-[80px]"
                src={`${env.CDN_BASE_URL}/Awards/indiaToday.webp`}
                alt="logo of india today"
              />
              <img
                className="h-[33px] tab_old:h-[45px] lap:h-[60px] xl_old:h-[80px]"
                src={`${env.CDN_BASE_URL}/Awards/logo2.webp`}
                alt="logo of achiever award"
              />
              <img
                className="h-[33px] tab_old:h-[45px] lap:h-[60px] xl_old:h-[80px]"
                src={`${env.CDN_BASE_URL}/Awards/ht.webp`}
                alt="logo of hindustan times award"
              />
              <img
                className="h-[33px] tab_old:h-[45px] lap:h-[60px] xl_old:h-[80px]"
                src={`${env.CDN_BASE_URL}/Awards/globalHues.webp`}
                alt="logo of Global Hues"
              />
              <img
                className="h-[33px] tab_old:h-[45px] lap:h-[60px] xl_old:h-[80px]"
                src={`${env.CDN_BASE_URL}/Awards/siliconIndia.webp`}
                alt="logo of Silicon India"
              />
            </SwipeIt>
          </div>
        </div>
      </div>
      <div className="dark:bg-primaryDarkBg">
        <div className="w-full px-10 tab_old:px-0 lap:px-24 desk:px-[2vw] py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom text-center">
          <div className="text-center pb-smCustomHead tab_old:pb-mdCustomHead lap:pb-[30px] xl_old:pb-xlCustom">
            <SubSectionHeading element="h3" text="Our values are part of everything" />
          </div>
          <div className="flex flex-wrap tab_old:min-w-[688px] justify-center gap-[15px] lap:gap-10 max-w-[3175px] mx-auto">
            {values.map((value, index) => (
              <div className="dark:bg-cardBackgroundColor px-[15px] py-[30px] xl_old:px-[25px] xl_old:py-[60px] tab_old:h-[387px] w-[334px] xl_old:h-auto xl_old:w-1/5">
                <div className="w-[35%] mx-auto tab_old:text-xl lap:text-2xl">
                  <LazyLoad>
                    <img src={value.img} alt={value.heading} className="object-contain w-full" />
                  </LazyLoad>
                </div>
                <div className="w-[100%] mx-auto mt-[15px]">
                  <ContentHeading element="h4" text={value.heading} />
                </div>
                <div className="w-full mt-[15px]">
                  <SubSectionText text={value.desc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/about-us` }
  ]
}

export function meta() {
  return [
    {title: "About the team at Ikarus 3D | Get to Know Us"},
    {name:"description", content:"Meet our dedicated team of professionals that makes Ikarus 3D stay ahead in the world of 3D. Let's come together and visualise your brand with us "},
    {property:"og:title", content: "About the team at Ikarus 3D | Get to Know Us"},
    {property:"og:url", content: `${env.SITE_URL}/about-us`},
    {property:"og:description", content:"Meet our dedicated team of professionals that makes Ikarus 3D stay ahead in the world of 3D. Let's come together and visualise your brand with us "},
    {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:video", content:'https://youtu.be/PaVaP_p1yWM'},
    {property:"og:video:width", content:"1280"},
    {property:"og:video:height", content:"720"},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:"twitter:title", content: "About the team at Ikarus 3D | Get to Know Us"},
    {property:"twitter:description", content:"Meet our dedicated team of professionals that makes Ikarus 3D stay ahead in the world of 3D. Let's come together and visualise your brand with us "},
  ];
}

export default AboutUs;
