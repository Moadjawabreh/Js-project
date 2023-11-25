let count;
document.addEventListener('DOMContentLoaded', ()=>{

    if(!localStorage.getItem("countForStudents"))
    {
        count=0;
        localStorage.setItem("countForStudents",count); 
    }

    let addStudent = document.getElementById('addStudent')
    addStudent.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent')
        let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');
        
        if(inputsStudent.style.display === 'block'){
            inputsStudent.style.display = 'none'
        } else {
            inputsStudent.style.display = 'block'
            inputsAddTaskFeedback.style.display = 'none'

        }
        let count=JSON.parse(localStorage.getItem("countForStudents"));
        let saveAddStudent = document.getElementById('saveAddStudent');
       
        saveAddStudent.addEventListener('click', () => {
            let studentName = document.getElementById("studentName").value;
            let taskInput=document.getElementById("taskInput").value;
            let absent = document.getElementById('absent').value;

            console.log(studentName);

            if(studentName === ''){
            let totalTasks = 0;
            if(studentName.value === ''){
                console.log(studentName)
                alert("Please enter a valid numeric task.");
            } else if (taskInput === '') {
                console.log(taskInput)
                alert("Please enter a valid numeric task.");
            } else if (absent === '') {
                console.log(absent)
                alert("Please enter a valid numeric task.");
            } else {
                inputsStudent.style.display = 'none'
                count+=1;
                let id=count;
                let solvedTasks=0;
                let jsonData=JSON.parse(sessionStorage.getItem("liveUser"));
                let supervisor=jsonData.firstName;
                let supervisorId=jsonData.id;
                if(!localStorage.getItem("students")){
                        const students=[{
                            id,
                            studentName,
                            solvedTasks,
                            taskInput,
                            absent,
                            supervisor,
                            supervisorId
                        }];
                    localStorage.setItem("students",JSON.stringify(students));
                    } else {
                        const student={
                        id,
                        studentName,
                        solvedTasks,
                        taskInput,
                        absent,
                        supervisor,
                        supervisorId
                    };
                    const students=JSON.parse(localStorage.getItem("students"));
                    students.push(student);
                    localStorage.setItem("students",JSON.stringify(students));
                }
            }}
        })
        
    })

    let tbody = document.getElementById('tbody')
    const students=JSON.parse(localStorage.getItem("students"));
    if(students){
        let user=JSON.parse(sessionStorage.getItem("liveUser"));
        for (let student of students) {
        if(student.supervisorId === user.id) {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td id="studentId">${student.id}</td>
                                <td>${student.studentName}</td>
                                <td class="addSolvedTask">${student.solvedTasks} <button id="addSolvedTask"><i class="fa fa-save" aria-hidden="true"></i></button></td>
                                <td class="taskNumber">${student.taskInput}</td>
                                <td>${student.absent} <button id="addAbsencesTask"><i class="fa fa-save" aria-hidden="true"></i></button>\</td>
                                <td><button id="deleteStudent"><i class="fa-solid fa-trash"></i></button></td>`;
            tbody.appendChild(tableRow);  
            }
        }
    }


    let addTask = document.getElementById('addTask');
    addTask.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent');
        let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');
        let inputsAddTask = document.getElementById('inputs-addTask');
        let inputsFeedback = document.getElementById('inputs-feedback');
    
        if (inputsAddTaskFeedback.style.display === 'none' && inputsAddTask.style.display === 'none') {
            inputsAddTaskFeedback.style.display = 'block';
            inputsAddTask.style.display = 'block';
            inputsFeedback.style.display = 'none';
            inputsStudent.style.display = 'none';
        } else {
            inputsAddTaskFeedback.style.display = 'none';
            inputsAddTask.style.display = 'none';
        }
    
        let saveAddTask = document.getElementById('saveAddTask');
        saveAddTask.addEventListener('click', () => {
            let inputAddTask = document.getElementById("inputAddTask").value.trim();
    
            if (!inputAddTask || isNaN(inputAddTask) ||  inputAddTask < 0) {
                alert("Please enter a valid numeric task.");
            } else {
                inputsAddTaskFeedback.style.display = 'none';
            }
    
            const students = JSON.parse(localStorage.getItem("students"));
            let user = JSON.parse(sessionStorage.getItem("liveUser"));
            if (students) {
                for (let student of students) {
                    if (student.supervisorId === user.id) {
                        student.totalTasks += parseInt(inputAddTask);
                    }
                }
            }
        });
    });

    let feedback = document.getElementById('feedback');
    feedback.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent');
        let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');
        let inputsFeedback = document.getElementById('inputs-feedback');
        let inputsAddTask = document.getElementById('inputs-addTask');

        if (inputsAddTaskFeedback.style.display === 'none' || inputsFeedback.style.display === 'none') {
            inputsAddTaskFeedback.style.display = 'block';
            inputsFeedback.style.display = 'block';
            inputsAddTask.style.display = 'none';
            inputsStudent.style.display = 'none';
        } else {
            inputsAddTaskFeedback.style.display = 'none';

        }

        let saveAddFeedback = document.getElementById('saveAddFeedback');
        saveAddFeedback.addEventListener('click', () => {
            let studentsNamesSelect = document.getElementById('studentsNamesSelect').value.trim();
            if (!studentsNamesSelect) {
                alert("Please enter valid feedback.");
            } else {
                inputsAddTaskFeedback.style.display = 'none';   
            }
    });
});

    let addSolvedTask = document.getElementById('addSolvedTask')
    let addAbsencesTask = document.getElementById('addAbsencesTask')
    let deleteStudent = document.getElementById('deleteStudent')

    if(addSolvedTask && addAbsencesTask){
        addSolvedTask.addEventListener('click', () => {
            let studentId=document.getElementById("studentId").value;
            
            if(students){
                for (let student of students){
                if(student.id==studentId){
                    student.solvedTasks+=1;
                }
            }
            }
        })
        addAbsencesTask.addEventListener('click', () => {
            let studentId=document.getElementById("studentId").value;
            const students=JSON.parse(localStorage.getItem("students"));
            for (let student of students)
            {
                if(student.id==studentId)
                {
                    student.absences+=1;
                }
            }
        })

        deleteStudent.addEventListener('click', () => {
            let studentId=document.getElementById("studentId").value;
            const students=JSON.parse(localStorage.getItem("students"));
            for(const [student,index] of students.entries())
            {
                if(student.id === studentId)
                {
                    student.splice(index,1);
                    break;
                }
            }
            localStorage.setItem("students",JSON.stringify(students));
        })

    }

    let namesFeedback = document.getElementById('namesFeedback')
    let studentsList = JSON.parse(localStorage.getItem("students"));
    if(studentsList){
        let trainer = JSON.parse(sessionStorage.getItem("liveUser"));
        for(let student of studentsList)
        {
            if(student.supervisorId===trainer.id)
            {
                let option=createElement("option");
                option.value=`${student.name}`;
                option.text=`${student.name}`;
                namesFeedback.appendChild(option);
            }
        }
    }
})