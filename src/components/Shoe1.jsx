import React from "react";
import { motion } from "framer-motion";
import shoe1 from "./images/shoe1-photoroom.png";
import shoe2 from "./images/shoe2-photoroom.png";
import shoe3 from "./images/shoe3-photoroom.png";
import shoe4 from "./images/shoe4-photoroom.png";
import shoe6 from "./images/shoe6-photoroom.png";
import logo from "./images/Logo_NIKE.svg.png";
const shoeimg = [shoe1, shoe2, shoe3, shoe4,shoe6];
const coloring = [
  "#619ac0ff",
  "#00c597ff",
  "#a53dd4ff",
  "#0384bcff",
  "#e23aa2ff",
];
import { useEffect, useState } from "react";
const shoeText = [
  "DUNK LOW RETRO ",
  "DUNK LOW RETRO",
  "DUNK LOW RETRO ",
  "DUNK LOW RETRO",
  "DUNK LOW RETRO",
];
const shoeText1 = [
  "DUNK LOW RETRO ",
  "DUNK LOW RETRO",
  "DUNK LOW RETRO ",
  "DUNK LOW RETRO",
  "DUNK LOW RETRO",
];
const shoeText2 = [
  "DUNK LOW RETRO ",
  "DUNK LOW RETRO",
  "DUNK LOW RETRO ",
  "DUNK LOW RETRO",
  "DUNK LOW RETRO",
];

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
      <div className="flex h-185 w-full bg-white ">
         <motion.div
          key={index} // 👈 re-animates text on change
          className="absolute bottom-30 left-138 text-5xl text-black text-black font-bold z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {shoeText[index]}
        </motion.div>

       
        <motion.div
          className="h-185 w-1/10 bg-[#EDEDED] z-0"
          initial={{ x: -120, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        ></motion.div>
        <motion.div
          className="h-185 w-1/10 z-0"
          style={{ backgroundColor: coloring[index] }}
          initial={{ x: -240, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, type: "spring" }}
        ></motion.div>
       <motion.div
          className="h-185 w-1/10 bg-[#EDEDED]z-0"
          initial={{ x: -360, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        ></motion.div>
        <motion.div
          className="h-185 w-1/10 z-0"
          style={{ backgroundColor: coloring[index] }}
          initial={{ x: -480, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, type: "spring" }}
        ></motion.div>
         <motion.div
          className="h-185 w-1/10 bg-[#EDEDED] z-0"
          initial={{ x: -600, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        ></motion.div>
        <motion.div
          className="h-185 w-1/10 z-0"
          style={{ backgroundColor: coloring[index] }}
          initial={{ x: -600, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, type: "spring" }}
        ></motion.div>
    <motion.div
          className="h-185 w-1/10 bg-[#EDEDED] z-0"
          initial={{ x: -720, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        ></motion.div>
        <motion.div
          className="h-185 w-1/10 z-0"
          style={{ backgroundColor: coloring[index] }}
          initial={{ x: -840, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, type: "spring" }}
        ></motion.div>
     <motion.div
          className=" h-185 w-1/10 bg-[#EDEDED] z-0"
          initial={{ x: -960, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.4, type: "spring" }}
        ></motion.div>
          <motion.div
          className="h-185 w-1/10 z-0"
          style={{ backgroundColor: coloring[index] }}
          initial={{ x: -1080, opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        ></motion.div>
        <div className="absolute flex items-center justify-center left-105 h-180 w-180 bg-transparent">
          <motion.img
            className="relativeax-w-full max-h-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,1.0)]"
            src={shoeimg[index]}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
          />
        </div>
        {/* <div className="absolute left-2 top-5 h-35 w-50 bg-transparent ">
          <img src={logo} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Shoe1;
