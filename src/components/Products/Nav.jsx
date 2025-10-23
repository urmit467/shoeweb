import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/shoeweb");
  };
  const handleclickcontacts = () => {
    navigate("/shoeweb/contact");
  };
  return (
    <div className="h-15 bg-transparent">
      <div className="relative flex h-15 gap-5 justify-center items-center  ">
        <button
          className="text-white font-semibold cursor-pointer h-8 w-25 bg-[#253D2C] rounded-xl"
          onClick={handleClickHome}
        >
          Home
        </button>
      </div>

      {/*This is to add cart option and wishlist option  */}
      <div className="flex ">
        <button name="cart" className="h-8 w-20 absolute top-4 cursor-pointer right-40" >
          {<AiOutlineShoppingCart size={30} color="black" />}
          
        </button>
      </div>

      <div className="absolute right-2 top-2 bg-black h-12 rounded-xl w-40"></div>
    </div>
  );
};

export default Nav;
