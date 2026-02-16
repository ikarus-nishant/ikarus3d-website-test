import React from "react";
import video from "../../public/videos/video.mp4";

const Video = (props) => {
  return (
    <div
      className={`${
        props.showVideo === false ? "hidden" : "block"
      } absolute w-full `}
    >
      <div className="z-80">
        <button
          className="flex text-center text-lg border-1 rounded-[5px] px-[12px] py-[8px] bg-gray-100 z-80 ml-[86%] "
          onClick={() => props.setShowVideo(false)}
        >
          X
        </button>
        <video
          src={video}
          controls="controls"
          autoPlay={true}
          className="m-auto flex justify-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Video;
