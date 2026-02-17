import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import HeroSectionHeading from "../components/text/HeroSectionHeading";
import SubSectionText from "../components/text/SubSectionText";
import ContentHeading from "../components/text/ContentHeading";
import SubSectionHeading from "../components/text/SubSectionHeading";
import Quote from "../components/text/Quote";
import { updatePage } from "~/redux/headerSlice";
import { useDispatch } from "react-redux";
import { Footer } from "../components/Footer";
import PrimaryButton from "../components/primaryButton";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import letter from "../scripts/letter.json";
import getBrowserEnv from "../utils/browserEnv";
import LazyLoad from "react-lazyload";
import Faqs1 from "../components/Faqs1";
import {siteMapTags as nextRoute } from "./faqs";
const env = getBrowserEnv();

export const siteMapTags = () => {
  return [
      {name:"route", content: "/jobs"},
      {name:"priority", content: 0.8},
      {name:"next-route", content: nextRoute()}
  ]
};

export function links() {
  return [
    { rel:"canonical", href:`/jobs` }
  ]
}

export const meta = () => [
  {title: "Job Opportunities at Ikarus 3D | Explore Open Positions"},
  {name:"description", content: "Discover exciting job opportunities at Ikarus 3D. Explore our open positions and learn about our hiring process, including the 3D Cadet Program. Apply now!"},
  {property:"og:title", content: "Careers - Ikarus 3D"},
  {property:"og:description", content: "Discover exciting job opportunities at Ikarus 3D. Explore our open positions and learn about our hiring process, including the 3D Cadet Program. Apply now!"},
  {property:"og:url", content: `/jobs`},
  {property:"og:type", content: "article"},
  {property:"og:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},
  {property:"twitter:card", content: "summary_large_image"},
  {property:"twitter:site", content:"@ikarus_3d"},
  {property:"twitter:domain", content:"https://ikarus3d.com"},
  {property:"twitter:image", content: `${env.CDN_BASE_URL}/miscellaneous/Header_Logo_D.png`},  
  {property:"twitter:title", content: "Job Opportunities at Ikarus 3D | Explore Open Positions"},
  {property:"twitter:description", content:"Discover exciting job opportunities at Ikarus 3D. Explore our open positions and learn about our hiring process, including the 3D Cadet Program. Apply now!"},
];

const WorkAtIkarus = () => {
  const dispatch = useDispatch();
  const [cardClicked, setCardClicked] = useState("");
  const [cardToExpand, setCardToExpand] = useState(null);
  const [delay0, setDelay0] = useState("");
  const [delay1, setDelay1] = useState(false);
  const [delay2, setQuestionDelay2] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  // useEffect(()=>{
  //   window.khConfig = { identifier: '4c0b8cb3-57f7-4afa-b85d-1d968f9806ef',
  //   domain: 'https://ikarus3d.keka.com/careers/',
  //   targetContainer: '#keka'}
  //   var kekaScript = document.createElement('script');
  //   kekaScript.src = 'https://ikarus3d.keka.com/careers/api/embedjobs/js/4c0b8cb3-57f7-4afa-b85d-1d968f9806ef'
  //   kekaScript.defer = true;
  //   document.body.appendChild(kekaScript)
  // },[])

  const general = [
    {
      question: "What is the team size of the company?",
      answer: "Currently, we have around 110 employees in total.",
    },
    {
      question: " What is the location of the company?",
      answer: "We are located in Chandigarh tri-city area, Mohali, Punjab.",
    },
    {
      question: "Do you have any work from home or hybrid work arrangements?",
      answer:
        "We believe that culture and values are better inculcated in members when we work together, in-person.",
    },
    // {
    //   question:
    //     "What are the working days and timings? Do you have night shifts?",
    //   answer:
    //     "We follow 5 day work-weeks, from 9:00 AM to 6:00 PM, no night shifts. ",
    // },
    {
      question: "Do you provide internship opportunities?",
      answer:
        "Yes, we have internship opportunities in every department. Please send us your resume if you are interested.",
    },
    {
      question: "Will I be provided any relocation assistance?",
      answer:
        "Yes, you will be provided relocation assistance in the form of temporary company accommodation (subject to availability) or you can contact at anytime to get suggestions about travel arrangements, finding accommodation, etc. ",
    },
    {
      question: "What should I do if I don’t find the job I am looking for?",
      answer: (
        <span>
          Feel free to send us your resume and other documents at{" "}
          <a href="mailto:careers@ikarus3d.com">careers@ikarus3d.com</a>
          <span>
            Your profile will be retained for any suitable future job openings.
          </span>{" "}
        </span>
      ),
    },
    {
      question: "How will I be informed of the status of my application?",
      answer:
        "All communication is done over the email. If you haven’t received a status update on your application, feel free to contact your respective recruiter.",
    },
    {
      question: "What is the salary range for the profile I’m applying for?",
      answer:
        "Your compensation will depend upon a number of factors like your performance in interviews, your experience, industry standards and so on. For further assistance, please contact us.",
    },
    {
      question: "How many interview rounds will be conducted?",
      answer:
        "Depending upon the profile and technical detail of your role, the number of rounds vary from 3-5.",
    },
    {
      question: "If my application is rejected once, can I apply again?",
      answer:
        "Yes, please feel free to apply after the period of 6 months. We would love to reconsider your application and see how you have upgraded your profile.",
    },
    {
      question: " Can I apply for multiple roles?",
      answer:
        "Sure! We suggest thoroughly going through the job description of the position you are interested in. If you think you are fit for multiple roles according to our requirements, by all means, go ahead.",
    },
  ];

  const threeDDesign = [
    {
      question: "What softwares will I be working with?",
      answer:
        "This depends on your skill set and the project you are assigned to. You can get more clarification from the job description or your respective recruiter.",
    },
    {
      question:
        "As a 3D artist, can I apply for a specific subdivision like modelling, sculpting or texturing?",
      answer:
        "Yes, you can apply for a specific subdivision. Even if you’re a generalist, you will be hired for a particular function depending upon the evaluation of your skills, test and interview process.",
    },
    {
      question:
        "I do not have a computer system. How can I take the test for the position of a 3D artist?",
      answer:
        "We take an online exam, for which we require you to record the screen. However, in case you do not have a computer system, we can arrange for your test at our office.",
    },
    {
      question:
        "I am a working professional, can I give the test at night after my working hours?",
      answer:
        "You can attempt the test anytime as per your availability, however you will have to inform us for the suitable date and time beforehand.",
    },
    {
      question: "What will be the duration of the test?",
      answer:
        "The duration of the test varies, but generally it is 4 - 5 hours. For 3D tests, you need to complete and submit the test within the given deadline.",
    },
  ];

  const cadetProgram = [
    {
      question: "What is 3D Cadet Program?",
      answer:
        "It is a special in-house training program by Ikarus 3D where the trainees (3D cadets) are trained by our experts in the specializations like modeling, texturing, sculpting, retopo, etc..",
    },
    {
      question: "Can I apply for the cadet program?",
      answer:
        "Currently we do not accept application for the program. We hand pick suitable freshers or candidates from the applications we receive for the 3D artist positions.",
    },
    {
      question:
        "Does this training program guarantee a full-time role in the organisation?",
      answer:
        "A full-time role is entirely dependent on your performance during the program, and if we have a vacancy. Please note, your enrollment doesn’t guarantee an offer. ",
    },
    {
      question: "Do I get a certification after completing this program?",
      answer:
        "We offer a monthly stipend and a training completion certificate.",
    },
    {
      question:
        "Can I apply again for any 3D role after completing the 3D cadet program?",
      answer:
        "Certainly, you can apply for a full-time role. We may extend a full-time opportunity to you based on performance. But if not, then you can re-apply after a period of six months.",
    },
    {
      question: "How can this certificate help me in the 3D industry?",
      answer:
        "The certificate received on completion of the 3D Cadet program has the potential to significantly strengthen your credibility within the 3D industry.",
    },
  ];

  const [currentFAQSection, setCurrentFAQSection] = useState(general);

  const process = [
    {
      image: `${env.CDN_BASE_URL}/Hiring+Process/application.png`,
      name: "Application",
      text: "We receive applications from interested candidates under different profiles.",
      desc: "Pick a role you think is best suited for your skill set and qualifications and apply for it. Make sure to attach any documentation, like portfolios (mandatory for design roles), resumes, websites, which helps us understand your candidature better.",
      bgcolor: "#AE3781",
      href: "",
    },
    {
      image: `${env.CDN_BASE_URL}/Hiring+Process/shortlisted.png`,
      name: "Shortlisted",
      text: "We shortlist candidates after reviewing resumes and a chat via phone call.",
      desc: "Once your resume has cleared the initial screening round, you will be shortlisted for a Telephonic Interview. This is where we want to get to know you through a call with one of our representatives. Here we take note of things like your expectations from the company or if there’s anything in your resume that we would like to know more about. Lastly, we work through to see whether you will be able to fulfil some of the mandatory requirements for the job, like the skill sets, past relevant experience, or relocation.",
      bgcolor: "#B82774",
      href: "",
    },
    {
      image: `${env.CDN_BASE_URL}/Hiring+Process/assessment.png`,
      name: "Assignments",
      text: "Depending upon the profile, we give assignments or tests for further assessment.",
      desc: (
        <>
          <p>
            {" "}
            Assessments can vary from role to role. While the process may differ
            slightly for different roles or teams, the same basics apply whether
            you’re applying for a tech job or a marketing job, an internship or
            a leadership position. Not all of these may apply for your role, but
            here are some of the ways we assess candidates in this round:
          </p>
          <br />
          <ul className="ml-3">
            <li>
              1. Design Assignment : There could be one or multiple design
              assignments depending upon the role and the level of position you
              are applying for. We have a criteria which helps us discern the
              quality of your submission, which includes scrutinising your
              screen recording to check your speed, your techniques used, etc.
            </li>
            <li>
              2. Online Coding and SEO Assignments: We use a third-party test
              platform for these assessments. You will receive all the details
              via email and also a practice test before you dive in. We study
              your basic skills and assign scores that decide your progression
              to the next stage. (what does it help us understand)
            </li>
            <li>
              {" "}
              3. Project work: We sometimes ask candidates to complete a small
              project prior to their in-depth interviews. This could range from
              prepping a case study to providing code samples (don’t stress,
              they’re not that scary and we won’t spring this on you without
              warning). These help us understand how you think and approach
              problems. We’ll let you know about any additional materials we’ll
              need early on.
            </li>
            <li>
              4. Research based assignments: Here, you are provided with a case
              based problem and you need to find a solution based on your
              knowledge and research skills. Every case study has factors on
              which a candidate is given a score.
            </li>
          </ul>
        </>
      ),
      bgcolor: "#D15168",
      href: "",
    },
    {
      image: `${env.CDN_BASE_URL}/Hiring+Process/interviews.png`,
      name: "Interviews",
      text: "The candidate sits for multiple interview rounds depending upon the profile.",
      desc: (
        <>
          <p>
            The interview rounds are immensely crucial. Again, the process will
            differ slightly for different roles or teams. Questions will differ
            to deduce competencies in various fields and so will the duration.
            (Pro tip: do a thorough research on the company. We like people who
            have done their homework.) The rounds may be completely different if
            you are a part of campus placements depending on the feasibility of
            the process.
          </p>
          <br />
          <ul className="ml-3">
            <li>
              1. Technical Interviews: taken by technical experts to check depth
              of technical knowledge
            </li>
            <li>
              2. Manager interviews round: resume based questions,
              hypotheticals, guesstimates, to see how you will compliment a
              team’s current capacity
            </li>
            <li>
              {" "}
              3. Presentation Round: to understand your strengths and weaknesses
              as a presenter{" "}
            </li>
          </ul>
          <p className="mt-5">
            Please Note : All the rounds can be clubbed together to make one
            round, or can be taken individually. All the rounds are elimination
            rounds. There can be one or more types of interview rounds to check
            different aspects, with the same or different interviewer.{" "}
          </p>
        </>
      ),
      bgcolor: "#B43D59",
      href: "",
    },
    {
      image: `${env.CDN_BASE_URL}/Hiring+Process/culturalFit.png`,
      name: "Cultural fit",
      text: "We chat with you to see whether our goals and values are aligned.",
      desc: "This is the final personal interview round, where we try to get to know you as a person. This helps us make your work environment more helpful to you as well as set your expectations about the projects and the team you will be working with. You also get a chance to understand our company culture and see how you’ll thrive in it.",
      bgcolor: "#513B7A",
      href: "",
    },
    {
      image: `${env.CDN_BASE_URL}/Hiring+Process/decisionNdoffer.png`,
      name: "Decision & offer",
      text: "After the final decision, we offer the job role to the selected candidate.",
      desc: "Now we’ll bring everything together from your application and interviews and review it. The decision is made with multiple stakeholders - people who were in the recruitment process and the people who will be working with you. You will hear the results soon after.",
      bgcolor: "#5A339B",
      href: "",
    },
  ];

  const openPositions = [
    {
      position: "Jr. 3D artist",
      dept: "3D Design",
      exp: "0-3 Years",
      link: "https://ikarus3d.keka.com/careers/jobdetails/57",
    },
    {
      position: "Business Development Manager",
      dept: "Business Development",
      exp: "4+ Years",
      link: "https://ikarus3d.keka.com/careers/jobdetails/431",
    },
    {
      position: "3D Character Artist",
      dept: "3D Design",
      exp: "2+ Years",
      link: "https://ikarus3d.keka.com/careers/jobdetails/14",
    },
    {
      position: "Rigging Artist",
      dept: "3D Design",
      exp: "2-4 Years",
      link: "https://ikarus3d.keka.com/careers/jobdetails/15",
    },
  ];

  useEffect(() => {
    if (delay0 === false) {
      setTimeout(() => setDelay0(true), 700);
    }
    if (delay0) {
      setTimeout(() => setDelay1(true), 300);
    }
  }, [delay0, delay1]);

  useEffect(() => {
    setQuestionDelay2(false);
    setTimeout(() => setQuestionDelay2(true), 300);
  }, [currentQuestion]);

  useEffect(() => {
    dispatch(updatePage("Jobs"));
  }, []);

  useEffect(() => {
    if (cardClicked !== "") setCardToExpand(null);
  }, [cardClicked]);
  // const [specific, setSpecific] = useState("Specific");

  return (
    <>
      <div className="flex flex-col lap:gap-[30px] justify-center lap:justify-between lap:flex-row py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] bg-[#F8F9FC] dark:bg-primaryDarkBg">
        <div className="flex flex-col gap-[36px] text-center lap:text-left  w-full justify-center mob_old:justify-start lap:justify-center lap:w-[50%]">
          <div className="flex flex-col gap-[16px] w-full">
            <div className="mx-auto">
              <HeroSectionHeading headings={["We are always on the lookout for amazing talent. "]} />
            </div>
            <div className="mx-auto mt-[15px] lap:mt-[30px] w-full xl_old:min-w-[740px text-secondaryWhite font-[400] text-center lap:text-left text-sub-hero-md lg:text-sub-hero-lg xl_old:text-sub-hero-xl xxl_old:text-sub-hero-xxl]">
              Explore opportunities for building your career with us!
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, delay: 0.5 }}
            className="hidden lap:block"
          >
            <div className="w-fit">
              <PrimaryButton
                link="https://ikarus3d.keka.com/careers/"
                content="Apply now"
              ></PrimaryButton>
            </div>
          </motion.div>
        </div>
        {/* <div className="flex flex-col gap-[36px] w-full"> */}
        <div className="w-full lap:w-[45%] aspect-video mt-[30px] lap:mt-0">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/vb-2jZqoeGo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, delay: 0.5 }}
          className="w-full flex justify-center lap:mx-0 lap:hidden"
        >
          <div className="mt-[36px]">
            <PrimaryButton
              link="#openPositions"
              content="Apply now"
              classes={"w-full"}
            ></PrimaryButton>
          </div>
        </motion.div>
      </div>
      {/* </div> */}
      <div
        id="openPositions"
        className="dark:bg-primaryDarkBg py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] text-center tab_old:text-left"
      >
        {/* <SubSectionHeading text="Open positions" /> */}
        {/* <div className="grid grid-cols-1 tab_old:grid-cols-2 lap:grid-cols-4 gap-4 xl_old:gap-12 mt-[15px] tab_old:mt-[30px] lap:mt-[60px]">
          {openPositions.map((item, index) => (
            <div className="flex flex-col bg-cardBackgroundColor px-6 py-3 tab_old:p-6 xl_old:p-12 rounded-[5px]">
              <div className="flex items-start justify-center tab_old:justify-start gap-2 xl_old:gap-4">
                <div className="w-[70%]">
                  <h3 className="text-base tab_old:text-xl xl_old:text-3xl text-[#2FA0F9] font-[500]">
                    {item.position}
                  </h3>
                </div>
                <a
                  href={item.link}
                  className="hidden tab_old:block border-[1.5px] px-2 tab_old:px-3 lap:px-4 py-2 rounded-[5px] w-[30%] text-darkHeading text-center hover:bg-primaryWhite hover:text-primaryBlack tab_old:min-w-[80px] xl_old:min-w-[111px] font-[400] text-xs tab_old:text-base xl_old:text-2xl leading-[21px]"
                >
                  Apply
                </a>
              </div>
              <div className="mt-2 flex flex-col gap-2 xl_old:mt-4 xl_old:gap-4">
                <SubSectionText text={`Department: ${item.dept}`} />
                <SubSectionText text={`Experience: ${item.exp}`} />
              </div>
              <a
                href={item.link}
                className="w-full mt-5 tab_old:mt-0 mx-auto tab_old:hidden border-[1.5px] px-2 tab_old:px-3 lap:px-4 py-2 rounded-[5px] text-darkHeading text-center hover:bg-primaryWhite hover:text-primaryBlack tab_old:min-w-[80px] font-[400] text-xs tab_old:text-base xl_old:text-2xl leading-[21px]"
              >
                Apply
              </a>
            </div>
          ))}
        </div> */}
        {/* <div id="keka" className="relative left-0 h-full"></div> */}
        <div className="mt-[15px] tab_old:mt-[30px] lap:mt-[60px] flex items-end">
          <Lottie
            loop
            animationData={letter}
            play
            style={{ width: "auto", height: 70 }}
          />
          <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab_old:text-base xl_old:text-2xl leading-[21px] mb-2 text-left tab_old:text-center">
            Looking for something else? Send your resume{" "}
            <a className="text-[#1d75bd]" href="mailto:careers@ikarus3d.com">
              here
            </a>
          </h4>
        </div>
      </div>
      <div
        className={`py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom dark:bg-primaryDarkBg relative ${
          delay1 ? "" : ""
        } lap:h-auto`}
        style={{ "z-index": "0" }}
      >
        <div
          className={`text-center text-3xl lap:${
            cardClicked === "" ? "" : "mb-20"
          } font-semibold transition-all ease-in-out duration-1000 flex justify-center dark:text-darkHeading`}
        >
          <SubSectionHeading text="Let us walk you through our hiring process" />
        </div>
        <div className="lap:hidden py-[30px] px-[4vw]  lap:p-[4vw] flex flex-col tab_old:flex-row relative">
          <div
            onClick={() => {
              setDelay1(false);
              setDelay0("");
              setCardClicked("");
            }}
            className={`absolute left-0 top-1/4 w-6 border-[1.5px] border-white break-words text-white text-center transition-all duration-500 ease-linear ${
              delay1 ? "" : "-translate-x-8"
            }`}
          >
            BACK
          </div>
          <div
            id="timeline"
            className={`${
              !delay1
                ? "translate-y-0 opacity-0"
                : "translate-y-0 top-0 opacity-100"
            } ${
              !delay0 ? "hidden" : ""
            } mb-[20px] block w-full mob_old:pr-[4vw] tab_old:pr-[8vw] lap:pr-[11vw] xl_old:pr-0 transition-all  ease-in-out delay-500 duration-500 dark:text-darkHeading rounded-[5px] mx-auto text-center`}
          >
            <div className="h-[2px] w-full relative bg-white rounded-[5px] my-8">
              <div
                className={`animated-gradient transition-all ease-in-out duration-1000 h-[2px] absolute rounded-[5px]`}
                style={{ width: cardClicked * 20 + "%" }}
              ></div>
              <div className="flex absolute w-full -top-3 items-center">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div
                    className={`w-1/5 ${
                      index === 4 ? "flex justify-between" : ""
                    } ${
                      cardClicked === 5
                        ? "text-white"
                        : index <= cardClicked
                        ? "text-primaryWhite"
                        : "text-primaryBlack"
                    }`}
                  >
                    <div
                      onClick={() => (delay0 ? setCardClicked(index) : "")}
                      className={`w-6 h-6 ${
                        delay0 && cardClicked == index
                          ? "ring-4 ring-[#0052D4]"
                          : ""
                      } ${
                        delay0
                          ? index <= cardClicked
                            ? "animated-gradient"
                            : "bg-secondaryBackground"
                          : index <= cardClicked
                          ? "primaryBlue"
                          : "secondaryBackground"
                      } rounded-full`}
                    >
                      {index + 1}
                    </div>
                    {index === 4 ? (
                      <div
                        onClick={() => (delay0 ? setCardClicked(5) : "")}
                        className={`w-6 h-6 ${
                          delay0 && cardClicked === 5
                            ? "ring-4 ring-[#0052D4] text-primaryWhite"
                            : "text-primaryBlack"
                        } ${
                          delay0 && cardClicked === 5
                            ? "text-primaryWhite animated-gradient"
                            : "bg-secondaryBackground"
                        } rounded-full -mr-6`}
                      >
                        {index + 2}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${
              delay1
                ? "flex flex-col tab_old:flex-row opacity-100 justify-between"
                : delay0
                ? "flex opacity-0"
                : "hidden"
            } dark:bg-primaryDarkBg w-[80%] mx-auto transition-all ease-in-out duration-700`}
          >
            <div
              className="bg-white border-[1px] border-black dark:border-0 transition-all ease-in-out-quart duration-1000  mt-4
                dark:bg-primaryDarkBg dark:text-darkHeading rounded-[5px] dark:border-gray-800 py-3 px-6"
            >
              <div
                className="flex items-center justify-center p-3"
                style={{
                  backgroundColor:
                    cardClicked !== "" ? process[cardClicked].bgcolor : "",
                }}
              >
                <img
                  className={`border-none h-24 tab_old:h-28 mx-auto`}
                  src={cardClicked !== "" ? process[cardClicked].image : ""}
                  alt={cardClicked !== "" ? process[cardClicked].name : ""}
                />
              </div>
            </div>
            <div
              className={`${
                delay1 ? "block" : "hidden"
              } mx-auto my-4 tab_old:ml-6 transition-all ease-in-out duration-500 px-6`}
            >
              <h3
                className={`font-bold text-center mx-auto tab_old:mx-0 tab_old:text-left text-lg tab_old:text-xl w-[75%] text-gray-900 dark:text-darkHeading`}
              >
                {cardClicked !== "" ? process[cardClicked].name : ""}
              </h3>
              <p
                className={`text-center  tab_old:text-left text-primaryBlack dark:text-darkSubHeading ${
                  cardClicked && cardToExpand === process[cardClicked].name
                    ? "line-clamp-0"
                    : "line-clamp-6"
                }`}
              >
                {cardClicked !== "" ? process[cardClicked].desc : ""}
              </p>
              <p
                className="text-center tab_old:text-left text-primaryBlue"
                onClick={() => {
                  cardToExpand === null
                    ? setCardToExpand(process[cardClicked].name)
                    : setCardToExpand(null);
                }}
              >
                Read {cardToExpand === null ? "more" : "less"} . . .
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full my-4 px-6">
              <div
                onClick={() => {
                  cardClicked > 0 ? setCardClicked(cardClicked - 1) : "";
                }}
                className="text-white lap:pb-8 items-center"
              >
                <button
                  className={`w-full border-[1.5px] border-white py-3 xl_old:py-5 flex justify-center dark:shadow-buttonShadow rounded-[5px] text-xs mob_old:text-sm tab_old:text-base xl_old:text-xl transition ease-in-out duration-200 text-white ${
                    cardClicked > 0
                      ? "opacity-100 cursor-pointer"
                      : "opacity-0 cursor-default"
                  }`}
                >
                  Previous step
                </button>
              </div>
              <div
                onClick={() => {
                  cardClicked < process.length - 1
                    ? setCardClicked(cardClicked + 1)
                    : "";
                }}
                className="text-white lap:pb-8"
              >
                <button
                  className={`w-full text-center py-3 xl_old:py-5 flex justify-center dark:shadow-buttonShadow rounded-[5px] text-xs mob_old:text-sm tab_old:text-base xl_old:text-xl text-white animated-gradient transition-all duration-500 ease-linear ${
                    cardClicked < process.length - 1
                      ? "opacity-100 cursor-pointer"
                      : "opacity-0 cursor-default"
                  }`}
                >
                  Next step
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${
              cardClicked && delay0 ? "opacity-0" : "opacity-100"
            } ${
              delay1 ? "hidden" : ""
            } grid grid-cols-1 mob_old:grid-cols-2 tab_old:grid-cols-3 transition-all ease-in-out duration-1000 gap-6`}
          >
            {process.map((elem, index) => (
              <div
                key={index}
                className={`bg-secondaryBackground mx-auto w-[75%] mob_old:mx-0 mob_old:w-auto border-[1px] border-black dark:border-0 ${
                  cardClicked === "" ? "relative" : ""
                } transition-all ease-in-out-quart duration-1000
              dark:bg-secondaryDarkBackground dark:text-darkHeading border-gray-200 rounded-[5px] dark:border-gray-800 
              ${cardClicked === "" ? "opacity-100" : "opacity-0"}
              ${delay1 && cardClicked !== index ? "absolute" : ""}`}
                style={{
                  transform: cardClicked === index ? "rotateY(180deg)" : "",
                }}
              >
                <div className={`px-4 pt-4 h-full flex flex-col mx-auto`}>
                  <div
                    className={`border dark:border-gray-700 rounded-[5px] p-4 flex items-center justify-center relative`}
                    style={{ backgroundColor: elem.bgcolor }}
                  >
                    <div className="h-6 w-6 bg-secondaryBackground rounded-full absolute top-2 left-2 text-center flex items-center justify-center">
                      <span
                        className="font-serif text-sm mx-auto align-middle font-[700] leading-[14px]"
                        style={{ color: elem.bgcolor }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className={`flex justify-center items-center`}>
                      <img
                        className={`rounded max-w-full align-middle border-none w-24 h-24 tab_old:w-28 tab_old:h-28 mx-auto`}
                        src={elem.image}
                        alt={elem.name}                        
                      />
                    </div>
                  </div>
                  <div className={`my-[30px] text-center`}>
                    <div className={`font-bold mx-auto`}>
                      <ContentHeading text={elem.name} />
                    </div>
                    <div
                      className={`mb-[25px] mt-[10px] font-normal text-center ${
                        cardClicked ? "duration-1000 opacity-0" : ""
                      } block transition-all ease-in-out-quart`}
                    >
                      <SubSectionText text={delay1 ? elem.desc : elem.text} />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setCardClicked(index);
                    setDelay0(false);
                  }}
                  className={`text-[#0091C2] mt-[15px] text-xs tab_old:text-sm absolute bottom-[30px] mx-auto left-0 right-0 text-center ${
                    cardClicked ? "hidden" : ""
                  }`}
                >
                  Know more
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`hidden lap:block mt-8 ${
            cardClicked === "" ? "" : "mt-8"
          }`}
        >
          <div
            ref={ref}
            className={`hidden lap:flex lap:justify-between relative mob_old:px-[2vw] lap:px-[3vw] xl_old:px-0 xl_old:mx-[11vw] desk:px-8`}
          >
            <div
              className={`h-full transition-all ease-linear duration-500 w-0 ${
                delay0 ? "w-[10%]" : "w-0"
              } border-green-400`}
            ></div>
            <div
              className={`${
                delay0 ? "w-[90%]" : "w-full"
              } border-orange-400 transition-all ease-linear duration-500`}
            >
              <div
                id="timeline"
                className={`${
                  !delay1
                    ? "translate-y-0 opacity-0"
                    : "translate-y-0 top-0 opacity-100 pt-4"
                } hidden tab_old:block w-full mob_old:pr-[4vw] tab_old:pr-[8vw] lap:pr-[11vw] xl_old:pr-[3vw] transition-all  ease-in-out delay-500 duration-500 dark:text-darkHeading rounded-[5px] mx-auto text-center`}
              >
                <div className="flex relative">
                  {process.map((item, index) => {
                    if (index < 5) {
                      return (
                        <div className="w-1/5">
                          <div className="ml-2 text-left">
                            <ContentHeading text={item.name} />
                          </div>
                        </div>
                      );
                    } else
                      return (
                        <div
                          className={`${
                            cardClicked !== ""
                              ? "absolute -right-40 xl_old:-right-60"
                              : "hidden"
                          }`}
                        >
                          <div className="ml-2 text-left">
                            <ContentHeading text={item.name} />
                          </div>
                        </div>
                      );
                  })}
                </div>
                <div className="h-[2px] w-full relative bg-white rounded-[5px] my-8">
                  <div className="h-12 absolute -left-36 -top-6 flex items-center gap-2">
                    <div
                      className="animated-gradient rounded-[5px] h-full aspect-square flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        setDelay1(false);
                        setDelay0("");
                        setCardClicked("");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </div>
                    <span>Go back</span>
                  </div>
                  <div
                    className={`animated-gradient transition-all ease-in-out duration-1000 h-[2px] absolute rounded-[5px]`}
                    style={{ width: cardClicked * 20 + "%" }}
                  ></div>
                  <div className="flex absolute w-full -top-3 items-center">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <div
                        className={`w-1/5 ${
                          index === 4 ? "flex justify-between" : ""
                        }`}
                      >
                        <div
                          onClick={() => (delay0 ? setCardClicked(index) : "")}
                          className={`w-6 h-6 ${
                            delay0 && cardClicked == index
                              ? "ring-4 ring-[#0052D4]"
                              : ""
                          } ${
                            delay0
                              ? index <= cardClicked
                                ? "animated-gradient"
                                : "bg-secondaryBackground"
                              : index <= cardClicked
                              ? "primaryBlue"
                              : "secondaryBackground"
                          } rounded-full`}
                        ></div>
                        {index === 4 ? (
                          <div
                            onClick={() => (delay0 ? setCardClicked(5) : "")}
                            className={`w-6 h-6 ${
                              delay0 && cardClicked === 5
                                ? "ring-4 ring-[#0052D4]"
                                : ""
                            } ${
                              delay0 && cardClicked === 5
                                ? "animated-gradient"
                                : "bg-secondaryBackground"
                            } rounded-full -mr-6`}
                          ></div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                {process.map((item, index) => (
                  <div
                    id={item.name}
                    className={`${
                      delay0
                        ? cardClicked === index
                          ? "w-full"
                          : "w-[16%] xl_old:w-[15%]"
                        : "w-[16%] xl_old:w-[15%]"
                    } flex ${
                      index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                    } transition-all duration-500 ease-linear ${
                      delay0 && cardClicked !== index ? "hidden" : "w-full"
                    }`}
                    style={{
                      transform: delay0
                        ? "translateY(36px)"
                        : cardClicked !== ""
                        ? `translateY(${Math.pow(-1, index % 2) * 36}px)`
                        : "",
                      opacity:
                        cardClicked !== ""
                          ? cardClicked !== index
                            ? "0%"
                            : "100%"
                          : "100%",
                    }}
                  >
                    <div
                      className={`w-full flex justify-between gap-6 rounded-[5px] ${
                        delay0 ? "h-auto" : "h-[400px]"
                      }  bg-cardBackgroundColor overflow-hidden ${
                        delay0 ? "p-8" : "p-4"
                      }`}
                    >
                      <div
                        className={`${
                          delay0 ? "w-[20%]" : "w-full"
                        } transition-all duration-500 ease-linear`}
                      >
                        <div
                          style={{ backgroundColor: item.bgcolor }}
                          className={`${
                            delay0 ? "" : "h-[40%]"
                          } rounded-[5px] overflow-hidden`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-contain h-full mx-auto"
                          />
                        </div>
                        <div
                          className={`transition-all duration-500 ease-linear ${
                            delay0 ? "opacity-0" : ""
                          } ${
                            delay1 ? "hidden" : ""
                          } text-center h-[45%] pt-[15px]`}
                        >
                          <SubSectionText text={item.text} />
                        </div>
                        <div
                          onClick={() => {
                            setCardClicked(index);
                            setDelay0(false);
                          }}
                          className={`transition-all duration-500 ease-linear ${
                            delay0 ? "opacity-0" : ""
                          } ${
                            delay1 ? "hidden" : ""
                          } h-[15%] text-center text-ikarus-blue font-[500] flex items-center justify-center cursor-pointer`}
                        >
                          Know more
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-500 delay-500 ease-linear w-[75%] ${
                          delay0 ? "" : "hidden"
                        } ${delay1 ? "" : "opacity-0"}`}
                      >
                        <SubSectionText text={item.desc} />
                        <div className="w-full flex justify-end gap-2">
                          <div
                            onClick={() => {
                              cardClicked > 0
                                ? setCardClicked(cardClicked - 1)
                                : "";
                            }}
                            className="flex flex-row flex-wrap text-white xs:justify-start lap:pb-8 lap:mr-4 mt-[30px] lap:mt-[60px] min-w-[8.25rem] items-center"
                          >
                            <button
                              className={`border-[1.5px] border-white px-4 mob_old:px-5  tab_old:px-8 lap:px-5 py-3 xl_old:py-5 xl_old:px-12 flex dark:shadow-buttonShadow rounded-[5px] text-xs mob_old:text-sm tab_old:text-base xl_old:text-xl transition ease-in-out duration-200 text-white hover:text-primarysecondBackground hover:bg-white ${
                                cardClicked > 0
                                  ? "opacity-100 cursor-pointer"
                                  : "opacity-0 cursor-default"
                              }`}
                            >
                              Previous step
                            </button>
                          </div>
                          <div
                            onClick={() => {
                              cardClicked < process.length - 1
                                ? setCardClicked(cardClicked + 1)
                                : "";
                            }}
                            className="flex flex-row flex-wrap text-white xs:justify-start lap:pb-8 lap:mr-4 mt-[30px] lap:mt-[60px] min-w-[8.25rem] items-center"
                          >
                            <button
                              className={`px-4 mob_old:px-5 tab_old:px-8 lap:px-5 py-3 xl_old:py-5 xl_old:px-12 flex dark:shadow-buttonShadow rounded-[5px] text-xs mob_old:text-sm tab_old:text-base xl_old:text-xl text-white animated-gradient transition-all duration-500 ease-linear ${
                                cardClicked < process.length - 1
                                  ? "opacity-100 cursor-pointer"
                                  : "opacity-0 cursor-default"
                              }`}
                            >
                              Next step
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < process.length - 1 ? (
                      <div
                        className={`aspect-square w-[50%] ml-auto flex ${
                          index % 2 === 0 ? "items-start" : "items-end"
                        } ${cardClicked !== "" ? "opacity-0" : "opacity-100"} ${
                          delay0 ? "hidden" : ""
                        }`}
                      >
                        <img
                          src={
                            index % 2 === 0
                              ? `${env.CDN_BASE_URL}/miscellaneous/darkarrowdown.svg`
                              : `${env.CDN_BASE_URL}/miscellaneous/darkarrowup.svg`
                          }
                          alt="next step"
                          className="w-full object-contain"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://d3cv7syas17klq.cloudfront.net/miscellaneous/red_bg_1.jpg')] lap:bg-[url('https://d3cv7syas17klq.cloudfront.net/miscellaneous/redHiringBanner1.webp')] bg-left-bottom bg-no-repeat relative z-10 bg-cover">
        <div className="text-secondaryBackground flex flex-col text-center px-4 mob_old:px-10 tab_old:px-16 lap:px-0 lap:w-[55%] mx-auto lap:ml-[35%] py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom">
          <div className="font-semibold justify-center text-center mx-auto">
            <HeroSectionHeading headings={["The 3D Cadet Program"]} />
          </div>
          <div className="lap:w-[80%] mx-auto tab_old:w-full my-[15px] lap:my-5 font-semibold">
            <h2 className="leading-7 xl_old:leading-[1.35] text-primaryBlack dark:text-darkHeading text-base  tab_old:text-2xl xl_old:text-5xl font-[400]">
              We know talent when we see it
            </h2>
          </div>
          <div className="lap:w-[90%] mx-auto">
            <ContentHeading text="The 3D Cadet Program is a 3-month training program where we provide industry-level training in 3D modeling or texturing. We have our own process of determining the suitable candidates from the job applications we receive." />
          </div>
          <div className="mt-[30px] lap:mt-5">
            <div className="my-3">
              <h3 className="text-base tab_old:text-xl xl_old:text-3xl dark:text-darkHeading font-[400]">
                While training with us, you get:
              </h3>
            </div>
            <div className="flex flex-col w-[85%] tab_old:w-[65%] mx-auto lap:mx-0 lap:w-full text-xs">
              <div>
                <LazyLoad>
                  <img
                    alt="Fixed Monthly Stipend"
                    src={`${env.CDN_BASE_URL}/miscellaneous/stipend1.png`}
                    className="mx-auto w-[78px] h-[78px]"
                  />
                </LazyLoad>
                <div className="px-2">
                  <h4 className="text-primaryBlack dark:text-darkHeading font-[400] text-xs tab_old:text-base xl_old:text-2xl leading-[21px]">
                    Fixed Monthly Stipend
                  </h4>
                </div>
              </div>
              <div>
                <LazyLoad>
                  <img
                    alt="Industry Specialized Trainer"
                    src={`${env.CDN_BASE_URL}/miscellaneous/trainer4.png`}
                    className="mx-auto mt-4 w-[78px] h-[78px]"
                  />
                </LazyLoad>
                <div className="px-2">
                  <h4 className="text-primaryBlack dark:text-darkHeading font-[400] text-xs tab_old:text-base xl_old:text-2xl leading-[21px]">
                    Industry Specialized Trainer
                  </h4>
                </div>
              </div>
              <div>
                <LazyLoad>
                  <img
                    alt="Industry Accredited Certification"
                    src={`${env.CDN_BASE_URL}/miscellaneous/certificate4.png`}
                    className="mx-auto mt-4 w-[78px] h-[78px]"
                  />
                </LazyLoad>
                <div className="px-2">
                  <h4 className="text-primaryBlack dark:text-darkHeading font-[400] text-xs tab_old:text-base xl_old:text-2xl leading-[21px]">
                    Industry Accredited Certification
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd div */}
      {/* <div className="tab_old:px-24 lap:px-32 py-12 dark:bg-darkprimaryBackground bg-secondaryBackground">
        <h1 className="text-center mb-8 text-2xl lap:text-3xl dark:text-darkHeading text-primaryBlack">Hear from our 3D cadets</h1>
        <div className="flex flex-col tab_old:flex-row justify-center tab_old:justify-between">
          <div className='mx-auto tab_old:mx-0 mt-4 tab_old:my-auto w-[150px] h-[84px] mob_old:w-[300px] mob_old:h-[168px] tab_old:h-[92.61px] lap:h-[158.256px] desk:h-[178.038px] tab_old:w-[164.64px] lap:w-[258.72px] desk:w-full'>
            <iframe             
              width="100%"
              height="100%"        
              src="https://www.youtube.com/embed/PaVaP_p1yWM?rel=0" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>            
            </iframe>
          </div>
          <div className='mx-auto tab_old:mx-0 tab_old:ml-12 mt-4 tab_old:my-auto w-[150px] h-[84px] mob_old:w-[300px] mob_old:h-[168px] tab_old:h-[92.61px] lap:h-[158.256px] desk:h-[178.038px] tab_old:w-[164.64px] lap:w-[258.72px] desk:w-full'>
            <iframe             
              width="100%"
              height="100%"        
              src="https://www.youtube.com/embed/PaVaP_p1yWM" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>            
            </iframe>
          </div>
          <div className='mx-auto tab_old:mx-0 tab_old:ml-12 mt-4 tab_old:my-auto w-[150px] h-[84px] mob_old:w-[300px] mob_old:h-[168px] tab_old:h-[92.61px] lap:h-[158.256px] desk:h-[178.038px] tab_old:w-[164.64px] lap:w-[258.72px] desk:w-full'>
            <iframe             
              width="100%"
              height="100%"        
              src="https://www.youtube.com/embed/PaVaP_p1yWM" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>            
            </iframe>
          </div>
        </div>        
      </div> */}
      <div className="flex flex-col lap:flex-row justify-center lap:justify-between py-smCustomHead tab_old:py-mdCustomHead  xl_old:py-xlCustom px-4 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] dark:bg-primaryDarkBg bg-secondaryBackground">
        <div className="w-[72%] mx-auto lap:mx-0 tab_old:w-[50%] lap:w-[27%]">
          <LazyLoad>
            <img
              alt="Nishant Verma - Vice President 3D & Co-founder"
              src={`${env.CDN_BASE_URL}/miscellaneous/nishant2.webp`}
              className="rounded-[5px]"
            />
          </LazyLoad>
        </div>
        <div className="w-[72%] mt-[30px] lap:mt-5 mx-auto lap:mx-0 tab_old:w-[85%] lap:w-[65%] flex items-center text-center lap:text-start">
          <div className="text-base lap:text-xl">
            <div className="leading-relaxed">
              <Quote text="We started the 3D Cadet program in 2022 with an aim to train passionate learners who wished to excel as 3D artists. So far, we have successfully completed 5 batches, transforming cadets into becoming self-sufficient and successful designers." />
            </div>
            <h3 className="text-[#0091C2] mt-[15px] text-sm tab_old:text-lg xl_old:text-[36px]">
              <strong className="mr-2">Nishant Verma, </strong> Vice President -
              3D | Co-founder
            </h3>
          </div>
        </div>
      </div>
      <div className="py-smCustomHead tab_old:py-mdCustomHead xl_old:py-xlCustom px-4 mob_old:px-10 tab_old:px-16 lap:px-24 desk:px-32 xl_old:px-[10vw] xxl_old:px-[18vw] dark:bg-primaryDarkBg bg-[#F8F9FC]">
        <div className="text-center dark:text-darkHeading flex justify-center">
          <SubSectionHeading text="Have questions about our hiring process?" />
        </div>
        <div className="flex justify-between pt-smCustomHead tab_old:pt-mdCustomHead">
          <div className="w-full tab_old:w-[95%] lap:w-full mx-auto">
            <div className="flex flex-col-reverse lap:flex-row lap:gap-[25%] lap:justify-center lap:pt-0">
              <div className="mx-auto lap:mx-0 w-full basis-1/2 ">
                <div
                  onClick={() => setCurrentFAQSection(general)}
                  className={`flex items-center text-center tab_old:text-left justify-center tab_old:justify-start ${currentFAQSection===general?"bg-darkSubHeading":"bg-cardBackgroundColor"}  hover:bg-darkSubHeading hover:dark:text-secondaryDarkBackground text-sm tab_old:text-xl xl_old:text-3xl dark:text-darkHeading rounded-[5px] mt-[1px] p-4 cursor-pointer`}
                >
                  General
                </div>
                <div
                  onClick={() => setCurrentFAQSection(threeDDesign)}
                  className="flex items-center text-center tab_old:text-left justify-center tab_old:justify-start bg-cardBackgroundColor hover:bg-darkSubHeading hover:dark:text-secondaryDarkBackground text-sm tab_old:text-xl xl_old:text-3xl dark:text-darkHeading rounded-[5px] mt-[1px] p-4 cursor-pointer"
                >
                  3D Design
                </div>
                <div
                  onClick={() => setCurrentFAQSection(cadetProgram)}
                  className="flex items-center text-center tab_old:text-left justify-center tab_old:justify-start bg-cardBackgroundColor hover:bg-darkSubHeading hover:dark:text-secondaryDarkBackground text-sm tab_old:text-xl xl_old:text-3xl dark:text-darkHeading rounded-[5px] mt-[1px] p-4 cursor-pointer"
                >
                  3D Cadet Program
                </div>
              </div>
              
          
          
          <div>
          <Faqs1 faqs={currentFAQSection} />
          </div>
        
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          {/* <PrimaryButton link="" content="General"></PrimaryButton>
          <div className="flex flex-col tab_old:flex-row justify-center">
            <button
              className={`${
                specs === "General"
                  ? "bg-ikarus-blue border-2 text-secondaryBackground"
                  : "bg-transparent  text-ikarus-blue border-2 border-ikarus-blue"
              } border-ikarus-blue rounded-[5px] px-12 mx-auto tab_old:mx-2 mt-2  py-2 text-[12.25px] transition ease-in-out  duration-200 min-w-[205px]`}
              onClick={() => setSpecs("General")}
            >
              General
            </button>
            <button
              className={`${
                specs === "Specific"
                  ? "bg-ikarus-blue border-2 text-secondaryBackground"
                  : "bg-transparent  text-ikarus-blue border-2 border-ikarus-blue"
              } rounded-[5px] px-12 mx-auto tab_old:mx-2 py-2 text-[12.25px] border-ikarus-blue mt-2 transition ease-in-out duration-200 min-w-[205px]`}
              onClick={() => setSpecs("Specific")}
            >
              3D Team Specific
            </button>
            <button
              className={`${
                specs === "CadetProgram"
                  ? "bg-ikarus-blue border-2 text-secondaryBackground"
                  : "bg-transparent  text-ikarus-blue border-2 border-ikarus-blue"
              } rounded-[5px] px-12 mx-auto tab_old:mx-2 py-2 text-[12.25px] border-ikarus-blue mt-2 transition ease-in-out duration-200 min-w-[205px]`}
              onClick={() => setSpecs("CadetProgram")}
            >
              Cadet Program
            </button> 
          </div>     
          <div className=" flex justify-start py-12">
            {specs === "General" ? <General /> : <Specific />}
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};
export default WorkAtIkarus;
