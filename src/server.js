import dotenv from "dotenv"
dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`
})
import { app } from "./app.js"
import { ERROR_MESSAGES } from "./constants/errorMessages.js"
import { connectDB } from "./config/database.config.js"
import { SUCCESS_MESSAGES } from "./constants/successMessages.js"
import { connectRedis } from "./config/redis.config.js"
import connectEmailService from "./config/nodemailer.config.js"
const PORT = process.env.PORT
if (!PORT) {
  throw Error(ERROR_MESSAGES.SERVER_PORT_IS_MISSING)
}
const runServer = async () => {
  await connectRedis()
  await connectDB()
  app.listen(PORT, () => {
    console.log(`${SUCCESS_MESSAGES.SERVER_IS_RUNNING} on PORT :: ${PORT}`)
  })
  await connectEmailService()
}
runServer()
