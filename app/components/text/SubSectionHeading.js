const SubSectionHeading = (props) => {
  
  const Element = props.element || 'h2';

  return (
    <Element
      className={`text-primaryWhite font-[600] text-[21px] tab:text-[26px] md:text-[32px] leading-7 tab:leading-[32px] md:leading-[40px] -tracking-[0.44px] md:-tracking-[0.32px]`}
      style={{ textAlign: props.textAlign }}
    >
      {props.text}
    </Element>
  );
};

export default SubSectionHeading;
