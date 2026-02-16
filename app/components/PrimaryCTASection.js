import React, { useEffect, useState } from "react";
import ServicesHeading from "./ServicesHeading";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";
import { debounce } from "../utils/debounce";
import { Link } from "@remix-run/react";
import useViewportWidth from "../hooks/useViewportWidth";

const PrimaryCTASection = (props) => {
  const [ viewportWidth ] = useViewportWidth(); 

  return (
    <ServicesSection>
      <div className="rounded-[10px] py-[60px] lg:py-[70px] px-6 tab:px-8 lg:px-[80px] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {viewportWidth < 600 ? (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2306_28)">
                <rect width="100%" height="100%" rx="10" fill="white" />
                <rect
                  width="100%"
                  height="100%"
                  rx="10"
                  fill="url(#paint0_linear_2306_28)"
                />
                <circle
                  opacity="0.2"
                  cx="3"
                  cy="5"
                  r="188.5"
                  stroke="url(#paint1_linear_2306_28)"
                  strokeWidth="88"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2306_28"
                  x1="136"
                  y1="6.31809e-06"
                  x2="136"
                  y2="424"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#0052D4" />
                  <stop offset="1" stopColor="#2175BB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2306_28"
                  x1="275.678"
                  y1="-52.0319"
                  x2="-185"
                  y2="218.196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="white" stopOpacity="0.63" />
                  <stop offset="1" stopColor="white" stopOpacity="0.25" />
                </linearGradient>
                <clipPath id="clip0_2306_28">
                  <rect width="100%" height="100%" rx="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2306_28)">
                <rect width="100%" height="100%" rx="10" fill="white" />
                <rect
                  width="100%"
                  height="100%"
                  rx="10"
                  fill="url(#paint0_linear_2306_28)"
                />
                <circle
                  opacity="0.2"
                  cx="3.5"
                  cy="16.5"
                  r="300"
                  stroke="url(#paint1_linear_2306_28)"
                  strokeWidth="150"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2306_28"
                  x1="136"
                  y1="6.31809e-06"
                  x2="136"
                  y2="424"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#0052D4" />
                  <stop offset="1" stopColor="#2175BB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2306_28"
                  x1="275.678"
                  y1="-52.0319"
                  x2="-185"
                  y2="218.196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="white" stopOpacity="0.63" />
                  <stop offset="1" stopColor="white" stopOpacity="0.25" />
                </linearGradient>
                <clipPath id="clip0_2306_28">
                  <rect width="100%" height="100%" rx="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center tab:items-start lg:items-center gap-9 z-30 relative">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col gap-3 tab:gap-4 text-center tab:text-left"
          >
            <ServicesHeading element={props.element}  headings={props.headings} />
            <p className="text-[16px] leading-[24px] tab:text-[18px] lg:font-light text-white">
              {props.subheading}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="flex flex-col tab:flex-row lg:flex-col gap-3 lg:gap-6 w-full tab:w-fit lg:w-max"
          >
            <Link
              to="/contact-us"
              className="whitespace-nowrap flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] border-[1px] shadow-xs rounded-[5px] text-center text-white px-6 tab:px-9 py-[11px] lg:py-3 h-12 w-full tab:w-fit lg:w-full"
            >
              Request a custom quote
            </Link>
            <a
              href="https://calendly.com/archna_luthra"
              rel="noopener noreferrer"
              target="_blank"
              className="whitespace-nowrap flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] shadow-xs rounded-[5px] text-center text-ikarus-blue px-6 tab:px-9 py-[11px] lg:py-3 h-12 w-full tab:w-fit lg:w-full bg-white"
            >
              Schedule Now
            </a>
          </motion.div>
        </div>
      </div>
    </ServicesSection>
  );
};

export default PrimaryCTASection;
