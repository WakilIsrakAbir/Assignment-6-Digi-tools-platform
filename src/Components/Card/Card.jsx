import React from 'react';

const Card = ({ cards, setCards }) => {
  const totalPrice = cards.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCards([])
  }
  return (
    <div className="w-[90%] mx-auto p-8 rounded-4xl my-8 border-2 border-gray-300">
      <h1 className="text-2xl font-semibold mb-10">Your Cart</h1>

      {cards.length === 0 ? (
        <p className='text-2xl font-bold text-center'>Card Is Empty</p>
      ) : (
        <>
          <div className="">
            {cards.map((item) => (
              <div
                key={item.id}
                className="px-4 py-3 mb-5 bg-gray-100 rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <div>
                    <img
                      className="border border-gray-300 p-3 rounded-full"
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h1 className="text-xl font-semibold mb-2">
                      {" "}
                      {item.name}{" "}
                    </h1>
                    <p className="text-gray-600"> ${item.price} </p>
                  </div>
                </div>
                <button className="btn text-pink-500 text-xl border-none  bg-gray-100 rounded-4xl hover:bg-pink-200">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between px-5">
            <p className="text-2xl font-bold">Total : </p>
            <h2 className="text-2xl font-bold">$({totalPrice})</h2>
          </div>
          <button
            onClick={handlePayment}
            className="btn w-full my-5 py-7 rounded-4xl bg-purple-600 text-2xl text-white"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Card;