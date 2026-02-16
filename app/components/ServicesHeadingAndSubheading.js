import React from "react";
import ServicesSubHeading from "./ServicesSubHeading";
import ServicesHeading from "./ServicesHeading";

const ServicesHeadingAndSubheading = (props) => {
  return (
    <div className="flex flex-col gap-3 tab:gap-4">
      <ServicesHeading element={props.element} headings={props.heading ?? []} />
      <ServicesSubHeading subheading={props?.subheading} />
    </div>
  );
};

export default ServicesHeadingAndSubheading;
