import React from "react";

const HeroSectionSubHeading = (props) => {
  return (
    <p className="text-secondaryWhite font-[400] text-left tab:text-center md:text-left text-[18px] leading-[28px] tab:text-sub-hero-md lg:text-sub-hero-lg xl:text-sub-hero-xl xxl:text-sub-hero-xxl">
      {props.subheadings.map((subheading, index) => {
        if (index === props.subheadings.length - 1)
          return (
            <React.Fragment key={`subheading-${index}`}>{subheading}</React.Fragment>
          );
        else {
          return (
              <React.Fragment key={`subheading-${index}`}>
                {subheading}
                <br />
              </React.Fragment>
          );
        }
      })}
    </p>
  );
};

export default HeroSectionSubHeading;
