import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValue,
  useTime,
} from "framer-motion";
import { useDispatch } from "react-redux";
import SubSectionSubHeading from "./text/SubSectionSubHeading";
import SubSectionHeading from "./text/SubSectionHeading";
import ContentHeading from "./text/ContentHeading";
import { updatePage } from "~/redux/headerSlice";
import { Footer } from "./Footer";
import getBrowserEnv from "~/utils/browserEnv";
import ModalHeroSection from "./ModalHeroSection";
import HeroSectionHeading from "./text/HeroSectionHeading";
import HeroSectionSubHeading from "./text/HeroSectionSubHeading";
import ModelViewerCarousel from "./ModelViewerCarousel";
import PrimaryButton from "./primaryButton";
import SeparateButtonsSplide from "./SeparateButtonsSplide";
import CountUp from "react-countup";
import HowWeWork from "./ProcessComponent";
import FadedCarousel from "./FadedCarousel";
import MobileSplide from "./mobileSplide";
import PrimaryCTA from "../components/PrimaryCTASection";
import { useNavigate } from "@remix-run/react";
import Faqs1 from "../components/Faqs1";
import ServicesHeading from "./ServicesHeading";
import BlogNewSection from "../components/BlogNewSection";
import ServicesSection from "./ServicesSection";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import RetainerComponent from "../components/RetainerComponent";
import ServicesWeOffer from "./ServicesWeOffer";
import SwipeIt from "./SwipeIt";
import ResponsiveImages from "./ResponsiveImages";
import OnDemandModelLoad from "../components/OnDemandModelHomepage";
import useViewportWidth from "../hooks/useViewportWidth";
import Model from "./Model";

const Body = () => {
  const navigate = useNavigate();
  const [viewportWidth] = useViewportWidth();
  const env = getBrowserEnv();
  const _splideElRef = useRef(null);
  const heroModelRef = useRef();
  const [distFromTop, setDistFromTop] = useState(0);
  const [heroModelDistFromTop, setHeroModelDistFromTop] = useState(0);
  const [fold3DistFromTop, setFold3DistFromTop] = useState(0);
  const [dist2FromTop, setDist2FromTop] = useState(0);
  const heroRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const secondSectionRef = useRef();
  const [secondSectionHeight, setSecondSectionHeight] = useState(0);
  const [howWeWorkHeight, setHowWeWorkHeight] = useState(0);
  const howWeWorkRef = useRef();
  const fold3Ref = useRef();
  const { scrollY } = useScroll(0);
  const y1 = useTransform(
    scrollY,
    [distFromTop, distFromTop + howWeWorkHeight],
    [0, -180]
  );
  const y2 = useTransform(
    scrollY,
    [distFromTop, distFromTop + howWeWorkHeight],
    [0, 80]
  );
  // const heroModelY = useTransform(
  //   scrollY,
  //   [0, fold3DistFromTop],
  //   [0, fold3DistFromTop+60]
  // );
  const heroModelYTab = useTransform(
    scrollY,
    [heroModelDistFromTop, fold3DistFromTop / 5],
    [0, fold3DistFromTop / 6]
  );

  const heroModelY = useMotionValue(0);

  const heroTextOpacity = useTransform(scrollY, [0, heroHeight / 3], [1, 0]);
  const heroTextOpacityOnLoad = useTransform(useTime(), [0, 2000], [0, 1]);
  const heroModelX = useTransform(
    scrollY,
    [heroModelDistFromTop, fold3DistFromTop / 6],
    ["-10%", "-55%"]
  );
  const heroModelScale = useTransform(
    scrollY,
    [0, fold3DistFromTop / 3 - 100],
    [1, 0.9]
  );
  const heroModelScaleTab = useTransform(scrollY, [0, dist2FromTop], [1, 0.6]);
  const tempMotionValue = useMotionValue(0);
  const heroModelOpacity = useTransform(
    scrollY,
    [heroModelDistFromTop, fold3DistFromTop / 6],
    [1, 0]
  );
  const gridNdGlowOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const heroModelOpacityTab = useTransform(scrollY, [500, 600], [1, 0]);
  const secondSectionOpacity = useTransform(
    scrollY,
    [dist2FromTop / 3, dist2FromTop / 3 + 150],
    [0, 1]
  );
  const secondSectionOpacityTab = useTransform(scrollY, [500, 700], [0, 1]);

  const {
    ref: retainerRef,
    inView: retainerInView,
    entry: retainerEntry,
  } = useInView({ triggerOnce: true });

  const {
    ref: whyChooseUsRef,
    inView: whyChooseUsInView,
    entry: whyChooseUsEntry,
  } = useInView({ triggerOnce: true });

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

  const { ref: modelViewerCarouselRef, inView: modelViewerCarouselInView } =
    useInView({
      triggerOnce: true,
    });

  const { ref: ourPartnersRef, inView: ourPartnersInView } = useInView({
    triggerOnce: true,
  });

  const { ref: mobileSofaRef, inView: mobileSofaInView } = useInView({
    threshold: 0.5,
  });

  const { ref: blogsCallRef, inView: callBlogs } = useInView({
    triggerOnce: true,
  });

  const { ref: footerBlogsCallRef, inView: callBlogsFooter } = useInView({
    triggerOnce: true,
  });

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [testimonialsIndex, setTestimonialsIndex] = useState(-1);
  const [modelsIndex, setModelsIndex] = useState(-1);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [loadModelOnMouseMove, setLoadModelOnMouseMove] = useState(false);

  const testimonialsInterval = useRef();
  useEffect(() => {
    if (testimonialsInView)
      testimonialsInterval.current = setInterval(() => {
        nextButtonRef.current.click();
        setTestimonialsIndex((prevIndex) => prevIndex + 1);
      }, 3000);
  }, [testimonialsInView]);

  useEffect(() => {
    if (modelsIndex > diverseRange.length - 1) {
      setModelsIndex(0);
    }
  }, [modelsIndex]);

  // useEffect(() => {

  //   console.log('active service is ', activeService);

  //   if (activeService > services.length - 1) {
  //     setActiveService(0);
  //   }
  // }, [activeService]);

  useEffect(() => {
    console.log("useEffect3");
    const unsubX = heroModelX.on("change", (value) => {
      const numVal = parseFloat(value.replace("%", ""));
      heroModelY.set((numVal * numVal) / 4);
    });

    // const unsubScrollY = scrollY.on("change", (value) => {
    //   if (value > 10) setShowHeroModelInteraction(false);
    //   else setShowHeroModelInteraction(true);
    // });

    if (viewportWidth < 600 && testimonialsIndex === -1) {
      setTestimonialsIndex(0);
      setModelsIndex(0);
    }

    if (heroRef.current) {
      const heroHeight = heroRef.current.clientHeight;
      setHeroHeight(heroHeight);
    }

    if (secondSectionRef.current) {
      const fold2Height = secondSectionRef.current.clientHeight;
      setSecondSectionHeight(fold2Height);
      setDist2FromTop(secondSectionRef.current.offsetTop);
    }

    dispatch(updatePage("Home"));

    if (howWeWorkRef.current) {
      const distanceFromTop = howWeWorkRef.current.offsetTop;
      const howWeWorkHeight = howWeWorkRef.current.clientHeight;
      setHowWeWorkHeight(howWeWorkHeight);
      setDistFromTop(distanceFromTop);
    }

    if (heroModelRef) {
      const distanceFromTop = heroModelRef.current.offsetTop;
      setHeroModelDistFromTop(distanceFromTop);
    }

    if (fold3Ref.current) {
      const distanceFromTop = fold3Ref.current.offsetTop;
      setFold3DistFromTop(distanceFromTop);
    }
    return () => {
      // clearInterval(intervalId.current)
      clearInterval(testimonialsInterval.current);
      unsubX();
      // unsubScrollY();
    };
  }, []);

  let heroModelHeight = 380;

  if ((viewportWidth < 600 || viewportWidth >= 960) && heroModelRef.current) {
    heroModelHeight = (348 / 488.19) * heroModelRef.current.clientWidth;
  } else heroModelHeight = 380;

  if (_splideElRef.current) {
    _splideElRef.current.splide.on("moved", (splide, event) => {
      if (splide === testimonials.length - 2) {
        clearInterval(testimonialsInterval.current);
      }
      setIndex(splide);
    });
  }

  //TODO: @Pritish Sehzpaul - Model component has to be updated to add the responsive images correctly
  const diverseRange = [
    {
      zoomXXL: "77%",
      zoomAt1600: "72%",
      zoomAt1400: "75%",
      src: `${env.CDN_BASE_URL}/3D+Models/Homepage/Buggy${
        viewportWidth < 600 ? "-mob" : ""
      }.glb`,
      poster: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_845.webp`
      ),
      posterSources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_845.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_1264.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_1613.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_1909.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/sportscar/Without BG/Breakpoint webp/V3_dzyxty/V3_dzyxty_c_scale,w_1920.webp`
        ),
      ],
      alt: "Sports ElectroCar 3D Model",
    },
    {
      zoomXXL: "77%",
      zoomAt1600: "72%",
      zoomAt1400: "75%",
      src: `${env.CDN_BASE_URL}/3D+Models/Homepage/spaceship${
        viewportWidth < 600 ? "-mob" : ""
      }.glb`,
      poster: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_898.webp`
      ),
      posterSources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_622.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_898.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1091.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1292.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1405.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1545.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1697.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1903.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Gamming assets/Breakpoint webp/Space-shipWBG_Background_Removed_t0a8lr/Space-shipWBG_Background_Removed_t0a8lr_c_scale,w_1920.webp`
        ),
      ],
      alt: "Spaceship 3D Model",
    },
    {
      zoomXXL: "77%",
      zoomAt1400: "75%",
      src: `${env.CDN_BASE_URL}/3D+Models/Homepage/Howlin.glb`,
      poster: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_844.webp`
      ),
      posterSources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_655.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_844.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1062.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1248.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1388.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1531.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1673.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1795.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1897.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Eyewear/rotation/Breakpoint webp/eyeware_bii5ja_c_scale,w_1920.webp`
        ),
      ],
      alt: "Vallon Howlin Sunglasses 3D Model",
    },
    {
      zoomXXL: "77%",
      zoomAt1600: "67%",
      zoomAt1400: "75%",
      src: `${env.CDN_BASE_URL}/3D+Models/Homepage/chesterfield-comp.glb`,
      poster: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 1 - One seater sofa/Two seater Chesterfield Sofa/Breakpoints webp/sofa_two_seater_lxej9q/sofa_two_seater_lxej9q_c_scale_w_877inverted+.webp`
      ),
      posterSources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive+Images/Home+page/Fold+1+-+One+seater+sofa/Two+seater+Chesterfield+Sofa/Breakpoints+webp/sofa_two_seater_lxej9q/sofa_two_seater_lxej9q_c_scale_w_200inverted.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive+Images/Home+page/Fold+1+-+One+seater+sofa/Two+seater+Chesterfield+Sofa/Breakpoints+webp/sofa_two_seater_lxej9q/sofa_two_seater_lxej9q_c_scale_w_877inverted+.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive+Images/Home+page/Fold+1+-+One+seater+sofa/Two+seater+Chesterfield+Sofa/Breakpoints+webp/sofa_two_seater_lxej9q/sofa_two_seater_lxej9q_c_scale_w_1317inverted.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive+Images/Home+page/Fold+1+-+One+seater+sofa/Two+seater+Chesterfield+Sofa/Breakpoints+webp/sofa_two_seater_lxej9q/sofa_two_seater_lxej9q_c_scale_w_1661inverted.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive+Images/Home+page/Fold+1+-+One+seater+sofa/Two+seater+Chesterfield+Sofa/Breakpoints+webp/sofa_two_seater_lxej9q/sofa_two_seater_lxej9q_c_scale_w_1920inverted.webp`
        ),
      ],
      alt: "Vintage Chesterfield Sofa 3D Model",
    },
    {
      zoomXXL: "77%",
      zoomAt1400: "75%",
      src: `${env.CDN_BASE_URL}/3D+Models/Homepage/Bag${
        viewportWidth < 600 ? "-mob" : ""
      }.glb`,
      poster: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Bag/Breakpoint webp/Bag_kel6hd/Bag_kel6hd_c_scale,w_842.webp`
      ),
      posterSources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Bag/Breakpoint webp/Bag_kel6hd/Bag_kel6hd_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Bag/Breakpoint webp/Bag_kel6hd/Bag_kel6hd_c_scale,w_842.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Bag/Breakpoint webp/Bag_kel6hd/Bag_kel6hd_c_scale,w_1269.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Bag/Breakpoint webp/Bag_kel6hd/Bag_kel6hd_c_scale,w_1628.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Bag/Breakpoint webp/Bag_kel6hd/Bag_kel6hd_c_scale,w_1920.webp`
        ),
      ],
      alt: "Antique Leather Vintage Bags 3D Model",
    },
    {
      zoomXXL: "85%",
      zoomAt1600: "84%",
      src: `${env.CDN_BASE_URL}/3D+Models/Homepage/Prada${
        viewportWidth < 600 ? "-mob" : ""
      }.glb`,
      poster: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Shoes/rotation/Breakpoint webp/shoe_1_jlrfgq_c_scale,w_900.webp`
      ),
      posterSources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Shoes/rotation/Breakpoint webp/shoe_1_jlrfgq_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Shoes/rotation/Breakpoint webp/shoe_1_jlrfgq_c_scale,w_900.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Shoes/rotation/Breakpoint webp/shoe_1_jlrfgq_c_scale,w_1419.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Shoes/rotation/Breakpoint webp/shoe_1_jlrfgq_c_scale,w_1694.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 2 - Portfolio assets/Shoes/rotation/Breakpoint webp/shoe_1_jlrfgq_c_scale,w_1920.webp`
        ),
      ],
      alt: "Yellow Blue Tribe Prada Sneaker 3D Model",
    },
  ];

  const faqs = [
    {
      question: "What are 3D modeling services?",
      answer:
        "3D Modeling Services provide a complete three-dimensional digital representation of products and services using advanced software. From simple shapes to intricate designs, experts can create realistic 3D models extensively. 3D Modeling Services cater to diverse industries such as architecture, product design, manufacturing, and more.",
    },
    {
      question:
        "What is the difference between a low-poly model and a high-poly model?",
      answer:
        "A low-poly model utilizes fewer polygons when shaping products. Each shape is made up of smaller polygons making them more optimized to create 3D applications like video games. Meanwhile, a high-poly model uses more polygons that make objects look accurate. High-poly models are beneficial when developing animations and high-quality visualizations.",
    },
    {
      question: "Can you use low-poly models in real-time applications?",
      answer:
        "Low-poly models use lower polygon count. Moreover, when going with a low-poly model, one can still develop a more specific and high-quality realistic model provided you choose the right 3D modeling program. It's important to understand that low poly models take less storage space and load faster on the website.",
    },
    {
      question: "Can image-based modeling be used for complex objects?",
      answer:
        "Image-based modeling can be used for complex objects. The process involves developing 3D models using 2D images. For instance, with the use of photogrammetry and advanced software systems, the technology enables 3D Modeling Services to run complex structures with desired accuracy. Image-based modeling can work for different specifications, including buildings, terrains, and more.",
    },
    {
      question: "Do you create 3D models from scratch based on specifications?",
      answer:
        "Our experts create 3D models from scratch. We develop a structured process that combines creativity, technical expertise, and comprehensive client interactivity. We collect data specifications to model your products. The process undergoes complete skeletal replenishment of structures at each stage. Gathering feedback from stakeholders is a significant part here. As a result, the end product comes with high-quality 3D models that meet the desired quality standards.",
    },
  ];

  const buildBrand = [
    {
      heading: "Fashion & Retail E-Commerce",
      subHeading:
        "With virtual-try on ready 3D assets, shoppers can virtually try on apparel, jewelry, or even footwear, ensuring a seamless and personalized online shopping experience.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Fashion _ Retail E-Commerce.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_642.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_909.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_1127.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_1320.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_1518.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_1709.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_1902.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Fashion_Retail_E-Commerce/Fashion_Retail_E-Commerce_m2gnvm_c_scale,w_1920.webp`
        ),
      ],
      alt: "Virtual Try-On for Fashion & Retail E-Commerce",
    },
    {
      heading: "Metaverse Integration",
      subHeading:
        "Brands need to be equipped for a paradigm shift in the digital frontier with metaverse-ready avatars designed for compatibility, offering realistic interactions and improving engagement.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Metaverse Integration.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_648.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_905.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_1249.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_1515.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_1829.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Metaverse_Integration/Metaverse_Integration_b3kpgt_c_scale,w_1920.webp`
        ),
      ],
      alt: "Metaverse Integration 3D Visualization",
    },
    {
      heading: "Real Estate & Architecture",
      subHeading:
        "Potential buyers or tenants immerse themselves in lifelike tours, eliminating geographical boundaries. Architects use 3D modeling ensuring clients see their visions come to life before breaking ground.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Real Estate _ Architecture.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_534.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_719.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_990.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_1150.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_1330.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_1685.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_1753.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_1871.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Real_Estate_Architecture/Real_Estate_Architecture_tmp66p_c_scale,w_1920.webp`
        ),
      ],
      alt: "Real Estate & Architecture - Virtual 3D Visualization",
    },
    {
      heading: "Museums & Cultural Institutions",
      subHeading:
        "3D visualizations allow museums to digitize their collections, providing visitors an interaction with artifacts. This enhances the educational experience and serves as a preservation method.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Museums _ Cultural Institutions.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Museums_Cultural_Institutions/Museums_Cultural_Institutions_bjjy8u_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Museums_Cultural_Institutions/Museums_Cultural_Institutions_bjjy8u_c_scale,w_699.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Museums_Cultural_Institutions/Museums_Cultural_Institutions_bjjy8u_c_scale,w_1128.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Museums_Cultural_Institutions/Museums_Cultural_Institutions_bjjy8u_c_scale,w_1324.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Museums_Cultural_Institutions/Museums_Cultural_Institutions_bjjy8u_c_scale,w_1670.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Museums_Cultural_Institutions/Museums_Cultural_Institutions_bjjy8u_c_scale,w_1920.webp`
        ),
      ],
      alt: "Museums & Cultural Institutions 3D Virtualization",
    },
    {
      heading: "Gaming & Entertainment",
      subHeading:
        "From realistic characters to intricate environments, 3D assets enhance the gaming and entertainment industry with realistic playing experiences. These gaming adventures leave a lasting impression.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Gaming_Entertainment.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_496.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_681.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_807.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_971.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1118.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1253.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1347.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1460.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1572.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1676.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1804.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Gaming_Entertainment/Gaming_Entertainment_p0th1s_c_scale,w_1920.webp`
        ),
      ],
      alt: "Gaming & Entertainment - Immersive 3D Experiences",
    },
    {
      heading: "Healthcare & Medical Training",
      subHeading:
        "3D modeling offers professionals new educational tools, from detailed anatomical models to simulated surgeries. It enhances patient education and trains medical students with hands-on experiences.",
      img: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Healthcare _ Medical Training.webp`
      ),
      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_683.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_997.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_1250.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_1294.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_1443.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_1624.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_1771.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 9 -Use cases images/Webp/Breakpoint webp/Healthcare_Medical_Training/Healthcare_Medical_Training_wssrlv_c_scale,w_1920.webp`
        ),
      ],
      alt: "Enhanced Medical Education with 3D Modeling",
    },
  ];

  const howWeWork = [
    {
      name: "E-meet and SOW Discussion",
      desc: "We discuss the expectations and scope of work for the project.",
    },
    {
      name: "Mapping Technical Details",
      desc: "We map out your requirements like the file size, format, delivery timeline.",
    },
    {
      name: "Live Updates",
      desc: "We keep you updated with the status of your projects at all points.",
    },
    {
      name: "Extensive Quality Assurance",
      desc: "Our proprietary QA tool has brought down corrections by 35%.",
    },
    {
      name: "Timely Project Delivery",
      desc: "The project is delivered to you with the fastest turnaround time.",
    },
    {
      name: "Feedback Implementation",
      desc: "We note your feedback and implement it to your satisfaction.",
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
    {
      name: "Gabriele Kraujelyte",
      img: `${env.CDN_BASE_URL}/Clients+Logos/sayduck_white.webp`,
      designation: "Project Manager, SAYDUCK",
      desc: "I really appreciate the team's willingness to improve, it's attention to detail and it's professional approach to business. We're continuously in talks on how to upgrade our partnership.      ",
      rating: 4.0,
      link: "https://www.linkedin.com/in/gabrielekraujelyte/",
      alt: "SAYDUCK",
    },
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

  const whyChooseUs = [
    {
      name: "Dedicated Team of 80+ 3D Artists",
      text: "Our team of 3D artists are eager to guide your project from start to finish. Equipped with best in class design infrastructure, our artists ensure that every project is completed with dedication.",
      lmpic: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Dedicated-team-of-3D-artists.webp`
      ),
      dmpic: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Dedicated-team-of-3D-artists.webp`
      ),

      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_1147.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_1407.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_1669.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_1920.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_547.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/Dedicated-team-of-80_-3D-artists_ts2kfh/Dedicated-team-of-80_-3D-artists_ts2kfh_c_scale,w_887.webp`
        ),
      ],

      width: "100%",
      translateY: "80px",
      alt: "Dedicated Team of 80+ 3D Artists",
    },
    {
      name: "In-house Quality Assurance Tool",
      text: "Our proprietary quality assurance (QA) tool deployed with QA experts brings down corrections in your project by 35%, allowing us to deliver top-notch 3D models, within the shortest turnaround time.",
      lmpic: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/In-house-quality-assurance-tool.webp`
      ),
      dmpic: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/In-house-quality-assurance-tool.webp`
      ),

      source: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_1176.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_1414.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_1685.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_1920.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_593.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/In-house-quality-assurance-tool_gurrg5/In-house-quality-assurance-tool_gurrg5_c_scale,w_892.webp`
        ),
      ],

      width: "100%",
      translateY: "80px",
      alt: "In-house Quality Assurance Tool",
    },
    {
      name: "24x7 Available Person of Contact",
      text: "We have a dedicated team to manage your project and address your queries. Our project manager is always up for a chat, because successful partnerships rely on smooth communication.",
      lmpic: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/24x7 Available Person of Contact.webp`
      ),
      dmpic: encodeURI(
        `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/24x7 Available Person of Contact.webp`
      ),

      sources: [
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_1192.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_1486.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_1741.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_1920.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_200.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_584.webp`
        ),
        encodeURI(
          `${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 6- Why choose us images/webp/Breakpoints/24x7_Available_Person_of_Contact_rqyg3x/24x7_Available_Person_of_Contact_rqyg3x_c_scale,w_858.webp`
        ),
      ],

      width: "90%",
      translateY: "40px",
      alt: "24x7 Available Person of Contact",
    },
  ];

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
    <>
      <div
        ref={scrollRef}
        onMouseMoveCapture={() => handleLoadingModelOnMouseMove()}
        onTouchStartCapture={() => handleLoadingModelOnMouseMove()}
        id="myDiv"
      >
        {/**1st section */}
        <ServicesSection>
          <div className="bg-primaryDarkBg relative h-fit" ref={heroRef}>
            <div
              className="flex flex-col md:flex-row gap-8 tab:gap-[100px] md:gap-[50px] xl:gap-[50px] justify-between lap:min-w-[600px] h-fit"
              ref={mobileSofaRef}
            >
              <motion.div
                // style={{ opacity: heroTextOpacityOnLoad }}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                className="flex flex-col tab:items-center md:items-start justify-start tab:justify-center md:justify-start md:w-[45%] xl:w-[55%] md:mr-6 tab:mx-12 md:ml-0 z-10 md:min-w-[390px] md:max-w-[620px]"
              >
                <HeroSectionHeading
                  headings={[
                    "Product visualizations with 3D modeling services",
                  ]}
                />
                <div className="mt-3 tab:mt-4 w-[85%] xl:min-w-[740px] tab:w-[74%]">
                  <HeroSectionSubHeading subheadings={["Infuse unparalleled realism with 3D visualization where we comprehensively boast your business capabilities."]} />
                </div>
                <div className="flex flex-col tab:flex-row justify-center md:justify-start gap-4 md:gap-3 xl:gap-4 mt-7 tab:mt-8">
                  <button
                    onClick={() => setShowModal(true)}
                    className="h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]"
                    style={{ color: "#fff", borderColor: "#fff" }}
                  >
                    Get a free sample
                  </button>
                  <PrimaryButton
                    link="https://calendly.com/archna_luthra"
                    content="Schedule now"
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{
                  // y: viewportWidth > 960 ? heroModelY : heroModelYTab,
                  // x: viewportWidth > 960 ? heroModelX : 0,
                  opacity: heroTextOpacityOnLoad,
                  height: heroModelHeight,
                  // scale: viewportWidth > 960 ? heroModelScale : heroModelScaleTab,
                }}
                ref={heroModelRef}
                className="relative mx-6 md:mx-0 md:w-[55%] xl:w-[45%] md:-mt-14"
              >
                <div className="w-full h-full z-20 relative">
                  {viewportWidth < 600 ? (
                    <OnDemandModelLoad
                      loadModelOnMouseMove={loadModelOnMouseMove}
                      src={`${env.CDN_BASE_URL}/3D+Models/Homepage/chesterfield-comp_1k.glb`}
                      modelKey="AR"
                      cameraTarget="auto 20cm auto"
                      poster={`${env.CDN_BASE_URL}/Homepage/chesterMirrored.webp`}
                      alt="Vintage Chesterfield Sofa 3D Model"
                      cameraOrbit="calc(0.436332rad + env(window-scroll-y) * 12rad) 0 80%)"
                      shadowIntensity="0"
                    />
                  ) : viewportWidth < 960 ? (
                    <OnDemandModelLoad
                      loadModelOnMouseMove={loadModelOnMouseMove}
                      src={`${env.CDN_BASE_URL}/3D+Models/Homepage/chesterfield-comp_2k.glb`}
                      modelKey="AR"
                      cameraTarget="auto 30cm auto"
                      poster={`${env.CDN_BASE_URL}/Homepage/chesterMirrored.webp`}
                      alt="Vintage Chesterfield Sofa 3D Model"
                      cameraOrbit="calc(0.436332rad + env(window-scroll-y) * 12rad) 0 75%)"
                      shadowIntensity="0"
                    />
                  ) : viewportWidth > 960 ? (
                    <OnDemandModelLoad
                      loadModelOnMouseMove={loadModelOnMouseMove}
                      src={`${env.CDN_BASE_URL}/3D+Models/Homepage/chesterfield-comp_2k.glb`}
                      modelKey="AR"
                      cameraTarget="auto 30cm auto"
                      poster={`${env.CDN_BASE_URL}/Homepage/chesterMirrored.webp`}
                      alt="Vintage Chesterfield Sofa 3D Model"
                      cameraOrbit="calc(0.436332rad + env(window-scroll-y) * 12rad) 0 75%)"
                      shadowIntensity="0"
                    />
                  ) : null}
                </div>
                <motion.div
                  style={{ opacity: heroTextOpacityOnLoad }}
                  className="w-full h-full absolute top-0 left-0 z-10"
                >
                  <img
                    src={`${env.CDN_BASE_URL}/miscellaneous/grid.webp`}
                    className="w-full h-full object-contain opacity-40"
                    alt="Vintage Chesterfield Sofa 3D Model"
                    fetchpriority="high"
                  />
                </motion.div>
                <motion.div
                  style={{ opacity: heroTextOpacityOnLoad }}
                  className="absolute right-0 bottom-8 left-0 mx-auto w-28 tab:w-40 h-28 tab:h-40 filter blur-[70px] shadow-[80px_80px_80px_80px] bg-[#86675D] z-0"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </ServicesSection>

        <ServicesSection blockYPadding={true} blockXPadding={true}>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            // ref={secondSectionRef}
            // style={{ opacity: secondSectionOpacity }}
            className="flex flex-col items-center w-full bg-primaryDarkBg z-10"
          >
            <div
              className="flex flex-col gap-7 tab:gap-8 items-center px-6 tab:px-12 lg:px-[112px] xl:px-[138px] w-full pt-[10vh] lg:pt-[15vh]"
              ref={modelViewerCarouselRef}
            >
              <div className="flex flex-col gap-3 tab:gap-4 md:gap-4 items-center text-center">
                <SubSectionHeading text=" Explore Diverse Range of Products" />
                <SubSectionSubHeading text="We create your expectation into reality." />
              </div>
              <div className="w-full tab:w-auto">
                <PrimaryButton link="/portfolio" content="View our portfolio" />
              </div>
            </div>
            {viewportWidth > 600 ? (
              <ModelViewerCarousel
                viewportWidth={viewportWidth}
                models={diverseRange}
                loadModelOnMouseMove={loadModelOnMouseMove}
              />
            ) : (
              <></>
            )}
            {viewportWidth < 600 ? (
              <MobileSplide tag="div" data={diverseRange}>
                {diverseRange.map((item, index) => (
                  <div
                    className="w-full border-[1px] border-transparent h-[220px]"
                    key={item.alt}
                  >
                    <Model
                      cameraControls={true}
                      touchActions="pan-y pinch-zoom"
                      src={item.src}
                      poster={item.poster}
                      environment="/mod/Neutral.hdr"
                      shadowIntensity="0"
                      rotation="-25deg 0 85%"
                      alt={item.alt}
                    ></Model>
                    {/* <OnDemandModelLoad
                      loadModelOnMouseMove={loadModelOnMouseMove}
                      src={item.src}
                      poster={item.poster}
                      alt={item.alt}
                      cameraOrbit="-25deg 0 85%"
                      shadowIntensity="0"
                    /> */}
                  </div>
                ))}
              </MobileSplide>
            ) : (
              <></>
            )}
          </motion.div>
        </ServicesSection>

        {/* {Marquee Section 3rd} */}

        <ServicesSection>
          <div className="text-center mb-16">
            <SubSectionHeading text="Trusted by Leading Brands" />
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

        {/* {4th section} */}

        <ServicesSection>
          <ServicesWeOffer />
        </ServicesSection>
        <ServicesSection>
          <div className="w-full h-full" ref={retainerRef}>
            <RetainerComponent />
          </div>
        </ServicesSection>
        <ServicesSection blockXPadding={true}>
          <div className="bg-primaryDarkBg border-white relative h-auto md:h-[438px] xl:h-auto flex flex-col no-scrollbar">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, delay: 0.5, amount: 0.25 }}
              className="flex flex-col gap-3 tab:gap-4 relative z-10 mx-6 tab:mx-12 md:mx-[86px] lg:mx-[112px] xl:mx-[138px] lg:w-[50%] text-left"
            >
              <SubSectionHeading element="h3" text="Our Milestones" />
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
              {retainerInView ? (
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
              ) : (
                ""
              )}
            </div>
          </div>
        </ServicesSection>
        <ServicesSection>
          <div className="bg-primaryDarkBg">
            <div className="flex flex-col tab:flex-row gap-7 tab:gap-8 md:gap-0 md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                className="flex flex-col gap-3 tab:gap-4 md:gap-4 text-left"
              >
                <SubSectionHeading text="Why Choose Ikarus 3D?" />
                <div className="w-full tab:w-[80%] md:w-full">
                  <SubSectionSubHeading text="With our expertise in all things 3D, we deliver 3D modeling services that get you digital-ready." />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                className="w-full tab:w-fit tab:min-w-[147px] flex items-end"
              >
                <PrimaryButton content="Know more" link="/why-us" />
              </motion.div>
            </div>
            <div
              ref={whyChooseUsRef}
              className="grid grid-cols-1 tab:grid-cols-2 md:grid-cols-3 gap-8 md:gap-5 xl:gap-6 pt-12 md:pt-[64px] xl:pt-0 xl:mt-16 mx-0 md:mx-[86px] lg:mx-[112px] xl:w-[1280px] xl:h-[386px] xl:mx-auto"
            >
              {whyChooseUs.map((item, index) => (
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
                  className="text-center tab:text-left group pt-6 md:pt-8 px-[27px] md:px-[46px] bg-[#11141A] relative flex flex-col justify-between overflow-y-hidden group rounded-[5px]"
                >
                  <ContentHeading text={item.name} />
                  <div
                    className={`w-full ${
                      whyChooseUsInView ? "translate-y-16" : ""
                    } group-hover:translate-y-8 transition-all duration-500`}
                  >
                    <ResponsiveImages
                      className="object-contain mx-auto transition-all duration-300"
                      src={item.dmpic}
                      style={{ width: item.width }}
                      sources={item.sources}
                      alt={item.alt}
                      loading={"lazy"}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ServicesSection>

        <ServicesSection>
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
                  Words of our Esteemed Clients
                </h3>
                <div className="w-[85%]">
                  <SubSectionSubHeading text="Here’s what our partners have to say about us " />
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

        <PrimaryCTA
          headings={["Schedule a Free Consultation Call Today"]}
          subheading="Experience How Our Solutions Can Propel Your Business Forward with a Consultation."
          secondaryButtonText="Request a custom quote"
          primaryButtonText="Schedule now"
          handleSecondaryButtonClick={() => navigate("/")}
          handlePrimaryButtonClick={() => {
            window
              ? (window.location.href = "https://calendly.com/archna_luthra")
              : "";
          }}
        />

        <ServicesSection blockXPadding={true}>
          <div className="flex flex-col" ref={blogsCallRef}>
            <div className="flex flex-col md:flex-row gap-7 lg:gap-9 md:justify-between w-full px-6 tab:px-12 lg:px-[112px] xl:px-[138px]">
              <div className="text-left">
                <ServicesHeadingAndSubheading
                  heading={["Build a Brand. Earn Trust."]}
                  subheading="Get tailored 3D modeling services for your business and change others' perception of your products and services."
                />
              </div>
              <div className="min-w-[151px] items-end flex">
                <ServicesPrimaryButton
                  buttonText="Get started now"
                  handleButtonClick={() => navigate("/contact-us")}
                />
              </div>
            </div>
            <div>
              <FadedCarousel carouselData={buildBrand} />
            </div>
          </div>
        </ServicesSection>

        <ServicesSection blockXPadding={true}>
          <HowWeWork
            heading="A Streamlined Process to Design Customized 3D Solutions"
            subHeading="We follow a time-tested process to craft high-impact 3D solutions that align with your project requirements."
            howWeWorkRef={howWeWorkRef}
            howWeWork={howWeWork}
          />
        </ServicesSection>

        {/* <div className="flex flex-col md:flex-row gap-[30px] tab:gap-[62px] md:gap-[200px] bg-primaryDarkBg px-6 md:px-[86px] lg:px-[112px] xl:px-[138px] py-[7vh] md:pb-[88px] md:pt-0">        
        <div className="grid lg:grid-cols-[40%_1fr] gap-[30px]">
          <div className="flex lg:hidden">
            <ServicesHeading headings={["Got questions? Get answers."]} />
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <ServicesHeading headings={["Got questions?", "Get answers"]} />
          </div>
          <Faqs1 faqs={faqs} />
        </div>
      </div> */}

        <ServicesSection>
          <div className="lg:grid lg:grid-cols-[40%_1fr] gap-[30px]">
            <div className="flex lg:hidden">
              <ServicesHeading
                element="h4"
                headings={["Quick Answers to Common Questions"]}
              />
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              <ServicesHeading
                element="h4"
                headings={["Quick Answers to", "Common Questions"]}
              />
            </div>
            <Faqs1 faqs={faqs} />
          </div>
        </ServicesSection>

        {/* Tanks section */}
        {/* <div className="flex justify-between dark:bg-[#273240] px-7 tab:px-0">
        <div className="dark:bg-[#273240] bg-[#F8F9FC] w-full tab:w-[35%] mx-auto">
          <div className="relative parallax2 overflow-x-hidden text-center">
            <p className="absolute hidden text-5xl top-12 left-28 text-white">Title1</p>
          </div>
          <div className="relative parallax3 overflow-x-hidden text-center">
            <p className="absolute hidden text-5xl top-12 left-28 text-white">Title2</p>
          </div>
          <div className="relative parallax4 overflow-x-hidden text-center">
            <p className="absolute hidden text-5xl top-12 left-28 text-white">Title3</p>
          </div>
          <div className="relative parallax5 overflow-x-hidden text-center mb-0">
            <p className="absolute hidden text-5xl top-12 left-28 text-white">Title4</p>
          </div>
          <h1 className="pt-custom text-center tab:text-left text-2xl lap:text-4xl dark:text-darkHeading">Section Title</h1>
          <div className="py-custom">
            {tanks.map((item,index)=>(
              <div className={`${index === 0 ? 'border-t-[1px] border-b-[1px]':'border-b-[1px]'} ${tank === index ? "h-[22rem] tab:h-[9.5rem] z-10" : "h-[3rem] z-40 hover:dark:bg-[#e5e6e823]"} overflow-y-hidden rounded-[5px] px-3 dark:bg-[#273240] relative transition-all ease-in duration-300`} onClick={()=>setTank(index)}>              
                <div className="flex justify-between items-center">
                  <h2 className={`pt-3 dark:text-darkHeading hover:text-white ${index === tank ? "bg-[#273240]" : ""} z-50 relative`}>{item.title}</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 pt-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div className={`overflow-y-hidden ${tank === index && delayed ? "translate-y-0 opacity-100":"-translate-y-32 opacity-0"} transition-transform ease-out -z-20 duration-300 relative`}>
                  <h3 className="pt-3 dark:text-darkSubHeading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>                  
                  <a className="text-primaryBlue flex py-3">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
                <img src={item.img} className={`tab:hidden w-[93%] h-[93%] object-contain ${tank === index ? "opacity-100" : "opacity-0"} transition-all ease-in mx-auto duration-300`} />
                </div>
              </div>
            ))}
          </div>          
        </div>
        <div className="hidden tab:flex w-[55%] relative items-center justify-center">
          {tanks.map((item,index)=>(
            <img src={item.img} className={`w-[70%] h-[70%] object-contain absolute ${tank === index ? "opacity-100" : "opacity-0"} translate-y-14 transition-all ease-in duration-300`} />
          ))}                
        </div>
      </div>       */}
        <BlogNewSection
          heading={["Explore the store of knowledge"]}
          subheading="Read our blogs and find out more about the 3D industry."
          buttonText="Explore Blogs"
          tag={["hash-homepage", "3d-blog"]}
          handleButtonClick={() => navigate("/blog")}
          callBlogs={callBlogs}
          callBlogsFooter={callBlogsFooter}
        />
        {/* <div className="min-h-[100vh] w-full mt-0 bg-green-500" ref={gridRef} ></div> */}
        {/* <div className="h-fit w-full mt-0" ref={gridRef} > */}
        <Footer footerBlogsCallRef={footerBlogsCallRef} />
        {/* </div> */}

        {/* <div className="bg-primaryDarkBg h-[300vh] flex flex-col justify-between"> */}
        {/* <motion.div                               
          className="scrolling-text bg-clip-text text-center mt-[70vh] h-[100vh]"
        >
          <motion.h1            
            // varients={headingVarient}
            className={`font-[800] font-tokyoZen uppercase text-[#B6E3FA] text-hero-sm tab:text-hero-md lg:text-hero-lg xl:text-hero-xl xxl:text-hero-xxl mx-auto w-fit`}
          >
            Keep scrolling to find something you might like...
            <div className="relative w-3/4 top-1/4 left-[10%] h-1/4 filter blur-[50px] shadow-[80px_80px_80px_80px] bg-[#015EF1] -z-10"></div>
          </motion.h1>
        </motion.div> */}
        {/* <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className=" bg-clip-text text-center mt-[30vh]"
        >
          <motion.h1            
            varients={headingVarient}
            className={`font-[800] text-white text-hero-sm tab:text-hero-md lg:text-hero-lg xl:text-hero-xl xxl:text-hero-xxl mx-auto w-fit`}
          >
            Keep scrolling to find something you might like...
          </motion.h1>
        </motion.div> */}
        {/* <div className='w-full h-full relative mt-0' style={{height: `calc(100vh - ${headerHeight}px)`}}>
          <RoboDoggo />
        </div> */}
        {/* </div>       */}
        {showModal && (
          <ModalHeroSection
            formHeading="Get a free sample"
            setShowModal={setShowModal}
          />
        )}

        {/* <div className="w-full h-[100vh] flex text-white bg-blue-500 mb-0 mt-[500px]">
        <div className='relative h-full w-full'>
     
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Body;
