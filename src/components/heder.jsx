import { Link } from "react-router-dom";

export default function Hadder() {
  return (
    <div className="w-full h-[80px] bg-amber-200 relative flex items-center justify-center">
      <img
        src="/bgpic.png"
        className="h-full rounded-full absolute left-2.5"
        alt="Logo"
      />
      <div className=" bg-amber-50">
       <Link to='/product' className="font-bold text-2xl mx-4 hover:backdrop-blur-3xl gap-1.5">Home</Link>
      <Link to='/' className="font-bold text-2xl mx-4 hover:backdrop-blur-3xl gap-1.5">Home</Link>
      <Link to='/' className="font-bold text-2xl mx-4 hover:backdrop-blur-3xl gap-1.5">Contact Us</Link>
      <Link to='/' className="font-bold text-2xl mx-4 hover:backdrop-blur-3xl gap-1.5">About Us</Link>
      </div>
   </div>
  );
}
