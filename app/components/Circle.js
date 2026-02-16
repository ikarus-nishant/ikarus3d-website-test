import React, { useState } from "react";
import FileFormat from "./FileFormat.svg";
import FileSize from "./FileSize.svg";
import PolyCount from "./PolyCount.svg";
import Softwares from "./Softwares.svg";
import Variation from "./Variations.svg";

const CircleValue = () => {
  const [active, setActive] = useState(1);
  const [content, setContent] = useState(
    <div className="flex flex-col text-center">
      <h5 className="text-2xl font-bold text-primaryBlue">File Format</h5>
      <p>
        We work with .obj, .glb, .gltf, .fbx or any other format that you may
        require.
      </p>
    </div>
  );

  const changeContent = (value) => {
    setActive(value);
    if (value === 1) {
      setContent(
        <div className="flex flex-col text-center">
          <h5 className="text-2xl font-bold text-primaryBlue">File Format</h5>
          <p>
            We work with .obj, .glb, .gltf, .fbx or any other format that you
            may require.
          </p>
        </div>
      );
    } else if (value === 2) {
      setContent(
        <div className="flex flex-col text-center">
          <h5 className="text-2xl font-bold text-primaryBlue">Softwares</h5>
          <p>
            We deploy Maya, Blender, Zbrush, SubstancePainter, 3ds Max,
            Photoshop, Gestaltor among others.
          </p>
        </div>
      );
    } else if (value === 3) {
      setContent(
        <div className="flex flex-col text-center">
          <h5 className="text-2xl font-bold text-primaryBlue">Variations</h5>
          <p>Colours, sizes; You name it!</p>
        </div>
      );
    } else if (value === 4) {
      setContent(
        <div className="flex flex-col text-center">
          <h5 className="text-2xl font-bold text-primaryBlue">Poly Count</h5>
          <p>All the standard ranges of Low Poly and High Poly counts.</p>
        </div>
      );
    } else {
      setContent(
        <div className="flex flex-col text-center">
          <h5 className="text-2xl font-bold text-primaryBlue">File Size</h5>
          <p>Tailored to your needs, subject to your quality expectations.</p>
        </div>
      );
    }
  };

  return (
    <div className="relative flex w-max items-center justify-center tab:px-3 lap:px-10">
      <div
        className="absolute top-0 flex w-[5.3rem] cursor-pointer flex-col items-center bg-white p-2 tab:w-[6.7rem]"
        onMouseEnter={() => {
          changeContent(1);
        }}
      >
        <FileFormat current={active === 1 ? true : false} />
        <p
          className={`+ text-xs tab:text-base ${
            active === 1 ? "font-bold text-primaryBlue" : "text-linkInactive"
          }`}
        >
          File Format
        </p>
      </div>
      <div
        className="absolute top-24 right-0 flex w-[4.3rem] cursor-pointer flex-col items-center bg-white p-2 tab:w-[6.7rem] lap:right-4"
        onMouseEnter={() => {
          changeContent(2);
        }}
      >
        <Softwares current={active === 2 ? true : false} />
        <p
          className={`+ text-xs tab:text-base ${
            active === 2 ? "font-bold text-primaryBlue" : "text-linkInactive"
          }`}
        >
          Softwares
        </p>
      </div>
      <div
        className="absolute bottom-6 right-8 flex w-[4.5rem] cursor-pointer flex-col items-center bg-white p-2 tab:bottom-8 tab:w-[6.7rem] lap:bottom-10 lap:right-16"
        onMouseEnter={() => {
          changeContent(3);
        }}
      >
        <Variation current={active === 3 ? true : false} />
        <p
          className={`+ text-xs tab:text-base ${
            active === 3 ? "font-bold text-primaryBlue" : "text-linkInactive"
          }`}
        >
          Variations
        </p>
      </div>
      <div
        className="absolute bottom-6 left-8 flex w-[4.9rem] cursor-pointer flex-col items-center bg-white p-2 tab:bottom-8 tab:w-[6.7rem] lap:bottom-10 lap:left-16"
        onMouseEnter={() => {
          changeContent(4);
        }}
      >
        <PolyCount current={active === 4 ? true : false} />
        <p
          className={`+ text-xs tab:text-base ${
            active === 4 ? "font-bold text-primaryBlue" : "text-linkInactive"
          }`}
        >
          Poly Count
        </p>
      </div>
      <div
        className="absolute top-24 left-0 flex w-[4rem] cursor-pointer flex-col items-center bg-white p-2 tab:w-[6.7rem] lap:left-4"
        onMouseEnter={() => {
          changeContent(5);
        }}
      >
        <FileSize current={active === 5 ? true : false} />
        <p
          className={`+ text-xs tab:text-base ${
            active === 5 ? "font-bold text-primaryBlue" : "text-linkInactive"
          }`}
        >
          File Size
        </p>
      </div>
      <div className="mx-5 my-8 flex h-72 w-72 items-center justify-center rounded-full border-2 border-primaryBlue tab:h-96 tab:w-96 ">
        <div className="w-1/2">{content}</div>
      </div>
    </div>
  );
};

export default CircleValue;
