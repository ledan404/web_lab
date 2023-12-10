import { useDispatch, useSelector } from "react-redux";
import { decrementAmount, incrementAmount, removeFromCart } from "../actions";
import { useNavigate } from "react-router-dom";
import { PesPatron } from "../../images";


function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementAmount = (itemId) => {
    dispatch(incrementAmount(itemId));
  };

  const handleDecrementAmount = (itemId) => {
    dispatch(decrementAmount(itemId));
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.dog.price * item.amount;
  }, 0);
  console.log(cartItems);
  return (
    <div>
      <div className="p-12">
        <h1 className="text-center text-gray-700 text-3xl mb-6">
          Shopping Cart
        </h1>
        {cartItems.map((item) => (
          <div
            key={item.dog.id}
            className="border-2 border-gray-700 rounded-md p-6 flex items-center mb-8"
          >
            <img
              src={PesPatron}
              alt="Dog"
              className="w-40 h-24 rounded-md object-cover"
            />
            
            <div className="flex-1 flex justify-between pl-6">
              <h1 className="text-gray-700 text-xl">{item.dog.name}</h1>
              <div className="">
              {item.amount}
              </div>
              <div className="flex space-x-4 items-center">
                <button
                  onClick={() => handleRemoveFromCart(item.dog.id)}
                  className="border-2 justify-end border-gray-700 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 active:bg-gray-400"
                >
                  ×
                </button>
                <button
                  onClick={() => handleIncrementAmount(item.dog.id)}
                  className="border-2 justify-end border-gray-700 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 active:bg-gray-400"
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrementAmount(item.dog.id)}
                  className="border-2 justify-end border-gray-700 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 active:bg-gray-400"
                >
                  -
                </button>
              </div>
              <h2 className="text-gray-600 text-xl">${item.dog.price}</h2>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <h2 className="text-gray-600 text-2xl">Total amount: </h2>
          <h2 className="text-gray-700 text-2xl ml-2">${totalAmount}</h2>
        </div>
        <div className="flex justify-between pt-16">
          <a
            onClick={() => navigate("/catalog")}
            className="border-2 border-gray-700 rounded-full px-6 py-2 cursor-pointer hover:bg-gray-200 active:bg-gray-400"
          >
            Back to Catalog
          </a>
          <button className="border-2 border-gray-700 rounded-full px-6 py-2 bg-gray-700 text-white text-xl font-semibold cursor-pointer ml-4">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
