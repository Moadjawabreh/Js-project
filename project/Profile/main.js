document.addEventListener("DOMContentLoaded",function () {

    let submit=document.getElementById("submitPrifile");
    
    let fnameInput=document.getElementById("firstName");
    let lnameInput=document.getElementById("lastName");
    let emailInput=document.getElementById("email");
    let passwordInput=document.getElementById("password");
    let cityInput=document.getElementById("city");
    let phoneNumberInput=document.getElementById("phoneNumber");
    let age=document.getElementById("age");
    let objSession=JSON.parse(sessionStorage.getItem("liveUser"));

    fnameInput.value=objSession.firstName;
    lnameInput.value=objSession.lastName;
    emailInput.value=objSession.email;
    passwordInput.value=objSession.password;
    age.value=objSession.age;
    cityInput.value=objSession.city;
    phoneNumberInput.value=objSession.number;

    submit.addEventListener("click",function () {
        let ogjLocal=JSON.parse(localStorage.getItem(""))
    })
    
});