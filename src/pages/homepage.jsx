import { Link, Route, Routes } from "react-router-dom";
import Hadder from "../components/heder";
import { Loginpage } from "./loginpage";
import { Productvive } from "./home/productovervive";

export function HomePage() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <Hadder></Hadder>
     <div className="w-full h-[calc(100vh-80px)] bg-blue-200">

        <Routes path="/">
        <Route path="/login" element={Loginpage}></Route>
        <Route path="/productinfo/:id" element={Productvive}></Route>

        </Routes>

      </div>
      

    </div>
  );
}
