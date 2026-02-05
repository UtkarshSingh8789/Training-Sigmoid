import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchDept } from "../features/department/departmentThunk"
export default function DeptList(){
    const dispatch=useDispatch()
    const {list,loading,error}=useSelector((state)=>(state.dept))
    console.log(list)
    useEffect(()=>{
        dispatch(fetchDept())
    },[dispatch])
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>{error}</h3>
    return (
        <div>
            <ul>
                {
                    list.map((d)=>(
                        <li key={d.id}>
                        {d.deptno} - {d.dname} - {d.loc}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

//FLOW-> 


// Component
//    ↓
// dispatch(fetchDept())
//    ↓
// Thunk middleware intercepts    -> fetchDept() is a function 
//    ↓
// Runs async function
//    ↓
// dispatch(fetchStart())
//    ↓
// Reducer updates loading=true
//    ↓
// API call
//    ↓
// dispatch(fetchSuccess(data))
//    ↓
// Reducer updates list
//    ↓
// Component re-renders
