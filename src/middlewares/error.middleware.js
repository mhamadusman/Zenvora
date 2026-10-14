import { HTTP_STATUS } from "../constants/statusCodes.js"
import { ERROR_MESSAGES } from "../constants/errorMessages.js"
import Exception from "../helpers/exception.js"
const errorHandler = (err, req, res, next) => {
  console.log("actual error is :: ", err)
  if (err instanceof Exception) {
    return res.status(err.statusCode).json({
      message: err.baseMessage,
      ...(Array.isArray(err.errors) && err.errors.length > 0 && {
        errors: err.errors
      })
    })
  }
  return res
    .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    .json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR })
}
export default errorHandler