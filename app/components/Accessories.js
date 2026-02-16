import React from "react";
import a1 from "../../public/images/Accessories/bag.webp";
import a2 from "../../public/images/Accessories/bag2.webp";
import a3 from "../../public/images/Accessories/bag3.webp";
import a4 from "../../public/images/Accessories/bag4.webp";
import a5 from "../../public/images/Accessories/1-1.webp";
import a6 from "../../public/images/Accessories/jwell.webp";
import a7 from "../../public/images/Accessories/ring.webp";
import a8 from "../../public/images/Accessories/watch.webp";
import LazyLoad from "react-lazyload";
import logo from "../../public/images/ikarus logo.png";
import { useState, useEffect } from "react";

import Model from "./Model";

const Accessories = () => {
  const string = "mod/Accessories/Handbag1.glb";
  const [loading, setLoading] = useState(false);  
  
  const models = [
    {
      name: "Name of the model1",
      pic: a1,
      color: "bg-[#985767]",
      src: "mod/Accessories/Handbag1.glb",
    },
    {
      name: "Name of the model2",
      color: "bg-[#3E415F]",
      pic: a5,
      src: "mod/Accessories/Ring_1.glb",
    },
    {
      name: "Name of the model3",
      color: "bg-[#BB9F6E]",
      pic: a2,
      src: "mod/Accessories/Handbag2.glb",
    },
    {
      name: "Name of the model4",
      color: "bg-[#9FA97A]",
      pic: a6,
      src: "mod/Accessories/Handbag3.glb",
    },
    {
      name: "Name of the model5",
      color: "bg-[#9D9D9D]",
      pic: a8,
      src: "mod/Accessories/Watch.glb",
    },
    {
      name: "Name of the model6",
      color: "bg-[#2F3361]",
      pic: a7,
      src: "mod/Accessories/Ring_2.glb",
    },
    {
      name: "Name of the model7",
      color: "bg-[#B5B5B5]",
      pic: a3,
      src: "mod/Accessories/Handbag3.glb",
    },
    {
      name: "Name of the model8",
      color: "bg-[#A5BAC9]",
      pic: a4,
      src: "mod/Accessories/Handbag4.glb",
    },
  ];  
  

  return (
    <div className="px-20 dark:bg-[#273240] relative">      
      <div className="h-[500px] w-[600px] m-auto flex flex-col">
        <div className="relative">
          <LazyLoad>
            <img src={logo} className="h-[30px] top-12 absolute" />
            <Model
              src={string}
              // alt={<img src={skates} alt="Skates"></img>}
              environment="/mod/Neutral.hdr"
              height="400px"
              width="100%"
              // className="relative"
            >
              {" "}
            </Model>
          </LazyLoad>
        </div>
      </div>

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

export default Accessories;
