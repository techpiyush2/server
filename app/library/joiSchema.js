const Joi = require('joi')
const constants = require('./constants');


exports.countryValidation = Joi.object({
    name: Joi.string().required().messages({ 'any.required': `${constants.countryMessage.name}` }),
    code: Joi.string().required().messages({ 'any.required': `${constants.countryMessage.code}` }),
    currency: Joi.string().required().messages({ 'any.required': `${constants.countryMessage.currency}` }),
    currencyCode: Joi.string().required().messages({ 'any.required': `${constants.countryMessage.currencyCode}` })
})
