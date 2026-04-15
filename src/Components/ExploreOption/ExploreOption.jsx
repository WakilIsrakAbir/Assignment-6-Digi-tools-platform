import React from 'react';

const ExploreOption = () => {
    return (
      <section className="bg-gradient-to-r from-violet-700 to-purple-600 py-24 px-6 font-sans">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-violet-100 text-sm md:text-base mb-10 leading-relaxed">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br className="hidden md:block" /> Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="bg-white text-violet-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 hover:text-white cursor-pointer w-full sm:w-auto">
              Explore Products
            </button>
            <button className="border border-white text-white font-semibold py-3 px-8 rounded-full cursor-pointer hover:bg-green-600  w-full sm:w-auto">
              View Pricing
            </button>
          </div>

          <p className="text-violet-200 text-xs sm:text-sm">
            14-day free trial &bull; No credit card required &bull; Cancel
            anytime
          </p>
        </div>
      </section>
    );
};

export default ExploreOption;