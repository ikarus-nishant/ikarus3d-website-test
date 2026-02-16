import React, { useEffect, useState } from "react";
import ServicesFooter from "../components/ServicesFooter";
import { Footer } from "../components/Footer";
import { debounce } from "../utils/debounce";
import getBrowserEnv from "../utils/browserEnv";
import DiscoverServices from "../components/DiscoverServicesComponent";
import Faqs1 from "../components/Faqs1";
import BlogNewSection from "../components/BlogNewSection";
import HeroSection from "../components/HeroSection";
import ServiceCarousel from "../components/ServiceCarousel";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServicesAutoplayCarousel from "../components/ServicesAutoplayCarousel";
import Process from "../components/ProcessComponent";
import ServicesHeading from "../components/ServicesHeading";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import ServicesSection from "../components/ServicesSection";
import PrimaryCTASection from "../components/PrimaryCTASection";
import SecondaryCTAScan from "../components/SecondaryCTAScanClean";
import ImageComparison from "../components/ImageComparison";
import FadedCarousel from "../components/FadedCarousel";
import { useNavigate, useLocation } from "@remix-run/react";
import ModalHeroSection from "../components/ModalHeroSection";
import { useInView } from "react-intersection-observer";
import {siteMapTags as nextRoute } from "./metaverse-3d-avatars";
import useViewportWidth from "../hooks/useViewportWidth";
const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/3d-scan-cleanup-services"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

export const scancleanups = () => {
  const {ref:blogsCallRef, inView:callBlogs} = useInView({ triggerOnce: true });
  const [expand, setExpand] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const [ viewportWidth ] = useViewportWidth();

  const freeSampleFormHeading = "Get a free sample";

  const location = useLocation();

  const navigate = useNavigate();

  const [slideNumber, setSlideNumber] = useState();

  const [showModal, setShowModal] = useState(false);

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
      ],
      alt: "Virtual Reality 3D Model",
      title: "VR 3D Modelling Services",
      navigation: "/virtual-reality-3d-modeling-services",
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

  const BlogData = {
    heading: "Explore Our Scan cleanup Blog for Expert Tips and Insights",
    subtext: "",
  };

  const midPageCTA_details = {
    heading: "Choose us for precise and specialized 3D scanning services.",
    subtext:
      "Experience the Difference with Our Specialized and Precise 3D Scanning Services.",
    first_button_content: "Request a sample",
    second_button_content: "Contact us",
  };

  const consultation_call_data = {
    heading: "Schedule a Free Consultation Call Today",
    subtext:
      "Experience How Our Solutions Can Propel Your Business Forward with a Consultation.",
    first_button_content: "Request a custom quote",
    second_button_content: "Schedule Now",
  };

  const secondComponentData = [
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Webp/Texture-Touch-Ups.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Texture-Touch-Ups/Texture-Touch-Ups_aqksji_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Texture-Touch-Ups/Texture-Touch-Ups_aqksji_c_scale,w_710.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Texture-Touch-Ups/Texture-Touch-Ups_aqksji_c_scale,w_1077.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Texture-Touch-Ups/Texture-Touch-Ups_aqksji_c_scale,w_1447.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Texture-Touch-Ups/Texture-Touch-Ups_aqksji_c_scale,w_1733.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Texture-Touch-Ups/Texture-Touch-Ups_aqksji_c_scale,w_1920.webp`
        ),
      ],
      title: "Texture Touch Ups",
      description:
        "By extracting the object from a scan or by building a virtual data set based on the scan, we generate 3D representations.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Webp/Mesh-Retopology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_400.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_568.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_700.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_826.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_949.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1086.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1199.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1244.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1343.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1439.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1519.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1587.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1676.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1769.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1853.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Retopology/Mesh-Retopology_tacm52_c_scale,w_1920.webp`
        ),
      ],
      title: "Mesh Retopology",
      description:
        "Refine the mesh structure of your 3D photoscan to produce a faultless and accurate product replica.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Webp/Multipurpose-Usage.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Multipurpose-usage/Multipurpose-Usage_ilbqka_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Multipurpose-usage/Multipurpose-Usage_ilbqka_c_scale,w_810.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Multipurpose-usage/Multipurpose-Usage_ilbqka_c_scale,w_1283.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Multipurpose-usage/Multipurpose-Usage_ilbqka_c_scale,w_1671.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Multipurpose-usage/Multipurpose-Usage_ilbqka_c_scale,w_1920.webp`
        ),
      ],
      title: "Multipurpose Usage",
      description:
        "Our expertly cleaned 3D models can seamlessly fit in a wide range of applications, from product design to VR.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Webp/Mesh-Cleanup.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_505.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_675.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_848.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_986.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_1167.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Mesh-Cleanup/Mesh-Cleanup_qvx6az_c_scale,w_1432.webp`
        ),
      ],
      title: "Mesh Cleanup",
      description:
        "We methodically remove noise, repair holes, smooth surfaces, and correct any inconsistencies in your 3D scans.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Webp/Optimised-Geometry.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Optimised-Geometry/Optimised-Geometry_dhuuiv_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Optimised-Geometry/Optimised-Geometry_dhuuiv_c_scale,w_803.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Optimised-Geometry/Optimised-Geometry_dhuuiv_c_scale,w_1234.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/Optimised-Geometry/Optimised-Geometry_dhuuiv_c_scale,w_1920.webp`
        ),
      ],
      title: "Optimised geometry",
      description:
        "Our super smooth cleanup process ensures a streamlined and clean geometry, resulting in lighter 3D models.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Webp/High-Resolution-Scans.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/High-Resolution-Scans/High-Resolution-Scans_z1ugd9_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/High-Resolution-Scans/High-Resolution-Scans_z1ugd9_c_scale,w_735.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/High-Resolution-Scans/High-Resolution-Scans_z1ugd9_c_scale,w_1120.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/High-Resolution-Scans/High-Resolution-Scans_z1ugd9_c_scale,w_1408.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/High-Resolution-Scans/High-Resolution-Scans_z1ugd9_c_scale,w_1684.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 2/Breakpoints webps/High-Resolution-Scans/High-Resolution-Scans_z1ugd9_c_scale,w_1920.webp`
        ),
      ],
      title: "High Resolution Scans",
      description:
        "We fine-tune the details of your 3D models, ensuring that every intricate feature is captured and represented.",
    },
  ];

  const useCasesData = [
    {
      heading: "Product Visualization",
      subHeading:
        "Companies can exhibit their products in the most precise and realistic way possible by using high-quality 3D models that have been polished using expert cleanup methods.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/Webp/Product Visualization.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Product_Visualization/Product_Visualization_b0khwi/Product_Visualization_b0khwi_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Product_Visualization/Product_Visualization_b0khwi/Product_Visualization_b0khwi_c_scale,w_924.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Product_Visualization/Product_Visualization_b0khwi/Product_Visualization_b0khwi_c_scale,w_1440.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Product_Visualization/Product_Visualization_b0khwi/Product_Visualization_b0khwi_c_scale,w_1920.webp`
        ),
      ],
      alt: "Product Visualization",
    },
    {
      heading: "Architectural Visualization",
      subHeading:
        "Scan cleanups add tremendous value to architecture. Architects can build high-quality 3D models by removing noise from 3D model scans of structures or landscapes.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/Webp/Architectural Visualization.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_746.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_1174.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_1341.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_1675.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_1876.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Architectural_Visualization_unsp0u_c_scale,w_1920.webp`
        ),
      ],
      alt: "Architectural Visualization",
    },
    {
      heading: "Gaming and Virtual Reality",
      subHeading:
        "Models introduced into virtual settings are lifelike thanks to scan cleanups. It is essential for removing any defects that may undermine the perception of reality.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/Webp/Gaming and Virtual Reality.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_462.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_635.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_748.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_912.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1075.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1238.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1378.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1520.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1636.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1778.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1839.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1903.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Gaming_and_Virtual_Reality/Gaming_and_Virtual_Reality_ru5kzf/Gaming_and_Virtual_Reality_ru5kzf_c_scale,w_1920.webp`
        ),
      ],
      alt: "Gaming and Virtual Reality",
    },
    {
      heading: "Cultural Heritage Preservation",
      subHeading:
        "Accurate 3D models of artifacts, monuments, or historical sites, free from noise or any distortions, allow us to preserve and study our cultural heritage digitally.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/Webp/Cultural Heritage Documentation.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_569.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_846.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_998.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_1219.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_1451.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_1656.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_1857.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_1904.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Cultural_Heritage_Documentation/Cultural_Heritage_Documentation_1_f3rpiw/Cultural_Heritage_Documentation_1_f3rpiw_c_scale,w_1920.webp`
        ),
      ],
      alt: "Cultural Heritage Preservation",
    },
    {
      heading: "Medical Applications",
      subHeading:
        "3D scan cleanups are used in the medical industry to improve the accuracy of anatomical models. These enhanced models help with diagnosis, patient education and more.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/Webp/Medical Applications.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Medical_Applications/Medical_Applications_sap6sh/Medical_Applications_sap6sh_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Medical_Applications/Medical_Applications_sap6sh/Medical_Applications_sap6sh_c_scale,w_825.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Medical_Applications/Medical_Applications_sap6sh/Medical_Applications_sap6sh_c_scale,w_1172.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Medical_Applications/Medical_Applications_sap6sh/Medical_Applications_sap6sh_c_scale,w_1598.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Medical_Applications/Medical_Applications_sap6sh/Medical_Applications_sap6sh_c_scale,w_1794.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Medical_Applications/Medical_Applications_sap6sh/Medical_Applications_sap6sh_c_scale,w_1920.webp`
        ),
      ],
      alt: "Medical Applications",
    },
    {
      heading: "Engineering and Manufacturing",
      subHeading:
        "In the engineering and manufacturing industries, cleanups are critical to ensure correct depiction of components, machinery, or complete production lines for a smoother workflow.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/Webp/Engineering and manufacturing.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_666.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_986.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_1318.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_1699.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_1858.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 8 - Use cases/breakpoint image/Engineering_and_manufacturing/Engineering_and_manufacturing_ryomyk/Engineering_and_manufacturing_ryomyk_c_scale,w_1920.webp`
        ),
      ],
      alt: "Engineering and Manufacturing",
    },
  ];

  const timelineItems = [
    {
      heading: "Receive raw 3D scans",
      content:
        "We receive the photogrammetry or scanner scans and import them into our 3D modeling software.",
      imageSrc: "/newImages/arReady/AR_resource gathering.svg",
    },
    {
      heading: "Merge your scan geometry:",
      content:
        "We merge geometry if it consists of multiple objects and center and orient it to the origin.",
      imageSrc: "/newImages/arReady/AR_custom solutions.svg",
    },
    {
      heading: "Delete floating geometry:",
      content:
        "We remove the unwanted geometry that is not connected to the main mesh.",
      imageSrc: "/newImages/arReady/AR_custom solutions.svg",
    },
    {
      heading: "Mesh optimisation:",
      content:
        "We optimize the number of vertices by reducing the polycount and using automated mesh retopology tools.",
      imageSrc: "/newImages/arReady/AR_custom solutions.svg",
    },
    {
      heading: "Smooth out model",
      content: "We smooth the model to minimize bumps and irregularities.",
      imageSrc: "/newImages/arReady/AR_testing and QA.svg",
    },
    {
      heading: "Fill texture gaps",
      content:
        "We blend the colors and fix seams, then deliver a precise 3D scan model to you!",
      imageSrc: "/newImages/arReady/AR_feedback and delivery.svg",
    },
  ];

  const servicesData = [
    {
      image: `${env.CDN_BASE_URL}/Our+Services+Images/AR.webp`,
      name: "AR ready 3D models",
      link: "/ar-ready-3d-models",
    },
    {
      image: `${env.CDN_BASE_URL}/Our+Services+Images/AR.webp`,
      name: "VR ready 3D models",
      link: "/vr-ready-3d-models",
    },
    {
      image: `${env.CDN_BASE_URL}/Our+Services+Images/vtoready.webp`,
      name: "3D scan cleanups",
      link: "/3d-scan-cleanups",
    },
    {
      image: `${env.CDN_BASE_URL}/Our+Services+Images/vtoready.webp`,
      name: "VTO ready 3D assets",
      link: "/vto-ready-3d-assets",
    },
    {
      image: `${env.CDN_BASE_URL}/Our+Services+Images/3dAvatar.webp`,
      name: "Metaverse ready 3D avatars",
      link: "/metaverse-ready",
    },
    {
      image: `${env.CDN_BASE_URL}/Our+Services+Images/3dAvatar.webp`,
      name: "Virtual spaces",
      link: "/virtual-spaces",
    },
  ];

  const faqsData = [
    {
      question: "What is the process of 3D scanning?",
      answer:
        "3D scanning is a technology that captures the physical shape and details of an object using specialized scanning equipment. The process involves capturing the object from all angles and stitching the data together to create a digital representation of the object's geometry.",
    },
    {
      question: "How long does the 3D scanning process take?",
      answer:
        "The duration of the 3D scanning process depends on various factors such as the complexity and size of the object being scanned. Smaller objects typically require less time, while larger or intricate objects may take longer. Also, it is just the first part of creating a full 3D model, as the object created out of scans is incomplete.",
    },
    {
      question: "Can you clean up small or delicate objects?",
      answer:
        "Yes! Our advanced 3D scan cleanup technology allows us to replenish the finest details of small or delicate objects with precision and accuracy. We take utmost care during the scan cleanup process to ensure the integrity of the object.",
    },
    {
      question: "Do you offer post-processing services for scanned models?",
      answer:
        "Absolutely! We specialize in post-processing services to enhance and refine the scanned models. Our skilled team utilizes various techniques such as mesh optimization, texture mapping, and noise reduction to deliver high-quality, ready-to-use 3D models.",
    },
    {
      question: "Can you create CAD models from the 3D scans?",
      answer:
        "Yes, we can convert 3D scan data into CAD (Computer-Aided Design) models. By utilizing specialized software and skilled designers, we can transform the scanned data into accurate and editable CAD models suitable for manufacturing, prototyping, or further design iterations.",
    },
  ];

  const whyUsData = [
    {
      title: "Advanced Technology",
      description:
        "Ikarus 3D employs cutting-edge technology to convert your 3D scans into high-precision, seamless and accurate 3D objects.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Webp/Advanced-Technology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_672.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_1055.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_1315.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_1564.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_1817.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Advanced-Technology/Advanced-Technology_sowyoo/Advanced-Technology_sowyoo_c_scale,w_1920.webp`
        ),
      ],
    },

    {
      title: "Versatile Capabilities",
      description:
        "We have handled a wide range of raw photogrammetry jobs, from simple structures to complicated designs, historical artifacts to fashion items.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Webp/Versatile-Capabilities.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_538.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_815.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_1065.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_1276.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_1515.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_1753.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Versatile-Capabilities/Versatile-Capabilities_wqo9nk/Versatile-Capabilities_wqo9nk_c_scale,w_1920.webp`
        ),
      ],
    },

    {
      title: "Precise Details",
      description:
        "Our 3D scan cleaning procedures capture even the smallest details from your scans, making exact reconstructions of the original structure in all dimensions.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Webp/Precise-details~1.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Precise-details/Precise-details_1_rcvy9g/Precise-details_1_rcvy9g_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Precise-details/Precise-details_1_rcvy9g/Precise-details_1_rcvy9g_c_scale,w_608.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Precise-details/Precise-details_1_rcvy9g/Precise-details_1_rcvy9g_c_scale,w_904.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Precise-details/Precise-details_1_rcvy9g/Precise-details_1_rcvy9g_c_scale,w_1144.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Precise-details/Precise-details_1_rcvy9g/Precise-details_1_rcvy9g_c_scale,w_1536.webp`
        ),
      ],
    },

    {
      title: "Quality Assurance",
      description:
        "Through our proprietary Quality Assurance tool, we conduct thorough checks at every stage of the 3D scanning and modeling process.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Webp/Quality-Assurance.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quality assuarance/Quality-Assurance_v8ev4z/Quality-Assurance_v8ev4z_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quality assuarance/Quality-Assurance_v8ev4z/Quality-Assurance_v8ev4z_c_scale,w_721.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quality assuarance/Quality-Assurance_v8ev4z/Quality-Assurance_v8ev4z_c_scale,w_1055.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quality assuarance/Quality-Assurance_v8ev4z/Quality-Assurance_v8ev4z_c_scale,w_1282.webp`
        ),
      ],
    },

    {
      title: "Quick Turnarounds",
      description:
        "With all 3D scan cleanups, our team follows a time-tested process to ensure faster turnaround times without compromising the quality.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Webp/Quick-Turnarounds.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_594.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_879.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_1123.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_1355.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_1595.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_1787.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/Quick-Turnarounds/Quick-Turnarounds_kq5uef/Quick-Turnarounds_kq5uef_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "In-House Quality Assurance",
      description:
        "We utilize our in-house QA tool to eradicate all irregularities and generate fully-optimized and flawless 3D designs.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Webp/In-House Quality Assurance.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_708.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_1120.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_1427.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_1778.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_1920.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 4 Why choose us/Breakpoints images/In-House_Quality_Assurance/In-House_Quality_Assurance_kecihi/In-House_Quality_Assurance_kecihi_c_scale,w_.webp`
        ),
      ],
    },
  ];

  const serviceFooter = {
    ctaHeading: "Our 3D artists are brimming with talent",
    ctaText: "Visit artwork",
    ctaLink: "/portfolio",
    formHeading: ["Lower your costs and improve your website conversions."],
    formText:
      "We’re here to deliver custom 3D models that fit your brand vision",
    buttonText: "Let's connect",
  };

  const imgCompSliderAssets = [
    {
      bgSize: "contain",
      img1: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Webp/shoe-clean.webp`
      ),
      img1Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Render/shoe-clean_fog3sh_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Render/shoe-clean_fog3sh_c_scale,w_853.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Render/shoe-clean_fog3sh_c_scale,w_1309.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Render/shoe-clean_fog3sh_c_scale,w_1764.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Render/shoe-clean_fog3sh_c_scale,w_1920.webp`
        ),
      ],
      img2: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Webp/shoe-scan.webp`
      ),
      img2Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_770.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_1129.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_1357.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_1807.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_1897.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Breakpoints images/Scan/shoe-scan_xnx1w2_c_scale,w_1920.webp`
        ),
      ],
      bgImg: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Shoe/Webp/wire.webp`
      ),
      label: "Shoes",
      alt: "Adidas Pink White Women Shoes 3D Scanned Model",
    },
    {
      bgSize: "contain",
      img1: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/webp/render-jacket.webp`
      ),
      img1Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Render/render-jacket_xhijms_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Render/render-jacket_xhijms_c_scale,w_689.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Render/render-jacket_xhijms_c_scale,w_1025.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Render/render-jacket_xhijms_c_scale,w_1444.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Render/render-jacket_xhijms_c_scale,w_1680.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Render/render-jacket_xhijms_c_scale,w_1920.webp`
        ),
      ],
      img2: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/webp/scan-render.webp`
      ),
      img2Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_514.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_645.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_788.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_916.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1026.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1050.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1136.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1235.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1336.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1416.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1507.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1606.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1696.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1797.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1918.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/Breakpoint images/Scan/scan-render_zx3xl6_c_scale,w_1920.webp`
        ),
      ],
      bgImg: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Jacket/webp/wire.webp`
      ),
      label: "Apparel",
      alt: "Adidas Helionic Hooded Down Jacket Cream Color 3D Scanned Model",
    },
    {
      bgSize: "contain",
      img1: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/webp/Render.webp`
      ),
      img1Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_539.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_695.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_882.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1035.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1161.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1300.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1438.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1579.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1749.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1895.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/render/Render_1_2_aosbdc_c_scale,w_1920.webp`
        ),
      ],
      img2: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/webp/Scan.webp`
      ),
      img2Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_509.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_654.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_794.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_924.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1037.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1054.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1157.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1240.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1330.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1418.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1510.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1592.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1691.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1770.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1857.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/breakpoints/scan/Scan_1_1_jl0qyt_c_scale,w_1920.webp`
        ),
      ],
      bgImg: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Red headphones/webp/Wire.webp`
      ),
      label: "Electronics",
      alt: "Sennheiser HD 820 Studio Headphones 3D Scanned Model",
    },
    {
      bgSize: "contain",
      img1: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/webp/render.webp`
      ),
      img1Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_434.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_598.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_754.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_885.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1034.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1043.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1159.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1267.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1367.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1473.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1576.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1701.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1821.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Render/Copy of render_o5f56a_c_scale,w_1920.webp`
        ),
      ],
      img2: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/webp/scan.webp`
      ),
      img2Sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_507.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_638.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_792.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_914.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1024.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1119.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1245.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1281.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1593.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1759.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1861.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/Breakpoint images/Scan/scan_p1wtov_c_scale,w_1920.webp`
        ),
      ],
      bgImg: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/3D Scan Cleanup/Fold 3/Chair/webp/wire.webp`
      ),
      label: "Furniture",
      alt: "TIED RIBBONS AR 3D Chair",
    },
  ];

  const modelsData = [
    {
      name: "Furniture",
      image: "",
      src: "",
    },
    {
      name: "Electronics",
      image: "",
      src: "",
    },
    {
      name: "Fashion and Apparel",
      image: "",
      src: "",
    },
    {
      name: "Art and Collectibles",
      image: "",
      src: "",
    },
    {
      name: "Idustrial Components",
      image: "",
      src: "",
    },
    {
      name: "Automotive Parts",
      image: "",
      src: "",
    },
  ];

  const processData = [
    {
      name: "Receive raw 3D scans",
      desc: "We receive the photogrammetry or scanner scans and import them into our 3D modeling software.",
    },

    {
      name: "Merge your scan’s geometry",
      desc: " We merge geometry if it consists of multiple objects and center and orient it to the origin.",
    },

    {
      name: "Delete floating geometry",
      desc: "We remove the unwanted geometry that is not connected to the main mesh.",
    },

    {
      name: "Mesh optimisation",
      desc: "We optimize the number of vertices by reducing the polycount and using automated mesh retopology tools.",
    },

    {
      name: "Smooth out model",
      desc: "We smooth the model to minimize bumps and irregularities.",
    },

    {
      name: "Fill texture gaps",
      desc: "We blend the colors and fix seams, then deliver a precise 3D scan model to you!",
    },
  ];

  useEffect(() => {
    if (expand) setTimeout(() => setDelayed(true), 1600);
  }, [expand]);

  useEffect(() => {
    const query = location.search.slice(1).split("=");

    if (query[0] === "slide") {
      setSlideNumber(parseInt(query[1]));
    }
  }, []);

  return (
    <div className="">
      <HeroSection
        headings={["Professional 3D Scan Cleanup Services"]}
        content="Reflect the precision of your real-life products into 3D scans"
        buttonText="Get a free sample"
        formHeading={freeSampleFormHeading}
        parentHeading="3d-scan-cleanup-services"
      >
        <video
          src={`${env.CDN_BASE_URL}/Videos/3D-Scan/Comp-2.mp4`}
          className="w-full h-[100%] mx-auto rounded-[5px]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
      </HeroSection>

      {/* {Second 2nd Section} */}
      <ServiceCarousel
        heading={["Enhance your 3D Scans with our Expert Cleanup Process"]}
        subheading="With meticulous fine-tuning and seamless integration, we deliver impeccable results that meet the highest standards of precision and detailing."
        items={secondComponentData}
      />

      {/* {3rd Section} */}

      <ServicesSection>
        <div className="flex flex-col gap-[38px] lg:gap-[80px]">
          <div className="flex flex-col lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between w-full">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={[
                  "A Diverse Portfolio Showcasing Our Unparalleled Expertise",
                ]}
                subheading="Navigate through our projects to know how we’ve transformed imperfections into pixel-perfect 3D models."
              />
            </div>
            <div className="flex items-end">
              <ServicesPrimaryButton
                buttonText="Check our portfolio"
                handleButtonClick={() => navigate("/portfolio")}
              />
            </div>
          </div>
          <ImageComparison items={imgCompSliderAssets} />
        </div>
      </ServicesSection>

      {/* {Why Choose Us section} */}
      <ServicesAutoplayCarousel
        items={whyUsData}
        heading={["Why Choose Us?"]}
        subheading="We Specialise In Precise 3D Scanning Services."
        buttonText="Know more"
        handleButtonClick={() => navigate("/why-us")}
      />

      {/* {Process Section} */}
      {/* <ServicesSection> */}
      <Process
        heading={[
          "Transforming Raw Scans into Impeccable 3D Models",
        ]}
        subHeading={
          "Our 3D artist follow a step-by-step process to turn flawed 3D models, elevating their quality and precision."
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

      {/* <ServicesSection> */}

      <ServicesSection blockXPadding={true}>
        <div className="flex flex-col" ref={blogsCallRef}>
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 justify-between w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={["Know the use cases of 3D scan cleanup services"]}
                subheading="Injecting intricacy into 3D models for an accurate depiction of reality in the digital sphere"
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
      {/* </ServicesSection> */}

      {/* {FAQ Section} */}

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
          <Faqs1 faqs={faqsData} />
        </div>
      </ServicesSection>

      {/* {Secondary CTA Section} */}

      {showModal && <ModalHeroSection formHeading={freeSampleFormHeading} setShowModal={setShowModal} />}
      <SecondaryCTAScan
        headings={[
          "Achieve Exceptional Results with Our 3D Scan Cleanup Services",
        ]}
        subheading="Turning Imperfect Scans into Flawless 3D Models. Our team utilizes
        cutting-edge software to refine irregular 3D scans and deliver 3D
        models that boast extreme precisions."
        primaryButtonText="Get Your 3D Model Scanned"
        handlePrimaryButtonClick={() => setShowModal(true)}
        imageSrc={`${env.CDN_BASE_URL}/3D+Scan+Cleanup+Images/revamped/baby-yoda-again.webp`}
        alt="Star Wars Baby Yoda 3D Scanned Model"
      />

      {/* {Blogs Section} */}

      <BlogNewSection
        heading={[
          "Explore Our Scan cleanup Blog for Expert",
          "Tips and Insights",
        ]}
        subheading="Stay Updated with the Latest Trends and Best Practices in 3D Scan"
        buttonText="Explore Blogs"
        tag={["hash-3d-scan-website", "3d-blog"]}
        handleButtonClick={""}
        callBlogs={callBlogs}
      />

      <DiscoverServices discoverServicesData={discoverServicesData} />
      <ServicesFooter {...serviceFooter} />
      <Footer />
    </div>
  );
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/3d-scan-cleanup-services` }
  ]
}

export function meta() {          
  return [
    {title: "Professional 3D Scan Cleanup Services | Reflect Precision"},
    {name:"description", content:'Transform your 3D scans with our expert cleanup process. Get a free sample and custom quote. Enhance precision for shoes, furniture, jackets, avatars, and accessories.'},    
    {property:'og:title', content: 'Professional 3D Scan Cleanup Services | Reflect Precision'},
    {property:'og:url', content: `${env.SITE_URL}/3d-scan-cleanup-services`},
    {property:'og:description', content:'Transform your 3D scans with our expert cleanup process. Get a free sample and custom quote. Enhance precision for shoes, furniture, jackets, avatars, and accessories.'},
    {property:'og:image', content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:'og:type', content: 'website'},
    {property:"og:video", content:`${env.CDN_BASE_URL}/Videos/3D-Scan/Comp-2.mp4`},
    {property:"og:video:width", content:"1280"},
    {property:"og:video:height", content:"720"},
    {property:'twitter:card', content: 'website'},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:'twitter:title', content:'Professional 3D Scan Cleanup Services | Reflect Precision'},
    {property:'twitter:description', content:'Transform your 3D scans with our expert cleanup process. Get a free sample and custom quote. Enhance precision for shoes, furniture, jackets, avatars, and accessories.'},
  ];
}

export default scancleanups;
