import{classInfoSend} from './api/classInfoApi';

const selectElement = document.querySelector('#sDiv');
const getDiv= selectElement.value;
const selectElement2 = document.querySelector('#sSub');
const getSub= selectElement2.value;
if(getDiv!=='Select Division' && getSub!=='Select Subject'){
    // window.location.href = '/teachersDashboard/teacher/'+getDiv+'/'+getSub;

    let classInfo={
        div:getDiv,
        sub:getSub,
    }
    console.log(classInfo);
    classInfoSend(classInfo);
}