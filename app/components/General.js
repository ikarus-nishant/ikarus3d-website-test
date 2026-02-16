import React from "react";

const General = () => {
  const gen = [
    {
      question: "What is the location of the company ?",
      answer: "Mohali, Punjab, India",
    },
    {
      question: "Can I work from home or work in hybrid mode ?",
      answer: "Sorry, you cannot work from home or in hybrid mode",
    },
    {
      question: "How will I be informed about the status of my application ?",
      answer: "All information will be delivered via emai",
    },
    {
      question: "What is the team size of the company and departments ?",
      answer:
        "Currently, we have around 70 employees in total. The department team size varies with each unit.",
    },
    {
      question: "What is the salary  range for the profile I’m applying for ?",
      answer:
        "Ans. Your salary will depend upon your performance in interviews and your experience.",
    },
    {
      question: " How many interview rounds will be conducted?",
      answer: "It depends upon the profile, but generally there are 3 rounds",
    },
    {
      question: "What will be the duration of the test?",
      answer:
        "The duration of the test depends upon the profile, but generally it is one hour. You will be given one day to complete the test and submit it.",
    },
    {
      question: "Can I give the test at night (after working hours)?",
      answer:
        "You can attempt the test anytime as per your availability on the day provided to you.",
    },
    {
      question: "What does the company do?",
      answer:
        "We provide 3D modelling services to the AR, VR and the metaverse industry. To know more, visit our About Us page",
    },
    {
      question:
        "What would be my role in the company, and which software will I be working on?",
      answer:
        "Your role and software will depend upon the profile. For example, for motion graphics, you will be using Adobe Illustrator, Adobe After Effects and Adobe Premiere Pro.",
    },
    {
      question: "Will I be provided any relocation assistance?",
      answer: "Yes, you will be provided relocation assistance",
    },
    {
      question: " What are the working days and timings?",
      answer: "We work 5 days a week, from 9:00 AM to 6:00 PM",
    },
    {
      question:
        "There are currently no job openings for the role I want. How do I apply?",
      answer:
        "Feel free to send us your resume and portfolio at [add email address link]. Our recruiting team will contact you if a vacancy arises.",
    },
    {
      question: "If my application is rejected once, can I apply again?",
      answer:
        "Yes, but we recommend applying again after at least 6 months. In the meantime, consider upgrading your skills to improve your prospects of getting hired",
    },
    {
      question: "Can I apply for multiple roles at once?",
      answer:
        "If you’re a fresher, we prefer that you apply for the role that matches your educational qualification. If you have experience, you may apply for the roles that fit you best.",
    },
    {
      question:
        "As a 3D artist, can I apply for a specific subdivision like modelling, sculpting or texturing?",
      answer:
        "Yes, you can apply for a specific subdivision. Even if you’re a generalist, you will be hired for a particular function depending upon the evaluation of your skills, test and interview process",
    },
    {
      question:
        "I do not have a computer system. How can I take the test for the position of a 3D artist?",
      answer:
        "We take an online exam, for which we require you to screen record the process. However, in case you do not have a computer system, we can arrange for your test in-house",
    },
    {
      question: " What are the work timings ?",
      answer: "We work 5 days in week and timings are 9:00 AM to 6:00 PM",
    },
  ];  

  return (
    <>    
      <div className={`text-primaryBlack grid ${gen.length<7?"grid-cols-1 mx-auto":gen.length<13?"grid-cols-2 mx-auto gap-20":"grid-cols-1 tab:grid-cols-3 mx-auto gap-y-1 gap-12"}`}>
        {gen.map((item, index)=>(
          <div className={`${index<gen.length-3 ?"border-b-[1px] border-primaryBlack":""} text-left py-3 dark:bg-[#222B36]`}>
            <h1 className="px-4 text-sm mb-2 opacity-[0.87] dark:text-darkHeading">{item.question}</h1>
            <h2 className="px-4 text-xs opacity-[0.60] dark:text-white/75">{item.answer}</h2>
          </div>
        ))}
      </div>
    </>    
  );
};

export default General;
