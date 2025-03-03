const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Job recommendation API is running")
})
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/job_recommendation";

mongoose.connect(MONGO_URI)
    .then(() => console.log("🔥 MongoDB Connected!"))
    .catch((err) => console.log("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));