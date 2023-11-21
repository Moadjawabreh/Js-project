// aadding=()=>{
//     let count=JSON.parse(localStorage.getItem("count"));
//     count++;
//     let id =count;
//     let firstName=document.getElementById("firstName").value;
//     let lastName=document.getElementById("lastName").value;
//     let email=document.getElementById("email").value;
//     let supervisor;
//     let password=document.getElementById("password").value;
//     let age=document.getElementById("age").value;
//     let type=document.getElementById("type").value;
//     if(type=== "student")
//     {
//         let userForS=JSON.parse(localStorage.getItem("liveUser"));
//         supervisor=`${userForS.firstName} ${userForS.lastName}`;
//     }
//     let feedback="";

//     /// validation 

//     const student={
//         id,
//         firstName,
//         lastName,
//         email,
//         supervisor,
//         password,
//         age,
//         feedback,
//         type
//     };


//     const users=JSON.parse(localStorage.getItem("users"));
//     users.push(student);
//     localStorage.setItem("users",JSON.stringify(users));
//     localStorage.setItem("count",JSON.stringify(count));
    
// }