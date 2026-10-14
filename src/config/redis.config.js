import { createClient } from "redis"

const redisClient = createClient(process.env.REDIS_URL)
redisClient.on("error", (error) => {
  console.log(error)
})

export const connectRedis = async () => {
  await redisClient.connect()
  console.log("redis connected")
}
export default redisClient
