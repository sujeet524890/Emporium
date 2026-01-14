import { createContext, useEffect, useState } from "react";
import axios from "axios"
import Products from "../Admin/Pages/Products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const location =useNavigate();


 
   
  const [user , setUser] = useState([
    
  ])
  const [products, setProduct] = useState([
 
  ]);
  


  useEffect(()=>{
  getProductData();
  getUsertData();

  },[])
   //product data
 const getProductData = async(productdata)=>{
  try{
     const  response= await axios.get("https://emporium-argj.onrender.com/api/getProduct",productdata)
     setProduct(response.data.productdata)
     toast.success(response.data.message)
  }
  catch{
    console.log("server erro")

  }
 }
   // User data
 const getUsertData = async()=>{
  try{
     const  response = await axios.get("https://emporium-argj.onrender.com/api/getuser")
     setUser(response.data.getUsertData)
     
  }
  catch{
    console.log("server erro")
  }
 }
 //contect
const Contect = async (contectdata)=>{
  try{
    const response =await axios.post("https://emporium-argj.onrender.com/api/Contect",contectdata)
    toast.success(response.data.message)
  } 
  catch{
       console.log("server erro")
  }
}

 // Sinup
  const signup = async(userData)=>{
    
  try{

     const  response= await axios.post("https://emporium-argj.onrender.com/api/signup",userData)
     localStorage.setItem("userSignup",response.data.token)
     toast.success(response.data.message)
  }
  catch{
    console.log("server erro")
  }
 }
   // login
 const Loginuser = async(userData)=>{
  try{
     const  response= await axios.post("https://emporium-argj.onrender.com/api/login",userData)
     localStorage.setItem("logintoken",response.data.token)
    if(response.data.success){
       toast.success(response.data.message)
         
      }
      if(response.data.success){
       location("/")
      }

    if(!response.data.success)
       toast.warning(response.data.message)
    
   

  }
    
  catch{
    console.log("server erro")
  }
 }
 // Admin login
const Adminlogin = async(admindata)=>{
  try{
  const responce = await axios.post("https://emporium-argj.onrender.com/api/adminlogin",admindata) 
 
  localStorage.setItem("admintoken", responce.data.token)
 if(responce.data.success) toast.success("login success")
  
 location('/adminDashboard')
 window.location.reload();
  }
    catch{
      console.log("server error")
    }    
    
}

//add product
const Addproduct = async(productForm)=>{
   
  const responce =await axios.post("https://emporium-argj.onrender.com/api/addproduct",productForm)
  toast.success(responce.data.message)

}
//delet product  admin
const deletProduct = async(id)=>{
  const responce =await axios.delete(`https://emporium-argj.onrender.com/api/deletproduct/${id}`)
  
  toast.success(responce.data.message)
}
// update product admin
// const updateproduct = async(id)=>{
//   const responce =await axios.update("http://localhost:5000/api/updateproduct",{id})
//   console.log(responce)
//   toast.success(responce.data.massage)
// }
// delet user 

const deletuser = async(id)=>{
  const responce =await axios.delete(`https://emporium-argj.onrender.com/api/deletuser/${id}`)
  toast.success(responce.data.massage)
 
}

const value ={ products, user, Loginuser,signup,Adminlogin,Products,Addproduct,deletProduct,deletuser }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
