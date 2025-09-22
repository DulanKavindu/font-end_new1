export function loardcart(){

    const cart = localStorage.getItem("cart")
    if(cart!=null){
        return JSON.parse(cart)
    }
    else{
        return []
    }
}
export function addcart(productid,qut){

    const cart =loardcart()

    const index =cart.findIndex((items)=>{
        return(items.productid==productid)
    })

    if(index==-1){
        cart.push({productid,qut})
    }
    else{
        const newqty=cart[index].qut+qut
        if(newqty<0){
            cart.splice(index,1)
        }
        else{
            cart[index].qut=newqty
        }
    }
    savecart(cart)
}

export function savecart(cart){

    localStorage.setItem("cart",JSON.stringify(cart))

}

export function deletecart(productid){
  const cart =loardcart()

    const index =cart.findIndex((items)=>{
        return(items.productid==productid)
    })
    if(index!=-1)
    {
        cart.splice(index,1)
        save(cart)
    }
    
   
}