import React from "react";
import ServicesHeading from "./ServicesHeading";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";
import ServicesSubHeading from "./ServicesSubHeading";

const SecondaryCTASection = (props) => {
  return (
    <ServicesSection>
      <div className="grid lg:grid-cols-2 justify-items-center gap-[70px] bg-[#11141A] rounded-[10px] py-[60px] lg:py-[70px] px-6 tab:px-8 lg:px-[80px]" ref={props?.videoRef}>
        <div className="flex flex-col tab:items-center lg:items-start justify-center gap-7 tab:gap-8 lg:gap-9">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col gap-3 tab:gap-4 text-left tab:text-center lg:text-left"
          >
            <ServicesHeading element="h4" headings={props.headings} />
            <ServicesSubHeading subheading={props.subheading} />
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
          className="w-full h-full"
        >
          {props.children}
        </motion.div>
      </div>
    </ServicesSection>
  );
};

export default SecondaryCTASection;
