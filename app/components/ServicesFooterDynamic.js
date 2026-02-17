import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SubSectionHeading from "./text/SubSectionHeading";
import SubSectionSubHeading from "./text/SubSectionSubHeading";
import SubSectionText from "./text/SubSectionText";
import getBrowserEnv from "../utils/browserEnv";
import ReCAPTCHA from "react-google-recaptcha";
import PrimaryCTASection from "./PrimaryCTASection";
import Cookies from "js-cookie"
const env = getBrowserEnv();

const ServicesFooter = ({
  ctaHeading,
  ctaText,
  ctaLink,
  formHeading,
  formText,
  buttonText,
}) => {
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [contactInfo, setContactInfo] = useState();
  const [contactError, setContactError] = useState();
  const [emailError, setEmailError] = useState(null);
  const [companyName, setCompanyName] = useState();
  const [companyNameError, setCompanyNameError] = useState();
  const [message, setMessage] = useState();
  const [messageError, setMessageError] = useState();
  const captchaRef = useRef(null);
  const [isServiceDown, setIsServiceDown] = useState(false);

  const handleFormSubmission = async () => {
    try {
      const captchaToken = await captchaRef.current.executeAsync();
      captchaRef.current.reset(); // we are resetting this because in case after submitting the captcha there's some error at the server, so the reCaptcha here is ready for another verification test.
      const utmInfo = Cookies.get("utm");
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
          contactNumber: contactInfo,
          companyName: companyName,
          topicForDiscussion: message,
          updateEnabled: true,
          captchaToken: captchaToken,
          ...JSON.parse(utmInfo),
          // skipCaptcha: skipCaptcha
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
    // if(!contactInfo)
    //   setContactError("Contact Info is Required");        
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
      contactError
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

  const handleContactInput = (event) => {
    if (
      event.target.value === undefined ||
      event.target.value === null ||
      event.target.value === ""
    ) {
      setContactError("Contact Number is Required");
    } else if (!/^\+?[1-9][0-9]{6,14}$/.test(event.target.value.trim())) {
      setContactError("Enter valid Contact Number of 7 to 15 length.");
    } else {
      setContactError(null);
    }
    setContactInfo(event.target.value);
  };

  const handleEmailInput = (event) => {
    if (
      event.target.value === undefined ||
      event.target.value === null ||
      event.target.value === ""
    ) {
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

  const handleCompanyNameInput = (event) => {
    if (
      event.target.value === undefined ||
      event.target.value === null ||
      event.target.value === ""
    ) {
      setCompanyNameError(null);
    } else {
      setCompanyNameError(null);
    }
    setCompanyName(event.target.value);
  };

  const handleMessageInput = (event) => {
    if (
      event.target.value === undefined ||
      event.target.value === null ||
      event.target.value === ""
    ) {
      setMessageError("Message content is required");
    } else if (event.target.value.length > 1500) {
      setMessageError("Message should have maximum 500 characters.");
    } else if (event.target.value.length < 10) {
      setMessageError("Message should have minimum 10 characters.");
    } else {
      setMessageError(null);
    }
    setMessage(event.target.value);
  };

  useEffect(()=>{
    setMessage("")
  }, [])

  return (
    <>
      {/* <div className="relative overflow-hidden dark:bg-tertiaryBackground flex flex-col bg-[url('../../public/images/ctaBg.png')] bg-cover tab:flex-row justify-center items-center py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob_old:px-10 tab:px-16 lap:px-24 xl:px-[10vw] xxl:px-[18vw]"> */}
      {/* <div className="z-10 tab:relative left-0 right-0 text-center w-full lap:w-[80%]"> */}
      {/* <div className="leading-relaxed text-ikarus-black dark:text-darkHeading">
            <SubSectionHeading text={ctaHeading} />            
          </div> */}
      {/* <a href={ctaLink} className="w-fit mx-auto block">
            <button
              className={`border-1 mt-[30px] lap:mt-6 flex items-center px-4 mob_old:px-5 py-3 xl:py-5 xl:px-12 group rounded-[5px] text-xs mob_old:text-sm xl:text-xl transition ease-in-out duration-200 text-primaryBlack bg-white mx-auto`}
            >
              <span className="font-[500]">{ctaText}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-1 w-0 h-6 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300 ease-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a> */}
      {/* </div> */}
      
      {/* </div> */}

      {/* <div className="bg-primaryDarkBg pt-5 pb-[74px]">
        <div className="flex flex-col gap-[30px] md:gap-0 md:items-center bg-[url('../../public/images/ctaBg.png')] bg-cover pl-[62px] md:pl-[80px] pr-[100px] py-[58px] md:py-[70px] mx-16 md:mx-[86px] lg:mx-[112px] xl:mx-[138px] rounded-[10px]">
          <div className="z-10 tab:relative left-0 right-0 text-center w-full lap:w-[80%]">
            <div className="leading-relaxed text-ikarus-black dark:text-darkHeading">
              <SubSectionHeading text={ctaHeading} />
            </div>
            <a href={ctaLink} className="w-fit mx-auto block">
              <button
                className={`border-1 mt-[30px] lap:mt-6 flex items-center px-4 mob_old:px-5 py-3 xl:py-5 xl:px-12 group rounded-[5px] text-xs mob_old:text-sm xl:text-xl transition ease-in-out duration-200 text-primaryBlack bg-white mx-auto`}
              >
                <span className="font-[500]">{ctaText}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="ml-1 w-0 h-6 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300 ease-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div> */}
      {/* {Consultation Call Section} */}

      <PrimaryCTASection
        element="h4"
        headings={["Schedule a Free Consultation Call Today"]}
        subheading="Experience How Our Solutions Can Propel Your Business Forward with a
        Consultation."
        handleSecondaryButtonClick={""}
        secondaryButtonText="Request a custom quote"
        handlePrimaryButtonClick={""}
        primaryButtonText="Schedule Now"
      />

      <div className="bg-[#F8F9FC] dark:bg-primaryDarkBg flex flex-col gap-[30px] lap:gap-4 justify-between w-full py-smCustomHead tab:py-mdCustomHead  xl:py-xlCustom px-4 mob_old:px-10 tab:px-16 lap:px-24 xl:px-[10vw] xxl:px-[18vw]">
        <div className="absolute opacity-0">
          <ReCAPTCHA sitekey={env.SITE_KEY} ref={captchaRef} size="invisible" />
        </div>
        <div className="w-[80%] tab:w-[60%] text-center self-center border-2 lap:border-0 py-[15px] lap:py-0 lap:px-0 rounded-[4.5rem] lap:rounded-none border-darkHeading">
          <div className="leading-relaxed tracking-wider">
            <SubSectionSubHeading element="h3" text={formHeading} />
          </div>
        </div>
        <div className="flex flex-col lap:flex-row gap-[30px] lap:gap-0 w-full lap:mt-6 xl:mt-[6rem] h-auto justify-between items-start">
          <div className="flex flex-col tab:justify-center gap-4 w-full lap:w-1/2 lap:ml-0 tab:mt-[15px] lap:mt-0 ">
            <div className="flex flex-row gap-4 xl:h-1/3 w-full">
              <div className="bg-[#D8667A] dark:bg-cardBackgroundColor w-[48%] tab:w-[60%] text-darkSubHeading p-4 xl:p-7 rounded-[5px] flex lap:items-start">
                <div className="flex flex-col gap-2 mx-auto">
                  <div className="w-9 h-9 tab:h-14 tab:w-14 xl:h-20 xl:w-20 rounded-full bg-tertiaryBackground flex justify-center items-center">
                    <img
                      src={`${env.CDN_BASE_URL}/What+You+Get+Images/team.png`}
                      className="w-[80%] object-contain"
                      alt="Team of more than 80 3D Artists"
                    />
                  </div>
                  <SubSectionSubHeading element="h4" text="Trusted 3D Team" />
                  <SubSectionText
                    text="A large, trustable, fully-dedicated 3D team that understands
                    the scope of work for your project"
                  />
                </div>
              </div>
              <div className="bg-[#D15168] dark:bg-cardBackgroundColor w-[48%] tab:w-[60%] text-darkSubHeading p-4 xl:p-7 rounded-[5px] flex lap:items-start">
                <div className="flex flex-col gap-2 mx-auto">
                  <div className="w-9 h-9 tab:h-14 tab:w-14 xl:h-20 xl:w-20 rounded-full bg-tertiaryBackground flex justify-center items-center">
                    <img
                      src={`${env.CDN_BASE_URL}/What+You+Get+Images/Artboard+17.png`}
                      className="w-[80%] object-contain"
                      alt="Assets at Scale"
                    />
                  </div>
                  <SubSectionSubHeading element="h4" text="Assets at Scale" />
                  <SubSectionText
                    text="Custom 3D models at scale with best turnaround time, no
                    matter the file or the project size"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 xl:h-1/3 w-full">
              <div className="bg-[#D8667A] dark:bg-cardBackgroundColor w-[48%] tab:w-[60%] text-darkSubHeading p-4 xl:p-7 rounded-[5px] flex lap:items-start">
                <div className="flex flex-col gap-2 mx-auto">
                  <div className="w-9 h-9 tab:h-14 tab:w-14 xl:h-20 xl:w-20 rounded-full bg-tertiaryBackground flex justify-center items-center">
                    <img
                      src={`${env.CDN_BASE_URL}/What+You+Get+Images/24x7.png`}
                      className="w-[80%] object-contain"
                      alt="Precise Delivery"
                    />
                  </div>
                  <SubSectionSubHeading element="h4" text="Precise Delivery" />
                  <SubSectionText
                    text="24x7 support and an intensive in-house quality assurance
                    before the final delivery"
                  />
                </div>
              </div>
              <div className="bg-[#D15168] dark:bg-cardBackgroundColor w-[48%] tab:w-[60%] text-darkSubHeading p-4 xl:p-7 rounded-[5px] flex lap:items-center">
                <div className="flex flex-col gap-2 mx-auto">
                  <div className="w-9 h-9 tab:h-14 tab:w-14 xl:h-20 xl:w-20 rounded-full bg-tertiaryBackground flex justify-center items-center">
                    <img
                      src={`${env.CDN_BASE_URL}/What+You+Get+Images/smoothIntegration.webp`}
                      className="h-[70%] object-contain"
                      alt="Smooth Integration"
                    />
                  </div>
                  <SubSectionSubHeading element="h4" text="Smooth Integration" />
                  <SubSectionText
                    text="Seamless and smooth integration of 3D models on any
                    configurator or platform"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-16 w-full lap:w-[40%] tab:mt-[15px] lap:justify-end lap:mt-0 border-red-400">
            <div className="w-full tab:max-w-[540px] xl:max-w-[700px] flex flex-col tab:mx-auto lap:mx-0 xl:mx-auto gap-[15px] xl:gap-[30px] relative">
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
              <div className="tab:mb-1">
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-slate-900 dark:text-darkHeading"
                >
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px]">
                    Name
                  </h4>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // ref={nameRef}
                  value={name}
                  className="h-[45px] dark:text-darkHeading lap:h-[37px] xl:h-[50px] bg-cardBackgroundColor w-full border-[1px] border-slate-800 px-2 py-1 rounded-[5px]"
                  onChange={handleNameInput}
                  onBlur={()=>setName(name.trim())}
                />
                <small id="nameError" className="text-red-500 mt-1">
                  {nameError}
                </small>
              </div>
              <div className="my-1">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-slate-900 dark:text-darkHeading"
                >
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px]">
                    Email
                  </h4>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // ref={emailRef}
                  value={email}
                  className="h-[45px] dark:text-darkHeading lap:h-[37px] xl:h-[50px] bg-cardBackgroundColor w-full border-[1px] border-slate-800 px-2 py-1 rounded-[5px]"
                  onChange={handleEmailInput}
                  onBlur={()=>setEmail(email.trim())}
                />
                <small id="emailError" className="text-red-500 mt-1">
                  {emailError}
                </small>
              </div>
              <div className="tab:mb-1">
                <label
                  htmlFor="contactInfo"
                  className="block mb-1 font-medium text-slate-900 dark:text-darkHeading"
                >
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px]">
                    Contact Number {"(optional)"}
                  </h4>
                </label>
                <input
                  type="text"
                  name="contactInfo"
                  id="contactInfo"
                  // ref={contactRef}
                  value={contactInfo}
                  className="h-[45px] dark:text-darkHeading lap:h-[37px] xl:h-[50px] bg-cardBackgroundColor w-full border-[1px] border-slate-800 px-2 py-1 rounded-[5px]"
                  onChange={handleContactInput}
                  onBlur={()=>setContactInfo(contactInfo.trim())}
                />
                <small id="contactNumberError" className="text-red-500 mt-1">
                  {contactError}
                </small>
              </div>
              <div className="my-1">
                <label
                  htmlFor="companyName"
                  className="block mb-2 font-medium text-slate-900 dark:text-darkHeading"
                >
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px]">
                    Company Name {"(optional)"}
                  </h4>
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  // ref={comapanyNameRef}
                  value={companyName}
                  className="h-[45px] dark:text-darkHeading lap:h-[37px] xl:h-[50px] bg-cardBackgroundColor w-full border-[1px] border-slate-800 px-2 py-1 rounded-[5px]"
                  onChange={handleCompanyNameInput}
                  onBlur={()=>setCompanyName(companyName.trim())}
                />
                <small id="companynameError" className="text-red-500 mt-1">
                  {companyNameError}
                </small>
              </div>
              <div className="my-1">
                <label
                  htmlFor="content"
                  className="mt-1 mb-2 block text-slate-900 dark:text-darkHeading"
                >
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px]">
                    What would you like to discuss ?
                  </h4>
                </label>
                <textarea
                  name="content"
                  id="content"
                  rows="8"
                  // ref={discussRef}
                  value={message}
                  cols="50"
                  className=" dark:text-darkHeading bg-cardBackgroundColor w-full border-[1px] border-slate-800 px-2 py-1 rounded-[5px]"
                  onChange={handleMessageInput}
                  onBlur={()=>setMessage(message.trim())}
                />
                <small id="contentError" className="text-red-500 mt-1">
                  {messageError}
                </small>
              </div>
              <div className="flex flex-wrap items-center justify-start text-sm w-full text-slate-900 dark:text-darkSubHeading">
                {/* <p>Have a simple question ?&nbsp;</p> */}
                <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px] mr-1">
                  Have a simple question ?
                </h4>
                <Link to="/faqs" className="underline dark:text-darkSubHeading">
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[20px] leading-[21px]">
                    Check out our FAQ
                  </h4>
                </Link>
              </div>
              <div>
                <div className="mx-auto lap:mx-0 lap:float-right">
                  <div
                    className="flex justify-center lap:justify-end mt-[15px] tab:mt-[30px]"
                    onClick={inputsCheck}
                  >
                    <div className="flex flex-row flex-wrap text-white xs:justify-start tab:mr-0 min-w-[8.25rem] items-center">
                      <div className="mx-auto tab:mx-0">
                        <button
                          className={`h-[45px] lap:h-[37px] xl:h-[50px] px-4 mob_old:px-5 py-2 xl:px-8 flex items-center dark:shadow-buttonShadow rounded-[5px] text-xs mob_old:text-sm xl:text-xl animated-gradient text-white`}
                        >
                          {buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesFooter;
