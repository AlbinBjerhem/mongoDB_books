import express from "express"
import mongoose from "mongoose"
import apiRegister from "./apiRegister.js"
import { rateLimit } from 'express-rate-limit'

const server = express()

const port = 3000

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
})

server.use(limiter)

server.use(express.json())

mongoose.connect("mongodb+srv://albinbjerhem:albin12345@cluster0.79wvc3z.mongodb.net/book_API")

apiRegister(server, mongoose)

server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))