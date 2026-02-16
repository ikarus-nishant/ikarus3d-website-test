import { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import getBrowserEnv from "../utils/browserEnv";
import all from "email-providers/all.json";
import common from "email-providers/common.json";
import ThankYou from "./thankYou";
import SubSectionHeading from "./text/SubSectionSubHeading";
import SubSectionText from "./text/SubSectionText";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const env = getBrowserEnv();

const ModalHeroSection = (props) => {
  const fileFormats = [
    "zip",
    "rar",
    "png",
    "jpg",
    "jpeg",
    "webp",
    "mkv",
    "mp4",
    "avi",
    "mov",
    "pdf",
  ];
  const fileExtensions =
    ".zip, .rar, .png, .jpg, .jpeg, .webp, .mkv, .mp4, .avi, .mov, .pdf";
  const modalRef = useRef();
  const captchaRef = useRef(null);
  const [ showConfirmationBox, setShowConfirmationBox ] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState();
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState();
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState();
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState();
  const [isServiceDown, setIsServiceDown] = useState(false);
  const [statusCode, setStatusCode] = useState();
  const [responseModalHeading, setResponseModalHeading] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [showLoader, setShowLoader] = useState(false);

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
      console.log('email is invalid!!!');
      setEmailError("Email is Required");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value.trim())
    ) {
      setEmailError("Enter a valid Email.");
    }     
    else {
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

  const handleCommentInput = (event) => {
    if (!event.target.value) {
      setCommentError("Comment is Required");
    } else if (event.target.value.length > 500) {
      setCommentError("Comment should have maximum 500 characters.");
    } else if (event.target.value.length < 10) {
      setCommentError("Comment should have minimum 10 characters.");
    } else {
      setCommentError(null);
    }
    setComment(event.target.value);
  };

  const isFileValid = (file) => {
    const extension = file.name.split(".").at(-1);
    if (fileFormats.includes(extension)) {    
      if (file.size > 52428800) {
        setFileError("The file's size must not exceed 50 MB.");
        return false;
      } else {
        setFileError(null)
        return true;
      }
    } else {
      setFileError("File format not accepted.");
      return false;
    }
  };

  const dropHandler = (event) => {    
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (isFileValid(file)) {
      setFile(file);
    }
  };

  const handleFileInput = (event) => {    
    const file = event.target.files[0];
    if (isFileValid(file)) {
      setFile(file);
    }
  };

  const handleFormSubmission = async () => {
    let response;
    try {
      const captchaToken = await captchaRef.current.executeAsync();
      captchaRef.current.reset(); // we are resetting this because in case after submitting the captcha there's some error at the server, so the reCaptcha here is ready for another verification test.
      const utmInfo = Cookies.get("utm");
      const formData = new FormData();
      formData.append("file", file);      
      formData.append("email", email);      
      formData.append("fullName", name);
      formData.append("contactNumber", contactNumber ? contactNumber : "");      
      formData.append("companyName", companyName);
      formData.append("comment", comment);      
      formData.append("captchaToken", captchaToken);
      if (utmInfo && typeof(utmInfo)==="Object") {
        const utmData = JSON.parse(utmInfo);
        Object.entries(utmData).forEach(([key, value]) => {
            formData.append(key, value);
        });
      }

      response = await fetch(env.FREE_SAMPLE_API, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip, deflate, br",
        },
        body: formData,
      });

      if (response.status === 200 || response.status === 201) {
        setResponseModalHeading("Sample Request Received!");
        setAlertMessage("Thanks! We'll be in touch via email soon.");
        setStatusCode(201);
      } else if (response.status === 429 || response.status === 409) {
        setResponseModalHeading("You're already subscribed!");
        setAlertMessage("Stay tuned for the latest updates.");
        setStatusCode(429);
      } else if (response.status === 403) {
        setResponseModalHeading("Uh oh!");
        setAlertMessage(
          "You seem to be a bot. If you're not a bot, give it another shot."
        );
        setStatusCode(403);
      }
      setShowLoader(false);
    } catch (e) {
      // handle network connectivity issues
      setResponseModalHeading("Oops! Something went wrong.");
      setAlertMessage(
        "We couldn’t process your submission right now. Please double-check your information and try again. If the issue persists, consider reaching out to our support team. Thanks for your patience!"
      );
      setStatusCode(503);
      setIsServiceDown(true);
      setShowLoader(false);
    }
  };
  const handleExit = () =>{
    if( !name && !email && !contactNumber && !comment && !file && !companyName )
      props.setShowModal(false)
      
    else
      setShowConfirmationBox(true)
  }

  const inputsCheck = () => {
    setShowLoader(true);

    if(!name)
      setNameError("Name is Required");
    if(!email)
      setEmailError("Email is Required");
    // if(!contactNumber)
    //   setContactNumberError("Contact Number is Required");
    // if(!companyName)
    //   setCompanyNameError("Company Name is Required");
    if(!comment)
      setCommentError("Comment is Required");
    // if(!file)
    //   setFileError("File is required");

    if (
      !name ||
      !email ||
      // !contactNumber ||
      // !companyName ||
      !comment
      // !file
    ) {
      setShowLoader(false);
      return false;
    }

    if (
      nameError ||
      emailError ||
      contactNumberError ||
      companyNameError ||
      fileError ||
      commentError
    ) {
      setShowLoader(false);
      return false;
    }

    handleFormSubmission();

    return true;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.setShowModal(false);
      }
    };

    // document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.05)] flex items-center justify-center backdrop-blur-sm"
        style={{ zIndex: 1200 }}
      >
        <div className="flex justify-center h-fit max-h-full w-full overflow-y-auto py-5">
          <div ref={modalRef} className="w-full h-fit">
            {statusCode ? (
              <ThankYou
                statusCode={statusCode}
                setStatusCode={() => {
                  props.setShowModal(false);
                  setStatusCode(null);
                }}
                heading={responseModalHeading}
                alertMessage={alertMessage}
              />
            ) : (
              <div className="grid gap-[15px] lap:gap-[30px] bg-primaryDarkBg px-12 py-10 w-[90%] tab:w-[80%] md:w-2/3 lg:w-1/2 max-w-[800px] mx-auto relative rounded-[10px]">
                <div className={`absolute flex text-center justify-center w-full h-full bg-primaryDarkBg rounded-[10px] ${showConfirmationBox ? 'z-10' : '-z-10'} px-6 tab:px-12`}>
                  <div className="flex flex-col gap-4 h-[calc(100vh-20px)] w-fit justify-center">
                    <SubSectionHeading text="Are you sure you want to go back?" />
                    <SubSectionText text="You have not completed the contact us form yet. If you go back you will lose the information you have entered so far." />
                    <div className="flex flex-col tab:flex-row tab:justify-center gap-2">
                      <div onClick={()=>props.setShowModal(false)} className="cursor-pointer h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xl:py-5 xl:px-12 xxl:py-[19px] shadow-xs rounded-[5px]" style={{color:props.textColor? `${props.textColor}`:"#fff", borderColor:props.borderColor ? `${props.borderColor}`:'#fff'}}>  
                        Leave
                      </div>
                      <div onClick={()=>setShowConfirmationBox(false)} className={`cursor-pointer text-white bg-gradient-to-r from-[#015EF1] to-[#489BE1] h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] xl:font-[400] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]`}                      
                      >
                        Continue filling
                      </div>     
                    </div>
                  </div>
                </div>
                {isServiceDown && (
                  <div
                    className={`absolute w-full h-full rounded-[5px] backdrop-blur-[2px] bg-gray-100/30 flex justify-center items-center z-20 text-center`}
                    style={{ boxShadow: "0px 0px 5px 5px #f3f4f657" }}
                  >
                    <p className="text-white font-[700] text-3xl">
                      Sorry! Our email service is temporarily out of order.
                      Click{" "}
                      <a
                        className="text-primaryBlue"
                        href="mailto:info@ikarus3d.com"
                      >
                        here
                      </a>{" "}
                      to send us an email directly.
                    </p>
                  </div>
                )}
                {showLoader && (
                  <div className="absolute w-full h-full backdrop-blur-sm bg-transparent flex items-center justify-center z-20">
                    <div className="animate-spin h-full w-full max-w-[50px] max-h-[50px] border-l-4 border-primaryBlue rounded-full"></div>
                  </div>
                )}
                <div className="absolute opacity-0">
                  <ReCAPTCHA
                    sitekey={env.SITE_KEY}
                    ref={captchaRef}
                    size="invisible"
                  />
                </div>
                <div
                  className="absolute top-5 right-5 text-white font-medium cursor-pointer"
                  onClick={handleExit}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M19 5L5 19M5.00001 5L19 19"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-[15px] lap:gap-[30px] xl:gap-[45px] text-center">
                  <h1 className="text-2xl tab:text-[2rem] xl:text-[3.25rem] text-darkHeading font-[500] xl:leading-relaxed">
                    { props.formHeading }
                  </h1>
                  <p className="text-base dark:text-darkHeading font-[500]">
                    Indulge in the possibilities of our 3D solutions. Request a
                    tailored sample to witness the exceptional quality and
                    precision.
                  </p>
                </div>
                <div className="grid gap-4 text-white">
                  <div className="grid grid-cols-1 lap:grid-cols-2 gap-4">
                    <div className="grid gap-2 content-start">
                      <label
                        htmlFor="name"
                        className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                      >
                        Name
                      </label>
                      <input
                        autoFocus
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleNameInput}
                        onBlur={()=>setName(name.trim())}
                      />
                      <small id="nameError" className="text-red-500 mt-1 w-full">
                        {nameError}
                      </small>
                    </div>
                    <div className="grid gap-2 content-start">
                      <label
                        htmlFor="email"
                        className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                      >
                        Email
                      </label>
                      <input
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleEmailInput}
                        onBlur={()=>setEmail(email.trim())}
                      />
                      <small id="emailError" className="text-red-500 mt-1">
                        {emailError}
                      </small>
                    </div>
                    <div className="grid gap-2 content-start">
                      <label
                        htmlFor="contactNumber"
                        className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                      >
                        Contact Number {"(optional)"}
                      </label>
                      <input
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        id="contactNumber"
                        name="contactNumber"
                        type="text"
                        value={contactNumber}
                        onChange={handleContactNumberInput}                        
                      />
                      <small
                        id="contactNumberError"
                        className="text-red-500 mt-1"
                      >
                        {contactNumberError}
                      </small>
                    </div>
                    <div className="grid gap-2 content-start">
                      <label
                        htmlFor="companyName"
                        className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                      >
                        Company Name {"(optional)"}
                      </label>
                      <input
                        className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={companyName}
                        onChange={handleCompanyNameInput}
                        onBlur={()=>setCompanyName(companyName.trim())}
                      />
                      <small
                        id="companyNameError"
                        className="text-red-500 mt-1"
                      >
                        {companyNameError}
                      </small>
                    </div>
                  </div>
                  <div className="grid gap-2 content-start">
                    <span className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold">
                      Share a file {"(optional)"}
                    </span>
                    <span className="text-[14px]">
                      File extensions supported:{" "}
                      {fileFormats.map((fileFormat, index) => {
                        if (index === fileFormats.length - 1) {
                          return fileFormat;
                        } else {
                          return `${fileFormat}, `;
                        }
                      })}
                    </span>             
                    <div
                      className="border-2 border-border-slate-800 border-dashed rounded-sm grid justify-items-center gap-2 p-7 bg-[#11141A]"
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={dropHandler}
                    >
                      <span>Drag files to upload</span>
                      <span>or</span>
                      <div className="grid justify-items-center text-center gap-1">
                        <label
                            className="border-[1px] border-primaryBlue text-primaryBlue focus:outline-[#73a6d0] rounded-[22px] w-fit py-2 px-3 cursor-pointer"
                            htmlFor="fileInput"
                            tabIndex={0}
                            onKeyDown={(e)=>{if(e.key === "Enter") e.target.click()}}
                          >
                            <span>Browse files</span>
                            <input
                              type="file"
                              id="fileInput"
                              className="hidden"
                              accept={fileExtensions}
                              onChange={handleFileInput}                              
                            />
                          </label>                                                
                      </div>
                    </div>
                    {file && (
                      <div className="rounded-[5px] border-[1px] border-slate-800 bg-primaryBlue w-full p-2 flex items-center justify-start gap-2">
                        <div className="w-5 h-5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M7.75 12L10.58 14.83L16.25 9.17004"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </g>
                          </svg>
                        </div>

                        <span className="text-[14px]">
                          Uploaded File: {file.name}
                        </span>
                        <span className="text-[14px]">Size: {file.size > 500000 ? file.size/1000000 + 'MB' : file.size/1000 + 'KB' }</span>
                      </div>
                    )}
                    <small id="fileError" className="text-red-500 mt-1">
                      {fileError}
                    </small>
                  </div>
                  <div className="grid gap-2 content-start">
                    <label
                      htmlFor="comment"
                      className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                    >
                      Share your specific requirement or comments
                    </label>
                    <textarea
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2 min-h-[150px]"
                      id="comment"
                      value={comment}
                      onChange={handleCommentInput}
                      onBlur={()=>setComment(comment.trim())}
                    />
                    <small id="commentError" className="text-red-500 mt-1">
                      {commentError}
                    </small>
                  </div>
                  <div className="flex flex-col tab:flex-row items-start tab:justify-between gap-4 tab:gap-0">
                    <span className="flex flex-col tab:flex-row text-base dark:text-darkHeading font-[500]">
                      *Conditions apply as per our&nbsp;<Link className="text-primaryBlue hover:underline" rel="noopener noreferrer" target="_blank" to="/terms-and-conditions">terms of service.</Link>
                    </span>
                    <button
                      className="flex justify-center items-center text-[16px] leading-[22px] lg:leading-[24px] shadow-xs rounded-[5px] text-center text-white px-6 tab:px-9 py-[11px] lg:py-3 h-12 w-full tab:w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1] float-right"
                      onClick={inputsCheck}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalHeroSection;
