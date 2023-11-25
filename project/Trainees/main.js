
if(!localStorage.getItem("countForStudents"))
    {
        let count=0;
        localStorage.setItem("countForStudents",count); 
    }
document.addEventListener('DOMContentLoaded', ()=>{

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
            let taskInput=parseInt(document.getElementById("taskInput").value);
            let absent = parseInt(document.getElementById('absent').value);

            console.log(studentName);
            
            if(studentName.value === ''){
                console.log(studentName)
                alert("Please enter a valid numeric task.");
            } else if (taskInput === '') {
                console.log(taskInput)
                alert("Please enter a valid numeric task.");
            } else if (absent === '') {
                console.log(absent);
                alert("Please enter a valid numeric task.");
            } else {
                inputsStudent.style.display = 'none';
                let count=JSON.parse(localStorage.getItem("countForStudents"));
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
                    location.reload();
                }
                localStorage.setItem("countForStudents",count);
            }
        })
        
    })

    forShowingStudents=()=>{
        let tbody = document.getElementById('tbody')
        const students=JSON.parse(localStorage.getItem("students"));
        if(students){
            let user=JSON.parse(sessionStorage.getItem("liveUser"));
            for (let student of students) {
            if(student.supervisorId === user.id) {
                let tableRow=document.createElement("tr");
                tableRow.innerHTML=`<td id="studentId">${student.id}</td>
                                    <td>${student.studentName}</td>
                                    <td>${student.solvedTasks} <button class="addSolvedTask" data-id="${student.id}">+</button></td>
                                    <td class="taskNumber">${student.taskInput}</td>
                                    <td>${student.absent} <button class="addAbsencesTask" data-id="${student.id}">+</button>\</td>
                                    <td><button class="deleteStudent" data-id="${student.id}">Delete</button></td>`;
                tbody.appendChild(tableRow);  
                }
            }
        }
    }

    forShowingStudents();
   


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
    });

    let saveAddTask = document.getElementById('saveAddTask');
        saveAddTask.addEventListener('click', () => {
            let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');
            let inputAddTask = parseInt(document.getElementById("inputAddTask").value);
            
            if (!inputAddTask || isNaN(inputAddTask) ||  inputAddTask < 0) {
                alert("Please enter a valid numeric task.");
            } else {
                inputsAddTaskFeedback.style.display = 'none';
            }
    
            const students = JSON.parse(localStorage.getItem("students"));
            let user = JSON.parse(sessionStorage.getItem("liveUser"));
            if (students) {
                for (const student of students) {
                    if (student.supervisorId === user.id) {
                        student.taskInput +=inputAddTask;
                    }
                }
                localStorage.setItem("students",JSON.stringify(students));
            }
            location.reload();

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

    });

    let saveAddFeedback = document.getElementById('saveAddFeedback');
        saveAddFeedback.addEventListener('click', () => {
            let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');
            let studentsNamesSelect = document.getElementById('studentsNamesSelect').value.trim();
            console.log(studentsNamesSelect)
            if (!studentsNamesSelect) {
                alert("Please enter valid feedback.");
            } else {

                inputsAddTaskFeedback.style.display = 'none';

                let studentName = document.getElementById('namesFeedback').value;
                let user=JSON.parse(sessionStorage.getItem("liveUser"));
                let trainer=`${user.firstName} ${user.lastName}`;
                let feedBack=document.getElementById("studentsNamesSelect").value;
                let current =new Date();
                let date = current.toLocaleDateString();
                let trainerId=user.id;
                if(!localStorage.getItem("feedbacks"))
                {
                    const feedback=[{
                        studentName,
                        trainer,
                        feedBack,
                        date,
                        trainerId
                    }];
            
                    localStorage.setItem("feedbacks",JSON.stringify(feedback));
                }
                else
                {
                    const feedback={
                        studentName,
                        trainer,
                        feedBack,
                        date,
                        trainerId
                    };
                    const feedbacks=JSON.parse(localStorage.getItem("feedbacks"));
                    feedbacks.push(feedback);
                    localStorage.setItem("feedbacks",JSON.stringify(feedbacks));
                }               
            }
        });

    addSolvedTasks=(studentId)=>{
        if(students)
        {
            for (let student of students)
            {
                if(student.id===studentId){
                    student.solvedTasks+=1;
                }
            }
        }
        localStorage.setItem("students",JSON.stringify(students));
    }
        
  
    addAbsent=(studentId)=>{
        const students=JSON.parse(localStorage.getItem("students"));
        for (let student of students)
        {
            if(student.id===studentId)
            {
                student.absent+=1;
            }
        }
        localStorage.setItem("students",JSON.stringify(students));
    }
        

    deleteStudent=(studentId)=>{
        const students=JSON.parse(localStorage.getItem("students"));
        for(let i=0;;i++)
        {
            if(students[i].id===studentId)
            {
                students.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("students",JSON.stringify(students));
    }
   

    document.getElementById('tbody').addEventListener('click', function (event) {
        if (event.target.classList.contains('addSolvedTask')) {
            let studentId = parseInt(event.target.dataset.id);
    
            // Call the deleteUser function with the id
            addSolvedTasks(studentId);
    
            // Update the table to reflect the change
            location.reload();
    
            } else if (event.target.classList.contains('addAbsencesTask')) {
                let studentId =parseInt(event.target.dataset.id);
                addAbsent(studentId);
                location.reload();
                
            }
            else if(event.target.classList.contains('deleteStudent')){
                let studentId = parseInt(event.target.dataset.id);
                deleteStudent(studentId);
                location.reload();
            }
        });


   

        
        

    let namesFeedback=document.getElementById("namesFeedback");
    let trainer=JSON.parse(sessionStorage.getItem("liveUser"));
    const students=JSON.parse(localStorage.getItem("students"));
    if(students && trainer){
        for(let student of students){
        if(student.supervisorId===trainer.id){
            let option=document.createElement("option");
            option.value=`${student.studentName}`;
            option.text=`${student.studentName}`;
            namesFeedback.appendChild(option);
        }
    }
    }
    
})