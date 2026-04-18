import React, { use } from 'react';
import ToolsCard from './ToolsCard';
import Tabs from './Tabs';

const Tools = ({ toolPromise }) => {
    const tools = use(toolPromise);

  return (
    <div className="w-[90%] mx-auto my-28">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="">
        <Tabs></Tabs>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolsCard tool={tool}></ToolsCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;