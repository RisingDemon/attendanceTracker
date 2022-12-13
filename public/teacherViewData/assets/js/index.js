const btnClick1 = document.getElementById("button1");
btnClick1.addEventListener("click", function () {
    window.location.href=`../teachersDashboard`;
});


const btnClick2 = document.getElementById("button2");
btnClick2.addEventListener("click", function () {
    // window.location.replace(`../calendarViewData`);
    window.location.href = `../choiceToViewData`;
});