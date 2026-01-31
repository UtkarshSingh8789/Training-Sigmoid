import { useEffect, useRef,useState} from "react";
export default function Previous(){
    let prevValueRef=useRef(null);
    const[count,setCount]=useState(0)
    useEffect(()=>{
        prevValueRef.current=count
    },[count])
    function increaseCount(){
        setCount((count)=>(count+1))
    }
    return (
        <div>
            <h1>current Count: {count}</h1>
            <br></br>
            <h2>previos Count: {prevValueRef.current}</h2>
            <br></br>
            <button onClick={increaseCount}>Submit</button>
        </div>
    )
}