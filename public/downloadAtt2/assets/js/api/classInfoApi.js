async function classInfoSend(classInfo) {
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classInfo),
  };
  try {
    console.log("sending");
    const response = await fetch("/downloadAtt/attendance", arg);
    const result = await response.json();
    console.log(result);
    // check if result is empty
    if (result.code === 200) {
      alert("Success");
      let elementContainer = document.getElementById("container");
        // make button visible
        document.querySelector("#hidebtn").style.display ="block";
      // make backround white
      document.querySelector("#container").style.backgroundColor = "white";
      // make display none
      document.querySelector("#xyz").style.display = "none";
      const keyVAlue = Object.keys(result.result[0]);
      console.log(keyVAlue);
      let table = document.createElement("table");
      let thead = document.createElement("thead");
      let tr = document.createElement("tr");
      let thFN = document.createElement("th");
      thFN.setAttribute("scope", "col");
      thFN.innerHTML = "First Name";
      let thLN = document.createElement("th");
      thLN.setAttribute("scope", "col");
      thLN.innerHTML = "Last Name";
      let thRoll = document.createElement("th");
      thRoll.setAttribute("scope", "col");
      thRoll.innerHTML = "Roll No";
      table.appendChild(thead);
      thead.appendChild(tr);
      tr.appendChild(thFN);
      tr.appendChild(thLN);
      tr.appendChild(thRoll);
      //   th0.setAttribute("scope", "col");
      for (let i = 0; i < keyVAlue.length; i++) {
        if (i > 6) {
          let th4 = document.createElement("th");
          th4.setAttribute("scope", "col");
          th4.innerHTML = keyVAlue[i];
          tr.appendChild(th4);
        }
      }
      for (let i = 0; i < result.result.length; i++) {
        let tr = document.createElement("tr");
        let tdFN = document.createElement("td");
        tdFN.innerHTML = result.result[i].firstName;
        let tdLN = document.createElement("td");
        tdLN.innerHTML = result.result[i].lastName;
        let tdRoll = document.createElement("td");
        tdRoll.innerHTML = result.result[i].roll;
        tr.appendChild(tdFN);
        tr.appendChild(tdLN);
        tr.appendChild(tdRoll);
        for (let j = 0; j < keyVAlue.length; j++) {
          if (j > 6) {
            let td4 = document.createElement("td");
            td4.setAttribute("scope", "col");
            td4.innerHTML = result.result[i][keyVAlue[j]];
            tr.appendChild(td4);
          }
        }
        table.appendChild(tr);
      }

      elementContainer.appendChild(table);

      var doc = new jsPDF();
        var specialElementHandlers = {
          "#editor": function (element, renderer) {
            return true;
          },
        };
        $("#cmd").click(function () {
          doc.fromHTML($("#container").html(), 15, 15, {
            width: 1000,
            elementHandlers: specialElementHandlers,
          });
          doc.save("sample-file.pdf");
        });

        $("#print").click(function () {
          //Hide all other elements other than printarea.
          $("#container-data").show();
          window.print();
      });

      // window.location.href=`../studentList/?token=${classInfo.div}_${classInfo.sub}`;
    } else if (result.code === 500) {
      alert("could not read data");
    } else {
      alert("Error");
    }
  } catch (err) {
    console.log(err);
    alert("Error");
  }
}
export { classInfoSend };
