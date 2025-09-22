import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Cartdard } from "../../components/cartcard";
import { useEffect, useState } from "react";
import { loardcart } from "../../util/cartfuntion";
import axios from "axios";

export function Shiping() {
  const location = useLocation();
  const navigate = useNavigate();
  const [total, settotal] = useState(0);
  const [descount, setdescount] = useState(0);
  const [lastprice, setlastprice] = useState(0);
  const [carts, setcart] = useState([]);

  // 🆕 form fields
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const cart = location.state?.item;
  if (cart == null) {
    toast.error("No items in cart");
    navigate("/cart");
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
      })
      .catch((err) => console.error(err));
  }, []);

  function oderPlace() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    if (!name || !address || !phone) {
      toast.error("Please fill in all shipping details.");
      return;
    }

    axios
      .post(
        import.meta.env.VITE_BACKEND_URL + "/orders",
        {
          orderedItems: carts,
          name,
          address,
          phone,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Order placed successfully!");
        navigate("/orders");
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  if (!cart) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {/* Cart items */}
      <div className="grid gap-4">
        {cart.map((item) => (
          <Cartdard
            key={item.productid}
            productid={item.productid}
            qunty={item.qut}
          />
        ))}
      </div>

      {/* Totals */}
      <div className="mt-6 text-right font-bold text-green-600 text-xl">
        Total: LKR {total}
      </div>
      <div className="mt-2 text-right font-bold text-green-600 text-xl">
        Discount: LKR {descount}
      </div>
      <div className="mt-2 text-right font-bold text-green-600 text-xl">
        Last price: LKR {lastprice}
      </div>

      {/* Shipping details form */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">🚚 Shipping Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            rows="3"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Checkout button */}
      <div className="mt-8 flex justify-end">
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          onClick={oderPlace}
        >
          Checkout →
        </button>
      </div>
    </div>
  );
}
