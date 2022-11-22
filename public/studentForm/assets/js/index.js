import {getDetails} from "./form/form.js";

const btnClick = document.getElementById("submitBtn");
const finalSubmit= document.querySelector(".studLoginForm");
var check = true;

finalSubmit.addEventListener('submit', (e)=> {
  e.preventDefault();
  alert("Button clicked");
  getDetails();
})

btnClick.addEventListener("mouseenter", function () {
  console.log("Button clicked");
  let getName = document.getElementById("fnameIp").value;
  let getLname = document.getElementById("lnameIp").value;
  while (getName == "" || getLname == "") {
    if (check) {
      btnClick.setAttribute("style", "margin-left:82%;");
      console.log("float right");
      check = false;
      break;
    } else {
      btnClick.setAttribute("style", "margin-left:72%;");
      console.log("float left");
      check = true;
      break;
    }
  }
});
