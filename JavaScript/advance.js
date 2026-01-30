// concept 

// let a=5;
// function value(){
//     console.log(a)
// }
// value()         
// setTimeout(()=>{
//     console.log("Utsav")
// },7000)
// setTimeout(()=>{
//     console.log("hello")
//     setTimeout(()=>{
//         console.log("Utkarsh")
//         setTimeout(()=>{
//             console.log("Singh")
//         },1000)
//     },1000)
// },1000)

// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer)
//         timer=setTimeout(fn,delay)
//     }
// }
// function sayHello(){
//     console.log("Hello")
// }
// let d=debounce(sayHello,1000)
// d()
// d()
// d()
// d()

// Practical example

function debounce(fn,delay){
    let timer;
    function innerFunction(query){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn(query)
        },delay)
    }
    return innerFunction
}// debounce creates a new function(innerFunction)
// that function remember timer,delay execution of fn,cancels previous execution if called again
function searchApi(query){
    console.log("Searching query: ",query)
}
const debounceSearch=debounce(searchApi,1000)
debounceSearch("u")
debounceSearch("ut")
debounceSearch("utk")
debounceSearch("utka")
debounceSearch("utkarsh")
