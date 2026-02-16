import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";
import SwipeIt from "./SwipeIt";
import getBrowserEnv from "~/utils/browserEnv";
import useViewportWidth from "../hooks/useViewportWidth";

const Testimonials = () => {
  const env = getBrowserEnv();
  const [ viewportWidth ] = useViewportWidth();   

  const reel = [
    {
      name: "Erin Sudeck",
      img: `${env.CDN_BASE_URL}/Clients+Logos/vntana_white.webp`,
      designation: "Head of 3D, VNTANA",
      desc: "The team is super responsive offering a genuinely fast turnaround. Our clients typically provide us eComm links to work with, and that's all the team needs to deliver the assets.",
      rating: 4.9,
    },
    {
      name: "Gabriele Kraujelyte",
      img: `${env.CDN_BASE_URL}/Clients+Logos/sayduck_white.webp`,
      designation: "Project Manager, SAYDUCK",
      desc: "I really appreciate the team's willingness to improve, it's attention to detail and it's professional approach to business. We're continuously in talks on how to upgrade our partnership.      ",
      rating: 4.0,
    },
    {
      name: "Breno Glennon",
      img: `${env.CDN_BASE_URL}/Clients+Logos/plattar_logo_white.webp`,
      designation: "Project and Client Success Manager, PLATTAR",
      desc: "I like how you focus on communicating more to keep us and the team in the loop. I commend the quality of work and ability to deliver output on time.",
      rating: 4.9,
    },
    {
      name: "Isabel Martínez",
      img: "",
      designation: "Senior 3d Artist, VictoryXR",
      desc: "I greatly appreciate how the team regularly inquires if requirements are not clear, preventing unnecessary rework. Deliveries are always on time. I'd love it if the team focused more on texture resolutions in some cases.",
      rating: 4.7,
    },
    {
      name: "Melissa Wildstein",
      img: "",
      designation: "President, The Matchstick Group",
      desc: "The team that she led completed our project with unbelievable speed! I appreciated the responsive communications.",
      rating: 4.7,
    },
    {
      name: "Eros",
      img: "",
      designation: "Digital Project Manager, Future Fashion Solutions",
      desc: "I like the speed with which you realize the models. I'd suggest improvement in how the models are scaled.",
      rating: 4.0,
    },
    {
      name: "Alexis Guison",
      img: "",
      designation: "Customer Success Manager, V-Cult",
      desc: "We received great 3D objects for a critical project in a short time. Special thanks to Archna for the follow up. The only point that could be improved upon is the verification of files being present in the final folder. ",
      rating: 4.6,
    },
  ];

  const getTestimonials = ({
    perPage,
    arrows,
    type,
    autoScroll,
    perMove,
    gap,
    padding,
    paddingLessThan1080,
    paddingLessThan720,
    pagination,
    key,
  }) => {
    return (
      <SwipeIt
        perPage={perPage}
        arrows={arrows}
        type={type}
        autoScroll={autoScroll}
        perMove={perMove}
        gap={gap}
        padding={padding}
        paddingLessThan1080={paddingLessThan1080}
        paddingLessThan720={paddingLessThan720}
        pagination={pagination}
        key={key}
      >
        {reel.map((item, index) => (
          <div
            key={item.name + index}
            className="flex justify-center w-full py-8"
          >
            <div className={`w-full mx-auto rounded-[5px] bg-red-500`}>
              <div className="text-center px-7 py-7 h-full tab:px-7 flex flex-col justify-center">
                <div className="flex-1">
                  {/* <span></span> */}
                  <h4 className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-2xl leading-[21px]">
                    "{item.desc}"
                  </h4>
                </div>
                <div className="flex-1 flex pt-[15px] tab:pt-[30px] lap:items-center">
                  <div>
                    <div className="mx-auto w-[100%] flex justify-center items-center gap-4">
                      {item.rating > 4.5 ? (
                        <div className="w-[40%] tab:w-[50%]">
                          <img
                            className="object-contain -mr-4"
                            src={`${env.CDN_BASE_URL}/miscellaneous/moreThanHalf.png`}
                          />
                        </div>
                      ) : item.rating > 4 ? (
                        <div className="w-[40%] tab:w-[50%] mr-4">
                          <img
                            className="object-contain -mr-4"
                            src={`${env.CDN_BASE_URL}/miscellaneous/moreThanHalf.png`}
                          />
                        </div>
                      ) : (
                        <div className="w-[40%] tab:w-[50%]">
                          <img
                            className="object-contain -mr-4"
                            src={`${env.CDN_BASE_URL}/miscellaneous/4star.png`}
                          />
                        </div>
                      )}
                      <h3 className="text-sm mob:text-xl dark:text-darkHeading font-semibold text-start my-auto">
                        {item.rating} / 5
                      </h3>
                    </div>
                    <h3 className="leading-relaxed dark:text-darkHeading xl:text-xl font-semibold mt-2">
                      {item.name}
                    </h3>
                    <h5 className="dark:text-darkHeading text-xs xl:text-base leading-relaxed font-thin">
                      {item.designation}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SwipeIt>
    );
  };

  return (
    <div className="w-full">
      <div className="w-full">
        {/* TODO: SET THE PADDING ACCORDINGLY */}
        {viewportWidth <= 360
          ? getTestimonials({
              perPage: 2,
              arrows: false,
              type: "loop",
              autoScroll: false,
              perMove: 1,
              gap: "0.5rem",
              padding: "10%",
              paddingLessThan1080: "2.5%",
              paddingLessThan720: "10%",
              pagination: true,
              key: "testimonials1",
            })
          : viewportWidth <= 720
          ? getTestimonials({
              perPage: 2,
              arrows: false,
              type: "loop",
              autoScroll: false,
              perMove: 1,
              gap: "1.25rem",
              padding: "10%",
              paddingLessThan1080: "2.5%",
              paddingLessThan720: "10%",
              pagination: true,
              key: "testimonials2",
            })
          : viewportWidth < 1080
          ? getTestimonials({
              perPage: 3,
              arrows: true,
              type: "loop",
              autoScroll: false,
              perMove: 1,
              gap: "1.25rem",
              padding: "10%",
              paddingLessThan1080: "10%",
              paddingLessThan720: "2.5%",
              pagination: false,
              key: "testimonials3",
            })
          : viewportWidth < 1920
          ? getTestimonials({
              perPage: 3,
              arrows: true,
              type: "loop",
              autoScroll: false,
              perMove: 1,
              gap: "1.25rem",
              padding: "10%",
              paddingLessThan1080: "2.5%",
              paddingLessThan720: "2.5%",
              pagination: false,
              key: "testimonials4",
            })
          : viewportWidth < 3200
          ? getTestimonials({
              perPage: 3,
              arrows: true,
              type: "loop",
              autoScroll: false,
              perMove: 1,
              gap: "3.25rem",
              padding: "20%",
              paddingLessThan1080: "12.5%",
              paddingLessThan720: "10%",
              pagination: false,
              key: "testimonials5",
            })
          : getTestimonials({
              perPage: 5,
              arrows: true,
              type: "loop",
              autoScroll: false,
              perMove: 1,
              gap: "3.25rem",
              padding: "20%",
              paddingLessThan1080: "12.5%",
              paddingLessThan720: "10%",
              pagination: false,
              key: "testimonials6",
            })}
      </div>
    </div>
  );
};
export default Testimonials;
