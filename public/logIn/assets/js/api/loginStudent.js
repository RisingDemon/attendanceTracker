async function getStudentLoginDetails(studData) {
    console.log(studData);
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studData),
  };
  try {
    const response = await fetch("/api/studLoginData", arg);
    const result = await response.json();
    console.log(result);
    if (result.code == 200) {
      alert("Login successfully");
      window.location.href = "/rollViewData";
    } else if (result.code == 300) {
      alert("User not yet registered");
    } else {
      alert("something went wrong");
    }
  } catch (err) {
    alert("something went wrong");
    console.log(err);
  }
}

export { getStudentLoginDetails };