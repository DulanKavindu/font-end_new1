import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

export function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const getAllProduct = () => {
 axios
      .get(import.meta.env.VITE_BACKEND_URL+"/products")
      .then((res) => {
        if (res.data.products) {
          setProducts(res.data.products);
        }
      })
      .catch((err) => console.error(err));
  }

  
  useEffect(() => {
   getAllProduct();
  }, []);

 

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products List</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Product ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {product.productid}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.productname}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.stock}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.describtion}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex gap-2">
                <button
                  onClick={()=>{
                   navigate("/admin/products/editproduct",{state:{product:product}})
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={()=>{
                    

  const token = localStorage.getItem("token")
axios.delete(import.meta.env.VITE_BACKEND_URL+`/products/${product.productid}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then(() => {
  getAllProduct();
  alert("Product deleted successfully");
})
.catch((err) => {
  console.error(err);
  alert("Error deleting product");
});
 }}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div classname="w-[50px] h-[50px] bg-red-500">
        <button
  className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
  onClick={() => {
    window.location.href = "/admin/products/productaddpage";
  }}
>
  +
</button>
      </div>
    </div>
  );
}
