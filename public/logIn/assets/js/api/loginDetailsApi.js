async function getTeacherLoginDetails(teachData) {
    // console.log(teachData);
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teachData),
  };
  try {
    const response = await fetch("/api/teachLoginData", arg);
    const result = await response.json();
    console.log(result);
    if (result.code == 200) {
      alert("Login successful");
      window.location.href = "/teacherViewData";
    } else if (result.code == 300) {
      alert("User not yet registered");
    } else if(result.code == 400) {
      alert("Password incorrect");
    }
    else {
      alert("something went wrong");
    }
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  }
}



export { getTeacherLoginDetails };
