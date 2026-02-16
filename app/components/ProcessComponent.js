import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SubSectionHeading from "./text/SubSectionHeading";
import SubSectionSubHeading from "./text/SubSectionSubHeading";
import getBrowserEnv from "../utils/browserEnv";

const ProcessComponent = (props) => {
  const env = getBrowserEnv();
  const firstColRef = useRef();
  const secondColRef = useRef();
  const containerRef = useRef();
  const [firstColHt, setFirstColHt] = useState(0);
  const [secondColHt, setSecondColHt] = useState(0);
  const [firstColHover, setFirstColHover] = useState(false);
  const [secondColHover, setSecondColHover] = useState(false);
  const [containerPaddingTop, setContainerPaddingTop] = useState(0);

  useEffect(() => {
    if (firstColRef.current) setFirstColHt(firstColRef.current.clientHeight);
    if (secondColRef.current) setSecondColHt(secondColRef.current.clientHeight);
  }, []);

  const setPaddingTop = () => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const padding = parseInt(width * 0.087);
      setContainerPaddingTop(padding);
    }
  };

  useEffect(() => {
    setPaddingTop();
  }, [containerRef.current]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPaddingTop();
    });
    return () => {
      window.removeEventListener("resize", setPaddingTop);
    };
  }, []);

  return (
    <div
      ref={props.howWeWorkRef}
      className="bg-primaryDarkBg relative flex flex-col gap-12 tab:gap-0 items-center tab:items-start tab:flex-row tab:justify-between"
      style={{ paddingTop: `${containerPaddingTop + 50}px` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay: 0.5, amount: 0.25 }}
        className="absolute w-full h-[60%] top-0"
        ref={containerRef}
      >
        <img
          // src={`/temp/howWeWorkBg4.svg`}
          alt="blue background image"
          src={`${env.CDN_BASE_URL}/miscellaneous/howWeWorkBg.svg`}
          className="w-full sticky top-0"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay: 1.5, amount: 0.25 }}
        className="flex flex-col gap-3 tab:gap-4 tab:sticky w-full tab:w-[40%] md:w-[50%] tab:top-[200px] md:top-[220px] h-fit px-6 tab:px-0 tab:mr-0 tab:ml-12 md:ml-[86px] lg:ml-[112px] xl:ml-[138px] z-20"
      >
        <div className="w-full md:w-[80%]">
          <SubSectionHeading
            element="h3"
            text={props.heading}
          />
        </div>
        <div className="w-full md:w-[85%]">
          <SubSectionSubHeading text={props.subHeading} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay: 1.5, amount: 0.25 }}
        className="w-auto tab:w-[60%] md:w-[50%] xl:w-[72%] grid grid-cols-2 justify-end gap-6 mx-6 tab:mr-12 md:mr-[86px] lg:mr-[112px] xl:mr-[138px] z-10"
      >
        <motion.div
          style={secondColHover ? { maxHeight: firstColHt } : {}}
          className="tab:mt-20 xl:mt-24 flex flex-col gap-6 tab:gap-20 xl:gap-[100px]"
          ref={firstColRef}
        >
          {/* style={{ y: y1 }}> */}
          {props.howWeWork.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    setFirstColHover(true);
                    setSecondColHover(false);
                  }}
                  className={`touch-text-select-none h-[162px] hover:h-auto group flex flex-col xl:gap-3 justify-end p-4 tab:p-6 md:py-10 md:pb-8 md:px-8 xl:pl-12 xl:pr-9 xl:pb-9 xl:pt-12 rounded-[10px] bg-[#11141A] group transition-colors duration-300 hover:bg-[url('../../public/images/howWeWorkCardBg.svg')] bg-cover hover:md:h-[290px] md:h-[290px] hover:xl:h-[384px] xl:h-[384px]`}
                >
                  <p className="w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1] bg-clip-text text-transparent group-hover:from-white group-hover:to-white text-[41px] md:text-[48px] xl:text-[75px] xl:font-[800] font-[700] font-frankRuhlLibre leading-[48px] md:leading-[52px] -tracking-[0.471px] md:-tracking-[1px] xl:leading-[84px] xl:-tracking-[1px] transition-all duration-300">
                    0{index + 1}
                  </p>
                  <p className="break-words mt-[10px] text-white text-[16px] tab:text-[18px] leading-[24px] tab:leading-6 -tracking-[0.16px] md:text-[20px] xl:text-[25px] group-hover:xl:text-[21px] xl:leading-[32px] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-500">
                    {item.name}
                  </p>
                  <div className="quick-example transition-all duration-300 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] mt-0 group-hover:mt-2">
                    <div>
                      <p className="text-white/90 text-[14px] tab:text-[16px] xl:text-[18px] leading-[20px] tab:leading-[24px] -tracking-[0.1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </motion.div>
        <motion.div
          className="touch-text-select-none md:-mt-1 flex flex-col gap-6 tab:gap-20 xl:gap-[100px]"
          style={firstColHover ? { maxHeight: secondColHt } : {}}
          ref={secondColRef}
        >
          {props.howWeWork.map((item, index) => {
            if (index % 2 !== 0)
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    setSecondColHover(true);
                    setFirstColHover(false);
                  }}
                  className={`h-[162px] hover:h-auto group flex flex-col xl:gap-3 justify-end p-4 tab:p-6 md:py-10 md:pb-8 md:px-8 xl:pl-12 xl:pr-9 xl:pb-9 xl:pt-12 rounded-[10px] bg-[#11141A] group transition-colors duration-300 hover:bg-[url('../../public/images/howWeWorkCardBg.svg')] bg-cover hover:md:h-[290px] md:h-[290px] hover:xl:h-[384px] xl:h-[384px]`}
                >
                  <p className="w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1] bg-clip-text text-transparent group-hover:from-white group-hover:to-white text-[41px] md:text-[48px] xl:text-[75px] xl:font-[800] font-[700] font-frankRuhlLibre leading-[48px] md:leading-[52px] -tracking-[0.471px] md:-tracking-[1px] xl:leading-[84px] xl:-tracking-[1px] transition-all duration-300">
                    0{index + 1}
                  </p>
                  <h2 className="break-words mt-[10px] text-white text-[16px] tab:text-[18px] leading-[18px] tab:leading-6 -tracking-[0.16px] md:text-[20px] xl:text-[25px] group-hover:xl:text-[21px] xl:leading-[32px] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-500">
                    {item.name}
                  </h2>
                  <div className="quick-example transition-all duration-300 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] mt-0 group-hover:mt-2">
                    <div>
                      <h3 className="text-white/90 text-[14px] tab:text-[16px] xl:text-[18px] leading-[20px] tab:leading-[24px] -tracking-[0.1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </h3>
                    </div>
                  </div>
                </div>
              );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcessComponent;
