import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[90%] max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🌟 Welcome to Our Website!
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Explore our products and services easily from here.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-[10%] transition-all shadow-sm">
            Products
          </button>

          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-[10%] transition-all shadow-sm">
            About Us
          </button>

          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-[10%] transition-all shadow-sm">
            Contact
          </button>

          
           <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600" 
           onClick={() => {
              alert("Redirecting to login page");
            }}>
         
            Login
          </button>
        </div>

        {/* Separate Login Page Link */}
        <div className="mt-6">
          <Link to="/login">
            <button className="bg-gray-800 hover:bg-black text-white font-medium py-2 px-8 rounded-[10%] transition-all shadow-sm">
              Go to Login Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
