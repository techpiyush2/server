const constants = require('./constants')

module.exports = catchAsync = (fn) => {
  return (req, res, next) =>
    fn(req, res, next).catch((error) => {

        console.log(`===================== SERVER ERROR !! =====================`)
        console.log(error)

      if (error.isJoi) {
        res.json({
          code: constants.statusCode.unAuth,
          message: error.details[0].message,
        })
      } else if (error.name == 'ValidationError') {
        res.json({
          code: constants.statusCode.unAuth,
          message: constants.messages.validationError,
          error: error
        })
      } else {
        res.json({
          code: constants.statusCode.internalServerError,
          message: constants.messages.internalError,
          error: error
        })
      }
    })
}
