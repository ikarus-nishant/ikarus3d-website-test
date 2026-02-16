import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ThankYou from "./thankYou";
import SubSectionHeading from "./text/SubSectionHeading";
import SubSectionSubHeading from "./text/SubSectionSubHeading";
import getBrowserEnv from "../utils/browserEnv";
import ReCAPTCHA from "react-google-recaptcha";
import all from "email-providers/all.json";
import common from "email-providers/common.json";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";
import useViewportWidth from "~/hooks/useViewportWidth";
import Cookies from "js-cookie";
const env = getBrowserEnv();

const ServicesFooterContact = ({ formHeading, formText }) => {

  const viewportWidth = useViewportWidth();  

  const formContainerRef = useRef();
  const captchaRef = useRef(null);
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [contactNumberError, setContactNumberError] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyNameError, setCompanyNameError] = useState();
  const [message, setMessage] = useState();
  const [messageError, setMessageError] = useState();
  const [formMarginTop, setFormMarginTop] = useState(0);
  const [isServiceDown, setIsServiceDown] = useState(false);
  // const [skipCaptcha, setSkipCaptcha] = useState(false); // This is needed if we provide the option to skip captcha verification which we are not for now.

  // The function below tries to check whether a user is a human or a bot.
  // const getCaptchaToken = async () =>{
  //   const captchaToken = await captchaRef.current.executeAsync();
  //   return {captchaToken: captchaToken, skipCaptcha: false};
  // }

  // The function below waits for 2 minutes for the above function to execute, if it takes any longer, a fallback object is returned.
  // const getCaptchaFallback = async () =>{
  //   const captchaToken = "Couldn't generate token";
  //   const timeoutPromise = await new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve({captchaToken: captchaToken, skipCaptcha: true});
  //     }, 120000);
  //   });
  //   return timeoutPromise;
  // }

  const handleFormSubmission = async () => {
    try {
      // The code Commented below is for the approach that waits for 2 minutes for the generation of captchaToken
      // const captchaObject = await Promise.race([getCaptchaToken(), getCaptchaFallback()]);
      // const captchaToken = captchaObject.captchaToken;
      // const skipCaptcha = captchaObject.skipCaptcha;
      const captchaToken = await captchaRef.current.executeAsync();


      const utmInfo = Cookies.get("utm");
      // console.log("Cookie Data--->",JSON.parse(utmInfo))


      captchaRef.current.reset(); // we are resetting this because in case after submitting the captcha there's some error at the server, so the reCaptcha here is ready for another verification test.
      const response = await fetch(env.GET_IN_TOUCH_API, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip, deflate, br",
        },
        body: JSON.stringify({
          email: email,
          fullName: name,
          contactNumber: contactNumber,
          companyName: companyName,
          topicForDiscussion: message,
          updateEnabled: true,
          captchaToken: captchaToken,
          ...JSON.parse(utmInfo)
          // utm_source:utmInfo
          // skipCaptcha: skipCaptcha
        }),
      });
      if (response.status === 201) {
        // Cookies.remove("utm")
        window.location.href = "/thank-you?status=registered&status_code=201";
      } else if (response.status === 429 || response.status === 409) {
        window.location.href = "/thank-you?status=existing&status_code=429";
      } else if (response.status === 403) {
        window.location.href = "/thank-you?status=bot&status_code=403";
      }
    } catch (e) {
      // handle network connectivity issues
      setIsServiceDown(true);
    }
  };

  const inputsCheck = () => {

    if(!name)
      setNameError("Name is Required");
    if(!email)
      setEmailError("Email is Required");
    // if(!contactNumber)
    //   setContactNumberError(null);
    if(!message)
      setMessageError("Description is required");
    // if(!companyName)
    //   setCompanyNameError(null);    

    if (!name || !email || !message) {
      return false;
    }

    if (
      nameError ||
      emailError ||
      companyNameError ||
      messageError ||
      contactNumberError
    ) {
      return false;
    }

    handleFormSubmission();
    return true;
  };

  const handleNameInput = (event) => {
    if (!event.target.value) {
      setNameError("Name is Required");
    } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(event.target.value.trim())) {
      setNameError("Only English alphabets and ' , . - are allowed between letters.");
    } else {
      setNameError(null);
    }
    setName(event.target.value);
  };
  const handleEmailInput = (event) => {
    if (!event.target.value) {
      setEmailError("Email is Required");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value.trim())
    ) {
      setEmailError("Enter valid Email.");
    } else {
      setEmailError(null);
    }
    setEmail(event.target.value);
  };

  const handleContactNumberInput = (event) => {
    if (!event.target.value) {
      setContactNumberError(null);
    } else if (!/^\+?[1-9][0-9]{6,14}$/.test(event.target.value.trim())) {
      setContactNumberError("Enter valid Contact Number of 7 to 15 length.");
    } else {
      setContactNumberError(null);
    }
    setContactNumber(event.target.value);
  };

  const handleCompanyNameInput = (event) => {
    if (!event.target.value) {
      setCompanyNameError(null);
    } else {
      setCompanyNameError(null);
    }
    setCompanyName(event.target.value);
  };

  const handleMessageInput = (event) => {
    if (!event.target.value) {
      setMessageError("Message is Required");
    } else if (event.target.value.length > 1500) {
      setMessageError("Message should have maximum 500 characters.");
    } else if (event.target.value.length < 10) {
      setMessageError("Message should have minimum 10 characters.");
    } else {
      setMessageError(null);
    }
    setMessage(event.target.value);
  };

  const setMarginTop = () => {
    if (formContainerRef.current) {
      const width = formContainerRef.current.clientWidth;
      const margin = parseInt(width / 7.12);
      setFormMarginTop(margin);
    }
  };

  useEffect(() => {
    setMarginTop();
  }, [formContainerRef]);

  useEffect(() => {
    window.addEventListener("resize", setMarginTop);
    setMessage("");
    return () => {
      window.removeEventListener("resize", setMarginTop);
    };
  }, []);

  // useEffect(() => {
  //   const captchaElement = document.getElementsByClassName("grecaptcha-badge"); // This code is for checking if the reCaptcha badge is present in the DOM, which would affect the executeAsync() of reCaptcha.
  //   setTimeout(() => {
  //     setSkipCaptcha(captchaElement.length < 1);
  //     console.log(
  //       captchaElement.length,
  //       captchaElement.length < 1,
  //       captchaElement
  //     );
  //   }, 500);
  // }, []);

  return (
    <div className="w-full">
      <ServicesSection blockXPadding={true}>
        <div className="md:grid md:grid-cols-2 gap-9">
          <div className="w-full text-left flex flex-col md:mt-[150px] xl:mt-[200px] px-6 lg:pl-[112px] xl:pl-[138px]">
            <ServicesHeadingAndSubheading
              element="h1"
              heading={["Have a 3D project we can ace together?"]}              
            />
            <ServicesHeadingAndSubheading
              element="h2"
              heading={["Let's talk."]}              
            />
            <div className="text-xs tab_old:text-base xl_old:text-2xl leading-[21px] text-darkHeading mt-6 lap:mt-8 xl_old:mt-12 hidden tab_old:block">
              <div className="group flex justify-center tab_old:justify-start gap-2 text-center tab_old:text-left mb-4 w-fit">
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
                  className="group-hover:text-[#1d75bd]"
                  href="tel:+91%209501772123"
                >
                  Help Desk - +(91) 95017-72123
                </a>
              </div>

              <a
                href="mailto:hello@ikarus3d.com"
                className="group hover:text-[#1d75bd] group flex flex-wrap tab_old:flex-nowrap justify-center tab_old:justify-start gap-2 tab_old:text-left mb-4 w-fit min-w-[280px]"
              >
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
                <span>For General Queries - hello@ikarus3d.com</span>
              </a>
              <a
                href="mailto:info@ikarus3d.com"
                className="group hover:text-[#1d75bd] group flex flex-wrap tab_old:flex-nowrap justify-center tab_old:justify-start gap-2 tab_old:text-left mb-4 w-fit min-w-[280px]"
              >
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
                <span>For Sales Queries - info@ikarus3d.com</span>
              </a>
            </div>
          </div>
          <div ref={formContainerRef} className="w-full relative border-t-[1px] border-transparent overflow-y-visible">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true, delay: 1.5, amount: 0.25 }}
              className="absolute left-0 w-full h-full z-10"
            >
              <img
                src={`${env.CDN_BASE_URL}/miscellaneous/bg.svg`}
                alt="blue background image"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0A0C10] via-10% z-20"></div>
            <div
              className="flex flex-col gap-9 z-20 px-6 md:px-[112px] xl:px-[138px] pb-6 relative"
              style={{
                marginTop: formMarginTop ? `${formMarginTop + 20}px` : "125px",
              }}
            >
              { viewportWidth < 600 || viewportWidth > 960?
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true, delay: 1.5, amount: 0.25 }}
                  className="flex tab:hidden md:flex flex-col gap-4"
                >
                  { isServiceDown ?                
                    <div
                      className="absolute w-full h-full rounded-[5px] backdrop-blur-[2px] bg-gray-100/30 flex justify-center items-center z-20 text-center"
                      style={{ boxShadow: "0px 0px 5px 5px #f3f4f657" }}
                    >
                      <p className="text-white font-[700] text-3xl">
                        Sorry! Our email service is temporarily out of order. Click{" "}
                        <a
                          className="text-primaryBlue"
                          href="mailto:info@ikarus3d.com"
                        >
                          here
                        </a>{" "}
                        to send us an email directly.
                      </p>
                    </div> 
                    :
                    <></>
                  }                
                  <div className="absolute opacity-0">
                    <ReCAPTCHA
                      sitekey={env.SITE_KEY}
                      ref={captchaRef}
                      size="invisible"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="block text-slate-900 dark:text-darkHeading"
                    >
                      <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                        Name
                      </h4>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      // ref={nameRef}
                      value={name}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                      onChange={handleNameInput}
                      onBlur={()=>setName(name.trim())}
                    />
                    <small id="nameError" className="text-red-500 mt-1">
                      {nameError}
                    </small>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="email"
                      className="block text-slate-900 dark:text-darkHeading"
                    >
                      <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                        Email
                      </h4>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      // ref={emailRef}
                      value={email}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                      onChange={handleEmailInput}
                      onBlur={()=>setEmail(email.trim())}
                    />
                    <small id="emailError" className="text-red-500 mt-1">
                      {emailError}
                    </small>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="contactNumber"
                      className="block text-slate-900 dark:text-darkHeading"
                    >
                      <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                        Contact Number {"(optional)"}
                      </h4>
                    </label>
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      // ref={contactNumberRef}
                      value={contactNumber}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                      onChange={handleContactNumberInput}
                      onBlur={()=>setContactNumber(contactNumber.trim())}
                    />
                    <small id="contactNumberError" className="text-red-500 mt-1">
                      {contactNumberError}
                    </small>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="companyName"
                      className="block text-slate-900 dark:text-darkHeading"
                    >
                      <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                        Company Name {"(optional)"}
                      </h4>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      // ref={comapanyNameRef}
                      value={companyName}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                      onChange={handleCompanyNameInput}
                      onBlur={()=>setCompanyName(companyName.trim())}
                    />
                    <small id="companynameError" className="text-red-500 mt-1">
                      {companyNameError}
                    </small>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="content"
                      className="block text-slate-900 dark:text-darkHeading"
                    >
                      <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                        What would you like to discuss ?
                      </h4>
                    </label>
                    <textarea
                      name="content"
                      id="content"
                      // ref={discussRef}
                      value={message}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2 min-h-[150px]"
                      onChange={handleMessageInput}
                      onBlur={()=>setMessage(message.trim())}
                    />
                    <small id="contentError" className="text-red-500 mt-1">
                      {messageError}
                    </small>
                  </div>
                  <div className="flex flex-wrap items-center justify-start w-full dark:text-darkSubHeading">
                    <h4 className="text-primaryBlack dark:text-darkSubHeading text-[16px] mr-1">
                      Have a simple question ?
                    </h4>
                    <Link to="/faqs">
                      <h4 className="text-primaryBlue text-[16px]">
                        Check out our FAQ
                      </h4>
                    </Link>
                  </div>
                </motion.div>
                :
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true, delay: 1.5, amount: 0.25 }}
                  className="hidden tab:flex md:hidden flex-col gap-4"
                >
                  { isServiceDown ?                
                    <div
                      className="absolute w-full h-full rounded-[5px] backdrop-blur-[2px] bg-gray-100/30 flex justify-center items-center z-20 text-center"
                      style={{ boxShadow: "0px 0px 5px 5px #f3f4f657" }}
                    >
                      <p className="text-white font-[700] text-3xl">
                        Sorry! Our email service is temporarily out of order. Click{" "}
                        <a
                          className="text-primaryBlue"
                          href="mailto:info@ikarus3d.com"
                        >
                          here
                        </a>{" "}
                        to send us an email directly.
                      </p>
                    </div>
                    : <></>
                    }

                  <div className="absolute opacity-0">
                    <ReCAPTCHA
                      sitekey={env.SITE_KEY}
                      ref={captchaRef}
                      size="invisible"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="block text-slate-900 dark:text-darkHeading"
                      >
                        <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                          Name
                        </h4>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        // ref={nameRef}
                        value={name}
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        onChange={handleNameInput}
                        onBlur={()=>setName(name.trim())}
                      />
                      <small id="nameError" className="text-red-500 mt-1">
                        {nameError}
                      </small>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="email"
                        className="block text-slate-900 dark:text-darkHeading"
                      >
                        <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                          Email
                        </h4>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        // ref={emailRef}
                        value={email}
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        onChange={handleEmailInput}
                        onBlur={()=>setEmail(email.trim())}
                      />
                      <small id="emailError" className="text-red-500 mt-1">
                        {emailError}
                      </small>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="contactNumber"
                        className="block text-slate-900 dark:text-darkHeading"
                      >
                        <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                          Contact Number {"(optional)"}
                        </h4>
                      </label>
                      <input
                        type="text"
                        name="contactNumber"
                        id="contactNumber"
                        // ref={contactNumberRef}
                        value={contactNumber}
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        onChange={handleContactNumberInput}
                        onBlur={()=>setContactNumber(contactNumber.trim())}
                      />
                      <small id="contactNumberError" className="text-red-500 mt-1">
                        {contactNumberError}
                      </small>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="companyName"
                        className="block text-slate-900 dark:text-darkHeading"
                      >
                        <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                          Company Name {"(optional)"}
                        </h4>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        // ref={comapanyNameRef}
                        value={companyName}
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        onChange={handleCompanyNameInput}
                        onBlur={()=>setCompanyName(companyName.trim())}
                      />
                      <small id="companynameError" className="text-red-500 mt-1">
                        {companyNameError}
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="content"
                      className="block text-slate-900 dark:text-darkHeading"
                    >
                      <h4 className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                        What would you like to discuss ?
                      </h4>
                    </label>
                    <textarea
                      name="content"
                      id="content"
                      // ref={discussRef}
                      value={message}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2 min-h-[150px]"
                      onChange={handleMessageInput}
                      onBlur={()=>setMessage(message.trim())}
                    />
                    <small id="contentError" className="text-red-500 mt-1">
                      {messageError}
                    </small>
                  </div>
                  <div className="flex flex-wrap items-center justify-start w-full dark:text-darkSubHeading">
                    <h4 className="text-primaryBlack dark:text-darkSubHeading text-[16px] mr-1">
                      Have a simple question ?
                    </h4>
                    <Link to="/faqs">
                      <h4 className="text-primaryBlue text-[16px]">
                        Check out our FAQ
                      </h4>
                    </Link>
                  </div>
                </motion.div>
              }                            
              <div className="">
                <ServicesPrimaryButton
                  buttonText="Submit"
                  handleButtonClick={inputsCheck}
                />
              </div>
            </div>
          </div>
        </div>
      </ServicesSection>
    </div>
    
  );
};

export default ServicesFooterContact;
