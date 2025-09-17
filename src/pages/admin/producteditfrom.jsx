import axios from "axios";
import { useState } from "react";
import { Mediauplord } from "../../util/mediauplord";
import { useLocation, useNavigate } from "react-router-dom";

export function Editproduct() {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();

  if (!product) {
    alert("Product not found");
    navigate("/admin/product");
    return null;
  }

  const [pid, setPid] = useState(product.productid);
  const [pname, setPname] = useState(product.productname);
  const [altname, setAltname] = useState(product.altname.join(","));
  const [imgfile, setImgFile] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lasprice, setLasprice] = useState(product.lasprice);
  const [stock, setStock] = useState(product.stock);
  const [describtion, setDescribtion] = useState(product.describtion);

  async function handler() {
   
     const altnames = altname.split(",").map((a) => a.trim());

    // upload images if new selected
    let imgur = product.image;
    if (imgfile.length > 0) {
      const promiseArray = [];
      for (let i = 0; i < imgfile.length; i++) {
        promiseArray.push(Mediauplord(imgfile[i]));
      }
      imgur = await Promise.all(promiseArray);
    }

    const productdata = {
      productid: pid,
      productname: pname,
      altname: altnames,
      image: imgur,
      price: price,
      lasprice: lasprice,
      stock: stock,
      describtion: describtion,
    };

    const token = localStorage.getItem("token");

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/products/${product.productid}`,
        productdata,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert("✅ Product Updated Successfully!");
      console.log(res.data);
      navigate("/admin/products");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Error updating product");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-[450px]"
        onSubmit={(e) => e.preventDefault()} // ❌ block default refresh
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Edit Form
        </h1>

        <label className="block mb-2">Product ID</label>
        <input
          disabled
          type="text"
          className="w-full p-2 mb-4 border rounded"
          value={pid}
          onChange={(e) => setPid(e.target.value)}
        />

        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          required
          value={pname}
          onChange={(e) => setPname(e.target.value)}
        />

        <label className="block mb-2">Alternative Names (comma separated)</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          value={altname}
          onChange={(e) => setAltname(e.target.value)}
        />

        <label className="block mb-2">Upload Images</label>
        <input
          type="file"
          multiple={true}
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setImgFile(e.target.files)}
        />

        <label className="block mb-2">Price</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className="block mb-2">Last Price</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          required
          value={lasprice}
          onChange={(e) => setLasprice(e.target.value)}
        />

        <label className="block mb-2">Stock</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          required
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <label className="block mb-2">Description</label>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          rows="3"
          required
          value={describtion}
          onChange={(e) => setDescribtion(e.target.value)}
        />

        <button
          type="button"   
          onClick={handler}  
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
