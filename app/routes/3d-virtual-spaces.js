import React, { useRef, useState, useCallback } from "react";
import ServicesFooter from "../components/ServicesFooter";
import SubSectionSubHeading from "../components/text/SubSectionSubHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import TripleImgComparisonSlider from "../components/tripleImgComparisonSlider";
import VirtualSpacesHeroSection from "../components/VirtualSpacesHeroSection";
import getBrowserEnv from "../utils/browserEnv";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import BlogNewSection from "../components/BlogNewSection";
import DiscoverServices from "../components/DiscoverServicesComponent";
import ServiceCarousel from "../components/ServiceCarousel";
import ServicesHeadingAndSubheading from "../components/ServicesHeadingAndSubheading";
import ServicesAutoplayCarousel from "../components/ServicesAutoplayCarousel";
import Process from "../components/ProcessComponent";
import ServicesHeading from "../components/ServicesHeading";
import Faqs1 from "../components/Faqs1";
import PrimaryCTASection from "../components/PrimaryCTASection";
import ServiceSectionHeading from "../components/ServiceSectionHeading";
import ModalContainer from "../components/ModalContainer";
import ServicesSection from "../components/ServicesSection";
import ServicesPrimaryButton from "../components/ServicesPrimaryButton";
import FadedCarousel from "../components/FadedCarousel";
import ReactPlayer from "react-player";
import ModalHeroSection from "../components/ModalHeroSection";
import ServicesSubHeading from "../components/ServicesSubHeading";
import ResponsiveImages from "../components/ResponsiveImages";
import { debounce } from '../utils/debounce';
import {siteMapTags as nextRoute } from "./why-us";
import useViewportWidth from "../hooks/useViewportWidth";
const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/3d-virtual-spaces"},
      {name:"priority", content: 0.6},
      {name:"next-route", content: nextRoute()}
  ]
};

const serviceFooter = {
  ctaHeading: "Pushing the limits of what you can achieve with 3D",
  ctaText: "View Portfolio",
  ctaLink: "/portfolio",
  formHeading: ["Lower your costs and improve your website conversions."],
  formText:
    "We’re here to deliver custom 3D models that fit your brand vision.",
  buttonText: "Let's talk",
};

const VirtualSpaces = () => {

  const {ref:blogsCallRef, inView:callBlogs} = useInView({ triggerOnce: true });
  const [slideNumber, setSlideNumber] = useState();

  const [loadModelOnMouseMove, setLoadModelOnMouseMove] = useState(false);
  const scrollRef = useRef();

  const [selectedVideo, setSelectedVideo] = useState(0);
  const [progressBar, setProgressBar] = useState(-1);
  const [videoInteraction, setVideoInteraction] = useState(false);
  const headerHeight = useSelector((state) => state.header.currentHeight);
  const { ref, inView, entry } = useInView({ threshold: 0.3 });
  const [showVideo, setShowVideo] = useState(-1);

  const location = useLocation();

  const navigate = useNavigate();

  const [videoOnceInView, setVideoOnceInView] = useState(false);
  const [ viewportWidth ] = useViewportWidth();  

  const secondComponentData = [
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Webp/Immersive-Experiences.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_440.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_632.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_790.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_957.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1057.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1163.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1285.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1425.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1491.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1602.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1728.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1772.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1842.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Immersive Experience/Immersive-Experiences_sky294_c_scale,w_1920.webp`
        ),
      ],
      title: "Immersive rooms",
      description:
        "Feel the vibrance of the digital world paralleling the real, vividly with our custom-designed sensory experiences",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Webp/3D-environments.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_540.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_739.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_918.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_1062.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_1348.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/3D Environment/3D-environments_rf35zn_c_scale,w_1400.webp`
        ),
      ],
      title: "3D environments",
      description:
        "We shape your visions into tangible virtual landscapes, making every interaction a journey to remember.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Webp/Virtual-spaces.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_504.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_717.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_857.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1034.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1169.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1193.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1423.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1473.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1534.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Virtual space/Virtual-spaces_u1si0x_c_scale,w_1536.webp`
        ),
      ],
      title: "Virtual spaces",
      description:
        "We bridge the gap between the digital and physical, bringing your imaginative concepts to life in the virtual world.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Webp/Customizable-Areas.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Customisable Areas/Customizable-Areas_rhylxq_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Customisable Areas/Customizable-Areas_rhylxq_c_scale,w_947.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Customisable Areas/Customizable-Areas_rhylxq_c_scale,w_1255.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Customisable Areas/Customizable-Areas_rhylxq_c_scale,w_1530.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Customisable Areas/Customizable-Areas_rhylxq_c_scale,w_1780.webp`
        ),
      ],
      title: "Customizable Areas",
      description:
        "Shape your space and tailor every inch with adaptable layouts and themes to infuse your brand’s essence.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Webp/Interactive-Elements.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_523.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_815.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_1052.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_1255.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_1457.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_1696.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Interactive Elements/Interactive-Elements_n1hqpr_c_scale,w_1920.webp`
        ),
      ],
      title: "Interactive Elements",
      description:
        "Get dynamic engagement by incorporating clickable info-points, videos and chats with Ikarus 3D’s interactive tools.",
    },
    {
      iconSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Webp/Realistic-Experiences.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_605.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_942.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_1209.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_1477.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_1758.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 2/Realistic Experience/Realistic-Experiences_wvzxkn_c_scale,w_1920.webp`
        ),
      ],
      title: "Realistic Experiences",
      description:
        "With true-to-life realism, immerse in realism with high-fidelity graphics, spatial audio, and detailed ambiance.",
    },
  ];

  const faqsData = [
    {
      question: "What is a virtual space?",
      answer:
        "A virtual space is a digital environment where users can interact with each other and digital objects, often in real-time. These spaces can be used for various purposes such as meetings, conferences, product showcases, education, and entertainment.",
    },
    {
      question: "Can virtual spaces be customized to match my brand identity?",
      answer:
        "Yes, most virtual space platforms allow customization. You can usually incorporate your branding elements such as logos, color schemes, and other assets to create a consistent brand experience.",
    },
    {
      question:
        "How do I get started with creating a virtual space for my business?",
      answer:
        "Start by defining the objectives you want to achieve with the virtual space. Then, research and choose a platform that aligns with your needs. Customize the space to match your brand and integrate the necessary functionalities. Finally, promote your virtual space to your target audience and continuously monitor and optimize based on analytics and feedback.",
    },
    {
      question: "How do virtual spaces enhance customer experience in E-commerce?",
      answer: "By setting up virtual showrooms, online merchants can integrate a seamless shopping experience to streamline their purchasing decision-making. Customers can step into these virtual spaces, explore collections, and virtually try on items before they commit to a particular product."
    },
    {
      question: "What is a 360-degree virtual tour?",
      answer: "A 360 virtual tour is a virtual simulation of a physical place that’s designed by stitching a series of pictures together to create an immersive touring experience for the buyers. Buyers can immerse themselves in a 360 virtual tour to explore the entire property from the comfort of their homes."
    }
  ];

  const useCasesData = [
    {
      heading: "Training and Remote Collaboration",
      subHeading:
        "With realistic 3D environments and interactive features, you can engage participants, simulate real-life scenarios, and enhance learning outcomes. Virtual spaces allow for efficiency in remote meetings.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Webp/Training and Remote Collaboration.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_604.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_817.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_910.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1056.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1183.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1271.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1348.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1453.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1661.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1760.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1887.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1918.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Training and Remote Collaboration/Training_and_Remote_Collaboration-2_wtlpht_c_scale,w_1920.webp`
        ),
      ],
      alt: "Training and Remote Collaboration",
    },
    {
      heading: "Travel and Leisure",
      subHeading:
        "Whether your team is spread across different locations or you need to conduct immersive tours, our virtual spaces offer a seamless platform for travel and leisure to users. ",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Webp/Travel and Leisure.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_654.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_952.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1222.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1323.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1505.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1606.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1803.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1908.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Travel and Leisure/Travel_and_Leisure-2_pawwgl_c_scale,w_1920.webp`
        ),
      ],
      alt: "Travel and Leisure",
    },
    {
      heading: "Real Estate Visualisation",
      subHeading:
        "Showcase architectural designs, interior layouts, and capture every detail to spark interest and drive engagement. With our virtual spaces, you can help clients visualize their dream property.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Webp/Real Estate Visualization.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_551.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_799.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1038.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1233.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1406.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1571.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1763.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1916.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Real Estate Visualisation/Real_Estate_Visualisation_qdcmlz_c_scale,w_1920.webp`
        ),
      ],
      alt: "Real Estate Visualisation",
    },
    {
      heading: "Healthcare Practice",
      subHeading:
        "Enhance remote consultations and improve collaboration among medical teams. With our virtual spaces, you can take your healthcare practice to new heights of patient-centricity.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Webp/Healthcare Practice.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_643.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_671.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_1248.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_1787.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_1843.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Healthcare practices/Healthcare_Practice-3_twxye0_c_scale,w_1920.webp`
        ),
      ],
      alt: "Healthcare Practice",
    },
    {
      heading: "Retail Shopping Experience",
      subHeading:
        "Whether it's creating virtual showrooms, interactive apparel, or immersive simulations, our virtual tour solutions revolutionize the way retailers connect and deliver products to customers.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Webp/Retail Shopping Experience.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_696.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_1063.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_1339.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_1646.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_1871.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Retail_Shopping_Experience/Retail_Shopping_Experience_rju9vb_c_scale,w_1920.webp`
        ),
      ],
      alt: "Retail Shopping Experience",
    },
    {
      heading: "Military Testing",
      subHeading:
        "Training and testing in the military comes with high stakes. Efficiency in training is a must, provided by virtual spaces without any damage to physical terrains and objects.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Webp/Military Testing.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_638.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_871.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1112.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1350.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1501.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1600.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1812.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1906.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 7- Use cases/Military_Testing/Military_Testing_igih6z_c_scale,w_1920.webp`
        ),
      ],
      alt: "Military Testing",
    },
  ];

  const whyUsData = [
    {
      title: "Immersive Experiences",
      description:
        "By employing VR and AR tech, we craft spaces that captivate and offer interactive elements that create a rich user experience, be it virtual showroom or educational spaces.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Webp/Immersive-Experiences.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_440.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_632.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_790.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_957.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1057.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1163.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1285.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1425.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1491.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1602.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1728.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1772.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1842.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Immersive-Experiences/Immersive-Experiences_k0rj4q_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "End-to-End Customization",
      description:
        "You have the freedom to customize your space. From layout and design to textures and lighting, our team will work closely with you to bring your vision to life.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Webp/End-to-End-Customization.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_743.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_929.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_1164.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_1356.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_1571.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_1740.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/End-to-End-Customization/End-to-End-Customization_twdcqp_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Scalable Virtual Spaces",
      description:
        "Our team designs scalable virtual environments that boast expansive and adaptive characteristics, providing endless possibilities to host intricate simulations",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Webp/Scalable-Virtual-Spaces.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_574.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_835.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_1054.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_1248.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_1389.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_1576.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_1729.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Scalable Virtual Spaces/Scalable-Virtual-Spaces_w24hue_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Real-world Integration",
      description:
        "Our virtual spaces can be integrated with real-world data,  ensuring that it is not just an isolated environment but a functional extension of your real-world operations.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Webp/Real-world-Integration.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_553.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_773.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_939.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1059.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1231.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1383.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1520.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1671.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1756.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1881.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Real world Integration/Real-world-Integration_wtdhnm_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Seamless Performance",
      description:
        "Through optimization techniques and performance testing, we guarantee that the users will have a seamless and lag-free experience across devices.",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Webp/Seamless-Performance.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Seamless Performance/Seamless-Performance_s1n7ub_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Seamless Performance/Seamless-Performance_s1n7ub_c_scale,w_961.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Seamless Performance/Seamless-Performance_s1n7ub_c_scale,w_1485.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Seamless Performance/Seamless-Performance_s1n7ub_c_scale,w_1920.webp`
        ),
      ],
    },
    {
      title: "Post-Launch Support",
      description:
        "Our relationship doesn’t end at launch. We offer continuous support and updates, ensuring that your virtual spaces remain at the forefront of industry standards",
      imageSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Webp/Post-Launch-Support.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_677.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_925.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_1102.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_1288.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_1468.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_1636.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 4 - Why choose us/Post Launch Support/Post-Launch-Support_bgehd4_c_scale,w_1920.webp`
        ),
      ],
    },
  ];

  const videosData = [
    {
      videoSrc: "https://youtu.be/fb12dqeCvtw",
      imgSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Immersive Room/0120.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Immersive Room/Breakpoint images/0120_uvipya_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Immersive Room/Breakpoint images/0120_uvipya_c_scale,w_740.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Immersive Room/Breakpoint images/0120_uvipya_c_scale,w_1172.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Immersive Room/Breakpoint images/0120_uvipya_c_scale,w_1496.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Immersive Room/Breakpoint images/0120_uvipya_c_scale,w_1920.webp`
        ),
      ],
      name: "Immersive rooms",
      description:
        "Feel the vibrance of the digital world paralleling the real, vividly with our custom-designed sensory experiences",
    },
    {
      videoSrc: "https://youtu.be/iSYBIQE2k5o",
      imgSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/4.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_521.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_892.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_898.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_1110.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_1302.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_1543.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_1726.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Outside scenes - St Sophia/Breakpoints/4_kmi5hp_c_scale,w_1920.webp`
        ),
      ],
      name: "3D Environments",
      description:
        "We shape your visions into tangible virtual landscapes, making every interaction a journey to remember",
    },
    {
      videoSrc: "https://youtu.be/-m5G4NhTcOI",
      imgSrc: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/image (2).webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/Breakpoints/image_2_ilchac_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/Breakpoints/image_2_ilchac_c_scale,w_788.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/Breakpoints/image_2_ilchac_c_scale,w_1131.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/Breakpoints/image_2_ilchac_c_scale,w_1388.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/Breakpoints/image_2_ilchac_c_scale,w_1603.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 3/Petra/Breakpoints/image_2_ilchac_c_scale,w_1920.webp`
        ),
      ],
      name: "Virtual spaces",
      description:
        "We bridge the gap between the digital and physical, bringing your imaginative concepts to life in the virtual world",
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
  ];

  useEffect(() => {
    if (videoInteraction) return;

    if (!videoInteraction && progressBar === 2) return;

    if (progressBar === -1 && inView) {
      setVideoOnceInView(true);
      setProgressBar(0);

      const videoTimeOut1 = setTimeout(() => {
        setSelectedVideo(1);
        setProgressBar(1);
      }, 8000);
      const videoTimeOut2 = setTimeout(() => {
        setSelectedVideo(2);
        setProgressBar(2);
      }, 16000);
    }
  }, [inView]);

  useEffect(() => {
    
    const query = location.search.slice(1).split("=");

    if (query[0] === "slide") {
      setSlideNumber(parseInt(query[1]));
    }
  }, []);

  const processData = [
    {
      name: "Conceptualization",
      desc: "We brainstorm and plan the space layout with you",
    },

    {
      name: "Reference Gathering",
      desc: "We collect images and blueprints for design accuracy",
    },

    {
      name: "3D Construction",
      desc: "We use software to build the 3D structure and layout",
    },

    {
      name: "Texturing & Lighting",
      desc: "We add realistic textures and set up lighting for ambiance",
    },

    {
      name: "Add Interactivity",
      desc: "We include interactive elements and animations",
    },

    {
      name: "Optimize and Export",
      desc: "We optimize for platforms and export in needed format",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleLoadingModelOnMouseMove = () => {
    setLoadModelOnMouseMove(true);    
  };

  // The scroll listener
  const handleScroll = useCallback(() => {
    setLoadModelOnMouseMove(true);
    
  }, [])

  useEffect(() => {
    const div = scrollRef.current
    div.addEventListener("wheel", handleScroll)

  }, [handleScroll])

  return (
    <div className="mt-5 tab:mt-0" ref={scrollRef} onMouseMoveCapture={() => handleLoadingModelOnMouseMove()} onTouchStartCapture={()=> handleLoadingModelOnMouseMove()}>
      <div
        className="w-full relative"
        id="virtual-spaces-hero"
        style={{ "--h": headerHeight }}
      >
        <div className="h-[60vh] min-h-[450px] tab:h-full">
          <VirtualSpacesHeroSection
            loadModelOnMouseMove={loadModelOnMouseMove}
            key="virtual-space"
            src={`${env.CDN_BASE_URL}/3D+Models/3D+Spaces/modernInterior${viewportWidth < 600 ? '-mob':''}.glb`}
            poster={encodeURI(
              `${env.CDN_BASE_URL}/Responsive Images/Virtual Spaces/Fold 1/3D Room/Virtual Spaces 3D Room.webp`
            )}
            modelKey="virtualSpace"            
            formURL="/3d-virtual-spaces/#contact-us"
          />
        </div>
      </div>

      {/* {Second 2nd Section} */}

      <ServiceCarousel
        heading={["Get, Set, Go in the future with Virtual Reality Tours"]}
        subheading="Be ready with collaborative interactions in the digital world"
        items={secondComponentData}
      />

      <div className="bg-primaryDarkBg">
        {showVideo !== -1 && showVideo >= 0 && showVideo < videosData.length && (
          //  <div className="border-2 border-red-500">
          <ModalContainer closeModal={() => setShowVideo(-1)}>
            {/* <video src={videosData[showVideo].videoSrc} autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}/> */}

            <div className="relative w-full xs:h-[calc(50vh_-_60px)] tab:h-[calc(70vh_-_60px)] lg:h-[calc(100vh_-_60px)] lg:block aspect-video">
              <div className="absolute top-0 left-0 h-full w-full"></div>
              <ReactPlayer
                url={videosData[showVideo].videoSrc}
                playing={true}
                loop={true}
                volume={0}
                muted={true}
                light={false}
                width="100%"
                height="100%"
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              />
            </div>
          </ModalContainer>
          // </div>
        )}
        <div className="flex flex-col items-center mx-4 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[18vw]">
          <div className="my-[30px] tab:my-[60px] xl:my-[9.375rem] text-center">
            <SubSectionHeading
              element="h3"
              text="Crafting Virtual Masterpieces for Seamless Immersion"
            />
            <div className="mt-[15px] lap:mt-[30px]">
              <SubSectionSubHeading text=" Delve deeper into immersive virtual environments we’ve curated to redefine reality." />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {videosData.map((video, index) => (
              <div
                key={`video-${index}`}
                className="relative w-full h-[500px] virtual_image_blur  pt-[84px] pb-[35px] rounded-[10px] overflow-hidden"
              >
                <div className="absolute z-20 top-0 left-0 bg-gradient-to-b from-neutral-900 h-full w-full"></div>
                {/* <img
                  src={video.imgSrc}
                  sizes="(max-width: 2560px) 100%, 2560px"
                  srcset={video.imgSrcSet}
                  alt={video.name}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
                /> */}
                <ResponsiveImages
                  src={video.imgSrc}
                  sources={video.sources}
                  alt={video.name}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
                  loading={"lazy"}
                />
                <div className="flex flex-col w-full items-center h-full justify-between px-8 gap-10 z-20 relative ">
                  <div className="flex flex-col gap-3 lg:gap-4 text-center pt-[10px]">
                    <ServiceSectionHeading heading={video.name} />
                    <span className="text-white font-[500] text-[16px] leading-[24px] xl:text-[18px]">
                      {video.description}
                    </span>
                    {/* <ServiceSectionText text={video.description} /> */}
                  </div>
                  <div
                    className="h-fit w-fit rounded-full cursor-pointer"
                    onClick={() => setShowVideo(index)}
                  >
                    {/* <img src="/temp/virtualSpace/video icon dark mode.svg" /> */}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65"
                        height="67"
                        viewBox="0 0 65 67"
                        fill="none"
                      >
                        <ellipse
                          cx="32.3861"
                          cy="33.2795"
                          rx="32.3861"
                          ry="33.2795"
                          transform="matrix(1 0 0 -1 0 66.5591)"
                          fill="#F8F9FC"
                        />
                        <ellipse
                          cx="32.3861"
                          cy="33.2795"
                          rx="32.3861"
                          ry="33.2795"
                          transform="matrix(1 0 0 -1 0 66.5591)"
                          fill="url(#paint0_linear_2689_73)"
                        />
                        <path
                          d="M43.5695 34.3577C44.2172 33.9693 44.2172 33.0307 43.5695 32.6423L27.0142 22.7165C26.3477 22.3169 25.5 22.797 25.5 23.5742V43.4258C25.5 44.203 26.3477 44.6831 27.0142 44.2835L43.5695 34.3577Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2689_73"
                            x1="0"
                            y1="33.2795"
                            x2="64.7722"
                            y2="33.2795"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0"
                              stopColor="#0052D4"
                            />
                            <stop
                              offset="1"
                              stopColor="#2175BB"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="w-[85%] mx-auto mb-[30px] tab:mb-[60px] xl:mb-[9.375rem]">
            <div className="w-full aspect-[21/9] overflow-hidden" ref={ref}>
              <video
                src={videosData[selectedVideo].videoSrc}
                className="w-full"
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
              />
            </div>
            <div className="flex justify-center gap-8 w-full mt-8">
              {videosData.map((videoData, index) => (
                <div
                  className={`w-1/3 aspect-[3/2] overflow-hidden relative rounded-[5px] ${
                    videoInteraction && selectedVideo === index
                      ? "border-[1.5px] border-primaryBlue"
                      : ""
                  }`}
                  onClick={() => {
                    setVideoInteraction(true);
                    setSelectedVideo(index);
                  }}
                >
                  <div
                    className={`absolute h-2 bottom-0 bg-primaryBlue z-10 ${
                      !videoInteraction && progressBar === index
                        ? "w-full duration-[8000ms]"
                        : "w-0 duration-[0ms]"
                    } transition-all ease-linear`}
                  ></div>
                  <img
                    src={videoData.imgSrc}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent text-center flex items-end p-6">
                    <ContentHeading text={videoData.name} />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* {Why Choose Us section} */}
      {/* <div className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16 my-12 lg:my-[80px]">
        <div className="flex justify-between items-center mx-16 md:mx-[86px] lg:mx-[112px] xl:mx-[138px]">
          <div className="flex flex-col text-left">
            <ServicesHeadingAndSubheading
              heading={["Why Choose Us?"]}
              subheading="Our experts put their best foot forward for each and every project"
            />
          </div>
          <button className="flex items-center justify-center h-12 bg-gradient-to-r from-[#0052D4]  to-[#2175BB] bg-[#2086D1] text-white rounded-[5px] shadow-xs px-6 text-[14px] font-medium">
            Know more
          </button>
        </div>
        <ServicesAutoplayCarousel items={whyUsData}>
          {whyUsData.map((item, index) => (
            <div
              key={`service-carousel-${item.title}-${index}`}
              className="flex flex-col gap-6 p-8 rounded-[10px] bg-[#11141A] w-full max-h-[386px] relative overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <p className="text-white text-[21px] font-semibold leading-[40px] tracking-[-0.28px]">
                  {item.title}
                </p>
                <p className="text-[#B4B4B4] text-[16px] leading-[24px] tracking-[-0.1px]">
                  {item.description}
                </p>
              </div>
              <div>
                <img src={item.imageSrc} alt={item.title} className="w-full" />
              </div>
            </div>
          ))}
        </ServicesAutoplayCarousel>
      </div> */}
      <ServicesAutoplayCarousel
        items={whyUsData}
        heading={["Why Choose Us?"]}
        subheading="Our experts put their best foot forward for each and every project"
        buttonText="Know more"
        handleButtonClick={() => navigate("/why-us")}
      />
      {/* <ServicesSection blockXPadding={true}>
        <div className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-7 lg:gap-9 px-6 lg:px-[112px] xl:px-[138px]">
            <div className="flex flex-col text-left">
              <ServicesHeadingAndSubheading
                heading={["Why Choose Us?"]}
                subheading="Our experts put their best foot forward for each and every project"
              />
            </div>
            <ServicesPrimaryButton
              buttonText="Know more"
              handleButtonClick={""}
            />
          </div>
          <ServicesAutoplayCarousel items={whyUsData}>
            {whyUsData.map((item, index) => (
              <div
                key={`service-carousel-${item.title}-${index}`}
                className="group flex flex-col gap-6 rounded-[10px] bg-[#11141A] w-full max-h-[386px] relative overflow-hidden"
              >
                <div className="px-8 pt-8">
                  <ServiceSectionHeading heading={item.title} />
                </div>
                <div className="grow flex items-end justify-center relative">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-[50%] h-[80%] opacity-100 group-hover:opacity-0 transition-opacity ease-in-out duration-500 object-contain object-center"
                  />
                  <div className="absolute top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 px-8">
                    <ServiceSectionText text={item.description} />
                  </div>
                </div>
              </div>
            ))}
          </ServicesAutoplayCarousel>
        </div>
      </ServicesSection> */}

      {/* {Process Section} */}
      <Process
        heading={[
          "The Art of Virtual Genesis: Crafting Your Immersive Virtual Spaces",
        ]}
        subHeading={
          "Our time-tested process delivers custom-tailored virtual realms to represent your business. "
        }
        howWeWork={processData}
      />

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

      {/* <ServicesSection>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-9 justify-between items-center w-full">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={["Use Cases: Breathe Life into Your Projects with VR 3D Models"]}
                subheading="Unlock New Dimensions of Engagement: See How VR 3D Models are Changing the Game in Product Discovery"
              />
            </div>
            <ServicesPrimaryButton
              buttonText="Contact us"
              handleButtonClick={""}
            />
          </div>
          <div>
            <FadedCarousel carouselData={useCasesData} />
          </div>
        </div>
      </ServicesSection> */}

      <ServicesSection blockXPadding={true}>
        <div className="flex flex-col" ref={blogsCallRef}>
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 justify-between w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
            <div className="text-left">
              <ServicesHeadingAndSubheading
                heading={["Use cases and Benefits of Virtual Spaces"]}
                subheading="Explore the dynamic world of virtual spaces where reality meets digital innovation"
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

      {/* {FAQ Section} */}
      <ServicesSection>
        <div className="lg:grid lg:grid-cols-[40%_60%] gap-[30px]">
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

      {/* {triple slider} */}
      <ServicesSection>
        <div className="flex flex-col gap-[38px] tab:gap-12 lg:gap-16 my-12 lg:my-[80px]">
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 justify-between w-full">
            <div className="flex flex-col gap-3 tab:gap-4 text-left">
              <ServicesHeading
                element="h4"
                headings={[
                  "From Physical to Virtual: Revolutionize Your World",
                  "with 3D Space",
                ]}
              />
              <div className="flex flex-col text-left">
                <ServicesSubHeading
                  subheading={
                    "Crafting immersive environments from the ground up, we transport your reality into the metaverse."
                  }
                />
                <ServicesSubHeading
                  subheading={
                    "Experience the power of advanced 3D spaces and construct vibrant, interactive virtual realms."
                  }
                />
              </div>
            </div>

            <div className="lg:justify-end lg:items-end lg:flex">
              <ServicesPrimaryButton
                buttonText={"Convert Your Virtual Space"}
                handleButtonClick={() => {
                  setShowModal(true);
                }}
              />
            </div>
          </div>
          <div
            className="text-white relative w-full flex flex-col-reverse lap:flex-none"
            id="virtual-spaces-slider"
          >
            <div
              className={
                "relative w-full h-[50%] lap:h-full bg-primarysecondBackground z-0 rounded-[10px] overflow-hidden"
              }
            >
              <TripleImgComparisonSlider
                img1={`${env.CDN_BASE_URL}/Virtual+Spaces/one.webp`}
                img2={`${env.CDN_BASE_URL}/Virtual+Spaces/two.webp`}
                img3={`${env.CDN_BASE_URL}/Virtual+Spaces/three.webp`}
              />
            </div>
            <div className="lap:absolute top-0 left-0">
              <div className="top-0 lap:w-[70%] font-semibold mx-4 mob:mx-10 tab:mx-24 lap:mx-32 xl:ml-[10vw] xxl:ml-[18vw] hover:lap:backdrop-blur-md hover:lap:bg-black/20 transition-all duration-300 ease-linear p-6 mt-8 rounded-[5px]"></div>
            </div>
          </div>
        </div>
      </ServicesSection>

      <BlogNewSection
        heading={["Expert Insights into Virtual Space Solutions"]}
        subheading="Stay Ahead of the Curve with Cutting-Edge Trends and Best Practices in Virtual Space Development"
        buttonText="Explore Blogs"
        tag={["hash-virtual-space-website", "3d-blog"]}
        handleButtonClick={""}
        callBlogs={callBlogs}
      />

      <DiscoverServices discoverServicesData={discoverServicesData} />

      <ServicesFooter {...serviceFooter} />

      <Footer />

      {showModal && (
        <ModalHeroSection
          formHeading="Get a free sample"
          setShowModal={setShowModal}
          acceptedFiles={["png", "jpg", "jpeg"]} //TODO: accept these from props
        />
      )}
    </div>
  );
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/3d-virtual-spaces` }
  ]
}

export function meta() {
  return [
    {title: "Experience Immersive 3D virtual space services | Ikarus 3D"},
    {name:"description", content:"With our professional Virtual Tour services, you can enhance your spaces with the power of true-to-life realism and engage your audience like never before."},
    {property:"og:title", content: "Experience Immersive 3D virtual space services | Ikarus 3D"},
    {property:"og:url", content: `${env.SITE_URL}/3d-virtual-spaces`},
    {property:"og:description", content:"With our professional Virtual Tour services, you can enhance your spaces with the power of true-to-life realism and engage your audience like never before."},
    {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},  
    {property:"twitter:title", content: "Experience Immersive 3D virtual space services | Ikarus 3D"},
    {property:"twitter:description", content:"With our professional Virtual Tour services, you can enhance your spaces with the power of true-to-life realism and engage your audience like never before."},
  ];
}

export default VirtualSpaces;
