import { useEffect ,useState} from "react"

export default function Clock(){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        let id=setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>(clearInterval(id))
    },[])
    return (
        <div>
            <h1>Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>;
        </div>
    )
}