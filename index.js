const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const captuerRoute =require("./routes/captuerRoute")

dotenv.config()

const app = express()

connectDB();

app.use(express.json)
app.use(morgan("dev"))
app.use('/api/v1/captuer',captuerRoute)
app.get("/",(res, req)=>{
    res.send("<h1>Welcome <h1>");
})
 
const port =process.env.PORT ||4000;

app.listen(port,()=>{
    console.log (`server start on port ${port}`)

} )