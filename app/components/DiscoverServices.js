import React, { useEffect } from "react";
import SubSectionHeading from "./text/SubSectionHeading";
import ContentHeading from "./text/ContentHeading";
import { Link, useLocation } from "react-router-dom";

const DiscoverServices = (props) => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  const getServiceCard = (service) => {
    return (
      <div className="bg-primaryDarkBg rounded-[5px] p-4 lap:p-8 text-center flex flex-col">
        <img src={service.image} className="w-[60%] object-contain mx-auto" loading="lazy"/>
        <div className="flex flex-col gap-4 lap:gap-6 justify-between mt-8 lap:mt-10 grow">
          <ContentHeading text={service.name} />
          <Link
            to={service.link}
            className="rounded-full w-8 tab:w-12 lap:w-16 aspect-square flex justify-center items-center bg-primarysecondBackground mx-auto cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-4 lap:w-6 h-4 lap:h-6 stroke-[#FFFFFF]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  };

  useEffect(() => {
    console.log("services Data is ", props.servicesData, currentPage);
  }, []);

  return (
    <div className="bg-primarysecondBackground border-[1px] border-transparent">
      <div className="flex flex-col items-center gap-[30px] lap:gap-[60px] xl:gap-[150px] mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[17vw]">
        <div className="my-[30px] tab:my-[60px] xl:my-[9.375rem] text-center">
          <SubSectionHeading text={props.heading} />
        </div>
      </div>
      <div className="grid grid-cols-1 mob:grid-cols-2 tab:grid-cols-3 lap:grid-cols-5 gap-6 mb-[30px] tab:mb-[60px] xl:mb-[9.375rem] mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[17vw]">
        {props.servicesData.map((service, index) =>
          service.link.substring(1) !== currentPage
            ? getServiceCard(service)
            : null
        )}
      </div>
    </div>
  );
};

export default DiscoverServices;
