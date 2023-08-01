import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearSpam } from "../../Redux/features/Product/ProductSlice";

const Notification = () => {
  const { notifications } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  notifications.cartNotification.length && notifications.sameProduct.length;
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 border border-gray-400 rounded p-4 ">
      {notifications.sameProduct.map((item) => {
        return (
          <h1 className="text-red-500" key={item.id}>
            {item.name} is already in bag
          </h1>
        );
      })}
      {notifications.clearNotification.map((item) => {
        return (
          <h2 className="text-pink-700" key={item.id}>
            {item.name} removed from bag
          </h2>
        );
      })}
      {notifications.cartNotification.length ||
        (notifications.clearNotification.length === 0 && (
          <h1 className="text-white font-bold mt-4">no Notifications </h1>
        ))}
      {notifications.cartNotification.map((data) => (
        <div key={data.id}>
          <h1 className="text-white font-bold mt-4">
            * {data.name} added to bag. Price: {data.price} USD
          </h1>
        </div>
      ))}

      <button className=" mt-4 px-4 py-2 text-white rounded bg-red-500">
        <Link to="/cart" className="bg-red-500">
          See cart
        </Link>
      </button>
      <button
        className=" mt-4 px-4 py-2 text-white rounded bg-red-500 ml-6"
        onClick={() => dispatch(clearSpam())}
      >
        clear
      </button>
    </div>
  );
};

export default Notification;
