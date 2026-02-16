import { Link } from "@remix-run/react";

const PrimaryButton = (props) => {
  let _style = {};

  if (props.bgColor) {
    _style = {
      backgroundColor: props.bgColor,
      color: props.textColor ? props.textColor : "white",
    };
  } else {
    _style = {
      background: "linear-gradient(to right, #015EF1, #489BE1)",
      color: props.textColor ? props.textColor : "white",
    };
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Link
        target={props.target || "_self"}
        rel={props.rel || ""}
        to={props.link}
        className={`h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] xl:font-[400] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xxl:py-[19px] shadow-xs rounded-[5px]`}
        style={_style}
      >
        {props.content}
      </Link>
    </div>
  );
};

export default PrimaryButton;
