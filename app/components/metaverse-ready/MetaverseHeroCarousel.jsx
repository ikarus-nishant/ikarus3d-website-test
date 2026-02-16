import { useState } from "react";
import MetaverseModel from "./MetaverseModel";

// Inspired from - https://codepen.io/nopr/pen/DWrOBm and https://stackoverflow.com/questions/28118280/css-3d-carousel-item-rotation
// https://codepen.io/Pritish-Sehzpaul/pen/Vwqevze
export const MetaverseHeroCarousel = (props) => {
  const [currdeg, setCurrdeg] = useState(0);
  const arr = ["a", "b", "c"]; // array to contain all the elements in the carousel
  const [orderArray, setOrderArray] = useState(["c", "a", "b"]); // array to reflect the position of the elements in the carousel
  const [photoA,setPhotoA] = useState(props.posterA);
  const [photoB,setPhotoB] = useState(props.posterB);
  const [photoC,setPhotoC] = useState(props.posterC);
  const rotateArray = (direction) => {
    let arr = [...orderArray];
    let len = arr.length;
    if (direction === "n") {
      //this is anti-clockwise rotation
      let temp = arr[0];
      for (let i = 0; i < len; i++) {
        arr[i] = arr[i + (1 % len)];
      }
      arr[len - 1] = temp;
    } else {
      //this is clockwise rotation
      let temp = arr[len - 1];
      for (let i = len - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = temp;
    }
    setOrderArray(arr);
  };

  const rotate = (data) => {
    for (let ele of arr) {
      if (data === ele && orderArray[0] === ele) {
        setCurrdeg(currdeg + 120);
        rotateArray("p");
        break;
      } else if (data === ele && orderArray[2] === ele) {
        setCurrdeg(currdeg - 120);
        rotateArray("n");
        break;
      }
    }
  };

  const carouselStyle = {
    WebkitTransform: `rotateY(${currdeg}deg)`,
    MozTransform: `rotateY(${currdeg}deg)`,
    OTransform: `rotateY(${currdeg}deg)`,
    transform: `rotateY(${currdeg}deg)`,
  };

  const itemStyle = {
    WebkitTransform: `rotateY(${-currdeg}deg)`,
    MozTransform: `rotateY(${-currdeg}deg)`,
    OTransform: `rotateY(${-currdeg}deg)`,
    transform: `rotateY(${-currdeg}deg)`,
  };

  return (
    <div className="meta-container">
      <div className="meta-carousel" style={carouselStyle}>
        <div className="meta-a" onClick={() => rotate("a")}>
          <div className="meta-item" style={itemStyle}>
            {orderArray[1] === "a" ? (
              <div className="h-36 w-36 tab:h-52 tab:w-52 lg:h-72 lg:w-72 metaverse-model">
                <MetaverseModel
                  loadModelOnMouseMove={props.loadModelOnMouseMove}
                  touchActions="pan-y pinch-zoom"
                  src={props.srcA} //Eg. "mod/others/snoopy.glb"
                  environment="/mod/Neutral.hdr"
                  alt={props.altA}
                  poster={props.posterA} //Eg."images/Adidas.png"
                />
              </div>
            ) : (
              <img
                className="cursor-pointer rounded-md metaverse-img"
                src={photoA}
                alt={props.altA}
                fetchpriority="high"
                loading="eager"
                onPointerOver={()=>setPhotoA(props.posterAGlow)}
                onPointerOut={()=>setPhotoA(props.posterA)}
                onMouseDown={()=>setPhotoA(props.posterA)}
              ></img>
            )}
          </div>
        </div>
        <div className="meta-b" onClick={() => rotate("b")}>
          <div className="meta-item" style={itemStyle}>
            {orderArray[1] === "b" ? (
              <div className="h-36 w-36 tab:h-52 tab:w-52 lg:h-72 lg:w-72 metaverse-model">
                <MetaverseModel
                  loadModelOnMouseMove={props.loadModelOnMouseMove}
                  touchActions="pan-y pinch-zoom"
                  src={props.srcB} //Eg. "mod/Test/RobotExpressive.glb"
                  environment="/mod/Neutral.hdr"
                  alt={props.altB}
                  poster={props.posterB} //Eg."images/Adidas.png"
                />
              </div>
            ) : (
              <img
                className="cursor-pointer rounded-md metaverse-img"
                src={photoB}
                alt={props.altB}
                fetchpriority="high"
                loading="eager"
                onPointerOver={()=>setPhotoB(props.posterBGlow)}
                onPointerOut={()=>setPhotoB(props.posterB)}
                onMouseDown={()=>setPhotoB(props.posterB)}
              ></img>
            )}
          </div>
        </div>
        <div className="meta-c" onClick={() => rotate("c")}>
          <div className="meta-item" style={itemStyle}>
            {orderArray[1] === "c" ? (
              <div className="h-36 w-36 tab:h-52 tab:w-52 lg:h-72 lg:w-72 metaverse-model">
                <MetaverseModel
                  loadModelOnMouseMove={props.loadModelOnMouseMove}
                  touchActions="pan-y pinch-zoom"
                  src={props.srcC} //Eg. "mod/Test/RobotExpressive.glb"
                  environment="/mod/Neutral.hdr"
                  alt={props.altC}
                  poster={props.posterC} //Eg."images/Adidas.png"
                />
              </div>
            ) : (
              <img
                className="cursor-pointer rounded-md metaverse-img"
                src={photoC}
                alt={props.altC}
                fetchpriority="high"
                loading="eager"
                onPointerOver={()=>setPhotoC(props.posterCGlow)}
                onPointerOut={()=>setPhotoC(props.posterC)}
                onMouseDown={()=>setPhotoC(props.posterC)}
              ></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
