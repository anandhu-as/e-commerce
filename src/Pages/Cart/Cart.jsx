import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  incrementQuantity,
  remove,
} from "../../Redux/features/Product/ProductSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);
  const handleRemove = (id, price, name) => {
    dispatch(remove(id, price, name));
  };
  const totalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="flex pt-16">
      <div className="w-1/4 py-4 px-8 text-white  h-screen">
        <h2 className="text-2xl font-bold mb-4 animate__animated animate__fadeInLeft">
          {cart.length === 0 ? "bag is empty" : ` ${cart.length} item on bag`}
        </h2>
        <h3 className="animate__animated animate__fadeInLeft">
          Total : $ {totalAmount()} USD
        </h3>
        <button
          className="px-4 py-2 bg-red-500 rounded mt-8"
          onClick={() => dispatch(clear())}
        >
          Remove all
        </button>
        <button className="px-4 py-2 bg-blue-400 rounded mt-8 ml-4">
          <Link to="/store" className="bg-blue-400">
            continue browsing
          </Link>
        </button>
      </div>
      <div className="flex-1 p-4 ">
        {cart.map((data) => (
          <div key={data.id} className="flex items-center mb-4">
            <img src={data.image} alt={data.name} className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-white font-bold">{data.name}</h2>
              <h3 className="text-white">$ {data.price} USD</h3>
            </div>
            <h2 className="text-white ml-16">{data.quantity}</h2>
            <div className="ml-auto">
              <button
                className=" text-white mr-6"
                onClick={() => dispatch(incrementQuantity({ id: data.id }))}
              >
                +
              </button>
              <button className=" text-white   mr-8">-</button>
              <button
                className="px-4 py-2 text-white rounded-lg mr-6 bg-red-500"
                onClick={() =>
                  handleRemove({
                    id: data.id,
                    price: data.price,
                    name: data.name,
                  })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
