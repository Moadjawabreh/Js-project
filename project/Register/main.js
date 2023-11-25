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
});

