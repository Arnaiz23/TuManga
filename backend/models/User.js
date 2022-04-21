'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        auto : true
    },
    name : {
        type : String,
        unique : false,
        required : false
    },
    last_name : {
        type : String,
        unique : false,
        required : false
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password_hash : {
        type : String,
        unique : false,
        required : true
    },
    register_date : {
        type : Date,
        default : Date.now
    },
    state : {
        type : String,
        unique : false,
        required : true,
        default : "Active"
    },
    billing : [
        {
            type : Schema.Types.ObjectId,
            ref : "Billing",
            unique : false,
            required : true
        }
    ],
    cart : [
        {
            type : Schema.Types.ObjectId,
            ref : "Orders",
            unique : false,
            required : true
        }
    ],
    address : [
        {
            type : Schema.Types.ObjectId,
            ref : "Address",
            unique : false,
            required : true
        }
    ],
    role : {
        type : Schema.Types.ObjectId,
        ref : "Role",
        unique : false,
        required: true
    },
    comments : {
        type : Schema.Types.ObjectId,
        ref : "Comment",
        unique: false,
        required : true
    }
});

module.exports = mongoose.model("User", User);