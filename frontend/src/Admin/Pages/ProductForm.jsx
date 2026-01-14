import React from "react";
import { useContext } from "react";
import { AppContext } from "../../ContextApi/Contex";
import { useState } from "react";

function ProductForm() {
  const { Addproduct } = useContext(AppContext);
  
  const [productForm, setProductform] = useState([
    {
      name: "",
      image: "",
      price: "",
      oldPrice: "",
      description: "",
      rating: "",
      review: "",
      category:"",
    },
  ]);
  const handleChange = (e) => {
    setProductform({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(productForm);

  const hendalsubmit = (e) => {
    e.preventDefault()
    
    Addproduct(productForm);
    setProductform([])
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
          required
          onChange={handleChange}
        />

        <input
          value={productForm.price}
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
           required
          onChange={handleChange}
        />
        <input
          value={productForm.oldprice}
          name="oldprice"
          type="number"
          placeholder="old Price"
          className="w-full border p-2 rounded"
           required
          onChange={handleChange}
        />
         <input
          value={productForm.description}
          name="description"
          type="text"
          placeholder="Description Product"
          className="w-full border p-2 rounded"
           required
          onChange={handleChange}
        />
        <input
          value={productForm.rating}
          name="rating"
          type="text"
          placeholder="rating"
          className="w-full border p-2 rounded"
           required
          onChange={handleChange}
        />
        <input
          value={productForm.review} 
          name="review"
          type="text"
          placeholder="review"
          className="w-full border p-2 rounded"
          required
          onChange={handleChange}
        />

        <input
          value={productForm.image}
          name="image"
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
           required
          onChange={handleChange}
        />
        

        <select
          name="category"
          value={productForm.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
           required
        >
          <option value="Chocolate">Chocolate</option>
          <option value="Cookies">Cookies</option>
          <option value="Cake">Cakes</option>
          <option value="SoftDrink">Soft Drink</option>
          <option value="Gift">Gift's</option>
          <option value="Partycap">Party Cap</option>
          <option value="Candle">Candle</option>
          <option value="Decoration">Decoration</option>
        </select>

        <button
          onClick={hendalsubmit}
          className="w-full bg-black text-white py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default ProductForm;
