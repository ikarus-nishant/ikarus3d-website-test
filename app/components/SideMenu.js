import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SideMenu = (props) => {
  const headerHeight = useSelector((state) => state.header.currentHeight);

  const getSideMenuOptions = (item, currentCategory, setMethod, index) => {
    return (
      <div
        className={`flex justify-start items-center gap-4 py-[10px] xl:py-[20px] pl-[15px]  ${
          currentCategory === item.name ? "bg-primarysecondBackground" : ""
        }`}
        onClick={() => {
          if (currentCategory === item.name) props.setShowSideMenu(false);
          else setMethod(item.name);
        }}
      >
        <div
          key={index}
          className="cursor-pointer flex flex-col items-center justify-center gap-[6px]"
        >
          <div
            className={`h-[3rem] w-[3rem] xl:h-[4rem] xl:w-[4rem] rounded-full p-[2px] mx-auto  ${
              currentCategory === item.name
                ? "bg-gradient-to-r from-[#A06BF8] to-[#00AFD6]"
                : "bg-[#ffffff5b]"
            }`}
          >
            <div
              className={`w-full h-full  ${
                item.name === currentCategory
                  ? "bg-primarysecondBackground"
                  : "bg-secondaryDarkBackground"
              } p-1 rounded-full`}
            >
              <div
                className={` ${item.padding} w-full h-full rounded-full bg-[#263747] flex justify-center items-center `}
              >
                <img
                  src={item.displayPic}
                  alt={item.name}
                  className={`${item.dimension} object-contain`}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className={`${
              currentCategory === item.name
                ? "text-primaryBlue"
                : "text-secondaryBackground"
            } text-base xl:text-2xl font-[400]`}
          >
            {item.name.charAt(0).toUpperCase() + item.name.substring(1)}
          </h2>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
        className={`absolute border-red-400 tab:relative tab:top-0 overflow-y-scroll no-scrollbar lap:overflow-y-visible left-0 bg-cardBackgroundColor z-30 w-[65%] mob:w-[55%] tab:w-full ${
          props.showSideMenu ? "" : "-translate-x-full"
        } transition-all duration-500 xl:duration-1000 ease-in`}
      >
        <div className="w-full border-b-[2px] border-[#1c232c56]">
          <div className="flex justify-between items-center gap-4 py-[15px] px-[15px]">
            <div className="cursor-pointer flex flex-col items-center justify-center gap-[6px] h-[25px]">
              <h2 className="text-secondaryBackground text-[20px] xl:text-2xl font-[500]">
                Categories
              </h2>
            </div>
            <div onClick={() => props.setShowSideMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#F8F9FC"
                className="mr-1 w-[25px] h-[25px] stroke-[1.5px] hover:stroke-[2px] transition-all duration-300 ease-out cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        {props.content.map((item, index) => (
          <div
            key={item.name}
            className="flex flex-col gap-y-[10px] cursor-pointer"
            onClick={() => {
              props.setCurrentCategory(item.name);
            }}
          >
            {getSideMenuOptions(
              item,
              props.currentCategory,
              props.setCurrentCategory,
              index
            )}
            {props.currentCategory === "Furniture" ? (
              <div className="bg-primarysecondBackground pl-8 tab:pl-10 xl:pl-16 -mt-[10px]">
                {item.subMenu.map((subItem, subIndex) => {
                  return (
                    <div key={subItem.name}>
                      {getSideMenuOptions(
                        subItem,
                        props.currentSubCategory || "",
                        props.setCurrentSubCategory,
                        subIndex
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideMenu;
