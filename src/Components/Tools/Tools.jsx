import React, { use } from 'react';
import ToolsCard from './ToolsCard';

const Tools = ({ toolPromise, cards, setCards }) => {
  const tools = use(toolPromise);

  return (
    <div className="w-[90%] mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolsCard
            key={tool.id}
            tool={tool}
            cards={cards}
            setCards={setCards}
          ></ToolsCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;