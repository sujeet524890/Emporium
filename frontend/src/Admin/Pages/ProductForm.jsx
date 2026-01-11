import React from "react";
import { useContext } from "react";
import { AppContext } from "../../ContextApi/Contex";
import { useState } from "react";


function ProductForm() {
const {Addproduct} = useContext(AppContext)
// 
  const [productForm, setProductform] = useState([
    {
      Chocolate: "",
      Cookies: "",
      Cakes: "",
      SoftDrink: "",
      Gifts: "",
      Candle: "",
      Decoration: "",
    },
  ]);
  const handleChange = (e) => {
    setProductform({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(productForm);

  const hendalsubmit = () => {
   Addproduct(productForm)
  };
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      <form className="space-y-3">
        <input
          value={productForm.name}
          name="name"
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          value={productForm.price}
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          value={productForm.oldprice}
          name="oldprice"
          type="number"
          placeholder="old Price"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          value={productForm.oldprice}
          name="rating"
          type="text"
          placeholder="rating"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          value={productForm.image}
          name="image"
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="category"
          value={productForm.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Chocolate">Chocolate</option>
          <option value="Cookies">Cookies</option>
          <option value="Cakes">Cakes</option>
          <option value="SoftDrink">Soft Drink</option>
          <option value="user">Gift's</option>
          <option value="Gift's">Party Cap</option>
          <option value="Candle">Candle</option>
          <option value="Decoration">Decoration</option>
        </select>

        <button onClick={()=>hendalsubmit()} className="w-full bg-black text-white py-2 rounded">
          Add Product
        </button>
      </form>
    </>
  );
}

export default ProductForm;
