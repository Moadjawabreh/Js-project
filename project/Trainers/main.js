forShowingTrainers=()=>{
    let tBody=document.getElementById("tbody");
    const users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
        if(user.type==="trainer")
        {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${user.id}</td>
            <td>${user.firstName}${user.lastName}</td>
            <td><button class="students-btn" data-id="${user.id}">Students</button></td>
            <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>`;
            tBody.appendChild(tableRow);  
        }       
    }
}



document.addEventListener('DOMContentLoaded', () => {
    let addTrainers = document.getElementById('addTrainers')
    addTrainers.style.cursor = "pointer";
    let regi=document.getElementById("registraion");
    forShowingTrainers();
    addTrainers.addEventListener('click', () => {
        regi.style.display="flex";
        regi.style.position="fixed";
        regi.style.zIndex="1000"; 
        regi.style.backgroundColor="white";
        regi.style.left="80vh";
        regi.style.bottom="10vh";

        document.body.style.backgroundColor= "rgba(255, 255, 255, 0.9)"; /* Adjust the alpha value (last parameter) */

        let submitRegister = document.getElementById('submitRegister');
        submitRegister.addEventListener("click", function (event) {
            event.preventDefault();
            let count = JSON.parse(localStorage.getItem("count"));
            count++;
        
            let id = count;
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let age = document.getElementById("age").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let city = document.getElementById("city").value;
            let phone = document.getElementById("phone").value;
            let type = "trainer";
        
            // for validations
        
            let firstNameError = document.getElementById("firstNameError");
            let lastNameError = document.getElementById("lastNameError");
            let emailError = document.getElementById("emailError");
            let passwordError = document.getElementById("passwordError");
            let confirmPasswordError = document.getElementById("confirmPasswordError");
        
            let toCheck = [];
            
            if (!/^[A-Za-z]+$/.test(firstName.trim())) {
                firstNameError.textContent = "Only letters are allowed.";
                toCheck.push("has error");
            }
        
            if (!/^[A-Za-z]+$/.test(lastName.trim())) {
                lastNameError.textContent = "Only letters are allowed.";
                toCheck.push("has error");
            }
        
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
                emailError.textContent = "Invalid email address.";
                toCheck.push("has error");
            }
        
            if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/.test(password.trim())) {
                passwordError.textContent = "Password must meet the specified criteria.";
                toCheck.push("has error");
            }
        
            if (password !== confirmPassword.trim()) {
                confirmPasswordError.textContent = "Password and confirm password do not match.";
                toCheck.push("has error");
            }
        
            if (toCheck.length > 0) {
                return;
            }
        
            const trainer = {
                id,
                firstName,
                lastName,
                email,
                password,
                age,
                city,
                phone,
                type
            };
        
        
            const users = JSON.parse(localStorage.getItem("users"));
            users.push(trainer);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("count", JSON.stringify(count));
        
            window.location.href="../Trainers/index.html";
        });
        
        
        

        // window.location.href = '../Register/index.html';
    })
    
})


/// without funvtions already downloaded

deleteUser = (userId) => {
    const users = JSON.parse(localStorage.getItem("users"));
    for (let i=0;;i++) {
        if (users[i].id === userId) {
            users.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(users));
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
        let userId = parseInt(event.target.dataset.id);

        // Call the deleteUser function with the id
        deleteUser(userId);
        
        // Update the table to reflect the change
        location.reload();

        } else if (event.target.classList.contains('students-btn')) {
            let userId = event.target.dataset.id;
            sessionStorage.setItem('traineerId',userId)

            window.location.href = '../TraineesForSuperAdmin/index.html';
        }
    });

    document.getElementById('forSearching').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            let userId = parseInt(event.target.dataset.id);
    
            // Call the deleteUser function with the id
            deleteUser(userId);
            
            // Update the table to reflect the change
            location.reload();
    
            } else if (event.target.classList.contains('students-btn')) {
                let userId = event.target.dataset.id;
                sessionStorage.setItem('traineerId',userId)
    
                window.location.href = '../TraineesForSuperAdmin/index.html';
            }
        });

let isSearchResultDisplayed = false;

const searchByName = () => {
    const searchingTable = document.getElementById("forSearching");
    const inputName = document.getElementById("name");
    const searchButton = document.getElementById("searchNamebtn");
    const users = JSON.parse(localStorage.getItem("users"));

    inputName.style.display = "";
    searchButton.style.display = "";

    searchButton.addEventListener("click", function (event) {
        isSearchResultDisplayed = false;

        searchingTable.innerHTML = "";

        for (const user of users) {
            const concatName = user.firstName + " " + user.lastName;

            if (user.type === "trainer" && concatName.includes(inputName.value)) {
                const tableRow = document.createElement("tr");
                tableRow.innerHTML = `<td>${user.id}</td>
                                      <td>${concatName}</td>
                                      <td><button class="students-btn" data-id="${user.id}">Students</button></td>
                                      <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>`;

                searchingTable.appendChild(tableRow);

                isSearchResultDisplayed = true;
            }
        }

        if (!isSearchResultDisplayed) {
            Swal.fire({
                title: 'Are you sure?',
                text: 'There is no trainer with that name',
                icon: 'error',
                showCancelButton: true,
            });
        }

        document.getElementById("tbody").style.display = isSearchResultDisplayed ? "none" : "";
        searchingTable.style.display = isSearchResultDisplayed ? "" : "none";
    });
};

document.getElementById("searchByName").addEventListener("click", searchByName);
