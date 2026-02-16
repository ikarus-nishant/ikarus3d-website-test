import React, { useState } from "react";
import ServiceSectionHeading from "./ServiceSectionHeading";
import ServiceSectionText from "./ServiceSectionText";
import { motion } from "framer-motion";

const Faqs1 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, delay: 0.5, amount: 0.25 }}
      className="flex flex-col"
    >
      {props.faqs.map((faq, index) => {
        if (index === props.faqs.length - 1) {
          return (
            <div key={`faq-${index}`} className="">
              <FaqContainer
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0 ? true : false}
              />
            </div>
          );
        } else {
          return (
            <div key={`faq-${index}`} className="flex flex-col gap-[2px]">
              <FaqContainer
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0 ? true : false}
              />
              <div className="w-full overflow-hidden">
                <svg
                  width="100%"
                  height="1"
                  viewBox="0 0 841 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="841"
                    y1="0.5"
                    y2="0.5"
                    stroke="url(#paint0_linear_1949_41)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1949_41"
                      x1="6.50003"
                      y1="0"
                      x2="841"
                      y2="9.27524e-09"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#252729" stopOpacity="0" />
                      <stop offset="0.494792" stopColor="#252729" />
                      <stop offset="1" stopColor="#252729" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          );
        }
      })}
    </motion.div>
  );
};

const FaqContainer = (props) => {
  const [showAnswer, setShowAnswer] = useState(props.isOpen);

  return (
    <div className="flex flex-col py-6 lg:px-6">
      <div className="grid grid-cols-[1fr_32px] gap-2 w-full">
        <div>
          <ServiceSectionHeading heading={props.question} />
        </div>
        {showAnswer ? (
          <div
            className="flex items-center justify-center cursor-pointer h-8 w-8 min-h-8 min-w-8 bg-[#252729] rounded-full"
            onClick={() => setShowAnswer(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1348_283)">
                <path
                  d="M18 15L12 9L6 15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1348_283">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(24 24) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : (
          <div
            className="flex items-center justify-center cursor-pointer h-8 w-8 min-h-8 min-w-8 bg-[#252729] rounded-full"
            onClick={() => setShowAnswer(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1348_289)">
                <path
                  d="M18 9L12 15L6 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1348_289">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </div>
      <div
        className={`${
          showAnswer ? "grid-rows-[1fr] mt-3 lg:mt-4" : "grid-rows-[0fr]"
        } grid transition-all ease-in-out duration-500`}
      >
        <div className="grid grid-cols-[1fr_32px] gap-2 text-[#B4B4B4] text-[16px] leading-[24px] xl:text-[18px] lg:font-light overflow-hidden">
          {props.answer}
        </div>
      </div>
    </div>
  );
};

export default Faqs1;
