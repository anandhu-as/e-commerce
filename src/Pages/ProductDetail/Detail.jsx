import React from "react";
import { about } from "../../NFT/Data";
const Detail = ({ image, name, price, setSelectedProduct }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 ">
      <div className="max-w-md mx-auto bg-zinc-950 p-4 rounded-lg">
        <img src={image} alt="" className="w-32 h-auto mx-auto mb-4" />
        <h2 className="text-white font-bold mb-4">{name}</h2>
        <p className="text-white">$ {price} USD</p>
        <p className="text-white"> {about}</p>
        <button
          className="px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-blue-600"
          onClick={() => setSelectedProduct(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Detail;
