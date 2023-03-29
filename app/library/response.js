const constants = require('./constants');

exports.Response = (code, message, data, totalCount) => {
    let response = {};
    response.code = code;
    response.messages = message;
    response.data = data;
    if (totalCount === 0 || totalCount) response.totalCount = totalCount;
    return response;
}

exports.InternalError = (error) => {

    let resultObj = {
        code: constants.statusCode.internalServerError,
        message: constants.messages.internalError,
        error: error
    }
    return resultObj
}

