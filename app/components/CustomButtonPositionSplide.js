import React, { useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function CustomButtonPositionSplide({
  children,
  arrows,
  perPage,
  perPageLessThan1080,
  perPageLessThan720,
  perMove,
  gap,
  padding,
  paddingLessThan1080,
  paddingLessThan720,
  autoWidth,
  autoScroll,
  fixedWidth,
  splideElRef,
  pagination,
  start,
  direction,
  type,
  length,
  index,
}) {
  let _perPageLessThan1080 =
    perPageLessThan1080 === undefined || perPageLessThan1080 === null
      ? perPage - 1
      : perPageLessThan1080;
  let _perPageLessThan720 =
    perPageLessThan720 === undefined || perPageLessThan720 === null
      ? perPage - 1
      : perPageLessThan720;
  let _paddingLessThan720 =
    paddingLessThan720 === undefined || paddingLessThan720 === null
      ? padding
      : paddingLessThan720;
  let _paddingLessThan1080 =
    paddingLessThan1080 === undefined || paddingLessThan1080 === null
      ? padding
      : paddingLessThan1080;

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
          focus: "center",
          arrows: arrows,
          type: type || "slide",
          perPage: perPage,
          perMove: perMove,
          gap: gap,
          fixedWidth: fixedWidth,
          autoWidth: autoWidth,
          padding: padding,
          breakpoints: {
            1080: {
              perPage: _perPageLessThan1080,
              padding: _paddingLessThan1080,
            },
            720: {
              perPage: _perPageLessThan720,
              padding: _paddingLessThan720,
            },
          },
        }}
        hasTrack={false}
        extensions={autoScroll ? { AutoScroll } : null}
      >
        <SplideTrack>
          {React.Children.map(children, (child, index) => {
            return (
              <SplideSlide className="flex justify-center">{child}</SplideSlide>
            );
          })}
        </SplideTrack>
        <div
          className="splide__arrows relative tab_old:mt-[44px]"
          style={{ opacity: "100%" }}
        >
          <button
            className={`splide__arrow splide__arrow--prev`}
            style={{
              background:
                index === 0
                  ? "linear-gradient(90deg,#b0b6ba,#646F79)"
                  : "linear-gradient(90deg,#0052D4,#2175BB)",
            }}
            id="prevButtonCarrers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.47 8.53C13.3375 8.38782 13.2654 8.19978 13.2688 8.00548C13.2723 7.81118 13.351 7.62579 13.4884 7.48838C13.6258 7.35096 13.8112 7.27225 14.0055 7.26882C14.1998 7.2654 14.3878 7.33752 14.53 7.47L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1987 18.6705 12.3894 18.53 12.53L14.53 16.53C14.4613 16.6037 14.3785 16.6628 14.2865 16.7038C14.1945 16.7448 14.0952 16.7668 13.9945 16.7686C13.8938 16.7704 13.7938 16.7518 13.7004 16.7141C13.607 16.6764 13.5222 16.6203 13.451 16.549C13.3797 16.4778 13.3236 16.393 13.2859 16.2996C13.2482 16.2062 13.2296 16.1062 13.2314 16.0055C13.2332 15.9048 13.2552 15.8055 13.2962 15.7135C13.3372 15.6215 13.3963 15.5387 13.47 15.47L16.19 12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H16.19L13.47 8.53Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={`splide__arrow splide__arrow--next`}
            style={{
              background:
                index === length - 1
                  ? "linear-gradient(90deg,#b0b6ba,#646F79)"
                  : "linear-gradient(90deg,#0052D4,#2175BB)",
            }}
            id="nextButtonCareers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M12.5175 7.9297C12.3978 7.80129 12.3327 7.63145 12.3358 7.45596C12.3389 7.28047 12.41 7.11304 12.5341 6.98893C12.6582 6.86482 12.8256 6.79373 13.0011 6.79063C13.1766 6.78754 13.3464 6.85268 13.4748 6.97233L17.0876 10.585C17.2144 10.7121 17.2857 10.8842 17.2857 11.0637C17.2857 11.2432 17.2144 11.4154 17.0876 11.5424L13.4748 15.1551C13.4128 15.2217 13.338 15.2751 13.2549 15.3121C13.1719 15.3491 13.0822 15.369 12.9912 15.3706C12.9003 15.3722 12.8099 15.3555 12.7256 15.3214C12.6412 15.2874 12.5646 15.2367 12.5003 15.1723C12.4359 15.108 12.3852 15.0314 12.3512 14.947C12.3171 14.8627 12.3004 14.7724 12.302 14.6814C12.3036 14.5904 12.3235 14.5007 12.3605 14.4177C12.3975 14.3346 12.4509 14.2598 12.5175 14.1978L14.9741 11.7411H6.22231C6.04265 11.7411 5.87036 11.6698 5.74332 11.5427C5.61629 11.4157 5.54492 11.2434 5.54492 11.0637C5.54492 10.8841 5.61629 10.7118 5.74332 10.5848C5.87036 10.4577 6.04265 10.3863 6.22231 10.3863H14.9741L12.5175 7.9297Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </Splide>
    </>
  );
}
