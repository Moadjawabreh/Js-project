const user=JSON.parse(sessionStorage.getItem("liveUser"));
    if(user.type==="superAdmin")
    {
    let tBody=document.getElementById("tbody");
    const feedbacks=JSON.parse(localStorage.getItem("feedbacks"));
    for (let feedback of feedbacks)
    {
        let tableRow=document.createElement("tr");
        tableRow.innerHTML=`<td>${feedback.studentName}</td>
                            <td>${feedback.trainer}</td>
                            <td>${feedback.feedBack}</td>
                            <td>${feedback.date}</td>`;
        tBody.appendChild(tableRow);  
    }
    }
    else if(user.type==="trainer")
    {
    let tBody=document.getElementById("tbody");
    const feedbacks=JSON.parse(localStorage.getItem("feedbacks"));
    for (let feedback of feedbacks)
    {
        if(feedback.trainerId===user.id)
        {
            let tableRow=document.createElement("tr");
            tableRow.innerHTML=`<td>${feedback.studentName}</td>
                                <td>${feedback.trainer}</td>
                                <td>${feedback.feedBack}</td>
                                <td>${feedback.date}</td>`;
            tBody.appendChild(tableRow);  
        }
    }
    }
    

