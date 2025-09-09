import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import shoe1 from "./List-images/Shoe-List1_converted-Photoroom.png";
import shoe2 from "./List-images/Shoe-List2_converted-Photoroom.png";
import shoe3 from "./List-images/Shoe-List3_converted-Photoroom.png";
import shoe4 from "./List-images/Shoe-List4_converted-Photoroom.png";
import shoe5 from "./List-images/Shoe-List5_converted-Photoroom.png";
import shoe6 from "./List-images/Shoe-List6_converted-Photoroom.png";
import shoe7 from "./List-images/Shoe-List7_converted-Photoroom.png";
import shoe8 from "./List-images/Shoe-List8_converted-Photoroom.png";
import shoe9 from "./List-images/Shoe-List9_converted-Photoroom.png";
import shoe10 from "./List-images/Shoe-List10_converted-Photoroom.png";
// 🔹 Custom Hook: handles ref + inView detection
const useLazyInView = (options = { once: true, amount: 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  return [ref, isInView];
};
const shoes = [
  {
    name: "Nike Air Zoom Pegasus 41",
    img: shoe1,
    price: "₹11,895",
    description:
      "A responsive everyday running shoe with Zoom Air cushioning for comfort and speed.",
    rating: 4.6,
    link: "/shoe1",
    bgColor: "#b1e4eaff", // light cyan
  },
  {
    name: "Nike ZoomX Vaporfly Next% 3",
    img: shoe2,
    price: "₹21,995",
    description:
      "Engineered for marathon runners, lightweight design with ZoomX foam for maximum energy return.",
    rating: 4.8,
    link: "/shoe2",
    bgColor: "#848484ff", // light orange
  },
  {
    name: "Nike Air Force 1 '07",
    img: shoe3,
    price: "₹8,695",
    description:
      "Classic basketball-inspired lifestyle sneaker with leather construction and timeless style.",
    rating: 4.7,
    link: "/shoe3",
    bgColor: "#abafffff", // light green
  },
  {
    name: "Nike Dunk Low Retro",
    img: shoe4,
    price: "₹8,295",
    description:
      "Iconic Dunk design with premium materials for streetwear and casual everyday style.",
    rating: 4.5,
    link: "/shoe4",
    bgColor: "#fff494ff", // light purple
  },
  {
    name: "Nike Metcon 9",
    img: shoe5,
    price: "₹12,795",
    description:
      "Durable training shoe designed for weightlifting, HIIT, and cross-training stability.",
    rating: 4.4,
    link: "/shoe5",
    bgColor: "#a0a0a0ff", // light pink
  },
  {
    name: "Nike InfinityRN 4",
    img: shoe6,
    price: "₹14,295",
    description:
      "Soft cushioning and Flyknit upper for a supportive, everyday long-distance run.",
    rating: 4.6,
    link: "/shoe6",
    bgColor: "#E3F2FD", // light blue
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    img: shoe7,
    price: "₹7,995",
    description:
      "Retro-inspired basketball sneaker with suede overlays and vintage mid-cut silhouette.",
    rating: 4.5,
    link: "/shoe7",
    bgColor: "#86a9eeff", // light yellow
  },
  {
    name: "Nike React Infinity Run Flyknit 3",
    img: shoe8,
    price: "₹13,495",
    description:
      "Built to reduce running injuries, offers soft cushioning and a natural forward feel.",
    rating: 4.7,
    link: "/shoe8",
    bgColor: "#F1F8E9", // lime green
  },
  {
    name: "Nike LeBron 21",
    img: shoe9,
    price: "₹18,995",
    description:
      "Basketball shoe designed with premium cushioning for explosive moves and impact protection.",
    rating: 4.9,
    link: "/shoe9",
    bgColor: "#bd8dffff", // light rose
  },
  {
    name: "Nike Phantom GX 2 Elite FG",
    img: shoe10,
    price: "₹23,995",
    description:
      "Elite-level football boots with Gripknit technology for precision touch and agility.",
    rating: 4.8,
    link: "/shoe10",
    bgColor: "#95acffff", // light lavender
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const List = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-10 justify-items-center bg-white">
      {shoes.map((shoe, index) => {
        const [ref, isInView] = useLazyInView();

        return (
          <div ref={ref} key={index}>
            {isInView && (
              <motion.div
              
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.1 }}
                className=" m-5  bg-[#EBEBEB] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-100
             w-70 flex flex-col justify-between" 
              >
                <a
                  className="hover:cursor-pointer h-full flex flex-col"
                  href={shoe.link}
                >
                  {/* 🔹 Fixed image box */}
                  <div className="relative w-full h-[180px] flex items-center justify-center rounded-lg">
                    {/* Black background layer */}
                  <div style={{backgroundColor: shoe.bgColor}} className="absolute w-full  inset-0  z-0"></div>

                    {/* Shoe image */}
                    <img
                    className="relative max-h-[400px] w-full bottom-3 right-3 object-contain z-10 rotate-[330deg]"
                      src={shoe.img}
                      alt={shoe.name}
                    />
                  </div>

                  {/* 🔹 Content */}
                  <div className="flex flex-col bg-white flex-grow mt-4 text-center p-5">
                    <h2 className="text-lg font-bold line-clamp-1">
                      {shoe.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {shoe.description}
                    </p>
                    <p className="text-lg font-semibold mt-2">{shoe.price}</p>
                    <p className="text-yellow-500 mt-1">
                      Rating: {shoe.rating} ★
                    </p>
                  </div>
                </a>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
