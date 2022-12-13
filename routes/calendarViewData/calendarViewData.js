import { connection } from "../../database.js";
const getCalenderData =  (request, response) => {
    const {dayId,tbName} = request.body;
    console.log("in routes");
    console.log(dayId);

    connection.connect((err) => {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }
        console.log("MySQL connected...");
      });
      
    //   const checkQuery=`select firstName, lastName, phone, prn, classs, division, roll, ${dayId} as date from ${tbName}`;
      const checkQuery=`select * from ${tbName}`;
      connection.query(checkQuery, function (err, result) {
        if (err) {
          console.log(err);
          response
            .status(500)
            .json({ code: 500, message: "Internal server error" });
        } else {
          console.log(result);
            response.status(200).json({ code: 200, message: "success",data:result });
        }
        });
    // connection.end();

};
export { getCalenderData };