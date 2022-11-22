import express from "express";
import {studInfoRoutes} from "./routes/studentRegistration/studentRegister.js";


const app = express();
app.use(express.static("public"));
app.use(express.json());
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/api/studInfo", studInfoRoutes);