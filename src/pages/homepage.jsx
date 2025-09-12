import { Link } from 'react-router-dom';



export function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website!</h1>
      <p>This is the home page where you can explore our products and services.</p>
      
      <div className="buttons">
        <button>Products</button>
        <button>About Us</button>
        <button>Contact</button>
        <button className='bg-amber-500'  onClick={()=>{
          alert("Redirecting to login page");
        }}>Login</button>
        <Link to='/login'><button>Go to Login Page</button></Link>
      </div>
    </div>
  );  
}
