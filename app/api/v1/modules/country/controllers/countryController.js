const Country = require("../Model/countryModel");
const { Response, InternalError } = require('../../../../../library/response')
const { countryValidation } = require('../../../../../library/joiSchema')
const catchAsync = require('../../../../../library/catchAsync')
const constants = require('../../../../../library/constants');
const changeStatus = require('../../factory/changeStatus')
const softDelete = require('../../factory/softDelete')

exports.addCountry = catchAsync(async (req, res) => {
     console.log(req.body);
     const { name, code, currency, currencyCode } = req.body;
     let validateObj = await countryValidation.validateAsync({ name, code, currency, currencyCode });
     const existCountry = await Country.findOne({ name, isDeleted : false })
     if (existCountry) {
          return res.json(Response(constants.statusCode.alreadyExist, constants.countryMessage.alreadyExist))
     }
     
     const resultData = await Country.create(validateObj);

     if (resultData) {
          return res.json(Response(constants.statusCode.created, constants.countryMessage.created, resultData))
     } else return res.json(Response(InternalError()))
});

exports.updateCountry = catchAsync(async (req, res) => {
     let { countryId, name, code, currency, currencyCode } = req.body;
     if (!countryId) return res.json(Response(constants.statusCode.unAuth, constants.countryMessage.idRequired))

     let validateObj = await countryValidation.validateAsync({ name, code, currency, currencyCode });


     const existCountry = await Country.findById(countryId)

     if (!existCountry) {
          return res.json(Response(constants.statusCode.notFound, constants.countryMessage.notExist))
     }

     const resultData = await Country.findByIdAndUpdate({ _id: countryId }, validateObj, { new: true });

     if (resultData) {
          return res.json(Response(constants.statusCode.ok, constants.countryMessage.updated, resultData))
     } else return res.json(Response(InternalError()))
});

exports.listCountry = catchAsync(async (req, res) => {
     const count = req.body.count ? req.body.count : constants.settings.count;
     const page = req.body.page ? req.body.page : constants.settings.defaultPageNo;

     const skip = count * (page - 1);

     let condition = {};

     if ('isActive' in req.body) {
          condition.isActive = req.body.isActive
     } else {
          condition.isActive = true
     }

     if ('isDeleted' in req.body) {
          condition.isDeleted = req.body.isDeleted
     } else {
          condition.isDeleted = false
     }

     if (req.body.searchText) {
          const searchText = decodeURIComponent(req.body.searchText).replace(
               /[[\]{}()*+?,\\^$|#\s]/g,
               "\\s+"
          );

          condition.$or = [
               { name: new RegExp(searchText, "gi") },
          ];
     }

     const data = await Country.aggregate([
          { $match: condition },
          {
               $facet: {
                    totalCount: [{ $count: "sum" }],
                    aggregatedData: [
                         {
                              $project: {
                                   name: "$name",
                                   code: "$code",
                                   currency: "$currency",
                                   currencyCode: "$currencyCode",
                                   type: "$type",
                                   isDeleted: "$isDeleted",
                                   isActive: "$isActive"
                              },
                         },
                         { $limit: parseInt(skip) + parseInt(count) },
                         { $skip: parseInt(skip) },
                    ],
               },
          },
     ]);
         console.log(data[0].aggregatedData);
     if (data[0].aggregatedData.length) {
          return res.json(Response(constants.statusCode.ok, constants.messages.ExecutedSuccessfully, data[0].aggregatedData, data[0].totalCount[0].sum))
     } else return res.json(
          Response(
               constants.statusCode.ok,
               constants.messages.noRecordFound,
               [],
               data[0].totalCount.length
          ))
});

exports.countryDetail = catchAsync(async (req, res) => {
     const { countryId } = req.body;

     if (!countryId) {
          return res.json(Response(constants.statusCode.unAuth, constants.countryMessage.idRequired))
     }

     const resultData = await Country.findById(countryId);

     if (resultData) {
          return res.json(Response(constants.statusCode.ok, constants.countryMessage.ExecutedSuccessfully, resultData))
     } else return res.json(Response(InternalError()))
});

exports.changeStatus = changeStatus(Country)

exports.delete = softDelete(Country)