import express from 'express'
import { pingHandler } from "../controllers/ping.controllers";

const PingRouter = express.Router();

PingRouter.get('/',pingHandler)

export default PingRouter