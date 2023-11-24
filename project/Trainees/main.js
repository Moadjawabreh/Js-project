document.addEventListener('DOMContentLoaded', ()=>{

    if(!localStorage.getItem("countForStudents"))
    {
        let count=0;
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
        let saveAddStudent = document.getElementById('saveAddStudent')
        let studentName = document.getElementById("studentName").value;
        let taskInput=document.getElementById("taskInput").value;
        let absent = document.getElementById('absent').value

        saveAddStudent.addEventListener('click', () => {
            if(studentName === ''){
            console.log('no input')
            } else if (task === '') {
                console.log('no input')
            } else if (absent === '') {
                console.log('no input')
            } else {
                count++;
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
                            totalTasks,
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
                        totalTasks,
                        absent,
                        supervisor,
                        supervisorId
                    };
                    const students=JSON.parse(localStorage.getItem("students"));
                    students.push(student);
                    localStorage.setItem("students",JSON.stringify(students));
                }
            }
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
                                <td>${student.name}</td>
                                <td class="addSolvedTask">${student.solvedTasks} <button id="addSolvedTask"><i class="fa fa-save" aria-hidden="true"></i></button></td>
                                <td class="taskNumber">${student.totalTasks}</td>
                                <td>${student.absences} <button id="addAbsencesTask"><i class="fa fa-save" aria-hidden="true"></i></button>\</td>
                                <td><button id="deleteStudent><i class="fa-solid fa-trash"></i></button></td>`;
            tbody.appendChild(tableRow);  
            }
        }
    }

    let addTask = document.getElementById('addTask')
    addTask.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent')
        let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback')
        let inputsAddTask = document.getElementById('inputs-addTask')
        let inputsFeedback = document.getElementById('inputs-feedback')
        if(inputsAddTaskFeedback.style.display === 'none' && inputsAddTask.style.display === 'none'){
            inputsAddTaskFeedback.style.display = 'block'
            inputsAddTask.style.display = 'block'
            inputsFeedback.style.display = 'none'
            inputsStudent.style.display = 'none'
        } else {
            inputsAddTaskFeedback.style.display = 'none'
            inputsAddTask.style.display = 'none'
        }
        

        let saveAddTask = document.getElementById('saveAddTask');
        saveAddTask.addEventListener('click', () => {
            let inputAddTask =document.getElementById("inputAddTask").value;
            const students=JSON.parse(localStorage.getItem("students"));
            let user=JSON.parse(sessionStorage.getItem("liveUser"));
            if(students){
                for (let student of students) {
                    if(student.supervisorId===user.id) {
                        student.totalTasks+=inputAddTask;
                    }
                }
            }
        });
    })

    let feedback = document.getElementById('feedback');
    feedback.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent')
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
            inputsFeedback.style.display = 'none';
        }

        let saveAddFeedback = document.getElementById('saveAddFeedback');
        saveAddFeedback.addEventListener('click', () => {
            
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