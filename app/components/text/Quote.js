import React from "react";

const Quote = (props) => {
  const Element = props.element || 'span';
  return (
    <div className="flex w-full dark:text-darkHeading">
      <Element className="text-sm tab_old:text-base lap:text-2xl xl_old:text-[3rem] xl_old:leading-[1.35]">
        <span className="text-[1.625rem] tab_old:text-[2rem] xl_old:text-[3rem] xl_old:leading-[1.35]">
          "
        </span>
        {props.text}
        <span className="text-[1.625rem] tab_old:text-[2rem] xl_old:text-[2.5rem]">
          "
        </span>
      </Element>
    </div>
  );
};

export default Quote;
