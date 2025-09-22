import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import { Cartdard } from "../../components/cartcard"

export function Shiping(){
const location = useLocation()
const navigate =useNavigate()
  const [total, settotal] = useState(0);
  const [descount, setdescount] = useState(0);
  const [lastprice, setlastprice] = useState(0);

const cart= location.state.item
if(cart==null){
    toast.error("no items in cart")
   navigate("/cart")
}
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

    return(
        <div>
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
    )
}