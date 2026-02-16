import React, { useRef } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatsCircle = (props) => {
  const { ref, inView, entry } = useInView();  

  return (
    <div
      ref={ref}
      className={`border-2 aspect-square rounded-full bg-secondaryBackground text-center font-[500] flex-col flex justify-center items-center pie ${
         inView ? "animate" : ""
      }`}
      style={{ "--p": props.statValue, "--c1": props.bgColor1, "--c2": props.bgColor2, "--c3": props.bgColor3 }}
    >
      <p className={`${props.textColor} bg-clip-text text-transparent font-[800] text-base tab:text-xl lap:text-3xl`}>
        {" "}
        {props.statValue}%
      </p>
      <p className="text-[#0D0E10] text-[10px] lap:text-base px-[22px]">
        {props.statField}
      </p>
    </div>
  );
};

export default StatsCircle;
