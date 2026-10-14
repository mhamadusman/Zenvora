import nodemailer from "nodemailer"

export const emailTransporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

const connectEmailService = async () => {
  try {
    await emailTransporter.verify()
    console.log("email connected")
  } catch (err) {
    console.log("error in connect email", err)
  }
}
export default connectEmailService
