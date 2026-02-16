import React from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

const Service = (props) => {
  return (
    <div className="flex flex-col tab:flex-row items-center mb-5 border-b border-gray-200 pb-5">
      <div className="w-full tab:w-5/6 tab:mr-5">
        <motion.h3
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.25 * props.idx }}
          viewport={{ once: true }}
          className="text-3xl tab:text-4xl mb-5"
        >
          {props.heading}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.25 * props.idx }}
          viewport={{ once: true }}
          className="mt-2 leading-8"
        >
          {props.content}
        </motion.p>
      </div>
      <Link to={props.url} className="w-full tab:w-1/6">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="mt-2 w-full border-primaryBlue h-12 rounded-md hover:bg-primaryBlue hover:text-white hover:border-0 hover:font-medium border transition ease-in-out duration-200"
        >
          KNOW MORE
        </motion.button>
      </Link>
    </div>
  );
};

export default Service;
