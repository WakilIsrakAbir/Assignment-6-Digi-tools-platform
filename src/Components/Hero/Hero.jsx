import React from 'react';
import BannerImage from "../../../src/assets/products/banner.png"
import { FaDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] mx-auto items-center mt-20">
        <div className="">
          <p className="bg-purple-100 px-4 py-1 rounded-4xl font-semibold text-purple-600 w-fit">
            <span>New: AI-Powered Tools Available</span>
          </p>
          <h1 className="text-3xl lg:text-7xl font-bold mb-5 md:text-5xl">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="w-5/6 md:w-4/6lg:w-3/6 mb-5">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn bg-purple-700 text-white hover:bg-purple-900">
              Explore Products
            </button>
            <button className="btn hover:bg-green-700 hover:text-white">
              <CiPlay1 />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="md:mt-10">
          <img className="" src={BannerImage} alt="" />
        </div>
      </div>
    );
};

export default Hero;