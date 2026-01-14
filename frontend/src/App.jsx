
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Collections from "./Pages/Collections";
import Cart from "./Pages/Cart";
import Home from "./Components/Home";
import Navebar from "./Components/Navebar";
import Footer from "./Components/Footer";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import Adminlogin from "./Admin/Pages/Adminlogin";
import { useState } from "react";
import ProductPage from "./Pages/ProductPage";
import Products from "./Admin/Pages/Products";
import User from "./Admin/Pages/User";
import { ToastContainer } from "react-toastify";

const App = () => {

  const islogin = localStorage.getItem("admintoken")
   
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/adminlogin" element={<Adminlogin></Adminlogin>} />
        <Route
          path="/adminDashboard"
          element=
            {islogin ? (
              <AdminDashboard></AdminDashboard>
            ) : (
              <Adminlogin></Adminlogin>
            )
          }
        />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/user/" element={<User />} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;
