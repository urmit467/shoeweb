import React from "react";
import { motion } from "framer-motion";
import shoe1 from "./images/shoe1-photoroom.png";
import shoe2 from "./images/shoe2-photoroom.png";
import shoe3 from "./images/shoe3-photoroom.png";
import shoe4 from "./images/shoe4-photoroom.png";
import shoe5 from "./images/shoe5-photoroom.png";
const shoeimg = [shoe1, shoe2, shoe3, shoe4, shoe5];
const coloring = [
  "#223440",
  "#004938ff",
  "#aea286ff",
  "#e28f55",
  "#717477ff",
  "#a90e2b",
];
import { useEffect, useState } from "react";
import { i } from "framer-motion/client";
const Shoe1 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % shoeimg.length); // cycle 0 → 4 → 0
    }, 3000); // change every 3s

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <div className="flex h-180 w-full bg-black">
        <motion.div
          className="h-180 w-1/5 bg-[#EDEDED]"
          initial={{ x: -300, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        ></motion.div>
        <motion.div
          className="h-180 w-1/5"
          style={{ backgroundColor: coloring[index] }}
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
          className="h-180 w-1/5"
          style={{ backgroundColor: coloring[index] }}
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
        <div className="absolute left-127 top-20 h-130 w-130 bg-transparent">
          <motion.img
            className="relative   drop-shadow-[0_40px_60px_rgba(0,0,0,1.0)]"
            src={shoeimg[index]}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.25 }}
          />
        </div>
        ;
      </div>
    </>
  );
};

export default Shoe1;
