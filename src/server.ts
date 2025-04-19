import express from "express"
import { serverConfig } from "./config";
import PingRouter from "./Routes/ping.router";

const app =express();

// const PORT: number = 3000;

app.use('/ping',PingRouter);

app.listen(serverConfig.PORT,()=>{
    console.log(`Server Running on Port  http://localhost:${serverConfig.PORT}`);
    console.log('Press Ctrl+C to Stop the server');
})