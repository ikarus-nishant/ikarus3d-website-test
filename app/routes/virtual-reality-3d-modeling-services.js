import React, { useState, useRef, useEffect, useCallback } from "react";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import Faq1 from "../components/Faqs1";
import BlogNewSection from "../components/BlogNewSection";
import ServicesFooter from "../components/ServicesFooter";
import Vr_dive_into_virtual_realms from "../temp_images/VR_dive_into_virtual_realms.svg";
import Vr_unleash_your_imagine from "../temp_images/VR_unleash_your_imagination.svg";
import VR_transport_to_anywhere from "../temp_images/VR_transport_to_anywhere.svg";
import ServiceCarousel from "../components/ServiceCarousel";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServicesAutoplayCarousel from "../components/ServicesAutoplayCarousel";
import Process from "../components/ProcessComponent";
import ServicesHeading from "../components/ServicesHeading";
import DiscoverServices from "../components/DiscoverServicesComponent";
import { debounce } from "../utils/debounce";
import PrimaryCTASection from "../components/PrimaryCTASection";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import FadedCarousel from "../components/FadedCarousel";
import ServicesSection from "../components/ServicesSection";
import SecondaryCTASection from "../components/SecondaryCTASection";
import { useNavigate, useLocation } from "@remix-run/react";
import ModalHeroSection from "../components/ModalHeroSection";
import {siteMapTags as nextRoute } from "./3d-scan-cleanup-services";
import VrTransformativePower, {
  VrVisionToLife,
} from "../components/VrTransformativePower";
import HeroSection from "../components/HeroSection";
import OnDemandModelHeroSection from "../components/OnDemandModelHomepage";
import { useInView } from "react-intersection-observer";
import useViewportWidth from "../hooks/useViewportWidth";

const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/virtual-reality-3d-modeling-services"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

const serviceFooter = {
  ctaHeading: "Here’s a look at what we’ve built so far",
  ctaText: "Check our portfolio",
  ctaLink: "/portfolio",
  formHeading: ["Lower your costs and improve your website conversions"],
  formText:
    "We’re here to deliver custom 3D models that fit your brand vision.",
  buttonText: "Let's have a chat",
};

const faqData = [
  {
    question: "For which industries can you create VR 3D models?",
    answer:
      "Ikarus 3D specializes in creating VR 3D models for a diverse range of industries. We have extensive experience serving sectors such as real estate, architecture, interior design, gaming, entertainment, retail, manufacturing, healthcare, education, and more. Our talented team of designers and developers can tailor VR 3D models to meet the unique needs and requirements of each industry.",
  },
  {
    question: "How are textures and materials handled in VR 3D modeling?",
    answer:
      "Textures and materials play a crucial role in enhancing the visual quality of models. Textures, such as color maps, normal maps, and specular maps, are applied to the 3D models to create realistic surfaces. Materials define how light interacts with the surfaces, including reflections, transparency, and other properties. Our modeling professionals utilize texture mapping techniques and material shaders to achieve the desired visual effects as per the project.",
  },

  {
    question: "What are file formats of the 3D models?",
    answer:
      "Head over to our contact us page to get a free sample or just give a brief of your project and we will get back to you. Some of the commonly used file formats we support include glb, gltf, usdz, obj, fbz, stl etc.",
  },
  {
    question: "What is the minimum poly-budget for the models?",
    answer:
      "The minimum poly-budget for our models varies depending on the complexity and purpose of the project. Usually the polycount is between 5,000 and 1,00,000, but if required, the polycount can exceed this limit. The minimum poly-budget for our models varies depending on the complexity and purpose of the project.",
  },
  {
    question: "What make Ikarus 3D stand out in 3D modelling industry?",
    answer:
      "We are able to deliver projects under stringent timelines and offer 24x7 support. Moreover our in house QA tool makes sure that all the models are accurate.  By partnering with Ikarus 3D, you gain access to our expertise, innovative capabilities, and a collaborative partnership that ensures your project's success.",
  },
];

const useCasesData = [
  {
    heading: "Virtual Showrooms",
    subHeading:
      "Experience product showcases like never before. VR 3D Models allow customers to interact with products in a realistic environment, exploring features and design aspects in extensive detail.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Webp/Virtual Showrooms.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual Showrooms/Virtual_Showrooms_1_hgwnqh_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual Showrooms/Virtual_Showrooms_1_hgwnqh_c_scale,w_734.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual Showrooms/Virtual_Showrooms_1_hgwnqh_c_scale,w_1083.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual Showrooms/Virtual_Showrooms_1_hgwnqh_c_scale,w_1452.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual Showrooms/Virtual_Showrooms_1_hgwnqh_c_scale,w_1765.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual Showrooms/Virtual_Showrooms_1_hgwnqh_c_scale,w_1920.webp`
      ),
    ],
    alt: "Virtual Showrooms",
  },
  {
    heading: "Real Estate and Property Tours",
    subHeading:
      "Virtual models bring properties to life, allowing buyers to take virtual tours of real estate. This gives them a feel of space, layout, and design, without any physical visits.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Webp/Real Estate and Property Tours.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_586.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_793.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_950.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1133.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1303.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1461.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1615.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1764.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1909.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Real estate and Property tours/Real_Estate_and_Property_Tours_1_siivfr_c_scale,w_1920.webp`
      ),
    ],
    alt: "Real Estate and Property Tours",
  },
  {
    heading: "Interactive Training and Education",
    subHeading:
      "Educational institutes and companies can utilize VR 3D Models to create interactive and immersive learning environments, from medical simulations to historical recreations.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Webp/Interactive Training and Education.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_704.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_1019.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_1290.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_1742.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_1868.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Interactive Training and education/Interactive_Training_and_Education_1_-2_rtt6hu_c_scale,w_1920.webp`
      ),
    ],
    alt: "Interactive Training and Education",
  },
  {
    heading: "Gaming and Entertainment",
    subHeading:
      "You can create immersive, detailed gaming worlds. Players can interact with genuine environments and characters, elevating the realism of gaming experiences to new levels.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Webp/Gaming and Entertainment.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_634.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_870.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_1212.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_1433.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_1571.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_1876.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_1906.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Gaming and Entertainment/Gaming_and_Entertainment_webp_tjyzkp_c_scale,w_1920.webp`
      ),
    ],
    alt: " Gaming and Entertainment",
  },
  {
    heading: "Product Prototyping and Design",
    subHeading:
      "Enable designers and engineers to create and interact with product prototypes in a virtual space. This facilitates collaborative design and rapid prototyping without limitations of physical models.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Webp/Product Prototyping and Design.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_561.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_807.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_1064.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_1300.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_1499.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_1711.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_1854.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Product prototyping and design/Product_Prototyping_and_Design_kigdk8_c_scale,w_1920.webp`
      ),
    ],
    alt: "Product Prototyping and Design",
  },
  {
    heading: "Virtual Events and Conferences",
    subHeading:
      "Organize virtual events and conferences. Attendees can navigate through a virtual venue, interact with exhibits, engage in networking, and experience keynote presentations in an immersive environment.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Webp/Virtual Events and Conferences.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual events and conferences/Virtual_Events_and_Conferences_1_b7iol9_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual events and conferences/Virtual_Events_and_Conferences_1_b7iol9_c_scale,w_669.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold  8- Use cases/Breakpoint/Virtual events and conferences/Virtual_Events_and_Conferences_1_b7iol9_c_scale,w_736.webp`
      ),
    ],
    alt: "Virtual Events and Conferences",
  },
];

const secondComponentData = [
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/Webp/Lightweight-Models.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_581.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_898.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_1149.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_1363.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_1569.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Lightweight models/Lightweight-Models_joucdi_c_scale,w_1719.webp`
      ),
    ],
    title: "Lightweight and efficient",
    description:
      "Enhance your 3D scans with Ikarus 3D's expert cleansing process, which ensures high-quality, lightweight models.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/Webp/Interactivity.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Interactivity/Interactivity_1_z1bh3q_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Interactivity/Interactivity_1_z1bh3q_c_scale,w_725.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Interactivity/Interactivity_1_z1bh3q_c_scale,w_1091.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Interactivity/Interactivity_1_z1bh3q_c_scale,w_1424.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Interactivity/Interactivity_1_z1bh3q_c_scale,w_1752.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Interactivity/Interactivity_1_z1bh3q_c_scale,w_1920.webp`
      ),
    ],
    title: "Interactivity",
    description:
      "Manipulate and explore your surroundings for an absorbing, one-of-a-kind VR adventure for your curious customers.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/Webp/Realistic-Physics.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Realistic Physics/Realistic-Physics_1_gdptwy_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Realistic Physics/Realistic-Physics_1_gdptwy_c_scale,w_661.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Realistic Physics/Realistic-Physics_1_gdptwy_c_scale,w_997.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Realistic Physics/Realistic-Physics_1_gdptwy_c_scale,w_1345.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Realistic Physics/Realistic-Physics_1_gdptwy_c_scale,w_1796.webp`
      ),
    ],
    title: "Realistic Physics",
    description:
      "Engage with a virtual world mirroring reality through our 3D models, simulating true-to-life physics for authenticity.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/Webp/Animated and Rigged.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Animated and Rigged/Animated_and_Rigged_1_rsirwg_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Animated and Rigged/Animated_and_Rigged_1_rsirwg_c_scale,w_546.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Animated and Rigged/Animated_and_Rigged_1_rsirwg_c_scale,w_882.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Animated and Rigged/Animated_and_Rigged_1_rsirwg_c_scale,w_1072.webp`
      ),
    ],
    title: "Animated and Rigged",
    description:
      "Embark on a lively odyssey with our animated 3D models, blending artistic ingenuity with cutting-edge techniques.",
  },

  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/Webp/Immersive-details.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Immersive details/Immersive-details_1_bmcakk_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Immersive details/Immersive-details_1_bmcakk_c_scale,w_686.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Immersive details/Immersive-details_1_bmcakk_c_scale,w_1045.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Immersive details/Immersive-details_1_bmcakk_c_scale,w_1379.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Immersive details/Immersive-details_1_bmcakk_c_scale,w_1645.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Immersive details/Immersive-details_1_bmcakk_c_scale,w_1920.webp`
      ),
    ],
    title: "Immersive details",
    description:
      "From intricate textures to lifelike objects, ensure that VR experiences are rich in immersive details.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/Webp/Cross-Platform Compatibility.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Cross Platform Compatibility/Cross-Platform_Compatibility_1_uoqjtp_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Cross Platform Compatibility/Cross-Platform_Compatibility_1_uoqjtp_c_scale,w_573.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Cross Platform Compatibility/Cross-Platform_Compatibility_1_uoqjtp_c_scale,w_900.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Cross Platform Compatibility/Cross-Platform_Compatibility_1_uoqjtp_c_scale,w_1222.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -2/breakpoint/Cross Platform Compatibility/Cross-Platform_Compatibility_1_uoqjtp_c_scale,w_1492.webp`
      ),
    ],
    title: "Cross-platform compatibility",
    description:
      "Get VR 3D models designed to be compatible with a wide range of devices, including PC, mobile devices and more.",
  },
];

const VrTransformativeVisionToLife = {
  heading: [
    "Bring Your Vision to Life with Our Virtual Reality",
    "Modeling Expertise",
  ],
  video_src: "https://youtu.be/7rlApsWiJkI",
  subtext:
    "Beyond Imagination: Our VR creations envelop customers in groundbreaking immersive experiences.",
  keypoints: [
    {
      keypoint_heading: "VR gaming experiences",
    },
    {
      keypoint_heading: "Virtual field trips",
    },
    {
      keypoint_heading: "Virtual property tours",
    },
    {
      keypoint_heading: "Virtual Therapy",
    },
    {
      keypoint_heading: "Virtual product showcases",
    },
    {
      keypoint_heading: "Virtual exploration",
    },
  ],
};

const VrTransformativePowerContent = {
  heading: ["Experience the Transformative Power of VR"],
  video_src: "https://youtu.be/lGjMf5QECnU",
  subtext:
    "Immerse yourself in a world of limitless possibilities. Witness the transformative power of virtual reality through our captivating video showcase.",
  keypoints: [
    {
      keypoint_heading: "Dive into Virtual Realms",
      keypoint_desc:
        "Witness breathtaking landscapes, thrilling adventures, and fantastical worlds come to life through our captivating video showcase.",
      icon: Vr_dive_into_virtual_realms,
    },
    {
      keypoint_heading: "Unleash Your Imagination",
      keypoint_desc:
        "Experience the power of virtual reality firsthand as you interact with virtual objects, explore simulated environments, and unlock your creative potential.",
      icon: Vr_unleash_your_imagine,
    },
    {
      keypoint_heading: "Transport to Anywhere",
      keypoint_desc:
        "From the comfort of your own space, embark on journeys to distant lands, historical eras, or fictional realms with our VR solution's lifelike simulations.",
      icon: VR_transport_to_anywhere,
    },
  ],
};

const processData = [
  {
    name: "Resource Gathering",
    desc: "We meticulously collect assets, references, and textures, tailoring them to align with your project’s specifications",
  },

  {
    name: "3D Modeling",
    desc: "Our skilled craftsmen sculpt high-fidelity VR 3D models, ensuring accuracy, detail along with stunning precision",
  },

  {
    name: "Texturing",
    desc: "We  integrate fluid textures and features to impart realism and make the VR experience fully vivid",
  },

  {
    name: "Testing & Quality Assurance",
    desc: "Our team ensures flawless performance, compatibility, and interactivity across platforms, fine-tuning each detail",
  },

  {
    name: "Client Review & Feedback",
    desc: "We share the VR models for your review and make the desired revisions from your side",
  },

  {
    name: "Delivery & Post-Sales Support",
    desc: "We deliver your customized VR 3D models,ready for deployment across multiple platforms",
  },
];

const ArVrReady3dModels = () => {
  const { ref: blogsCallRef, inView: callBlogs } = useInView({
    triggerOnce: true,
  });
  const { ref: footerBlogsCallRef, inView: callBlogsFooter } = useInView({
    triggerOnce: true,
  });

  const [openPortal, setOpenPortal] = useState(false);

  const freeSampleFormHeading = "Get a free sample";

  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [slideNumber, setSlideNumber] = useState();

  const whyUsData = [
    {
      title: "Advanced technology",
      description:
        "With a deep understanding of the latest trends and advancements in the VR industry, we stay ahead of the curve, ensuring that our clients receive the best quality.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/Webp/Advanced-technology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_842.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_1086.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_1326.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_1619.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_1866.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Advanced Technology/Advanced-technology_1_uyelsa_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Expert team",
      description:
        "Our highly skilled team of 3D artists uses our cutting-edge tools and software, enabling us to deliver top-notch quality and innovative solutions.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/Webp/Expert-team.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_586.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_934.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_1191.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_1466.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_1791.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Expert team/Expert-team_1_ztbqte_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Precise details",
      description:
        "We pay meticulous attention to precision and accuracy, ensuring that every aspect of our VR 3D models is finely crafted, from intricate textures to lifelike lighting.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/Webp/Precise-details.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Precise Details/Precise-details_1_w8of7o_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Precise Details/Precise-details_1_w8of7o_c_scale,w_619.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Precise Details/Precise-details_1_w8of7o_c_scale,w_923.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Precise Details/Precise-details_1_w8of7o_c_scale,w_1151.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Precise Details/Precise-details_1_w8of7o_c_scale,w_1536.webp`
        ),
      ],
    },
    {
      title: "Proprietary QA tool",
      description:
        "To ensure the highest level of quality in our VR 3D models, we have developed a proprietary Quality Assurance tool, guaranteeing highest standards of excellence.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/Webp/Proprietary-QA-tool.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Proprietary QA tool/Proprietary-QA-tool_1_ek4o9s_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Proprietary QA tool/Proprietary-QA-tool_1_ek4o9s_c_scale,w_708.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Proprietary QA tool/Proprietary-QA-tool_1_ek4o9s_c_scale,w_1089.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Proprietary QA tool/Proprietary-QA-tool_1_ek4o9s_c_scale,w_1446.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Proprietary QA tool/Proprietary-QA-tool_1_ek4o9s_c_scale,w_1788.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Proprietary QA tool/Proprietary-QA-tool_1_ek4o9s_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Customized solutions",
      description:
        "Our team partners with clients to precisely understand their vision. We then follow a strategic approach to create custom 3D models that align with their objectives.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/Webp/Customised-solutions.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_656.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_932.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_1176.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_1448.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_1717.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Customised Solutions/Customised-solutions_1_ml10bb_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Quick turnaround ",
      description:
        "We curate a streamlined workflow to deliver high-quality VR-ready 3D models with quick turnaround times, ensuring faster time-to-market for clients.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/Webp/Copy of Quick-turnaround.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Quick Turnaround/Copy_of_Quick-turnaround_1_jclu29_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Quick Turnaround/Copy_of_Quick-turnaround_1_jclu29_c_scale,w_588.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Quick Turnaround/Copy_of_Quick-turnaround_1_jclu29_c_scale,w_814.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VR Ready/Fold -4 Why choose us/breakpoint/Quick Turnaround/Copy_of_Quick-turnaround_1_jclu29_c_scale,w_969.webp`
        ),
      ],
    },
  ];

  const discoverServicesData = [
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/AR-Services.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_471.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_626.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_816.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_916.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1016.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1119.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1237.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1327.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1561.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1634.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1783.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1860.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/AR-Services_tv77lj 2/AR-Services_tv77lj_c_scale,w_1920.webp`
        ),
      ],
      alt: "3D Augmented Reality Lamp Placement",
      title: "Augmented Reality 3D Model Services",
      navigation: "/augmented-reality-3d-modeling-services",
    },
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Baby-Yoda--Scan.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_565.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_914.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_966.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1118.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1311.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1475.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1652.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1857.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Baby-Yoda--Scan_jneedt/Baby-Yoda--Scan_jneedt_c_scale,w_1920.webp`
        ),
      ],
      alt: "Baby Yoda 3D Scanned Model",
      title: "3D Scan Cleanup Services",
      navigation: "/3d-scan-cleanup-services",
    },
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/metaverse.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_460.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_615.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_754.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_880.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1003.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1092.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1144.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1237.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1332.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1432.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1521.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1692.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1786.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/metaverse_cztymp 2/metaverse_cztymp_c_scale,w_1920.webp`
        ),
      ],
      alt: "Man Metaverse 3D Avatar",
      title: "Metaverse Ready 3D Avatar Services",
      navigation: "/metaverse-3d-avatars",
    },
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/VTO-Ready.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_844.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_1298.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_1730.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VTO-Ready_fhwuuq/VTO-Ready_fhwuuq_c_scale,w_1920.webp`
        ),
      ],
      alt: "Timepiece Virtual Try-On 3D Asset",
      title: "Virtual Try On Services",
      navigation: "/virtual-try-on-solutions",
    },
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Virtual-Spaces-3D-Room.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_570.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_855.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1067.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1173.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1332.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1519.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1716.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1909.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/Virtual-Spaces-3D-Room_fybbmq/Virtual-Spaces-3D-Room_fybbmq_c_scale,w_1920.webp`
        ),
      ],
      alt: "Interior Virtual Space 3D Room",
      title: "3D Virtual Spaces Services",
      navigation: "/3d-virtual-spaces",
    },
  ];

  const [ viewportWidth ] = useViewportWidth(1440);
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

  useEffect(() => {    

    const query = location.search.slice(1).split("=");

    if (query[0] === "slide") {
      setSlideNumber(parseInt(query[1]));
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      onMouseMoveCapture={() => handleLoadingModelOnMouseMove()}
      onTouchStartCapture={()=> handleLoadingModelOnMouseMove()}
    >
      {/* ist div */}
      <HeroSection
        headings={["VR 3D Modeling Services"]}
        content="Elevate Your VR Experience with Top-notch 3D Modeling Services."
        buttonText="Get a free sample"
        formHeading={freeSampleFormHeading}
        zIndex={10}
        parentHeading="virtual-reality-3d-modeling-services"
      >
        <div className="">
          {viewportWidth > 1080 ? (
            <div className="flex lap:mr-4 tab_old:w-1/2 lap:w-full w-fit h-[400px] -translate-y-[50px]">
              <OnDemandModelHeroSection
                loadModelOnMouseMove={loadModelOnMouseMove}
                src={`${env.CDN_BASE_URL}/3D+Models/VR/3d+Room.glb`}
                modelKey="VR"
                cameraTarget="auto 1m auto"
                poster={`${env.CDN_BASE_URL}/Responsive+Images/VR+Ready/Fold+1/3D+Room/3d+Room.webp`}
                alt="3D Room"
                cameraOrbit="30deg auto 80%"
                shadowIntensity="0"
              />
            </div>
          ) : viewportWidth > 960 ? (
            <div className="flex lap:hidden relative items-center w-full h-[400px]">
              <OnDemandModelHeroSection
                loadModelOnMouseMove={loadModelOnMouseMove}
                disableZoom={true}
                cameraTarget="auto 1m auto"
                cameraOrbit="30deg auto 90%"
                cameraControls
                touchActions="pan-y pinch-zoom"
                src={`${env.CDN_BASE_URL}/3D+Models/VR/3d+Room.glb`}
                poster={`${env.CDN_BASE_URL}/Responsive+Images/VR+Ready/Fold+1/3D+Room/3d+Room.webp`}
                shadowIntensity="0"
                interactionPrompt="auto"
                alt="3D Room"
              />
            </div>
          ) : viewportWidth > 600 ? (
            <div className="flex lap:hidden relative items-center w-full h-[400px]">
              <OnDemandModelHeroSection
                loadModelOnMouseMove={loadModelOnMouseMove}
                disableZoom={true}
                cameraTarget="auto 1m auto"
                cameraOrbit="30deg auto 70%"
                cameraControls
                touchActions="pan-y pinch-zoom"
                src={`${env.CDN_BASE_URL}/3D+Models/VR/3d+Room.glb`}
                poster={`${env.CDN_BASE_URL}/Responsive+Images/VR+Ready/Fold+1/3D+Room/3d+Room.webp`}
                shadowIntensity="0"
                interactionPrompt="auto"
                alt="3D Room"
              />              
            </div>
          ) : (
            <div className="flex lap:hidden relative items-center w-full h-[270px]">
              <OnDemandModelHeroSection
                loadModelOnMouseMove={loadModelOnMouseMove}
                disableZoom={true}
                cameraTarget="auto 1m auto"
                cameraOrbit="30deg auto 70%"
                cameraControls
                touchActions="pan-y pinch-zoom"
                src={`${env.CDN_BASE_URL}/3D+Models/VR/3d+Room.glb`}
                poster={`${env.CDN_BASE_URL}/Responsive+Images/VR+Ready/Fold+1/3D+Room/3d+Room.webp`}
                shadowIntensity="0"
                interactionPrompt="auto"
                alt="3D Room"
              />              
            </div>
          )}
        </div>
      </HeroSection>
      {/* {showModal && (
        <ModalHeroSection
          setShowModal={setShowModal}
          acceptedFiles={["png", "jpg", "jpeg"]} //TODO: accept these from props
        />
      )} */}

      {/* <HeroSection
        headings={["VR 3D Modeling Services"]}
        content="Elevate Your VR Experience with Top-notch 3D Modeling Services."
        buttonText="Get a free VR model"
      >
        <div className="w-screen h-screen">
          <Portals openPortal={openPortal} setOpenPortal={setOpenPortal} />
        </div>
      </HeroSection> */}

      {/* <div className="dark:bg-tertiaryBackground py-8 tab:py-16 desk:py-20 px-4 mob:px-10 tab:px-24 lap:px-32 xl:px-[10vw] xxl:px-[18vw]"></div> */}

      {/* {Second 2nd Section} */}
      <ServiceCarousel
        heading={["Explore Engaging VR Experiences with Seamless Designs"]}
        subheading="Transform your brand with captivating VR 3D models for engaging & visually stunning experiences."
        items={secondComponentData}
      />

      {/* {Third 3rd Section} */}
      <ServicesSection>
        <VrVisionToLife
          VrTransformativeVisionToLife={VrTransformativeVisionToLife}
        />
      </ServicesSection>

      {/* {Why Choose Us section} */}
      <ServicesAutoplayCarousel
        items={whyUsData}
        heading={["Why Choose Us?"]}
        subheading="Our Expertise Sets Us Apart as Professional Model Creators."
        buttonText="Know more"
        handleButtonClick={() => navigate("/why-us")}
      />

      {/* {Process Section} */}
      {/* <ServicesSection> */}
      <Process
        heading={
          "Immerse & Engage: Reinvent Your Projects with Our VR 3D Models"
        }
        subHeading={
          "Step into a world of limitless possibilities with our VR-3D models for an unparalleled engagement."
        }
        howWeWork={processData}
      />
      {/* </ServicesSection> */}

      {/* {Consultation Call Section} */}
      <PrimaryCTASection
        headings={["Schedule a Free Consultation Call Today"]}
        subheading="Experience How Our Solutions Can Propel Your Business Forward
                with a Consultation."
        handleSecondaryButtonClick={""}
        secondaryButtonText="Request a custom quote"
        handlePrimaryButtonClick={""}
        primaryButtonText="Schedule Now"
      />

      {/* {7th Seventh Section} */}
      <ServicesSection>
        <VrTransformativePower
          VrTransformativePowerContent={VrTransformativePowerContent}
        />
      </ServicesSection>

      {/* {Use Cases Section} */}
      <ServicesSection blockXPadding={true}>
        <div className="flex flex-col" ref={blogsCallRef}>
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 justify-between w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={[
                  "Use Cases: Breathe Life into Your Projects with VR 3D Models",
                ]}
                subheading="Unlock New Dimensions of Engagement: See How VR 3D Models are Changing the Game in Product Discovery"
              />
            </div>
            <div className="flex items-end">
              <ServicesPrimaryButton
                buttonText="Contact us"
                handleButtonClick={() => navigate("/contact-us")}
              />
            </div>
          </div>
          <div>
            <FadedCarousel
              slideNumber={slideNumber}
              carouselData={useCasesData}
            />
          </div>
        </div>
      </ServicesSection>

      <ServicesSection>
        <div className="lg:grid lg:grid-cols-[40%_1fr] gap-[30px]">
          <div className="flex lg:hidden">
            <ServicesHeading
              element="h4"
              headings={["Get Your Answers Here."]}
            />
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <ServicesHeading
              element="h4"
              headings={["Get Your", "Answers Here."]}
            />
          </div>
          <Faq1 faqs={faqData} />
        </div>
      </ServicesSection>

      {showModal && <ModalHeroSection formHeading={freeSampleFormHeading} setShowModal={setShowModal} />}
      <SecondaryCTASection
        headings={[
          "Crafting Boundless Virtual Realities: Immerse Yourself in Our VR Services",
        ]}
        subheading="Crafting Boundless Virtual Realities: Immerse Yourself in Our VR Services"
        primaryButtonText="Create Your VR Model"
        handlePrimaryButtonClick={() => setShowModal(true)}        
      >
        <video
          src={`${env.CDN_BASE_URL}/Videos/VR/VR2_1280x720.mp4`}
          className="w-full hidden lg:block xxl:hidden mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
        <video
          src={`${env.CDN_BASE_URL}/Videos/VR/VR2_720x480.mp4`}
          className="w-full lg:hidden block mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
        <video
          src={`${env.CDN_BASE_URL}/Videos/VR/VR2_1920x1080.mp4`}
          className="w-full xs:hidden xxl:block mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
      </SecondaryCTASection>
      {/* <div className="grid grid-cols-2 justify-items-center gap-[70px] bg-[#11141A] rounded-[10px] mx-16 md:mx-[86px] lg:mx-[112px] xl:mx-[138px] my-12 lg:my-[80px] p-[60px]">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3 tab:gap-4">
            <ServicesHeading
              headings={[
                "Crafting Boundless Virtual Realities: Immerse Yourself in Our VR Services",
              ]}
            />

            <h3 className="text-[16px] leading-[24px] xl:text-[18px] lg:font-light text-white">
              Explore Our Expertly Crafted Virtual Reality Experiences,
              Showcasing Unmatched Expertise
            </h3>
          </div>
          <div>
            <ServicesPrimaryButton buttonText={"Create Your VR Model"} />
          </div>
        </div>
        <video
          src={`${env.CDN_BASE_URL}/Videos/VR/VR2_1280x720.mp4`}
          className="w-full hidden lg:block xxl:hidden mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
        <video
          src={`${env.CDN_BASE_URL}/Videos/VR/VR2_720x480.mp4`}
          className="w-full lg:hidden block mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
        <video
          src={`${env.CDN_BASE_URL}/Videos/VR/VR2_1920x1080.mp4`}
          className="w-full xs:hidden xxl:block mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
      </div> */}

      <BlogNewSection
        heading={[
          "Unveil Our Immersive Digital Creations Blog: Expert Tips and Insights",
        ]}
        subheading="Stay Up to date on Trends and Best Practices in Virtual Reality Spatial Design"
        buttonText="Explore More Blogs"
        tag={["hash-vr-website", "3d-blog"]}
        handleButtonClick={""}
        callBlogs={callBlogs}
        callBlogsFooter={callBlogsFooter}
      />
      <DiscoverServices discoverServicesData={discoverServicesData} />

      <ServicesFooter {...serviceFooter} />
      <Footer footerBlogsCallRef={footerBlogsCallRef} />
    </div>
  );
};

export function links() {
  return [
    {
      rel: "canonical",
      href: `${env.SITE_URL}/virtual-reality-3d-modeling-services`,
    },
  ];
}

export function meta() {
  return [
    { title: "Tailored Virtual Reality 3D Modeling Services | Ikarus3D" },
    {
      name: "description",
      content:
        "Ikarus3D is an expert in offering top-notch VR 3D modeling services that provide immersive experiences for your customers, leading to enhanced brand productivity.",
    },
    {
      property: "og:title",
      content: "Tailored Virtual Reality 3D Modeling Services | Ikarus3D",
    },
    {
      property: "og:url",
      content: `${env.SITE_URL}/virtual-reality-3d-modeling-services`,
    },
    {
      property: "og:description",
      content:
        "Ikarus3D is an expert in offering top-notch VR 3D modeling services that provide immersive experiences for your customers, leading to enhanced brand productivity.",
    },
    {
      property: "og:image",
      content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`,
    },
    { property: "og:type", content: "website" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: "@ikarus_3d" },
    { property: "twitter:domain", content: "https://ikarus3d.com" },
    {
      property: "twitter:image",
      content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`,
    },
    {
      property: "twitter:title",
      content: "Tailored Virtual Reality 3D Modeling Services | Ikarus3D",
    },
    {
      property: "twitter:description",
      content:
        "Ikarus3D is an expert in offering top-notch VR 3D modeling services that provide immersive experiences for your customers, leading to enhanced brand productivity",
    },
  ];
}

export default ArVrReady3dModels;
