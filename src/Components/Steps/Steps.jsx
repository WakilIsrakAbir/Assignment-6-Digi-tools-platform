import React from 'react';
import UserImage from "../../../src/assets/products/user.png"
import productImage from "../../assets/products/package.png"
import RocketImage from "../../assets/products/rocket.png"

const Steps = () => {
    return (
      <section className="bg-[#fafafa] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Get Started In 3 Steps
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 text-center relative shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
              <div className="absolute top-6 right-6 bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                01
              </div>
              <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={UserImage} alt="" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Create Account
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center relative shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
              <div className="absolute top-6 right-6 bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                02
              </div>
              <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={productImage} alt="" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Choose Products
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 text-center relative shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
              <div className="absolute top-6 right-6 bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                03
              </div>
              <div className="w-24 h-24 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={RocketImage} alt="" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Start Creating
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Steps;