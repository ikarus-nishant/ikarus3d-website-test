import React from "react";

export default function ThreeDGrid(props){
  return (
    <div className="scale-x-220 tab_old:scale-x-125">
      <div className="w-48 h-36 translate-x-[1.2rem] transform translate-y-[15px]">
        <div className="parent-grid">
          {/* The length is 72 because there are 12 cols and 6 rows */}
          {Array.from({ length: 72 }).map((_currentElement, i) => {
            if (i === 0) {
              return <div className="bg-primaryDarkBg rounded-tl"></div>;
            }
            if (i === 11) {
              return <div className="bg-primaryDarkBg rounded-tr"></div>;
            }
            return <div className="bg-primaryDarkBg"></div>;
          })}
        </div>
      </div>
      <div className="w-48 h-24 transform skew-x-[-30deg]">
        <div className="parent-grid-reverse">
          {/* The length is 72 because there are 12 cols and 6 rows */}
          {Array.from({ length: 72 }).map((_currentElement, i) => {
            if (i === 60) {
              return <div className="bg-primaryDarkBg rounded-bl"></div>;
            }
            if (i === 71) {
              return <div className="bg-primaryDarkBg rounded-br"></div>;
            }
            return <div className="bg-primaryDarkBg"></div>;
          })}
        </div>
      </div>
    </div>
  );
};