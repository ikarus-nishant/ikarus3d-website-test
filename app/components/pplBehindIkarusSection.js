import React from "react";
import Quote from "./text/Quote.js";
import LazyLoad from "react-lazyload";

const PplBehindIkarusSection = (props) => {
  return (
    <div className="px-10 tab:px-16 lap:px-24 desk:px-[10vw]">
      <div className="flex flex-col tab:flex-row mt-[30px] tab:mt-[60px] xl_old:mt-[150px]  justify-between items-center">
        <div className="w-[60%] tab:w-[25%] lap:w-[20%] desk:w-[15%]">
          <LazyLoad>
            <img
              src={props.section.img0}
              alt={props.section.name + ' - ' + props.section.designation}
              className="h-full w-full object-contain"
            />
          </LazyLoad>
        </div>
        <div className="w-full mt-4 tab:mt-0 tab:w-[70%] lap:w-[75%] desk:w-[80%]">
          <div className="tab:ml-16 tab:text-xl w-full tab:w-[85%] lap:w-[70%]">
            <Quote text={props.section.text} />
          </div>
          <h3 className="tab:ml-16 text-sm tab:text-base xl_old:text-[36px] mt-2 text-[#0091C2]">
            <strong>{props.section.name}, </strong>
            {props.section.designation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PplBehindIkarusSection;
