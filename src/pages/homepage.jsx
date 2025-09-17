import { Route, Routes } from "react-router-dom";
import Hadder from "../components/heder";
import { Loginpage } from "./loginpage";
import { Productvive } from "./home/productovervive";

export function HomePage() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <Hadder />

      <div className="w-full h-[calc(100vh-80px)] bg-blue-200">
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/productimfro/:id" element={<Productvive />} />
        </Routes>
      </div>
    </div>
  );
}
