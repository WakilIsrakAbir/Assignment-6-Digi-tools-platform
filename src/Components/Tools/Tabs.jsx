import React from 'react';

const Tabs = () => {
    return (
      <div className="tabs tabs-box justify-center bg-transparent py-8 gap-4">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-4xl px-20 text-2xl font-semibold"
          aria-label="Tools"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-4xl px-20 text-2xl font-semibold"
          aria-label="Card"
        />
      </div>
    );
};

export default Tabs;