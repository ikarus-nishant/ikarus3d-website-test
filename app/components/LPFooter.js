import React, { useState, useRef } from "react";
import ThankYou from "./thankYou";
import getBrowserEnv from "../utils/browserEnv";
import ReCAPTCHA from "react-google-recaptcha";
import LeafletMap from "./leafletMap";
import { useInView } from "react-intersection-observer";
import ServicesHeading from "./ServicesHeading";
import ServicesSection from "./ServicesSection";
import ServiceSectionText from "./ServiceSectionText";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
const env = getBrowserEnv();

export default function LPFooter(props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState();
    const {
      ref: footerRef,
      inView: footerInView,
      entry: footerEntry,
    } = useInView();
    const [responseModalHeading, setResponseModalHeading] = useState();
    const [alertMessage, setAlertMessage] = useState("");
    const [statusCode, setStatusCode] = useState(false);
    const captchaRef = useRef(null);
  
    const emailHandler = (event) => {
      if (!event.target.value) {
        setEmailError("Email is Required");
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
      ) {
        setEmailError("Enter valid Email.");
      } else {
        setEmailError(null);
      }
      setEmail(event.target.value);
    };
  
    const handelFormSubmission = async () => {
      try {
        const captchaToken = await captchaRef.current.executeAsync();
        const utmInfo = Cookies.get("utm");
        captchaRef.current.reset(); // we are resetting this because in case after submitting the captcha there's some error at the server, so the reCaptcha here is ready for another verification test.
        const data = await fetch(env.NEWSLETTER_API, {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
          },
          body: JSON.stringify({
            email: email,
            updateEnabled: true,
            captchaToken: captchaToken,
            ...JSON.parse(utmInfo),
          }),
        });
  
        if (data.status === 201) {
          setResponseModalHeading("Appreciate your subscription!");
          setAlertMessage(
            "Look out for Iris Newsletter in your inbox for the latest in the 3D industry."
          );
          setStatusCode(201);
        } else if (data.status === 429 || data.status === 409) {
          setResponseModalHeading("You’re already subscribed to our newsletter.");
          setAlertMessage(
            "Sit tight while we pull only the most relevant content, just for you."
          );
          setStatusCode(429);
        } else if (data.status === 403) {
          setResponseModalHeading("Uh oh!");
          setAlertMessage(
            "You seem to be a bot. If you're not a bot, give it another shot."
          );
          setStatusCode(403);
        }
      } catch (e) {
        setResponseModalHeading("Sorry! Our system is temporarily down.");
        setStatusCode(503);
        setAlertMessage("Please try again in a few minutes.");
      } finally {
        setEmail("");
      }
    };
  
    return (
      <div className="footerparallax relative" ref={footerRef}>
        {footerInView && (
          <div className="absolute opacity-0" id="capt">
            <ReCAPTCHA sitekey={env.SITE_KEY} ref={captchaRef} size="invisible" />
          </div>
        )}
        {/* <ServicesSection>
          <div
            className="flex flex-col-reverse gap-8 tab:grid tab:grid-cols-[40%_1fr] lg:gap-[150px]"
            ref={props.footerBlogsCallRef}
          >
            <div>
              {footerInView && (
                <div className="w-full h-[200px] tab:h-full rounded-[10px] overflow-hidden">
                  <LeafletMap />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-[48px]">
              <ServicesHeading element="h5" headings={["Find Us Here!"]} />
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                  className="grid grid-cols-[32px_1fr] gap-y-[24px] gap-x-[15px]"
                >
                  <div className="rounded-full h-fit w-fit bg-[#11141A] p-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61108 10.2037C8.19996 9.92897 7.87953 9.53852 7.69031 9.08171C7.50109 8.62489 7.45158 8.12223 7.54804 7.63727C7.64451 7.15232 7.88261 6.70686 8.23224 6.35723C8.58187 6.0076 9.02733 5.7695 9.51228 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625Z"
                        fill="#1D75BD"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://goo.gl/maps/RSPPUaGXxE3KCoNx7"
                    className="text-white hover:dark:text-primaryBlue opacity-90 text-[14px] tab:text-[16px] lg:font-medium leading-[30px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    3rd floor, H & H Business Arcade, Plot D-141, Industrial Area,
                    Phase 7, Mohali, Punjab, India - 160055
                  </a>
                  <div className="rounded-full h-fit w-fit bg-[#11141A] p-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1348_546)">
                        <path
                          d="M18.3327 6.2793V14.1668C18.3327 14.8045 18.0891 15.4181 17.6516 15.882C17.2141 16.346 16.6159 16.6252 15.9793 16.6626L15.8327 16.6668H4.16602C3.52834 16.6668 2.91475 16.4232 2.4508 15.9857C1.98684 15.5483 1.70759 14.95 1.67018 14.3135L1.66602 14.1668V6.2793L9.53685 11.5268L9.63352 11.5818C9.74744 11.6375 9.87256 11.6664 9.99935 11.6664C10.1261 11.6664 10.2513 11.6375 10.3652 11.5818L10.4618 11.5268L18.3327 6.2793Z"
                          fill="#1D75BD"
                        />
                        <path
                          d="M15.8329 3.33398C16.7329 3.33398 17.5221 3.80898 17.9621 4.52315L9.99961 9.83148L2.03711 4.52315C2.24605 4.18379 2.53312 3.89932 2.87437 3.69347C3.21561 3.48762 3.60114 3.36636 3.99878 3.33982L4.16628 3.33398H15.8329Z"
                          fill="#1D75BD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1348_546">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <a
                    href="mailto:hello@ikarus3d.com"
                    className="text-white hover:dark:text-primaryBlue opacity-90 text-[14px] tab:text-[16px] lg:font-medium leading-[30px] tracking-[0.08px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>For Sales queries - </span>{" "}
                    <span>info@ikarus3d.com</span>
                  </a>
                  <div className="rounded-full h-fit w-fit bg-[#11141A] p-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.9602 10.9399L17.8012 11.7699C17.6542 12.5459 16.9272 13.0679 16.1042 12.9879L14.4672 12.8299C13.7532 12.7609 13.2242 12.2399 13.0002 11.4999C12.6962 10.4949 12.5002 9.74992 12.5002 9.74992C11.7107 9.41153 10.8592 9.24125 10.0002 9.24992C8.98624 9.24992 8.26224 9.46492 7.50024 9.74992C7.50024 9.74992 7.29624 10.4959 7.00024 11.4999C6.80224 12.1699 6.49624 12.7569 5.79724 12.8269L4.16924 12.9909C3.7728 13.029 3.37533 12.9295 3.04357 12.7092C2.7118 12.4888 2.46593 12.1611 2.34724 11.7809L2.09924 10.9519C1.97633 10.5556 1.96516 10.133 2.06696 9.73074C2.16877 9.32847 2.3796 8.96208 2.67624 8.67192C4.10124 7.28792 6.66624 6.50792 9.99224 6.50392C13.3242 6.49992 15.5862 7.27592 17.1542 8.65992C17.8142 9.24192 18.1172 10.1179 17.9602 10.9399Z"
                        fill="#1D75BD"
                      />
                    </svg>
                  </div>
                  <a
                    className="text-white hover:dark:text-primaryBlue opacity-90 text-[14px] tab:text-[16px] lg:font-medium leading-[30px] tracking-[0.08px]"
                    href="tel:+91%209501772123"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help Desk - +(91) 95017-72123
                  </a>
                </motion.div>
                <a
                  className="text-white opacity-90 text-[16px] tab:text-[18px] font-medium lg:font-semibold leading-[30px] tracking-[0.08px]"
                  // className="hover:text-primaryBlue w-max"
                  href="https://services.gst.gov.in/services/searchtp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"( VAT - 03ELRPK1540M1ZV  )"}
                </a>
              </div>
            </div>
          </div>
        </ServicesSection> */}
        <div className="border-t-[1px] border-[#252729]">
          <ServicesSection>
            <div className="flex flex-col md:flex-row items-start justify-between gap-2 lg:gap-[114px]">
              <div className="flex grow flex-col tab:hidden w-full">
                <FooterExpander heading="Ikarus 3D">
                  <div className="flex flex-col gap-3">
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/portfolio">Portfolio</a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/why-us">Why Us</a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/about-us">About Us</a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href={env.BLOG_URL}>Blog</a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/careers">Careers</a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href={env.MEDIA_URL}>Media</a>
                    </span>
                  </div>
                </FooterExpander>
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
                <FooterExpander heading="Services">
                  <div className="flex flex-col gap-3">
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/augmented-reality-3d-modeling-services">
                        AR 3D Modeling Services
                      </a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/virtual-reality-3d-modeling-services">
                        VR 3D Modeling Services
                      </a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/3d-scan-cleanup-services">3D Scan Cleanups</a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/metaverse-3d-avatars">
                        Metaverse 3D Avatars
                      </a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/virtual-try-on-solutions">
                        Virtual Try On Solutions
                      </a>
                    </span>
                    <span className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue">
                      <a href="/3d-virtual-spaces">3D Virtual Spaces</a>
                    </span>
                  </div>
                </FooterExpander>
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
                <FooterExpander heading="Contact Us">
                  <div className="flex flex-col gap-3">
                    <a
                      className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue"
                      href="tel:+91%209501772123"
                    >
                      Help Desk - +(91) 95017-72123
                    </a>
                    <a
                      href="mailto:hello@ikarus3d.com"
                      className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue"
                    >
                      <span>For General queries - </span>{" "}
                      <span>hello@ikarus3d.com</span>
                    </a>
                    <a
                      href="mailto:info@ikarus3d.com"
                      className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue"
                    >
                      <span>For Sales queries - </span>{" "}
                      <span>info@ikarus3d.com</span>
                    </a>
                    <div className="-mt-1 text-[#B4B4B4]">
                      <a
                        href={`tel:${encodeURI("+1 5166898556")}`}
                        className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue"
                      >
                        +1 (516) 689-8556
                      </a>
                    </div>
                    <a
                      href="mailto:careers@ikarus3d.com"
                      className="text-[14px] text-left text-[#B4B4B4] hover:dark:text-primaryBlue"
                    >
                      <span>For Career queries - </span>{" "}
                      <span>careers@ikarus3d.com</span>
                    </a>
                  </div>
                </FooterExpander>
              </div>
              <div className="hidden grow tab:flex flex-col justify-between lg:justify-start w-full lg:w-fit gap-[100px]">
                <div className=" flex flex-col tab_mid:flex-row justify-between grow tab_mid:items-start gap-16">

                    <div className="flex tab_mid:flex-col tab_mid:justify-start items-start ">
                        <img src={`${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`}
                            alt="Ikarus3D Logo"
                            className="h-[28px] tab:h-8 md:h-[32px] mb-4 tab_mid:mb-12"
                            loading="lazy"
                        />
                        <div className="flex tab_mid:justify-start items-center gap-4 tab_mid:gap-9">
                            <div className="flex flex-col gap-9">
                                <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                                className="flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 w-full"
                                >
                                <a
                                    href="https://www.linkedin.com/company/ikarus3d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    version="1.2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 24.000005010356844 22.999996364968613"
                                    className="stroke-white stroke-[.55px] h-[12.88px] w-[13.44px] xl:h-[19.32px] xl:w-[20.16px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on LinkedIn</title>
                                    <g transform="translate(0, 0)">
                                        <g transform="translate(0.0000033771003919269544, -0.000003635031387801309) rotate(0)">
                                        <path
                                            d="M0.30032,7.4675v15.5325h5.15578v-15.5325zM5.78582,2.68132c0.01499,-0.72244 -0.26978,-1.41478 -0.79435,-1.92651c-0.55455,-0.51173 -1.30393,-0.78265 -2.06831,-0.75254c-0.76437,-0.0301 -1.51376,0.24081 -2.09828,0.75254c-0.53956,0.49668 -0.83931,1.18902 -0.82432,1.92651c-0.01499,0.72244 0.26978,1.41478 0.77936,1.91146c0.55455,0.52678 1.28894,0.7977 2.05332,0.76759v0c0.77936,0.0301 1.54374,-0.24081 2.11327,-0.76759c0.52457,-0.49668 0.82432,-1.18902 0.79435,-1.91146v0zM23.98092,14.10493c0.13489,-1.88136 -0.44963,-3.73262 -1.61867,-5.2076c-1.10909,-1.18902 -2.66781,-1.83621 -4.28649,-1.776c-0.59951,0 -1.19902,0.07525 -1.78354,0.24081c-0.47961,0.15051 -0.91425,0.37627 -1.30393,0.67729c-0.31474,0.24081 -0.6145,0.51173 -0.88428,0.81275c-0.2398,0.27092 -0.44963,0.57193 -0.64447,0.87295v0v-2.25763h-5.17076v0.75254c0,0.49668 0,2.04692 0,4.63567c0,2.58875 0,5.9752 0,10.14429h5.20074v-8.6693c-0.04496,-0.45153 0,-0.888 0.10491,-1.32448c0.20983,-0.52678 0.55455,-0.97831 0.98919,-1.33953c0.46462,-0.37627 1.04914,-0.55688 1.64865,-0.54183c0.77936,-0.0602 1.52875,0.30102 1.97838,0.93315c0.46462,0.78265 0.67445,1.67065 0.62948,2.5737v8.30808h5.14079z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </g>
                                        <defs>
                                        <path
                                            id="path-1669959029110149"
                                            d="M0.30032,7.4675v15.5325h5.15578v-15.5325zM5.78582,2.68132c0.01499,-0.72244 -0.26978,-1.41478 -0.79435,-1.92651c-0.55455,-0.51173 -1.30393,-0.78265 -2.06831,-0.75254c-0.76437,-0.0301 -1.51376,0.24081 -2.09828,0.75254c-0.53956,0.49668 -0.83931,1.18902 -0.82432,1.92651c-0.01499,0.72244 0.26978,1.41478 0.77936,1.91146c0.55455,0.52678 1.28894,0.7977 2.05332,0.76759v0c0.77936,0.0301 1.54374,-0.24081 2.11327,-0.76759c0.52457,-0.49668 0.82432,-1.18902 0.79435,-1.91146v0zM23.98092,14.10493c0.13489,-1.88136 -0.44963,-3.73262 -1.61867,-5.2076c-1.10909,-1.18902 -2.66781,-1.83621 -4.28649,-1.776c-0.59951,0 -1.19902,0.07525 -1.78354,0.24081c-0.47961,0.15051 -0.91425,0.37627 -1.30393,0.67729c-0.31474,0.24081 -0.6145,0.51173 -0.88428,0.81275c-0.2398,0.27092 -0.44963,0.57193 -0.64447,0.87295v0v-2.25763h-5.17076v0.75254c0,0.49668 0,2.04692 0,4.63567c0,2.58875 0,5.9752 0,10.14429h5.20074v-8.6693c-0.04496,-0.45153 0,-0.888 0.10491,-1.32448c0.20983,-0.52678 0.55455,-0.97831 0.98919,-1.33953c0.46462,-0.37627 1.04914,-0.55688 1.64865,-0.54183c0.77936,-0.0602 1.52875,0.30102 1.97838,0.93315c0.46462,0.78265 0.67445,1.67065 0.62948,2.5737v8.30808h5.14079z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </defs>
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/ikarus_3d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    version="1.2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 23.999999999999996 24"
                                    className="stroke-white stroke-[.55px] w-[13.44px] h-[13.44px] xl:w-[20.16px] xl:h-[20.16px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Instagram</title>
                                    <g transform="translate(0, 0)">
                                        <g transform="translate(0.00001000000000020429, 5.828670879282072e-16) rotate(0)">
                                        <path
                                            d="M14.82,14.82c-1.56,1.56 -4.08,1.56 -5.64,0.015l-0.015,-0.015c-1.56,-1.56 -1.56,-4.08 -0.015,-5.64l0.015,-0.015c1.56,-1.56 4.08,-1.56 5.64,-0.015l0.015,0.015c1.425,1.53 1.29,4.005 0,5.655zM16.31999,7.635c-1.14,-1.155 -2.7,-1.8 -4.32,-1.785c-3.39,-0.015 -6.135,2.73 -6.15,6.12c0,0.015 0,0.015 0,0.03c-0.015,3.39 2.73,6.135 6.12,6.15c0.015,0 0.015,0 0.03,0c3.39,0.015 6.135,-2.73 6.15,-6.12c0,-0.015 0,-0.015 0,-0.03c0.015,-1.635 -0.63,-3.21 -1.8,-4.35zM19.31999,4.635c-0.57,-0.6 -1.53,-0.615 -2.115,-0.045c-0.585,0.57 -0.615,1.53 -0.045,2.115c0.57,0.585 1.53,0.615 2.115,0.045c0.3,-0.285 0.465,-0.69 0.465,-1.095c0.06,-0.39 -0.06,-0.78 -0.315,-1.08zM13.2,2.16h1.65h1.5c0.54,0.015 1.08,0.06 1.605,0.15c0.375,0.06 0.75,0.15 1.11,0.285c1.035,0.42 1.86,1.245 2.28,2.28c0.135,0.36 0.225,0.735 0.285,1.11c0.09,0.525 0.135,1.065 0.15,1.605c0,0.63 0,1.125 0,1.5c0,0.375 0,0.915 0,1.65c0,0.72 0,1.125 0,1.2c0,0.12 0,0.465 0,1.2c0,0.735 0,1.275 0,1.65c0,0.375 0,0.87 0,1.5c-0.015,0.54 -0.06,1.08 -0.15,1.605c-0.06,0.375 -0.15,0.75 -0.285,1.11c-0.42,1.035 -1.245,1.86 -2.28,2.28c-0.36,0.135 -0.735,0.225 -1.11,0.285c-0.525,0.09 -1.065,0.135 -1.605,0.15h-1.5h-5.685h-1.5c-0.555,0.015 -1.11,-0.015 -1.665,-0.075c-0.375,-0.06 -0.75,-0.15 -1.11,-0.285c-1.035,-0.42 -1.86,-1.245 -2.28,-2.28c-0.12,-0.345 -0.195,-0.72 -0.255,-1.08c-0.09,-0.525 -0.135,-1.065 -0.15,-1.605c0,-0.63 0,-1.125 0,-1.5c0,-0.375 0,-0.915 0,-1.65c0,-0.72 0,-1.125 0,-1.2c0,-0.12 0,-0.465 0,-1.2c0,-0.735 0,-1.275 0,-1.65c0,-0.375 0,-0.87 0,-1.5c0.015,-0.57 0.06,-1.14 0.15,-1.695c0.06,-0.375 0.15,-0.75 0.285,-1.11c0.42,-1.035 1.245,-1.845 2.28,-2.25c0.345,-0.12 0.705,-0.225 1.08,-0.285c0.525,-0.09 1.065,-0.135 1.605,-0.15h1.5h4.095zM23.90999,7.05c0.015,-1.86 -0.675,-3.66 -1.935,-5.025c-1.365,-1.26 -3.165,-1.95 -5.025,-1.935c-0.915,-0.06 -2.565,-0.09 -4.95,-0.09c-2.385,0 -4.035,0.03 -4.95,0.075c-1.86,-0.015 -3.66,0.69 -5.025,1.95c-1.26,1.365 -1.95,3.165 -1.935,5.025c-0.06,0.915 -0.09,2.565 -0.09,4.95c0,2.385 0.03,4.035 0.075,4.95c-0.015,1.86 0.675,3.66 1.935,5.025c1.365,1.26 3.18,1.95 5.04,1.935c0.915,0.06 2.565,0.09 4.95,0.09c2.385,0 4.035,-0.03 4.95,-0.075c1.86,0.015 3.66,-0.675 5.025,-1.935c1.26,-1.365 1.95,-3.165 1.935,-5.025c0.06,-0.93 0.09,-2.58 0.09,-4.965c0,-2.385 -0.03,-4.035 -0.09,-4.95z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </g>
                                        <defs>
                                        <path
                                            id="path-166995902908594"
                                            d="M14.82,14.82c-1.56,1.56 -4.08,1.56 -5.64,0.015l-0.015,-0.015c-1.56,-1.56 -1.56,-4.08 -0.015,-5.64l0.015,-0.015c1.56,-1.56 4.08,-1.56 5.64,-0.015l0.015,0.015c1.425,1.53 1.29,4.005 0,5.655zM16.31999,7.635c-1.14,-1.155 -2.7,-1.8 -4.32,-1.785c-3.39,-0.015 -6.135,2.73 -6.15,6.12c0,0.015 0,0.015 0,0.03c-0.015,3.39 2.73,6.135 6.12,6.15c0.015,0 0.015,0 0.03,0c3.39,0.015 6.135,-2.73 6.15,-6.12c0,-0.015 0,-0.015 0,-0.03c0.015,-1.635 -0.63,-3.21 -1.8,-4.35zM19.31999,4.635c-0.57,-0.6 -1.53,-0.615 -2.115,-0.045c-0.585,0.57 -0.615,1.53 -0.045,2.115c0.57,0.585 1.53,0.615 2.115,0.045c0.3,-0.285 0.465,-0.69 0.465,-1.095c0.06,-0.39 -0.06,-0.78 -0.315,-1.08zM13.2,2.16h1.65h1.5c0.54,0.015 1.08,0.06 1.605,0.15c0.375,0.06 0.75,0.15 1.11,0.285c1.035,0.42 1.86,1.245 2.28,2.28c0.135,0.36 0.225,0.735 0.285,1.11c0.09,0.525 0.135,1.065 0.15,1.605c0,0.63 0,1.125 0,1.5c0,0.375 0,0.915 0,1.65c0,0.72 0,1.125 0,1.2c0,0.12 0,0.465 0,1.2c0,0.735 0,1.275 0,1.65c0,0.375 0,0.87 0,1.5c-0.015,0.54 -0.06,1.08 -0.15,1.605c-0.06,0.375 -0.15,0.75 -0.285,1.11c-0.42,1.035 -1.245,1.86 -2.28,2.28c-0.36,0.135 -0.735,0.225 -1.11,0.285c-0.525,0.09 -1.065,0.135 -1.605,0.15h-1.5h-5.685h-1.5c-0.555,0.015 -1.11,-0.015 -1.665,-0.075c-0.375,-0.06 -0.75,-0.15 -1.11,-0.285c-1.035,-0.42 -1.86,-1.245 -2.28,-2.28c-0.12,-0.345 -0.195,-0.72 -0.255,-1.08c-0.09,-0.525 -0.135,-1.065 -0.15,-1.605c0,-0.63 0,-1.125 0,-1.5c0,-0.375 0,-0.915 0,-1.65c0,-0.72 0,-1.125 0,-1.2c0,-0.12 0,-0.465 0,-1.2c0,-0.735 0,-1.275 0,-1.65c0,-0.375 0,-0.87 0,-1.5c0.015,-0.57 0.06,-1.14 0.15,-1.695c0.06,-0.375 0.15,-0.75 0.285,-1.11c0.42,-1.035 1.245,-1.845 2.28,-2.25c0.345,-0.12 0.705,-0.225 1.08,-0.285c0.525,-0.09 1.065,-0.135 1.605,-0.15h1.5h4.095zM23.90999,7.05c0.015,-1.86 -0.675,-3.66 -1.935,-5.025c-1.365,-1.26 -3.165,-1.95 -5.025,-1.935c-0.915,-0.06 -2.565,-0.09 -4.95,-0.09c-2.385,0 -4.035,0.03 -4.95,0.075c-1.86,-0.015 -3.66,0.69 -5.025,1.95c-1.26,1.365 -1.95,3.165 -1.935,5.025c-0.06,0.915 -0.09,2.565 -0.09,4.95c0,2.385 0.03,4.035 0.075,4.95c-0.015,1.86 0.675,3.66 1.935,5.025c1.365,1.26 3.18,1.95 5.04,1.935c0.915,0.06 2.565,0.09 4.95,0.09c2.385,0 4.035,-0.03 4.95,-0.075c1.86,0.015 3.66,-0.675 5.025,-1.935c1.26,-1.365 1.95,-3.165 1.935,-5.025c0.06,-0.93 0.09,-2.58 0.09,-4.965c0,-2.385 -0.03,-4.035 -0.09,-4.95z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </defs>
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/ikarus3d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    version="1.2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 12 23.099166870117188"
                                    className="stroke-white stroke-[.55px] w-[6.72px] h-[15.6px] xl:w-[10.08px] xl:h-[23.4px] group-hover:stroke-[#1d75bd] dark:fill-white dark:group-hover:fill-sky-500  fill-gray-600 group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Facebook</title>
                                    <g transform="translate(0, 0)">
                                        <defs>
                                        <path
                                            id="path-1669959029088110"
                                            d="M22 4.613333023541718 C20.946666666666665 4.493333031599882 19.89333333333333 4.439999701847954 18.839999999999996 4.453333034285936 C17.41333333333333 4.386666372096027 16.026666666666664 4.893333004739337 14.986666666666665 5.866666272712012 C13.973333333333331 6.946666200188542 13.45333333333333 8.38666610349058 13.546666666666663 9.866666004106564 C13.546666666666663 9.866666004106564 13.546666666666663 12.906665799966424 13.546666666666663 12.906665799966424 C13.546666666666663 12.906665799966424 10 12.906665799966424 10 12.906665799966424 C10 12.906665799966424 10 17.013332190864833 10 17.013332190864833 C10 17.013332190864833 13.533333333333333 17.013332190864833 13.533333333333333 17.013332190864833 C13.533333333333333 17.013332190864833 13.533333333333333 27.54666481687049 13.533333333333333 27.54666481687049 C13.533333333333333 27.54666481687049 17.786666666666665 27.54666481687049 17.786666666666665 27.54666481687049 C17.786666666666665 27.54666481687049 17.786666666666665 17.013332190864833 17.786666666666665 17.013332190864833 C17.786666666666665 17.013332190864833 21.333333333333332 17.013332190864833 21.333333333333332 17.013332190864833 C21.333333333333332 17.013332190864833 21.88 12.906665799966424 21.88 12.906665799966424 C21.88 12.906665799966424 17.786666666666665 12.906665799966424 17.786666666666665 12.906665799966424 C17.786666666666665 12.906665799966424 17.786666666666665 10.239999312370056 17.786666666666665 10.239999312370056 C17.746666666666666 9.706666014850782 17.89333333333333 9.18666604976949 18.2 8.746666079316089 C18.64 8.359999438614615 19.226666666666667 8.17333278448287 19.813333333333333 8.25333277911076 C19.813333333333333 8.25333277911076 22 8.25333277911076 22 8.25333277911076 C22 8.25333277911076 22 4.613333023541718 22 4.613333023541718 C22 4.613333023541718 22 4.613333023541718 22 4.613333023541718 Z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </defs>
                                        <g transform="translate(-10, -4.4474979467533045)">
                                        <path
                                            d="M22 4.613333023541718 C20.946666666666665 4.493333031599882 19.89333333333333 4.439999701847954 18.839999999999996 4.453333034285936 C17.41333333333333 4.386666372096027 16.026666666666664 4.893333004739337 14.986666666666665 5.866666272712012 C13.973333333333331 6.946666200188542 13.45333333333333 8.38666610349058 13.546666666666663 9.866666004106564 C13.546666666666663 9.866666004106564 13.546666666666663 12.906665799966424 13.546666666666663 12.906665799966424 C13.546666666666663 12.906665799966424 10 12.906665799966424 10 12.906665799966424 C10 12.906665799966424 10 17.013332190864833 10 17.013332190864833 C10 17.013332190864833 13.533333333333333 17.013332190864833 13.533333333333333 17.013332190864833 C13.533333333333333 17.013332190864833 13.533333333333333 27.54666481687049 13.533333333333333 27.54666481687049 C13.533333333333333 27.54666481687049 17.786666666666665 27.54666481687049 17.786666666666665 27.54666481687049 C17.786666666666665 27.54666481687049 17.786666666666665 17.013332190864833 17.786666666666665 17.013332190864833 C17.786666666666665 17.013332190864833 21.333333333333332 17.013332190864833 21.333333333333332 17.013332190864833 C21.333333333333332 17.013332190864833 21.88 12.906665799966424 21.88 12.906665799966424 C21.88 12.906665799966424 17.786666666666665 12.906665799966424 17.786666666666665 12.906665799966424 C17.786666666666665 12.906665799966424 17.786666666666665 10.239999312370056 17.786666666666665 10.239999312370056 C17.746666666666666 9.706666014850782 17.89333333333333 9.18666604976949 18.2 8.746666079316089 C18.64 8.359999438614615 19.226666666666667 8.17333278448287 19.813333333333333 8.25333277911076 C19.813333333333333 8.25333277911076 22 8.25333277911076 22 8.25333277911076 C22 8.25333277911076 22 4.613333023541718 22 4.613333023541718 C22 4.613333023541718 22 4.613333023541718 22 4.613333023541718 Z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </g>
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/ikarus_3d?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-white stroke-[.55px] group-hover:stroke-[#1d75bd] w-[13.44px] h-[11.2px] xl:w-[20.16px] xl:h-[16.8px] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Twitter</title>
                                    <path
                                        d="M18.901 1.15302H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.15402H7.594L12.837 8.08602L18.901 1.15302ZM17.61 20.644H19.649L6.486 3.24002H4.298L17.61 20.644Z"
                                        fill="#fff"
                                    />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCspV_0wT6sPc-NL8wLibQFQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    version="1.2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 23.999983953107115 16.99999"
                                    className="stroke-white stroke-[.55px] w-[13.44px] h-[9.6px] xl:w-[20.16px] xl:h-[14.4px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Youtube</title>
                                    <g transform="translate(0, 0)">
                                        <g transform="translate(-0.000008023446441561034, 0) rotate(0)">
                                        <path
                                            d="M9.51794,11.71516v-6.82083l6.43022,3.42343l-6.43022,3.38438v0zM12,0c-3.35657,0 -6.14729,0.0781 -8.39787,0.24732h-0.23149h-0.30865h-0.30865c-0.1286,0.02603 -0.25721,0.05207 -0.38581,0.10413l-0.37295,0.18224c-0.14146,0.0781 -0.28293,0.1562 -0.41153,0.26034c-0.14146,0.10413 -0.27007,0.2343 -0.38581,0.36447l-0.19291,0.37749c-0.18005,0.26034 -0.32151,0.53369 -0.42439,0.83308c-0.16719,0.41654 -0.28293,0.85911 -0.33437,1.30168c-0.16719,1.28867 -0.25721,2.60337 -0.24435,3.90505v2.38208c0,0.37749 0.02572,0.88515 0.07716,1.53599c0.05144,0.65084 0.10288,1.26263 0.16719,1.84839c0.0643,0.46861 0.18005,0.9242 0.36009,1.36677c0.10288,0.27335 0.23149,0.54671 0.38581,0.79403l0.20577,0.32542c0.21863,0.2343 0.47584,0.41654 0.75877,0.55972c0.21863,0.11715 0.45012,0.20827 0.6816,0.28637c0.24435,0.05207 0.4887,0.10413 0.73304,0.13017h0.47584h0.65588l2.68783,0.10413c1.36321,0 2.97076,0.02603 4.8098,0.09112c3.35657,0 6.14729,-0.09112 8.39787,-0.26034h0.21863h0.30865h0.32151c0.1286,-0.02603 0.25721,-0.05207 0.38581,-0.10413l0.37295,-0.16922c0.14146,-0.06508 0.28293,-0.1562 0.41153,-0.26034c0.14146,-0.10413 0.27007,-0.2343 0.38581,-0.36447l0.19291,-0.2343c0.18005,-0.26034 0.32151,-0.53369 0.42439,-0.83308c0.16719,-0.41654 0.28293,-0.85911 0.33437,-1.30168c0.16719,-1.28867 0.25721,-2.60337 0.24435,-3.90505v-2.46018c0,-0.37749 -0.02572,-0.88515 -0.07716,-1.53599c-0.05144,-0.65084 -0.10288,-1.27565 -0.16719,-1.86141c-0.0643,-0.46861 -0.18005,-0.9242 -0.36009,-1.36677c-0.10288,-0.27335 -0.23149,-0.54671 -0.38581,-0.79403l-0.20577,-0.24732c-0.11574,-0.13017 -0.24435,-0.26034 -0.38581,-0.36447c-0.1286,-0.10413 -0.27007,-0.18224 -0.41153,-0.26034l-0.37295,-0.18224c-0.1286,-0.05207 -0.25721,-0.0781 -0.38581,-0.10413h-0.30865h-0.30865h-0.23149h-0.97739c-0.65588,-0.16922 -1.68472,-0.26034 -3.07364,-0.29939c-1.38893,-0.03905 -2.84216,-0.05207 -4.34683,-0.06508v0z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </g>
                                        <defs>
                                        <path
                                            id="path-1669959029087106"
                                            d="M9.51794,11.71516v-6.82083l6.43022,3.42343l-6.43022,3.38438v0zM12,0c-3.35657,0 -6.14729,0.0781 -8.39787,0.24732h-0.23149h-0.30865h-0.30865c-0.1286,0.02603 -0.25721,0.05207 -0.38581,0.10413l-0.37295,0.18224c-0.14146,0.0781 -0.28293,0.1562 -0.41153,0.26034c-0.14146,0.10413 -0.27007,0.2343 -0.38581,0.36447l-0.19291,0.37749c-0.18005,0.26034 -0.32151,0.53369 -0.42439,0.83308c-0.16719,0.41654 -0.28293,0.85911 -0.33437,1.30168c-0.16719,1.28867 -0.25721,2.60337 -0.24435,3.90505v2.38208c0,0.37749 0.02572,0.88515 0.07716,1.53599c0.05144,0.65084 0.10288,1.26263 0.16719,1.84839c0.0643,0.46861 0.18005,0.9242 0.36009,1.36677c0.10288,0.27335 0.23149,0.54671 0.38581,0.79403l0.20577,0.32542c0.21863,0.2343 0.47584,0.41654 0.75877,0.55972c0.21863,0.11715 0.45012,0.20827 0.6816,0.28637c0.24435,0.05207 0.4887,0.10413 0.73304,0.13017h0.47584h0.65588l2.68783,0.10413c1.36321,0 2.97076,0.02603 4.8098,0.09112c3.35657,0 6.14729,-0.09112 8.39787,-0.26034h0.21863h0.30865h0.32151c0.1286,-0.02603 0.25721,-0.05207 0.38581,-0.10413l0.37295,-0.16922c0.14146,-0.06508 0.28293,-0.1562 0.41153,-0.26034c0.14146,-0.10413 0.27007,-0.2343 0.38581,-0.36447l0.19291,-0.2343c0.18005,-0.26034 0.32151,-0.53369 0.42439,-0.83308c0.16719,-0.41654 0.28293,-0.85911 0.33437,-1.30168c0.16719,-1.28867 0.25721,-2.60337 0.24435,-3.90505v-2.46018c0,-0.37749 -0.02572,-0.88515 -0.07716,-1.53599c-0.05144,-0.65084 -0.10288,-1.27565 -0.16719,-1.86141c-0.0643,-0.46861 -0.18005,-0.9242 -0.36009,-1.36677c-0.10288,-0.27335 -0.23149,-0.54671 -0.38581,-0.79403l-0.20577,-0.24732c-0.11574,-0.13017 -0.24435,-0.26034 -0.38581,-0.36447c-0.1286,-0.10413 -0.27007,-0.18224 -0.41153,-0.26034l-0.37295,-0.18224c-0.1286,-0.05207 -0.25721,-0.0781 -0.38581,-0.10413h-0.30865h-0.30865h-0.23149h-0.97739c-0.65588,-0.16922 -1.68472,-0.26034 -3.07364,-0.29939c-1.38893,-0.03905 -2.84216,-0.05207 -4.34683,-0.06508v0z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </defs>
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.behance.net/ikarus_3d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    version="1.2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 24.000003847841533 15.000012048289218"
                                    className="stroke-white stroke-[.55px] w-[13.44px] h-[8.4px] xl:w-[20.16px] xl:h-[12.6px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Behance</title>
                                    <g transform="translate(0, 0)">
                                        <g transform="translate(0, 0) rotate(0)">
                                        <path
                                            d="M21.6277,2.43431h-5.98022v-1.44712h5.98022zM18.72752,5.96798c1.19155,-0.08974 2.23696,0.79648 2.33813,1.98559c0.01124,0.08974 0.01124,0.16827 0,0.25801h-4.82239c0,-1.23398 1.00045,-2.2436 2.23696,-2.25482c0.06745,0 0.13489,0 0.20234,0.01122v0zM18.91862,12.79975c-0.71942,0.04487 -1.42761,-0.21314 -1.94469,-0.70673c-0.48336,-0.54968 -0.71942,-1.27885 -0.67446,-2.00802h7.70009c0,-0.23558 0,-0.41507 0,-0.54968c0.01124,-0.9984 -0.1911,-1.98559 -0.59577,-2.89425c-0.38219,-0.85257 -1.00045,-1.57052 -1.78732,-2.08655c-0.85432,-0.5609 -1.86601,-0.83013 -2.88894,-0.79648c-1.48381,-0.05609 -2.91142,0.52725 -3.93435,1.60418c-1.03417,1.08815 -1.58498,2.54649 -1.52878,4.03848c-0.06745,1.49199 0.47212,2.95034 1.48381,4.0497c1.04541,1.05449 2.4955,1.60418 3.97932,1.53687c2.31565,0.16827 4.42896,-1.34616 5.00225,-3.58976h-2.58543c-0.14613,0.44872 -0.46088,0.81891 -0.88804,1.02084c-0.4384,0.2468 -0.933,0.37019 -1.42761,0.37019v0zM3.29362,12.21641v-4.06092h3.48471c1.55126,0 2.32689,0.69552 2.32689,2.09777c0,1.40225 -0.79811,2.0529 -2.40558,1.96315h-3.46223zM3.29362,2.51283h2.99011c1.49505,0 2.2482,0.5609 2.2482,1.6827c0.04496,0.50481 -0.15737,0.98718 -0.52833,1.32372c-0.41592,0.30289 -0.933,0.45994 -1.45009,0.42628h-3.3161v-3.44393zM0,0v14.70681h7.14928c0.52833,0 1.05665,-0.05609 1.57374,-0.15705c0.4946,-0.10096 0.96673,-0.26923 1.41637,-0.49359c0.41592,-0.21314 0.79811,-0.49359 1.1241,-0.83013c0.34847,-0.35898 0.61826,-0.77404 0.79811,-1.2452c0.20234,-0.50481 0.29227,-1.04327 0.29227,-1.59296c0.03372,-0.84135 -0.20234,-1.67148 -0.67446,-2.37822c-0.4946,-0.67308 -1.20279,-1.15545 -2.01214,-1.34616c1.24775,-0.50481 2.0571,-1.72757 2.01214,-3.07373c0,-0.59455 -0.13489,-1.16667 -0.38219,-1.70514c-0.23606,-0.47116 -0.59577,-0.86379 -1.05665,-1.1218c-0.46088,-0.25801 -0.95549,-0.4375 -1.48381,-0.54968c-0.59577,-0.11218 -1.19155,-0.16827 -1.8098,-0.16827h-6.94694z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </g>
                                        <defs>
                                        <path
                                            id="path-1669959029087102"
                                            d="M21.6277,2.43431h-5.98022v-1.44712h5.98022zM18.72752,5.96798c1.19155,-0.08974 2.23696,0.79648 2.33813,1.98559c0.01124,0.08974 0.01124,0.16827 0,0.25801h-4.82239c0,-1.23398 1.00045,-2.2436 2.23696,-2.25482c0.06745,0 0.13489,0 0.20234,0.01122v0zM18.91862,12.79975c-0.71942,0.04487 -1.42761,-0.21314 -1.94469,-0.70673c-0.48336,-0.54968 -0.71942,-1.27885 -0.67446,-2.00802h7.70009c0,-0.23558 0,-0.41507 0,-0.54968c0.01124,-0.9984 -0.1911,-1.98559 -0.59577,-2.89425c-0.38219,-0.85257 -1.00045,-1.57052 -1.78732,-2.08655c-0.85432,-0.5609 -1.86601,-0.83013 -2.88894,-0.79648c-1.48381,-0.05609 -2.91142,0.52725 -3.93435,1.60418c-1.03417,1.08815 -1.58498,2.54649 -1.52878,4.03848c-0.06745,1.49199 0.47212,2.95034 1.48381,4.0497c1.04541,1.05449 2.4955,1.60418 3.97932,1.53687c2.31565,0.16827 4.42896,-1.34616 5.00225,-3.58976h-2.58543c-0.14613,0.44872 -0.46088,0.81891 -0.88804,1.02084c-0.4384,0.2468 -0.933,0.37019 -1.42761,0.37019v0zM3.29362,12.21641v-4.06092h3.48471c1.55126,0 2.32689,0.69552 2.32689,2.09777c0,1.40225 -0.79811,2.0529 -2.40558,1.96315h-3.46223zM3.29362,2.51283h2.99011c1.49505,0 2.2482,0.5609 2.2482,1.6827c0.04496,0.50481 -0.15737,0.98718 -0.52833,1.32372c-0.41592,0.30289 -0.933,0.45994 -1.45009,0.42628h-3.3161v-3.44393zM0,0v14.70681h7.14928c0.52833,0 1.05665,-0.05609 1.57374,-0.15705c0.4946,-0.10096 0.96673,-0.26923 1.41637,-0.49359c0.41592,-0.21314 0.79811,-0.49359 1.1241,-0.83013c0.34847,-0.35898 0.61826,-0.77404 0.79811,-1.2452c0.20234,-0.50481 0.29227,-1.04327 0.29227,-1.59296c0.03372,-0.84135 -0.20234,-1.67148 -0.67446,-2.37822c-0.4946,-0.67308 -1.20279,-1.15545 -2.01214,-1.34616c1.24775,-0.50481 2.0571,-1.72757 2.01214,-3.07373c0,-0.59455 -0.13489,-1.16667 -0.38219,-1.70514c-0.23606,-0.47116 -0.59577,-0.86379 -1.05665,-1.1218c-0.46088,-0.25801 -0.95549,-0.4375 -1.48381,-0.54968c-0.59577,-0.11218 -1.19155,-0.16827 -1.8098,-0.16827h-6.94694z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </defs>
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href=" https://sketchfab.com/ikarus3d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    id="a"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2000 2000"
                                    version="1.2"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    className="stroke-white stroke-[.55px] w-[13.44px] h-[13.44px] xl:h-[20.16px] xl:w-[20.16px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Sketchfab</title>
                                    <g id="b">
                                        <path
                                        className="c"
                                        d="M863.12,1985.04L152.03,1574.57V746.51l711.08,384.08v854.45Zm126.67-1049.32L148.47,489.76,989.79,3.95l841.45,485.81-841.45,445.96Zm841.98,640.44l-708.45,409.02v-851.28l708.45-382.76v825.02ZM148.47,489.76L989.79,3.95l841.45,485.81-841.45,445.96L148.47,489.76Zm974.85,644.13l708.45-382.76v825.02l-708.45,409.02v-851.28Z"
                                        />
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.artstation.com/ikarus3d "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    id="a"
                                    className="stroke-white w-[13.44px] h-[10px] xl:w-[20.16px] xl:h-[15px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2500 2190"
                                    >
                                    <title>Ikarus 3D on Artstation</title>
                                    <path
                                        className="fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500 group-hover:fill-[#1d75bd] darl:hover:fill-sky-500"
                                        d="M.57,1688.97l210.21,362.24c42.51,82.33,127.53,138.78,224.37,138.78H1835.74l-288.13-501.03H.57Zm2498.86,2.34c0-49.42-14.19-96.46-40.17-136.44L1637.34,134.1C1594.83,54.11,1512.16,0,1415.32,0h-434.57l1268.31,2187.66,200.77-345.8c37.79-65.86,49.61-94.09,49.61-150.54Zm-1159.69-359.9L772.92,355.21,206.06,1331.42H1339.74Z"
                                    />
                                    </svg>
                                </a>
                                <a
                                    href="https://discord.gg/mDFrhzzBS3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex items-center justify-center cursor-pointer group"
                                >
                                    <svg
                                    role="img"
                                    version="1.2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 23.999969618307645 18"
                                    className="stroke-white stroke-[.55px] w-[13.44px] h-[10px] xl:w-[20.16px] xl:h-[15px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                                    >
                                    <title>Ikarus 3D on Discord</title>
                                    <g transform="translate(0, 0)">
                                        <g transform="translate(-0.000002829208097417102, 0) rotate(0)">
                                        <path
                                            d="M20.33027,1.50747c-1.57682,-0.71438 -3.24146,-1.22119 -4.95138,-1.50747c-0.23399,0.41393 -0.4457,0.8398 -0.63426,1.27584c-1.82139,-0.2716 -3.67363,-0.2716 -5.49503,0c-0.18866,-0.436 -0.40037,-0.86186 -0.63426,-1.27584c-1.71102,0.2887 -3.37675,0.79671 -4.95515,1.51121c-3.13354,4.5878 -3.983,9.06164 -3.55827,13.47198v0c1.83508,1.3417 3.88906,2.36209 6.07266,3.01681c0.49168,-0.6544 0.92676,-1.34863 1.30061,-2.07534c-0.71008,-0.26244 -1.39544,-0.58623 -2.04813,-0.96762c0.17178,-0.12329 0.33978,-0.25031 0.50212,-0.3736c3.84519,1.78945 8.29635,1.78945 12.14154,0c0.16423,0.13263 0.33223,0.25965 0.50212,0.3736c-0.65396,0.38201 -1.34056,0.70642 -2.05191,0.96949c0.37339,0.72637 0.8085,1.42003 1.30061,2.07347c2.18546,-0.65209 4.24102,-1.672 6.07643,-3.01494v0c0.49835,-5.11457 -0.85134,-9.54732 -3.56771,-13.47758zM8.01317,12.27086c-1.18357,0 -2.16139,-1.06289 -2.16139,-2.37049c0,-1.3076 0.94384,-2.37983 2.15762,-2.37983c1.21378,0 2.18404,1.07223 2.16328,2.37983c-0.02076,1.3076 -0.95328,2.37049 -2.1595,2.37049zM15.98672,12.27086c-1.18546,0 -2.1595,-1.06289 -2.1595,-2.37049c0,-1.3076 0.94384,-2.37983 2.1595,-2.37983c1.21566,0 2.17838,1.07223 2.15762,2.37983c-0.02076,1.3076 -0.95139,2.37049 -2.15762,2.37049z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </g>
                                        <defs>
                                        <path
                                            id="path-1669959029107136"
                                            d="M20.33027,1.50747c-1.57682,-0.71438 -3.24146,-1.22119 -4.95138,-1.50747c-0.23399,0.41393 -0.4457,0.8398 -0.63426,1.27584c-1.82139,-0.2716 -3.67363,-0.2716 -5.49503,0c-0.18866,-0.436 -0.40037,-0.86186 -0.63426,-1.27584c-1.71102,0.2887 -3.37675,0.79671 -4.95515,1.51121c-3.13354,4.5878 -3.983,9.06164 -3.55827,13.47198v0c1.83508,1.3417 3.88906,2.36209 6.07266,3.01681c0.49168,-0.6544 0.92676,-1.34863 1.30061,-2.07534c-0.71008,-0.26244 -1.39544,-0.58623 -2.04813,-0.96762c0.17178,-0.12329 0.33978,-0.25031 0.50212,-0.3736c3.84519,1.78945 8.29635,1.78945 12.14154,0c0.16423,0.13263 0.33223,0.25965 0.50212,0.3736c-0.65396,0.38201 -1.34056,0.70642 -2.05191,0.96949c0.37339,0.72637 0.8085,1.42003 1.30061,2.07347c2.18546,-0.65209 4.24102,-1.672 6.07643,-3.01494v0c0.49835,-5.11457 -0.85134,-9.54732 -3.56771,-13.47758zM8.01317,12.27086c-1.18357,0 -2.16139,-1.06289 -2.16139,-2.37049c0,-1.3076 0.94384,-2.37983 2.15762,-2.37983c1.21378,0 2.18404,1.07223 2.16328,2.37983c-0.02076,1.3076 -0.95328,2.37049 -2.1595,2.37049zM15.98672,12.27086c-1.18546,0 -2.1595,-1.06289 -2.1595,-2.37049c0,-1.3076 0.94384,-2.37983 2.1595,-2.37983c1.21566,0 2.17838,1.07223 2.15762,2.37983c-0.02076,1.3076 -0.95139,2.37049 -2.15762,2.37049z"
                                            vectorEffect="non-scaling-stroke"
                                        ></path>
                                        </defs>
                                    </g>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.pinterest.com/ikarus_3d/?invite_code=289e55b5c77647d8a50a0f77217907fa&sender=1134836943511782619"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-[#11141A] rounded-full flex justify-center items-center cursor-pointer group"
                                >
                                    <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-white stroke-[.55px] w-[25.44px] h-[20px] xl:w-[32.16px] xl:h-[25px] group-hover:stroke-[#1d75bd] fill-gray-600 dark:fill-white dark:group-hover:fill-sky-500  group-hover:fill-[#1d75bd]"
                
                                    >
                                    <path d="M16.292 5C10.536 5 7.48 8.866 7.48 13.077c0 1.955 1.039 4.392 2.707 5.168.253.118.387.064.443-.18.047-.185.273-1.089.373-1.511a.402.402 0 0 0-.095-.386c-.55-.667-.988-1.896-.988-3.041 0-2.942 2.228-5.787 6.021-5.787 3.28 0 5.571 2.23 5.571 5.426 0 3.61-1.82 6.108-4.191 6.108-1.309 0-2.291-1.081-1.978-2.413.378-1.584 1.106-3.298 1.106-4.438 0-1.026-.552-1.883-1.685-1.883-1.341 0-2.415 1.385-2.415 3.241 0 1.182.4 1.978.4 1.978s-1.323 5.593-1.563 6.634c-.413 1.765.051 4.625.094 4.876.021.134.172.18.252.066.129-.175 1.725-2.565 2.174-4.292l.828-3.171c.439.829 1.707 1.531 3.061 1.531 4.021 0 6.923-3.703 6.923-8.299C24.52 8.301 20.92 5 16.292 5z" />
                                    </svg>
                                </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-20">
                        <div className="flex flex-col gap-4">
                        <motion.h6
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                            className="whitespace-nowrap text-[18px] text-white flex justify-center tab:justify-start font-medium"
                        >
                            Ikarus 3D
                        </motion.h6>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                            className="flex flex-col gap-3"
                        >
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/portfolio">Portfolio</a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/why-us">Why Us</a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/about-us">About Us</a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href={env.BLOG_URL}>Blog</a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/careers">Careers</a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href={env.MEDIA_URL}>Media</a>
                            </span>
                        </motion.div>
                        </div>
                        <div className="flex flex-col gap-4">
                        <motion.h6
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                            className="whitespace-nowrap text-[18px] text-white flex justify-center tab:justify-start font-medium"
                        >
                            Services
                        </motion.h6>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                            className="flex flex-col gap-3"
                        >
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/augmented-reality-3d-modeling-services">
                                AR 3D Modeling Services
                            </a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/virtual-reality-3d-modeling-services">
                                VR 3D Modeling Services
                            </a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/3d-scan-cleanup-services">3D Scan Cleanups</a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/metaverse-3d-avatars">
                                Metaverse 3D Avatars
                            </a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/virtual-try-on-solutions">
                                Virtual Try On Solutions
                            </a>
                            </span>
                            <span className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue">
                            <a href="/3d-virtual-spaces">3D Virtual Spaces</a>
                            </span>
                        </motion.div>
                        </div>
                        <div className="flex flex-col gap-4">
                        <motion.h6
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                            className="whitespace-nowrap text-[18px] text-white flex justify-center tab:justify-start font-medium"
                        >
                            Contact Us
                        </motion.h6>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                            className="flex flex-col gap-3"
                        >
                            <a
                            className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue"
                            href="tel:+91%209501772123"
                            >
                            Help Desk - +(91) 95017-72123
                            </a>
                            <a
                            href="mailto:hello@ikarus3d.com"
                            className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue"
                            >
                            <span>For General queries - </span>{" "}
                            <span>hello@ikarus3d.com</span>
                            </a>
                            <a
                            href="mailto:info@ikarus3d.com"
                            className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue"
                            >
                            <span>For Sales queries - </span>{" "}
                            <span>info@ikarus3d.com</span>
                            </a>
                            {/* The gap between Sales queries and the numbers should be 8px. So, since gap is gap-3 on parent div, added -mt-1 here */}
                            <div className="-mt-1 text-white">
                            <a
                                href={`tel:${encodeURI("+1 5166898556")}`}
                                className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue"
                            >
                                +1 (516) 689-8556
                            </a>
                            {/* <span>, </span> */}
                            {/* <a
                                href={`tel:${encodeURI("+91 9741675612")}`}
                                className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue"
                            >
                                +(91) 97416-75612
                            </a> */}
                            </div>
                            <a
                            href="mailto:careers@ikarus3d.com"
                            className="text-center text-[14px] lg:text-[16px] tab:text-left text-white opacity-90 hover:dark:text-primaryBlue"
                            >
                            <span>For Career queries - </span>{" "}
                            <span>careers@ikarus3d.com</span>
                            </a>
                        </motion.div>
                        </div>
                    </div>

                </div>
                <div className="flex w-full items-end justify-between tab:items-end mt-[30px]">
                    <div className="flex flex-col">
                        <div>
                            <span className="text-[#BFBFBF] font-[400] text-[14px] leading-[21px]">{`© ${new Date().getFullYear()} Ikarus Unkindled. All rights reserved`}</span>
                        </div>
                        <div className="flex flex-row gap-4">
                        <a
                            href="/terms-and-conditions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <span className="text-[#BFBFBF] hover:dark:text-primaryBlue font-[400] text-[14px] leading-[21px]">
                            Terms of Service
                            </span>
                        </a>
                        <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <span className="text-[#BFBFBF] hover:dark:text-primaryBlue font-[400] text-[14px] leading-[21px]">
                            Privacy Policies
                            </span>
                        </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-9">
                        <ServiceSectionText
                            text={"Join our newsletter"}
                        />
                        <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true, delay: 0.5, amount: 0.25 }}
                        className="flex flex-col w-full"
                        >
                        <div className="flex lg:flex-row gap-3">
                            <div className="peer grow w-full lg:max-w-[410px] ">
                                <input
                                    placeholder="Enter your email"
                                    type="email"
                                    id="mail"
                                    onChange={emailHandler}
                                    value={email}
                                    className="w-full rounded-[5px] h-12 text-[16px] px-6 py-[15px] font-medium tracking-[-0.24px] bg-[#F6F7F9] focus:outline-none"
                                />
                                <div
                                    className="hidden text-[14px] xl:text-base text-[#BA1A1A] justify-start my-2"
                                    id="cap"
                                >
                                    The email entered is invalid
                                </div>
                            </div>
                            <button
                            id="newsletterSubmit"
                            onClick={
                                email !== "" &&
                                typeof email !== "undefined" &&
                                email !== null
                                ? handelFormSubmission
                                : null
                            }
                            className="flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] shadow-xs rounded-[5px] text-center text-white px-9 py-[18px] lg:py-3 h-12 lg:w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1]"
                            >
                            Subscribe
                            </button>
                        </div>
                        </motion.div>
                    </div>
                </div>
              </div>


            </div>
          </ServicesSection>
        </div>
        {statusCode && (
          <ThankYou
            statusCode={statusCode}
            setStatusCode={setStatusCode}
            heading={responseModalHeading}
            alertMessage={alertMessage}
          />
        )}
        <div className="w-full absolute bottom-[5px] tab:bottom-0 opacity-20 overflow-hidden">
          <img
            src={`${env.CDN_BASE_URL}/miscellaneous/footer+grid.webp`}
            alt="background image of a grid"
            className="scale-150 lg:scale-100 w-full"
            loading="lazy"
          />
        </div>
      </div>
    );
}

const FooterExpander = (props) => {
    const [showInformation, setShowInformation] = useState(props.isOpen);
    return (
      <div className="flex flex-col py-6 lg:px-6">
        <div className="grid grid-cols-[1fr_32px] gap-2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5, amount: 0.25 }}
            className="text-white text-[16px] leading-7 lg:text-[21px] lg:leading-[32px] font-medium"
          >
            {props.heading}
          </motion.div>
          {showInformation ? (
            <div
              className="flex items-center justify-center cursor-pointer h-8 w-8 min-h-8 min-w-8 bg-[#252729] rounded-full"
              onClick={() => setShowInformation(false)}
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
              onClick={() => setShowInformation(true)}
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
            showInformation ? "grid-rows-[1fr] mt-3 lg:mt-4" : "grid-rows-[0fr]"
          } grid transition-all ease-in-out duration-500`}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {props.children}
            </motion.div>
          </div>
        </div>
      </div>
    );
  };