import { connection } from "../database.js";
const storeTeachInfo = (request, response) => {
  const teachInfo = request.body;
  const { email, password, confirmPassword } = teachInfo;
  console.log("in routes");
//   console.log(teachInfo);
  connection.connect((err) => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("MySQL connected...");
  });
  const checkQuery = `select * from teacherInfo where email="${email}"`;
  connection.query(checkQuery, function (err, result) {
    if (err) {
      console.log(err);
      response
        .status(600)
        .json({ code: 600, message: "Internal server error" });
    } else {
      if (result.length == 0) {
        const insertQuery = `insert into teacherInfo values("${email}","${password}")`;
        connection.query(insertQuery, function (err) {
          if (err) {
            console.log(err);
            response
              .status(500)
              .json({ code: 500, message: "Internal server error" });
          } else {
            console.log("user registered");
            response
              .status(200)
              .json({ code: 200, message: "User registered successfully" });
          }
        });
      } else {
        console.log("user already registered");
        response
          .status(300)
          .json({ code: 300, message: "User already registered" });
      }
    }
  });
};
export { storeTeachInfo };
