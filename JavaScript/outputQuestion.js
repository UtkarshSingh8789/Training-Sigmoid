// console.log('A')
// setTimeout(()=>{
//     console.log('B')
// },2000) // asynchronous hai ye bhi. -> CallBack queue
// Promise.resolve().then((val)=>{
//     console.log(val)
// }) // asynchronous hai ye -> MicroTask Queue
// console.log('D')

// var a=6
// var a=7
// console.log(a)

// function print(){

// }

// if(true){
//     var a=5;
// }
// console.log(a);

// console.log(a)
// let a=10;

// console.log(b)
// var b=10;

// const ages=[3,18,10,20]
// let val=ages.findIndex((x)=>{
//     return x==18;
// })
// console.log(val)

function printing(){
    const s="utkarsh"
    function inner(){
        console.log(s);
    }
    return inner();
}
printing()
