const SectionContentWithIcon = (props) => {
  return (
    <div className="grid text-left gap-2 text-darkSubHeading">
      <div className="bg-secondaryDarkBackground p-2 h-fit w-fit aspect-square rounded-full">
        <img src={props.icon} alt="Serive Icon" className="h-12 w-12" />
      </div>
      <span className="font-medium dark:text-darkHeading">{props.heading}</span>
      <div>{props.content}</div>
    </div>
  );
};
export default SectionContentWithIcon;
