'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Role = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        auto : true
    },
    name : {
        type : String,
        required : true,
        unique : false
    }
});

module.exports = mongoose.model("Role", Role);