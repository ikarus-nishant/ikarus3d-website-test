import { useEffect, useState, useRef } from "react";

const ModalContainer = (props) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.05)] flex items-center justify-center backdrop-blur-sm"
      style={{ zIndex: 1200 }}
    >
      <div className="flex justify-center h-fit max-h-full w-full overflow-y-auto py-5">
        <div ref={modalRef} className="w-fit h-fit">
          <div className="relative">
            <span
              onClick={props.closeModal}
              className="absolute top-5 right-5 text-white font-medium cursor-pointer z-20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19 5L5 19M5.00001 5L19 19"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;