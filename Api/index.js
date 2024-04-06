import express from "express";
import postRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js"
import cors from "cors";
import cookieParser from "cookie-parser";
const app= express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);
app.use(cookieParser());

const port=8800;
app.listen(port,()=>{
    console.log("server");
})
