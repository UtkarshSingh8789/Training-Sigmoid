function addItem(){
    let item=document.getElementById("ItemInput").value;
    let li=document.createElement("li")
    li.innerText=item;
    document.getElementById("list").appendChild(li)
    document.getElementById("ItemInput").value="";
}