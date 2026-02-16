import { motion } from "framer-motion";

const ServicesHeading = (props) => {
  const Element = props.element || "h3";

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, delay: 0.5, amount: 0.25 }}
    >
      <div className="text-[24px] leading-7 tab:text-[26px] lg:text-[36px] lg:leading-[40px] font-semibold text-white opacity-[0.9]">
        {props.headings.map((heading, index) => {
          if (index === props.headings.length - 1)
            return <Element key={`heading-${index}`}>{heading}</Element>;
          else {
            return <Element key={`heading-${index}`}>{heading}</Element>;
          }
        })}
      </div>
    </motion.div>
  );
};

export default ServicesHeading;
