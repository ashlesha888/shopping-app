import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

export const Cart = () => {
  // Fixed performance warnings with target mapping selection
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculates running pricing matrix smoothly
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column: Cart items mapping list */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Column: Checkout Order Metadata Block */}
          <div className="w-full md:w-95 bg-white rounded-lg shadow-sm p-6 h-fit flex flex-col justify-between border border-gray-100">
            <div>
              <div className="text-emerald-700 text-xl font-bold uppercase tracking-wider">Your Cart</div>
              <div className="text-emerald-700 text-4xl font-extrabold uppercase mt-1 mb-4">Summary</div>
              <p className="text-gray-700 font-semibold text-lg">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-700 text-xl font-semibold flex justify-between mb-4">
                <span>Total Amount:</span>
                <span className="text-gray-900 font-bold">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center mt-[15%] gap-4'>
          <h1 className='text-3xl font-bold text-gray-800'>Your Cart is Empty</h1>
          <NavLink to="/" >
            <button className='bg-green-600 px-6 py-3 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer shadow-md'>
              Start Shopping
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
