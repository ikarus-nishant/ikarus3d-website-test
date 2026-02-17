import React from "react";
import CarouselView from "./CarouselView";
import { useState } from "react";
import Model from "./Model";
import LazyLoad from "react-lazyload";
import getBrowserEnv from "../utils/browserEnv";

const env = getBrowserEnv();

const e1 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/CAMERAMAINIMG.webp`;
const e2 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/earbuds.webp`;
const e3 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/washingmachine.webp`;
const e4 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/desktop.webp`;
const e5 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/headphone.webp`;
const e6 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/laptop.webp`;
const e7 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/mobile.webp`;
const e8 = `${env.CDN_BASE_URL}/Portfolio+Images/Renders/Electronics/mouse.webp`;

const Electronics = () => {
  const [electronics, setElectronics] = useState(
    "mod/Electronics/Digital Camera.glb"
  );
  const models = [
    {
      name: "Name of the model",
      color: "bg-[#9D9D9D]",
      pic: e5,
      src: "mod/Electronics/Digital Camera.glb",
    },
    {
      name: "Name of the model",
      color: "bg-[#9FA97A]",
      pic: e2,
      src: "mod/Electronics/Digital Camera.glb",
    },
    {
      name: "Name of the model",
      color: "bg-[#BB9F6E]",
      pic: e7,
      src: "mod/Electronics/iphone 11 pro.glb",
    },
    {
      name: "Name of the model",
      color: "bg-[#3E415F]",
      pic: e3,
      src: "mod/Electronics/Washing Machine.glb",
    },

    {
      name: "Name of the model",
      pic: e1,
      color: "bg-[#B5B5B5]",
      src: "mod/Electronics/Digital Camera.glb",
    },
    {
      name: "Name of the model",
      color: "bg-[#5D797B]",
      pic: e4,
      src: "mod/Electronics/Mac.glb",
    },

    {
      name: "Name of the model",
      color: "bg-[#B5B5B5]",
      pic: e6,
      src: "mod/Electronics/Laptop.glb",
    },

    {
      name: "Name of the model",
      color: "bg-[#9FA97A]",
      pic: e8,
      src: "mod/Electronics/Digital Camera.glb",
    },
  ];

  return (
    <div className="px-20 dark:bg-[#273240]">
      {/* ist div */}
      {/* <div className="flex justify-center my-16 h-[400px]">
        <img
          src={electronics}
          className="rounded max-w-full h-auto align-middle border-none"
          loading="lazy"
        ></img>
      </div> */}
      <LazyLoad>
        <Model
          src={electronics}
          // alt={<img src={skates} alt="Skates"></img>}
          environment="/mod/Neutral.hdr"
          height="400px"
          width="100%"
        />
      </LazyLoad>
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

export default Electronics;
