import { getTeacherLoginDetails } from './api/loginDetailsApi.js';
import { getStudentLoginDetails } from './api/loginStudent.js';

const teacherClick= document.querySelector('.teachClick');
const studentClick= document.querySelector('.studClick');
const teachForm= document.querySelector('#teach');
const studForm= document.querySelector('#stud');
const btn= document.querySelector('#submitBtn');
let bool= true;

teacherClick.addEventListener('click', function(){
    bool= true;
    if(teachForm.style.display === 'none' && studForm.style.display === 'block'){
        // console.log("in if statement");
        studForm.style.display = 'none';
        teachForm.style.display = 'block';
    }
});
studentClick.addEventListener('click', function(){
    bool= false;
    if(teachForm.style.display === 'block' && studForm.style.display === 'none'){
        // console.log("in if statement");
        teachForm.style.display = 'none';
        studForm.style.display = 'block';
    }
});

console.log(btn);
btn.addEventListener("click", (e) => {
    // console.log(teachForm.style.display)
    console.log("in submit");
    e.preventDefault();
    if(bool === true){
        const teachEmail= document.querySelector('#teachEmail').value;
        const teachPass= document.querySelector('#teachPassword').value;
        let teachData= {
            email: teachEmail,
            password: teachPass
        };

        getTeacherLoginDetails(teachData);
    }
    else if(bool === false){
        const studPRN= document.querySelector('#studPRN').value;
        let studData= {
            prn: studPRN
        };
        getStudentLoginDetails(studData);
    }
});
