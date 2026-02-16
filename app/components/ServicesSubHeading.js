import { motion } from "framer-motion";

const ServicesSubHeading = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, delay: 0.5, amount: 0.25 }}
    >
      <p className="text-[16px] leading-6 tab:text-[18px] lg:leading-[28px] text-white opacity-[0.7] lg:font-light">
        {props.subheading}
      </p>
    </motion.div>
  );
};

export default ServicesSubHeading;
