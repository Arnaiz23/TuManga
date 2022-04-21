'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Billing = new Schema({
    _id : {
        type : Schema.Types.ObjectId,
        auto : true
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
        unique : false
    },
    card_name : {
        type : String,
        required : true,
        unique : false
    },
    expiration_date : {
        type : Date,
        required : true,
        unique : false
    },
    last_4_digits : {
        type : Number,
        unique : false,
        required : true
    },
    encrypt_card : {
        type: String,
        unique : false,
        required: true
    }
});

module.exports = mongoose.model("Billing", Billing);