import React, { useEffect, useRef } from "react";
import { Link } from "@remix-run/react";
import { useState } from "react";
import SubSectionHeading from "../components/text/SubSectionHeading";
import { useDispatch } from "react-redux";
import { updatePage } from "~/redux/headerSlice";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYou from "../components/thankYou";
import ServicesFooterContact from "../components/ServiceFooterContactUs";
import {siteMapTags as nextRoute } from "./terms-and-conditions";
const env = getBrowserEnv();

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/contact-us` }
  ]
}

export const siteMapTags = () => {
  return [
      {name:"route", content: "/contact-us"},
      {name:"priority", content: 0.8},
      {name:"next-route", content: nextRoute()}
  ]
};

export function meta() {
  return [
    {title: "At your service | Contact Us | Ikarus 3D"},
    {name:"description", content:"Seeking Professional 3D services for your business? Let’s connect for a free consultation with our expert to discuss your 3D requirements."},
    {property:"og:title", content: "Contact us - Ikarus 3D"},
    {property:"og:url", content: `${env.SITE_URL}/contact-us`},
    {property:"og:description", content:"Seeking Professional 3D services for your business? Let’s connect for a free consultation with our expert to discuss your 3D requirements."},
    {property:"og:image", content: "../public/images/Header_Logo_D.png"},
    {property:"og:type", content: "website"},
    {property:"twitter:card", content: "summary_large_image"},
    {property:"twitter:site", content:"@ikarus_3d"},
    {property:"twitter:domain", content:"https://ikarus3d.com"},
    {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},    
    {property:"twitter:title", content: "Contact us - Ikarus 3D"},
    {property:"twitter:description", content:"Seeking Professional 3D services for your business? Let’s connect for a free consultation with our expert to discuss your 3D requirements."},
  ];
}

export default function ContactUs() {
//   const nameRef = useRef(null);
//   const contactRef = useRef(null);
//   const emailRef = useRef(null);
//   const comapanyNameRef = useRef(null);
//   const discussRef = useRef(null);
//   const captchaRef = useRef(null);
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState("no error");
//   const [contactInfo, setContactInfo] = useState("");
//   const [contactError, setContactError] = useState("no error");
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("no error");
//   const [companyName, setCompanyName] = useState("");
//   const [companyNameError, setCompanyNameError] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageError, setMessageError] = useState("");
//   const [inputsOk, setInputsOk] = useState(false);
//   const [isServiceDown, setIsServiceDown] = useState(false);

//   const handleNameInput = (event) => {
//     if (
//       event.target.value === undefined ||
//       event.target.value === null ||
//       event.target.value === ""
//     ) {
//       setNameError("Name is Required");
//     } else {
//       setNameError("no error");
//     }
//     setName(event.target.value);
//   };
//   const handleContactInput = (event) => {
//     if (
//       event.target.value === undefined ||
//       event.target.value === null ||
//       event.target.value === ""
//     ) {
//       setContactError("Name is Required");
//     } else {
//       setContactError("no error");
//     }
//     setContactInfo(event.target.value);
//   };

//   const handleEmailInput = (event) => {
//     if (
//       event.target.value === undefined ||
//       event.target.value === null ||
//       event.target.value === ""
//     ) {
//       setEmailError("Email is Required");
//       setInputsOk(false);
//     } else if (
//       !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
//     ) {
//       setEmailError("Enter a valid Email.");
//       setInputsOk(false);
//     } else {
//       setInputsOk(true);
//       setEmailError("no error");
//     }
//     setEmail(event.target.value);
//   };

//   const handleCompanyNameInput = (event) => {
//     if (
//       event.target.value === undefined ||
//       event.target.value === null ||
//       event.target.value === ""
//     ) {
//       setCompanyNameError("Company Name is Required");
//     } else {
//       setCompanyNameError(null);
//     }
//     setCompanyName(event.target.value);
//   };

//   const handleMessageInput = (event) => {
//     if (
//       event.target.value === undefined ||
//       event.target.value === null ||
//       event.target.value === ""
//     ) {
//       setMessageError("Company Name is Required");
//     } else {
//       setMessageError(null);
//     }
//     setMessage(event.target.value);
//   };

//   const handleFormSubmission = async () => {
//     let response;

//     try {
//       const captchaToken = await captchaRef.current.executeAsync();
//       captchaRef.current.reset(); // we are resetting this because in case after submitting the captcha there's some error at the server, so the reCaptcha here is ready for another verification test.

//       response = await fetch(env.GET_IN_TOUCH_API, {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "Accept-Encoding": "gzip, deflate, br",
//         },
//         body: JSON.stringify({
//           email: email,
//           attributes: {
//             FIRSTNAME: name,
//             COMPANY_NAME: companyName,
//             TOPIC_FOR_DISCUSSION: message,
//           },
//           updateEnabled: true,
//           captchaToken: captchaToken,
//         }),
//       });

//       if (response.status === 201) {
//         window.location.href = "/thank-you?status=registered&status_code=201";
//       } else if (response.status === 429) {
//         window.location.href = "/thank-you?status=existing&status_code=429";
//       } else if (response.status === 403) {
//         window.location.href = "/thank-you?status=bot&status_code=403";
//       }
//     } catch (e) {
//       // handle network connectivity issues
//       setIsServiceDown(true);
//     }
//   };

//   const inputsCheck = () => {
//     if (name === "" || typeof name === "undefined" || name === null) {
//       return false;
//     }

//     if (
//       companyName === "" ||
//       typeof companyName === "undefined" ||
//       companyName === null
//     ) {
//       return false;
//     }

//     if (message === "" || typeof message === "undefined" || message === null) {
//       return false;
//     }

//     if (emailError !== "no error") {
//       return false;
//     }


//     if(contactInfo==="" || typeof contactInfo === "undefined" || contactInfo === null) {
//       return false;
//     }

//     if (email === "" || typeof email === "undefined" || email === null) {
//       return false;
//     }

//     handleFormSubmission();
//     return true;
//   };

//   useEffect(() => {
//     dispatch(updatePage("Contact us"));
//     setName(nameRef.current.value);
//     setEmail(emailRef.current.value);
//     setCompanyName(comapanyNameRef.current.value);
//     setMessage(discussRef.current.value);
//     setContactInfo(contactRef.current.value);
//   }, []);

  return (
    <>
      <div className="relative dark:bg-primaryDarkBg bg-secondaryBackground flex">
        <ServicesFooterContact />
       </div>
      <Footer />
    </>
  );
}
