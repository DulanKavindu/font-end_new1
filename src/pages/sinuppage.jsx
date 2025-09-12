// SignupPage.jsx
import React from 'react';

export function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Sign Up</h1>
        
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Sign Up
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <span className="text-blue-500 font-semibold cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
}
