// SYNCHRONOUS AND ASYNCHRONOUS CONCEPT;

// SYNCHRONOUS CODE;

// console.log("Start")
// function syncFun(){
//     for(let i=0;i<3;i++){
//         console.log("Priniting..")
//     }
// }
// syncFun()
// console.log("End")

// ASYNCHRONOUS;

// console.log("Start");
// function asyncFun(){
//     console.log("hello coder");
//     setTimeout(()=>{
//         console.log("Printing")
//     },2000)
// }
// asyncFun()
// console.log("End");

// CALL BACK->A callback is a function that is passed as an argument to another function and is executed later.
function fetchDate(callback){
    console.log("Fetching data");
    setTimeout(()=>{
        const data={user:"utkarsh"}
        callback(data)
    },2000)
}
let callback=function(result){
    console.log("Recieved: ",result)
}
fetchDate(callback);

//




