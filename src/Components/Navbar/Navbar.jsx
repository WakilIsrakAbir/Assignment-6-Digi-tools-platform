import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = ({ cards = [] }) => {
  return (
    <nav className="bg-white shadow-sm w-[95%] lg:w-[90%] rounded-md mx-auto mt-4 px-4 py-3 flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4">
      
      <div className="flex-shrink-0">
        <a className="text-2xl lg:text-3xl font-bold text-[#4F39F6] cursor-pointer">
          DigiTools
        </a>
      </div>

      <div className="order-last lg:order-none w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ul className="flex items-center gap-5 lg:gap-6 text-sm lg:text-base font-medium text-gray-600 whitespace-nowrap">
          <li className="hover:text-[#4F39F6] cursor-pointer transition">
            Products
          </li>
          <li className="hover:text-[#4F39F6] cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-[#4F39F6] cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-[#4F39F6] cursor-pointer transition">
            Testimonial
          </li>
          <li className="hover:text-[#4F39F6] cursor-pointer transition">
            FAQ
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        
        <div className="flex items-center relative cursor-pointer mr-2 lg:mr-0">
          <RiShoppingCart2Line size={22} className="lg:w-6 lg:h-6" />
          <span className="bg-[#4F39F6] text-white text-[10px] lg:text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center absolute -top-2 -right-2 lg:-right-3">
            {cards.length}
          </span>
        </div>

        <button className="text-sm lg:text-base font-semibold text-gray-700 hover:text-black transition">
          Login
        </button>
        <button className="bg-[#4F39F6] px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-white text-sm lg:text-base font-semibold hover:bg-blue-700 transition whitespace-nowrap">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
