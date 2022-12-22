async function teachInfoApi(teachInfo) {
    // console.log(teachInfo);
    const arg = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teachInfo),
    };
    try {
      const response = await fetch("/api/teachInfo", arg);
      const result = await response.json();
      console.log(result);
      if (result.code == 200) {
        alert("Data inserted successfully");
      }
      else if(result.code==300){
        alert("User already registered");
      }
      else {
        alert("Data insertion failed");
      }
    } catch (err) {
      alert("something went wrong");
      console.log(err);
    }
  }
  export { teachInfoApi };
  