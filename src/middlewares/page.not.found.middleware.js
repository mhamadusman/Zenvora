import { ERROR_MESSAGES } from "../constants/errorMessages.js"
import { HTTP_STATUS } from "../constants/statusCodes.js"
const pageNoteFound = (req, res, next ) => {
  console.log(ERROR_MESSAGES.RESOURCE_NOT_FOUND)
  return res.status(HTTP_STATUS.NOT_FOUND).json({
    message: ERROR_MESSAGES.RESOURCE_NOT_FOUND
  })
}
export default pageNoteFound