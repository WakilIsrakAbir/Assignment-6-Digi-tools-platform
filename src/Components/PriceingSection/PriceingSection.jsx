import React from 'react';
import { TiTick } from "react-icons/ti";

const PriceingSection = () => {
    return (
      <section className="bg-gray-50 py-20 px-4 md:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Starter
                </h3>
                <p className="text-sm text-gray-500">
                  Perfect for getting started
                </p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  $0
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  /Month
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Access to 10 free tools
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Basic templates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Community support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />1 project per month
                </li>
              </ul>
              <button className="w-full bg-violet-600 text-white py-3 rounded-full font-bold shadow-md hover:bg-violet-700 transition-colors mt-auto">
                Get Started Free
              </button>
            </div>

            <div className="bg-violet-600 rounded-3xl p-8 shadow-xl text-white relative flex flex-col h-full md:scale-105 z-10 transform transition-transform hover:scale-110">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm whitespace-nowrap">
                Most Popular
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold mb-1">Pro</h3>
                <p className="text-sm text-violet-200">
                  Best for professionals
                </p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">$29</span>
                <span className="text-sm text-violet-300 font-medium">
                  /Month
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm text-white">
                  <TiTick />
                  Access to all premium tools
                </li>
                <li className="flex items-center text-sm text-white">
                  <TiTick />
                  Unlimited templates
                </li>
                <li className="flex items-center text-sm text-white">
                  <TiTick />
                  Priority support
                </li>
                <li className="flex items-center text-sm text-white">
                  <TiTick />
                  Unlimited projects
                </li>
                <li className="flex items-center text-sm text-white">
                  <TiTick />
                  Cloud sync
                </li>
                <li className="flex items-center text-sm text-white">
                  <TiTick />
                  Advanced analytics
                </li>
              </ul>
              <button className="w-full bg-white text-violet-600 py-3 rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors mt-auto">
                Start Pro Trial
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Enterprise
                </h3>
                <p className="text-sm text-gray-500">
                  For teams and businesses
                </p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  $99
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  /Month
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Everything in Pro
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Team collaboration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Custom integrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Dedicated support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  SLA guarantee
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <TiTick />
                  Custom branding
                </li>
              </ul>
              <button className="w-full bg-violet-600 text-white py-3 rounded-full font-bold shadow-md hover:bg-violet-700 transition-colors mt-auto">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default PriceingSection;