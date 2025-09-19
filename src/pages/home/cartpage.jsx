import { useEffect, useState } from "react"

import { Cartdard } from "../../components/cartcard"


import { loardcart } from "../../util/cartfuntion"


export function Cartpage() {
  const [cart, setcart] = useState([])

  useEffect(() => {
    setcart(loardcart())
  }, [])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      <div className="grid gap-4">
        {cart.map((item) => (
          < Cartdard
            key={item.productid}
            productid={item.productid}
            qunty={item.qut}
          />
        ))}
      </div>
    </div>
  )
}
