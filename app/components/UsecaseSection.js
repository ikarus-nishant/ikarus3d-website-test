import { useEffect, useRef, useState } from "react";

const UsecaseSection = ({ data }) => {
  return (
    <div className="grid tab:grid-cols-2 lap:grid-cols-3 gap-x-4 gap-y-6 w-full">
      {data.map((item, index) => (
        <div key={index} className="w-full h-full">
          <UseCaseImageContainer
            heading={item.heading}
            content={item.content}
            imageSrc={item.imageSrc}
          />
        </div>
      ))}
    </div>
  );
};

const UseCaseImageContainer = (props) => {
  const contentRef = useRef();
  const [hovering, setHovering] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className={`${
        hovering ? "" : ""
      } text-left h-full min-h-[15rem] w-full relative overflow-hidden px-5 pt-5 rounded-[5px]`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={`${
          hovering ? "blur-md" : ""
        } absolute top-0 left-0 w-full h-full`}
      >
        <img
          src={props.imageSrc}
          alt="Use Case Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        style={{
          background: `linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5) ${
            hovering ? "100%" : "10%"
          }, rgba(0, 0, 0, 0.0) 100%)`,
        }}
        className={`absolute bottom-0 left-0 w-full z-10 h-full`}
      ></div>
      <div className="w-full h-full z-20 relative pb-5">
        <div
          style={{
            bottom: hovering ? "0" : `-${contentHeight + 25}px`,
          }}
          className={`${
            hovering ? "" : ``
          } w-full h-full flex flex-col gap-2 transition-all duration-1000 ease-in-out overflow-hidden relative`}
        >
          <span className="text-md tab:text-lg dark:text-darkHeading font-medium">
            {props.heading}
          </span>
          <div
            ref={contentRef}
            className={`grid gap-2 place-items-start grow text-[14px]`}
          >
            <p className="dark:text-darkHeading">{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsecaseSection;
