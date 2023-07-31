import React from "react";

const Popup = ({ name, id,  }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <h1
        className="text-white animate__animated animate__fadeInUp "
        key={id}
      >
        {name} added to cart .....
      </h1>
    </div>
  );
};

export default Popup;
