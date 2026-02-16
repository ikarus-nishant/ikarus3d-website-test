const SubSectionHeading = (props) => {

    const Element = props.element || 'h2';

    return (
      <Element className={`text-[24px] leading-7 tab:text-[26px] lg:text-[36px] lg:leading-[40px] font-semibold text-primaryWhite`}>{props.text}</Element>
    )
  }
  
  export default SubSectionHeading