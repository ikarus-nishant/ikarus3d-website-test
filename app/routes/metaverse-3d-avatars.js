import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ServicesFooter from "../components/ServicesFooter";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import HeroSection from "../components/HeroSection";
import BlogNewSection from "../components/BlogNewSection";
import Faqs1 from "../components/Faqs1";
import DiscoverServices from "../components/DiscoverServicesComponent";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServiceCarousel from "../components/ServiceCarousel";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import ServicesAutoplayCarousel from "../components/ServicesAutoplayCarousel";
import ServicesHeading from "../components/ServicesHeading";
import { MetaverseHeroCarousel } from "../components/metaverse-ready/MetaverseHeroCarousel";
import ServicesSection from "../components/ServicesSection";
import ServiceSectionText from "../components/ServiceSectionText";
import ServiceSectionHeading from "../components/ServiceSectionHeading";
import ServicesModelSection from "../components/ServicesModelSection";
import PrimaryCTASection from "../components/PrimaryCTASection";
import SecondaryCTASection from "../components/SecondaryCTASection";
import Process from "../components/ProcessComponent";
import FadedCarousel from "../components/FadedCarousel";
import { debounce } from "../utils/debounce";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import MobileSplide from "../components/mobileSplide";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useLocation } from "@remix-run/react";
import ModalHeroSection from "../components/ModalHeroSection";
import ResponsiveImages from "../components/ResponsiveImages";
import {siteMapTags as nextRoute } from "./virtual-try-on-solutions";
import useViewportWidth from "../hooks/useViewportWidth";
import { useInView } from "react-intersection-observer";

const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/metaverse-3d-avatars"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/metaverse-3d-avatars` }
  ]
}

export const meta = () => [
  {title: "Customizable Metaverse 3D Avatars Creator for Businesses"},
  {name:"description", content:"Enhance your business presence with customizable metaverse avatars. Create unique digital personas for your brand. Get started with Ikarus 3D today!"},
  {property:"og:type", content: "article"},
  {property:"og:title", content: "Customizable Metaverse 3D Avatars Creator for Businesses"},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"og:url", content: `${env.SITE_URL}/metaverse-3d-avatars`},
  {property:"og:description", content:"Enhance your business presence with customizable metaverse avatars. Create unique digital personas for your brand. Get started with Ikarus 3D today!"},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"twitter:title", content: "Customizable Metaverse 3D Avatars Creator for Businesses"},
  {property:"twitter:description", content:"Enhance your business presence with customizable metaverse avatars. Create unique digital personas for your brand. Get started with Ikarus 3D today!"},
];

const MetaverseReady = () => {  
  const fold3Container = useRef();

  const [slideNumber, setSlideNumber] = useState();

  const navigate = useNavigate();

  const freeSampleFormHeading = "Get a free sample";

  const {ref:blogsCallRef, inView:callBlogs} = useInView({ triggerOnce: true });
  const { ref: footerBlogsCallRef, inView: callBlogsFooter } = useInView({
    triggerOnce: true,
  });

  const [ viewportWidth ] = useViewportWidth();
  const [showModal, setShowModal] = useState(false);
  const [loadModelViewerScript, setLoadModelViewerScript] = useState(false);

  const secondComponentData = [
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Pick your skin.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Pick_your_skin_r3hpk6/Pick_your_skin_r3hpk6_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Pick_your_skin_r3hpk6/Pick_your_skin_r3hpk6_c_scale,w_1681.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Pick_your_skin_r3hpk6/Pick_your_skin_r3hpk6_c_scale,w_1920.webp`
        ),
      ],
      title: "Pick your own skin",
      description:
        "Get unlimited customizations for your 3D avatars. You can pick how you want to look, and we’re at your service.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Metaverse ready.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Metaverse_ready_rdmbtf/Metaverse_ready_rdmbtf_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Metaverse_ready_rdmbtf/Metaverse_ready_rdmbtf_c_scale,w_674.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Metaverse_ready_rdmbtf/Metaverse_ready_rdmbtf_c_scale,w_926.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Metaverse_ready_rdmbtf/Metaverse_ready_rdmbtf_c_scale,w_1139.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Metaverse_ready_rdmbtf/Metaverse_ready_rdmbtf_c_scale,w_1341.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Metaverse_ready_rdmbtf/Metaverse_ready_rdmbtf_c_scale,w_1542.webp`
        ),
      ],
      title: "Metaverse Ready",
      description:
        "We can create perfectly personalized 3D avatars to match your personality for your social media profiles.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/VR Environments.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/VR_Environments_mr6odv/VR_Environments_mr6odv_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/VR_Environments_mr6odv/VR_Environments_mr6odv_c_scale,w_719.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/VR_Environments_mr6odv/VR_Environments_mr6odv_c_scale,w_1076.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/VR_Environments_mr6odv/VR_Environments_mr6odv_c_scale,w_1468.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/VR_Environments_mr6odv/VR_Environments_mr6odv_c_scale,w_1628.webp`
        ),
      ],
      title: "VR Environments",
      description:
        "Enjoy across virtual realities seamlessly with our 3D avatars that are easily integrated with VR environments.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_418.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_583.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_720.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_855.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_977.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1054.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1127.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1210.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1301.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1390.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1470.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1548.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1634.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1702.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1742.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1818.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1887.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Realistic_2_htrcey/Realistic_2_htrcey_c_scale,w_1910.webp`
        ),
      ],
      title: "Realistic",
      description:
        "From skin texture to hair curls, dive into the world of VR where your avatar doesn't just look like you - it is you.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Rigged.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Rigged_jya6p4/Rigged_jya6p4_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Rigged_jya6p4/Rigged_jya6p4_c_scale,w_529.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Rigged_jya6p4/Rigged_jya6p4_c_scale,w_838.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Rigged_jya6p4/Rigged_jya6p4_c_scale,w_1072.webp`
        ),
      ],
      title: "Rigged",
      description:
        "Our rigging methods guarantee a wide range of motion, allowing your avatar to make elaborate movements.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Animation-ready.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Animation-ready_npijo0/Animation-ready_npijo0_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Animation-ready_npijo0/Animation-ready_npijo0_c_scale,w_643.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Animation-ready_npijo0/Animation-ready_npijo0_c_scale,w_950.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 2 icons/webp/Breakpoints webp/Animation-ready_npijo0/Animation-ready_npijo0_c_scale,w_1234.webp`
        ),
      ],
      title: "Animation Ready",
      description:
        "Our avatars are ideal for a variety of projects, including film production, immersive gaming, and VR simulations.",
    },
  ];

  // Paranthesis () don't work for imageSrc as that does not load in model viewer. Eg. "Front (3).wbp" won't show the pic in model viewer
  const modelsData = [
    {
      modelUrl: `${env.CDN_BASE_URL}/3D+Models/metaverse/Gunman.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 3 - 4 characters/Renders/Gun Man/webp/breakpoints/Gunman_03_tofcbv_c_scale,w_1920.webp`
      ),
      alt: "Star Wars 3D Avatar",
      setIsModelLoadedOnce: false,
    },
    {
      modelUrl: `${env.CDN_BASE_URL}/3D+Models/metaverse/barbarian+character_2K${viewportWidth < 600 ? '-mob':''}.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 3 - 4 characters/Renders/barbarian character/webp/Front.webp`
      ),
      alt:"Hephaestus 3D Character",
      setIsModelLoadedOnce: false,
    },
    {
      modelUrl: viewportWidth > 600 ? `${env.CDN_BASE_URL}/3D+Models/metaverse/Octopath+Traveler+Therion.glb`: `${env.CDN_BASE_URL}/3D+Models/metaverse/Octopath+Traveler+Therion-mob.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 3 - 4 characters/Renders/Octopath Traveler Therion/Breakpoint/Front/Front_2_hz0qpj_c_scale,w_1920.webp`
      ),
      alt:"Octopath Therion Concept 3D Character",
      setIsModelLoadedOnce: false,
    },
    {
      modelUrl: viewportWidth > 600 ? `${env.CDN_BASE_URL}/3D+Models/metaverse/Naomi.glb`: `${env.CDN_BASE_URL}/3D+Models/metaverse/Naomi-mob.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 3 - 4 characters/Renders/Naomi Girl Character/Front.webp`
      ),
      customDistance: "0.9m",
      alt:"Naomi Girl 3D Character",
      setIsModelLoadedOnce: false,
    },
  ];

  const setTheModelLoad = (index) => {
    modelsData[index].setIsModelLoadedOnce = true;
    // console.log("modelLoaded_parent: ",modelsData[index].setIsModelLoadedOnce)
  };

  const whyUsData = [
    {
      title: "Realistic Avatars",
      description:
        "With our carefully designed avatars, discover the charm of realism. Every element, from body proportions to face characteristics, delivers authenticity.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Realistic-Avatars.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_555.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_810.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1005.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1066.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1230.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1349.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1493.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1622.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1762.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1881.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1907.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Realistic-Avatars_yiqgeb/Realistic-Avatars_yiqgeb_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Extensive Customization",
      description:
        "Using your creativity, you can customize every aspect of your avatar. You have the freedom to precisely define your digital identity with our customization options.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Extensive-Customization.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Extensive-Customization_jmjawe/Extensive-Customization_jmjawe_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Extensive-Customization_jmjawe/Extensive-Customization_jmjawe_c_scale,w_698.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Extensive-Customization_jmjawe/Extensive-Customization_jmjawe_c_scale,w_1050.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Extensive-Customization_jmjawe/Extensive-Customization_jmjawe_c_scale,w_1360.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Extensive-Customization_jmjawe/Extensive-Customization_jmjawe_c_scale,w_1715.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Extensive-Customization_jmjawe/Extensive-Customization_jmjawe_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Seamless Integration",
      description:
        "Our 3D avatars will integrate seamlessly on your platform, offering you an easy transition from the real world to the digital.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Seamless-Integration.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_613.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_953.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_1207.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_1440.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_1668.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_1879.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Seamless-Integration_t5jow4/Seamless-Integration_t5jow4_c_scale,w_1911.webp`
        ),
      ],
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Our advanced tools, top class technology and streamlined methods guarantee that your projects will be at the top of the digital landscape.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Cutting-Edge-Technology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_660.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_993.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_1199.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_1415.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_1591.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_1755.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Cutting-Edge-Technology_odeznb/Cutting-Edge-Technology_odeznb_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Experienced Team",
      description:
        "Our 3D Avatar creators have extensive industry experience in crafting visually appealing 3D Avatars that resemble realistic characteristics.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Experienced-Team.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_614.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_906.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_1129.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_1408.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_1663.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Experienced-Team_svxl6e/Experienced-Team_svxl6e_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Bespoke 3D Avatars",
      description:
        "Let your 3D Avatar be your identical twin in the digital world. Our team crafts unique avatars that are tailored to virtually replicate your identity.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Creative-Solutions.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Creative-Solutions_dup6q3/Creative-Solutions_dup6q3_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Creative-Solutions_dup6q3/Creative-Solutions_dup6q3_c_scale,w_784.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Creative-Solutions_dup6q3/Creative-Solutions_dup6q3_c_scale,w_1220.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Creative-Solutions_dup6q3/Creative-Solutions_dup6q3_c_scale,w_1627.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 4 - Why choose us/Wep format/Breakpoints webp/Creative-Solutions_dup6q3/Creative-Solutions_dup6q3_c_scale,w_1920.webp`
        ),
      ],
    },
  ];

  const processData = [
    {
      name: "Gathering Resources",
      desc: "We collect your ideas that serve as a reference",
    },

    {
      name: "Conceptualization",
      desc: "We sketch out an awe-inspiring design for your 3D avatar",
    },
    {
      name: "Sculpting the 3D Model",
      desc: "Our artists sculpt your avatar, breathing life with intricacy",
    },
    {
      name: "Texturing and Coloring",
      desc: "We paint your avatar with vivid textures and colors",
    },

    {
      name: "Final Touches and Exporting",
      desc: "We polish your avatar to perfection and export it",
    },
    {
      name: "Feedback and Delivery",
      desc: "We deliver your 3D avatar after absorbing your feedback",
    },
  ];

  const create3DSelfData = [
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/girl 1.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_1_tzoqxa/girl_1_tzoqxa_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_1_tzoqxa/girl_1_tzoqxa_c_scale,w_814.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_1_tzoqxa/girl_1_tzoqxa_c_scale,w_1080.webp`
        ),
      ],
      iconSrc: `${env.CDN_BASE_URL}/Metaverse+Ready/revamp/Enhance.svg`,
      heading: "Enhance Your Gaming Persona with Unique Metaverse Avatars",
      subheading:
        "Metaverse avatars are created to accurately represent your personality in the virtual world, taking your experience to new peaks.",
    },
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/girl 2.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_2_bln95u/girl_2_bln95u_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_2_bln95u/girl_2_bln95u_c_scale,w_604.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_2_bln95u/girl_2_bln95u_c_scale,w_971.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/girl_2_bln95u/girl_2_bln95u_c_scale,w_1080.webp`
        ),
      ],
      iconSrc: `${env.CDN_BASE_URL}/Metaverse+Ready/revamp/Seamless.svg`,
      heading: "Seamless Integration in Virtual Reality Environments",
      subheading:
        "Avatars are designed to effortlessly integrate into virtual reality environments to give you a genuinely immersive and realistic experience.",
    },
    {
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Boy .webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/Boy_y4xcns/Boy_y4xcns_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/Boy_y4xcns/Boy_y4xcns_c_scale,w_815.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Fold 7 - 3D characters/Webp/Breakpoints/Boy_y4xcns/Boy_y4xcns_c_scale,w_1080.webp`
        ),
      ],
      iconSrc: `${env.CDN_BASE_URL}/Metaverse+Ready/revamp/Standout.svg`,
      heading: "Stand Out with Unique Metaverse Avatars",
      subheading:
        "Metaverse avatars are created to represent your distinctive personality in the virtual world, allowing you to unleash your imagination.",
    },
  ];

  const buildBrand = [
    {
      heading: "Power of Immersiveness",
      subHeading:
        "Immerse yourself in the metaverse and harness the full potential of 3D models to create a dynamic and intriguing digital presence that breaks down traditional boundaries.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_770.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_1203.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_1322.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_1636.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_1895.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Discover_the_Power_of_Metaverse_3D_Models_cofpo1/Discover_the_Power_of_Metaverse_3D_Models_cofpo1_c_scale,w_1920.webp`
        ),
      ],
      alt:"Power of Immersiveness"
    },
    {
      heading: "Personalized Digital Identities",
      subHeading:
        "With our customizable avatars, you can create a distinctive and personalized digital identity that reflects your sense of fashion, personality, and individuality in the virtual world.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_850.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_1291.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_1609.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_1920.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Personalized_Digital_Identities_cektkd/Personalized_Digital_Identities_cektkd_c_scale,w_1920.webp`
        ),
      ],
      alt:"Personalized Digital Identities"
    },
    {
      heading: "Enhanced Virtual Experiences",
      subHeading:
        "Create a distinctive and personalized digital identity that reflects your sense of fashion, personality, and individuality in the virtual world with our editable avatars.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Enhanced_Virtual_Experiences_jw4wic/Enhanced_Virtual_Experiences_jw4wic_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Enhanced_Virtual_Experiences_jw4wic/Enhanced_Virtual_Experiences_jw4wic_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Enhanced_Virtual_Experiences_jw4wic/Enhanced_Virtual_Experiences_jw4wic_c_scale,w_799.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Enhanced_Virtual_Experiences_jw4wic/Enhanced_Virtual_Experiences_jw4wic_c_scale,w_1213.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Enhanced_Virtual_Experiences_jw4wic/Enhanced_Virtual_Experiences_jw4wic_c_scale,w_1831.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Enhanced_Virtual_Experiences_jw4wic/Enhanced_Virtual_Experiences_jw4wic_c_scale,w_1920.webp`
        ),
      ],
      alt:"Enhanced Virtual Experiences"
    },
    {
      heading: "Brand Representation",
      subHeading:
        "By creating branded metaverse characters, you can increase the impact and reach of your business. Avatars that represent the spirit and values of your brand can be used to promote your goods, services, or company.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_721.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_1132.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_1371.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_1677.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Brand_Representation_axx5ao/Brand_Representation_axx5ao_c_scale,w_1920.webp`
        ),
      ],
      alt:"Brand Representation"
    },
    {
      heading: "Social Media Engagement",
      subHeading:
        "Utilize customized avatars to stand out on social media platforms, boost interaction, and create lasting relationships with your audience.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_631.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_890.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1440.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1419.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1569.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1708.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1843.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1918.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Social_Media_Engagement_1_jc2jbj/Social_Media_Engagement_1_jc2jbj_c_scale,w_1920.webp`
        ),
      ],
      alt:"Social Media Engagement"
    },
    {
      heading: "Gaming and Entertainment",
      subHeading:
        "With our personalized avatars, enjoy gaming and entertainment from a whole new perspective. Immerse yourself in the gaming world, engage with virtual characters, and take control of your own digital experiences.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1920.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_507.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_685.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_875.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1057.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1216.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1286.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1411.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1577.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1727.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1864.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Metaverse/Use cases/Webp/Breakpoints webp/Gaming_and_Entertainment_pynv9x/Gaming_and_Entertainment_pynv9x_c_scale,w_1920.webp`
        ),
      ],
      alt:"Gaming and Entertainment"
    },
  ];

  const faqData = [
    {
      question: "What is a 3D avatar?",
      answer:
        "A 3D avatar is a digital representation of an individual in a virtual environment. It is a lifelike and customizable character that reflects the appearance and characteristics of the user.",
    },
    {
      question: "How do 3D Avatars Interact in Metaverse?",
      answer:
        "Metaverse-ready 3D avatars use advanced AI-powered algorithms to simulate human interactions within a virtual environment. The onboard sensors on a VR headset use sensing technologies to simulate human movements and behavior in the Metaverse, allowing more immersive interactions.",
    },
    {
      question:
        "How 3D Avatars are Different from Virtual Reality (VR) Avatars?",
      answer:
        "Metaverse-ready 3D avatars are hyper-realistic 3D replicas that exhibit the same characteristics as a human and allow users to navigate in the Metaverse. VR-based avatars are 3D avatars that can copy user movements by collecting signals from special body suits.",
    },
    {
      question: "Can I customize the appearance of my avatar?",
      answer:
        "Absolutely! We offer extensive customization options for your avatar. You can tailor various elements such as facial features, hairstyle, clothing, accessories, and more, allowing you to create a truly personalized and distinct avatar.",
    },
    {
      question: "Is it possible to animate the 3D avatars?",
      answer:
        "Absolutely! Our 3D avatars are animation-ready, allowing you to bring them to life. You can animate your avatars for gaming, storytelling, film production, virtual reality simulations, and other creative projects.",
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
      alt:'3D Augmented Reality Lamp Placement',
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

  const scrollRef = useRef()

  const handleLoadingModelOnMouseMove = () => {
    setLoadModelViewerScript(true);    
  };

  // The scroll listener
  const handleScroll = useCallback(() => {
    setLoadModelViewerScript(true);    
  }, [])

  useEffect(() => {
    const div = scrollRef.current
    div.addEventListener("wheel", handleScroll)

  }, [handleScroll])

  return (
    <div 
      ref={scrollRef}
      onMouseMoveCapture={() => handleLoadingModelOnMouseMove()} 
      onTouchStartCapture={()=> handleLoadingModelOnMouseMove()}
    >  
      {/* 1st Section */}
      <HeroSection
        headings={["Metaverse 3D Avatars ", "For Business"]}
        content="Create Your Digital Twin with Precision and Personalization"
        buttonText="Get a free sample"
        formHeading={freeSampleFormHeading}
        parentHeading="metaverse-3d-avatar-creator"
      >
        <div
          className="flex flex-col lg:flex-row justify-center items-center relative h-[250px] lg:w-full lg:h-[350px] mb-[25px] tab:mb-[60px] lg:mb-[100px]"
        >  
          <img
            src={`${env.CDN_BASE_URL}/Homepage/grid-1.png`}
            alt="background image of a grid"
            className="absolute top-0 left-0 w-full h-full z-10 opacity-40"
            fetchpriority="high"
          />
          <div className="relative z-20 w-full h-full">
            <MetaverseHeroCarousel
              loadModelOnMouseMove={loadModelViewerScript}
              srcA={`${env.CDN_BASE_URL}/3D+Models/metaverse/Native+Indian_Compressed${viewportWidth < 600?'-mob':''}.glb`}
              posterA={`${env.CDN_BASE_URL}/Metaverse+Ready/revamp/tatoo.webp`}
              altA="Native-american 3D model"
              posterAGlow = {`${env.CDN_BASE_URL}/Metaverse+Ready/revamp/tatoo-border.webp`}
              srcB={`${env.CDN_BASE_URL}/3D+Models/metaverse/Native+Indian_1_Compressed${viewportWidth < 600?'-mob':''}.glb`}
              posterB={`${env.CDN_BASE_URL}/Metaverse+Ready/revamp/natural.webp`}
              altB="Variation of Native-american 3D model"
              posterBGlow = {`${env.CDN_BASE_URL}/Metaverse+Ready/revamp/natural-border.webp`}
              srcC={`${env.CDN_BASE_URL}/3D+Models/metaverse/Native+Indian+Gray_Compressed${viewportWidth < 600?'-mob':''}.glb`}
              posterC={`${env.CDN_BASE_URL}/Metaverse+Ready/revamp/gray.webp`}
              altC="Blend Variation of Native-american 3D model"
              posterCGlow = {`${env.CDN_BASE_URL}/Metaverse+Ready/revamp/gray-border.webp`}
            />
            <div className="relative w-1/2 top-1/4 left-[30%] h-1/4 filter blur-[70px] shadow-[80px_80px_80px_80px] bg-[#717171] -z-10"></div>
          </div>
        </div>
      </HeroSection>

      {/* 2nd Section */}
      <ServiceCarousel
        heading={["Unleash Your Imagination with Customizable 3D Avatars"]}
        subheading="Bring Your Avatar to Life: Get Customizable 3D Avatars to Fit Your
            Specifications"
        items={secondComponentData}
      />

      {/* 3rd Section */}
      <div className="relative">
        <div
          ref={fold3Container}
          className="relative z-20"
        >
          <ServicesSection>
            <div className="flex flex-col gap-[38px] lg:gap-[80px]">
              <div className="flex flex-col lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between tab:items-center lg:items-end w-full">
                <div className="text-left tab:text-center lg:text-left">
                  <ServicesHeadingAndSubheading
                    heading={[
                      "Check Out Our Portfolio of Metaverse Avatar Creations",
                    ]}
                    subheading="Step into the world of limitless possibilities and explore our stunning collection of metaverse avatar creations."
                  />
                </div>
                <ServicesPrimaryButton
                  buttonText="Check our portfolio"
                  handleButtonClick={() => navigate("/portfolio")}
                />
              </div>
              <ServicesModelSection
                formHeading={freeSampleFormHeading}
                setTheModelLoad={setTheModelLoad}
                items={modelsData}
              />
            </div>
          </ServicesSection>
        </div>
      </div>
      

      {/* 4th Section */}
      <ServicesAutoplayCarousel
        items={whyUsData}
        heading={["Why Choose Us?"]}
        subheading="We specialise in precise 3D Avatar Creation"
        buttonText="Know more"
        handleButtonClick={() => navigate("/why-us")}
      />

      {/* 5th Section */}
      <Process
        heading={"Forge Your Digital Identity With a 3D Avatar"}
        subHeading={
          "We’ve curated a streamlined process to craft realistic 3D avatars for better navigation in the Metaverse."
        }
        howWeWork={processData}
      />

      {/* 6th Section */}
      <PrimaryCTASection
        headings={["Schedule a Free Consultation Call Today"]}
        subheading="Experience How Our Solutions Can Propel Your Business Forward
                with a Consultation."
        handleSecondaryButtonClick={""}
        secondaryButtonText="Request a custom quote"
        handlePrimaryButtonClick={""}
        primaryButtonText="Schedule Now"
      />

      {/* 7th Section */}
      <ServicesSection blockXPadding={viewportWidth < 1280 ? true : false}>
        <div className="flex flex-col gap-[48px] lg:gap-[80px]">
          <div
            className={`text-left ${
              viewportWidth < 1280
                ? "px-6 tab:px-12 lg:px-[112px] xl:px-[138px]"
                : ""
            }`}
          >
            <ServicesHeadingAndSubheading
              heading={["Create your 3D self in the digital world"]}
              subheading="Custom 3D avatars to get you ready for the digital space"
            />
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full"
          >
            {viewportWidth > 1280 ? (
              <div className="grid lg:grid-cols-3 gap-8">
                {create3DSelfData.map((item, index) => (
                  <div
                    key={`create-3d-sel-${index}`}
                    className="flex flex-col w-full h-full"
                  >
                    <motion.div
                      variants={{
                        offscreen: {
                          opacity: 0,
                        },
                        onscreen: {
                          opacity: 1,
                          transition: {
                            duration: 2,
                            delay: 0.5,
                          },
                        },
                      }}
                      className="flex items-center justify-center w-full"
                    >
                      <ResponsiveImages
                        src={item.imageSrc}
                        alt={item.heading}
                        sources={item.sources}
                        className="w-full max-w-[242px] max-h-[242px]"
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        offscreen: {
                          opacity: 0,
                          scale: 0.5,
                        },
                        onscreen: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 2,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                          },
                        },
                      }}
                      className="flex flex-col gap-6 p-[30px] xl:p-9 bg-[#11141A] grow rounded-[10px] "
                    >
                      <div className="flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16 p-3 lg:p-4 rounded-[5px] bg-white bg-gradient-to-r from-[#0052D4] to-[#2175BB]">
                        <ResponsiveImages
                          src={item.iconSrc}
                          alt={item.heading}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col gap-3 tab:gap-2 lg:gap-4">
                        <ServiceSectionHeading heading={item.heading} />
                        <ServiceSectionText text={item.subheading} />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            ) : viewportWidth > 600 ? (
              <Splide
                tag="section"
                options={{
                  direction: "ltr",
                  pagination: false,
                  focus: 0,
                  arrows: false,
                  type: "slide",
                  perPage: 2,
                  perMove: 1,
                  gap: 24,
                  padding: 48,
                  speed: 2000,
                  height: "auto",
                }}
                hasTrack={false}
                className="h-full"
              >
                <SplideTrack className="h-full">
                  {create3DSelfData.map((item, index) => (
                    <SplideSlide
                      key={`create-3d-sel-${index}`}
                      className="flex flex-col w-full h-full"
                    >
                      <div className="flex flex-col h-full w-full">
                        <motion.div
                          variants={{
                            offscreen: {
                              opacity: 0,
                            },
                            onscreen: {
                              opacity: 1,
                              transition: {
                                duration: 2,
                                delay: 0.5,
                              },
                            },
                          }}
                          className="flex items-center justify-center w-full"
                        >
                          <ResponsiveImages
                            src={item.imageSrc}
                            alt={item.heading}
                            sources={item.sources}
                            className="w-full max-w-[242px] max-h-[242px]"
                          />
                        </motion.div>
                        <motion.div
                          variants={{
                            offscreen: {
                              opacity: 0,
                              scale: 0.5,
                            },
                            onscreen: {
                              opacity: 1,
                              scale: 1,
                              transition: {
                                duration: 2,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                              },
                            },
                          }}
                          className="flex flex-col gap-6 p-[30px] xl:p-9 bg-[#11141A] grow rounded-[10px] "
                        >
                          <div className="flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16 p-3 lg:p-4 rounded-[5px] bg-white bg-gradient-to-r from-[#0052D4] to-[#2175BB]">
                            <ResponsiveImages
                              src={item.iconSrc}
                              alt={item.heading}
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col gap-3 tab:gap-2 lg:gap-4">
                            <ServiceSectionHeading heading={item.heading} />
                            <ServiceSectionText text={item.subheading} />
                          </div>
                        </motion.div>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            ) : (
              <div className="w-full max-w-full">
                <MobileSplide
                  data={create3DSelfData}
                  padding={24}
                >
                  {create3DSelfData.map((item, index) => (
                    <SplideSlide
                      key={`create-3d-sel-${index}`}
                      className="flex flex-col w-full h-full"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{
                          once: true,
                          amount: 0.25,
                        }}
                        transition={{
                          duration: 2,
                          delay: 0.5,
                        }}
                        className="flex items-center justify-center w-full"
                      >
                        <ResponsiveImages
                          src={item.imageSrc}
                          alt={item.heading}
                          sources={item.sources}
                          className="w-full max-w-[242px] max-h-[242px]"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{
                          once: true,
                          amount: 0.25,
                        }}
                        transition={{
                          duration: 2,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="flex flex-col gap-6 p-[30px] xl:p-9 bg-[#11141A] grow rounded-[10px] "
                      >
                        <div className="flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16 p-3 lg:p-4 rounded-[5px] bg-white bg-gradient-to-r from-[#0052D4] to-[#2175BB]">
                          <ResponsiveImages
                            src={item.iconSrc}
                            alt={item.heading}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col gap-3 tab:gap-2 lg:gap-4">
                          <ServiceSectionHeading heading={item.heading} />
                          <ServiceSectionText text={item.subheading} />
                        </div>
                      </motion.div>
                    </SplideSlide>
                  ))}
                </MobileSplide>
              </div>
            )}
          </motion.div>
        </div>
      </ServicesSection>

      {/* 8th Section */}
      <ServicesSection blockXPadding={true}>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between lg:items-end w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={["Use Cases of 3D Metaverse Avatar Creation"]}
                subheading="Explore innovative opportunities in identity and interaction through virtual representations"
              />
            </div>
            <ServicesPrimaryButton
              buttonText="Contact us"
              handleButtonClick={() => navigate("/contact-us")}
            />
          </div>
          <div id="inosuke">
            <FadedCarousel
              slideNumber={slideNumber}
              carouselData={buildBrand}
            />
          </div>
        </div>
      </ServicesSection>

      {/* 9th Section */}
      <ServicesSection>
        <div className="grid lg:grid-cols-[40%_1fr] gap-[30px]">
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

      {/* 10th Section */}
      {showModal && <ModalHeroSection formHeading={freeSampleFormHeading} setShowModal={setShowModal} />}
      <SecondaryCTASection
        headings={["Unlock New Possibilities with Metaverse Avatars"]}
        subheading="Step into the exciting world of metaverse avatars to unlock endless possibilities. Create your virtual persona, experience immersive virtual environments, and embrace a whole new level of digital interaction that lets your imagination flow"
        primaryButtonText="Create metaverse avatar"
        handlePrimaryButtonClick={() => setShowModal(true)}
      >
        <div className="w-full h-full flex items-center justify-center rounded-[10px] overflow-hidden relative">
          <div
            className="absolute bg-transparent top-0 left-0 w-full h-full"
            onClick={(event) => event.preventDefault()}
          ></div>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=hY2Xo-RTGjo"}
            playing={true}
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
          />
        </div>
      </SecondaryCTASection>

      {/* 11th Section */}
      
      <BlogNewSection
        heading={[
          "Explore Our 3D Avatar related Blog for Expert",
          "Tips and Insights",
        ]}
        subheading="Stay Updated with the Latest Trends and Best Practices in Avatar creation"
        buttonText="Explore Blogs"
        tag={["hash-metaverse-website", "3d-blog"]}
        handleButtonClick={""}
        callBlogs={callBlogs}
        //callBlogsFooter={callBlogsFooter}
      />

      {/* 12th Section */}
      <DiscoverServices discoverServicesData={discoverServicesData} />

      {/* 14th Section */}
      <ServicesFooter
        formHeading={[
          "Lower your costs and improve",
          "your website conversions.",
        ]}
        formText="We’re here to deliver custom 3D models that fit your brand vision"
      />
      <Footer />
    </div>
  );
};

export default MetaverseReady;
