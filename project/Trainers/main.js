document.addEventListener('DOMContentLoaded', () => {
    let addTrainers = document.getElementById('addTrainers')
    addTrainers.style.cursor = "pointer";
    addTrainers.addEventListener('click', () => {
        window.location.href = '../Register/index.html';
    })
})

// Load trainers
forShowingTrainers();

/// without funvtions already downloaded
forShowingTrainers=()=>{
    let tBody=document.getElementById("tbody");
    const users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
        if(user.type==="trainers")
        {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${user.id}</td>
            <td>${student.firstName}${student.lastName}</td>
            <td><button class="students-btn" data-id="${user.id}">Students</button></td>
            <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>`;
            tBody.appendChild(tableRow);  
        }       
    }
}

deleteUser = (userId) => {
    const users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            users.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(users));
}

searchByName=()=>{
    let tBody=document.getElementById("forSearching");
    let name=document.getElementById("name");
    const users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
        if(user.name===name)
        {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${user.id}</td>
            <td>${student.firstName}${student.lastName}</td>
            <td><button></button></td>
            <td><button></button></td>`;
            tBody.appendChild(tableRow);  
        }       
    }
    document.getElementById("tbody").style.display="none";
    document.getElementById("forSearching").style.display="";
}

searchById=()=>{
    let tBody=document.getElementById("forSearching");
    let id=document.getElementById("id");
    const users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
        if(user.id===id)
        {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${user.id}</td>
            <td>${student.firstName}${student.lastName}</td>
            <td><button></button></td>
            <td><button></button></td>`;
            tBody.appendChild(tableRow);  
        }       
    }
    document.getElementById("tbody").style.display="none";
    document.getElementById("forSearching").style.display="";
}

document.getElementById("tbody").style.display="";
document.getElementById("forSearching").style.display = "none";


document.getElementById('tbody').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let userId = event.target.dataset.id;

        // Call the deleteUser function with the id
        deleteUser(userId);

        // Update the table to reflect the change
        forShowingTrainers();

        } else if (event.target.classList.contains('students-btn')) {
            let userId = event.target.dataset.id;
            sessionStorage.setItem('traineerId',userId)

            window.location.href = '../TraineesForSuperAdmin/index.html';
        }
    });