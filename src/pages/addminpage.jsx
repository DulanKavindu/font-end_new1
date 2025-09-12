import { Link } from "react-router-dom";

export function Addminpage(){
    return(
        <div className="bg-blue-300 w-full h-screen flex">
        <div className="bg-blue-200 w-[20%] h-[100%]  flex flex-col  items-center gap-30 pt-20">  
            <Link to='/addmin/dashboard' > Dashbord </Link>
            <Link to='/addmin/products' > Products </Link>
            <Link to='/addmin/order' > Users </Link>
            <Link to='/addmin/customer' > Settings </Link>
        </div>
        </div>
    )

}