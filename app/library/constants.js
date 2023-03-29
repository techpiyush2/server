exports.statusCode = {
    ok: 200,
    created : 201,
    unAuth: 401,
    failed: 1002,
    notFound: 404,
    forbidden: 403,
    validation: 400,
    paymentFail: 402,
    invalidURL: 1001,
    alreadyExist: 409,
    internalError: 1004,
    internalServerError: 500,
  };

  exports.messages = {
    uploadSuccess: "Uploaded successfully.",
    imgNotUpload: "Image not uploaded",
    internalservererror: "Internal server error",
    invalidImageFormat: "Only jpeg,png file format are allowed.",
    optionsMissing: "Internal error upload options are missing ",
    successfullyExecuted: "Upload scccessfully",
    atleastMinSize: "Document size should be greater then",
    maxSizeExceeded: "Document size should be less then",
    uploadTypeReq: "Please specify upload type",
    sizeExceeded: "Size should be less then 5mb",
    activated: "Activated successfully",
    deActivated: "De-activated successfully",
    deletedSuccessfully: "Deleted successfully",
    _idReq: "Please enter id",
    isActive: "Please enter current status",
    user_idReq: "Please enter user id",
    ExecutedSuccessfully: "Data fetch Successfully",
    noRecordFound: "No record found",
    updateSuccess: "Data updated successfully",
    imageDeleted: "Image deleted",
    appliedSuccess: "Applied successfully",
    invalidDocFormat: "Only pdf,docx,doc file format are allowed",
    delSuccess: "Deleted successfully",
    addedSuccess: "Data added successfully",
    invalidReq: "Invalid user request",
    tokenExp: "Token expire",
    tokenSuccess: "Token verified successfully",
    uploadImageReq: "Please upload image",
    passResetSuccess: "Password reset successfully",
    displayOrderReq: " Please enter display order",
  };

exports.countryMessage = {
    name : 'Name is required',
    code : 'Code is required',
    currency : 'Currency is required',
    currencyCode : 'CurrencyCode is required',
    alreadyExist : 'Country already exist',
    created : 'Country created successfully',
    updated : 'Country updated successfully',
    idRequired : 'CountryId is required',
    notExist : 'Country not exist'
}

exports.settings = {
    count: 10,
    defaultPageNo: 1,
  };
  
  