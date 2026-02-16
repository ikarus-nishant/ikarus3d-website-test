const HeroSectionSubHeadingOld = (props) => {

    const Element = props.element || "h2";

    return (
      <Element className="text-secondaryWhite font-[400] text-center tab:text-left text-sub-hero-md lg:text-sub-hero-lg xl:text-sub-hero-xl xxl:text-sub-hero-xxl">      
          {props.text}      
      </Element>
    );
  };
  
  export default HeroSectionSubHeadingOld;