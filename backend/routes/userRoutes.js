import express from "express";
import user from "../model/usermodel.js";
import product from "../model/productmodel.js";
import admin from "../model/adminmodel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("route working");
  console.log("working");
});

//signup
router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { fullname, email, password, ConformPassword } = req.body;
  // console.log(fullname, email, password, ConformPassword);
  //validation(chek)
  if (
    fullname == "" ||
    email == "" ||
    password == "" ||
    ConformPassword == ""
  ) {
    return res.json({
      message: "Please Fill All Field ",
    });
  }
  //check existing user
  const existingUser = await user.findOne({ email });
  if (existingUser) {
    return res.json({
      message: "user alredy exists",
    });
  }
  //check password and conform pasword
  if (password !== ConformPassword) {
    return res.json({
      message: "Password not Match",
    });
  }
  //user save in db
  const newUser = new user({
    fullname,
    email,
    password,
    ConformPassword,
  });
  await newUser.save();

  const usertoken = {
    token: newUser._id,
  };

  const token = jwt.sign({ usertoken }, "sujeet");
  res.json({
    message: "User register successfully",
    success: true,
    token,
  });
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  //validation(chek)
  if (!email || !password) {
    return res.json({
      message: "please fill all field",
    });
  }
  const loginuser = await user.findOne({ email });
  if (!loginuser) {
    return res.json({
      message: "invalid email",
    });
  } else if (loginuser.password !== password) {
    return res.json({
      message: "invalid password",
    });
  }
  const logintoken = {
    usertoken: user._id,
  };
  const token = jwt.sign(logintoken, "sujeeeeetjee");

  return res.json({
    message: "login successfull",
    success: true,
    token,
  });
});

//admin login

router.post("/adminlogin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  //validation(chek)
  if (!email || !password) {
    return res.json({
      success: false,
      message: "fill all field",
    });
  }
  //check email and password
  const adminlogin = await admin.findOne({ email });
  if (!adminlogin) {
    return res.json({
      message: "invalied email",
    });
  } else if (adminlogin.password != password) {
    return res.json({
      message: "invalid password",
    });
  }
  const adminlogintoken = {
    token: admin._id,
  };
  const token = jwt.sign(adminlogintoken, "sujeet");

  return res.json({
    success: true,
    message: "login successfull",
    token,
  });
});

//addproduct/
router.post("/addproduct", async (req, res) => {
  const {
    name,
    image,
    price,
    oldprice,
    description,
    rating,
    reviews,
    category,
  } = req.body;

  //validation {check}
  if (
    name == "" ||
    image == "" ||
    price == "" ||
    oldprice == "" ||
    description == "" ||
    rating == "" ||
    reviews == "" ||
    category == ""
  ){
    return res.json({
      message: "fill all detail",
    });
  }
  var newProduct = new product({
    name,
    image,
    price,
    oldprice,
    description,
    rating,
    reviews,
    category,
  });

  await newProduct.save();

  return res.json({
    message: "add successfully",
    success: true,
  });
  
});

// getproduct
router.get("/getproduct", async (req, res) => {
  const productdata = await product.find();
  return res.json({
    success: true,
    productdata,
  });
});

// getuser
router.get("/getuser", async (req, res) => {
  const getUsertData = await user.find();
  return res.json({
    success: true,
    getUsertData,
  });
});

//deletproduct
router.delete("/deletproduct/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
   await product.findByIdAndDelete(id);

  return res.json({
    message: "product  deleted",
    success: true,
  });
});
//delet User
router.delete("/deletuser/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
   await user.findByIdAndDelete(id);

  return res.json({
    message: "User  deleted",
    success: true,
  });
});

//updateproduct/

// router.put("/update/:id", async (req, res) => {

//     const { id } = req.params;

//     const updatedproduct = await product.findByIdAndUpdate(
//       id,
//       req.body,                 // data to update
//       {
//         new: true,              // return updated data
//         runValidators: true,    // run schema validation
//       }
//     );

//     if (!updatedproduct) {
//       return res.status(404).json({ message: "product not found" });

//     }
//     return res.json({
//       message:"product update successfully",
//       success:true,
//        updatedproduct,
//     })
//   });

export default router;
