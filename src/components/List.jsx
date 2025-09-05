import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// 🔹 Custom Hook: handles ref + inView detection
const useLazyInView = (options = { once: true, amount: 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  return [ref, isInView];
};
const shoes = [
  {
    name: "Nike Air Zoom Pegasus 41",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/63c4596a-ca9a-4a56-82f3-0387903ed5f1/AIR+ZOOM+PEGASUS+41.png",
    price: "₹11,895",
    description: "A responsive everyday running shoe with Zoom Air cushioning for comfort and speed.",
    rating: 4.6,
    link: "https://www.nike.com/in/t/pegasus-41-road-running-shoes-RZm89S"
  },
  {
    name: "Nike ZoomX Vaporfly Next% 3",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3832ea3-e857-4ad1-8626-7c3b8d204a0e/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
    price: "₹21,995",
    description: "Engineered for marathon runners, lightweight design with ZoomX foam for maximum energy return.",
    rating: 4.8,
    link: "https://www.nike.com/in/t/vaporfly-3-road-racing-shoes-xsDgvM"
  },
  {
    name: "Nike Air Force 1 '07",
    img: "https://static.nike.com/a/images/t_default/airforce1.png",
    price: "₹8,695",
    description: "Classic basketball-inspired lifestyle sneaker with leather construction and timeless style.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/air-force-1-07"
  },
  {
    name: "Nike Dunk Low Retro",
    img: "https://static.nike.com/a/images/t_default/dunklow.png",
    price: "₹8,295",
    description: "Iconic Dunk design with premium materials for streetwear and casual everyday style.",
    rating: 4.5,
    link: "https://www.nike.com/in/t/dunk-low-retro"
  },
  {
    name: "Nike Metcon 9",
    img: "https://static.nike.com/a/images/t_default/metcon9.png",
    price: "₹12,795",
    description: "Durable training shoe designed for weightlifting, HIIT, and cross-training stability.",
    rating: 4.4,
    link: "https://www.nike.com/in/t/metcon-9"
  },
  {
    name: "Nike InfinityRN 4",
    img: "https://static.nike.com/a/images/t_default/infinityrn4.png",
    price: "₹14,295",
    description: "Soft cushioning and Flyknit upper for a supportive, everyday long-distance run.",
    rating: 4.6,
    link: "https://www.nike.com/in/t/infinityrn-4"
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    img: "https://static.nike.com/a/images/t_default/blazer77.png",
    price: "₹7,995",
    description: "Retro-inspired basketball sneaker with suede overlays and vintage mid-cut silhouette.",
    rating: 4.5,
    link: "https://www.nike.com/in/t/blazer-mid-77-vintage"
  },
  {
    name: "Nike React Infinity Run Flyknit 3",
    img: "https://static.nike.com/a/images/t_default/infinityfly3.png",
    price: "₹13,495",
    description: "Built to reduce running injuries, offers soft cushioning and a natural forward feel.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/react-infinity-run-flyknit-3"
  },
  {
    name: "Nike LeBron 21",
    img: "https://static.nike.com/a/images/t_default/lebron21.png",
    price: "₹18,995",
    description: "Basketball shoe designed with premium cushioning for explosive moves and impact protection.",
    rating: 4.9,
    link: "https://www.nike.com/in/t/lebron-21"
  },
  {
    name: "Nike Phantom GX 2 Elite FG",
    img: "https://static.nike.com/a/images/t_default/phantomgx2.png",
    price: "₹23,995",
    description: "Elite-level football boots with Gripknit technology for precision touch and agility.",
    rating: 4.8,
    link: "https://www.nike.com/in/t/phantom-gx-2-elite-fg"
  },
  {
    name: "Nike Tiempo Legend 10 Elite FG",
    img: "https://static.nike.com/a/images/t_default/tiempo10.png",
    price: "₹22,495",
    description: "Premium leather football boots offering touch, comfort, and lightweight agility.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/tiempo-legend-10-elite-fg"
  },
  {
    name: "Nike Air Max 270",
    img: "https://static.nike.com/a/images/t_default/airmax270.png",
    price: "₹12,495",
    description: "Lifestyle sneaker with Nike’s tallest Air unit in the heel for maximum cushioning.",
    rating: 4.6,
    link: "https://www.nike.com/in/t/air-max-270"
  },
  {
    name: "Nike Air Max 90",
    img: "https://static.nike.com/a/images/t_default/airmax90.png",
    price: "₹10,995",
    description: "Classic retro running shoe with visible Air cushioning and versatile style.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/air-max-90"
  },
  {
    name: "Nike Jordan 1 Mid",
    img: "https://static.nike.com/a/images/t_default/jordan1mid.png",
    price: "₹11,495",
    description: "Basketball-inspired lifestyle sneaker, iconic mid-top design with premium materials.",
    rating: 4.8,
    link: "https://www.nike.com/in/t/air-jordan-1-mid"
  },
  {
    name: "Nike Jordan 4 Retro",
    img: "https://static.nike.com/a/images/t_default/jordan4.png",
    price: "₹18,995",
    description: "Classic Air Jordan silhouette with mesh panels and durable construction.",
    rating: 4.9,
    link: "https://www.nike.com/in/t/air-jordan-4-retro"
  },
  {
    name: "Nike KD16",
    img: "https://static.nike.com/a/images/t_default/kd16.png",
    price: "₹15,495",
    description: "Signature Kevin Durant basketball shoe designed for smooth transitions and comfort.",
    rating: 4.6,
    link: "https://www.nike.com/in/t/kd16"
  },
  {
    name: "Nike Giannis Freak 5",
    img: "https://static.nike.com/a/images/t_default/freak5.png",
    price: "₹13,495",
    description: "Giannis Antetokounmpo’s signature shoe for explosive speed and multidirectional play.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/giannis-freak-5"
  },
  {
    name: "Nike Kyrie Flytrap 6",
    img: "https://static.nike.com/a/images/t_default/flytrap6.png",
    price: "₹9,995",
    description: "Budget-friendly Kyrie shoe with aggressive traction and lightweight cushioning.",
    rating: 4.4,
    link: "https://www.nike.com/in/t/kyrie-flytrap-6"
  },
  {
    name: "Nike Air Max Plus",
    img: "https://static.nike.com/a/images/t_default/airmaxplus.png",
    price: "₹13,995",
    description: "Distinctive ‘Tuned Air’ cushioning system with bold design for streetwear lovers.",
    rating: 4.6,
    link: "https://www.nike.com/in/t/air-max-plus"
  },
  {
    name: "Nike Air Max 97",
    img: "https://static.nike.com/a/images/t_default/airmax97.png",
    price: "₹16,495",
    description: "Iconic running shoe inspired by Japanese bullet trains, full-length Air unit cushioning.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/air-max-97"
  },
  {
    name: "Nike Air Huarache",
    img: "https://static.nike.com/a/images/t_default/huarache.png",
    price: "₹9,995",
    description: "Lightweight lifestyle shoe with neoprene bootie fit and retro 90s appeal.",
    rating: 4.5,
    link: "https://www.nike.com/in/t/air-huarache"
  },
  {
    name: "Nike Free RN 5.0",
    img: "https://static.nike.com/a/images/t_default/freern.png",
    price: "₹8,495",
    description: "Flexible running shoe with barefoot-like feel and lightweight cushioning.",
    rating: 4.4,
    link: "https://www.nike.com/in/t/free-rn-5"
  },
  {
    name: "Nike SB Dunk Low",
    img: "https://static.nike.com/a/images/t_default/sbdunk.png",
    price: "₹9,495",
    description: "Skateboarding edition Dunk with extra padding and grippy outsole for board feel.",
    rating: 4.7,
    link: "https://www.nike.com/in/t/sb-dunk-low"
  },
  {
    name: "Nike Cosmic Unity 3",
    img: "https://static.nike.com/a/images/t_default/cosmicunity3.png",
    price: "₹14,495",
    description: "Sustainable basketball shoe made with recycled materials, offering comfort and bounce.",
    rating: 4.6,
    link: "https://www.nike.com/in/t/cosmic-unity-3"
  },
  {
    name: "Nike Air Jordan 11 Retro",
    img: "https://static.nike.com/a/images/t_default/jordan11.png",
    price: "₹20,495",
    description: "Premium basketball shoe with patent leather design, a true Jordan classic.",
    rating: 4.9,
    link: "https://www.nike.com/in/t/air-jordan-11-retro"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const List = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
  className="border-2 m-5 p-5 bg-[#EBEBEB] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 
             w-[280px] h-[420px] flex flex-col justify-between" // 🔹 fixed size + flex layout
>
  <a className="hover:cursor-pointer h-full flex flex-col" href={shoe.link}>
    {/* 🔹 Fixed image box */}
    <div className="w-full h-[180px] flex items-center justify-center">
      <img
        className="max-h-[160px] object-contain"
        src={shoe.img}
        alt={shoe.name}
      />
    </div>

    {/* 🔹 Content */}
    <div className="flex flex-col flex-grow mt-4 text-center">
      <h2 className="text-lg font-bold line-clamp-1">{shoe.name}</h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {shoe.description}
      </p>
      <p className="text-lg font-semibold mt-2">{shoe.price}</p>
      <p className="text-yellow-500 mt-1">Rating: {shoe.rating} ★</p>
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