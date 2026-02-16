import React from "react";
const active = "#a6b4bf";
const unactive = "#c8ced6";

const PolyCount = (props) => {
  const styles = {
    "cls-1": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeWidth: "10px",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-2": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeWidth: "9px",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-3": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeWidth: "8px",
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
        <g id="Layer_25" data-name="Layer 25">
          <circle
            className="cls-1"
            cx="82.37"
            cy="67.3"
            r="37.5"
            style={styles["cls-1"]}
          />
          <circle
            className="cls-1"
            cx="191.71"
            cy="76.62"
            r="49.98"
            style={styles["cls-1"]}
          />
          <circle
            className="cls-1"
            cx="228.1"
            cy="173"
            r="28.34"
            style={styles["cls-1"]}
          />
          <circle
            className="cls-1"
            cx="102.52"
            cy="195.64"
            r="77.17"
            style={styles["cls-1"]}
          />
          <circle
            className="cls-2"
            cx="218.71"
            cy="236.51"
            r="15.89"
            style={styles["cls-2"]}
          />
          <circle
            className="cls-3"
            cx="185.25"
            cy="266.53"
            r="10.53"
            style={styles["cls-3"]}
          />
          <circle
            className="cls-3"
            cx="31.05"
            cy="112.81"
            r="10.15"
            style={styles["cls-3"]}
          />
        </g>
      </svg>
    </>
  );
};

export default PolyCount;
