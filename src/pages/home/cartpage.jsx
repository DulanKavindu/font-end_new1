import { useEffect, useState } from "react"
import { loardcart } from "../../util/cartfuntion"

export function Cartpage(){
    const [cart,setcart]=useState([])
    useEffect(()=>{
        setcart(loardcart)
    },[])

    return(

        <div>{
            cart.map((iemes)=>{
                <div>
                    <h1>{iemes.productid}*{iemes.qut}</h1>
                    
                </div>
            })
            }
            <h1>cart page</h1>
        </div>
    )
}