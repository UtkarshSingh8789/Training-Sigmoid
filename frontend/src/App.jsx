import PostComponent from "./component/post.jsx";
import { useEffect, useState } from "react";
import LinkedinBar from "./component/LinkedinBar.jsx";
import Counter from "./component/Day-8/classComponent.jsx";
import Clock from "./component/Day-8/Clock.jsx";
import Focus from "./component/useRef-Hook/Focus.jsx";
import Previous from "./component/useRef-Hook/Previous.jsx";
import Routing from "./Routing/example.jsx";
import Product from "./component/axios/Product.jsx";
// export default function App(){
//   const [posts,setPosts]=useState([]) // it returns an array with current state and function to update the state
//   const postComponents=posts.map((post)=>{
//     // hr ek element of posts ke liye map callBack function ko call krta hai;
//     return <PostComponent
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.title}
//       image={post.image}
//       description={post.description}
//     />
//   })
//   function addPost() {
//     setPosts([...posts, {
//       name: "harkirat",
//       subtitle: "10000 followers",
//       time: "2m ago",
//       image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//       description: "What to know how to win big? Check out how these folks won $6000 in bounties."
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addPost}> Add Post</button>
//       {postComponents}
//     </div>
//   )
// }
// export default function App(){
//   const [count,setCount]=useState(0)
//   function increaseCount(){
//     setCount((count)=>count+1)
//   }
//   function decreaseCount(){
//     setCount((count)=>count-1)
//   }
//   return(
//     <div>
//       {count}
//       <br></br>
//       <button onClick={increaseCount}>Click Here for increase!</button>
//       <br></br>
//       <button onClick={decreaseCount}>Click here for decrease!</button>
//     </div>
//   )
// }

// useEffect Hooks;

// "https://jsonplaceholder.typicode.com/todos/tab" on the basis of tab number;

// export default function App(){
//   const products=[
//     { 
//       id:1,
//       product_name:"HeadPhone",
//       product_price:500,
//       product_category:"Electronics",
//       product_img:"https://img.freepik.com/free-psd/stylish-gray-white-headphones-music-audio-device_632498-46115.jpg?semt=ais_hybrid&w=740&q=80",
//     },
//     { 
//       id:2,
//       product_name:"Fashion Material",
//       product_price:5000,
//       product_category:"Accessories",
//       product_img:"https://media.gettyimages.com/id/2091553646/photo/set-of-fashion-collection-with-trendy-fashion-clothes-and-make-up-cosmetic-products-for-women.jpg?s=612x612&w=gi&k=20&c=gIbVOPeXlKkW-wEPclQOvU36IG5mct4f2QlBpq58qUk=",
//     },
//     { 
//       id:3,
//       product_name:"Fashion Material",
//       product_price:50000,
//       product_category:"Gadgets",
//       product_img:"https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg",
//     },
//   ]
//   const productComponent=products.map((product)=>{
//     return <Product 
//         key={product.id}
//         id={product.id}
//         product_name={product.product_name}
//         product_price={product.product_price}
//         product_category={product.product_category}
//         product_img={product.product_img}
//     />
//   })
//   return(
//     <div style={{ display: "flex", gap: 20, padding: 20 }}>
//       {productComponent}
//     </div>
//   )
// }

export default function App(){
  return (
    <div>
      {/* <Counter username="utkarsh" initialScore={50}/> */}
      {/* <Clock/> */}
      {/* <Routing/> */}
      <Product/>
    </div>
  )
}


