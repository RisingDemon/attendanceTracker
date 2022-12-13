// import{studentDetails} from '../list/studentList.js';
async function classNameSend(classFromUrl, studentDetails) {
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classFromUrl),
  };
  try {
    const response = await fetch("/getStudentlist/student", arg);
    const result = await response.json();
    console.log(result);

    if (result.code === 600) {
      // alert('could not create table');
      alert("Error fetching student");
    } else {
      let element = document.getElementById("studentList");
      for (let i = 0; i < result.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.setAttribute("id", result[i].roll);
        btn.setAttribute("onclick", "studentDetails(this.id)");
        btn.innerHTML = result[i].roll;
        element.appendChild(btn);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
let arr = [];
window.studentDetails = studentDetails;
function studentDetails(clicked_id) {
  const ele = document.getElementById(clicked_id);
  console.log(ele);
  console.log(clicked_id);
  if (arr.includes(clicked_id)) {
    ele.setAttribute("style","background-color: #ff5454");
    arr = arr.filter(function (e) {
      return e !== clicked_id;
    });
  }
  // arr.rem(clicked_id);
  else {
    ele.setAttribute("style","background-color: #3aa83a");
    arr.push(clicked_id);
  }
  console.log(arr);
}
export { classNameSend };



// sumbit the roll numbers to the api for days attendance
// import{callByApi} from '../list/studentList.js'
let submit = document.getElementById("submitBtn");
submit.addEventListener("click", function () {
    console.log("clicked");
    const urlParams = new URLSearchParams(window.location.search);
    const tbName = urlParams.get("token");
    console.log(tbName);
  console.log(arr);
  let stuArr = {
    rollArr: arr,
    tableName: tbName,
    };
  rollSend(stuArr);
});
async function rollSend(stuArr) {
    const arg = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(stuArr),
    };
    try {
        const response = await fetch("/submitStudentlist/roll", arg);
        const result = await response.json();
        console.log(result);
        if (result.code == 500) {
            // callByApi(result.code);
            alert("Cannot submit attendance more than once");
        }
        else if (result.code === 200) {
            // callByApi(result.code);
            alert("Attendance submitted");
            window.location.href = `../teachersDashboard`;
        }
    } catch (err) {
        console.log(err);
    }
}
export { rollSend };

