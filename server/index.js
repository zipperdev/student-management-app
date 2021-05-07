import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routers/student.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGODB_URL;

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use("/students", studentRoutes);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`✅ Everything Is Great : ${PORT}`)))
    .catch((error) => console.log(error.message));