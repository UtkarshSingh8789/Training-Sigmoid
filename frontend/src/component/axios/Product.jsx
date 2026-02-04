import axios from "axios"
import { useEffect,useState } from "react"
function Product(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((res)=>{
            setProducts(res.data.products)
            console.log(res.data.products)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            {products.map((item) => (
                <div key={item.id}>
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price}</p>
                </div>
            ))}
        </div>
    )
}
export default Product;