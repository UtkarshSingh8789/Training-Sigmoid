import { useEffect, useState } from "react";
export default function LinkedinBar(){
    const [currentTab,setCurrentTab]=useState(1)
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState({})
    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const response=await fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
                const data=await response.json()
                console.log(data)
                setData(data)
            } catch (error) {
                console.log("Error while fetching data: "+error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[currentTab])
    if(loading) {
        return (
            <div>Loading... </div>
        )
    }
    else{
        return(
            <div>
                <button onClick={()=>(setCurrentTab(1))}>Button-1</button>
                <button onClick={()=>(setCurrentTab(2))}>Button-2</button>
                <button onClick={()=>(setCurrentTab(3))}>Button-3</button>
                <button onClick={()=>(setCurrentTab(4))}>Button-4</button>
                
                <br/>

                {loading ? "Loading..." : data.title}
            </div>
        )
    }
};