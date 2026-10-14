import { ERROR_MESSAGES } from "../constants/errorMessages.js"
import UserRepository from "../repositories/user.rop.js"
import Exception from "../helpers/exception.js"
import bcrypt from "bcryptjs"
import { HTTP_STATUS } from "../constants/statusCodes.js"
class UserUtil {
  static async findUserWitEmail(email) {
    const user = await UserRepository.findUserWithEmail(email)
    if (!user) {
      throw new Exception(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.EMAIL_NOT_EXIST)
    }
    return user
  }
  static async verifyCredentialsForLogin(data) {
    const user = await this.findUserWitEmail(data.email)
    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) {
      throw new Exception (HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.UNAUTHORIZED)
    }
    if (!user.isVerified) {
      throw new Exception(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.VERIFY_EMAIL)
    }
    return user
  }
}
export default UserUtil
