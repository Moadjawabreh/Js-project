
document.addEventListener("DOMContentLoaded",()=>{
    let tBody=document.getElementById("tbody");
    const feedbacks=JSON.parse(localStorage.getItem("feedbacks"));
    for (let feedback of feedbacks)
    {
        let tableRow=document.createElement("tr");
        tableRow.innerHTML=`<td>${feedback.name}</td>
                            <td>${feedback.trainer}</td>
                            <td>${feedback.feedback}</td>
                            <td>${feedback.date}</td>`;
        tBody.appendChild(tableRow);  
    }
})
