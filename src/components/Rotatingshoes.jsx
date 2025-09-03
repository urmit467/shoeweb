import React from 'react';

export default function App() {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ab?q=80&auto=format&fit=crop&w=500",
    "https://images.unsplash.com/photo-1595950654149-a0294a6ba108?q=80&auto=format&fit=crop&w=500",
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&auto=format&fit=crop&w=500",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&auto=format&fit=crop&w=500",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&auto=format&fit=crop&w=500",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&auto=format&fit=crop&w=500",
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

      <div className="group w-full w-full overflow-hidden bg-indigi-900 py-8 ">
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
                    src={src}
                    alt={`Shoe image ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/320x224/000000/FFFFFF?text=Image+Not+Found'; }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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

