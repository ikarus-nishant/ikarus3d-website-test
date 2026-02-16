import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSecondaryButton = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, delay: 0.5, amount: 0.25 }}
      className="h-12 w-full tab:w-fit"
    >
      <Link
        className="whitespace-nowrap flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] border-[1px] shadow-xs rounded-[5px] text-center text-white px-6 tab:px-9 py-[11px] lg:py-3 h-full w-full tab:w-fit"
        to={props.handleButtonClick}
      >
        {props.buttonText}
      </Link>
    </motion.div>
  );
};

export default ServicesSecondaryButton;
