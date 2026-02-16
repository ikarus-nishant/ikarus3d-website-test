import { motion } from "framer-motion";
import Carousel from "./Carousel";

const ModelViewerCarousel = (props) => {  

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="carousel relative w-full no-scrollbar"
    >
      <Carousel loadModelOnMouseMove={props.loadModelOnMouseMove} viewportWidth={props.viewportWidth} models={props.models} />
    </motion.div>
  );
};

export default ModelViewerCarousel;
