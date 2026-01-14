import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
      requried: true,
    },
  price: {
    type: String,
    requried: true,
  },
  oldprice: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    requried: true,
  },
  rating: {
    type: String,
    requried: true,
  },
  reviews: {
    type: String,
    requried: true,
  },
  category: {
    type: String,
    requried: true,
  },
});
export default mongoose.model("product",productSchema)
      