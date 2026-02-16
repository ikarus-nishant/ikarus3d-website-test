import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SubSectionHeading from "./text/SubSectionHeading";
import SubSectionSubHeading from "./text/SubSectionSubHeading";
import getBrowserEnv from "../utils/browserEnv";
import ReCAPTCHA from "react-google-recaptcha";
import ServicesHeadingAndSubheading from "./ServicesHeadingAndSubheading";
import ServicesPrimaryButton from "./ServicesPrimaryButton";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";
import useViewportWidth from "~/hooks/useViewportWidth";
import Cookies from "js-cookie"
const env = getBrowserEnv();

const ServicesFooter = ({ formHeading, formText }) => {

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
      console.log("utminfo",utmInfo);
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
          // skipCaptcha: skipCaptcha
          ...JSON.parse(utmInfo),
        }),
      });
      if (response.status === 201) {
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
    //   setContactNumberError("Contact Number is Required");        
    if(!message)
      setMessageError("Description is required");
    // if(!companyName)
    //   setCompanyNameError("Company name is required");

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
      const margin = parseInt(width * 0.123);
      setFormMarginTop(margin);
    }
  };

  useEffect(() => {
    setMarginTop();
  }, [formContainerRef.current]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMarginTop();
    });
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
    <ServicesSection blockXPadding={true}>
      <div className="grid md:grid-cols-2 gap-9" id="contact-us">
        <div className="block md:hidden w-full text-left px-6 lg:pl-[112px] xl:pl-[138px]">
          <ServicesHeadingAndSubheading
            element="h5"
            heading={formHeading}
            subheading={formText}
          />
        </div>
        <div
          className="hidden md:block w-full text-left px-6 lg:pl-[112px] xl:pl-[138px]"
          style={{
            marginTop: formMarginTop ? `${formMarginTop + 80}px` : "125px",
          }}
        >
          <ServicesHeadingAndSubheading
            element="h5"
            heading={formHeading}
            subheading={formText}
          />
        </div>
        <div ref={formContainerRef} className="w-full relative">
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
              loading="lazy"
            />
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0A0C10] via-10% z-20"></div>
          <div
            className="flex flex-col gap-9 z-30 px-6 md:px-[112px] xl:px-[138px] pb-6 relative"
            style={{
              marginTop: formMarginTop ? `${formMarginTop + 80}px` : "125px",
            }}
          >
            { viewportWidth < 600 || viewportWidth > 960 ?            
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, delay: 1.5, amount: 0.25 }}
                className="flex tab:hidden md:flex flex-col gap-4"
              >
                <div
                  className={`${
                    isServiceDown ? "" : "hidden"
                  } absolute w-full h-full rounded-[5px] backdrop-blur-[2px] bg-gray-100/30 flex justify-center items-center z-20 text-center`}
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
                    // // ref={nameRef}
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
                    // ref={companyNameRef}
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
                <div
                  className={`${
                    isServiceDown ? "" : "hidden"
                  } absolute w-full h-full rounded-[5px] backdrop-blur-[2px] bg-gray-100/30 flex justify-center items-center z-20 text-center`}
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
                      // ref={companyNameRef}
                      value={companyName}
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                      onChange={handleCompanyNameInput}
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
            <ServicesPrimaryButton
              buttonText="Submit"
              handleButtonClick={inputsCheck}
            />
          </div>
        </div>
      </div>
    </ServicesSection>
  );
};

export default ServicesFooter;
