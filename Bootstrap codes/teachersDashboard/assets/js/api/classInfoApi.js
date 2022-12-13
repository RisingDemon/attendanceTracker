async function classInfoSend(classInfo){
    const arg ={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(classInfo)
    };
    try{
        const response = await fetch('/teachersDashboard/teacher',arg);
        const result = await response.json();
        console.log(result);
        if(result.code===200){
            alert('Success');
            window.location.href = '../rollCallList/?token=${classInfo}';
        }
        else{
            alert('Error');
        }
    }
    catch(err){
        console.log(err);
    }
}
export {classInfoSend};