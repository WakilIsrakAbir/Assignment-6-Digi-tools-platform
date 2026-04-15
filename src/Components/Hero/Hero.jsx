import React from 'react';
import BannerImage from "../../../src/assets/products/banner.png"
import { FaDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
    return (
      <div className="flex justify-between  w-[90%] mx-auto items-center mt-20">
        <div className="">
          <p className="bg-purple-100 px-4 py-1 rounded-4xl font-semibold text-purple-600 w-fit">
            <span>New: AI-Powered Tools Available</span>
          </p>
          <h1 className="text-7xl font-bold mb-5">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="w-3/6 mb-5">
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

        <div>
          <img className="h-[500px] w-auto" src={BannerImage} alt="" />
        </div>
      </div>
    );
};

export default Hero;