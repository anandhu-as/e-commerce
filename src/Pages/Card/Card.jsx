import React from "react";

const Card = ({ price, setSelected }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="max-w-md p-8 bg-gray-900 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Card Holder
          </label>
          <input
            type="text"
            name="cardHolder"
            className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">CVV</label>
            <input
              type="text"
              name="cvv"
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <h2 className="text-white">$ {price} USD</h2>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mt-4"
        >
          Pay
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded mt-4 ml-6"
          onClick={() => setSelected()}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Card;
