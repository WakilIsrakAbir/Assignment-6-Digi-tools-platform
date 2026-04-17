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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div className="relative shadow-xl/30 p-5 m-8 rounded-xl">
            <div className="">
              <div className="">
                <img
                  className="border border-indigo-100 p-3 rounded-full"
                  src={tool.icon}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold py-3"> {tool.name} </h2>
                <p> {tool.description} </p>
              </div>
              <div>
                <h1 className="font-semibold py-4">
                  <span className="text-3xl ">${tool.price}</span>/{" "}
                  {tool.period}
                </h1>
              </div>
              <div>
                <ul className="list-disc pl-5 mb-5">
                  {tool.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="btn w-full rounded-4xl bg-violet-600 text-white">
                Buy Now
              </button>
              <p className="absolute top-10 right-10 py-2 px-6 rounded-4xl bg-purple-100 text-purple-800 text-lg font-semibold">
                {tool.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;