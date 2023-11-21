addTrainer=()=>{
    
    let count=JSON.parse(localStorage.getItem("count"));
    count++;
    let id =count;
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let age=document.getElementById("age").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let type="trainer";

    // for validations

    let firstNameError=document.getElementById("firstNameError");
    let lastNameError=document.getElementById("lastNameError");
    let emailError=document.getElementById("emailError");
    let passwordError=document.getElementById("passwordError");
    let confirmPasswordError=document.getElementById("confirmPasswordError");

    let toCheck=[];
    
    if (!/^[A-Za-z]+$/.test(firstName)) {
        firstNameError.textContent="Only letters are allowed.";
        toCheck.push("has error");
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
        lastNameError.textContent="Only letters are allowed.";
        toCheck.push("has error");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailError.textContent= "Invalid email address.";
        toCheck.push("has error");
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/.test(password)) {
        passwordError.textContent="Password must meet the specified criteria.";
        toCheck.push("has error");
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent= "Password and confirm password do not match.";
        toCheck.push("has error");
    }

    if(toCheck.length>0)
    {
        return;
    }

    const trainer={
        id,
        firstName,
        lastName,
        email,
        password,
        age,
        type
    };


    const users=JSON.parse(localStorage.getItem("users"));
    users.push(trainer);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("count",JSON.stringify(count));
    
}


