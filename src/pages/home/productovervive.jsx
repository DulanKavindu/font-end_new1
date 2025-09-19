import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Imageslider } from "../../components/imagesider";
import { addcart } from "../../util/cartfuntion";
import toast from "react-hot-toast";
export function Productvive() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
      .then((res) => {
        if (res.data) {
          setProduct(res.data);
          setStatus("found");
          console.log(res.data); 
        } else {
          setStatus("not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus("not found");
      });
  }, );
  function onclickaddtocart(){
      addcart(product.productid,1)
      toast.success("produt added to cart")
  }

  return ( 
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] w-full bg-gray-100 p-4">
    
      {status === "loading" && (
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

    
      {status === "not found" && (
        <div className="flex flex-col items-center justify-center p-8 bg-red-100 rounded-xl shadow-lg animate-pulse">
          <h1 className="text-3xl font-extrabold text-red-600 mb-2">404</h1>
          <p className="text-lg text-red-700">Oops! Product not found</p>
          <p className="text-sm text-red-500 mt-1">
            Please check the product ID or go back to the homepage.
          </p>
        </div>
      )}

      {status === "found" && product && (
        <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-4xl flex flex-col md:flex-row gap-6">
         
          <div className="md:w-[65%] flex flex-col justify-start">
            <h1 className="text-2xl font-semibold">{product.productname}</h1>
            <p className="text-gray-700 mt-2">{product.describtion}</p>
            {product.altname && product.altname.length > 0 && (
              <p className="text-gray-700 mt-2">{product.altname.join(" | ")}</p>
            )}
            <p className="text-green-600 font-bold mt-2">{product.price>product.lasprice}
                <span className="line-through text-red-600 gap=2">LKR{product.price}</span>
                <span>LKR{product.lasprice}</span>
                <button type="button" onClick={onclickaddtocart}>Addtocart</button>
            </p>
          </div>

        <div className="md:w-[35%] h-[150px] flex justify-center items-center">
          <Imageslider images={product.image} />
 
            
          </div>
        </div>
      )}
    </div>
  );
}
