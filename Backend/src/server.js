import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config();
const app = express();
const _dirname = path.resolve();

console.log(process.env.PORT);

app.use("/api/auth",authRoutes);
app.use("/api/auth",messageRoutes);

//make ready for deployment
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../chatify/dist")))

    app.get("*",(_, res)=>{
        res.sendFile(path.join(_dirname, "../chatify","dist","index.html"));
    })
}


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log("app is running on port : "+PORT))