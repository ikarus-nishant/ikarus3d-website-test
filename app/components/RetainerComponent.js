import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SubSectionHeading from "./text/SubSectionHeading";
import RetainerSectionModal from "./RetainerSectionModal";
import ResponsiveImages from "./ResponsiveImages";
import getBrowserEnv from "~/utils/browserEnv";

const env = getBrowserEnv();

const RetainerComponent = (props) => {
  const ref = useRef();

  const { scrollY } = useScroll({ cotainer: props.ref });
  const [distFromTop, setDistFromTop] = useState(0);
  const [ht, setHt] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const y1 = useTransform(
    scrollY,
    [distFromTop * 0.28, distFromTop * 0.28 + ht * 2.5],
    ["-25%", "0%"]
  );
  const y2 = useTransform(
    scrollY,
    [distFromTop * 0.28, distFromTop * 0.28 + ht * 3],
    ["20%", "-10%"]
  );

  const checkpoints = [
    "Competitive Pricing",
    "Seamless Client Onboarding",
    "Fast Turnarounds",
    "Extensive Technical Expertise",
  ];

  const retainerReel = [                       
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel1_myuhnk/retainerReel1_myuhnk_c_scale,w_1024.webp`),
      sources:[
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel1_myuhnk/retainerReel1_myuhnk_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel1_myuhnk/retainerReel1_myuhnk_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel1_myuhnk/retainerReel1_myuhnk_c_scale,w_725.webp`)
      ],
      alt:"Lounge Funiture 3D Model"
    },
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel2_j22qby/retainerReel2_j22qby_c_scale,w_1024.webp`),
      sources:[
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel2_j22qby/retainerReel2_j22qby_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel2_j22qby/retainerReel2_j22qby_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel2_j22qby/retainerReel2_j22qby_c_scale,w_815.webp`)
      ],
      alt:"Classic 3-seater Sofa 3D Model"
    },
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel3_btalp4/retainerReel3_btalp4_c_scale,w_1024.webp`),
      sources:[
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel3_btalp4/retainerReel3_btalp4_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel3_btalp4/retainerReel3_btalp4_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel3_btalp4/retainerReel3_btalp4_c_scale,w_674.webp`)
      ],
      alt:"Office Chair 3D Model"
    },
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel4_dm0fct/retainerReel4_dm0fct_c_scale,w_1024.webp`),
      sources: [
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel4_dm0fct/retainerReel4_dm0fct_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel4_dm0fct/retainerReel4_dm0fct_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel4_dm0fct/retainerReel4_dm0fct_c_scale,w_526.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel4_dm0fct/retainerReel4_dm0fct_c_scale,w_724.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel4_dm0fct/retainerReel4_dm0fct_c_scale,w_888.webp`)
      ],
      alt:"Single Seater Sofa 3D Model"
    }    
  ];

  const retainerReel2 =[
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel5_nokkia/retainerReel5_nokkia_c_scale,w_1024.webp`),
      sources:[
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel5_nokkia/retainerReel5_nokkia_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel5_nokkia/retainerReel5_nokkia_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel5_nokkia/retainerReel5_nokkia_c_scale,w_596.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel5_nokkia/retainerReel5_nokkia_c_scale,w_931.webp`)
      ],
      alt:"Single Seater Sofa 3D Model"
    },
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_1024.webp`),
      sources:[
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_449.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_642.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_759.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel6_uxyyuq/retainerReel6_uxyyuq_c_scale,w_881.webp`),
      ],
      alt:"Glasses 3D Model"
    },
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel7_lgouxk/retainerReel7_lgouxk_c_scale,w_1024.webp`),
      sources:[
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel7_lgouxk/retainerReel7_lgouxk_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel7_lgouxk/retainerReel7_lgouxk_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel7_lgouxk/retainerReel7_lgouxk_c_scale,w_575.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel7_lgouxk/retainerReel7_lgouxk_c_scale,w_727.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel7_lgouxk/retainerReel7_lgouxk_c_scale,w_862.webp`)
      ],
      alt:"Women Clothes 3D Model"
    },
    {
      img:encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel8_rqmqzj/retainerReel8_rqmqzj_c_scale,w_1024.webp`),
      sources: [
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel8_rqmqzj/retainerReel8_rqmqzj_c_scale,w_1024.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel8_rqmqzj/retainerReel8_rqmqzj_c_scale,w_200.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel8_rqmqzj/retainerReel8_rqmqzj_c_scale,w_621.webp`),
        encodeURI(`${env.CDN_BASE_URL}/Responsive Images/Home page/Fold 5- Retainer fold/Breakpoint webp/retainerReel8_rqmqzj/retainerReel8_rqmqzj_c_scale,w_868.webp`)      
      ],
      alt:"Shoes 3D Model"
    }    
  ];             

  const getCheckPoint = (text, index) => {
    return (
      <div className="flex gap-2 md:gap-4 w-fit" key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <path
            d="M12.1718 23.1427C14.9726 23.1427 17.5082 22.0075 19.3437 20.172C21.1791 18.3366 22.3144 15.801 22.3144 13.0002C22.3144 10.1994 21.1791 7.66381 19.3437 5.82834C17.5082 3.99291 14.9726 2.85767 12.1718 2.85767C9.37107 2.85767 6.83544 3.99291 4.99997 5.82834C3.16454 7.66381 2.0293 10.1994 2.0293 13.0002C2.0293 15.801 3.16454 18.3366 4.99997 20.172C6.83544 22.0075 9.37107 23.1427 12.1718 23.1427Z"
            fill="white"
          />
          <path
            d="M8.11426 13L11.157 16.0428L17.2425 9.95728"
            stroke="#0153D3"
            strokeWidth="2.02851"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-[16px] leading-[24px] tab:text-[16px] lg:font-[600] text-white">
          {text}
        </h3>
      </div>
    );
  };

  useEffect(() => {
    if (ref.current) {
      setDistFromTop(ref.current.offsetTop);
      setHt(ref.current.clientHeight);
    }
  }, []);

  return (
    <>
      {showModal && <RetainerSectionModal setShowModal={setShowModal} />}
      <div
        ref={ref}
        className="relative overflow-hidden flex flex-col md:flex-row justify-between rounded-[10px] pt-[60px] md:pb-[60px] lg:py-[70px] px-6 tab:px-8 lg:px-[80px] bg-gradient-to-r from-[#0052D4] to-[#2175BB]"
      >
        <div className="md:w-[55%] z-10">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col gap-3 tab:gap-4 text-left"
          >
            <SubSectionHeading element="h3" text="Why settle for freelance? Connect with elite 3D artists today!" />
            <span className="mt-3 tab:mt-5 md:mt-0 text-[16px] leading-[24px] xl:text-[18px] lg:font-light text-white/80 transition-all duration-300">
              Merge cost-efficiency with brilliance. Let our skilled 3D artists
              redefine your projects, combining world-class quality and
              affordability without the in-house overheads.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="mt-[30px] grid grid-cols-1 tab:grid-cols-2 gap-x-[32px] md:gap-x-[24px] gap-y-[28px] md:gap-y-[24px] w-fit"
          >
            {checkpoints.map((item, index) => getCheckPoint(item, index))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="mt-12 flex flex-col tab:flex-row gap-3 md:w-[85%]"
          >
            {/* <Link
              to="/contact-us"
              className="h-fit w-full tab:w-fit xl:h-12 flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] border-white tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px] text-white bg-transparent"
            >
              Request a custom qoute
            </Link> */}
            {/* <SecondaryButton content="Request a custom quote" />                 */}
            <button
              onClick={() => setShowModal(true)}
              className="h-fit w-full tab:w-fit xl:h-12 flex bg-white text-[#0153D2] text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] xl:font-[400] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]"
            >
              Let&rsquo;s Get Started
            </button>
          </motion.div>
        </div>
        <div className="-ml-[10rem] mt-12 tab:mt-20 md:ml-0 md:mt-0 md:absolute md:right-[-40%] bottom-0 w-fit md:w-full flex flex-col gap-3 md:gap-6 retainer-reel-container overflow-hidden">
          <motion.div style={{ x: y1 }} className="flex gap-3 md:gap-6 w-fit">
            {retainerReel2.map((item, index) => (
              <div className="w-60 h-60 md:w-64 md:h-64" key={index}>
                <ResponsiveImages
                  alt={item.alt}
                  src={item.img}
                  sources={item.sources}
                  className="h-full w-full object-cover retainer-image"
                />
                {/* <img
                  src={item}
                  className="h-full w-full object-cover retainer-image"
                /> */}
              </div>
            ))}
          </motion.div>
          <motion.div style={{ x: y2 }} className="flex gap-3 md:gap-6 w-fit">
            {retainerReel.map((item, index) => (
              <div className="w-60 h-60 md:w-64 md:h-64" key={index}>
                <ResponsiveImages
                  src={item.img}
                  alt={item.alt}
                  sources={item.sources}
                  className="h-full w-full object-cover retainer-image"
                />
                {/* <img
                  src={item}
                  className="h-full w-full object-cover retainer-image"
                /> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RetainerComponent;
