import React from 'react';

const MiddlePart = () => {
    return (
      <div className="w-full bg-gradient-to-r from-violet-800 to-purple-700 py-12 my-18">
        <div className="w-[90%] mx-auto px-6 flex flex-col md:flex-row items-center justify-between md:divide-y md:divide-y-0 md:divide-x md:divide-white text-center">
          <div className="w-full py-6 md:py-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              50K+
            </h2>
            <p className="text-sm font-medium text-purple-200">Active Users</p>
          </div>
          <div className="w-full py-6 md:py-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              200+
            </h2>
            <p className="text-sm font-medium text-purple-200">Premium Tools</p>
          </div>
          <div className="w-full py-6 md:py-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              4.9
            </h2>
            <p className="text-sm font-medium text-purple-200">Rating</p>
          </div>
        </div>
      </div>
    );
};

export default MiddlePart;