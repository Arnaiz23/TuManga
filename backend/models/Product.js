'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        unique: false,
        required: true
    },
    price: {
        type: Number,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    },
    sort_description: {
        type: String,
        unique: false,
        required: true
    },
    upload_date: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        unique: false,
        required: true
    },
    stock: {
        type: Number,
        unique: false,
        required: true
    },
    categories: {
        type: Array,
        unique: false,
        required: true
    },
    type: {
        type: String,
        unique: false,
        required: true
    },
    image: {
        type: String,
        unique: false,
        required: true
    },
    number_sales: {
        type: Number,
        unique: false,
        required: true,
        default: 0
    },
    authors: {
        type: String,
        unique: false,
        required: false
    },
    editorial: {
        type: String,
        unique: false,
        required: false
    },
    series: {
        type: String,
        unique: false,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        unique: false,
        required: true
    }]
});

module.exports = mongoose.model("Product", Product);