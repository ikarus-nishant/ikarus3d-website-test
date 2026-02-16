import { motion, useAnimation } from "framer-motion";

const Timeline = (props) => {
  const controlsMobile = useAnimation();
  const controlsDesktop = useAnimation();

  const handleInView = () => {
    controlsMobile.start({ height: "100%" });
    controlsDesktop.start({ width: "100%" });
  };

  return (
    <div className="bg-transparent w-full">
      {/* Mobile View */}
      <motion.div
        className="w-full grid auto-rows-fr tab:hidden gap-20 relative"
        whileInView={handleInView}
      >
        {props.items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === props.items.length - 1 ? "bg-current" : "bg-transparent"
            } flex w-full gap-4 z-10`}
          >
            <motion.div
              initial={{ borderColor: "#FFF" }}
              whileInView={{ borderColor: "#1D75BD" }}
              transition={{ duration: 1 }}
              viewport={{ once: true, delay: 1 }}
              className="p-2 shrink-0 grow-0 basis-16 h-16 rounded-full border-2 bg-current relative"
            >
              <img
                src={item.imageSrc}
                alt="Timeline Icon"
                className="absolute w-[65%] h-[65%] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
            <div className="grow grid pt-2 h-fit">
              <span className="text-darkHeading break-word font-medium">
                {item.heading}
              </span>
              <span className="text-darkSubHeading break-word text-[12px]">
                {item.content}
              </span>
            </div>
          </div>
        ))}
        <div className="absolute left-[32px] bg-[#FFF] h-full w-[2px]">
          <motion.div
            initial={{ height: "0%" }}
            transition={{ duration: 2, delay: 1 }}
            animate={controlsMobile}
            className="bg-primaryBlue"
          ></motion.div>
        </div>
      </motion.div>

      {/* Tab View */}
      <motion.div
        className="w-fit hidden tab:grid tab:auto-rows-fr lap:hidden gap-10 relative left-1/2"
        whileInView={handleInView}
      >
        {props.items.map((item, index) => (
          <div
            key={index}
            className="flex h-full w-[20rem] gap-4 z-10 relative"
          >
            <div
              className={`${
                index === props.items.length - 1
                  ? "bg-current"
                  : "bg-transparent"
              }  w-20 h-full absolute -left-10`}
            ></div>
            <div className="relative shrink-0 grow-0 basis-10 w-10 h-20">
              <motion.div
                initial={{ borderColor: "#FFF" }}
                whileInView={{ borderColor: "#1D75BD" }}
                transition={{ duration: 1 }}
                viewport={{ once: true, delay: 1 }}
                className="p-2 w-20 h-20 rounded-full border-2 bg-current absolute -left-10"
              >
                <img
                  src={item.imageSrc}
                  alt="Timeline Icon"
                  className="absolute w-[65%] h-[65%] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "left-0 text-left" : "-left-[118%] text-right"
              } relative grid pt-2`}
            >
              <span className="text-darkHeading break-word font-medium">
                {item.heading}
              </span>
              <span className="text-darkSubHeading break-word text-[12px]">
                {item.content}
              </span>
            </div>
          </div>
        ))}
        <div className="absolute left-0 -translate-x-1/2 bg-[#FFF] h-[100%] w-[2px]">
          <motion.div
            initial={{ height: "0%" }}
            transition={{ duration: 2, delay: 1 }}
            animate={controlsMobile}
            className="bg-primaryBlue"
          ></motion.div>
        </div>
      </motion.div>

      {/* Desktop View */}
      <motion.div
        className="w-full hidden lap:grid gap-10 relative"
        style={{ gridTemplateColumns: `repeat(${props.items.length}, 1fr)` }}
        whileInView={handleInView}
      >
        {props.items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === props.items.length - 1 ? "bg-current" : "bg-transparent"
            } flex flex-col w-full gap-4 z-10`}
          >
            <motion.div
              initial={{ borderColor: "#FFF" }}
              whileInView={{ borderColor: "#1D75BD" }}
              transition={{ duration: 1 }}
              viewport={{ once: true, delay: 1 }}
              className="p-2 w-20 h-20 rounded-full border-2 bg-current relative overflow-hidden"
            >
              <img
                src={item.imageSrc}
                alt="Timeline Icon"
                className="absolute w-[65%] h-[65%] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
            <div className="grow flex flex-col gap-2">
              <span className="text-darkHeading break-word font-medium">
                {item.heading}
              </span>
              <span className="text-darkSubHeading break-word text-[12px]">
                {item.content}
              </span>
            </div>
          </div>
        ))}
        <div className="absolute top-[40px] bg-[#FFF] w-full h-[2px]">
          <motion.div
            initial={{ width: "0%" }}
            transition={{ duration: 2, delay: 1 }}
            animate={controlsDesktop}
            className="h-full bg-primaryBlue"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default Timeline;
