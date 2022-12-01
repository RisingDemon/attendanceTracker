import express from "express";
import {studInfoRoutes} from "./routes/studentRegistration/studentRegister.js";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/api/studInfo2", studInfoRoutes);