import React from "react";

const Card = ({ name, price, image, setSelected }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className=" p-6 rounded-md shadow-md">
        <h1 className="text-white">confirm product ? </h1>
        <img src={image} alt={name} className="w-16 mt-2 h-16 mb-4" />
        <h2 className="text-white font-bold mb-2">{name}</h2>
        <h3 className="text-white mb-4">$ {price} USD</h3>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
          onClick={() => setSelected(null)}
        >
          Close
        </button>
        <button className="px-4 py-2 bg-green-400 text-white rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
