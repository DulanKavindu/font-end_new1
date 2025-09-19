import axios from "axios"
import { useEffect, useState } from "react"

export function Cartdard(props){
    const productid=props.productid
    const qunty=props.qunty

    const [product,setproduct]=useState(null)
    const [loarded,setloard]=useState(false)
    useEffect(()=>{
        if(!loarded)
        {
            axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${productid}`).then((response)=>{
        setproduct(response.data)
        console.log(response.data)
        setloard(true)
      })
        }


    },[])

    return(
        <div>
      <sapn>{productid}</sapn>
      <span>x</span>
      <span>{qunty}</span>
        </div>

    )
}