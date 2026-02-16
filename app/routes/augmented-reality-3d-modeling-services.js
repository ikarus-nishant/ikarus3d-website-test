import React, { useState, useEffect, useCallback, useRef } from "react";
import ServicesFooter from "../components/ServicesFooter";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import HeroSection from "../components/HeroSection";
import { ClientOnly } from "remix-utils";
import Model from "../components/Model";
import BlogNewSection from "../components/BlogNewSection";
import ServiceCarousel from "../components/ServiceCarousel";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServicesAutoplayCarousel from "../components/ServicesAutoplayCarousel";
import Process from "../components/ProcessComponent";
import ServicesHeading from "../components/ServicesHeading";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import DiscoverServices from "../components/DiscoverServicesComponent";
import VrTransformativePower from "../components/VrTransformativePower";
import Vr_dive_into_virtual_realms from "../temp_images/VR_dive_into_virtual_realms.svg";
import Vr_unleash_your_imagine from "../temp_images/VR_unleash_your_imagination.svg";
import VR_transport_to_anywhere from "../temp_images/VR_transport_to_anywhere.svg";
import { debounce } from "../utils/debounce";
import PrimaryCTASection from "../components/PrimaryCTASection";
import Faqs1 from "../components/Faqs1";
import ServicesSection from "../components/ServicesSection";
import SecondaryCTASection from "../components/SecondaryCTASection";
import FadedCarousel from "../components/FadedCarousel";
import ServicesModelSectionLabels from "../components/ServicesModelSectionLabels";
import { useNavigate, useLocation } from "@remix-run/react";
import ModalHeroSection from "../components/ModalHeroSection";
import OnDemandModelHeroSection from "../components/OnDemandModelHomepage";
import { useInView } from "react-intersection-observer";
import {siteMapTags as nextRoute } from "./virtual-reality-3d-modeling-services";
import useViewportWidth from "../hooks/useViewportWidth";
const serviceFooter = {
  ctaHeading: "Here’s a look at what we’ve built so far",
  ctaText: "Check our portfolio",
  ctaLink: "/portfolio",
  formHeading: ["Lower your costs and improve your website conversions"],
  formText:
    "We’re here to deliver custom 3D models that fit your brand vision.",
  buttonText: "Let's have a chat",
};

const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/augmented-reality-3d-modeling-services"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

const ArVrReady3dModels = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ref: footerBlogsCallRef, inView: callBlogsFooter } = useInView({
    triggerOnce: true,
  });

  const freeSampleFormHeading = "Get a free sample";

  const [ viewportWidth ] = useViewportWidth();
  const [slideNumber, setSlideNumber] = useState();

  const { ref: blogsCallRef, inView: callBlogs } = useInView({
    triggerOnce: true,
  });

  const VrTransformativePowerContent = {
    heading: "Your Gateway to High-Caliber Augmented Reality Assets",
    subtext:
      "From gaming to education, create detailed augmented reality assets with expert 3D modeling.",
    video_src: "https://youtu.be/AbhOTpRvc0g",
    keypoints: [
      {
        keypoint_heading: "Custom Solutions",
        keypoint_desc:
          "Specialized augmented reality solutions catering to your unique requirements lending engaging content for your customers.",
        icon: Vr_dive_into_virtual_realms,
      },
      {
        keypoint_heading: "Seamless Integration",
        keypoint_desc:
          "Augmented reality 3D models compatible with multiple devices to target customers at the right touchpoints.",
        icon: Vr_unleash_your_imagine,
      },
      {
        keypoint_heading: "Realistic experiences",
        keypoint_desc:
          "Experiences that blur the lines between digital and real for your customers and get them excited about your brand.",
        icon: VR_transport_to_anywhere,
      },
    ],
  };

  const discoverServicesData = [
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/VR-Service.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_414.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_567.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_684.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_835.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_916.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1013.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1101.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1193.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1274.webp`
        ),        
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1438.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1523.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1608.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1679.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1740.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1800.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1870.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 4- 3D services illustrations/resized/webP/Breakpoints/VR-Service_ybmyah/VR-Service_ybmyah_c_scale,w_1920.webp`
        ),
      ],
      alt: "Virtual Reality 3D Model",
      title: "VR 3D Modelling Services",
      navigation: "/virtual-reality-3d-modeling-services",
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

  const faqData = [
    {
      question: "How can AR 3D modeling future-proof my brand?",
      answer:
        "Embracing AR modeling makes you future-ready by showcasing your brand's innovation, offering customers immersive 3D experiences that set you apart from competitors and positioning your brand as forward-thinking and future-proof.",
    },
    {
      question: "Can AR 3D modeling enhance decision-making?",
      answer:
        "Absolutely! AR 3D models facilitate real-time data visualization, interactive demonstrations and problem-solving in a collaborative manner. By providing stakeholders with a tangible and interactive way to explore and evaluate options, it streamlines communication and supports informed decision-making processes.",
    },
    {
      question: "How can AR enrich mobile shopping?",
      answer:
        "By integrating AR into your mobile shopping experience, customers gain the ability to visualize and personalize products in their own environment. This empowers them to make informed purchase decisions, boosting confidence and satisfaction while reducing the need for physical returns.",
    },
    {
      question: "What is an augmented reality 3D model?",
      answer:
        "An AR-based 3D model is a virtual replica of a physical object that mimics its characteristics including shape and texture in a virtual setup. The primary USP of AR-based 3D models is a precise resemblance with the original object to provide a realistic experience to the users. ",
    },
    {
      question:
        "How can 3D modeling be used to provide enriched AR experiences?",
      answer:
        "3D modeling can add layers of depth and richness to traditional AR experiences and add a sense of realism in virtually simulating environments. For instance, detailed 3D models of human organs can help medical students understand their functioning and gain better insights before starting their medical practice.",
    },
  ];

  const useCasesData = [
    {
      heading: "Immersive Gaming Experiences",
      subHeading:
        "The combination of hyperrealistic gameplay with intense storyline results in a captivating experience that blurs the line between fantasy and reality, creating unforgettable gaming adventures.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Webp/Immersive Gaming Experiences.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Immersive_Gaming_Experiences/Immersive_Gaming_Experiences_nr0u50/Immersive_Gaming_Experiences_nr0u50_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Immersive_Gaming_Experiences/Immersive_Gaming_Experiences_nr0u50/Immersive_Gaming_Experiences_nr0u50_c_scale,w_772.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Immersive_Gaming_Experiences/Immersive_Gaming_Experiences_nr0u50/Immersive_Gaming_Experiences_nr0u50_c_scale,w_1137.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Immersive_Gaming_Experiences/Immersive_Gaming_Experiences_nr0u50/Immersive_Gaming_Experiences_nr0u50_c_scale,w_1505.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Immersive_Gaming_Experiences/Immersive_Gaming_Experiences_nr0u50/Immersive_Gaming_Experiences_nr0u50_c_scale,w_1746.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Immersive_Gaming_Experiences/Immersive_Gaming_Experiences_nr0u50/Immersive_Gaming_Experiences_nr0u50_c_scale,w_1920.webp`
        ),
      ],
      alt: "Immersive Gaming Experience with Unforgettable Adventures",
    },
    {
      heading: "Interactive Learning",
      subHeading:
        "Augmented reality models enable educational institutions and e-learning platforms to improve learning by providing interactive 3D instructional content such as 3D environments and simulations.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Webp/Interactive Learning.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_726.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_1061.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_1244.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_1475.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_1516.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_1848.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Interactive_Learning/Interactive_Learning_i271g1/Interactive_Learning_i271g1_c_scale,w_1920.webp`
        ),
      ],
      alt: "Interactive 3D instructional content with AR",
    },
    {
      heading: "Surgical Visualization",
      subHeading:
        "In healthcare, AR is significant in surgical procedures, allowing surgeons to visualize complex medical data, such as overlaying a patient's medical imaging onto their body during surgery.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Webp/Surgical Visualization.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Surgical_Visualization/Surgical_Visualization_hl87fk/Surgical_Visualization_hl87fk_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Surgical_Visualization/Surgical_Visualization_hl87fk/Surgical_Visualization_hl87fk_c_scale,w_763.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Surgical_Visualization/Surgical_Visualization_hl87fk/Surgical_Visualization_hl87fk_c_scale,w_1114.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Surgical_Visualization/Surgical_Visualization_hl87fk/Surgical_Visualization_hl87fk_c_scale,w_1416.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Surgical_Visualization/Surgical_Visualization_hl87fk/Surgical_Visualization_hl87fk_c_scale,w_1715.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Surgical_Visualization/Surgical_Visualization_hl87fk/Surgical_Visualization_hl87fk_c_scale,w_1920.webp`
        ),
      ],
      alt: "AR Surgical Visualization for ease complexity",
    },
    {
      heading: "Assembly and Maintenance",
      subHeading:
        "AR improves worker efficiency, minimizes errors, and ensures accurate and streamlined operations by superimposing instructions and virtual components onto tangible objects, resulting in maximized productivity.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Webp/Assembly and Maintenance.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_513.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_726.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_975.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_1191.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_1358.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_1432.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_1625.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_1810.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Assembly_and_Maintenance/Assembly_and_Maintenance_bc3tpk/Assembly_and_Maintenance_bc3tpk_c_scale,w_1920.webp`
        ),
      ],
      alt: "Streamline Work Efficiency with AR",
    },
    {
      heading: "Virtual Property Tours",
      subHeading:
        "Users can virtually walk through houses, scrutinize features, and acquire a realistic sense of space through interactive and immersive property experiences, enabling informed decision-making.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Webp/Virtual Property Tours.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_673.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_953.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_1285.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_1579.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_1835.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_1886.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Virtual_Property_Tours/Virtual_Property_Tours_iuuci1/Virtual_Property_Tours_iuuci1_c_scale,w_1920.webp`
        ),
      ],
      alt: "Virtual Property Tour with realistic Experience",
    },
    {
      heading: "Engaging Ad Campaigns",
      subHeading:
        "Consumers can use their mobile devices to actively interact with items or experiences by using virtual space technology, blurring the gap between the actual and digital worlds.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Webp/Engaging Ad Campaigns.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_566.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_826.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1053.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1095.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1289.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1407.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1595.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1733.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1894.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 8 - use cases/Breakpoint images/Engaging_Ad_Campaigns/Engaging_Ad_Campaigns_ungodu/Engaging_Ad_Campaigns_ungodu_c_scale,w_1920.webp`
        ),
      ],
      alt: "Engaging Ads Campaign using virtrual space technologies",
    },
  ];

  const secondComponentData = [
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Webp/Clean-Topology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_611.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_869.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1082.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1281.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1444.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1578.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1696.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1834.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Clean-Topology/Clean-Topology_y9mrpx/Clean-Topology_y9mrpx_c_scale,w_1920.webp`
        ),
      ],
      title: "Clean Topology",
      description:
        "We obtain visually smooth and realistic results by adjusting and optimizing the geometry of the models for your platform.",
    },

    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Webp/Support-for-Material-Variants.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_631.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_970.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_1255.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_1541.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_1843.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/support-for-Material-Variants/Support-for-Material-Variants_zrbagj/Support-for-Material-Variants_zrbagj_c_scale,w_1920.webp`
        ),
      ],
      title: "Support for Material Variants",
      description:
        "We enable you to exhibit your offers with several material variants, ranging from textures and colors to finishes and patterns.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Webp/Precision.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Precision/Precision_fo38zh/Precision_fo38zh_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Precision/Precision_fo38zh/Precision_fo38zh_c_scale,w_724.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Precision/Precision_fo38zh/Precision_fo38zh_c_scale,w_1140.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Precision/Precision_fo38zh/Precision_fo38zh_c_scale,w_1518.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Precision/Precision_fo38zh/Precision_fo38zh_c_scale,w_1920.webp`
        ),
      ],
      title: "1:1 Precision",
      description:
        "Our team takes pride in developing 3D models with 1:1 precision, ensuring that virtual objects match their real-world counterparts.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Webp/Spot-on-detailing.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Spot-on-detailing/Spot-on-detailing_a5hpsf/Spot-on-detailing_a5hpsf_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Spot-on-detailing/Spot-on-detailing_a5hpsf/Spot-on-detailing_a5hpsf_c_scale,w_767.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Spot-on-detailing/Spot-on-detailing_a5hpsf/Spot-on-detailing_a5hpsf_c_scale,w_1155.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Spot-on-detailing/Spot-on-detailing_a5hpsf/Spot-on-detailing_a5hpsf_c_scale,w_1521.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Spot-on-detailing/Spot-on-detailing_a5hpsf/Spot-on-detailing_a5hpsf_c_scale,w_1871.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Spot-on-detailing/Spot-on-detailing_a5hpsf/Spot-on-detailing_a5hpsf_c_scale,w_1920.webp`
        ),
      ],
      title: "Spot-on detailing",
      description:
        "We excel in creating 3D models with immersive details, allowing your customers to examine every intricate feature up close.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Webp/Lightweight-Models.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_581.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_898.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_1149.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_1363.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_1569.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Lightweight-Models/Lightweight-Models_jth53g/Lightweight-Models_jth53g_c_scale,w_1719.webp`
        ),
      ],
      title: "Lightweight Models",
      description:
        "Our 3D models undergo precise optimization to ensure they are lightweight without compromising on efficiency and quality.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Webp/Cross-Platform-Compatibility.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Cross-Platform-Compatibility/Cross-Platform-Compatibility_uuzzji/Cross-Platform-Compatibility_uuzzji_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Cross-Platform-Compatibility/Cross-Platform-Compatibility_uuzzji/Cross-Platform-Compatibility_uuzzji_c_scale,w_574.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Cross-Platform-Compatibility/Cross-Platform-Compatibility_uuzzji/Cross-Platform-Compatibility_uuzzji_c_scale,w_941.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Cross-Platform-Compatibility/Cross-Platform-Compatibility_uuzzji/Cross-Platform-Compatibility_uuzzji_c_scale,w_1195.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 2 - icons/Breakpoint images/Cross-Platform-Compatibility/Cross-Platform-Compatibility_uuzzji/Cross-Platform-Compatibility_uuzzji_c_scale,w_200.webp`
        ),
      ],
      title: "Cross-Platform Compatibility",
      description:
        "Our AR solutions are designed to be compatible with various platforms like smartphones, tablets and AR glasses.",
    },
  ];

  const modelsData = [
    {
      modelUrl: `${env.CDN_BASE_URL}/3D+Models/AR/appearal+Draco${
        viewportWidth < 600 ? "-mob" : ""
      }.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 3/Apparel/Mannequins.webp`
      ),
      label: "Apparels",
      setIsModelLoadedOnce: false,
      alt: "Men & Women Apparel - AR 3D Model",
    },
    {
      modelUrl: `${env.CDN_BASE_URL}/3D+Models/AR/Fabric+Iconic+Chair.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 3/Furniture/Fabric Iconic Chair 1.webp`
      ),
      label: "Furniture",
      setIsModelLoadedOnce: false,
      alt: "TIED RIBBONS AR 3D Chair",
    },
    {
      modelUrl: `${env.CDN_BASE_URL}/3D+Models/AR/Bag${
        viewportWidth < 600 ? "-mob" : ""
      }.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/AR+VR+Ready/AR/Bag+new+new.webp`
      ),
      label: "Accessories",
      setIsModelLoadedOnce: false,
      alt: "Women FENDI Kan leather bag - AR 3D Model",
    },
    {
      modelUrl: `${env.CDN_BASE_URL}/3D+Models/AR/JD+Cake+Deaco.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive+Images/AR+Ready/Fold+3/double layered cake with wine bottles/double layered cake with wine bottles/cake.webp`
      ),
      label: "Food Items",
      setIsModelLoadedOnce: false,
      alt: "Drunken Liquor Cake - AR 3D Model",
    },
  ];

  const setTheModelLoad = (index) => {
    modelsData[index].setIsModelLoadedOnce = true;
  };

  useEffect(() => {

    const query = location.search.slice(1).split("=");

    if (query[0] === "slide") {
      setSlideNumber(parseInt(query[1]));
    }
  }, []);

  const whyUsData = [
    {
      title: "Updated AR Technology",
      description:
        "Our team is always researching and implementing new breakthroughs to ensure that we use the most up-to-date AR technologies and techniques while developing our 3D models.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Webp/Updated-AR-Technology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_489.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_668.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_798.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_916.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1011.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1117.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1206.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1376.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1454.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1536.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1613.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1751.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1893.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Updated-AR-Technology/Updated-AR-Technology_ua4pmh/Updated-AR-Technology_ua4pmh_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Expertise in AR 3D Modeling",
      description:
        "Our professional artists mix artistic abilities with technological expertise to create 3D models that effectively engage and fascinate your audience.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Webp/Expertise-in-AR-3D-Modeling.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Expertise-in-AR-3D-Modeling/Expertise-in-AR-3D-Modeling_uoftmv/Expertise-in-AR-3D-Modeling_uoftmv_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Expertise-in-AR-3D-Modeling/Expertise-in-AR-3D-Modeling_uoftmv/Expertise-in-AR-3D-Modeling_uoftmv_c_scale,w_540.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Expertise-in-AR-3D-Modeling/Expertise-in-AR-3D-Modeling_uoftmv/Expertise-in-AR-3D-Modeling_uoftmv_c_scale,w_790.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Expertise-in-AR-3D-Modeling/Expertise-in-AR-3D-Modeling_uoftmv/Expertise-in-AR-3D-Modeling_uoftmv_c_scale,w_918.webp`
        ),
      ],
    },
    {
      title: "High-Quality AR Assets",
      description:
        "Our commitment to perfection means that every part of our AR 3D models is of the highest quality, from textures and lighting to animations and interactions.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Webp/High-Quality-AR-Assets.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/High-Quality-AR-Assets/High-Quality-AR-Assets_popv47/High-Quality-AR-Assets_popv47_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/High-Quality-AR-Assets/High-Quality-AR-Assets_popv47/High-Quality-AR-Assets_popv47_c_scale,w_835.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/High-Quality-AR-Assets/High-Quality-AR-Assets_popv47/High-Quality-AR-Assets_popv47_c_scale,w_1095.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/High-Quality-AR-Assets/High-Quality-AR-Assets_popv47/High-Quality-AR-Assets_popv47_c_scale,w_1362.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/High-Quality-AR-Assets/High-Quality-AR-Assets_popv47/High-Quality-AR-Assets_popv47_c_scale,w_1678.webp`
        ),
      ],
    },
    {
      title: "Augmented Reality Artist Team",
      description:
        "Our devoted team of AR 3D artists is driven by a desire to push the frontiers of creativity in the AR world, bringing your concepts to life with finesse.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Webp/Augmented-Reality-Artist-Team.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_450.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_621.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_846.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_973.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_1114.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_1239.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_1360.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_1478.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_1591.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Augmented-Reality-Artist-Team/Augmented-Reality-Artist-Team_xsbpno/Augmented-Reality-Artist-Team_xsbpno_c_scale,w_1602.webp`
        ),
      ],
    },
    {
      title: "Flexible Solutions",
      description:
        "We tailor our services to your needs, whether you require AR 3D models for marketing campaigns, product demonstrations, training modules, or educational materials.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Webp/Flexible-Solutions.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Flexible-Solutions/Flexible-Solutions_frkm4o/Flexible-Solutions_frkm4o_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Flexible-Solutions/Flexible-Solutions_frkm4o/Flexible-Solutions_frkm4o_c_scale,w_809.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Flexible-Solutions/Flexible-Solutions_frkm4o/Flexible-Solutions_frkm4o_c_scale,w_1123.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Flexible-Solutions/Flexible-Solutions_frkm4o/Flexible-Solutions_frkm4o_c_scale,w_1404.webp`
        ),
      ],
    },
    {
      title: "Quality Checks",
      description:
        "Through our proprietary QA tool, we perform thorough quality checks at each stage to ensure that the models meet your specifications as well as our standards",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Webp/Quality-Checks.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_607.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_893.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_1176.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_1419.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_1656.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/AR Ready/Fold 4 - why choose us/Breakpoint images/Quality-Checks/Quality-Checks_x1fatg/Quality-Checks_x1fatg_c_scale,w_1920.webp`
        ),
      ],
    },
  ];

  const processData = [
    {
      name: "Resource Gathering",
      desc: "We get in talks to understand the client requirements",
    },

    {
      name: "Conceptualization",
      desc: "Our 3D team allocated to your project develops initial design concepts",
    },
    {
      name: "3D Modeling and Texturing",
      desc: "We create detailed 3D models and apply high-resolution textures",
    },
    {
      name: "Optimization for AR",
      desc: "Optimize models for efficient performance in AR platforms",
    },

    {
      name: "Testing and Quality Assurance",
      desc: "Thoroughly test models for compatibility, visual fidelity, and performance through QA tool",
    },
    {
      name: "Feedback and delivery",
      desc: " We thoroughly invite all feedback, absorb it and deliver final assets",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [loadModelOnMouseMove, setLoadModelOnMouseMove] = useState(false);

  const handleLoadingModelOnMouseMove = () => {
    setLoadModelOnMouseMove(true);
  };

  const { ref: mobileTableRef, inView: mobileTableInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ctaTankRef, inView: showCtaTank } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
      onMouseMoveCapture={() => handleLoadingModelOnMouseMove()}
      onTouchStartCapture={()=> handleLoadingModelOnMouseMove()}
      ref={scrollRef}
    >
      {/* 1st Section */}
      <HeroSection
        headings={["Augmented Reality 3D Modeling Services"]}
        content="Unearth the potential of 3D models to uplift your augmented reality experiences."
        buttonText="Get a free sample"
        formHeading={freeSampleFormHeading}
        parentHeading="augmented-reality-3d-modeling-services"
        mobileModelRef={mobileTableRef}
      >
        { viewportWidth < 960 ? /* Model for mobile and tab*/
            <div className="flex lap:hidden relative items-center w-full h-[400px]">
              <ClientOnly>
                {() => (
                  <OnDemandModelHeroSection
                    poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/HeroTable.webp`}
                    src={`${env.CDN_BASE_URL}/3D+Models/AR/Table_Draco_Compressed.glb`}
                    alt="Victorian Desk with Props AR 3D Model"
                    loadModelOnMouseMove={loadModelOnMouseMove}
                    modelKey="AR"
                    cameraOrbit="calc(35deg + env(window-scroll-y) * 35deg) 0 90%)"                    
                    shadowIntensity="0"
                    environment="/mod/Neutral.hdr"
                    posterWidth="100%"
                    posterHeight="100%"
                  />
                )}
              </ClientOnly>
            </div>
          : /* Model for laptop*/
            <div className="hidden lap:flex relative lap:mr-4 tab_old:w-1/2 lap:w-full w-fit h-[400px] -translate-y-[50px]">
              <ClientOnly>
                {() => (
                  <OnDemandModelHeroSection
                    src={`${env.CDN_BASE_URL}/3D+Models/AR/Table_Draco_Compressed.glb`}
                    loadModelOnMouseMove={loadModelOnMouseMove}
                    modelKey="AR"
                    cameraOrbit="calc(35deg + env(window-scroll-y) * 35deg) 0 80%)"
                    poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/HeroTable.webp`}
                    alt="Victorian Desk with Props AR 3D Model"
                    shadowIntensity="0"
                    environment="/mod/Neutral.hdr"
                    posterWidth="100%"
                    posterHeight="100%"
                  />
                )}
              </ClientOnly>
            </div>
        }                
      </HeroSection>

      {/* {Second 2nd Section} */}

      <ServiceCarousel
        heading={["Tailor-Made Augmented Reality Solutions for 3D Models"]}
        subheading="Elevate your business with AR 3D models that engage and inspire."
        items={secondComponentData}
      />

      {/* {New 3rd Section} */}

      <ServicesSection>
        <div  className="flex flex-col gap-[38px] lg:gap-[80px]">
          <div className="flex flex-col lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between w-full">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={["Diverse Portfolio of Augmented Reality 3D Models"]}
                subheading="Immerse yourself in our expansive range of augmented reality 3D model creations"
              />
            </div>
            <div className="flex items-end">
              <ServicesPrimaryButton
                buttonText="Check our portfolio"
                handleButtonClick={() => navigate("/portfolio")}
              />
            </div>
          </div>
          <ServicesModelSectionLabels
            loadModelViewerScript={loadModelOnMouseMove}
            formHeading={freeSampleFormHeading}
            setTheModelLoad={setTheModelLoad}
            items={modelsData}
          />
        </div>
      </ServicesSection>

      {/* {Why Choose Us section} */}
      <ServicesAutoplayCarousel
        items={whyUsData}
        heading={["Why Choose Us?"]}
        subheading="We are your partners for Augmented Reality Services"
        buttonText="Know more"
        handleButtonClick={() => navigate("/why-us")}
      />

      {/* {Process Section} */}
      {/* <ServicesSection> */}
      <Process
        heading={
          "Experience the Future Today: Dive into the Dynamic World of AR"
        }
        subHeading={
          "Showcasing the Augmented Reality Process: Driving Innovation in Business, Museums, and E-Commerce."
        }
        howWeWork={processData}
      />
      {/* </ServicesSection> */}

      {/* {Consultation Call Section} */}

      <PrimaryCTASection
        headings={["Schedule a Free Consultation Call Today"]}
        subheading="Experience How Our Solutions Can Propel Your Business Forward with a
        Consultation."
        handleSecondaryButtonClick={""}
        secondaryButtonText="Request a custom quote"
        handlePrimaryButtonClick={""}
        primaryButtonText="Schedule Now"
      />

      {/* {AR-VR common section} */}
      <ServicesSection>
        <VrTransformativePower
          VrTransformativePowerContent={VrTransformativePowerContent}
        />
      </ServicesSection>

      {/* {**************} */}

      {/* 5th Section */}

      {/* 6th Section */}

      {/* 7th Section */}

      {/* 8th Section */}

      <ServicesSection blockXPadding={true}>
        <div className="flex flex-col" ref={blogsCallRef}>
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 justify-between w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={[
                  "Transforming Industries Through Augmented Reality:",
                  "Real-World Use Cases",
                ]}
                subheading="The Intersection of Technology and Imagination by using Augmented Reality Across Multiple Domains."
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

      {/* 9th Section */}

      {/* 10th Section */}

      {/* 11th Section */}

      {/* 12th Section */}
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
          <Faqs1 faqs={faqData} />
        </div>
      </ServicesSection>

      {/* {8th Fold} */}

      {showModal && <ModalHeroSection formHeading={freeSampleFormHeading} setShowModal={setShowModal} />}
      <SecondaryCTASection
        headings={["Harness the Power of AR for Business and Entertainment"]}
        subheading="Create Dynamic Augmented Reality 3D Models for Brand
        Enhancement, Immersive Experiences, and Customer Engagement."
        primaryButtonText="Create Your AR Model"
        handlePrimaryButtonClick={() => setShowModal(true)}
      >
        <div ref={ ctaTankRef } className="flex relative w-full md:w-full xl:w-[100%] items-center h-[300px] md:h-[400px] xl:h-[500px]">
          {/* <ClientOnly>
            {() => (
              <Model
                poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/tank-empty.webp`}
                cameraControls
                alt="Tank AR 3D Model"
                touchActions="pan-y pinch-zoom"
                src={`${env.CDN_BASE_URL}/3D Models/AR/Tank.glb`}
                environment="/mod/Neutral.hdr"
                rotation={`calc(0.25rad + env(window-scroll-y) * 12rad) calc(80deg + env(window-scroll-y) * 45deg 100%)`}
              />
            )}
          </ClientOnly> */}
          { showCtaTank ? (
            viewportWidth < 600 ?
            <ClientOnly>
              {() => (
                <Model
                  heroSectionModel={false}
                  touchActions="pan-y pinch-zoom"
                  cameraControls
                  poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/tank-empty.webp`}
                  src={`${env.CDN_BASE_URL}/3D+Models/AR/Tank.glb`}
                  environment="/mod/Neutral.hdr"
                  shadowIntensity="0"
                  alt="Model of a Tank"
                  rotation="calc(35deg + env(window-scroll-y) * 35deg) 0 100%)"
                />
              )}
            </ClientOnly>
            : viewportWidth < 960 ?
            <ClientOnly>
              {() => (
                <Model
                  heroSectionModel={false}
                  touchActions="pan-y pinch-zoom"
                  cameraControls
                  poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/tank-empty.webp`}
                  src={`${env.CDN_BASE_URL}/3D+Models/AR/Tank.glb`}
                  environment="/mod/Neutral.hdr"
                  shadowIntensity="0"
                  alt="Model of a Tank"
                  rotation="calc(35deg + env(window-scroll-y) * 35deg) 0 60%)"
                />
              )}
            </ClientOnly>
            :
            viewportWidth < 1280 ?
            <ClientOnly>
              {() => (
                <Model
                  heroSectionModel={false}
                  touchActions="pan-y pinch-zoom"
                  cameraControls
                  poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/tank-empty.webp`}
                  src={`${env.CDN_BASE_URL}/3D+Models/AR/Tank.glb`}
                  environment="/mod/Neutral.hdr"
                  shadowIntensity="0"
                  alt="Model of a Tank"
                  rotation="calc(35deg + env(window-scroll-y) * 35deg) 0 70%)"
                />
              )}
            </ClientOnly>
            :
            <ClientOnly>
              {() => (
                <Model
                  heroSectionModel={false}
                  touchActions="pan-y pinch-zoom"
                  cameraControls
                  poster={`${env.CDN_BASE_URL}/AR+VR+Ready/AR/tank-empty.webp`}
                  src={`${env.CDN_BASE_URL}/3D+Models/AR/Tank.glb`}
                  environment="/mod/Neutral.hdr"
                  shadowIntensity="0"
                  alt="Model of a Tank"
                  rotation="calc(35deg + env(window-scroll-y) * 35deg) 0 80%)"
                />
              )}
            </ClientOnly>
          )
          
          
          : <></>}          
        </div>
      </SecondaryCTASection>

      {/* {Blog Section} */}

      <BlogNewSection
        heading={[
          "Discover the Realm of AR Services:",
          "Our Immersive Digital Creations Unveiled",
        ]}
        subheading="Stay Abreast with the Latest Trends, Expert Tips, and Best Practices in Augmented Reality"
        buttonText="Explore Blogs"
        tag={["hash-ar-website", "3d-blog"]}
        handleButtonClick={""}
        callBlogs={callBlogs}
        callBlogsFooter={callBlogsFooter}
      />

      {/* 15th Section */}
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
      href: `${env.SITE_URL}/augmented-reality-3d-modeling-services`,
    },
  ];
}

export function meta() {
  return [
    {title: "Augmented Reality 3D Modeling Service by Ikarus 3D"},
    {name:"description", content:"Boost your brand's engagement with tailored augmented reality services. Explore immersive 3D models for diverse industries & unlock innovative experiences."},
    {property:"og:title", content: "Augmented Reality 3D Modeling Service by Ikarus 3D"},
    {property:"og:url", content: `${env.SITE_URL}/augmented-reality-3d-modeling-services`},
    {property:"og:description", content:"Boost your brand's engagement with tailored augmented reality services. Explore immersive 3D models for diverse industries & unlock innovative experiences."},
    {property:'og:image', content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:video", content:"https://youtu.be/AbhOTpRvc0g"},
    {property:"og:video:width", content:"1280"},
    {property:"og:video:height", content:"720"},
    {property:'og:type', content: 'website'},
    {property:'twitter:card', content: 'summary_large_image'},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:'twitter:title', content: 'Augmented Reality 3D Modeling Service by Ikarus 3D'},
    {property:'twitter:description', content:"Boost your brand's engagement with tailored augmented reality services. Explore immersive 3D models for diverse industries & unlock innovative experiences."},
  ];
}

export default ArVrReady3dModels;
