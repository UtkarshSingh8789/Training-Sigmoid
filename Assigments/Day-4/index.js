// Task :    	Delayed Message using Callback
 

// 	-   Create a function showMessage(message, callback).
// 	-   Print the message after 2 seconds using setTimeout
// 	-  Then call the callback

// Sample Usage:				
// 			showMessage("Loading...", function () {
// 			  console.log("Finished!");
// 			});

// QUESTION-1

function showMessage(message,callback){
    setTimeout(()=>{
        console.log(message);
        callback();
    },2000)
}
showMessage("Loading...",()=>{
    console.log("Finished")
})
showMessage("Hello");


// QUESTION-2;

function ProcessArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        console.log(callback(arr[i]));
    }
}
function callback(val){
    return val*val
}
ProcessArray([1,2,3,4,5],callback)

// QUESTION-3;

// Limited Counter  
 
// 		-  Create a function limitedCounter(limit).
// 		-  Increments a counter each time it is called
// 		-  Stops incrementing after reaching the limit
// 		-  Prints "Limit Reached" after that

function limitedCounter(limit){
    let count=0;
    function increment(){
        if(count<limit){
            count++;
            console.log(count);
        }
        else{
            console.log("Limit reached");
            return;
        }
    }
    return increment;
}
let val=limitedCounter(5)
val()
val()
val()
val()
val()
val()

// 4.    Create a web page to implement the following requirement.  Use closures concept to implement.
 
//  Task :  Simple Logger

// 	-   Create a function logger()
// 	-    It should return a function that:
// 						Accepts a message
// 						Stores all messages in a private array
// 						Prints all previous messages every time


function logger(){
    let arr=[""]
    return (message)=>{
        for(let i=0;i<arr.length;i++){
            console.log(arr[i])
        }
        arr.push(message)
    }
}
let a=logger()
a("how")
a("are")
a("you")
a("Utkarsh ?")


