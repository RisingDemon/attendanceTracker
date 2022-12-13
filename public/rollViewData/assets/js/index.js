import { getRoll } from "./api/rollApi.js";

const btn = document.querySelector("#optSel");
btn.addEventListener("click", () => {
    const selectElement = document.querySelector("#sDiv");
    const getDiv = selectElement.value;
    // const selectElement2 = document.querySelector("#sSub");
    // const getSub = selectElement2.value;
    const roll= document.querySelector("#roll").value;
  let classInfo = {
    div: getDiv,
    roll: roll,
  };
  console.log(classInfo);
  getRoll(classInfo);
});
// if(getDiv!=='Select Division' && getSub!=='Select Subject'){
//     // window.location.href = '/teachersDashboard/teacher/'+getDiv+'/'+getSub;

//     let classInfo={
//         div:getDiv,
//         sub:getSub,
//     }
//     console.log(classInfo);
//     classInfoSend(classInfo);
// }
