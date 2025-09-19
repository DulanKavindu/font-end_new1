import { useEffect, useState } from "react"
import { loardcart } from "../../util/cartfuntion"

export function Cartpage(){
    const [cart,setcart]=useState([])
    useEffect(()=>{
        setcart(loardcart())
    },[])

    return(

        <div>{
            cart.map((iemes)=>{
                <div key={iemes.productid}>
                    <h1>={iemes.productid}*{iemes.qut}</h1>
                    
                </div>
            })
            }
            
        </div>
    )
}