import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import PrimaryButton from "./primaryButton";
import HeroSectionHeading from "./text/HeroSectionHeading";
import HeroSectionSubHeading from "./text/HeroSectionSubHeading";
import getBrowserEnv from "../../app/utils/browserEnv";
export default function LPHeroSection() {
    const env = getBrowserEnv();
    const heroRef = useRef(null);
    const mobileSofaRef = useRef(null);
    const [isSafari,setIsSafari] = useState(false)

    useEffect(()=>{
        console.log(navigator.userAgent)
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
      })

  return (
    <div className="bg-primaryDarkBg h-fit" ref={heroRef}>
          <div
            className="flex flex-col md:flex-row gap-8 tab:gap-[100px] md:gap-[50px] xl:gap-[50px] justify-between lap:min-w-[600px] h-fit"
            ref={mobileSofaRef}
          >
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, delay: 0.5, amount: 0.25 }}
              className="flex flex-col tab:items-center md:items-start justify-start tab:justify-center md:justify-start w-full md:mr-6 md:ml-0 z-10 md:min-w-[390px] md:max-w-[620px]"
            >
              <HeroSectionHeading
                headings={[
                  "Engage your Audience with our precise 3D Models",
                ]}
              />
              <div className="mt-3 tab:mt-4 w-[85%] xl:min-w-[740px] tab:w-[74%]">
                <HeroSectionSubHeading
                  subheadings={[
                    "Enhance business capabilities by tapping into the myriad of benefits 3D modeling has to offer",
                  ]}
                />
              </div>
              <div className="flex flex-col tab:flex-row justify-center md:justify-start gap-4 md:gap-3 xl:gap-4 mt-7 tab:mt-8">
                {/* <button
                  onClick={() => setShowModal(true)}
                  className="h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]"
                  style={{ color: "#fff", borderColor: "#fff" }}
                >
                  Get a free sample
                </button> */}
                <PrimaryButton
                  link="/contact-us"
                  content="Talk to us"
                  rel="noopener noreferrer"
                  // target="_blank"
                />
              </div>
            </motion.div>
          </div>
          <div className="absolute flex h-full top-0 right-0 w-full">
          {isSafari
          ?<div style={{background:`url("${env.CDN_BASE_URL}/Videos/lp/compress-Compilation_v3.mp4")`, backgroundPosition:'center', backgroundSize:"cover"}} className="absolute h-full w-full left-0"><div
          style={{
            background:
              "linear-gradient(253deg, rgba(0, 0, 0, 0.00) 25.55%, #0A0C10 72.97%)",
          }}
          className="absolute top-0 left-0 h-full w-full z-1"
        /></div>
          :<>
            <video
              autoPlay
              loop
              muted
              width={"2560px"}
              height={"10"}
              className="object-cover"
            >
              <source src={`${env.CDN_BASE_URL}/Videos/lp/compress-Compilation_v3.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
          }
          <div
            style={{
              background:
                "radial-gradient(farthest-corner at 70% 15%,transparent 0%,#0A0C10 70%)",
                // "linear-gradient(253deg, rgba(0, 0, 0, 0.00) 25.55%, #0A0C10 72.97%)",
            }}
            className="absolute top-0 left-0 h-full w-full z-1"
          />
          <div
            style={{
              background:
                // "radial-gradient(farthest-corner at 70% 15%,transparent 0%,#0A0C10 70%)",
                "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 50%, #0A0C10 97%)",
            }}
            className="hidden xxl:block absolute top-0 right-0 h-full w-full z-1 rotate-180"
          />
          </div>
        </div>
  )
}
