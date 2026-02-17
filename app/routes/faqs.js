import React, { useState, useEffect } from "react";
import Question from "~/components/Question";
import { motion } from "framer-motion";
import GetInTouch from "~/components/GetInTouch";
import SubSectionText from "../components/text/SubSectionText";
import { Footer } from "../components/Footer";
import getBrowserEnv from "../utils/browserEnv";
import Faqs1 from "../components/Faqs1";
import {siteMapTags as nextRoute } from './contact-us';

const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/faqs"},
      {name:"priority", content: 1},
      {name:"next-route", content: nextRoute()}
  ]
};

export function links() {
  return [
    { rel:"canonical", href:`${env.SITE_URL}/faqs` }
  ]
}

export const meta = () => [
  {title: "Ikarus 3D FAQ | Your Guide to Top-Quality 3D Modeling Services"},
  {name:"description", content:"Explore FAQs about Ikarus 3D's 3D modeling services: AR, VR, 3D scanning, VTO, and metaverse readiness. Contact us for more."},
  {property:"og:title", content: "Ikarus 3D FAQ | Your Guide to Top-Quality 3D Modeling Services"},
  {property:"og:url", content: `${env.SITE_URL}/faqs`},
  {property:"og:description", content:"Explore FAQs about Ikarus 3D's 3D modeling services: AR, VR, 3D scanning, VTO, and metaverse readiness. Contact us for more."},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"og:type", content: "website"},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  
  {property:"twitter:title", content: "Ikarus 3D FAQ | Your Guide to Top-Quality 3D Modeling Services"},
  {property:"twitter:description", content:"Explore FAQs about Ikarus 3D's 3D modeling services: AR, VR, 3D scanning, VTO, and metaverse readiness. Contact us for more."},
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          name: "What kinds of projects can you deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have expertise in a vast range of products. Check out our portfolio to see what models we can build and deliver.",
          },
        },
        {
          "@type": "Question",
          name: "Will you offer free samples before I hand over my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we can offer a free sample, depending on the complexity (specified requirements by you) and the scope of the project",
          },
        },
        {
          "@type": "Question",
          name: "Can you handle multiple projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We churn out thousands of models every month.",
          },
        },
        {
          "@type": "Question",
          name: "Can you provide a dedicated team for the task?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We can assign a set of dedicated resources to work specifically on your project to ensure the consistency in the work.",
          },
        },
        {
          "@type": "Question",
          name: "Will a project manager be dedicated to my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we will assign a project manager for your project who will be accessible to you 24*7 for any updates and queries.",
          },
        },
        {
          "@type": "Question",
          name: "What file sizes, file formats, and minimum poly-budget do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with: - a file size as small as 2MB, to whatever you want us to work with. - various file formats like glb, gltf, usdz, obj, and fbx among others. - 5k-100k or higher (if required) polycount.",
          },
        },
        {
          "@type": "Question",
          name: "What information would you require before starting the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are few things we’d require to get started like reference images (CAD files, 2D images, website URLs we can refer to). We’d also need some technical details like the poly-budget, file sizes and formats, texture resolution, etc.",
          },
        },
        {
          "@type": "Question",
          name: "What is your Minimum Order Quantity (MOQ)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "50 or more models",
          },
        },
        {
          "@type": "Question",
          name: "How many models can you deliver per month?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can deliver more than 1000-1200 models per month, depending upon the services you require, we can always discuss deadlines that suit you.",
          },
        },
        {
          "@type": "Question",
          name: "Do you have any in-house QC system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have an internal proprietary tool that ensures a proper QC/QA mechanism, so you don’t have to worry about quality.",
          },
        },
        {
          "@type": "Question",
          name: "What is the entire process of the job?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We engage you in an efficient and collaborative e-meeting for a detailed discussion on the Statement of Work (SOW) and the technical intricacies of your project. We provide live status updates throughout the process, ensuring transparency and real-time insights into the project's progress. Our internal quality assurance, powered by a proprietary quality scoring tool, guarantees meticulous attention to detail. The final delivery is streamlined to meet your expectations. We encourage open communication and feedback implementation, fostering continuous improvement and client satisfaction. ConnecWe engage you in an efficient and collaborative e-meeting for a detailed discussion on the Statement of Work (SOW) and the technical intricacies of your project. We provide live status updates throughout the process, ensuring transparency and real-time insights into the project's progress. Our internal quality assurance, powered by a proprietary quality scoring tool, guarantees meticulous attention to detail. The final delivery is streamlined to meet your expectations. We encourage open communication and feedback implementation, fostering continuous improvement and client satisfaction. Connect with us on LinkedIn to stay updated and involved in every step of the project journey.t with us on Facebook to stay updated and involved in every step of the project journey.",
          },
        },
      ], 
    }
  }
];

const FAQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [delay, setQuestionDelay] = useState(false);
  const [faqSectionClicked, setFaqSectionClicked] = useState("project");

  const project = [
    {
      question: "What kinds of projects can you deliver?",
      answer: (
        <span>
          We have expertise in a vast range of products. Check out our{" "}
          <a href="/portfolio" className="text-primaryBlue">
            portfolio
          </a>{" "}
          to see what models we can build and deliver.
        </span>
      ),
    },
    {
      question: "Will you offer free samples before I hand over my project?",
      answer:
        " Yes, we can offer a free sample, depending on the complexity (specified requirements by you) and the scope of the project",
    },
    {
      question: "Can you handle multiple projects?",
      answer: "Yes. We churn out thousands of models every month.",
    },
    {
      question: "Can you provide a dedicated team for the task?",
      answer:
        " Absolutely. We can assign a set of dedicated resources to work specifically on your project to ensure the consistency in the work.",
    },
    {
      question: "Will a project manager be dedicated to my project?",
      answer:
        "Yes, we will assign a project manager for your project who will be accessible to you 24*7 for any updates and queries.",
    },
  ];
  const technical = [
    {
      question:
        " What file sizes, file formats, and minimum poly-budget do you work with?",
      answer: (
        <div>
          <p> We work with: </p>
          <p>
            - a file size as small as 2MB, to whatever you want us to work with.
          </p>
          <p>
            - various file formats like glb, gltf, usdz, obj, and fbx among
            others.{" "}
          </p>
          <p>- 5k-100k or higher (if required) polycount.</p>
        </div>
      ),
    },
    {
      question:
        "What information would you require before starting the project?",
      answer:
        "There are few things we’d require to get started like reference images (CAD files, 2D images, website URLs we can refer to). We’d also need some technical details like the poly-budget, file sizes and formats, texture resolution, etc.",
    },
    {
      question: "What is your Minimum Order Quantity (MOQ)?",
      answer: "50 or more models",
    },
    {
      question: "How many models can you deliver per month?",
      answer:
        "We can deliver more than 1000-1200 models per month, depending upon the services you require, we can always discuss deadlines that suit you.",
    },
  ];
  const general = [
    {
      question: "Do you have any in-house QC system?",
      answer:
        "We have an internal proprietary tool that ensures a proper QC/QA mechanism, so you don’t have to worry about quality.",
    },
    {
      question: "What is the entire process of the job?",
      answer: (
        <span>
          We engage you in an efficient and collaborative e-meeting for a detailed discussion on the Statement of Work (SOW) and the technical intricacies of your project. We provide live status updates throughout the process, ensuring transparency and real-time insights into the project's progress. Our internal quality assurance, powered by a proprietary quality scoring tool, guarantees meticulous attention to detail. The final delivery is streamlined to meet your expectations. We encourage open communication and feedback implementation, fostering continuous improvement and client satisfaction. Connect with us on <a href="https://www.linkedin.com/company/ikarus3d/" className="text-primaryBlue">LinkedIn</a> to stay updated and involved in every step of the project journey.
        </span>
      ),
    },
  ];

  const [currentFAQSection, setCurrentFAQSection] = useState(project);
  const desc = "Have any other questions? Connect with us and we’ll answer";

  useEffect(() => {
    setQuestionDelay(false);
    setTimeout(() => setQuestionDelay(true), 300);
  }, [currentQuestion]);

  return (
    <div className="  dark:bg-primaryDarkBg bg-secondaryBackground">
      <div className="text-2xl px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw]">
        <h1 className="text-center pt-smCustomHead tab_old:pt-mdCustomHead dark:text-darkHeading">
          FAQs
        </h1>
      </div>
      <div className="flex justify-between py-smCustomHead tab_old:py-mdCustomHead px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw]">
        <div className="w-full tab_old:w-[95%] lap:w-full mx-auto">
          <div className="flex flex-col-reverse tab_old:flex-row tab_old:justify-around tab_old:pt-mdCustomHead lap:pt-0">
            <div className="w-[85%] mx-auto tab_old:mx-0 tab_old:w-[25%]">
              <div
                onClick={() => {
                  setCurrentFAQSection(project);
                  setFaqSectionClicked("project");
                }}
                className="flex items-center text-center tab_old:text-left justify-center tab_old:justify-start bg-cardBackgroundColor hover:bg-darkSubHeading hover:dark:text-secondaryDarkBackground text-sm tab_old:text-xl xl_old:text-3xl dark:text-darkHeading rounded-[5px] p-4 cursor-pointer"
              >
                Project
              </div>
              <div
                onClick={() => {
                  setCurrentFAQSection(technical);
                  setFaqSectionClicked("technical");
                }}
                className="flex items-center text-center tab_old:text-left justify-center tab_old:justify-start bg-cardBackgroundColor hover:bg-darkSubHeading hover:dark:text-secondaryDarkBackground text-sm tab_old:text-xl xl_old:text-3xl dark:text-darkHeading rounded-[5px] mt-[1px] p-4 cursor-pointer"
              >
                Technical
              </div>
              <div
                onClick={() => {
                  setCurrentFAQSection(general);
                  setFaqSectionClicked("general");
                }}
                className="flex items-center text-center tab_old:text-left justify-center tab_old:justify-start bg-cardBackgroundColor hover:bg-darkSubHeading hover:dark:text-secondaryDarkBackground text-sm tab_old:text-xl xl_old:text-3xl dark:text-darkHeading rounded-[5px] mt-[1px] p-4 cursor-pointer"
              >
                General
              </div>
            </div>
            <div className="py-smCustomHead tab_old:py-0 tab_old:ml-12 lap:ml-0 w-full tab_old:w-[53%]">
              <Faqs1 faqs={currentFAQSection} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
