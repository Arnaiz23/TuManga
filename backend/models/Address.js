'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Address = new Schema({
    _id : {
        type : Schema.Types.ObjectId,
        auto : true
    },
    user_id : {
        type: Schema.Types.ObjectId,
        ref : "User",
        required : true,
        unique : false
    },
    name : {
        type : String,
        unique : false,
        required: true
    },
    number : {
        type : Number,
        required : false,
        unique : false
    },
    floor : {
        type : Number,
        required : false,
        unique : false
    },
    name_person : {
        type : String,
        required : true,
        unique : false
    },
    location : {
        type : String,
        unique : false,
        required : true
    }
});

module.exports = mongoose.model("Address", Address);