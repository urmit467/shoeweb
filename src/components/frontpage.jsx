import React, { useEffect, useState } from 'react';
import Nike1 from './Nike1';
import { motion } from "framer-motion";
const Frontpage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen max-w-full bg-green-900 '>   
     <div className="relative bg-gradient-to-b from-green-900 via-[#8BE627] to-green-900 w-full h-180  top-10 overflow ">
      {/* Shoe image */}
      <img 
        className={`
          absolute left-130 bottom-55 rotate-330 w-120 h-144 z-0 transform transition-all duration-1000 ease-out
          ${show ? 'translate-y-0 opacity-100' : 'translate-y-200 opacity-0'}
        `}
        src="src/components/images/opeingshoe.png" 
        alt="loading..." 
      />

      {/* Text */}
      <p className={` relative z-1 text-black w-150 left-27  text-8xl hover:text-red-700 font-bold text-center pt-40 bottom-25 transition-all duration-1000 ease-out
        ${show ? 'translate-x-0 opacity-100' : 'translate-x-200 opacity-0'}
      "`}
       >
        <i>      Where Performance</i>
      </p>
      {/* <img className='absolute bottom-50' src="src/components/images/basketball.png" alt="" /> */}
   <p className={` relative z-1 text-[#1E0C36] w-150 left-220  text-8xl hover:text-[#00023B] font-bold text-center pt-40 bottom-58 transition-all duration-1000 ease-out
        ${show ? 'translate-x-0 opacity-100' : '-translate-x-200 opacity-0'}
      "`}
       >
      <i>Meets Style</i>
      </p>
      <motion.h1
      initial={{ opacity: 0, y: 0 }} // start invisible, moved down 
      whileInView={{ opacity: 1, y: 0 }} // fade in + slide up 
      transition={{ duration: 2, ease: "easeOut" }} 
      viewport={{ once: true, amount: 1.0}} // trigger when 50% visible 
      className="relative text-[#1E0C36] w-150 left-130 text-6xl font-bold text-center top-4 font-poppins z-1"
      >

         Our Top Picks
      </motion.h1>

    </div>
    <div className={`relative top-10 h-100 w-full bg-green-900 `}><Nike1 /></div>
    
    </div>

  );
};

export default Frontpage;
