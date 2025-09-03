import React from 'react';

// 1. Import the images from their relative path
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

export default function Rotatingshoes() {
  // 2. Use the imported variables in your array
  const images = [
    image5,
    image4,
    image3,
    image2,
    image1,
  ];

  return (
    <div className="antialiased bg-indigo-900 text-slate-100 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Our Latest Collection
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Hover over the carousel to pause the animation and take a closer look.
        </p>
      </div>

      <div className="group w-full overflow-hidden bg-indigi-900 py-8 ">
        <div
          className="flex space-x-12 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 25s linear infinite",
            width: "max-content",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-80 h-56 relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                    src={src} // This now correctly points to the processed image path
                    alt={`Shoe image ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/320x224/000000/FFFFFF?text=Image+Not+Found'; }}
                />
                <div className="absolute inset-0  bg-opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}