import React, { useEffect, useState } from "react";
import girl from "./List-images/girl_converted-Photoroom.png";
import shoe1 from "./List-images/ani-1_converted-Photoroom.png";
import shoe2 from "./List-images/ani-2_converted-Photoroom.png";
import shoe3 from "./List-images/ani3_converted-Photoroom.png";

const Listop = ({ scrollTarget }) => {
  const shoeimg = [shoe1, shoe2, shoe3];
  const [index, setIndex] = useState(0);
  
  const handleClick = () => {
    document
      .getElementById(scrollTarget)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % shoeimg.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shoeimg.length]);

  return (
    <div className="p-10 w-full">
      <div className="relative max-w-5xl mx-auto rounded-xl bg-lime-200 h-80 overflow-hidden">
        {/* Main content */}
        <img className="absolute h-80 w-auto right-14 object-contain" src={girl} alt="Fashionable woman" />
        
        <div className="absolute left-10 top-8">
          <p className="text-6xl">Be Ready To Lead</p>
          <p className="text-6xl font-bold mt-2">Your Life Your Way</p>
          
          <button
            onClick={handleClick}
            className="mt-6 px-8 py-3 rounded-3xl text-white bg-black hover:bg-gray-800 transition-colors"
          >
            Discover →
          </button>
        </div>

        {/* Shoe images */}
        <div className="absolute left-80 top-50 flex gap-4">
          {shoeimg.map((shoe, i) => (
            <div 
              key={i} 
              className={`h-20 w-24 transition-all duration-500 ease-in-out ${
                i === index ? "scale-110  rounded-lg" : "opacity-80 scale-100"
              }`}
            >
              <img
                className="h-full w-full object-contain"
                src={shoe}
                alt={`Shoe ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Indicator bar */}
        <div className="absolute bottom-2 left-112 flex gap-2">
          {shoeimg.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-black" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listop;