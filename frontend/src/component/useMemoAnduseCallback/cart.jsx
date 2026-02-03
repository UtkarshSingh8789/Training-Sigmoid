
import { useMemo } from "react";
import { useState } from "react"

function Cart(){
    const [count,setCount]=useState(0);
    const [cartItems,setCartItems]=useState([
        {
            id:1,
            price:100
        },
        {
            id:2,
            price:200
        }
    ])
    const totalprice=useMemo(()=>{
        // donot runs on every re-render
        // we use this when we have to do heavy operation otherwise for side effect use useEffect
        return cartItems.reduce((sum,items)=>(sum+items.price,0))
    },[])
    
    return(
        <div>

        </div>
    )
}