'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
    _id : {
        type: Schema.Types.ObjectId,
        auto : true
    },
    id_client : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
        unique : false
    },
    name_client : {
        type : String,
        required : true,
        unique : false
    },
    order_date : {
        type : Date,
        default : Date.now
    },
    send_date : {
        type : Date,
        unique : false
    },
    products : [
        {
            type : Schema.Types.ObjectId,
            ref : "Product",
            unique : false,
            required : true
        }
    ],
    delivery_address : {
        type : Schema.Types.ObjectId,
        ref : "Address",
        unique : false,
        required : true
    },
    billing : {
        type : Schema.Types.ObjectId,
        ref : "Billing",
        unique : false,
        required : true
    },
    state : {
        type : String,
        unique : false,
        required : true
    },
    telephone : {
        type : Number,
        unique : false,
        required : true
    }
});

module.exports = mongoose.model("Order", Order);