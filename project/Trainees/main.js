document.addEventListener('DOMContentLoaded', () => {
    let save = document.getElementById('save')
    let addStudent = document.getElementById('addStudent')
    let addTask = document.getElementById('addTask')
    let feedback = document.getElementById('feedback')

    addStudent.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent')
        inputsStudent.style.display = 'block'
    })

    addTask.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputs-sddTask-feedback')
        inputsStudent.style.display = 'block'
    })

    feedback.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent')
        inputsStudent.style.display = 'block'
    })


    save.addEventListener('click', () =>{
    let studentName = document.getElementById('studentName').value
    let StudentId = document.getElementById('StudentId').value
    let task = document.getElementById('task').value
    let absent = document.getElementById('absent').value
    if(studentName === ''){
        studentName = 'enter name'
        studentName.style.background = 'red'
    } else if (StudentId === ''){
        StudentId = 'enter ID'
        StudentId.style.background = 'red'
    } else if (task === '') {
        task = 'enter task'
        task.style.background = 'red'
    } else if (absent === '') {
        absent = 'enter absent'
        absent.style.background = 'red'
    }
    })
});



/// abed ///
if(!localStorage.getItem("countForStudents"))
{
    let count=0;
    localStorage.setItem("countForStudents",count); 
}


addingForStudent=()=>{
    let count=JSON.parse(localStorage.getItem("countForStudents"));
    count++;
    let id=count;
    let name=document.getElementById("name").value;
    let solvedTasks=0;
    let totalTasks=document.getElementById("tasks").value;
    let obsence=0;

    let jsonData=JSON.parse(sessionStorage.getItem("liveUser"));
    let supervisor=jsonData.firstName;
    let supervisorId=jsonData.id;// for show students
    /// validation


    if(!localStorage.getItem("students"))
    {
        const students=[{
            id,
            name,
            solvedTasks,
            totalTasks,
            obsence,
            supervisor,
            supervisorId
        }];

        localStorage.setItem("students",JSON.stringify(students));
    }
    else
    {
        const student={
            id,
            name,
            solvedTasks,
            totalTasks,
            obsence,
            supervisor,
            supervisorId
        };
        const students=JSON.parse(localStorage.getItem("students"));
        students.push(student);
        localStorage.setItem("students",JSON.stringify(students));
    }
}


forShowingStudents=()=>{
      let tBody=document.getElementById("tbody");
      const students=JSON.parse(localStorage.getItem("students"));
      let user=JSON.parse(sessionStorage.getItem("liveUser"));
      for (let student of students)
      {
        if(student.supervisorId===user.id)
        {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${student.id}</td>
                                <td>${student.name}</td>
                                <td>${student.solvedTasks} <button></button></td>
                                <td>${student.totalTasks}</td>
                                <td>${student.obsence} <button></button></td>
                                <td><button></button></td>`;
            tBody.appendChild(tableRow);  
            }       
      }
}

forAddingTasks=()=>{
    let tasks=document.getElementById("tasks").value;
    const students=JSON.parse(localStorage.getItem("students"));
    let user=JSON.parse(sessionStorage.getItem("liveUser"));
    for (let student of students)
    {
        if(student.supervisorId===user.id)
        {
            student.totalTasks+=tasks;
        }
    }
}

forAddingSolvedTasks=()=>
{
    let studentId=document.getElementById("studentId").value;
    const students=JSON.parse(localStorage.getItem("students"));
    for (let student of students)
    {
        if(student.id==studentId)
        {
            student.solvedTasks+=1;
        }
    }
}


forAddingObsence=()=>
{
    let studentId=document.getElementById("studentId").value;
    const students=JSON.parse(localStorage.getItem("students"));
    for (let student of students)
    {
        if(student.id==studentId)
        {
            student.obsence+=1;
        }
    }
}


deleteStudent=()=>{
    let studentId=document.getElementById("studentId").value;
    const students=JSON.parse(localStorage.getItem("students"));
    for(const [student,index] of students.entries())
    {
        if(student.id===studentId)
        {
            student.splice(index,1);
            break;
        }
    }

    localStorage.setItem("users",JSON.stringify(users));
}

forAddingFeedback=()=>{
    let name=document.getElementById("name").value;
    let user=JSON.parse(sessionStorage.getItem("liveUser"));
    let trainer=`${user.firstName} ${user.lastName}`;
    let feedBack=document.getElementById("feedbackInput").value;
    let date =date();

    if(!localStorage.getItem("feedbacks"))
    {
        const feedback=[{
            name,
            trainer,
            feedBack,
            date
        }];

        localStorage.setItem("feedbacks",JSON.stringify(feedback));
    }
    else
    {
        const feedback={
            name,
            trainer,
            feedBack,
            date
        };
        const feedbacks=JSON.parse(localStorage.getItem("feedbacks"));
        students.push(feedback);
        localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
    }
}

forOptions=()=>{
    let select=document.getElementById("students");
    let students=JSON.parse(localStorage.getItem("students"));
    let user=JSON.parse(sessionStorage.getItem("liveUser"));
    for(let student of students)
    {
        if(student.supervisorId===user.id)
        {
            let option=createElement("option");
            option.value=`${student.name}`;
            option.text=`${student.name}`;
            select.appendChild(option);
        }
    }
}






