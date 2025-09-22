import { useEffect, useState } from "react";
import { Cartdard } from "../../components/cartcard";
import { loardcart } from "../../util/cartfuntion";
import axios from "axios";

export function Cartpage() {
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);
  const [descount, setdescount] = useState(0);
  const [lastprice, setlastprice] = useState(0);

  useEffect(() => {
    const c = loardcart();
    setcart(c);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/orders/quote`, {
        orderedItems: c,
      })
      .then((res) => {
        settotal(res.data.total);
        setdescount(res.data.descountprice);
        setlastprice(res.data.lastprice);
        console.log(res.data.total)
      })
      .catch((err) => console.error(err));
  }, []);

   function checkoutbutton(){
    const token = localStorage.getItem("token")
    if(token==null){
      return
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/orders`,{
        orderedItems:cart,
        name:"dulan",
        address:"jfiojfijoiofio,doijijdijdioj",
        phoneNumber:"072541756"

      },
      {
      headers: {
    Authorization: `Bearer ${token}`,
  },}
    ).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      alert(err)
    })

      

  }
    
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      <div className="grid gap-4">
        {cart.map((item) => (
          <Cartdard
            key={item.productid}
            productid={item.productid}
            qunty={item.qut}
           
          />
        ))}
      </div>

      <div className="mt-6 text-right font-bold text-green-600 text-xl">
        Total: LKR {total}
      </div>
      <div className="mt-6 text-right font-bold text-green-600 text-xl">
        Discount: LKR {descount}
      </div>
      <div className="mt-6 text-right font-bold text-green-600 text-xl">
        Last price: LKR {lastprice}
      </div>
       <div className="mt-6 flex justify-end">
      <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition" onClick={checkoutbutton}>
        Checkout →
      </button>
    </div>
    </div>
  );
}
