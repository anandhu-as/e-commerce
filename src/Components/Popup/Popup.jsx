import React from "react";

const Popup = ({ text }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <h1 className="text-pink-700">
        {text}
        <i className="fa fa-check text-green-500 ml-2" aria-hidden="true"></i>
      </h1>
    </div>
  );
};

export default Popup;
