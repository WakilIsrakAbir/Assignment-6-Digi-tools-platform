import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = ({cards}) => {
    return (
      <div className="flex-col space-y-8 lg:flex justify-between px-5 py-3 bg-base-100 shadow-sm w-[90%] rounded-md mx-auto text-center items-center">
        <div className="">
          <a className="text-4xl font-bold text-[#4F39F6]">DigiTools</a>
        </div>
        <div className="nav-middle">
          <ul className="md:flex justify-center items-center gap-5 space-y-2">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="nav-end flex gap-3 justify-between items-center text-center">
          <div className="flex items-center gap-2">
            <RiShoppingCart2Line />{cards.length}
          </div>
          <div className="">
            <button>Login</button>
          </div>
          <div className="bg-blue-700 px-4 py-2 rounded-3xl text-white">
            <p className="font-semibold">Get Started</p>
          </div>
        </div>
      </div>
    );
};

export default Navbar;