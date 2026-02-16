import React from "react";

const ContentHeading = (props) => {

  const Element = props.element || 'p';

  return (
    <Element
      className="text-[18px] leading-7 -tracking-[0.16px] md:text-[20px] xl:text-[21px] xl:leading-[32px] xl:font-[600] md:leading-[30px] md:-tracking-[0.2px] font-[500]"
      style={{ color: props.textColor ? props.textColor : "white" }}
    >
      {props.text}
    </Element>
  );
};

export default ContentHeading;
