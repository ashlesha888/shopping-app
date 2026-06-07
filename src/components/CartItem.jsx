import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify"; 
import { remove } from '../redux/slices/CartSlice'; 

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id)); // Fixed: changed post.id to item.id
    toast.error("Removed from cart 🗑️");
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 gap-6 max-w-2xl">
      {/* Product Image */}
      <div className="w-30 h-30 flex items-center justify-center overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full object-contain" />
      </div>
      
      {/* Text Info */}
      <div className="flex-1">
        <h1 className="text-gray-700 font-semibold text-lg">{item.title}</h1>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{item.description}</p>
        
        {/* Price & Action wrapper */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-bold">${item.price}</p>
          <div 
            onClick={removeFromCart} 
            className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full cursor-pointer transition-colors duration-300"
          >
            <FaTrashAlt size={14}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
