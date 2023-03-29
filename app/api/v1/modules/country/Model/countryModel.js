const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
    name : {type : String, required : true},
    code : {type : String, required : true},
    currency : {type : String, required : true},
    currencyCode : {type : String, required : true},
    isDeleted : {type : Boolean, default : false},
    isActive : {type : Boolean, default : true}
},{timestamps : true})

const countryModel = mongoose.model("country",countrySchema )

module.exports = countryModel
