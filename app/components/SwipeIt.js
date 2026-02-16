import React, { useEffect } from "react";
import { useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import { URLHash } from '@splidejs/splide-extension-url-hash';

export default function SwipeIt({ children, arrows, perPage, perPageLessThan1080, perPageLessThan720, perMove, gap, padding, paddingLessThan1080, paddingLessThan720, autoWidth, speed, autoScroll, fixedWidth, splideElRef, pagination, start, direction, type }) {
  let _perPageLessThan1080 = perPageLessThan1080 === undefined || perPageLessThan1080 === null ? perPage - 1 : perPageLessThan1080;
  let _perPageLessThan720 = perPageLessThan720 === undefined || perPageLessThan720 === null ? perPage - 1 : perPageLessThan720;
  let _paddingLessThan720 = paddingLessThan720 === undefined || paddingLessThan720 === null ? padding : paddingLessThan720;
  let _paddingLessThan1080 = paddingLessThan1080 === undefined || paddingLessThan1080 === null ? padding : paddingLessThan1080;

  // useEffect(() => {
  //   if (splideElRef) {
  //     splideElRef.current.splide.on("moved", (splide, event) => {
  //       setIndex(splide);
  //     });
  //   }
  // }, []);

  //If autoWidth is set then perPage is disregarded  
  return (
    <>
      <Splide                           
        tag="div"         
        ref={splideElRef}        
        options={{ 
          direction: direction || "ltr",  
          height: direction ? "100%" : "auto",
          start: start,
          pagination: pagination,         
          focus: 0,
          arrows: arrows,
          type:type || "slide",
          perPage: perPage,
          perMove: perMove,
          gap: gap,          
          fixedWidth: fixedWidth,
          autoWidth: autoWidth,          
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: true,
            speed: speed,
          },
          padding: padding,
          breakpoints: {
            1080: {
              perPage: _perPageLessThan1080,
              padding: _paddingLessThan1080
            },
            720: {
              perPage: _perPageLessThan720,
              padding: _paddingLessThan720
            },
          },
        }}
        hasTrack={false}
        extensions={autoScroll ? { AutoScroll } : null}
      >
        <SplideTrack>
          {React.Children.map(children, (child, index) => {
            return <SplideSlide className="flex justify-center">{child}</SplideSlide>;
          })}
        </SplideTrack>
        <div className="splide__arrows" style={{opacity:"100%"}}>
          <button className="splide__arrow splide__arrow--prev" style={{opacity:"100%", padding:"4px", border:"1px solid white", background:"linear-gradient(90deg,#2175BB,#0052D4)", height:"3rem", width:"3rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" className="w-10 h-10 fill-white" style={{width:"3rem",marginRight:"2px", height:"3rem", backgroundColor:"transparent", fill:"transparent", stroke:"white"}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next" style={{opacity:"100%", padding:"4px", border:"1px solid white", background:"linear-gradient(90deg,#0052D4,#2175BB)", height:"3rem", width:"3rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" className="w-10 h-10 fill-white" style={{width:"3rem",marginLeft:"6px", height:"6rem", backgroundColor:"transparent", fill:"transparent", stroke:"white"}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </Splide>
    </>
  );
}
