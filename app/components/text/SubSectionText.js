import React from "react";

const SubSectionText = (props) => {  
  return (
    <p className="text-primaryBlack dark:text-darkSubHeading font-[400] text-xs tab:text-base xl:text-[18px] xl:leading-[28px] xl:font-[300]" style={{lineHeight:props.lineHeight?props.lineHeight:"21px"}}>      
        {props.text}      
    </p>
  );
};

export default SubSectionText;
