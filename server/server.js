require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("connected to mongoDB"));

app.use("/api/calendar", require("./Controllers/CalenderController"));

app.listen(5000, () => console.log("server started"));