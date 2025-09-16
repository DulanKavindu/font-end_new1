import { Link } from "react-router-dom";
import { BsGraphUp, BsBoxSeam, BsPerson, BsGear } from "react-icons/bs";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { AdminProductPage } from "./admin/adminproductpage";
import { ProductAddPage } from "./admin/productaddpage";

export function AdminPage() {
  return (
    <div className="flex w-full h-screen bg-blue-100">
      {/* Sidebar */}
      <div className="bg-blue-200 w-64 h-full flex flex-col items-start pt-10 px-4 gap-6 shadow-lg">
        <h1 className="text-xl font-bold text-blue-800 mb-8">Admin Panel</h1>

        <Link 
          to="/admin/dashboard" 
          className="flex items-center gap-3 text-blue-900 font-medium py-2 px-4 rounded hover:bg-blue-300 w-full transition"
        >
          <BsGraphUp size={20} /> Dashboard
        </Link>

        <Link 
          to="/admin/products" 
          className="flex items-center gap-3 text-blue-900 font-medium py-2 px-4 rounded hover:bg-blue-300 w-full transition"
        >
          <BsBoxSeam size={20} /> Products
        </Link>

        <Link 
          to="/admin/users" 
          className="flex items-center gap-3 text-blue-900 font-medium py-2 px-4 rounded hover:bg-blue-300 w-full transition"
        >
          
          <BsGear size={20}  /> odrers
        </Link>

        <Link 
          to="/admin/settings" 
          className="flex items-center gap-3 text-blue-900 font-medium py-2 px-4 rounded hover:bg-blue-300 w-full transition"
        >
           <BsPerson size={20} />
          customesrs
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-blue-900">Welcome to Admin Dashboard</h1>
        <p className="mt-4 text-blue-800">Select an option from the sidebar to manage your app.</p>
        
        <Routes path='/*'>
          <Route path='/dashboard' element={<div>Dashboard Content</div>}/>
          <Route path='/products' element={<AdminProductPage />}/>
          <Route path='/ordes' element={<div>oder Content</div>}/>
          <Route path='/customers' element={<div>customer Content</div>}/>
          <Route path='/*' element={<div>404 error</div>}/>
          <Route path='/products/productaddpage' element={<ProductAddPage/>}/>
        </Routes>
        

      </div>
    </div>
  );
}
