import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import List from "./List";
import Shoe1 from "./Shoe1";
import ShoeSlide from "./Shoeslide";
const Frontpage = () => {
  const [show, setShow] = useState(false);
  const first = useRef(2);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen max-w-full bg-green-900 ">
      <div className="relative bg-gradient-to-b from-green-900 via-[#8BE627] to-green-900 w-full h-180  top-10 overflow ">
        {/* Shoe image */}
        <img
          className={`
          absolute left-130 bottom-55 rotate-330 w-120 h-144 z-0 transform transition-all duration-1000 ease-out
          ${show ? "translate-y-0 opacity-100" : "translate-y-200 opacity-0"}
        `}
          src="src/components/images/opeingshoe.png"
          alt="loading..."
        />

        {/* Text */}
        <p
          className={` relative z-1 text-black w-150 left-27  text-8xl hover:text-red-700 font-bold text-center pt-40 bottom-25 transition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "translate-x-200 opacity-0"}
      "`}
        >
          <i> Where Performance</i>
        </p>
        {/* <img className='absolute bottom-50' src="src/components/images/basketball.png" alt="" /> */}
        <p
          className={` relative z-1 text-[#1E0C36] w-150 left-220  text-8xl hover:text-[#00023B] font-bold text-center pt-40 bottom-58 transition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0"}
      "`}
        >
          <i>Meets Style</i>
        </p>
        <img
          className={`absolute h-20 w-40 right-2 bottom-180 transform tansition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0"}`}
          src="src/components/images/Logo_NIKE.svg.png"
          alt=""
        />
      </div>


      {/* shoe display */}
      <div className="relative h-180  w-full bg-black">
        <div className="relative"><Shoe1 /></div>
        
      </div>

            <div className="relative h-screen w-full bg-black">
      <ShoeSlide />
            </div>

      <div className="relative h-900 w-full bg-gradient-to-b from-green-900 via-black to-green-900 ">
        <p className="relative top-18 text-6xl text-center">New collections</p>
        <div className="relative top-10">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
