import React, { useState, useEffect, useRef } from "react";
import shoe1 from "./images/shoe1.png";
import shoe2 from "./images/basketball.png";
// import shoe3 from "./images/shoe3.png";
// import shoe4 from "./images/shoe4.png";
// import shoe5 from "./images/shoe5.png";

const shoes = [
  { img: shoe1, bg: "bg-[#f89d13]" },
  { img: shoe2, bg: "bg-[#aed2d6]" },

];

const ShoeSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % shoes.length;
      setCurrentIndex(indexRef.current);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-700 ${shoes[currentIndex].bg}`}
    >
      <img
        src={shoes[currentIndex].img}
        alt={`Shoe ${currentIndex + 1}`}
        className="w-100 h-100 object-contain drop-shadow-2xl transition-all duration-700"
      />
      <p className="mt-6 text-2xl font-bold text-white">
        Shoe {currentIndex + 1}
      </p>
    </div>
  );
};

export default ShoeSlide;
