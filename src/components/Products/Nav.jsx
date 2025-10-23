import React from "react";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/shoeweb");
  };
  const handleclickcontacts=()=>{
    navigate("/shoeweb/contact");
  }
  return (
    <div className="h-15 bg-transparent"> 
      <div className="relative flex h-15 gap-5 justify-center items-center  ">
        <button className="text-white font-semibold cursor-pointer h-8 w-25 bg-[#253D2C] rounded-xl" onClick={handleClickHome}>
          Home
        </button>
        <button className="text-white font-semibold cursor-pointer h-8 w-25 bg-[#253D2C] rounded-xl" onClick={handleclickcontacts}>
          contacts
        </button>



      </div>
      <div className="absolute right-2 top-2 bg-black h-12 rounded-xl w-40"></div>
    </div>
  );
};

export default Nav;
