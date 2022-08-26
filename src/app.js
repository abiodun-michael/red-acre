import express from "express";
import { indexRouter, transactionRouter } from "@routes";
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

/**
 * pass all router to the express instance
 */

app.use("/",indexRouter)
app.use("/transactions",transactionRouter)


export default app