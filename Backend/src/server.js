import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config();
const app = express();

console.log(process.env.PORT);

app.use("/api/auth",authRoutes);
app.use("/api/auth",messageRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log("app is running on port : "+PORT))