import React from "react";
const active = "#a6b4bf";
const unactive = "#c8ced6";

const FileSize = (props) => {
  const styles = {
    "cls-1": {
      fill: "#c8ced6",
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
      strokeWidth: "7px",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-4": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
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
        <g id="Layer_22" data-name="Layer 22">
          <rect
            className="cls-1"
            x="172.05"
            y="50.42"
            width="9.52"
            height="12.28"
            style={styles["cls-1"]}
          />
          <rect
            className="cls-1"
            x="145.89"
            y="46.31"
            width="9.52"
            height="12.28"
            style={styles["cls-1"]}
          />
          <rect
            className="cls-1"
            x="121.1"
            y="50.42"
            width="9.52"
            height="12.28"
            style={styles["cls-1"]}
          />
          <rect
            className="cls-2"
            x="23.59"
            y="22.45"
            width="255.74"
            height="258.56"
            rx="22.34"
            style={styles["cls-2"]}
          />
          <path
            className="cls-3"
            d="M214.6,78.88s-12.12-33.6-65.34-32.55S85.89,78,85.89,78l20.29,43.86H195.5Z"
            style={styles["cls-3"]}
          />
          <rect
            className="cls-1"
            x="193.13"
            y="58.56"
            width="9.52"
            height="12.28"
            style={styles["cls-1"]}
          />
          <rect
            className="cls-1"
            x="98.15"
            y="58.56"
            width="9.52"
            height="12.28"
            style={styles["cls-1"]}
          />
          <rect
            className="cls-1"
            x="145.46"
            y="72.85"
            width="9.71"
            height="32.76"
            style={styles["cls-1"]}
          />
          <line
            className="cls-3"
            x1="129.9"
            y1="120.77"
            x2="150.65"
            y2="99.95"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="168.1"
            y1="119.84"
            x2="150.65"
            y2="99.95"
            style={styles["cls-3"]}
          />
          <line
            className="cls-4"
            x1="150.14"
            y1="160.48"
            x2="112.11"
            y2="181.82"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="111.76"
            y1="225.82"
            x2="112.11"
            y2="181.82"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="150.4"
            y1="245.49"
            x2="111.76"
            y2="225.82"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="150.65"
            y1="200.23"
            x2="150.4"
            y2="245.49"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="112.11"
            y1="182.26"
            x2="149.88"
            y2="200.44"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="150.4"
            y1="245.49"
            x2="188.17"
            y2="223.63"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="188.17"
            y1="223.63"
            x2="188.17"
            y2="183.67"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="150.14"
            y1="160.48"
            x2="188.17"
            y2="183.67"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="150.14"
            y1="201.49"
            x2="188.17"
            y2="183.67"
            style={styles["cls-4"]}
          />
        </g>
      </svg>
    </>
  );
};

export default FileSize;
