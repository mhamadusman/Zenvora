import { emailTransporter } from "../config/nodemailer.config.js"
export class EmailService {
  static async sendEmail(receiver) {
    try {
      const info = await emailTransporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: "mgjani5678@gmail.com",
        subject: "Test email",
        text: "hello"
      })
      console.log("email has sent :: ", info)
    } catch (err) {
      console.log("error in sending email :: ", err)
    }
  }
}
