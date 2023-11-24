// document.addEventListener("DOMContentLoaded",function () {

    let submit=document.getElementById("submitPrifile");

    let fnameInput=document.getElementById("firstName");
    let lnameInput=document.getElementById("lastName");
    let emailInput=document.getElementById("email");
    let passwordInput=document.getElementById("password");
    let cityInput=document.getElementById("city");
    let phoneNumberInput=document.getElementById("phoneNumber");
    let ageInput=document.getElementById("age");
    let objSession=JSON.parse(sessionStorage.getItem("liveUser"));
    let imgInput=document.getElementById("imageLogo");
    let profilePhoto=document.getElementById("profilePhoto");
    console.log(profilePhoto.value);

    fnameInput.value=objSession.firstName;
    lnameInput.value=objSession.lastName;
    emailInput.value=objSession.email;
    passwordInput.value=objSession.password;
    ageInput.value=objSession.age;
    cityInput.value=objSession.city;
    phoneNumberInput.value=objSession.phone;
    // imgInput.style.backgroundColor=url(`${objSession.image}`);



    submit.addEventListener("click",function (e) {
        e.preventDefault();
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: 'Your work has been saved',
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
          
        let objLive=JSON.parse(sessionStorage.getItem("liveUser"));
       let objL=JSON.parse(localStorage.getItem("users"))
        for (let i = 0; i < objL.length; i++) {
            if(objL[i].id===objLive.id){
                objL[i].firstName=fnameInput.value;
                objL[i].lastName=lnameInput.value;
                objL[i].age=ageInput.value;
                objL[i].email=emailInput.value;
                objL[i].password=passwordInput.value;
                localStorage.setItem("users", JSON.stringify(objL[i]));
                sessionStorage.setItem("liveUser", JSON.stringify(objL[i]));

            }
          }

       
    });

    
    
// });