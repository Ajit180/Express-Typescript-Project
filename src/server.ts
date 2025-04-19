import express, { NextFunction, Request, Response } from "express"
import { Express } from "express";
import { serverConfig } from "./config";
import PingRouter from "./Routes/ping.router";
import { pingHandler } from "./controllers/ping.controllers";

const app:Express =express();

// const PORT: number = 3000;

//Middleware
const middleware1 =(req:Request,res:Response,next:NextFunction)=>{
    console.log('middleware 1 ');
    next();
}

const middleware2 =(req:Request,res:Response,next:NextFunction)=>{
    console.log('middleware 2 ');
    next();
}

//here the middleware 1 and middleware 2 execute then after the pingHandler will execute
PingRouter.get('/ping',middleware1,middleware2,pingHandler);


app.listen(serverConfig.PORT,()=>{
    console.log(`Server Running on Port  http://localhost:${serverConfig.PORT}`);
    console.log('Press Ctrl+C to Stop the server');
})