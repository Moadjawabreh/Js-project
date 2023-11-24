document.addEventListener('DOMContentLoaded', () => {
    let addTrainers = document.getElementById('addTrainers')
    addTrainers.addEventListener('click', () => {
        window.open('../Register/index.html')
    })
})

/// without funvtions already downloaded
forShowingTrainers=()=>{
    let tBody=document.getElementById("tbody");
    const users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
      if(user.type==="trainers")
      {
          let tableRow=document.createElement("tr");
          tableRow.innerHTML=`<td>${user.id}</td>
                              <td>${student.firstName}${student.lastName}</td>
                              <td><button></button></td>
                              <td><button></button></td>`;
          tBody.appendChild(tableRow);  
          }       
    }
}


deleteUser=()=>{
    let userId=document.getElementById("uaerId").value;
    const users=JSON.parse(localStorage.getItem("users"));
    for(const [user,index] of users.entries())
    {
        if(user.id===userId)
        {
            user.splice(index,1);
            break;
        }
    }

    localStorage.setItem("users",JSON.stringify(users));
}

searchByName=()=>{
    let tBody=document.getElementById("forSearching");
    let name=document.getElementById("name");
    const users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
      if(user.name===name)
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
document.getElementById("forSearching").style.display="none";