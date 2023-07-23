import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Redux/features/Product/ProductSlice";

const Store = () => {
  const dispatch = useDispatch();
  const handleAdd = (item) => dispatch(add(item));
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-black rounded-lg p-4 shadow-md hover:shadow-lg"
            style={{ color: "purple" }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text font-bold mb-2 text-white">{item.name}</h2>
            <h3 className="text font-medium mb-2 text-white">
              $ {item.price} USD
            </h3>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAdd({ item, price: item.price })}
            >
              Add
            </button>
            <button className="mt-2">
              <i className="fas fa-heart text-white pl-12"></i>
            </button>
            <button className="mt-2">
              <i className="fa-solid fa-star text-white pl-6"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
