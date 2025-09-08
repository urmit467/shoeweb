import React from 'react'
import girl from './List-images/girl_converted-Photoroom.png'
import shoe1 from './List-images/ani-1_converted.png'
import shoe2 from "./List-images/ani-2_converted.png";
import shoe3 from "./List-images/ani3_converted.png";
const shoeimg = [shoe1, shoe2, shoe3];
import { useEffect, useState } from "react";
const Listop = ({ scrollTarget }) => {
    const handleClick = () => {
    document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" });
  };
  const [index, setindex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % shoeimg.length); 
    }, 3000);
  
   return () => clearInterval(interval);
      
    }, [])
  
  return (
    <div>
        <div className='p-10 w-full h-100 '>
            <div className='relative left-25 rounded-xl bg-lime-200  h-80 w-300 '>
                <img className='absolute  h-100 w-80 right-14' src={girl} alt="" />
                <p className='relative text-6xl left-10 top-5 '>Be Ready To Lead</p>
                <p className='relative text-6xl left-15 top-5 font-bold '>Your Life Your Way</p>
                <button onClick={handleClick} className='relative top-10 left-20 rounded-3xl h-12 w-30 text-white bg-black'>Discover →</button>
                <img className='absolute h-20 w-20 left-80 bottom-5 animate-pulse' src={shoeimg[index]} alt="" />
            </div>
          
        </div>
    </div>
  )
}

export default Listop