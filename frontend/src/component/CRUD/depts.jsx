import { useEffect,useState } from "react";
import { deptService } from "../../../services/deptServices.js";
export default function depts(){
    const [deptArray,setDeptArray]=useState([]);
    const [deptno,setDeptno]=useState("")
    const [dname,setDname]=useState("")
    const [loc,setLoc]=useState("")
    useEffect(()=>{
        deptService.getAllDepts().then((res)=>{
            setDeptArray(res.data)
        })
    },[])
    let resultArray=deptArray.map((item)=>{
        return (
            <tr>
                <td>{item.deptno}</td>
                <td>{item.dname}</td>
                <td>{item.loc}</td>
                <td>
                    <a href="#" onClick={()=>{
                        handleRemoveDept(item.deptno)
                     }}>DELETE</a>
                </td>
                <td>
                    <a href="#" onClick={()=>{
                        handleSelectDept(item.deptno)
                    }}>SELECT</a>
                </td>
            </tr>
        )
    })
    function handleRemoveDept(id){
        
    }
    function handleSelectDept(id){

    }
    function handleAddDept(){

    }
    function handleUpdateDept(){

    }
    function cleaTextFields(){

    }
    return (
        <div>
            <h3>CRUD Operation on JSON Server -- using Axios</h3>
            <hr/>
            <input readOnly={true} type="text" value={deptno} placeholder="Deptno"  
            onChange={(event) => setDeptno(event.target.value)}/>
            <input type="text" value={dname} placeholder="Dname"  
            onChange={(event) => setDname(event.target.value)}/>
            <input type="text" value={loc} placeholder="Loc"  
            onChange={(event) => setLoc(event.target.value)}/>
            <br/> <br/>
            <input type="button"  onClick={handleAddDept} value="Add Dept"/>
            <input type="button"  onClick={handleUpdateDept} value="Update Dept"/>
            <hr/>
            <table border="2" width="500">
                <tr>
                    <th>Dept Number</th>
                    <th>Dept Name</th>
                    <th>Dept Loc</th> 
                </tr>
                {resultArray}
            </table>
        </div>
    )
}