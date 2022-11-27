import { connection } from "../../database.js";
const studInfoRoutes = (request, response) => {
  const studInfo = request.body;
  const {
    name,
    lname,
    phone,
    dob,
    add,
    add2,
    city,
    state,
    pin,
    prn,
    country,
    clg,
    email,
  } = studInfo;
  console.log("in routes");
  console.log(studInfo);

  const checkQuery = `select * from studentinfo where prn="${prn}"`;
  connection.query(checkQuery, function (err, result) {
    if (err) {
      console.log(err);
      response
        .status(500)
        .json({ code: 600, message: "Internal server error" });
    } else {
      if (result.length == 0) {
        const insertQuery = `insert into studentinfo(firstName,lastName,phone,DOB,address1,city,state,pin,prn,counrty,college,email) values("${name}","${lname}","${phone}","${dob}","${add}","${city}","${state}","${pin}","${prn}","${country}","${clg}","${email}")`;
        connection.query(insertQuery, function (err) {
          if (err) {
            console.log(err);
            response
              .status(500)
              .json({ code: 500, message: "Internal server error" });
          } else {
            response
              .status(200)
              .json({ code: 200, message: "User registered successfully" });
          }
        });
      } else {
        response
          .status(300)
          .json({ code: 300, message: "User already registered" });
      }
    }
  });
};
export { studInfoRoutes };
