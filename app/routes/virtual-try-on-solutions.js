import React, { useState, useRef, useEffect } from "react";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import BlogNewSection from "../components/BlogNewSection";
import HeroSection from "../components/HeroSection";
import ServicesFooter from "../components/ServicesFooter";
import ServiceCarousel from "../components/ServiceCarousel";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServicesAutoplayCarousel from "../components/ServicesAutoplayCarousel";
import Process from "../components/ProcessComponent";
import Faqs1 from "../components/Faqs1";
import ServicesHeading from "../components/ServicesHeading";
import DiscoverServices from "../components/DiscoverServicesComponent";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import PrimaryCTASection from "../components/PrimaryCTASection";
import ServicesSection from "../components/ServicesSection";
import ServicesModelSectionRight from "../components/ServiceModelSectionRight";
import FadedCarousel from "../components/FadedCarousel";
import SecondaryCTASection from "../components/SecondaryCTASection";
import { useNavigate, useLocation } from "@remix-run/react";
import ModalHeroSection from "../components/ModalHeroSection";
import { useInView } from "react-intersection-observer";
import { debounce } from '../utils/debounce';
import {siteMapTags as nextRoute } from "./3d-virtual-spaces";
import useViewportWidth from "../hooks/useViewportWidth";
const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/virtual-try-on-solutions"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

const faqData = [
  {
    question: "How can a virtual try-on solution drive business growth?",
    answer:
      "A virtual try-on solution can elevate your business by enhancing customer engagement, reducing returns, improving conversion rates, and fostering brand loyalty of customers through immersive and interactive experiences.",
  },
  {
    question:
      "Which industries can leverage the power of a virtual try-on solution?",
    answer:
      "Virtually any industry that involves visualizing products on customers can benefit from a virtual try-on solution. Fashion, eyewear, cosmetics, jewelry, and home decor are just a few examples.",
  },
  {
    question:
      "How does a virtual try-on solution enhance customer satisfaction?",

    answer:
      "A virtual try-on solution can elevate your business by enhancing customer engagement, reducing returns, improving conversion rates, and fostering brand loyalty of customers through immersive and interactive experiences.",
  },

  {
    question: "What is a 3D Virtual Try-On?",

    answer:
      "3D virtual try-on technology utilizes 3D mapping and color-matching algorithms to replicate an accurate appearance of the customer in a virtual environment. With virtual try-ons, customers can make wiser shopping decisions by virtually trying products before making a final purchase decision.",
  },
  {
    question: "How AR and VR are used in E-commerce?",

    answer:
      "Both AR and VR have remarkable applications to transform the user experience in e-commerce. Augmented Reality is being actively used across the market to help users virtually try products. Virtually Reality caters to the development of virtual showrooms that provide a more immersive shopping experience.",
  },
];

const useCasesData = [
  {
    heading: "Fashion and Apparel",
    subHeading:
      "Customers can envision themselves wearing outfits, kicks and accessories without physical try-ons when brands  incorporate virtual try-on technology into their e-commerce platforms or mobile apps.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_1920.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_716.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_1027.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_1270.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_1578.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_1737.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Fashion_and_Apparel_psyd2m/Fashion_and_Apparel_psyd2m_c_scale,w_1920.webp`
      ),
    ],
    alt: "Fashion and apperal",
  },
  {
    heading: "Eyewear",
    subHeading:
      "With virtual 3D try-ons, the eyewear market has undergone disruption. Customers can try on glasses using facial recognition and 3D modeling, allowing them to make informed decisions. ",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1920.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1190.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1493.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1556.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1697.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1819.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1919.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Eyewear_mupcok/Eyewear_mupcok_c_scale,w_1920.webp`
      ),
    ],
    alt: "Eyewear",
  },
  {
    heading: "Cosmetics and Beauty",
    subHeading:
      "Consumers can test multiple hues of lipstick, eyeshadow, blush, and other cosmetics using facial mapping technology, allowing them to experiment with different looks without physically applying them.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_1920.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_506.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_922.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_969.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_1265.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_1331.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_1637.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Cosmetics_and_Beauty_wmmmg9/Cosmetics_and_Beauty_wmmmg9_c_scale,w_1920.webp`
      ),
    ],
    alt: "Cosmetics and Beauty",
  },
  {
    heading: "Furniture and Home Decor",
    subHeading:
      "Customers can digitally arrange furniture pieces such as sofas, tables, or rugs in their actual living areas by using augmented reality and 3D visualization in virtual try-ons.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_1920.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_607.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_872.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_1154.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_1420.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_1673.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_1825.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Furniture_and_Home_Decor_e4ppxt/Furniture_and_Home_Decor_e4ppxt_c_scale,w_1920.webp`
      ),
    ],
    alt: "Furniture and Home Decor",
  },
  {
    heading: "Jewellery",
    subHeading:
      "VTO technology offers a realistic representation of how the jewelry looks on the user's hand, neck, or ears, allowing them to evaluate the size, style, and overall appearance. ",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_1920.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_764.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_1111.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_1413.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_1715.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_1916.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Jewellery_no2rd4/Jewellery_no2rd4_c_scale,w_1920.webp`
      ),
    ],
    alt: "Jewellery",
  },
  {
    heading: "Automotive Industry",
    subHeading:
      "Virtual try-ons enable potential buyers to assess the aesthetics and functionality of a vehicle without visiting a dealership, saving time and enhancing the decision-making process.",
    img: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Automotive_Industry_iewdqm/Automotive_Industry_iewdqm_c_scale,w_1920.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Automotive_Industry_iewdqm/Automotive_Industry_iewdqm_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Automotive_Industry_iewdqm/Automotive_Industry_iewdqm_c_scale,w_781.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Automotive_Industry_iewdqm/Automotive_Industry_iewdqm_c_scale,w_1194.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Automotive_Industry_iewdqm/Automotive_Industry_iewdqm_c_scale,w_1613.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 7 - Use cases/Breakpoints/Automotive_Industry_iewdqm/Automotive_Industry_iewdqm_c_scale,w_1920.webp`
      ),
    ],
    alt: "Automotive Industry",
  },
];

const serviceFooter = {
  ctaHeading: "From eyewear to accessories, here’s a look at our portfolio",
  ctaText: "View work",
  ctaLink: "/portfolio",
  formHeading: [
    "Your customers are waiting to have fantastic product visualizations!",
  ],
  formText: "Get in touch with us to wow them.",
  buttonText: "Join the experience",
};

const secondComponentData = [
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Webp/Augmented-Reality-Integration.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_502.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_726.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_926.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_1127.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_1312.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_1488.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_1653.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Augmented-Reality-Integration_ouoqi7/Augmented-Reality-Integration_ouoqi7_c_scale,w_1691.webp`
      ),
    ],
    title: "Augmented Reality Integration",
    description:
      "Our assets can be used in conjunction with AR, allowing customers to virtually try on products in the real-world.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Webp/Realistic-Representation.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_599.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_960.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_1213.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_1528.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_1764.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Realistic-Representation_uxyktm/Realistic-Representation_uxyktm_c_scale,w_1920.webp`
      ),
    ],
    title: "Realistic Representation",
    description:
      "Our 3D models are crafted to replicate every detail of your product. Through advanced texturing and lighting.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Webp/Wide-Product-Compatibility.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_616.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_857.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_1122.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_1381.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_1612.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_1835.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Wide-Product-Compatibility_mxwgia/Wide-Product-Compatibility_mxwgia_c_scale,w_1920.webp`
      ),
    ],
    title: "Wide Product Compatibility",
    description:
      "Our virtual try on solutions are versatile and adaptable to a broad range of products, be it apparel or electronics.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Webp/Mobile and Web Compatibility.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Mobile_and_Web_Compatibility_tlfaq4/Mobile_and_Web_Compatibility_tlfaq4_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Mobile_and_Web_Compatibility_tlfaq4/Mobile_and_Web_Compatibility_tlfaq4_c_scale,w_574.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Mobile_and_Web_Compatibility_tlfaq4/Mobile_and_Web_Compatibility_tlfaq4_c_scale,w_941.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Mobile_and_Web_Compatibility_tlfaq4/Mobile_and_Web_Compatibility_tlfaq4_c_scale,w_1195.webp`
      ),
    ],
    title: "Mobile and Web Compatibility",
    description:
      "To maximize reach and accessibility, our 3D assets are optimized for both mobile devices and web browsers.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Webp/customization-Options.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/customization-Options_yowbrh/customization-Options_yowbrh_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/customization-Options_yowbrh/customization-Options_yowbrh_c_scale,w_725.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/customization-Options_yowbrh/customization-Options_yowbrh_c_scale,w_1140.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/customization-Options_yowbrh/customization-Options_yowbrh_c_scale,w_1495.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/customization-Options_yowbrh/customization-Options_yowbrh_c_scale,w_1831.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/customization-Options_yowbrh/customization-Options_yowbrh_c_scale,w_1920.webp`
      ),
    ],
    title: "Customization Options",
    description:
      "We offer customization options, allowing you to modify textures, colors, and various attributes of your models.",
  },
  {
    iconSrc: encodeURI(
      `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Webp/Visual-Language-Understanding.webp`
    ),
    sources: [
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Visual-Language-Understanding_bmpvzo/Visual-Language-Understanding_bmpvzo_c_scale,w_200.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Visual-Language-Understanding_bmpvzo/Visual-Language-Understanding_bmpvzo_c_scale,w_895.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Visual-Language-Understanding_bmpvzo/Visual-Language-Understanding_bmpvzo_c_scale,w_1228.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Visual-Language-Understanding_bmpvzo/Visual-Language-Understanding_bmpvzo_c_scale,w_1496.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Visual-Language-Understanding_bmpvzo/Visual-Language-Understanding_bmpvzo_c_scale,w_1785.webp`
      ),
      encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold - 2/Breakpoints/Visual-Language-Understanding_bmpvzo/Visual-Language-Understanding_bmpvzo_c_scale,w_1920.webp`
      ),
    ],
    title: "Visual Language Understanding ",
    description:
      "We capture precise textures, colors, compositions and shades, creating models that interact intuitively",
  },
];

const processData = [
  {
    name: "Understand Vision",
    desc: "We chat to grasp your brand and product goals.",
  },

  {
    name: "Collect Resources",
    desc: "We receive high-res images and samples of your products.",
  },

  {
    name: "Building the 3D Model",
    desc: "Our team crafts a detailed 3D model using software.",
  },

  {
    name: "Texturing and Shading",
    desc: "We add realistic textures and colors to inject life to your digital product.",
  },

  {
    name: "Testing and Quality Check",
    desc: "The model goes through rigorous checks for performance and compatibility.",
  },

  {
    name: "Integration",
    desc: "We help you embed the 3D asset on your website and you're ready to wow your customers!",
  },
];

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/virtual-try-on-solutions` }
  ]
}

export function meta() {
  return [
    {title: "Enhance Brand Visibility through Virtual Try-On Solutions"},
    {name:"description", content:"Transform your ecommerce with our cutting-edge virtual try-on solutions. Enhance engagement, reduce returns, & set your brand apart. Explore our services now!"},
    {property:"og:title", content: "Enhance Brand Visibility through Virtual Try-On Solutions"},
    {property:"og:url", content: `${env.SITE_URL}/virtual-try-on-solutions`},
    {property:"og:description", content:"Transform your ecommerce with our cutting-edge virtual try-on solutions. Enhance engagement, reduce returns, & set your brand apart. Explore our services now!"},
    {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:video", content:`${env.CDN_BASE_URL}/Videos/VTO/VTO_website_1280x720.mp4`},
    {property:"og:video:width", content:"1280"},
    {property:"og:video:height", content:"720"},    
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:"twitter:title", content: "Enhance Brand Visibility through Virtual Try-On Solutions"},
    {property:"twitter:description", content:"Transform your ecommerce with our cutting-edge virtual try-on solutions. Enhance engagement, reduce returns, & set your brand apart. Explore our services now!"},
  ];
}

export default function vtoready3dassets() {
  const {ref:blogsCallRef, inView:callBlogs} = useInView({ triggerOnce: true });

  const freeSampleFormHeading = "Get a free sample";

  const { ref: videoRef, inView: videoInView } = useInView();

  const fold3Container = useRef();

  const [slideNumber, setSlideNumber] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const whyUsData = [
    {
      title: "Life-like Experiences",
      description:
        "By blending hyper-realism with ease of use, we ensure that your customers don't just browse but truly engage by building an emotional connection.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Webp/Life-like-Experiences.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Life-like-Experiences_sbqey8/Life-like-Experiences_sbqey8_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Life-like-Experiences_sbqey8/Life-like-Experiences_sbqey8_c_scale,w_678.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Life-like-Experiences_sbqey8/Life-like-Experiences_sbqey8_c_scale,w_1032.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Life-like-Experiences_sbqey8/Life-like-Experiences_sbqey8_c_scale,w_1362.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Life-like-Experiences_sbqey8/Life-like-Experiences_sbqey8_c_scale,w_1709.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Life-like-Experiences_sbqey8/Life-like-Experiences_sbqey8_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Keep Products, Reduce Returns",
      description:
        "By gifting your customers with the power of foresight through product visualizations. With our VTO models, customers can visualize choices with stunning accuracy.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Webp/Keep-Products,-Reduce-Returns.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Keep-Products_-Reduce-Returns_nj7cs1/Keep-Products_-Reduce-Returns_nj7cs1_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Keep-Products_-Reduce-Returns_nj7cs1/Keep-Products_-Reduce-Returns_nj7cs1_c_scale,w_759.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Keep-Products_-Reduce-Returns_nj7cs1/Keep-Products_-Reduce-Returns_nj7cs1_c_scale,w_1146.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Keep-Products_-Reduce-Returns_nj7cs1/Keep-Products_-Reduce-Returns_nj7cs1_c_scale,w_1451.webp`
        ),
      ],
    },
    {
      title: "Adapt and Scale",
      description:
        "Our technology scales and adapts. Customization is king, ensuring that our solutions shape themselves around your needs, not the other way around.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Webp/Adapt-and-Scale.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Adapt-and-Scale_u77mit/Adapt-and-Scale_u77mit_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Adapt-and-Scale_u77mit/Adapt-and-Scale_u77mit_c_scale,w_681.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Adapt-and-Scale_u77mit/Adapt-and-Scale_u77mit_c_scale,w_1058.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Adapt-and-Scale_u77mit/Adapt-and-Scale_u77mit_c_scale,w_1393.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Adapt-and-Scale_u77mit/Adapt-and-Scale_u77mit_c_scale,w_1701.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Adapt-and-Scale_u77mit/Adapt-and-Scale_u77mit_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "AR Technology",
      description:
        "The future is in your hands. By harnessing AR technology, we provide an immersive experience that teleports the trial room to your customer's living room.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Webp/AR-Technology.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_583.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_812.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_949.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_1110.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_1276.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/AR-Technology_q6ydpj/AR-Technology_q6ydpj_c_scale,w_1334.webp`
        ),
      ],
    },
    {
      title: "Data-Driven Marketing",
      description:
        "VTOs give you access to an abundance of information, which can further be segmented to create personalized marketing campaigns to target customers.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Webp/Decisions-with-Data.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Decisions-with-Data_r69mh9/Decisions-with-Data_r69mh9_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Decisions-with-Data_r69mh9/Decisions-with-Data_r69mh9_c_scale,w_464.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Decisions-with-Data_r69mh9/Decisions-with-Data_r69mh9_c_scale,w_837.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Decisions-with-Data_r69mh9/Decisions-with-Data_r69mh9_c_scale,w_1390.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Decisions-with-Data_r69mh9/Decisions-with-Data_r69mh9_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Cross-Platform Compatibility",
      description:
        "Our VTOs aren’t only limited to desktops; they offer cross-platform compatibility, providing a seamless user experience across all devices.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Webp/Cross-Platform-Compatibility.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Cross-Platform-Compatibility_o6bvcg/Cross-Platform-Compatibility_o6bvcg_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Cross-Platform-Compatibility_o6bvcg/Cross-Platform-Compatibility_o6bvcg_c_scale,w_574.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Cross-Platform-Compatibility_o6bvcg/Cross-Platform-Compatibility_o6bvcg_c_scale,w_941.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 4 -  Why choose us/Breakpoints/Cross-Platform-Compatibility_o6bvcg/Cross-Platform-Compatibility_o6bvcg_c_scale,w_1195.webp`
        ),
      ],
    },
  ];
  const [ viewportWidth ] = useViewportWidth();  
  const modelsData = [
    {
      modelUrl:`${env.CDN_BASE_URL}/3D+Models/VTO-Ready/1${viewportWidth < 600 ? '-mob':''}.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 3- Helmet/Webp/1.webp`
      ),
      setIsModelLoadedOnce: false,
    },
    {
      modelUrl:`${env.CDN_BASE_URL}/3D+Models/VTO-Ready/2${viewportWidth < 600 ? '-mob':''}.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 3- Helmet/Webp/2.webp`
      ),
      setIsModelLoadedOnce: false,
    },
    {
      modelUrl:`${env.CDN_BASE_URL}/3D+Models/VTO-Ready/3${viewportWidth < 600 ? '-mob':''}.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 3- Helmet/Webp/3.webp`
      ),
      setIsModelLoadedOnce: false,
    },
    {
      modelUrl:`${env.CDN_BASE_URL}/3D+Models/VTO-Ready/4${viewportWidth < 600 ? '-mob':''}.glb`,
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/VTO Ready service/Fold 3- Helmet/Webp/4.webp`
      ),
      setIsModelLoadedOnce: false,
    },
  ];

  const setTheModelLoad = (index)=>{
    modelsData[index].setIsModelLoadedOnce = true;    
  }

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

  useEffect(() => {
    
    const query = location.search.slice(1).split("=");

    if (query[0] === "slide") {
      setSlideNumber(parseInt(query[1]));
    }
  }, []);

  return (
    <div className="">
      <HeroSection
        headings={["Virtual Try On: Deliver the Future of Online Shopping"]}
        content="Transform e-commerce with immersive AR try-on experiences for your customers"
        buttonText="Get free sample"
        formHeading={freeSampleFormHeading}
        parentHeading="virtual-try-on-solutions"
      >
        <video
          src={`${env.CDN_BASE_URL}/Videos/vto.mp4`}
          className="w-fit mx-auto rounded-[5px] h-auto"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
      </HeroSection>

      {/* {Second (2nd) Fold} */}
      <ServiceCarousel
        heading={["Overhaul E-commerce with Unforgettable 3D Try-On Assets"]}
        subheading="Enhance your customers' shopping experience with our immersive and memorable virtual try-on assets."
        items={secondComponentData}
      />

      <div className="relative">
        <div
          ref={fold3Container}
          className="relative z-20"
        >
          <ServicesSection>
            <div className="flex flex-col gap-[38px] lg:gap-[80px]">
              <div className="flex flex-col lg:flex-row gap-7 tab:gap-8 lg:gap-9 lg:justify-between w-full">
                <div className="text-left">
                  <ServicesHeadingAndSubheading
                    heading={["Discover Our Range of VTO Solutions"]}
                    subheading="Beyond Virtual Eyewear Try-On, our VTO Solutions for Accessories, Shoes, and More!"
                  />
                </div>
                <div className="flex items-end">
                  <ServicesPrimaryButton
                    buttonText="Explore Portfolio"
                    handleButtonClick={() => navigate("/portfolio")}
                  />
                </div>
              </div>
              <ServicesModelSectionRight
                formHeading={freeSampleFormHeading}
                setTheModelLoad={setTheModelLoad}
                poster={env.HORSE}
                items={modelsData}
              />
            </div>
          </ServicesSection>
        </div>
      </div>

      {/* {4th Fourth Section} */}
      <ServicesAutoplayCarousel
        items={whyUsData}
        heading={["Why Choose Our Virtual Try-On Solutions?"]}
        subheading="Experience the Elevation with Technology and Seamless User Experience"
        buttonText="Know more"
        handleButtonClick={() => navigate("/why-us")}
      />

      {/* {5th Fifth Section} */}
      <Process
        heading={"Seamless Online Shopping: Virtual Experience Made Easy"}
        subHeading={
          "Explore Our User-Friendly Step-by-Step Process for a Seamless VTO Experience"
        }
        howWeWork={processData}
      />

      {/* {6th Sixth Section} */}
      <PrimaryCTASection
        headings={["Schedule a Free Consultation Call Today"]}
        subheading="Experience How Our Solutions Can Propel Your Business Forward
                with a Consultation."
        handleSecondaryButtonClick={""}
        secondaryButtonText="Request a custom quote"
        handlePrimaryButtonClick={""}
        primaryButtonText="Schedule Now"
      />

      <ServicesSection blockXPadding={true}>
        <div className="flex flex-col" ref={blogsCallRef}>
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 justify-between w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={[
                  "Use Cases: Enhancing Product Discovery and",
                  "Engagement",
                ]}
                subheading="Explore the areas where Virtual Try Ons lead the game"
              />
            </div>
            <div className="lg:flex lg:items-end lg:justify-end">
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

      {/* {7th fold} */}
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
        headings={[
          "Driving Revenue Growth: How Try-On Solutions Increase Sales for Product Owners",
        ]}
        subheading="Igniting Customer Engagement with Interactive Experiences that Drive Sales and Foster Brand Loyalty"
        primaryButtonText="Get Try-On Solution Today!"
        handlePrimaryButtonClick={() => setShowModal(true)}
        videoRef={videoRef}
      >
        <video
          src={`${env.CDN_BASE_URL}/Videos/VTO/VTO_website_1280x720.mp4`}
          className="w-full hidden lg:block xxl:hidden mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
        <video
          src={`${env.CDN_BASE_URL}/Videos/VTO/VTO_website_720x480.mp4`}
          className="w-full lg:hidden block mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
        <video
          src={`${env.CDN_BASE_URL}/Videos/VTO/VTO_website_1920x1080.mp4`}
          className="w-full xs:hidden xxl:block mx-auto rounded-[10px] h-[100%]"
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        />
      </SecondaryCTASection>

      <BlogNewSection
        heading={[
          "Explore Our Virtual Try-On Blog for Expert",
          "Tips and Insights",
        ]}
        subheading="Stay Updated with the Latest Trends and Best Practices in Virtual Try-On Technology"
        buttonText="Explore Blogs"
        tag={["hash-vto-website", "3d-blog"]}
        handleButtonClick={""}
        callBlogs={callBlogs}
      />

      <DiscoverServices discoverServicesData={discoverServicesData} />

      <ServicesFooter {...serviceFooter} />
      <Footer />
    </div>
  );
}
