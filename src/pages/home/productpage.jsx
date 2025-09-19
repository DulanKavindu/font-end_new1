import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/productcard";

export function Productpage() {
  const [products, setProducts] = useState([]); // plural
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    if (loadingStatus === "loading") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.products); // fixed name
          setLoadingStatus("loaded");
        })
        .catch((err) => {
          console.log(err);
          setLoadingStatus("error");
        });
    }
  }, [loadingStatus]);

  return (
    <div>
      {loadingStatus === "loading" && <p>Loading...</p>}
      {loadingStatus === "error" && <p className="text-red-500">Failed to load products</p>}

      {loadingStatus === "loaded" &&
        products.map((product) => (
       
          <ProductCard product={product}></ProductCard>
        ))}
    </div>
  );
}
