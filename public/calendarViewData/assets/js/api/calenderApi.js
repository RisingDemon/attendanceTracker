async function sendToApi(dayobj) {
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dayobj),
  };
  try {
    const response = await fetch("/api/calendar", arg);
    const result = await response.json();
    console.log(result);
    let elementContainer = document.getElementsByClassName("container");
    let element = document.getElementById("statusStudent");
    if (result.code == 200) {
      console.log(result.data);
      const dayStatus = dayobj.dayId;
      console.log(dayobj.dayId);
      const keyVAlue = Object.keys(result.data[0]);
      // console.log(keyVAlue);
      for(let i=7;i<keyVAlue.length;i++)
      {
        if(keyVAlue[i]==dayStatus){
          console.log("found it");
          alert("Data fetched successfully");
          console.log(elementContainer);
          elementContainer[0].setAttribute("style", "display:none");
          let table = document.createElement("table");
          table.setAttribute("class", "table table-bordered");
          table.setAttribute("id", "table");
          let thead = document.createElement("thead");
          let tr = document.createElement("tr");
          let th1 = document.createElement("th");
          th1.setAttribute("scope", "col");
          th1.innerHTML = "Roll No";
          let th2 = document.createElement("th");
          th2.setAttribute("scope", "col");
          th2.innerHTML = "Name";
          let th3 = document.createElement("th");
          th3.setAttribute("scope", "col");
          th3.innerHTML = "Status";
          for (let i = 0; i < result.data.length; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = result.data[i].roll;
            let td2 = document.createElement("td");
            td2.innerHTML = result.data[i].firstName;
            let td3 = document.createElement("td");
            // get the date from result object
  
            td3.innerHTML = result.data[i][dayStatus];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
          }
          tr.appendChild(th1);
          tr.appendChild(th2);
          tr.appendChild(th3);
          thead.appendChild(tr);
          table.appendChild(thead);
          element.appendChild(table);
          break;
        }
        if(i==keyVAlue.length-1){
          alert("No data found");
          break;
        }
      }
      
    } else {
      alert("Table does not exist");
    }
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  }
}
export { sendToApi };
