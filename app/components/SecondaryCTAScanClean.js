import React from "react";
import ServicesHeading from "./ServicesHeading";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";

const SecondaryCTAScan = (props) => {
  return (
    <ServicesSection>
      <div className="grid lg:grid-cols-2 justify-items-center gap-[70px] bg-[#11141A] rounded-[10px] py-[60px] lg:py-[70px] px-6 tab:px-8 lg:px-[80px]">
        <div className="flex flex-col tab:items-center lg:items-start justify-center gap-7 tab:gap-8 lg:gap-9">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col gap-3 tab:gap-4 text-left tab:text-center lg:text-left"
          >
            <ServicesHeading element="h4" headings={props.headings} />
            <p className="text-[16px] leading-[24px] tab:text-[18px] lg:font-light text-white">
              {props.subheading}
            </p>
          </motion.div>
          <div>
            <ServicesPrimaryButton
              buttonText={props.primaryButtonText}
              handleButtonClick={props.handlePrimaryButtonClick}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, delay: 0.5, amount: 0.25 }}
          className="w-fit h-fit"
        >
          <div className="relative md:w-1/2 md:h-1/2 md:mx-auto lg:mx-0 lg:w-full lg:h-full">
            <img src={props.imageSrc} alt={props.alt} className="rounded-[10px] -z-20 md:mx-auto w-full h-full" />
            <div className="cursor-default absolute floating-faster bg-white xs:px-[10px] xs:py-[8px] text-[80%] tab:text-[100%] tab:px-[12px] tab:py-[12px] rounded-[5px] xs:right-[20%] tab:right-[12%] lg:right-[3%] lap:right-[2%] top-[50%] xxl:right-[12%] z-40">Captured Intricacies</div>
            <div className="cursor-default absolute floating bg-white xs:px-[10px] xs:py-[8px] text-[80%] tab:text-[100%] w-fit whitespace-nowrap tab:px-[12px] tab:py-[12px] rounded-[5px] xs:right-[40%] tab:right-[40%] lg:right-[41%] top-[80%] z-40">Texture Accuracy</div>
          </div>
        </motion.div>
      </div>
    </ServicesSection>
  );
};

export default SecondaryCTAScan;
