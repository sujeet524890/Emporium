import mongoose from "mongoose";

const mongodb = () => {
  try {
    mongoose.connect("mongodb+srv://sujeeten1_db_user:zJGFxp0Sj0sqyP0g@cluster0.r6uwbwi.mongodb.net/");
    console.log("connceted");
  } catch {
    console.log("not connected");
  }
};
export default mongodb;
