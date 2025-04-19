import express from 'express'
import { pingHandler } from "../controllers/ping.controllers";

const PingRouter = express.Router();

PingRouter.get('/ping',pingHandler)

export default PingRouter