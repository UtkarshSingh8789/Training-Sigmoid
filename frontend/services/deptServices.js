import axios from "axios";
const base_url=`http://localhost:3500/depts/`;
function getAllDepts(){
    return axios.get(base_url)
    // note this will return Promise;
}
function getDeptById(id){
    return axios.get(base_url+id) // promise return
}
function createDept(data){
    return axios.post(base_url, data) // promise return
}
function updateDept(data){
    return axios.put(base_url+data.id,data) // promise return
}
function deleteDept(id) {
    return axios.delete(base_url+id);  // promise return
}
export const deptService={
    getAllDepts,
    getDeptById,
    createDept,
    updateDept,
    deleteDept
}