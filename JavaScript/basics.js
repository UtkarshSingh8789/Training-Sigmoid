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

// PROMISE:

// before Promise there is the problem of call back hell ;
// let supppose we want to fetch user and if user is fetched then we have to fetch order and if order is fetched then we have to feth the orders payment;

// getUser(id, (user) => {
//   getOrders(user, (orders) => {
//     getPayment(orders, (payment) => {
//       console.log(payment);
//     });
//   });
// }); // call back hell -> difficult to read,write and maintain

// So we introduce the concept called promise;

// A Promise is an object that represents a future value

// Not the value
// Not the function
// 👉 A container for future result

const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data is ready")
    },2000)
    
})

promise.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

// getUser(id, (user) => {
//   getOrders(user, (orders) => {
//     getPayment(orders, (payment) => {
//       console.log(payment);
//     });
//   });
// }); now avoid this call back hell using Promise;

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Fetched")
            resolve({id,name:"Utkarsh"})
        },2000)
    })
}
function getOrder(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order Fetched")
            resolve(["Order1","Order2"])
        },2000)
    })
}
function getPayment(orders) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment processed");
      resolve("Payment Successful");
    }, 1000);
  });
}

getUser(1).then((user)=>{
    getOrder(user)
}).then((order)=>{
    getPayment(order)
}).then((result)=>{
    console.log(result)
}).then((err)=>{
    console.log(err)
})

function getUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json());
}
function getOrder(user){
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .then(response => response.json());
}
function getPayment(orders) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Payment done for ${orders.length} orders`);
    }, 1000);
  });
}
getUser(1)
  .then(user => {
    console.log("User:", user.name);
    return getOrders(user);   // IMPORTANT: return Promise
  })
  .then(orders => {
    console.log("Orders count:", orders.length);
    return getPayment(orders);
  })
  .then(paymentStatus => {
    console.log(paymentStatus);
  })
  .catch(error => {
    console.error("Error:", error);
  });








