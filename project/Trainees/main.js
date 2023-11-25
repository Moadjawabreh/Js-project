document.addEventListener('DOMContentLoaded', () => {

    // Check and initialize countForStudents in localStorage
    if (!localStorage.getItem("countForStudents")) {
        let count = 0;
        localStorage.setItem("countForStudents", JSON.stringify(count));
    }

    let addStudent = document.getElementById('addStudent');
    let tbody = document.getElementById('tbody');
    let namesFeedbackSelect = document.getElementById('namesFeedback');

    addStudent.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent');
        let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');

        if (inputsStudent.style.display === 'block') {
            inputsStudent.style.display = 'none';
        } else {
            inputsStudent.style.display = 'block';
            inputsAddTaskFeedback.style.display = 'none';
        }

        let count = JSON.parse(localStorage.getItem("countForStudents"));
        let saveAddStudent = document.getElementById('saveAddStudent');
        let studentName = document.getElementById("studentName");
        let taskInput = document.getElementById("taskInput");
        let absent = document.getElementById('absent');

        saveAddStudent.addEventListener('click', () => {
            if (!studentName.value || !taskInput.value || !absent.value) {
                alert("Please enter valid information.");
            } else {
                inputsStudent.style.display = 'none';
                count++;
                let id = count;
                let solvedTasks = 0;
                let totalTasks = 0;
                let supervisor = "Supervisor"; // Assuming you set the supervisor name here
                let supervisorId = 1; // Assuming you set the supervisor ID here

                let student = {
                    id,
                    studentName: studentName.value,
                    solvedTasks,
                    totalTasks,
                    absent: absent.value,
                    supervisor,
                    supervisorId
                };

                // Retrieve existing students from localStorage or initialize an empty array
                let students = JSON.parse(localStorage.getItem("students")) || [];
                students.push(student);
                localStorage.setItem("students", JSON.stringify(students));

                // Update the count for students in localStorage
                localStorage.setItem("countForStudents", JSON.stringify(count));
            }
        });
    });

    // Load students into the table
    const students = JSON.parse(localStorage.getItem("students")) || [];
    let user = JSON.parse(sessionStorage.getItem("liveUser"));

    for (let student of students) {
        if (student.supervisorId === user.id) {
            let tableRow = document.createElement("tr");
            tableRow.innerHTML = `<td>${student.id}</td>
                                <td>${student.studentName}</td>
                                <td class="addSolvedTask">${student.solvedTasks} <button class="addSolvedTaskBtn"><i class="fa fa-save" aria-hidden="true"></i></button></td>
                                <td class="taskNumber">${student.totalTasks}</td>
                                <td>${student.absent} <button class="addAbsencesTaskBtn"><i class="fa fa-save" aria-hidden="true"></i></button></td>
                                <td><button class="deleteStudentBtn"><i class="fa-solid fa-trash"></i></button></td>`;
            tbody.appendChild(tableRow);
        }
    }

    let addTask = document.getElementById('addTask');
    addTask.addEventListener('click', () => {
        let inputsStudent = document.querySelector('.inputsStudent');
        let inputsAddTaskFeedback = document.getElementById('inputs-addTask-feedback');
        let inputsAddTask = document.getElementById('inputs-addTask');
        let inputsFeedback = document.getElementById('inputs-feedback');

        if (inputsAddTaskFeedback.style.display === 'none' || inputsAddTask.style.display === 'none') {
            inputsAddTaskFeedback.style.display = 'block';
            inputsAddTask.style.display = 'block';
            inputsFeedback.style.display = 'none';
            inputsStudent.style.display = 'none';
        } else {
            inputsAddTaskFeedback.style.display = 'none';
        }

        let saveAddTask = document.getElementById('saveAddTask');
        saveAddTask.addEventListener('click', () => {
            let inputAddTask = document.getElementById("inputAddTask").value.trim();

            if (!inputAddTask || isNaN(inputAddTask) || inputAddTask < 0) {
                alert("Please enter a valid numeric task.");
            } else {
                inputsAddTaskFeedback.style.display = 'none';

                // Update totalTasks for all students of the current supervisor
                students.forEach(student => {
                    if (student.supervisorId === user.id) {
                        student.totalTasks += parseInt(inputAddTask);
                    }
                });

                // Save updated students to localStorage
                localStorage.setItem("students", JSON.stringify(students));
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
            let feedbackText = document.getElementById('studentsNamesSelect').value.trim();

            if (!studentsNamesSelect || !feedbackText) {
                alert("Please enter valid feedback.");
            } else {
                inputsAddTaskFeedback.style.display = 'none';

                // Save feedback to localStorage
                let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
                let user = JSON.parse(sessionStorage.getItem("liveUser"));
                let trainer = `${user.firstName} ${user.lastName}`;
                let date = new Date().toLocaleDateString();

                let feedback = {
                    namesFeedback: studentsNamesSelect,
                    trainer,
                    feedbackText,
                    date
                };

                feedbacks.push(feedback);
                localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
            }
        });
    });

    // Event delegation for dynamic elements
    tbody.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('addSolvedTaskBtn')) {
            addSolvedTask(target);
        } else if (target.classList.contains('addAbsencesTaskBtn')) {
            addAbsencesTask(target);
        } else if (target.classList.contains('deleteStudentBtn')) {
            deleteStudent(target);
        }
    });

    // Function to add solved task
    function addSolvedTask(button) {
        let row = button.closest('tr');
        let studentId = row.querySelector('td').textContent;

        students.forEach(student => {
            if (student.id === parseInt(studentId)) {
                student.solvedTasks += 1;
                localStorage.setItem("students", JSON.stringify(students));
                updateTable();
            }
        });
    }

    // Function to add absences task
    function addAbsencesTask(button) {
        let row = button.closest('tr');
        let studentId = row.querySelector('td').textContent;

        students.forEach(student => {
            if (student.id === parseInt(studentId)) {
                student.absent += 1;
                localStorage.setItem("students", JSON.stringify(students));
                updateTable();
            }
        });
    }

    // Function to delete student
    function deleteStudent(button) {
        let row = button.closest('tr');
        let studentId = row.querySelector('td').textContent;

        students.forEach((student, index) => {
            if (student.id === parseInt(studentId)) {
                students.splice(index, 1);
                localStorage.setItem("students", JSON.stringify(students));
                updateTable();
            }
        });
    }

    // Update the table after modifying data
    function updateTable() {
        tbody.innerHTML = "";
        for (let student of students) {
            if (student.supervisorId === user.id) {
                let tableRow = document.createElement("tr");
                tableRow.innerHTML = `<td>${student.id}</td>
                                    <td>${student.studentName}</td>
                                    <td class="addSolvedTask">${student.solvedTasks} <button class="addSolvedTaskBtn"><i class="fa fa-save" aria-hidden="true"></i></button></td>
                                    <td class="taskNumber">${student.totalTasks}</td>
                                    <td>${student.absent} <button class="addAbsencesTaskBtn"><i class="fa fa-save" aria-hidden="true"></i></button></td>
                                    <td><button class="deleteStudentBtn"><i class="fa-solid fa-trash"></i></button></td>`;
                tbody.appendChild(tableRow);
            }
        }
    }

    // Populate namesFeedback dropdown
    for (let student of students) {
        if (student.supervisorId === user.id) {
            let option = document.createElement("option");
            option.value = student.studentName;
            option.text = student.studentName;
            namesFeedbackSelect.appendChild(option);
        }
    }
});