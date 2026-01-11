import { createContext, useEffect, useState } from "react";
import axios from "axios"
import Products from "../Admin/Pages/Products";

// create context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
   
  const [user , setUser] = useState([
    {
      _id:1,
      username:"sujeet",
      gmail:"sk@gmail.com",
    
    },
     {
      _id:2,
      username:"sujeet",
      gmail:"sk@gmail.com",
     
    },
     {
      _id:3,
      username:"sujeet",
      gmail:"sk@gmail.com",
      
    },
     {
      _id:4,
      username:"sujeet",
      gmail:"sk@gmail.com",
     
    },
  ])
  const [products, setProduct] = useState([
    {
      _id: 1,
      name: "Classic T-Shirt",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
       description:
    "High-quality cotton t-shirt with a modern fit. Comfortable, breathable, and perfect for everyday wear.",
      rating: 4.6,
      reviews: 128,
    },
    {
      _id: 2,
      name: "Denim Jacket",
      price: "₹1,329",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
       description:
    "High-quality cotton t-shirt with a modern fit. Comfortable, breathable, and perfect for everyday wear.",
      rating: 4.6,
      reviews: 128,
    },
    {
      _id: 3,
      name: "Sneakers",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
       description:
    "High-quality cotton t-shirt with a modern fit. Comfortable, breathable, and perfect for everyday wear.",
      rating: 4.6,
      reviews: 128,
    },
    {
      _id: 4,
      name: "Denim Jacket",
      price: "₹1,159",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
       description:
    "High-quality cotton t-shirt with a modern fit. Comfortable, breathable, and perfect for everyday wear.",
      rating: 4.6,
      reviews: 128,
    },
  ]);
  

  useEffect(()=>{
  getProductData();
  getUsertData();

  },[])
   //product data
 const getProductData = async()=>{
  try{
     const  response= await axios.get("http://localhost:4000/getproduct")
     setProduct(response.data.productdata)
 
  }
  catch{
    console.log("server erro")

  }
 }
   // User data
 const getUsertData = async()=>{
  try{
     const  response= await axios.get("http://localhost:4000/getuser")
     setUser(response.data.userdata)
     console.log(response)
  }
  catch{
    console.log("server erro")
  }
 }
  // Sinup
  const Sinupuser = async(userData)=>{
  try{
     const  response= await axios.post("http://localhost:4000/sinup",{userData})
     console.log(response)
     localStorage.setItem("userSinup",token)
     toast.success(response.data.message)
  }
  catch{
    console.log("server erro")
  }
 }
   // login
 const Loginuser = async({userData})=>{
  try{
     const  response= await axios.post("http://localhost:4000/login",{userData})
     console.log(response)
     localStorage.setItem("userlogin",token)
     toast.success(response.data.message)

  }
  catch{
    console.log("server erro")
  }
 }
 // Admin login
const Adminlogin = async(admindata)=>{
  const responce = await axios.post("http://localhost:4000/adminlogin",{admindata}) 
  console.log(responce)
  localStorage.setItem("adminlogin",token)
  toast.success(responce.data.massage)
}
//add product
const Addproduct = async(productForm)=>{
  const responce =await axios.post("http://localhost:4000/addproduct",{productForm})
  console.log(responce)
  
  toast.success(responce.data.massage)
}
//delet product  admin
const deletProduct = async({id})=>{
  const responce =await axios.delete("http://localhost:4000/deletproduct",{id})
  console.log(responce)
  
  toast.success(responce.data.massage)
}
// update product admin
const updateproduct = async(id)=>{
  const responce =await axios.update("http://localhost:4000/updateproduct",{id})
  console.log(responce)
  toast.success(responce.data.massage)
}
// delet user Admin

const deletUser = async(id)=>{
  const responce =await axios.delete("http://localhost:4000/deletproduct",{id})
  console.log(responce)
  toast.success(responce.data.massage)
}

const value ={ products, user, Loginuser,Sinupuser,Adminlogin,Products,Addproduct,deletProduct ,updateproduct,deletUser }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
