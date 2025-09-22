import axios from "axios"
import { useEffect, useState } from "react"
import { deletecart } from "../util/cartfuntion"

export function Cartdard(props){
    const productid=props.productid
    const qunty=props.qunty
   

    const [product,setproduct]=useState(null)
    const [loarded,setloard]=useState(false)
    useEffect(()=>{
        if(!loarded)
        {
            axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${productid}`).then((response)=>{
        if(response.data!=null){
        setproduct(response.data)
        console.log(response.data)
        setloard(true)
        }else{
            deletecart(productid)
        }
      })
        }

     
    },[])

return (
    <div>
  <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6">
    <table className="w-full border-collapse hover:not-focus:bg-blue-500">
    
      <thead>
        <tr className="bg-gradient-to-r from-purple-200 to-blue-200 text-gray-800">
          <th className="py-3 px-4 text-left">Product</th>
          <th className="py-3 px-4 text-center">Quantity</th>
          <th className="py-3 px-4 text-center">Price (LKR)</th>
          <th className="py-3 px-4 text-center">Total (LKR)</th>
          <th className="py-3 px-4 text-center">Action</th>
        </tr>
      </thead>

     
      <tbody>
        <tr className="border-b hover:bg-gray-50 transition">
      
          <td className="py-3 px-4 flex items-center gap-3">
            <img
              src={product?.image?.[0] || "/placeholder.png"}
              alt={product?.productname || "Product"}
              className="w-16 h-16 object-cover rounded-lg border"
            />
            <span className="font-semibold text-gray-700">
              {product?.productname || "Unknown Product"}
            </span>
          </td>

   
          <td className="py-3 px-4 text-center text-purple-700 font-semibold">
            {qunty}
          </td>

         
          <td className="py-3 px-4 text-center text-gray-700 font-semibold">
            {product?.price || 0}
          </td>

          <td className="py-3 px-4 text-center text-green-700 font-bold">
            {((product?.price || 0) * qunty).toFixed(2)}
          </td>

          
          <td className="py-3 px-4 text-center">
            <button
              onClick={() => deletecart(productid)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              🗑 Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
   
  </div>
  </div>
 

);
}