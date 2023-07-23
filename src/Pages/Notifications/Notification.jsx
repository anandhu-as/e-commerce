import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const { cart } = useSelector((state) => state.products);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 border border-gray-400 rounded p-4 ">
      {cart.map((data, index) => (
        <h1 key={index} className="text-white font-bold mt-4">
          * {data.name} added to bag. Price: {data.price} USD
        </h1>
      ))}
      <button className=" mt-4 px-4 py-2 text-white rounded bg-red-500">
        Clear
      </button>
    </div>
  );
};

export default Notification;
