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
    var image = document.createElement('img');
    
    fnameInput.value=objSession.firstName;
    lnameInput.value=objSession.lastName;
    emailInput.value=objSession.email;
    passwordInput.value=objSession.password;
    ageInput.value=objSession.age;
    cityInput.value=objSession.city;
    phoneNumberInput.value=objSession.phone;
    if(objSession.image){
        imgInput.style.backgroundImage=`url('${objSession.image}')`;
        imgInput.style.backgroundSize="cover";
        imgInput.style.backgroundPosition= "center";

    }
    // imgInput.style.backgroundColor=url(`${objSession.image}`);

    document.getElementById("profilePhoto").addEventListener("click",function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', function (event) {
            var file = event.target.files[0];

            if (file) {
                // Create a FileReader to read the file
                var reader = new FileReader();
                reader.onload = function (e){
                    // Display the image in the imageContainer div
                    
                    image.src = e.target.result;
                    imgInput.innerHTML = '';
                    imgInput.style.backgroundImage=`url('${image.src}')`;
                    imgInput.style.backgroundSize="cover";
                    imgInput.style.backgroundPosition= "center";
                    
                }
                reader.readAsDataURL(file);

            }
        
        
    });
    input.click();

    });
    submit.addEventListener("click",function (e) {
        e.preventDefault();
     
          
        let objLive=JSON.parse(sessionStorage.getItem("liveUser"));
       let objL=JSON.parse(localStorage.getItem("users"))
        for (let i = 0; i < objL.length; i++) {
            if(objL[i].id===objLive.id){

                objL[i].firstName=fnameInput.value;
                objL[i].lastName=lnameInput.value;
                objL[i].age=ageInput.value;
                objL[i].email=emailInput.value;
                objL[i].password=passwordInput.value;
                objL[i].city=cityInput.value;
                objL[i].phone=phoneNumberInput.value;
                objL[i].image=image.src;

                sessionStorage.setItem("liveUser", JSON.stringify(objL[i]));
                localStorage.setItem("users", JSON.stringify(objL));

            }
          }



    });

    
    
// });

   
