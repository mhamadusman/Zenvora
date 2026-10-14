import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import errorHandler from "./middlewares/error.middleware.js"
import userRoutes from "./Routes/user.routes.js"
import authRoutes from "./Routes/auth.routes.js"
import pageNoteFound from "./middlewares/page.not.found.middleware.js"
export const app = express()
const baseURL = "/api/v1"
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
  })
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(`${baseURL}/users`, userRoutes)
app.use(`${baseURL}/auth`, authRoutes)
app.use("/", pageNoteFound)
//centralized error handling;
app.use(errorHandler)
