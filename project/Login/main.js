const adminUser=[{
    id:1,
    firstName:"Abedelhameed",
    lastName:"Alshorafa",
    email:"m12@m12.com",
    password:"1",
    age:25,
    type:"superAdmin"
}]

if(!localStorage.getItem("users"))
{   
    const JsonData=JSON.stringify(adminUser);
    localStorage.setItem("users",JsonData);
}


if(!localStorage.getItem("count"))
{
    let count=1;
    localStorage.setItem("count",count);
}
forLogin=()=>{
    // for testing

    let email=document.getElementById("emailLog").value;
    let password =document.getElementById("passwordLog").value;

    // for displaying

    // let homePageSuper=document.getElementById("home");//
    // let homePageTrainer=document.getElementById("home");
    // let loginPage=document.getElementById("login");
    
    // validation if you need 

    
    // let form=document.getElementById("formLog");


    let formLog=document.getElementById("formLog")

    const users=JSON.parse(localStorage.getItem("users"));
    for(const user of users)
    {
        if(user.email===email && user.password === password)
        {
            sessionStorage.setItem("liveUser",JSON.stringify(user));
            if(user.type==="superAdmin")
            {
                formLog.action="../Home/index.html";
            }
            if(user.type==="trainer")
            {
                formLog.action="../Home/index.html";
            }
            break;
        }
        else
        { 
            let userNotFound=document.getElementById("userNotFound");
            userNotFound.style.display="";
        }
    }
}

let forgetPassword = document.getElementById("ForgetPassword");
let inputEmail = document.getElementById("emailLog");
let users = JSON.parse(localStorage.getItem("users"));

forgetPassword.addEventListener("click", function () {
    for (let i = 0; i < users.length; i++) { 
        if (inputEmail.value === users[i].email) { // Compare inputEmail.value with users[i].email
            Swal.fire(`Password for ${users[i].email}: ${users[i].password}`);
            return;
        }
    }
    Swal.fire("Email not found in the user list");
});


