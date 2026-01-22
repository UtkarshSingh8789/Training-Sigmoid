// // OBJECTS IN JAVASCRIPT:
// // creating an object;
const student={
    name:"Utkarsh",
    rollNo:101,
    branch:"ECE",
    study: function(){
        console.log(student.name+" is studying")
    }
}
student.study();
// // CLASSES IN JAVSCRIPT WITH CONSTRUCTOR

class Student{
    name
    roll_Number
    constructor(name,roll){
        this.name=name;
        this.roll_Number=roll
    }
    // function study(){

    // }
    study(){
        console.log(this.name+" is studying")
    }
}
const s1=new Student("Utkarsh",50)
s1.study();

// CONCEPT OF ABSTRACT CLASS IN JS;-> in JS there is no abstract or virtual keyword so to make the abstract class we simulate them;

class Account{
    constructor(owner){
        if(new.target==Account){
            throw new Error("Cannot create a object from this class")
        } 
        // new.target tells which class was directly used with new;
        this.owner=owner;// in a class this refers to the new object that is currently being created by new;
        // example of this
        // const acc = new SavingsAccount("Utkarsh", 5000);
        // this === acc
    }
    calculateInterest(){
        throw new Error("calculateInterest() must be implemented")
    }// this is a pure virtual function and it is implemented by the children of this parent;
    deposit(amount){
        throw new Error("deposit(amount) must be implemented")
    }
    getBalance(){
        throw new Error("getBalance() must be implemented")
    }
    showOwner(){
        console.log("Account holder: ",this.owner)
    }
}
class SavingsAccount extends Account {
    #balance // in js everthing is intially public to make anything private we use (#)
    constructor(owner,balance){
        super(owner) // it calls parent constructor;
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance+=amount;
    }
    getBalance(){
        return this.#balance;
    }
    calculateInterest(){
        return this.#balance * 0.04;
    }
}
const acc=new SavingsAccount("Utkarsh",1000)
acc.deposit(400)
let x=acc.getBalance()
console.log(x)
acc.showOwner()

// INHERITANCE :

class Person{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log("Welcome "+this.name)
    }
}
class Teacher extends Person {
    constructor(name,rollNo){
        super(name)
        this.rollNo=rollNo
    }
}
const s2=new Teacher("Utkarsh",101);
s2.greet()








