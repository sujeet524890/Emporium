import React, { useState } from "react";
import User from "./User";
import ProductForm from "./ProductForm";
import Products from "./Products";
const AdminDashboard = () => {

  



  const [tab, setTab] = useState("user");



  return (
    <div className="min-h-screen bg-[rgb(234,208,184)] py-25">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h1>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 justify-center mb-6">
        <button
          onClick={() => setTab("user")}
          className={`px-4 py-2 rounded ${
            tab === "user" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Users
        </button>

        <button
          onClick={() => setTab("product")}
          className={`px-4 py-2 rounded ${
            tab === "product" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setTab("add")}
          className={`px-4 py-2 rounded ${
            tab === "add" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Add Product
        </button>
      </div>

      {/* Content */}

      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        {tab === "user" && (
          <>
            <h2 className="text-xl text-center font-semibold mb-4">Users</h2>
            <User></User>
          </>
        )}

        {tab === "product" && (
          <div>
            <Products></Products>
          </div>
        )}

        {tab === "add" && (
          <ProductForm></ProductForm>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
