import React from 'react'
import Navbar  from './components/Navbar'
import  Home  from './pages/Home'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'; // Added Toast Container
import 'react-toastify/dist/ReactToastify.css'; // Added Toast Styles
export const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
export default App;