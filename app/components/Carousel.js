import { useState, useEffect, useMemo } from "react";
import OnDemandModelLoad from "../components/OnDemandModelHomepage";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel(props) {
  const carouselList = useMemo(() => props.models, []);

  const [displayed, setDisplayed] = useState(3);
  const [displayedElements, setDisplayedElements] = useState(undefined);
  const PositionVariants = useMemo(
    () => ({
      initialLeft: {
        x: -500,
        scale: 0.7,
        opacity: 0.7,
      },
      initialRight: {
        x: 500,
        scale: 0.7,
        opacity: 0.7,
      },
      firstPosition: {
        x: 0,
        scale: 0.7,
        opacity: 0.7,
        transition: {
          duration: 0.5,
        },
      },
      hover: {
        scale: 0.75,
        opacity: 1,
      },
      hoverMiddle: {
        scale: 1,
      }, // this fixes it!
      secondPosition: {
        scale: 1,
        x: 0,
      },
      thirdPosition: {
        x: 0,
        scale: 0.7,
        opacity: 0.7,
        transition: {
          duration: 0.5,
        },
      },
    }),
    []
  );

  useEffect(() => {
    let carouselListElements = carouselList.map((el, index) => {
      if (
        index === displayed - 1 ||
        (displayed === 0 && index === carouselList.length - 1)
      ) {
        return {
          position: 0,
          element: (
            <motion.div
              variants={PositionVariants}
              initial="initialLeft"
              animate="firstPosition"
              exit="initialLeft"
              whileHover="hover"
              layout
              key={index}
              className="cardWrapper"
              onClick={() => {
                setDisplayed(index);
              }}
              style={{ gridArea: "A0" }}
            >
              <motion.div layout className="card">
                <img className="w-full h-full object-contain" src={el.poster} alt={el.alt} loading="lazy"/>
              </motion.div>
            </motion.div>
          ),
        };
      } else if (index === displayed) {        
        return {
          position: 1,
          element: (
            <motion.div
              variants={PositionVariants}
              animate="secondPosition"
              layout
              key={index}
              className="cardWrapper"
              whileHover="hoverMiddle"
              style={{ gridArea: "A1" }}
            >
              <motion.div layout className="card">                
                <div className="w-full h-full">                  
                {props.viewportWidth < 960 ?
                    <OnDemandModelLoad
                      loadModelOnMouseMove={props.loadModelOnMouseMove}
                      src={el.src}
                      poster={el.poster}
                      alt={el?.alt}
                      cameraOrbit="-25deg 0 100%"
                      posterWidth="100%"
                      posterHeight="100%"
                      shadowIntensity="0"
                    />
                  : props.viewportWidth < 1280 ? 
                    <OnDemandModelLoad
                      loadModelOnMouseMove={props.loadModelOnMouseMove}
                      src={el.src}
                      poster={el.poster}
                      alt={el?.alt}
                      cameraOrbit="-25deg 0 100%"
                      posterWidth="100%"
                      posterHeight="100%"
                      shadowIntensity="0"
                    />                      
                  : props.viewportWidth <= 1440 ?
                    <OnDemandModelLoad
                      loadModelOnMouseMove={props.loadModelOnMouseMove}
                      src={el.src}
                      poster={el.poster}
                      alt={el?.alt}
                      cameraOrbit={`-25deg 0 ${el.zoomAt1400 ? el.zoomAt1400: '83%'}`} 
                      posterWidth="100%"
                      posterHeight="100%"
                      shadowIntensity="0"
                    />  
                  : props.viewportWidth <= 1600 ?
                    <OnDemandModelLoad
                      loadModelOnMouseMove={props.loadModelOnMouseMove}
                      src={el.src}
                      poster={el.poster}
                      alt={el?.alt}
                      cameraOrbit={`-25deg 0 ${el.zoomAt1600 ? el.zoomAt1600 : '70%' }`}
                      posterWidth="100%"
                      posterHeight="100%"
                      shadowIntensity="0"
                    />                  
                  :
                    <OnDemandModelLoad
                      loadModelOnMouseMove={props.loadModelOnMouseMove}
                      src={el.src}
                      poster={el.poster}
                      alt={el?.alt}
                      cameraOrbit={`-25deg 0 ${el.zoomXXL ? el.zoomXXL: '70%'}`}
                      posterWidth="100%"
                      posterHeight="100%"
                      shadowIntensity="0"
                    />                  
                }
                </div>
              </motion.div>
            </motion.div>
          ),
        };
      } else if (
        index === displayed + 1 ||
        (displayed === carouselList.length - 1 && index === 0)
      ) {
        return {
          position: 2,
          element: (
            <motion.div
              variants={PositionVariants}
              initial="initialRight"
              animate="thirdPosition"
              exit="initialRight"
              whileHover="hover"
              key={index}
              layout
              className="cardWrapper"
              onClick={() => {
                setDisplayed(index);
              }}
              style={{ gridArea: "A2" }}
            >
              <motion.div layout className="card">
                <img className="w-full mx-auto object-contain" src={el.poster} alt={el.alt} loading="lazy"/>
              </motion.div>
            </motion.div>
          ),
        };
      } else {
        return undefined;
      }
    });

    carouselListElements = carouselListElements.filter((el) =>
      el !== undefined ? true : false
    );

    setDisplayedElements(carouselListElements);
  }, [displayed, carouselList, PositionVariants, props.loadModelOnMouseMove]);

  return (
    <>
      {/* <AnimateSharedLayout> */}

      {displayedElements !== undefined && (
        <AnimatePresence initial={false}>
          {displayedElements.filter((el) => el.position === 0)[0].element}
          {displayedElements.filter((el) => el.position === 1)[0].element}
          {displayedElements.filter((el) => el.position === 2)[0].element}
        </AnimatePresence>
      )}
      {/* </AnimateSharedLayout> */}
    </>
  );
}
