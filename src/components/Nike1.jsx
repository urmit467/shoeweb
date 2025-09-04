import React from "react";
import shoe1 from "./images/nike1.png";
import shoe2 from "./images/image2.avif";
import shoe3 from "./images/shopping.webp";
import shoe4 from "./images/veapour.webp";
import shoe5 from "./images/shopping1.webp";

// Shoes array
const shoes = [
  {
    name: "Nike Streakfly 2",
    price: "₹16,995",
    img: shoe1,
    link: "https://www.nike.com/in/t/streakfly-2-road-racing-shoes-gL3BZf/HF6416-400",
  },
  {
    name: "Nike Air Zoom",
    price: "₹12,495",
    img: shoe2,
    link: "https://www.nike.com/in/t/air-zoom-upturn-sc-shoes-x34xfn",
  },
  {
    name: "Nike Pegasus",
    price: "₹10,995",
    img: shoe3,
    link: "https://www.nike.com/in/t/pegasus-41-road-running-shoes-RZm89S/FD2722-015",
  },
  {
    name: "Nike Vaporfly",
    price: "₹18,495",
    img: shoe4,
    link: "https://www.nike.com/in/t/vaporfly-4-road-racing-shoes-PTwDtp/HF6414-100",
  },
  {
    name: "Nike Alphafly",
    price: "₹19,995",
    img: shoe5,
    link: "https://www.nike.com/in/t/alphafly-3-road-racing-shoes-d6x9mh/FD8311-101",
  },
];

const Nike1 = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-green-900 via-black to-green-900 py-10">
      <div className="marquee">
        {[...shoes, ...shoes].map((shoe, index) => (
          <a
            key={index}
            href={shoe.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center min-w-[200px] bg-[#CFCFCF] rounded-xl shadow-lg p-4 mx-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={shoe.img}
              alt={shoe.name}
              className="w-80 h-50 object-contain mb-3"
            />
            <h3 className="text-lg font-bold text-gray-900">{shoe.name}</h3>
            <p className="text-gray-600">{shoe.price}</p>
          </a>
        ))}
      </div>

      {/* Manual CSS */}
      <style>{`
        .marquee {
          display: flex;
          gap: 40px;
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Nike1;
