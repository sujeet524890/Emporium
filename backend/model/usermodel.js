import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
  ConformPassword: {
    type: String,
    requried: true,
  },
  
},
{
    timestamps: true,
  },

);
export default mongoose.model("user",userSchema)
