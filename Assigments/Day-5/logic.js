let students=[];
    function addStudent(){
        let id=document.getElementById("studentID").value
        let name=document.getElementById("studentName").value
        let skills=document.getElementById("skillSet").value
        let student={
            id:id,
            name:name,
            skills:skills
        };
        students.push(student)
        // table me bhi push krna hai humlog ko 
        let tableBody=document.getElementById("studentTableBody")
        let tablerow=tableBody.insertRow()
        let cell1=tablerow.insertCell(0)
        let cell2=tablerow.insertCell(1)
        let cell3=tablerow.insertCell(2)
        cell1.innerHTML=student.id
        cell2.innerHTML=student.name
        cell3.innerHTML=student.skills
        console.log(student) // debugging
        document.getElementById("studentID").value = "";
        document.getElementById("studentName").value = "";
        document.getElementById("skillSet").value = "";
    }