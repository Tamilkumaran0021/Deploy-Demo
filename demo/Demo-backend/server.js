import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();
const  app = express();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors());

app.get("/",(rep,res)=>{
    const demoData = {Name: "Akask",Role:"Developer"}
    res.status(200).json(demoData);
})

app.listen(PORT,()=>{
    console.log("server is online")
})