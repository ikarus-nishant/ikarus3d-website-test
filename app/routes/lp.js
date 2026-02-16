import React, { useState, useEffect, useRef, useCallback } from "react";
// import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  motion,
} from "framer-motion";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import getBrowserEnv from "~/utils/browserEnv";
import PrimaryButton from "../components/primaryButton";
import SeparateButtonsSplide from "../components/SeparateButtonsSplide";
import CountUp from "react-countup";
import MobileSplide from "../components/mobileSplide";
import ServicesSection from "../components/ServicesSection";
import SwipeIt from "../components/SwipeIt";
import useViewportWidth from "../hooks/useViewportWidth";
import PrimaryCTASection2 from "../components/PrimaryCTASection2";
import { useNavigate } from "@remix-run/react";
import Faqs1 from "../components/Faqs1";
import ServicesHeading from "../components/ServicesHeading";
import LpPortfolioFold from "../components/LpPortfolioFold";
import {
  shoeModels,
  chairModels,
  sofaModels,
  cabinetModels,
  bedModels,
  tableModels,
  accesoryModels,
  apparelModels,
} from "../../public/data/modelsData";
import LPFooter from "../components/LPFooter";
import VideoCarousal from "../components/VideoCarousal";
import LPHeroSection from "../components/LPHeroSection";
import ServiceSectionText from "../components/ServiceSectionText";
import LPDropableGrid from "../components/LPDropableGrid";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 justify-start w-full md:w-1/2">
      <div
        style={{
          background: "linear-gradient(90deg, #015EF1 0%, #489BE1 100%)",
        }}
        className="w-[60px] h-[60px] aspect-square rounded-full flex justify-center items-center"
      >
        <img src={icon} />
      </div>

      <div className="text-start grow">
        <h3 className="mb-2 text-lg font-semibold text-ikarus-white">
          {title}
        </h3>
        <p className="text-sm text-ikarus-grey whitespace-normal">{description}</p>
      </div>
    </div>
  );
};

const toggleTest = 0;

const modelData = {
  chair: chairModels,
  sofa: sofaModels,
  cabinet: cabinetModels,
  table: tableModels,
  shoe: shoeModels,
  bed: bedModels,
  accessories: accesoryModels,
  apparel: apparelModels
};
const modelCatagories = [
  {
    name: "Furniture",
    id: "ModelLPViewerID1",
    icon: "/images/lp/furniture.svg",
    alt: "Furniture Icon",
    subCats: [
      {
        name: "Chairs",
        src: "",
        id: "MoreSubCatagories1",
        icon: "/images/Furniture/Chairs/redChair.webp",
        models: modelData.chair,
      },
      {
        name: "Tables",
        src: "",
        id: "MoreSubCatagories2",
        icon: "/images/Furniture/Tables/brownBlack.webp",
        models: modelData.table,
      },
      {
        name: "Beds",
        src: "",
        id: "MoreSubCatagories3",
        icon: "/images/Furniture/Beds/whiteBed.webp",
        models: modelData.bed,
      },
      {
        name: "Sofa",
        src: "",
        id: "MoreSubCatagories4",
        icon: "/images/Furniture/Sofas/HavenviewWillough.webp",
        models: modelData.sofa,
      },
      {
        name: "Cabinets",
        src: "",
        id: "MoreSubCatagories5",
        icon: "/images/Furniture/Cabinets/woodBrown.webp",
        models: modelData.cabinet,
      },
    ],
  },
  {
    name: "Shoes",
    id: "ModelLPViewerID2",
    icon: "/images/lp/shoes.svg",
    alt: "Shoes Icon",
    models: modelData.shoe,
  },
  {
    name: "Apparel",
    id: "ModelLPViewerID3",
    icon: "/images/lp/apparel.svg",
    alt: "Apparel Icon",
    models: modelData.apparel,
  },
  {
    name: "Accessories",
    id: "ModelLPViewerID4",
    icon: "/images/lp/accessories.svg",
    alt: "Accessories Icon",
    models: modelData.accessories,
  },
];


export function GradientBorder({
  show = true,
  defaultColor,
  gradient = "linear-gradient(0,#A06BF8,#00AFD6)",
  size = "95%",
  children,
}) {
  return (
    <div
      style={{ background: show ? gradient : defaultColor }}
      className="overflow-hidden h-full flex justify-center items-center aspect-square rounded-full text-white"
    >
      <div
        className={`bg-ikarus-deepblue h-[${size}] w-[${size}] flex justify-center overflow-hidden items-center aspect-square rounded-full`}
      >
        {children}
      </div>
    </div>
  );
}

export function ModelSectionDropDown({ modelData, changeModelData }) {
  const [selected, setSelected] = useState(0);
  const [selectedSub, setSelectedSub] = useState(0);

  function handleSelection(index) {
    setSelected(index);
    setSelectedSub(index!=0? -1:0);
    changeModelData(
      modelCatagories[index].subCats
        ? modelCatagories[index].subCats[index == 0 ? 0 : selectedSub].models
        : modelCatagories[index].models
    );
  }
  function handleSubSelection(index) {
    setSelected(0);
    setSelectedSub(index);
    changeModelData(
      modelCatagories[0].subCats
        ? modelCatagories[0].subCats[index].models
        : modelCatagories[0].models
    );
  }

  return (
    <div className="bg-ikarus-deepblue rounded-md text-ikarus-white overflow-hidden">
      {modelCatagories.map((e, index) => (
        <div
          key={e.id}
          className="flex-col items-center justify-between cursor-pointer"
        >
          <div
            onClick={() => handleSelection(index)}
            className={`flex items-center justify-between py-2 p-[18px]  ${selected == index && index!=0 && "bg-white bg-opacity-10"}`}
          >
            <div className="flex items-center gap-4">
              <div className={`h-12 ${(selected == index && index!=0)? "opacity-100":"opacity-40"}`}>
                <GradientBorder
                  show={selected == index}
                  gradient={"linear-gradient(0,#A06BF8,#00AFD6)"}
                  size={"95%"}
                  defaultColor={"white"}
                >
                  <img className="" src={e.icon} />
                </GradientBorder>
              </div>
              <div className="select-none">{e.name}</div>
            </div>

            <div>
              {e.subCats && (
                <img
                  className="h-4 w-4 aspect-square"
                  src="/images/chevron-left.svg"
                />
              )}
            </div>
          </div>

          {index !== modelCatagories.length - 1 && (
            <hr
              style={{ height: "0.5px" }}
              className="bg-ikarus-lighterGray border-0"
            />
          )}
          {e.subCats &&
            e.subCats.map((se, innerIndex) => (
              <React.Fragment key={se.id + e.id}>
                <div
                  onClick={() => handleSubSelection(innerIndex)}
                  className={`flex py-2 px-10 gap-4 items-center cursor-pointer ${selectedSub == innerIndex && "bg-white bg-opacity-10"} `}
                >
                  <div className="h-10">
                    <GradientBorder
                      show={selectedSub == innerIndex}
                      gradient={"linear-gradient(0,#A06BF8,#00AFD6)"}
                      size={"90%"}
                      defaultColor={"transparent"}
                    >
                      <img className="h-8 bg-ikarus-deepblue" src={se.icon} />
                    </GradientBorder>
                  </div>
                  <div className="select-none">{se.name}</div>
                </div>
                <hr
                  style={{ height: "0.5px" }}
                  className="bg-ikarus-lighterGray border-0"
                />
              </React.Fragment>
            ))}
        </div>
      ))}
    </div>
  );
}

const env = getBrowserEnv();
export default function lp() {
  const navigate = useNavigate();
  const [currentDisplaying, setCurrentDisplaying] = useState(
    modelCatagories[0].subCats
      ? modelCatagories[0].subCats[0].models
      : modelCatagories[0].models
  );
    
  const ourMilestones = [
    {
      number: 2836,
      start: 1000,
      text: "SUCCESSFUL PROJECTS",
      showPlus: false,
    },
    {
      number: 80,
      start: 0,
      text: "PROFESSIONAL 3D ARTISTS",
      showPlus: true,
    },
    {
      number: 4,
      start: 0,
      text: "YEARS EXPERIENCE",
      showPlus: true,
    },
    {
      number: 350046,
      start: 350000,
      text: "ASSETS CREATED",
      showPlus: false,
    },
  ];
  const testimonials = [
    {
      name: "Erin Sudeck",
      img: `${env.CDN_BASE_URL}/Clients+Logos/vntana_white.webp`,
      designation: "Head of 3D, VNTANA",
      desc: "The team is super responsive offering a genuinely fast turnaround. Our clients typically provide us eComm links to work with, and that's all the team needs to deliver the assets.",
      rating: 4.9,
      link: "https://www.linkedin.com/in/erinsudeck/",
      alt: "VNTANA",
    },
    // {
    //   name: "Gabriele Kraujelyte",
    //   img: `${env.CDN_BASE_URL}/Clients+Logos/sayduck_white.webp`,
    //   designation: "Project Manager, SAYDUCK",
    //   desc: "I really appreciate the team's willingness to improve, it's attention to detail and it's professional approach to business. We're continuously in talks on how to upgrade our partnership.      ",
    //   rating: 4.0,
    //   link: "https://www.linkedin.com/in/gabrielekraujelyte/",
    //   alt: "SAYDUCK",
    // },
    {
      name: "Breno Glennon",
      img: `${env.CDN_BASE_URL}/Clients+Logos/plattar_logo_white.webp`,
      designation: "Project and Client Success Manager, PLATTAR",
      desc: "I like how you focus on communicating more to keep us and the team in the loop. I commend the quality of work and ability to deliver output on time.",
      rating: 4.9,
      link: "https://www.linkedin.com/in/breno-glennon/",
      alt: "PLATTAR",
    },
    // {
    //   name: "Isabel Martínez",
    //   img: "",
    //   designation: "Senior 3d Artist, VictoryXR",
    //   desc: "I greatly appreciate how the team regularly inquires if requirements are not clear, preventing unnecessary rework. Deliveries are always on time. I'd love it if the team focused more on texture resolutions in some cases.",
    //   rating: 4.7,
    //   link:"https://www.linkedin.com/in/isabelmartinezvfx/"
    // },
    // {
    //   name: "Melissa Wildstein",
    //   img: "",
    //   designation: "President, The Matchstick Group",
    //   desc: "The team that she led completed our project with unbelievable speed! I appreciated the responsive communications.",
    //   rating: 4.7,
    //   link:"https://www.linkedin.com/in/melissa-wildstein/"
    // },
    {
      name: "Eros",
      img: `${env.CDN_BASE_URL}/Clients+Logos/future_fashion_white.webp`,
      designation: "Digital Project Manager, Future Fashion Solutions",
      desc: "I like the speed with which you realize the models. I'd suggest improvement in how the models are scaled.",
      rating: 4.0,
      link: "https://www.linkedin.com/in/erosannessi/",
      alt: "Future Fashion Solutions",
    },
    // {
    //   name: "Alexis Guison",
    //   img: "",
    //   designation: "Customer Success Manager, V-Cult",
    //   desc: "We received great 3D objects for a critical project in a short time. Special thanks to Archna for the follow up. The only point that could be improved upon is the verification of files being present in the final folder. ",
    //   rating: 4.6,
    //   link:"https://www.linkedin.com/in/alexis-guison/"
    // },
  ];
  const faqs = [
    {
      question:
        "What variety of projects are within your scope of execution and delivery?",
      answer: (
        <span>
          We have expertise in a vast range of products. Check out our{" "}
          <a href="https://ikarus3d.artstation.com/" className="text-primaryBlue">
            portfolio
          </a>{" "}
          to see what models we can build and deliver.
        </span>
      ),
    },
    {
      question:
        "Can you create 3D models from scratch based on my specifications?",
      answer:
        "Yes, our experts can create 3D models from scratch. We use a structured approach blending creativity, technical know-how, and client input to create high-quality 3D models.",
    },
    {
      question: "Do you provide rendering services?",
      answer:
        "We offer rendering services to bring your 3D models to life with realistic lighting, materials, and environments. Our team uses industry-leading rendering software to create high-quality visualizations that accurately represent your designs.",
    },
    {
      question: "What level of detail can you achieve in your 3D models?",
      answer:
        "We use advanced modeling techniques to achieve a high level of detail in our 3D models, ranging from intricate textures and fine surface details to complex geometries.",
    },
    {
      question: "How do you handle revisions and feedback during the modeling process?",
      answer:
        "We value open communication and collaboration throughout the modeling process. Upon receiving client feedback or revision requests, our team promptly addresses them to meet your expectations. We typically provide multiple stages of review and revision to ensure client satisfaction.",
    },
    {
      question: "Do you offer rigging and animation services for characters or objects?",
      answer:
        "Yes, we offer rigging and animation services for characters, objects, and other elements of your 3D models. Our experienced animators can bring your designs to life with fluid motion and realistic movement tailored to your project's requirements.",
    },
    {
      question: "What is your approach to handling intellectual property and confidentiality?",
      answer:
        "We take the protection of intellectual property and client confidentiality very seriously. Upon request, we are willing to sign non-disclosure agreements (NDAs) to ensure that your designs and data remain confidential. We also have strict internal policies and procedures to safeguard your intellectual property throughout our collaboration.",
    },
    {
      question: "What are your pricing structures for 3D modeling services?",
      answer:
      <span>
        Our pricing structures for 3D modeling services are tailored to each project's needs and requirements. Factors such as complexity, level of detail, turnaround time, and additional services required will influence the overall cost. We provide transparent pricing; therefore, please{" "}
        <a href="/contact-us" className="text-primaryBlue">
          contact us
        </a>{" "}
        for a detailed quote based on your project specifications.
      </span>
    },
  ];
  const CTAsubPoints = [
    "1:1 precision",
    "Lightweight models",
    "Clean topology",
  ];

  const [index, setIndex] = useState(0);

  const heroModelRef = useRef(null);
  const fold3Ref = useRef(null);
  const prevButtonRef = useRef(null);
  const _splideElRef = useRef(null);
  const nextButtonRef = useRef(null);

  const [viewportWidth] = useViewportWidth();

  const {
    ref: counterRef,
    inView: counterInView,
    entry: counterEntry,
  } = useInView({ triggerOnce: true });
  const {
    ref: testimonialsRef,
    inView: testimonialsInView,
    entry: testimonialsEntry,
  } = useInView({ triggerOnce: true });
  const { ref: footerBlogsCallRef, inView: callBlogsFooter } = useInView({
    triggerOnce: true,
  });
  let heroModelHeight = 380;

  if ((viewportWidth < 600 || viewportWidth >= 960) && heroModelRef.current) {
    heroModelHeight = (348 / 488.19) * heroModelRef.current.clientWidth;
  } else heroModelHeight = 380;

  const { ref: ourPartnersRef, inView: ourPartnersInView } = useInView({
    triggerOnce: true,
  });

  const getTestimonials = () => {
    return testimonials.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full bg-[#11141A] rounded-[10px] px-6 xl:px-9 py-7 md:py-12 xl:pb-[30px] min-h-[235px] tab:min-h-[322px] md:min-h-[380px] lap:min-h-[345px]"
      >
        <div className="flex justify-between items-center">
          <img
            src={item.img}
            className="w-[33%]"
            alt={item.alt}
            loading="lazy"
          />
          {item.rating > 4.5 ? (
            <div className="w-[32%]">
              <img
                className="object-contain"
                src={`${env.CDN_BASE_URL}/miscellaneous/moreThanHalf.png`}
                alt="4.9 star rating"
                loading="lazy"
              />
            </div>
          ) : item.rating > 4 ? (
            <div className="w-[32%]">
              <img
                className="object-contain"
                src={`${env.CDN_BASE_URL}/miscellaneous/moreThanHalf.png`} // TODO: This PNG needs to be update in size
                alt="4.9 star rating"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-[32%]">
              <img
                className="object-contain"
                src={`${env.CDN_BASE_URL}/miscellaneous/4star.png`}
                alt="4 star rating"
                loading="lazy"
              />
            </div>
          )}
        </div>
        <p className="text-primaryBlue font-[500] text-[16px] md:text-[18px] leading-[24px] xl:leading-[30px] xl:font-[600] -tracking-[0.09px] mt-[22.5px] md:mt-5 xl:mt-4">
          {item.name},
        </p>
        <p className="mt-[8px] text-white font-[500] text-[16px] md:text-[18px] leading-[24px] -tracking-[0.09px]">
          {item.designation}
        </p>
        <p className="mt-[20px] md:mt-[30px] text-white/80 italic text-[14px] md:text-[16px] leading-[22px] -tracking-[0.08px] xl:text-[18px] xl:leading-[30px xl:font-[300]">
          "{item.desc}"
        </p>
      </motion.div>
    ));
  };
  
  const renderingServicesText = [
    {
      heading:"Silhouettes renders",
      subText:"Navigate on simplified product outline for design concept with swift rendering & zero compromise on quality.",
      img:`${env.CDN_BASE_URL}/lp/Silhouettes+Renders.webp`,
    },
    {
      heading:"Lifestyle Renders",
      subText:`Add authenticity to storytelling experience with captivating scenes that portray ambiance.`,
      img:`${env.CDN_BASE_URL}/lp/Rectangle-1.webp`,
    },
    {
      heading:"Panning Video",
      subText:"Experience holistic viewing from multiple angles in different environments. Bring depth & dimension to the visual presentation.",
      img:`${env.CDN_BASE_URL}/lp/Panning+Video.webp`,
    },
    {
      heading:"Product Breakdown",
      subText:"Peel layers and explore mechanisms to gain insights into its internal components, structure, and assembly process.",
      img:`${env.CDN_BASE_URL}/lp/Product+Breakdown.webp`,
    },
    {
      heading:"360 TurnTable Render",
      subText:"Showcase products from every angle for immersive viewing. The high-quality 3D renders drive sales",
      img:`${env.CDN_BASE_URL}/lp/360+TurnTable+Render.webp`,
    },{
      heading:"Live Scene",
      subText:"Incorporate products that create real-world scenarios, i.e., outdoor scenes, architectural interiors, interactive elements.",
      img:`${env.CDN_BASE_URL}/lp/Live+Scene.webp`,
    }
  ]

  return(
    <main className="flex flex-col gap-12 tab:gap-24">
      {/**1st section 1 */}
      <ServicesSection customClasses={"overflow-hidden relative"}>
        <LPHeroSection />
      </ServicesSection>

      {/* TODO Marquee section 2 */}
      <ServicesSection blockYPadding>
        <LpPortfolioFold
          modelData={currentDisplaying}
          setModelData={setCurrentDisplaying}
          SectionHeading={"Explore Unmatched Realism"}
          SectionSubText={"Exceeding expectations in every industry: shoes, apparel, furniture, or accessories."}
        />
      </ServicesSection>

      {/* Marquee section 3 */}
      <ServicesSection blockYPadding>
        <div className="text-center mb-16">
          <SubSectionHeading element='h3' text="Trusted by Leading Brands" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, delay: 0.5, amount: 0.25 }}
          ref={fold3Ref}
          className="bg-primaryDarkBg max-w-[1400px] mx-auto self-center lg:px-[140px] xl:px-[172.5px] relative"
        >
          <div
            className="absolute h-full w-20 tab:w-32 -left-[1px] lg:left-[140px] xl:left-[172.5px] bg-gradient-to-r from-primaryDarkBg z-10"
            ref={ourPartnersRef}
          ></div>
          <div
            className={`absolute h-full w-20 tab:w-32 -right-[2px] lg:right-[140px] xl:right-[172.5px] bg-gradient-to-r from-transparent to-primaryDarkBg z-10 ${
              ourPartnersInView ? "flex" : "hidden"
            }`}
          ></div>
          <SwipeIt type="loop" autoScroll speed={-0.6} autoWidth={true}>
            <div className="h-full mr-12 my-auto flex items-center">
              <img
                src={`${env.CDN_BASE_URL}/Clients+Logos/plattar_logo_white.webp`}
                className="h-7 tab:h-8 object-contain"
                style={{ scale: 1.1 }}
                alt="Plattar"
                loading="lazy"
              />
            </div>
            <div className="h-full mr-12 my-auto flex items-center">
              <img
                src={`${env.CDN_BASE_URL}/Clients+Logos/meta_white.webp`}
                className="h-[25px] tab:h-7 object-contain"
                style={{ scale: 1.1 }}
                alt="Meta"
                loading="lazy"
              />
            </div>
            <div className="h-full mr-12 my-auto flex items-center">
              <img
                src={`${env.CDN_BASE_URL}/Clients+Logos/sayduck_white.webp`}
                className="h-[25px] tab:h-7 object-contain"
                style={{ scale: 1.1 }}
                alt="Sayduck"
                loading="lazy"
              />
            </div>
            <div className="h-full mr-12 my-auto flex items-center">
              <img
                src={`${env.CDN_BASE_URL}/Clients+Logos/future_fashion_white.webp`}
                className="h-[21px] tab:h-6 object-contain"
                style={{ scale: 1.1 }}
                alt="Future Fashion"
                loading="lazy"
              />
            </div>
            <div className="h-full mr-12 my-auto flex items-center">
              <img
                src={`${env.CDN_BASE_URL}/Clients+Logos/floor_planner_white.webp`}
                className="h-7 tab:h-8 object-contain"
                style={{ scale: 1.1 }}
                alt="Floor Planner"
                loading="lazy"
              />
            </div>
            <div className="h-full mr-12 my-auto flex items-center">
              <img
                src={`${env.CDN_BASE_URL}/Clients+Logos/vntana_white.webp`}
                className="h-[18px] tab:h-5 object-contain"
                style={{ scale: 1.1 }}
                alt="VNTANA"
                loading="lazy"
              />
            </div>
          </SwipeIt>
        </motion.div>
      </ServicesSection>
      
      <ServicesSection blockYPadding>
        <VideoCarousal />
      </ServicesSection>

      <ServicesSection>
        <div className="flex flex-col gap-12">
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-4">
              <SubSectionHeading element='h2' text="3D Rendering Services" />
              <SubSectionSubHeading text="We will exceed your expectations in every industry, whether it be shoes, apparel, furniture, or accessories." />           
            </div>
            <div className="hidden tab:flex justify-end items-end whitespace-nowrap">
              <PrimaryButton
                link="/contact-us"
                content="Talk to Sales"
                rel="noopener noreferrer"
                target="_blank"
              />
            </div>
          </div>
          {/* <div className="grid content-center  grid-cols-3 h-full w-full rounded-lg overflow-hidden"> */}
          <div className="flex bg-white justify-center flex-wrap w-full border-[1px] gap-[1px] rounded-md tab:gap-[2px] tab:rounded-2xl tab:border-[2px] overflow-hidden ">
            {renderingServicesText.map((service,index)=>(
              <LPDropableGrid key={`${index}-${service.heading}`} {...service} />
            ))}
          </div>
          <div className="w-full tab:hidden whitespace-nowrap">
              <PrimaryButton
                link="/contact-us"
                content="Talk to Sales"
                rel="noopener noreferrer"
                target="_blank"
              />
            </div>
        </div>
      </ServicesSection>
      
      {/* MileStones section - */}
      <ServicesSection blockXPadding blockYPadding>
        <div className="bg-primaryDarkBg border-white relative h-auto md:h-[438px] xl:h-auto flex flex-col no-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col gap-3 tab:gap-4 relative z-10 mx-6 tab:mx-12 md:mx-[86px] lg:mx-[112px] xl:mx-[138px] lg:w-[50%] text-left"
          >
            <SubSectionHeading element="h2" text="Our Journey Highlights" />
            <SubSectionSubHeading text="We are on a journey towards shaping the future with our services, helping our clients reach their goals with everlasting success" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 1, amount: 0.25 }}
            ref={counterRef}
            className="w-full md:w-fit place-content-between tab:justify-between md:justify-start tab:w-full grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 tab:gap-6 md:gap-[120px] xl:gap-[100px] relative z-10 mt-12 tab:mt-16 xl:my-[100px] px-6 tab:px-12 md:px-0 md:mx-[86px] lg:mx-[112px] xl:mx-[138px] tab:mb-[47px] md:mb-[98px]"
          >
            {ourMilestones.map((item, index) => (
              <div className="w-fit" key={index}>
                <div className="flex items-center gap-[5px] tab:gap-3 text-[48px] md:text-[53px] xl:text-[62px] leading-[52px] xl:leading-[68px] -tracking-[1px] font-[700] xl:font-[800] text-transparent w-full">
                  <CountUp
                    start={item.start}
                    end={counterInView ? item.number : 0}
                    useEasing={true}
                    duration={3}
                    separator=","
                    decimal="."
                  >
                    {({ countUpRef, start }) => (
                      <div className="relative">
                        <p
                          ref={countUpRef}
                          className="bg-gradient-to-r from-[#015EF1] to-[#489BE1] bg-clip-text font-frankRuhlLibre"
                        ></p>
                        <button
                          className="h-6 w-6 absolute"
                          onClick={start}
                        ></button>
                      </div>
                    )}
                  </CountUp>
                  {item.showPlus && (
                    <span className="bg-gradient-to-r from-[#015EF1] to-[#489BE1] bg-clip-text text-[48px] tab:text-inherit">
                      +
                    </span>
                  )}
                </div>
                <p className="mt-[10px] tab:mt-0 text-[12px] leading-[13px] font-[400] xl:text-[14px] tab:font-[500] xl:font-[300] tracking-[1px] xl:tracking-[2px] text-primaryWhite xl:mt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
          <div className="w-full relative md:absolute bottom-0 z-0 h-full tab:-mt-28 md:mt-0 overflow-hidden">
              <video
                loading="lazy"
                className="ml-auto h-[300px] tab:h-full w-full md:w-auto md:ml-auto"
                autoPlay
                playsInline
                muted
                loop
                src={
                  viewportWidth < 600
                    ? "videos/GlobeMob.mp4"
                    : "videos/Globe.mp4"
                }
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </ServicesSection>

      <ServicesSection blockYPadding>
        <div className="container mx-auto flex flex-col gap-9">
          <div className="flex justify-between items-end pb-10">
            <div>
              <h2 className="text-2xl font-bold text-ikarus-white">
                Why Choose Ikarus 3D?
              </h2>
              <p className=" text-ikarus-grey mt-4">
                With our expertise in all things 3D, we deliver 3D modeling
                services that get you digital-ready.
              </p>
            </div>
            <div className="hidden tab:block whitespace-nowrap">
              <PrimaryButton
                link="https://calendly.com/archna_luthra"
                content="Schedule call"
                rel="noopener noreferrer"
                target="_blank"
                />
            </div>
          </div>

          <div className="flex flex-col items-center bg-white bg-opacity-[0.09] rounded-xl overflow-hidden">
            {/* <div className="rounded-b-xl overflow-hidden py-4 px-8 text-ikarus-white bg-white bg-opacity-[0.09] font-medium">
              HOW WE STAND OUT
            </div> */}
            <div className="flex flex-col lap_gen:flex-row gap-8 tab:gap-12 lap_gen:gap-6 xxl:gap-12 text-center p-9">

              <div className="flex lap_gen:w-1/2 gap-8 tab:gap-12 lap_gen:gap-6 xxl:gap-12 flex-col tab:flex-row justify-between">
                <Feature
                  icon={"/images/lp/HighQualityModel.svg"}
                  title="High-quality model on a low-poly budget."
                  description="File size as small as 2MB to ensure seamless website optimization."
                />
                <Feature
                  icon={"/images/lp/AdvanceTechStack.svg"}
                  title="Advanced tech-stack"
                  description="Clean topology, 1:1 precision, spot-on detailing, lightweight models, and cross-platform compatibility."
                />
              </div>
              <div className="flex lap_gen:w-1/2 gap-8 tab:gap-12 lap_gen:gap-6 xxl:gap-12 flex-col tab:flex-row justify-between">
                <Feature
                  icon={"/images/lp/PrecisionInDetail.svg"}
                  title="Precision in detail"
                  description="Includes texture touch-ups, mesh retopology, optimized geometry, and high-resolution scans."
                />
                <Feature
                  icon={"/images/lp/SeamlessCompatibility.svg"}
                  title="Seamless Compatibility"
                  description="Compatibility with diverse file formats, including glb, gltf, usdz, obj, and fbx, ensuring compatibility across platforms and workflows."
                />
              </div>

            </div>
          </div>

          <div className="tab:hidden block">
              <PrimaryButton
                link="https://calendly.com/archna_luthra"
                content="Know more"
                rel="noopener noreferrer"
                target="_blank"
                />
          </div>
        </div>
      </ServicesSection>

      {/* Testimonials section - */}
      <ServicesSection blockYPadding>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, delay: 0.5, amount: 0.25 }}
          ref={testimonialsRef}
          className="flex flex-col gap-12 lap:gap-16 md:flex-row md:gap-[27px] bg-primaryDarkBg"
        >
          <div className="flex flex-row justify-between items-center md:items-start md:flex-col gap-4 w-full md:w-[30%]">
            <div className="flex flex-col gap-3 tab:gap-4">
              <h3 className="text-primaryWhite font-[500] leading-7 tab:leading-[32px] lg:leading-[40px] text-[26px] tab:text-[22px] lg:text-[32px] text-left">
                What do our clients have to say about us?
              </h3>
              <div className="w-[85%]">
                <SubSectionSubHeading text="Real Stories from Satisfied Customers Who Have Tried Our Services" />
              </div>
            </div>
            {viewportWidth > 600 ? (
              <div className="md:mt-12 flex gap-3 md:gap-8">
                <button
                  onClick={() =>
                    prevButtonRef.current ? prevButtonRef.current.click() : ""
                  }
                  className="w-9 md:w-10 h-9 md:h-10 flex justify-center items-center rounded-full"
                  style={{
                    background:
                      index === 0
                        ? "#5A5A5A"
                        : "linear-gradient(90deg,#015EF1,#489BE1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ transform: "rotateZ(180deg)" }}
                  >
                    <path
                      d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    nextButtonRef.current ? nextButtonRef.current.click() : ""
                  }
                  className="w-9 md:w-10 h-9 md:h-10 flex justify-center items-center rounded-full"
                  style={{
                    background:
                      index === testimonials.length - 2
                        ? "#5A5A5A"
                        : "linear-gradient(90deg,#015EF1,#489BE1)",
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
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" fill="none" className="w-5 h-5 stroke-white">
                  <path d="M8.47 1.53009C8.33752 1.38792 8.2654 1.19987 8.26882 1.00557C8.27225 0.811267 8.35097 0.625882 8.48838 0.488469C8.62579 0.351056 8.81118 0.272344 9.00548 0.268916C9.19978 0.265487 9.38783 0.33761 9.53 0.47009L13.53 4.47009C13.6705 4.61072 13.7493 4.80134 13.7493 5.00009C13.7493 5.19884 13.6705 5.38946 13.53 5.53009L9.53 9.53009C9.46134 9.60378 9.37854 9.66288 9.28654 9.70387C9.19454 9.74486 9.09523 9.7669 8.99452 9.76868C8.89382 9.77046 8.79379 9.75193 8.7004 9.71421C8.60701 9.67649 8.52218 9.62035 8.45096 9.54913C8.37974 9.47791 8.3236 9.39308 8.28588 9.29969C8.24816 9.2063 8.22963 9.10627 8.23141 9.00557C8.23318 8.90487 8.25523 8.80555 8.29622 8.71355C8.33721 8.62155 8.39631 8.53875 8.47 8.47009L11.19 5.75009H1.5C1.30109 5.75009 1.11032 5.67107 0.96967 5.53042C0.829018 5.38977 0.75 5.199 0.75 5.00009C0.75 4.80118 0.829018 4.61041 0.96967 4.46976C1.11032 4.32911 1.30109 4.25009 1.5 4.25009H11.19L8.47 1.53009Z" fill="white"/>
                </svg> */}
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          {viewportWidth < 600 ? (
            <div className="w-full md:w-[70%]">
              <MobileSplide data={testimonials}>
                {getTestimonials()}
              </MobileSplide>
            </div>
          ) : (
            <div className="w-full md:w-[70%]">
              <SeparateButtonsSplide
                drag={true}
                perMove={1}
                perPage={viewportWidth > 600 ? 2 : 1}
                index={index}
                splideElRef={_splideElRef}
                length={testimonials.length}
                prevRef={prevButtonRef}
                nextRef={nextButtonRef}
              >
                {getTestimonials()}
              </SeparateButtonsSplide>
            </div>
          )}
        </motion.div>
      </ServicesSection>

      <ServicesSection blockYPadding>
        <PrimaryCTASection2
          headings={["Schedule a Free Consultation Call Today"]}
          subheading="Experience How Our Solutions Can Propel Your Business Forward with a Consultation."
          secondaryButtonText="Request a custom quote"
          primaryButtonText="Schedule now"
          subPoints={CTAsubPoints}
          handleSecondaryButtonClick={() => navigate("/")}
          handlePrimaryButtonClick={() => {
            // window
            //   ? (window.location.href = "https://calendly.com/archna_luthra")
            //   : "";
            '/contact-us'
          }}
        />
      </ServicesSection>

      <ServicesSection blockYPadding>
        <div className="lg:grid lg:grid-cols-[40%_1fr] gap-[30px]">
          <div className="flex lg:hidden">
            <ServicesHeading
              element="h4"
              headings={["Frequently asked questions"]}
            />
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <ServicesHeading
              element="h3"
              headings={["Frequently asked questions"]}
            />
          </div>
          <Faqs1 faqs={faqs} />
        </div>
      </ServicesSection>

      <LPFooter footerBlogsCallRef={footerBlogsCallRef} />
    </main>
  );
}

export const meta = () => [
  {title: "3D assets for business solutions and better visual appeal"},
  {name:"description", content:"Use Low & High Poly 3D Models for end to end business applications and growth"},
  {property:"og:title", content: "3D Modeling Services for Realistic Product Visualizations"},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"og:description", content:"Step up your brand visibility to the next level with Ikarus 3D modeling services. Engage customers and unlock new possibilities for your e-commerce platform."},
  {property:"og:type", content: "website"},
  {property:"og:url", content: "https://ikarus3d.com/lp"},
  {property:"og:site_name", contnet: "Ikarus 3D: 3D Modeling Services for Realistic Product Visualizations"},
  {property:"og:locale", content: "en_US"},
  {property:"og:determiner", content: "a"},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"twitter:title", content: "3D Modeling Services for Realistic Product Visualizations"},
  {property:"twitter:description", content:"Step up your brand visibility to the next level with Ikarus 3D modeling services. Engage customers and unlock new possibilities for your e-commerce platform."},
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "Ikarus3D",
      "alternateName": "Ikarus3D",
      "url": "https://ikarus3d.com/lp",
      "logo": "https://d3cv7syas17klq.cloudfront.net/miscellaneous/Header_Logo_D.webp",
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+1 (516) 689-8556",
        "contactType": "sales",
        "areaServed": ["US","GB","CA","AR","AU","AT","BS","BH","BE","BA","BR","IO","VG","CY","CZ","DK","EE","FO","FI","FR","DE","GR","HU","IS","IN","IE","IT","JP","LB","LI","LT","LU","MY","MX","NL","NZ","NO","PL","PT","SM","SA","SG","SI","SK","ZA","KR","ES","SE","CH","AE","UM","150"],
        "availableLanguage": "en"
      },{
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "technical support"
      }],
      "sameAs": [
        "https://www.facebook.com/ikarus3d",
        "https://twitter.com/ikarus_3d?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        "https://www.instagram.com/ikarus_3d/",
        "https://www.youtube.com/channel/UCspV_0wT6sPc-NL8wLibQFQ",
        "https://www.linkedin.com/company/ikarus3d/",
        "https://www.pinterest.com/ikarus_3d/?invite_code=289e55b5c77647d8a50a0f77217907fa&sender=1134836943511782619"
      ]    
    }
  }
]