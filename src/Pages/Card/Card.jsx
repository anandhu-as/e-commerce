import React from "react";
const Card = ({ name, price, image, setSelected }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="p-6 rounded-md shadow-md bg-gray-900 text-white">
        <h2 className="text-white mb-2 bg-gray-900">
          Product Details - {name} ${price} USD
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 mb-4 bg-gray-800 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-white"
        />
        <input
          type="text"
          placeholder="City | Pincode"
          className="w-full px-4 py-2 mb-4 bg-gray-800 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-white"
        />
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
          onClick={() => setSelected(null)}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-green-400 text-white rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
