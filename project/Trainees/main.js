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


