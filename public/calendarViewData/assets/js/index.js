import{sendToApi} from "./api/calenderApi.js";
const date = new Date();
const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<button class="Dbtn" type="button" data-toggle="modal" data-target="#exampleModalCenter"><div class="today dateClick"  id="${i}"onclick="myFunction(this.id)">${i}</div></button>`;
    } else {
      days += `<button class="Dbtn" type="button" data-toggle="modal" data-target="#exampleModalCenter"><div class="dateClick" id="${i}" onclick="myFunction(this.id)">${i}</div></button>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

window.myFunction = myFunction;
function myFunction(clicked_id) {
  const selectElement=document.querySelector("#selDivision");
  const getDiv =selectElement.value;
  const selectElement2=document.querySelector("#selSubject");
  const getsub =selectElement2.value;
  const day =date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + clicked_id;
  // if clicked_id is 1 then it will be 01
  // if clicked_id is 10 then it will be 10
  clicked_id = clicked_id.toString().padStart(2, "0");
  console.log(clicked_id);

  console.log(day);
  console.log(getDiv);
  console.log(getsub);
  const tbName=getDiv+"_"+getsub;
  console.log(tbName);
  let dayObj = {
    dayId: day,
    tbName: tbName,
  };
  console.log(dayObj);
  sendToApi(dayObj);

//   trailFarmerData(dayObj);
}

renderCalendar();
