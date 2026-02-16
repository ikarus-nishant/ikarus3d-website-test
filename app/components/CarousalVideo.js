import React, { useEffect, useRef, useState } from 'react';

export default function CarousalVideo({ videos }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : videos.length - 1);
  };
  const goToNext = () => {
    setActiveIndex((prevIndex) => prevIndex < videos.length - 1 ? prevIndex + 1 : 0);
  };

  useEffect(() => {
    // Clear the timeout if it's already set
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set up the new timeout
    // timeoutRef.current = setTimeout(() => {
    //   goToNext();
    // }, 5000); // 5 seconds delay to account for video change transition

    // Clean up the timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, videos.length]);

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`flex-none relative w-full max-w-full transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'} ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            <div className='absolute h-full w-full' style={{background: "linear-gradient(180deg, rgba(10, 12, 16, 0.00) 0%, #0A0C10 100%);"}}>

            </div>
            <video
              controls
              className="w-full h-auto aspect-[16/9]"
              onEnded={goToNext}
              autoPlay={index === activeIndex}>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <button onClick={goToPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 text-white cursor-pointer z-10">‹</button>
      <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 text-white cursor-pointer z-10">›</button>
    </div>
  );
};