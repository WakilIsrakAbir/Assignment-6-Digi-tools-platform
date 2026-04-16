import React, { use } from 'react';

const Tools = ({ toolPromise }) => {
    const tools = use(toolPromise);
    console.log(tools);

  return (
    <div className="w-[90%] mx-auto my-28">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="text-center mt-5">
        <button className="btn mr-3 border-none px-8 rounded-4xl bg-purple-600 text-white">
          Products
        </button>
        <button className="btn border-none px-8 rounded-4xl">Cart(2)</button>
      </div>
      <div className="">
        {tools.map((tool) => (
          <div>
            <div>
              <img src={tool.icon} alt="" />
            </div>
            <div>
              <h2> {tool.name} </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;