import Carousel from "framer-motion-carousel";

const CarouselView = ({ models }) => {
  return (
    <div className="w-full tab:h-full tab:w-[75%] tab:m-auto">
      <Carousel autoPlay={false}>
        {models.map((model, idx) => {
          return (
            <div key={idx}>
              <div className="sketchfab-embed-wrapper h-[32rem]">
                <iframe
                  title={model.title}
                  frameBorder="0"
                  allowFullScreen="allowfullscreen"
                  src={model.src}
                  className="h-full w-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselView;
