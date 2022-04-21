'use strict'

var Product = require('../models/Product');

var controller = {
    test: (req, res) => {
        return res.send("Hello test");
    },
    
    // --------------------- PRODUCTS ----------------------------

    newProducts: (req, res) => {
        Product.find({}, (err, products) => {}).limit(8);
    }

    // -----------------------------------------------------------
}

module.exports = controller;