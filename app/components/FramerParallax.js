import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  motionValue
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex justify-center items-center relative" style={{scrollSnapAlign:'center', perspective:'500px'}}>
      <div ref={ref} className="relative w-[300px] h-[400px] m-5 overflow-hidden">
        <img src={`/images/roboDoggo.webp`} className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" alt="A London skyscraper" />
      </div>
      <motion.h2 className="text-white" style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function FramerParallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="fixed bottom-[100px] h-[5px] left-0 right-0" style={{ scaleX }} />
    </>
  );
}
