const SubSectionSubHeading = (props) => {

  const Element = props.element || 'span';

  return (
    <Element
      className="lg:font-light text-[16px] tab:text-[18px] leading-6 md:text-[21px] xl:text-[23px] xl:leading-8"
      style={{ color: props.color ? props.color : "#BFBFBF" }}
    >
      {props.text}
    </Element>
  );
};

export default SubSectionSubHeading;
