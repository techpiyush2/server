const catchAsync = require("../../../../library/catchAsync"),
  { Response } = require("../../../../library/response"),
  constants = require("../../../../library/constants");

 module.exports = (Model) =>
  catchAsync(async (req, res) => {
    if (!req.body.id)
      return res.json(
        Response(constants.statusCode.unAuth, constants.messages._idReq)
      );

    if (typeof req.body.isActive !== "boolean")
      return res.json(
        Response(constants.statusCode.unAuth, constants.messages.isActive)
      );

    const condition = { _id: req.body.id };
    const updateData = { isActive: req.body.isActive };

    const finalResult = await Model.findByIdAndUpdate(
      condition,
      updateData
    );
      
    const msg = req.body.isActive
      ? constants.messages.activated
      : constants.messages.deActivated;

    if (finalResult)
      return res.json(Response(constants.statusCode.ok, msg, finalResult));
    else
      return res.json(
        Response(constants.statusCode.ok, constants.messages.noRecordFound)
      );
  });
