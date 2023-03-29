const catchAsync = require("../../../../library/catchAsync"),
  { Response } = require("../../../../library/response"),
  constants = require("../../../../library/constants");

 module.exports = (Model) =>
  catchAsync(async (req, res) => {
    if (!req.body.id)
      return res.json(
        Response(constants.statusCode.unAuth, constants.messages._idReq)
      );

    const condition = { _id: req.body.id };
    const updateData = { isDeleted: true};

    const finalResult = await Model.findByIdAndUpdate(
      condition,
      updateData
    );
      
    if (finalResult)
      return res.json(Response(constants.statusCode.ok, constants.messages.deletedSuccessfully, finalResult));
    else
      return res.json(
        Response(constants.statusCode.ok, constants.messages.noRecordFound)
      );
  });
