import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authroute from "./Routes/auth.js";

const app = express();
dotenv.config();
app.use(cors());



app.use("/auth", authroute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

ConnectDB().then(()=>{
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT} `);
    })
  }).catch((error)=>{
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  })
  