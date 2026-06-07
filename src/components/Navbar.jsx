import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    // Main Container
    <div className="flex flex-row justify-between items-center p-4 bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white w-full">
      
      {/* 1. Logo Section */}
      <NavLink to="/">
        <div className="flex items-center">
        <img className="h-10 w-auto object-contain ml-6" src="/logo.png" alt="Logo" />
      </div>
      </NavLink>

      {/* 2. Menu Section: FIXED with flex layout to center the icon and text vertically */}
      <div className="flex flex-row items-center gap-5">
        <NavLink to="/">
          <p className="cursor-pointer hover:text-indigo-300 transition-colors">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart className="text-xl text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors mr-6" />
        </NavLink>
      </div>

    </div>
  )
}

export default Navbar;
