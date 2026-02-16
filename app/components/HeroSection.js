import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalHeroSection from "./ModalHeroSection";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesSecondaryLink from "./ServicesSecondaryLink";

const HeroSection = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 relative px-6 tab:px-12 md:px-[86px] lg:px-[112px] xl:px-[138px] pt-9 pb-[60px] tab:pt-[60px] tab:pb-[120px] lg:py-[160px] gap-8 tab:gap-20 md:gap-[100px] xl:gap-[50px]">
        <div
          className="flex flex-col justify-start gap-7 tab:gap-8 lg:gap-9 w-full"
          style={{ zIndex: props.zIndex }}
        >
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col gap-3 tab:gap-4 text-left tab:text-center md:text-left "
          >
            <div
              className={`font-semibold text-primaryWhite text-[32px] leading-[38px] tab:text-[41px] tab:leading-[46px] lg:text-[40px] lg:leading-[64px] xl:text-[52px]`}
            >
              <h1>
                {props.headings.map((heading, index) => {
                  if (index === props.headings.length - 1)
                    return (
                      <React.Fragment key={`heading-${index}`}>
                        {heading}
                      </React.Fragment>
                    );
                  else {
                    return (
                        <React.Fragment key={`heading-${index}`}>
                          {heading}
                          <br />
                        </React.Fragment>
                    );
                  }
                })}
              </h1>
            </div>
            <p className="text-secondaryWhite lg:font-light text-[18px] leading-[28px] tab:text-[21px] xl:text-[23px] xl:leading-8">
              {props.content}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col tab:flex-row justify-center md:justify-start gap-4 md:gap-3"
          >
            <ServicesSecondaryLink
              buttonText="Get a custom quote"
              handleButtonClick={`/${props.parentHeading}/#contact-us`}
            />
            <ServicesPrimaryButton
              buttonText={`${props.buttonText}`}
              handleButtonClick={() => setShowModal(true)}
            />
          </motion.div>
        </div>
        {props.children}
      </div>
      {showModal && (
        <ModalHeroSection
          formHeading={props.formHeading}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};
export default HeroSection;
