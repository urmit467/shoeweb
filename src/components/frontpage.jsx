import React, { useEffect, useState } from 'react';
import Rotatingshoes from './Rotatingshoes';
const Frontpage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-screen max-w-full bg-indigo-900'>   
     <div className="relative h-100 overflow ">
      {/* Shoe image */}
      <img 
        className={`
          absolute left-140 top-2 rotate-270 w-104 h-104 z-0 transform transition-all duration-1000 ease-out
          ${show ? 'translate-y-0 opacity-100' : 'translate-x-200 opacity-0'}
        `}
        src="src/components/images/openingshoe3.png" 
        alt="loading..." 
      />

      {/* Text */}
      <p className={` relative z-1 text-black w-300  text-8xl left-30 font-bold text-center pt-40 top-1 transition-all duration-1000 ease-out
        ${show ? 'translate-x-0 opacity-100' : 'translate-x-200 opacity-0'}
      "`}
       >
        <i><span className='text-white'>Where</span> Performance  <span className="text-white">Meets</span> Style.</i>
      </p>
    </div>
    <Rotatingshoes />
    </div>

  );
};

export default Frontpage;
