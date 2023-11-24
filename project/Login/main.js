const adminUser=[{
    id:1,
    firstName:"Abedelhameed",
    lastName:"Alshorafa",
    email:"m12@m12.com",
    password:"1",
    age:25,
    image:"../RMI_8333.JPG",
    city:"Irbid",
    phone:"0777848419",
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

