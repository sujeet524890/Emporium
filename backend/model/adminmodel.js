import mongoose from "mongoose";

const admintSchema = new mongoose.Schema({
  email: {
    type: String,
    requried: true,
  },

  password: {
    type: String,
    requried: true,
  },
});
export default mongoose.model("admin", admintSchema)