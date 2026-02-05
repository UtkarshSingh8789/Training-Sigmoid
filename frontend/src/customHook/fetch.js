import { useState,useEffect } from "react";
export default function useFetch(url){
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [err,setErr]=useState(null)
    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true)
            try {
                const data=await fetch(url)
                const result=await data.json();
                setData(result)
            } catch (error) {
                setErr(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {data,loading,err}
}
