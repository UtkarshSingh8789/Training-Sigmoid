function f1(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    alert("data stored in local storage")
}
window.onload=function(){
    let name_on_storage=localStorage.getItem("name")
    let email_on_storage=localStorage.getItem("email")
    console.log(name_on_storage)
    console.log(email_on_storage)
    document.getElementById("name").value=name_on_storage;
    document.getElementById("email").value=email_on_storage;
}