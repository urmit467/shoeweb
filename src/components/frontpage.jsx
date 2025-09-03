import React, { useEffect, useState } from 'react';

const Frontpage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-72 overflow-hidden bg-white">
      {/* Shoe image */}
      <img 
        className={`
          absolute left-150 bottom-0 w-84 h-84 z-0 rotate-5 transform -translate-x-1/2 transition-all duration-1000 ease-out
          ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
        src="src/components/images/openingshoe.png" 
        alt="loading..." 
      />

      {/* Text */}
      <p className="
        relative z-10 text-black text-9xl font-bold text-center pt-40 bottom-10
      ">
        <i>Stylish <span className="text-blue-500">footwear</span></i>
      </p>
    </div>
  );
};

export default Frontpage;
