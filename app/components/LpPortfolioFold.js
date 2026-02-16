import React, { useEffect, useRef, useState } from "react";
import {
  shoeModels,
  chairModels,
  sofaModels,
  cabinetModels,
  bedModels,
  tableModels,
  electronicModels,
  accesoryModels,
  eyewearModels,
  avatarModels,
  spaceModels,
  apparelModels,
} from "../../public/data/modelsData";
import Model from "./Model";
import { GradientBorder, ModelSectionDropDown } from "../routes/lp";
import LpModelViewer from "./LpModelViewer";
import MovingModel from "./MovingModel";
import PrimaryButton from "./primaryButton";
const LpPortfolioFold = (props) => {
  const containerRef = useRef();
    const dropDown = {
        chair:chairModels,
        sofa:sofaModels,
        cabinet:cabinetModels,
        table:tableModels,
        shoe:shoeModels,
        bed:bedModels,
        accessories:accesoryModels,
        apparel:apparelModels,
    }
    const category = ["Furniture", "Shoes","Apparel","Accessories"]
    const SubCategory = [
        ["Chair","Table","Bed","Sofa","Cabinet"],
        ["None"],
        ["None"],
        ["None"],
    ];
    const [subIndex, setSubIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentModelArray, setCurrentModelArray] = useState(props.modelData);
  useEffect(() => {
    if(window.innerWidth>=1022){
      setCurrentModelArray(props.modelData);
      setCurrentIndex(0);
    }
  }, [props.modelData]);
  const handleLeftScroll = () => {
    if (containerRef.current) {
      // console.log("scroll");
      containerRef.current.scrollBy({ left: -60 });
      // containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleRightScroll = () => {
    if (containerRef.current) {
      // console.log("scroll");
      containerRef.current.scrollBy({ left: 60 });
      // containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCategoryChange = (e) => {
    if(e.target.value==="Furniture"){
      setSubIndex(0);
      setCurrentModelArray(dropDown.chair);
    } else if(e.target.value==="Shoes"){
      setSubIndex(1);
      setCurrentModelArray(dropDown.shoe);
    }else if(e.target.value==="Apparel"){
      setSubIndex(2);
      setCurrentModelArray(dropDown.apparel);
    }else if(e.target.value==="Accessories"){
      setSubIndex(3);
      setCurrentModelArray(dropDown.accessories);
    }else if(e.target.value!=="None"){
      const k = e.target.value;
      if(e.target.value==="Chair"){
        setCurrentModelArray(dropDown.chair);
      }else if(e.target.value==="Table"){
        setCurrentModelArray(dropDown.table);
      }else if(e.target.value==="Bed"){
        setCurrentModelArray(dropDown.bed);
      }else if(e.target.value==="Sofa"){
        setCurrentModelArray(dropDown.sofa);
      }else if(e.target.value==="Cabinet"){
        setCurrentModelArray(dropDown.cabinet);
      }
      // console.log(e.target.value);
    }
  };
  const handleClick = (idx) => {
    setCurrentIndex(idx);
  };
  return (
    <div className="h-[80vh] lap_gen:h-[120vh] xl:h-[80vh] flex flex-col gap-10 ">
      <div className=" h-[10%] flex justify-center items-center flex-col gap-2">
        <h2 className="text-primaryWhite font-[600] text-[21px] tab:text-[26px] md:text-[32px] leading-7 tab:leading-[32px] md:leading-[40px] -tracking-[0.44px] md:-tracking-[0.32px]">{props.SectionHeading}</h2>
        <div className="text-white opacity-[0.7] text-[16px] leading-[24px] xl:text-[18px] lg:font-light text-center">{props.SectionSubText}</div>
      </div>
      <div className="flex justify-between h-[90%] lap_gen:h-[70%] xl:h-[85%] xxl:h-[60%]">
        <div className="hidden lap_gen:inline-block h-full w-[25%] py-10"> {/* sidePanel */}
          <ModelSectionDropDown
            modelData={props.modelData}
            changeModelData={props.setModelData}
          />
        </div>
        <div className="h-full flex flex-col w-full lap_gen:w-[70%] items-center lap_gen:items-center relative">
          <div className="w-full lap_gen:hidden h-[100px] py-3 tab_old:py-4 flex justify-center"> {/* mobile/tab list */}
            <div className="rounded-md flex w-full tab_old:w-fit justify-between items-center gap-[3px] tab_old:p-3 bg-gray-700">
              <div className="flex w-full justify-center items-center gap-2 border-r-[1.5px] border-gray-500 p-1 pr-1">
                <label className="text-gray-400 text-[10px] mob_mid:text-[13px] tab:text-[15px]">Category</label>
                <select name="category" className="h-full rounded-lg tab_mid:p-3 text-[10px] mob_mid:text-[13px] tab:text-[15px] bg-gray-700 text-white" id="input"
                    onChange={handleCategoryChange}
                >
                  {category.map((data, index) => (
                    <option key={index} value={data} className="p-3 px-10 border text-[10px] mob_mid:text-[13px] tab:text-[15px]">{data}</option>
                  ))}
                </select>
              </div>
              <div className="flex w-full justify-center items-center gap-[3px] tab:pl-1">
              <label className="text-gray-400 text-[10px] mob_mid:text-[13px] tab:text-[15px]">SubCategory</label>
              <select name="category2" className="h-full rounded-lg tab_mid:p-3 text-[10px] mob_mid:text-[13px] tab:text-[15px] bg-gray-700 text-white" id={"abc"}
                  onChange={handleCategoryChange}
              >
                {SubCategory[subIndex].map((data, index) => (
                  <option key={index} value={data} className="p-3 px-10 border text-[10px] mob_mid:text-[13px] tab:text-[15px]">{data}</option>
                ))}
              </select>
              </div>
            </div>
          </div>
          {/* model */}
          <div className="grow w-[100%] lap_gen:w-[80%] h-full relative" 
          // style={{backgroundImage: "url(./images/lp/mesh.png)", backgroundSize: "cover", backgroundRepeat:"no-repeat"}}
          > 
            {/* <div className="absolute w-full h-1/2 bg-red-600 bottom-0 rotate-12" style={{transform: rotateZ}}></div> */}
            {/* <LpModelViewer
                        src={currentModelArray[currentIndex].src}
                        iosSrc={currentModelArray[currentIndex].iosSrc}
                        alt={currentModelArray[currentIndex].alt}
                        rotation={currentModelArray[currentIndex].rotation}
                        poster={currentModelArray[currentIndex].pic}
                    /> */}
            <MovingModel
              src={currentModelArray[currentIndex].src}
              environment="/mod/Neutral.hdr"
              height="400px"
              width="100%"
            >
              {" "}
            </MovingModel>
            {/* {console.log("current", currentModelArray)} */}
          </div>
          <div className="w-full rounded-md lap_gen:w-[80%] h-[105px] lap_gen:h-[120px] xl:h-[17%] bg-gray-700 bg-opacity-40  lap_gen:bg-transparent"> {/*bottom model images */}
            <div className="w-full relative h-full flex ">
              <div className="flex justify-center items-center" onClick={handleLeftScroll}>
                <img
                  src="/images/chevron-left.svg"
                  width={50}
                  height={50}
                  className="rotate-180 cursor-pointer"
                />
              </div>
              <div ref={containerRef} className="w-full h-full max-h-[110px] xl:max-h-[130px] tab:p-2 flex gap-2 overflow-x-auto no-scrollbar">
                {currentModelArray.map((model, index) => (
                  <div
                    onClick={() => handleClick(index)}
                    className="h-full aspect-square rounded-full p-2"
                    key={index}
                  >
                    <GradientBorder size="95%" show={currentIndex == index}>
                      <img
                        src={model.pic}
                        alt={model.alt}
                        className="h-full w-auto cursor-pointer p-[15%]"
                      />
                    </GradientBorder>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center" onClick={handleRightScroll}>
                <img
                  src="/images/chevron-left.svg"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PrimaryButton
          link="/contact-us"
          content="Talk to us"
          rel="noopener noreferrer"
          target="_blank"
        />
      </div>
    </div>
  );
};
export default LpPortfolioFold;