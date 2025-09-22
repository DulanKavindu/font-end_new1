import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export function Loginpage() {
  const googalelogin = useGoogleLogin({
    onSuccess:(res)=>{
      console.log(res)
      axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/googlelogin`,{
        token:res.access_token
    
      }).then((res)=>{
        console.log(res.user)
        if(res.data.message=="user created"){
            toast.success("Your account is created now you can login via google.")
            
    }else{
      localStorage.setItem("token",res.data.token)
      if(res.data.user.type=="admin")
      {
        window.localStorage.href="/admin"
      }
      else{
        window.location.href="/"
      }
      
    }
  })
      

    }})

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL+"/users/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        const user = res.data.user;
        console.log(user);

        if (!res.data.user) {
          toast.error("Invalid email or password");
          return;
        }

        
        localStorage.setItem("token", res.data.token);

        if (res.data.user.type ==='admin') {
          window.location.href = '/admin/*';
        } else{
            window.location.href = '/';
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again!");
      });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
      <div className="w-[450px] h-[450px] bg-blue-300 rounded-lg p-8">
        <img
          src="https://img.freepik.com/premium-vector/lock-icon-vector-illustration_53876-133628.jpg?w=2000"
          alt="login"
          className="w-[100px] h-[100px] mx-auto mb-4"
        />
        <span className="block mb-1">Email</span>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded border border-gray-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className="block mb-1">Password</span>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={login}
        >
          Login
        </button>
         <button
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-blue-600 mask-t-from-4.5"
          onClick={googalelogin}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
