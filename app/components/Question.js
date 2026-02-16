import React from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Question = ({ question, answer, isCurrent }) => {
  return (
    <>
      <div className="px-5">
        <div
          className={`w-full text-lg mob:text-xl tab:text-2xl + ${
            isCurrent === "true" ? "text-primaryBlue" : "text-gray-800"
          }`}
        >
          <p>{question}</p>
        </div>
        <div
          className={`transition-all ease-in-out duration-500 text-lg text-gray-600 my-1 ${
            isCurrent === "true" ? "max-h-72" : "max-h-0 opacity-0"
          } overflow-hidden
          `}
        >
          <p>{answer}</p>
        </div>
      </div>
      <div className="px-5">
        <div
          className={`rounded-full + ${
            isCurrent === "false" ? "block" : "hidden"
          }`}
        >
          <FaAngleDoubleDown
            size={30}
            className="hover:text-primaryBlue transition ease-out p-1 border-0"
          />
        </div>
        <div
          className={`rounded-full + ${
            isCurrent === "true" ? "block" : "hidden"
          }`}
        >
          <FaAngleDoubleUp
            size={30}
            className="text-primaryBlue hover:text-black transition ease-out p-1 border-0"
          />
        </div>
      </div>
    </>
  );
};

export default Question;
