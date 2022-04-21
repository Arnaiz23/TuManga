'use strict'

var Product = require('../models/Product');
var Address = require('../models/Address');
var Billing = require('../models/Billing');
var Comment = require('../models/Comment');
var Order = require('../models/Order');
var Role = require('../models/Role');
var User = require('../models/User');

var validator = require('validator');

var controller = {
    test: (req, res) => {
        return res.send("Hello test");
    },

    // * --------------------- PRODUCTS ----------------------------

    getNewProducts: (req, res) => {
        Product.find({ state: "new" }, (err, products) => {

            if (err) {
                // ! ErrorHandler
            }

            if (!products || products.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Sorry!!! Products not found!!!"
                });
            }

            return res.status(200).send({
                status: "success",
                products
            });

        }).limit(8);
    },
    newProduct: (req, res) => {
        const newProduct = req.body;

        const state = ["new", "old"];
        const numberValid = /^[0-9]+$/;
        const categories = ["cyberpunk", "ecchi", "furry", "gekiga", "gore", "harem", "harem inverso", "hentai", "isekai", "kemono", "maho shojo", "mecha", "meitantei", "realidad virtual", "yuri", "yaoi", "spokon", "shota", "lolicon"];
        const type = ["manga", "novela ligera", "merchandising"];


        // * ------------------- VALIDATES ----------------------------

        try {

            var validateName = !validator.isEmpty(newProduct.name);
            var validatePrice = numberValid.test(newProduct.price);
            var validateDescription = !validator.isEmpty(newProduct.description);
            var validateShortDescription = !validator.isEmpty(newProduct.short_description);
            var validateState = (!validator.isEmpty(newProduct.state) && state.includes(newProduct.state));
            var validateStock = numberValid.test(newProduct.stock);

        } catch (error) {
            return res.send("Data not found")
        }

        var validateCategories = newProduct.categories.map(categorie => {
            if (categories.includes(categorie)) {
                return true
            } else {
                return false
            }
        });

        var validateCategories2 = !validateCategories.includes(false);

        var validateType = type.includes(newProduct.type);

        var validateSales = numberValid.test(newProduct.number_sales)

        // console.log(validateCategories2);


        // * ------------------------------------------------------------------

        if (validateName && validateDescription && validateShortDescription && validateState && validatePrice && validateStock && validateCategories2 && validateType && validateSales) {

            let newProductScheme = new Product();
            newProductScheme.name = newProduct.name;
            newProductScheme.price = newProduct.price;
            newProductScheme.description = newProduct.description;
            newProductScheme.short_description = newProduct.short_description;
            newProductScheme.state = newProduct.state;
            newProductScheme.stock = newProduct.stock;
            newProductScheme.categories = newProduct.categories;
            newProductScheme.type = newProduct.type;
            newProductScheme.number_sales = newProduct.number_sales;
            newProductScheme.authors = newProduct.authors;
            newProductScheme.editorial = newProduct.editorial;
            newProductScheme.series = newProduct.series;
            newProductScheme.comments = newProduct.comments;

            if (newProduct.image) {
                newProductScheme.image = newProduct.image;
            }/* else{
                newProductScheme.image = null;
            } */

            console.log(newProductScheme);

            newProductScheme.save((err, productStore) => {

                if (err || !productStore) {
                    console.log(err);
                    //  ! ErrorHandler
                    return res.status(500).send({
                        status: "error",
                        message: "The product has not been saved"
                    });
                }

                return res.status(201).send({
                    status: "success",
                    message: "The product has been save correctly"
                })

            });

        } else {

            return res.status(404).send({
                status: "Error",
                message: "Data not valid"
            });

        }

    },
    getMangas: (req, res) => {

        const { limit, skip } = req.params;

        Product.find({
            "$or": [
                { "type": "manga" },
                { "type": "novela ligera" }
            ]
        }, (err, mangas) => {

            if (err) {
                // ! ErrorHandler
            }

            if (!mangas || mangas.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Mangas not found"
                });
            }

            return res.status(200).send({
                status: "success",
                mangas
            });

        }).limit(limit).skip(skip);

    },
    getMerchandising: (req, res) => {

        const { limit, skip } = req.params;

        Product.find({type: "merchandising" }, (err, merchandising) => {

            if (err) {
                // ! Errorhandler
            }

            if (!merchandising || merchandising.length == 0) {

                return res.status(404).send({
                    status: "error",
                    message: "Products don't have merchandising"
                });

            }

            return res.status(200).send({
                status: "success",
                merchandising
            });

        }).limit(limit).skip(skip);

    },
    getAllProducts : (req, res) => {

        Product.find((err, products) => {

            if(err){
                // ! Errorhandler
            }

            if(!products || products.length == 0){
                return res.status(404).send({
                    status: "error",
                    message : "No products"
                })
            }

            return res.status(200).send({
                status: "success",
                products
            })
            
        });
        
    },
    getProduct: (req, res) => {
        const { id } = req.params;

        Product.findById(id, (err, product) => {
            
            if(err){
                // ! ErrorHandler
            }

            if(!product){
                return res.status(404).send({
                    status: "error",
                    message: "This product not exists"
                });
            }

            return res.status(200).send({
                status: "success",
                product
            })

        })
    }

    // * -----------------------------------------------------------
}

module.exports = controller;