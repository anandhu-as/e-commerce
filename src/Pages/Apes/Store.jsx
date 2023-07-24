import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Redux/features/Product/ProductSlice";
import { addReaction } from "../../Redux/features/Reactions/EmojiSlice";
import Detail from "../ProductDetail/Detail";
const Store = () => {
  const dispatch = useDispatch();
  const handleAdd = (item) => dispatch(add(item));
  const { products } = useSelector((state) => state.products);
  const handleReaction = (id, type) => dispatch(addReaction({ id, type }));
  const { reactions } = useSelector((state) => state.emoji);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSelect = (data) => {
    setSelectedProduct(data);
  };
  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-black rounded-lg p-4 shadow-md hover:shadow-lg text-purple-600"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 cursor-pointer"
            />
            <h2 className="text font-bold mb-2 text-white">
              {item.name}{" "}
              <button
                className="text-white ml-4 font-bold ml-4 "
                onClick={() => handleSelect(item)}
              >
                {" "}
                show details
              </button>
            </h2>

            <h3 className="text font-medium mb-2 text-white">
              $ {item.price} USD
            </h3>
            <button
              className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => handleAdd({ item, price: item.price })}
            >
              Add
            </button>
            <button
              className="mt-2 ml-8"
              onClick={() => handleReaction(item.id, "likes")}
            >
              ❤️ {reactions.likes[item.id]}
            </button>
            <button
              className="mt-2 ml-8"
              onClick={() => handleReaction(item.id, "laugh")}
            >
              😂 {reactions.laugh[item.id]}
            </button>
            <button
              className="mt-2 ml-8"
              onClick={() => handleReaction(item.id, "thumb")}
            >
              👎 {reactions.thumb[item.id]}
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Detail
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default Store;
