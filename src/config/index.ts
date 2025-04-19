//This file contains all the configartion logic for all the app server work

import dotenv from "dotenv"

type ServerConfig={
    PORT:number
};

function loadEnv(){
    dotenv.config();
    console.log("Environment variable is loaded");
}

loadEnv();

export const serverConfig:ServerConfig ={
    PORT:Number(process.env.PORT) || 3001
}