import { Route, Routes } from "react-router-dom";
import Hadder from "../components/heder";
import { Loginpage } from "./loginpage";
import { Productvive } from "./home/productovervive";
import { Productpage } from "./home/productpage";
import { Cartpage } from "./home/cartpage";
import { Shiping } from "./home/shipingpage";

export function HomePage() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <Hadder />

      <div className="w-full h-[calc(100vh-80px)] bg-blue-200">
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/productimfro/:id" element={<Productvive />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/shiping" element={<Shiping />} />

        </Routes>
      </div>
    </div>
  );
}
