import { getDetails } from "./form/form.js";
import { getDetailsTeacher } from "./form/form.js";

let bool = true;
const btnClick = document.getElementById("submitBtn");
const finalSubmit = document.querySelector(".studLoginForm");
var check = true;

finalSubmit.addEventListener("submit", (e) => {
  if(bool){
  e.preventDefault();
  alert("Button clicked");
  getDetails();
  }
  else{
    // check if password and confirm password are same
    let pass = document.getElementById("teachPassword").value;
    let cpass = document.getElementById("teachConfirmPassword").value;
    if(pass != cpass){
      alert("Password and Confirm Password are not same");
      return;
    }
    else{
      e.preventDefault();
      alert("Button clicked");
      getDetailsTeacher();
    }
  }
});

btnClick.addEventListener("mouseenter", function () {
  console.log("Button clicked");
  let getName = document.getElementById("fnameIp").value;
  let getLname = document.getElementById("lnameIp").value;
  if (bool) {
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
  }
});

const studSIgnup = document.querySelector("#noneId");
const teachSIgnup = document.querySelector("#teachSignup");
const teachBtn = document.querySelector(".btn2");
const studBtn = document.querySelector(".btn1");

teachBtn.addEventListener("click", function () {
  bool = false;
  console.log("teach clicked");
  setRequired(false);
  console.log(teachSIgnup);
  if (
    teachSIgnup.style.display === "none" &&
    studSIgnup.style.display === "block"
  ) {
    teachSIgnup.style.display = "block";
    studSIgnup.style.display = "none";
  }
});
studBtn.addEventListener("click", function () {
  bool = true;
  console.log("stud clicked");
  if (
    teachSIgnup.style.display === "block" &&
    studSIgnup.style.display === "none"
  ) {
    teachSIgnup.style.display = "none";
    studSIgnup.style.display = "block";
  }
});

function setRequired(val){
  let input = document.getElementById("noneId").getElementsByTagName('input');
  let input2=document.getElementById("noneId").getElementsByTagName('select');
  for(let i = 0; i < input.length; i++){
      input[i].required = val;
  }
  for(let i = 0; i < input2.length; i++){
      input2[i].required = val;
  }
}