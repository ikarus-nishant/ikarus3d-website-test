import React from "react";
import CarouselView from "./CarouselView";
import a1 from "../../public/images/Avatars/mainimg.webp";
import a2 from "../../public/images/Avatars/a2.webp";
import a3 from "../../public/images/Avatars/a3.webp";
import a4 from "../../public/images/Avatars/a4.webp";
import a5 from "../../public/images/Avatars/a5.webp";
import { useState } from "react";

const Avatars = () => {
  const [avatar, setAvatar] = useState(a4);
  const models = [
    {
      name: "Name of the model",
      color: "bg-[#985767]",
      pic: a4,
    },
    {
      name: "Name of the model",
      color: "bg-[#10789E]",
      pic: a2,
    },
    {
      name: "Name of the model",
      color: "bg-[#BB9F6E]",
      pic: a3,
    },
    {
      name: "Name of the model",
      pic: a5,
      color: "bg-[#9FA97A]",
    },

    {
      name: "Name of the model",
      color: "bg-bgfurniture",
      pic: a4,
    },

    {
      name: "Name of the model",
      color: "bg-bgaccessories",
      pic: a4,
    },
    {
      name: "Name of the model",
      color: "bg-bgaccessories",
      pic: a4,
    },
    {
      name: "Name of the model",
      color: "bg-bgaccessories",
      pic: a4,
    },
  ];

  return (
    <div className="px-20 dark:bg-[#273240]">
      {/* ist div */}
      <div className="flex justify-center my-16 h-[400px]">
        <img
          src={avatar}
          className="rounded max-w-full h-auto align-middle border-none"
          loading="lazy"
        ></img>
      </div>
      {/* 2nd div */}
      <div className="grid grid-cols-1 mob:grid-cols-2 tab:grid-cols-3 lap:grid-cols-4 gap-8 py-8 w-full desk:w-[85%] mx-auto">
        {models.map((elem, index) => {
          return (
            <div
              key={elem.name}
              className=" sakshi overflow-hidden border-1 cursor-pointer rounded-[5px] mx-auto "
              // onClick={() => setstatee(elem.pic)}
            >
              <div className={`py-4  px-12 ${elem.color} `}>
                <img
                  className=""
                  src={elem.pic}
                  alt={`picture of${elem.name}`}
                />
              </div>

              <div className="p-1 text-center font-[300] text-[#0D0E10] dark:bg-primarysecondBackground dark:text-darkSubHeading">
                <div className="text-xs tab:text-sm">
                  {elem.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Avatars;
