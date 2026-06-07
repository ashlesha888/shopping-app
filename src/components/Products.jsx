import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify"; 
import { add, remove } from '../redux/slices/cartSlice'; 

export const Products = ({ post }) => {
  // Directly targeting state.cart fixes the selector warning
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart! 🎉");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart 🗑️");
  };

  return (
    <div className='flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 w-72 justify-between group h-105 hover:scale-105 m-6'>
      
      <div className='w-full'>
        <p className='text-gray-700 font-semibold text-lg truncate w-full mt-1'>
          {post.title}
        </p>
      </div>

      <div className='w-full mt-2'>
        <p className='text-gray-400 font-normal text-[12px] text-left line-clamp-2'>
          {post.description}
        </p>
      </div>

      <div className='h-45 w-full flex items-center justify-center my-4 overflow-hidden'>
        <img 
          src={post.image} 
          alt={post.title} 
          className='h-full object-contain group-hover:scale-110 transition-transform duration-300'
        />
      </div>

      <div className='flex justify-between items-center w-full mt-auto'>
        <div>
          <p className='text-green-600 font-semibold'>
            ${post.price}
          </p>
        </div>
        
        {/* Added Tailwind styles to the buttons */}
        {cart?.some((p) => p.id === post.id) ? (
          <button 
            className="text-red-700 border-2 border-red-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-red-700 hover:text-white transition duration-300 ease-in cursor-pointer"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>

    </div>
  );
};

export default Products;
