import React from "react";
import ServicesHeading from "./ServicesHeading";
import { motion } from "framer-motion";
import useViewportWidth from "../hooks/useViewportWidth";

export default function PrimaryCTASection2(props) {
    const [ viewportWidth ] = useViewportWidth(); 
  
    return (
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
          <div className="flex flex-col justify-between items-center tab:items-center lg:items-center gap-9 z-30 relative">
            
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, delay: 0.5, amount: 0.25 }}
              className="flex flex-col gap-3 tab:gap-4 text-center tab:text-left"
            >
              <ServicesHeading element={props.element}  headings={props.headings} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            >
              <div className="whitespace-nowrap  gap-4 flex flex-col tab_mid:flex-row justify-start items-center text-[16px] text-ikarus-white min-h-12 w-full tab:w-fit lg:w-full">
                <div className="flex gap-[15px] w-full">
                  <div className="h-7 w-7">
                    <svg className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24.1302 11.9997C24.1302 18.4429 18.9068 23.6663 12.4635 23.6663C6.02022 23.6663 0.796875 18.4429 0.796875 11.9997C0.796875 5.55635 6.02022 0.333008 12.4635 0.333008C18.9068 0.333008 24.1302 5.55635 24.1302 11.9997ZM17.1656 8.46429C17.5073 8.80599 17.5073 9.36002 17.1656 9.70169L11.3322 15.535C10.9905 15.8767 10.4366 15.8767 10.0948 15.535L7.76149 13.2017C7.41979 12.86 7.41979 12.306 7.76149 11.9643C8.1032 11.6226 8.65722 11.6226 8.99893 11.9643L10.7135 13.6789L13.3208 11.0716L15.9282 8.46429C16.2699 8.12259 16.8238 8.12259 17.1656 8.46429Z" fill="#E4E4E4"/>
                    </svg>
                  </div>
                  <div>
                    <p>
                      {props.subPoints && props.subPoints[0]} 
                    </p>
                  </div>
                </div>
                <div className="flex gap-[15px] w-full">
                  <div className="h-7 w-7">
                    <svg className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24.1302 11.9997C24.1302 18.4429 18.9068 23.6663 12.4635 23.6663C6.02022 23.6663 0.796875 18.4429 0.796875 11.9997C0.796875 5.55635 6.02022 0.333008 12.4635 0.333008C18.9068 0.333008 24.1302 5.55635 24.1302 11.9997ZM17.1656 8.46429C17.5073 8.80599 17.5073 9.36002 17.1656 9.70169L11.3322 15.535C10.9905 15.8767 10.4366 15.8767 10.0948 15.535L7.76149 13.2017C7.41979 12.86 7.41979 12.306 7.76149 11.9643C8.1032 11.6226 8.65722 11.6226 8.99893 11.9643L10.7135 13.6789L13.3208 11.0716L15.9282 8.46429C16.2699 8.12259 16.8238 8.12259 17.1656 8.46429Z" fill="#E4E4E4"/>
                    </svg>
                  </div>
                  <div>
                    <p>
                    {props.subPoints && props.subPoints[1]} 
                    </p>
                  </div>
                </div>
                <div className="flex gap-[15px] w-full">
                  <div className="h-7 w-7">
                    <svg className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24.1302 11.9997C24.1302 18.4429 18.9068 23.6663 12.4635 23.6663C6.02022 23.6663 0.796875 18.4429 0.796875 11.9997C0.796875 5.55635 6.02022 0.333008 12.4635 0.333008C18.9068 0.333008 24.1302 5.55635 24.1302 11.9997ZM17.1656 8.46429C17.5073 8.80599 17.5073 9.36002 17.1656 9.70169L11.3322 15.535C10.9905 15.8767 10.4366 15.8767 10.0948 15.535L7.76149 13.2017C7.41979 12.86 7.41979 12.306 7.76149 11.9643C8.1032 11.6226 8.65722 11.6226 8.99893 11.9643L10.7135 13.6789L13.3208 11.0716L15.9282 8.46429C16.2699 8.12259 16.8238 8.12259 17.1656 8.46429Z" fill="#E4E4E4"/>
                    </svg>
                  </div>
                  <div>
                    <p>
                    {props.subPoints && props.subPoints[2]} 
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true, delay: 0.5, amount: 0.25 }}
              className="flex flex-col tab:flex-row lg:flex-col gap-3 lg:gap-6 w-full tab:w-fit lg:w-max"
            >
              <a
                href="/contact-us"
                rel="noopener noreferrer"
                // target="_blank"
                className="whitespace-nowrap flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] shadow-xs rounded-[5px] text-center text-ikarus-blue px-6 tab:px-9 py-[11px] lg:py-3 h-12 w-full tab:w-fit lg:w-full bg-white"
              >
                Request a custom quote
              </a>
            </motion.div>

          </div>
        </div>
    );
  };