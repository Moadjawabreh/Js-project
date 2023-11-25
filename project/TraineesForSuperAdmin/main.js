forShowingStudents=()=>
{
    let tBody=document.getElementById("tbody");
    const students=JSON.parse(localStorage.getItem("students"));
    let trainerId = JSON.parse(sessionStorage.getItem('traineerId'));
    
    for (let student of students) {
        
        if (student.supervisorId === trainerId) {
            
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${student.id}</td>
                                <td>${student.studentName}</td>
                                <td>${student.solvedTasks} <button></button></td>
                                <td>${student.taskInput}</td>
                                <td>${student.absent} <button></button></td>`;
            tBody.appendChild(tableRow);  
        }
    }
}

forShowingStudents();





