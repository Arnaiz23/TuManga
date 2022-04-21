'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        auto : true
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
        unique : false
    },
    message : {
        type : String,
        required: true,
        unique : false
    },
    product_id : {
        type : Schema.Types.ObjectId,
        ref : "Product",
        required : true,
        unique : false
    },
    score : {
        type : Number,
        unique : false,
        required : true
    },
    date : {
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Comment", Comment);