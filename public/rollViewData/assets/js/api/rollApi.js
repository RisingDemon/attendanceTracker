async function getRoll(classInfo) {
    const arg = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classInfo)
    };
    try {
        console.log('sending');
        const response = await fetch('/api/getRoll', arg);
        const result = await response.json();
        // const result2=JSON.parse(result);
        console.log(result);
        // print the first key of the object
        // console.log(result.data);
        // convert sting to object
        const result2=JSON.parse(result.data);
        console.log(result2);

        // console.log(result2.length);
        console.log(result2[0]);
        // check if the subject is undefined
        console.log(result2[0].subject);
        // check if result is empty
        if(result2[0].result.length==0){
            alert("No student found");
            console.log('empty');
        }
        console.log((result2[0].result).length);
        console.log(typeof(result2[0].result[0].roll));
        console.log(result2[0].result[0].roll);
        const keyVAlue = Object.keys(result2[0].result[0]);
        // print the key values of index greater than 6
        for(let i=0;i<keyVAlue.length;i++){
            if(i>6){
                console.log(keyVAlue[i]);
            }
        }
        console.log(keyVAlue);
        let elementContainer = document.getElementById('paste');
        if (result.code === 200) {
            alert('Success');
            // make backround white
            document.querySelector('#paste').style.backgroundColor = 'white';
            // make display none
            document.querySelector('#xyz').style.display = 'none';
            // create div
            const div = document.createElement('div');
            div.setAttribute('class', 'container');
            for(let i=0;i<result2.length;i++){
                const div2 = document.createElement('div');
                div2.setAttribute('class', 'divName');
                div2.innerHTML = result2[i].subject;
                const div3 = document.createElement('div');
                div3.setAttribute('class', 'col-6');
                const keyVAlue = Object.keys(result2[i].result[0]);
                // console.log(keyVAlue);
                for(let j=0;j<keyVAlue.length;j++){
                    if(j>6){
                        div3.innerHTML += keyVAlue[j];
                        div3.innerHTML += " :";
                        div3.innerHTML +=result2[i].result[0][keyVAlue[j]];
                        div3.innerHTML += "<br>";
                    }
                }
                div3.innerHTML += "<br><br>";
                div2.appendChild(div3);
                div.appendChild(div2);
                elementContainer.appendChild(div);
            }


            // window.location.href = `../studentList/?token=${classInfo.div}_${classInfo.sub}`;
        } else if (result.code === 500) {
            alert('could not create table');
        } else {
            alert('Error');
        }
    }
    catch (err) {
        console.log(err);
    }
}
export { getRoll };