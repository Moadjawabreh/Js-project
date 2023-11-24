forShowingStudents=()=>{
    let tBody=document.getElementById("tbody");
    const students=JSON.parse(localStorage.getItem("students"));
    let traineerId = JSON.parse(sessionStorage.getItem('traineerId'));
    
    for (let student of students) {
        
        if (student.supervisorId === traineerId) {
            
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${student.id}</td>
                                <td>${student.name}</td>
                                <td>${student.solvedTasks} <button></button></td>
                                <td>${student.totalTasks}</td>
                                <td>${student.obsence} <button></button></td>`;
            tBody.appendChild(tableRow);  
        }
    }
}





