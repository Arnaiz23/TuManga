'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemCart = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        unique: false,
        required: false
    },
    quantity : {
        type: Number,
        min: 1,
        required: false,
        unique: false
    },
    price : {
        type: Number,
        required: false,
        unique: false
    },
    name: {
        type: String,
        required: false,
        unique: false
    },
    image : {
        type: String,
        required: false,
        unique: false
    },
    total_price: {
        type: Number,
        required: false,
        unique: false
    }
})

var Order = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    id_client: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: false
    },
    order_date: {
        type: Date,
        default: Date.now
    },
    send_date: {
        type: Date,
        unique: false
    },
    products: [ItemCart],
    /* products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
            unique: false,
            required: true
        }
    ], */
    delivery_address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
        unique: false,
        required: false
    },
    billing: {
        type: Schema.Types.ObjectId,
        ref: "Billing",
        unique: false,
        required: false
    },
    state: {
        type: String,
        unique: false,
        required: true
    },
    telephone: {
        type: Number,
        unique: false,
        required: false
    },
    total: {
        type: Number,
        required: true,
        unique: false
    }
});

module.exports = {
    Order : mongoose.model("Order", Order)
}