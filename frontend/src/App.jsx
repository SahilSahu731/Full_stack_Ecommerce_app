import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Collections from "./pages/Collections"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Searchbar from "./components/Searchbar"
import Product from "./pages/Product"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./pages/Verify"


function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      <ToastContainer  />
      <Nav />
      <Searchbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/collection" element={<Collections/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/product/:productId" element={<Product/>} /> 
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/place-order" element={<PlaceOrder/>} /> 
        <Route path="/orders" element={<Orders/>} /> 
        <Route path="/verify" element={<Verify/>} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
