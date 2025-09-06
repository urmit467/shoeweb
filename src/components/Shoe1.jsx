import React from "react";
import { motion } from "framer-motion";
import shoe1 from "./images/shoe1.png";
const Shoe1 = () => {
  return (
    <>
      <div className="flex h-180 w-full bg-black">
        <motion.div
          className=" h-180 w-1/5 bg-[#EDEDED]"
          initial={{ x:-300, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        ></motion.div>

        <motion.div
          className=" h-180 w-1/5 bg-[#E65900]"
          initial={{ x: -600, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}

          transition={{ duration: 1.0, delay: 0.3, type: "spring" }}
        ></motion.div>

        <motion.div
          className=" h-180 w-1/5 bg-[#EDEDED]"
          initial={{ x: -900, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1.0, delay: 0.4, type: "spring" }}
        ></motion.div>

        <motion.div
          className=" h-180 w-1/5 bg-[#E65900]"
          initial={{ x: -1200, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        ></motion.div>

                <motion.div
          className=" h-180 w-1/5 bg-[#EDEDED]"
          initial={{ x: -1500, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
        ></motion.div>

        <motion.img className="absolute left-130 drop-shadow-[0_40px_60px_rgba(0,0,0,1.0)]" src={shoe1} alt="" 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.5,delay:1.25}}/>
      </div>
    </>
  );
};

export default Shoe1;
