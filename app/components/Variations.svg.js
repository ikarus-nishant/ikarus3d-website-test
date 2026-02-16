import React from "react";
const active = "#a6b4bf";
const unactive = "#c8ced6";

const Variation = (props) => {
  const styles = {
    "cls-1": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeWidth: "9px",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-2": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeWidth: "10px",
      stroke: `${props.current === true ? active : unactive}`,
    },
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        className="w-10 tab:w-14"
      >
        <g id="Layer_23" data-name="Layer 23">
          <polyline
            className="cls-1"
            points="96.04 143.57 29.21 143.57 29.21 25.23 147.55 25.23 147.55 90.72"
            style={styles["cls-1"]}
          />
          <path
            className="cls-1"
            d="M164.47,210.4H125.06A27.42,27.42,0,0,1,97.64,183V119.49a27.43,27.43,0,0,1,27.42-27.43h63.49A27.43,27.43,0,0,1,216,119.49v38.06"
            style={styles["cls-1"]}
          />
          <circle
            className="cls-2"
            cx="222.28"
            cy="218"
            r="58.72"
            style={styles["cls-2"]}
          />
        </g>
      </svg>
    </>
  );
};

export default Variation;
