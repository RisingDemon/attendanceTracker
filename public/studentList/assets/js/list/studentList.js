// get the table name from token in url
import {classNameSend} from '../api/studentListApi.js'
const urlParams = new URLSearchParams(window.location.search);
const tbName = urlParams.get("token");
console.log(tbName);
let classFromUrl={
    tName: tbName
};
classNameSend(classFromUrl);

// export function callByApi(abc){
//     if(abc==200){
//         alert("Attendance Submitted");
//     }
//     else{
//         alert("Cannot submit attendance more than once");
//     }
// }


