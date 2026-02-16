import React from "react";
const active = "#a6b4bf";
const unactive = "#c8ced6";

const FileFormat = (props) => {
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
      strokeWidth: "9px",
      strokeDasharray: "13.87 13.87",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-3": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeWidth: "10px",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-4": {
      fill: "none",
      strokeMiterlimit: "10",
      strokeWidth: "9px",
      strokeLinecap: "round",
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
        <g id="Layer_26" data-name="Layer 26">
          <path
            className="cls-1"
            d="M253.53,179.11c2.31.67,4.54,1.38,6.67,2.12"
            style={styles["cls-1"]}
          />
          <path
            className="cls-2"
            d="M272.92,186.73a40.68,40.68,0,0,1,11.39,8.58c2.74,3.17,4.22,6.53,4.22,10,0,18.6-42.09,33.68-94,33.68s-94-15.08-94-33.68c0-3.49,1.48-6.85,4.22-10,3.82-4.39,10.09-8.4,18.23-11.82"
            style={styles["cls-2"]}
          />
          <path
            className="cls-1"
            d="M129.43,181q3.21-1.11,6.69-2.09"
            style={styles["cls-1"]}
          />
          <line
            className="cls-3"
            x1="193.68"
            y1="193.69"
            x2="193.43"
            y2="275.65"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="255.47"
            y1="165.09"
            x2="193.68"
            y2="193.69"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="130.11"
            y1="164.07"
            x2="193.68"
            y2="193.69"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="193.55"
            y1="137.52"
            x2="130.11"
            y2="164.07"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="255.47"
            y1="165.09"
            x2="193.55"
            y2="137.52"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="257.02"
            y1="250.37"
            x2="257.53"
            y2="165.35"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="193.43"
            y1="275.65"
            x2="255.98"
            y2="250.62"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="130.11"
            y1="164.07"
            x2="130.11"
            y2="248.58"
            style={styles["cls-3"]}
          />
          <line
            className="cls-3"
            x1="193.43"
            y1="275.65"
            x2="130.11"
            y2="248.58"
            style={styles["cls-3"]}
          />
          <path
            className="cls-4"
            d="M130.11,221.52,79,195.65a18.5,18.5,0,0,1-8.16-24.86L139.73,34.51a18.51,18.51,0,0,1,24.87-8.16l101,51.07a18.51,18.51,0,0,1,8.16,24.87"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="273.74"
            y1="102.29"
            x2="253.68"
            y2="143.39"
            style={styles["cls-4"]}
          />
          <circle
            className="cls-4"
            cx="162.7"
            cy="88.56"
            r="27.89"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="198.53"
            y1="87.47"
            x2="243.72"
            y2="111.22"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="230.45"
            y1="134.71"
            x2="243.72"
            y2="111.22"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="146.19"
            y1="138.03"
            x2="189.55"
            y2="107.63"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="191.64"
            y1="122.96"
            x2="189.55"
            y2="107.63"
            style={styles["cls-4"]}
          />
          <path
            className="cls-4"
            d="M113.64,252.79c-14.23,5.69-29.54.85-34.2-10.8L25.62,111.38C21,99.72,28.71,85.66,42.94,80l91.87-37.56"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="103.68"
            y1="101.01"
            x2="56.79"
            y2="121.74"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="74.38"
            y1="160.75"
            x2="56.79"
            y2="121.74"
            style={styles["cls-4"]}
          />
        </g>
      </svg>
    </>
  );
};

export default FileFormat;
