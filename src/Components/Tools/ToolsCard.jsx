import React from 'react';
import { useState } from "react";

const ToolsCard = ({ tool, cards, setCards }) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleSelected = () => {
    setIsBuy(true);
    setCards([...cards, tool])
  };

  return (
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
            <span className="text-3xl ">${tool.price}</span>/ {tool.period}
          </h1>
        </div>
        <div>
          <ul className="list-disc pl-5 mb-5">
            {tool.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <p className="absolute top-10 right-10 py-2 px-6 rounded-4xl bg-purple-100 text-purple-800 text-lg font-semibold">
          {tool.tag}
        </p>
        <button
          onClick={handleSelected}
          className="btn w-full rounded-4xl bg-violet-600 text-white"
        >
          {isBuy ? "Selected" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;