import React from "react";
const active = "#a6b4bf";
const unactive = "#c8ced6";

const Softwares = (props) => {
  const styles = {
    "cls-1": {
      fill: "none",
      strokeWidth: "9px",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-2": {
      fill: "none",
      strokeWidth: "9px",
      strokeMiterlimit: "10",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-3": {
      fill: "#c8ced6",
      stroke: `${props.current === true ? active : unactive}`,
    },
    "cls-4": {
      fill: "none",
      strokeWidth: "9px",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
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
        <g id="Layer_24" data-name="Layer 24">
          <polyline
            className="cls-1"
            points="273.02 180.97 273.02 38.79 97.78 38.79"
            style={styles["cls-1"]}
          />
          <line
            className="cls-2"
            x1="97.79"
            y1="75.88"
            x2="273.02"
            y2="75.88"
            style={styles["cls-2"]}
          />
          <rect
            className="cls-3"
            x="112.57"
            y="51.83"
            width="9.64"
            height="9.64"
            style={styles["cls-3"]}
          />
          <rect
            className="cls-3"
            x="127.55"
            y="51.83"
            width="9.64"
            height="9.64"
            style={styles["cls-3"]}
          />
          <rect
            className="cls-3"
            x="142.54"
            y="51.83"
            width="9.64"
            height="9.64"
            style={styles["cls-3"]}
          />
          <line
            className="cls-4"
            x1="82.87"
            y1="99.53"
            x2="112.43"
            y2="129.64"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="43.63"
            y1="154.5"
            x2="112.43"
            y2="129.64"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="17.56"
            y1="123.72"
            x2="82.87"
            y2="99.53"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="43.63"
            y1="154.5"
            x2="17.56"
            y2="123.72"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="113.24"
            y1="178.69"
            x2="43.63"
            y2="154.5"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="176.4"
            y1="152.75"
            x2="113.24"
            y2="178.69"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="111.31"
            y1="130.04"
            x2="176.4"
            y2="152.75"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="140.12"
            y1="100.21"
            x2="111.31"
            y2="130.04"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="207.04"
            y1="125.07"
            x2="140.12"
            y2="100.21"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="174.55"
            y1="153.51"
            x2="207.04"
            y2="125.07"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="113.24"
            y1="178.69"
            x2="85.29"
            y2="208.12"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="15.68"
            y1="183.66"
            x2="85.29"
            y2="208.12"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="43.63"
            y1="154.5"
            x2="15.68"
            y2="183.66"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="140.65"
            y1="207.85"
            x2="113.24"
            y2="178.69"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="174.55"
            y1="153.51"
            x2="205.97"
            y2="182.45"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="140.65"
            y1="207.85"
            x2="205.97"
            y2="182.45"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="112.3"
            y1="267.52"
            x2="112.3"
            y2="178.69"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="181.51"
            y1="244"
            x2="181.51"
            y2="195.15"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="112.3"
            y1="267.52"
            x2="181.51"
            y2="244"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="41.88"
            y1="242.52"
            x2="112.3"
            y2="267.52"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="42.42"
            y1="194.41"
            x2="42.42"
            y2="242.52"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="273.02"
            y1="180.97"
            x2="203.12"
            y2="180.97"
            style={styles["cls-4"]}
          />
          <line
            className="cls-4"
            x1="97.79"
            y1="38.79"
            x2="97.79"
            y2="111.63"
            style={styles["cls-4"]}
          />
        </g>
      </svg>
    </>
  );
};

export default Softwares;
