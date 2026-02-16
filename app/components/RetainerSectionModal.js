import { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import getBrowserEnv from "../utils/browserEnv";
import SubSectionHeading from "./text/SubSectionHeading";
import SubSectionText from "./text/SubSectionText";
import all from "email-providers/all.json";
import common from "email-providers/common.json";
import ThankYou from "./thankYou";
import Select from "react-select";
import Cookies from 'js-cookie'
const env = getBrowserEnv();

const RetainerSectionModal = (props) => {
  const projectTypesData = [
    {
      label: "Architectural Visualization",
      value: "architectural_visualization",
    },
    { label: "Product Design", value: "product_design" },
    { label: "Game Environment", value: "game_environment" },
    { label: "E-Commerce Visualization", value: "e_commerce_visualization" },
    { label: "Medical Visualization", value: "medical_visualization" },
    { label: "Education & Training", value: "education_&_training" },
    { label: "Metaverse Avatar", value: "metaverse_avatar" },
    { label: "Real Estate Environment", value: "real_estate_environment" },
    { label: "Animation & Entertainment", value: "animation_&_entertainment" },
    { label: "3D Rendering", value: "3d_rendering" },
    { label: "3D Scan Cleanup", value: "3d_scan_cleanup" },
    { label: "AR 3D Model", value: "ar_3d_model" },
    { label: "VR Modeling Services", value: "vr_modeling_services" },
    { label: "Virtual Try On Solution", value: "virtual_try_on_solution" },
    { label: "3D Virtual Spaces", value: "3d_virtual_spaces" },
    { label: "BIM Modeling", value: "bim_modeling" },
    { label: "Other", value: "other" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      position: 'relative',
      height: '3.1rem',
      borderRadius: '5px',
      border: '1px solid #11141A',
      backgroundColor: '#11141A',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    input: (provided) => ({
      ...provided,
      outline: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'white' : state.isFocused ? '#E0E0E0' : '#11141A',
      color: state.isSelected ? 'black' : state.isFocused ? 'black' : 'white',
      padding: '0.5rem 1rem',
      '&:hover, &.is-focused': {
        backgroundColor: '#E0E0E0',
        color: '#11141A', 
      },
    }),
  };
  

  const modalRef = useRef();
  const [ showConfirmationBox, setShowConfirmationBox ] = useState(false);
  const captchaRef = useRef(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState();
  const [projectType, setProjectType] = useState(projectTypesData[0]);
  const [projectTypeError, setProjectTypeError] = useState();
  const [numberOfModels, setNumberOfModels] = useState("");
  const [numberOfModelsError, setNumberOfModelsError] = useState();
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState();
  const [isServiceDown, setIsServiceDown] = useState(false);
  const [statusCode, setStatusCode] = useState();
  const [responseModalHeading, setResponseModalHeading] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const handleExit = () =>{
    if( !name && !email && !description && !contactNumber && !numberOfModels && !projectType )
      props.setShowModal(false)
      
    else
      setShowConfirmationBox(true)
  }

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
      setEmailError("Enter a valid Email.");
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

  const handleProjectTypeInput = (value) => {    
    if (!value) {
      setProjectTypeError("Project selection is required");
    } else {
      setProjectTypeError(null);
    }
    const temp = value.split(",");
    // console.log(temp);
    setProjectType({
      label:temp[0],
      value:temp[1]
    });
    // setProjectType(value);
  };
  // console.log("first",projectType)

  const handleModelNumberInput = (event) => {
    if (!event.target.value) {
      setNumberOfModelsError(null);
    } else if (!/^\+?[0-9]+$/.test(event.target.value.trim())) {
      setNumberOfModelsError("Invalid input, only numbers are allowed");
    } else {
      setNumberOfModelsError(null);
    }
    setNumberOfModels(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    if (!event.target.value) {
      setDescriptionError("Description is Required");
    } else if (event.target.value.length > 1500) {
      console.log("here1");
      setDescriptionError("Description should have maximum 500 characters.");
    } else if (event.target.value.length < 10) {
      console.log("here2");
      setDescriptionError("Description should have minimum 10 characters.");
    } else {
      setDescriptionError(null);
    }
    setDescription(event.target.value);
  };

  const handleFormSubmission = async () => {
    let response;
    const utmInfo = Cookies.get("utm");
    try {
      console.log("utminfo",JSON.parse(utmInfo));
      const captchaToken = await captchaRef.current.executeAsync();
      captchaRef.current.reset(); // we are resetting this because in case after submitting the captcha there's some error at the server, so the reCaptcha here is ready for another verification test.
      response = await fetch(env.HIRE_US, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip, deflate, br",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          contact: contactNumber,
          typeOfProject: projectType.value,
          noOfModels: numberOfModels,
          description: description,
          captchaToken: captchaToken,
          ...JSON.parse(utmInfo)
        }),
      });

      if (response.status === 201) {
        setResponseModalHeading("Thank you for choosing Ikarus 3D!");
        setAlertMessage(
          "Your request has been received. Our experts will contact you shortly via email."
        );
        setStatusCode(201);
      } else if (response.status === 429 || response.status === 409) {
        console.log("utminfo 429 409",utmInfo);
        setResponseModalHeading("You're already subscribed!");
        setAlertMessage("Stay tuned for the latest updates.");
        setStatusCode(429);
      } else if (response.status === 403) {
        console.log("utminfo 403",utmInfo);
        setResponseModalHeading("Uh oh!");
        setAlertMessage(
          "You seem to be a bot. If you're not a bot, give it another shot."
        );
        setStatusCode(403);
      }
    } catch (e) {
      console.log("utminfo oops",JSON.parse(utmInfo));
      setResponseModalHeading("Oops! Something went wrong.");
      setAlertMessage(
        "We couldn’t process your submission right now. Please double-check your information and try again. If the issue persists, consider reaching out to our support team. Thanks for your patience!"
      );
      setStatusCode(503);
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
    if(!projectType)
      setProjectTypeError("Project selection is required");
    // if(!numberOfModels)
    //   setNumberOfModelsError("Input is required for the number of models");
    if(!description)
      setDescriptionError("Description is required");

    if (
      !name ||
      !email ||
      // !contactNumber ||
      !projectType ||
      // !numberOfModels ||
      !description
    ) {
      return false;
    }

    if (
      nameError ||
      emailError ||
      contactNumberError ||
      projectTypeError ||
      numberOfModelsError ||
      descriptionError
    ) {
      return false;
    }

    handleFormSubmission();
    return true;
  };

  return (
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
            <div className="grid gap-[15px] lap:gap-[30px] bg-primaryDarkBg px-12 py-10 w-[90%] tab:w-[80%] md:w-2/3 lg:w-1/2 mx-auto max-w-[800px] relative rounded-[10px]">
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
                  Develop Your Project With Us
                </h1>
                <p className="text-base dark:text-darkHeading font-[500]">
                  Why choose anyone else when you can collaborate with the best?{" "}
                  <br /> Let's get started.
                </p>
                <p className="text-base text-primaryBlue font-[500]">
                  Please provide the details below, and one of our expert
                  artists will connect with you shortly.
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
                      className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={handleNameInput}
                      onBlur={()=>setName(name.trim())}
                      autoFocus
                    />
                    <small id="nameError" className="text-red-500 mt-1">
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
                      onBlur={()=>setContactNumber(contactNumber.trim())}
                    />
                    <small
                      id="contactNumberError"
                      className="text-red-500 mt-1"
                    >
                      {contactNumberError}
                    </small>
                  </div>
                  <div className="grid gap-2 content-start relative">
                    <label
                      htmlFor="projectType"
                      className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                    >
                      Type of project
                    </label>
                    <select
                      value={projectType.label} 
                      onChange={(e) => handleProjectTypeInput(e.target.value)} 
                      className="h-12 appearance-none rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                    >
                      {projectTypesData.map((data, i) => (
                        <option value={[data.label, data.value]} key={`${i}-${data.label}`}>
                          {data.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2">
                      <img src={'/images/downArrow.png'} width={20} height={20}/>
                    </div>
                    {/* <Select value={projectType} onChange={(value)=>handleProjectTypeInput(value)} styles={customStyles} options={projectTypesData}/> */}
                    <small id="projectTypeError" className="text-red-500 mt-1">
                      {projectTypeError}
                    </small>
                  </div>
                </div>
                <div className="grid gap-2 content-start">
                  <label
                    htmlFor="modelNumber"
                    className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                  >
                    No. of models required {"(optional)"}
                  </label>
                  <input
                    className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2"
                    id="modelNumber"
                    name="modelNumber"
                    type="text"
                    value={numberOfModels}
                    onChange={handleModelNumberInput}
                    onBlur={()=>setNumberOfModels(numberOfModels.trim())}
                  />
                  <small id="modelNumberError" className="text-red-500 mt-1">
                    {numberOfModelsError}
                  </small>
                </div>
                <div className="grid gap-2 content-start">
                  <label
                    htmlFor="description"
                    className="text-white text-[16px] tracking-[-0.24px] opacity-70 md:font-semibold"
                  >
                    Project Description
                  </label>
                  <textarea
                    className="h-12 rounded-[5px] border-[1px] border-slate-800 bg-[#11141A] text-white focus:outline-none focus:border-[1px] focus:border-primaryBlue p-2 min-h-[150px]"
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionInput}
                    onBlur={()=>setDescription(description.trim())}
                  />
                  <small id="descriptionError" className="text-red-500 mt-1">
                    {descriptionError}
                  </small>
                </div>
                <div className="block">
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
  );
};

export default RetainerSectionModal;
