import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Redux/features/Product/ProductSlice";
import { addReaction } from "../../Redux/features/Reactions/EmojiSlice";
import Detail from "../ProductDetail/Detail";
import Popup from "../../Components/Popup/Popup";
const Store = () => {
  const { reactions } = useSelector((state) => state.emoji);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popup, setPopUp] = useState(false);
  const { notifications } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(add(item));
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 2000);
  };
  const { products } = useSelector((state) => state.products);
  const handleReaction = (id, type) => dispatch(addReaction({ id, type }));
  const handleSelect = (data) => setSelectedProduct(data);
  return (
    <>
      {popup &&
        notifications.cartNotification.map((item) => {
          return <Popup {...item} key={item.id}/>;
        })}
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
                onClick={() => handleSelect(item)}
              />
              <h2 className="text font-bold mb-2 text-white">{item.name} </h2>

              <h3 className="text font-medium mb-2 text-white">
                $ {item.price} USD
              </h3>
              <button
                className="bg-pink-700 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2"
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
            {...selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        )}
      </div>
    </>
  );
};

export default Store;
