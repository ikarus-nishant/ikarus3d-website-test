import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Index from "~/routes";

const SeparateButtonsSplide = ({ children, ...props }) => {
  return (
    <Splide
      ref={props.splideElRef}
      tag={ props.tag ||  "section"}
      options={{
        autoplay: props.autoPlay,
        interval: 3000,
        drag: props.drag != undefined && props.drag != null ? props.drag : true,
        pauseOnFocus: true,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        height: "auto",
        pagination: props.pagination ? props.pagination : false,
        arrows: props.arrows ? props.arrows : true,
        type: props.type ? props.type : "slide",
        perPage: props.perPage ? props.perPage : 2,
        perMove: props.perMove ? props.perMove : 2,
        gap: "24px",
        padding: props.padding ? props.padding : 0,
      }}
      hasTrack={false}
      onPaginationMounted={(splide, prev, next) => {
        splide._C.Pagination.items.map((item, index) => {
          item.button.parentElement.parentElement.style.zIndex = 30;
          item.button.parentElement.parentElement.style.left = "44px";
          item.button.style.height = "5px";
          item.button.style.width = "20px";
          item.button.style.borderRadius = "5px";
          item.button.style.position = "relative";
          item.button.style.transition = "width 1s ease-linear";
          item.button.style.margin = "0px";
          item.button.style.marginLeft = "8px";          

          var loaderDiv = document.createElement("div");
          Object.assign(loaderDiv.style, {
            position: "absolute",
            height: "100%",
            width: "0%",
            borderRadius: "5px",
            transition: "width 3s",
            backgroundColor: "#1F73BC",
            zIndex: 40,
            top: 0,
          });
          item.button.appendChild(loaderDiv);
        });
      }}
      onPaginationUpdated={(splide, prev, next) => {
        splide._C.Pagination.items.map((item, index) => {
          if (item.button.classList.contains("is-active")) {
            item.button.childNodes[0].style.opacity = 1;
            item.button.childNodes[0].style.width = "100%";
            item.button.style.width = "30px";
          } else {
            item.button.style.width = "20px";
            item.button.style.backgroundColor = "#D9D9D9";
            item.button.childNodes[0].style.opacity = 0;
            item.button.childNodes[0].style.width = "0%";
          }
        });
      }}
    >
      <SplideTrack>
        {React.Children.map(children, (child, index) => {
          return (
            <SplideSlide className="flex justify-center h-full w-full">
              {child}
            </SplideSlide>
          );
        })}
      </SplideTrack>
      <div
        className="splide__arrows relative"
        style={{ opacity: "100%", display: "none" }}
      >
        <button
          ref={props.prevRef}
          className={`splide__arrow splide__arrow--prev prevButton`}
          style={{
            display: "none",
            background:
              props.index === 0
                ? "linear-gradient(90deg,#b0b6ba,#646F79)"
                : "linear-gradient(90deg,#0052D4,#2175BB)",
          }}          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            className="w-10 h-10 fill-white"
            style={{
              width: "3rem",
              marginRight: "2px",
              height: "3rem",
              backgroundColor: "transparent",
              fill: "transparent",
              stroke: "white",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          ref={props.nextRef}
          className={`splide__arrow splide__arrow--next nextButton`}
          style={{
            display: "none",
            background:
              props.index === props.length - 1
                ? "linear-gradient(90deg,#b0b6ba,#646F79)"
                : "linear-gradient(90deg,#0052D4,#2175BB)",
          }}          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            className="w-10 h-10 fill-white"
            style={{
              width: "3rem",
              marginLeft: "6px",
              height: "6rem",
              backgroundColor: "transparent",
              fill: "transparent",
              stroke: "white",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </Splide>
  );
};

export default SeparateButtonsSplide;
