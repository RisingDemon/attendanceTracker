import express from "express";
import {studInfoRoutes} from "./routes/studentRegistration/studentRegister.js";
import {classCheckRoutes} from "./routes/teachersDashboard/classCheck.js";
import{getStudents} from "./routes/getStudentForClass/getStudent.js";
import{submitAttendance} from "./routes/submitDaysAttendance/submitAttendance.js";
import{getCalenderData} from "./routes/calendarViewData/calendarViewData.js";
import{getRollNo} from "./routes/getRollNo/getRollNo.js";
import{getAttendance} from "./routes/attendance.js";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/api/studInfo", studInfoRoutes);
app.post("/teachersDashboard/teacher", classCheckRoutes);
app.post("/getStudentlist/student", getStudents);
app.post("/submitStudentlist/roll", submitAttendance);
app.post("/api/calendar", getCalenderData);
app.post("/api/getRoll", getRollNo);
app.post("/downloadAtt/attendance", getAttendance);