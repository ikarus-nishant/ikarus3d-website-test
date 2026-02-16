import React from "react";
import { Link } from "@remix-run/react";

export const GhostButton = (props) => {
  return (
    <Link to={props.link}>
      <button className=" border-1 dark:text-white text-[12.25px] bg-transparent rounded-[5px] px-[12px] py-[8px] text-primaryBlack ">
        {props.content}
      </button>
    </Link>
  );
};
