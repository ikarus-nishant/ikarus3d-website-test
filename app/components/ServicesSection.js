import React from "react";

const ServicesSection = ({ children, blockXPadding, blockYPadding, customClasses }) => {
  return (
    <section className={`${blockXPadding? "" : "px-6 tab:px-12 lg:px-[112px] xl:px-[138px]"} ${blockYPadding ? "" : "py-[10vh] lg:py-[15vh]"} ${customClasses}`}>
      {children}
    </section>
  );
};

export default ServicesSection;
