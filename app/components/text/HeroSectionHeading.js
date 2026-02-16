import React from "react";

const HeroSectionHeading = (props) => {
  const Element = props.element || "h1";

  return (
    <Element
      className={`font-[600] text-left tab:text-center md:text-left text-primaryWhite text-hero-sm tab:text-hero-md lg:text-hero-lg xl:text-hero-xl xxl:text-hero-xxl`}
    >
      {props.headings.map((heading, index) => {
        if (index === props.headings.length - 1)
          return (
            <React.Fragment key={`heading-${index}`}>{heading}</React.Fragment>
          );
        else {
          return (
              <React.Fragment key={`heading-${index}`}>
                {heading}
                <br />
              </React.Fragment>
          );
        }
      })}
    </Element>
  );
};

export default HeroSectionHeading;
