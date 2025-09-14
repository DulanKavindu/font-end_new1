import React, { useState, useEffect } from "react";
import axios from "axios";

export function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        if (res.data.products) {
          setProducts(res.data.products);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2>Products List</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Product ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border border-gray-300 px-4 py-2">{product.productid}</td>
              <td className="border border-gray-300 px-4 py-2">{product.productname}</td>
              <td className="border border-gray-300 px-4 py-2">{product.price}</td>
              <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
              <td className="border border-gray-300 px-4 py-2">{product.describtion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
