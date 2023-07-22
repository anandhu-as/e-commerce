import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Redux/features/Product/ProductSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  return (
    <div className="flex">
      <div className="  w-1/4 py-4 px-8 text-white bg-slate-800 h-screen">
        <h2 className="text-2xl font-bold mb-4 bg-slate-800 ">
          {cart.length === 0 ? "bag is empty" : `${cart.length} item on bag`}
        </h2>
        <h3 className="bg-slate-800" >Total :</h3>
      </div>

      <div className="flex-1 p-4">
        {cart.map((data) => (
          <div key={data.id} className="flex items-center mb-4">
            <img src={data.image} alt={data.name} className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-white font-bold">{data.name}</h2>
              <h3 className="text-white">{data.price}</h3>
            </div>
            <button
              className="ml-auto px-4 py-2 bg-slate-600 text-white rounded-lg"
              onClick={() => dispatch(remove(data.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
