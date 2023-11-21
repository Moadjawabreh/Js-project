const adminUser=[{
    id:1,
    firstName:"Abedelhameed",
    lastName:"Alshorafa",
    email:"abedelhameedalshorafa123@yahoo.com",
    password:"Abed848419",
    age:25,
    type:"superAdmin"
}]

let count=1;
localStorage.setItem("count",count);

if(!localStorage.getItem("users"))
{   
    const JsonData=JSON.stringify(adminUser);
    localStorage.setItem("users",JsonData);
}

forLogin=()=>{
    // for testing

    let email=document.getElementById("email").value;
    let password =document.getElementById("password").value;

    // for displaying

    // let homePageSuper=document.getElementById("home");//
    // let homePageTrainer=document.getElementById("home");
    // let loginPage=document.getElementById("login");
    
    // validation if you need 

    const users=JSON.parse(localStorage.getItem("users"));
    for(const user of users)
    {
        if(user.email===email && user.password === password)
        {
            localStorage.setItem("liveUser",JSON.stringify(user));
            if(user.type==="superAdmin")
            {
                window.open("G:\OrangeTasks\Js-project\project\Profile");
            }
            if(user.type==="trainer")
            {
                window.open("url");
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

