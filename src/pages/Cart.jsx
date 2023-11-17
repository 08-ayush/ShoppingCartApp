     


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto p-4  flex space-x-20 mt-4">
          <div className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-lg">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className=" flex flex-col justify-between mt-10">
          <div>
            <div className="text-lg font-semibold mb-2 text-green-600">Your Cart</div>
            <div className="text-lg font-semibold mb-2 text-green-700 text-4xl">Summary</div>
            <p>
              <span className="text-gray-600 font-bold">Total Items: {cart.length}</span>
            </p>
            </div>
            <div className="mt-4">
            <p className="text-xl font-semibold text-gray-600">
                Total Amount: <span className="text-black font-bold">${totalAmount}</span>
            </p>

              <button className="bg-green-700 px-36 text-white  py-3 rounded-md mt-4 hover:bg-gray-400 font-bold"
  >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

