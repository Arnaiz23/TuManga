'use strict'

var Product = require('../models/Product');
var Address = require('../models/Address');
var Billing = require('../models/Billing');
var Comment = require('../models/Comment');
var Order = require('../models/Order');
var Role = require('../models/Role');
var User = require('../models/User');

var validator = require('validator');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

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
        const categories = ["cyberpunk", "ecchi", "furry", "gekiga", "gore", "harem", "harem inverso", "hentai", "isekai", "kemono", "maho shojo", "mecha", "meitantei", "realidad virtual", "yuri", "yaoi", "spokon", "shota", "lolicon", "nendoroid", "funko"];
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
            return res.status(400).send({
                status: "error",
                message: "Data not found"
            })
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

        Product.find({ type: "merchandising" }, (err, merchandising) => {

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
    getAllProducts: (req, res) => {

        Product.find((err, products) => {

            if (err) {
                // ! Errorhandler
            }

            if (!products || products.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "No products"
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

            if (err) {
                // ! ErrorHandler
            }

            if (!product) {
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
    },

    // * -----------------------------------------------------------

    // * --------------------- SEARCH ----------------------------

    searchProducts: (req, res) => {

        const { search } = req.params;

        // $or -> anyone option
        // $regex -> string to search
        // $options $i -> insensitive upper and lower
        Product.find({
            "$or": [
                { "name": { "$regex": search, "$options": "i" } },
                { "description": { "$regex": search, "$options": "i" } },
                { "short_description": { "$regex": search, "$options": "i" } },
                { "authors": { "$regex": search, "$options": "i" } },
                { "editorial": { "$regex": search, "$options": "i" } },
                { "series": { "$regex": search, "$options": "i" } },
            ]
        }, (err, searchProducts) => {

            if (err) {
                // ! ErrorHandler
            }

            if (!searchProducts || searchProducts.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Doesn't exists products with this terms"
                })
            }

            return res.status(200).send({
                status: "success",
                searchProducts
            })

        })

    },

    // * -----------------------------------------------------------

    // * --------------------- SORT ----------------------------

    sortManga: (req, res) => {

        const { option, limit, skip } = req.params;

        const optionParts = option.split("=");

        if (optionParts[0] == "price") {
            Product.find({
                "$or": [
                    { "type": "manga" },
                    { "type": "novela ligera" }
                ]
            }, (err, products) => {

                if (err) {
                    // ! ErrorHAndler
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Mangas not found"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip).sort({ price: optionParts[1] });
        } else if (optionParts[0] == "state") {
            Product.find({
                "$or": [
                    { "type": "manga" },
                    { "type": "novela ligera" }
                ], state: "new"
            }, (err, products) => {

                if (err) {
                    // ! ErrorHAndler
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Mangas not found"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip);
        } else if (optionParts[0] == "sales") {
            Product.find({
                "$or": [
                    { "type": "manga" },
                    { "type": "novela ligera" }
                ]
            }, (err, products) => {

                if (err) {
                    // ! ErrorHAndler
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Mangas not found"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip).sort({ number_sales: "desc" });
        }

    },

    sortMerchandising: (req, res) => {

        const { option, limit, skip } = req.params;

        const optionParts = option.split("=");

        if (optionParts[0] == "price") {
            Product.find({ type: "merchandising" }, (err, products) => {

                if (err) {
                    // ! ErrorHAndler
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Mangas not found"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip).sort({ price: optionParts[1] });
        } else if (optionParts[0] == "state") {
            Product.find({ type: "merchandising", state: "new" }, (err, products) => {

                if (err) {
                    // ! ErrorHAndler
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Mangas not found"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip);
        } else if (optionParts[0] == "sales") {
            Product.find({ type: "merchandising" }, (err, products) => {

                if (err) {
                    // ! ErrorHAndler
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Mangas not found"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip).sort({ number_sales: "desc" });
        }

    },

    // * -----------------------------------------------------------

    // * ----------------------- FILTER ----------------------------

    filterProduct: (req, res) => {

        let { type, option, limit, skip } = req.params;

        let data;

        if (type === "novela") {
            type = "novela ligera"
        } else if (type != "novela" || type != "manga" || type != "merchandising") {
            return res.status(404).send({
                status: "error",
                message: "Route not found"
            });
        }

        if (option != "null") {
            Product.find({
                type: type, categories: { "$in": option }
            }, (err, products) => {

                if (err) {
                    // ! ErrorHandle
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Products not found"
                    })
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip);
        } else {
            Product.find({
                type: type
            }, (err, products) => {

                if (err) {
                    // ! ErrorHandle
                }

                if (!products || products.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "Products not found"
                    })
                }

                return res.status(200).send({
                    status: "success",
                    products
                })

            }).limit(limit).skip(skip);
        }

    },

    // * -----------------------------------------------------------

    // * ----------------------- USER ------------------------------

    createUser: async (req, res) => {

        let { email, password, confirm_password } = req.body;

        const regexp = /^[a-zA-Z0-9\*\/\$\^\Ç]{6,16}$/;

        try {

            var validateEmail = (validator.isEmail(email) && !validator.isEmpty(email));
            var validatePassword = (!validator.isEmpty(password) && regexp.test(password));
            var validateConfirmPassword = (!validator.isEmpty(confirm_password) && regexp.test(confirm_password));

        } catch (error) {
            return res.status(400).send({
                status: "error",
                message: "Data empty"
            });
        }

        if (validateEmail && validatePassword && validateConfirmPassword) {

            if (password === confirm_password) {

                let user = new User();

                user.email = email;

                const passwordHash = await User.encrypt(password);

                user.password_hash = passwordHash;

                if (req.body.roles) {
                    const foundRoles = await Role.find({ name: { $in: roles } });
                    user.role = foundRoles.map(role => role._id);
                } else {
                    const role = await Role.findOne({ name: "usuario" });
                    user.role = role._id;
                }

                // res.send(user)

                user.save(async (err, newUser) => {

                    if (err || !newUser) {
                        return res.status(500).send({
                            status: "error",
                            message: "The user has not been saved"
                        })
                    }

                    const payload = {
                        id: newUser._id,
                        email: newUser.email,
                        register_date: newUser.register_date
                    }

                    const token = await jwt.sign(payload, config.JWT_key, { expiresIn: 60 * 60 * 24 });

                    return res.status(201).send({
                        status: "success",
                        message: "The user has been save correctly",
                        token
                    });

                });

            } else {
                return res.status(400).send({
                    status: "error",
                    message: "The password don't match"
                })
            }

        } else {
            return res.status(400).send({
                status: "error",
                message: "Data invalid"
            });
        }

    },

    getAllUsers: (req, res) => {
        User.find((err, users) => {

            if (err) {
                // ! ErrorHandler
            }

            if (!users || users.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Not found users"
                });
            }

            return res.status(200).send({
                status: "success",
                users
            })

        })
    },

    getUser: async (req, res) => {

        let token = req.get('authorization');
        token = token.split(" ");

        try {
            var user = await jwt.decode(token[1]);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Token error"
            })
        }

        User.findById(user.id, (err, userFind) => {

            if (err || !userFind) {
                return res.status(404).send({
                    status: "error",
                    message: "User not found"
                })
            }

            return res.status(200).send({
                status: "success",
                userFind
            })

        });

    },

    changeUserState: async (req, res) => {

        let token = req.get('authorization');
        token = token.split(" ");

        try {
            var user = await jwt.decode(token[1]);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Token error"
            })
        }

        let userOld = await User.findById(user.id);

        let newState = "";

        if (userOld.state === "Active") {
            newState = "Disable"
        } else {
            newState = "Active"
        }

        User.findByIdAndUpdate(userOld.id, { state: newState }, { new: true }, (err, userUpdate) => {
            if (err || !userUpdate) {
                return res.status(404).send({
                    status: "error",
                    message: "User not found"
                })
            }

            return res.status(200).send({
                status: "success",
                userUpdate
            })
        })

    },

    login: async (req, res) => {

        let { email, password, remember } = req.body;

        const regexPassword = /^[a-zA-Z0-9\*\$\%\&\^\Ç]{6,16}$/;
        let validatePassword, validateEmail;

        try {
            validatePassword = regexPassword.test(password);
            validateEmail = (!validator.isEmpty(email) && validator.isEmail(email));
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Data not found"
            })
        }

        if(validateEmail && validatePassword){

            let user = await User.findOne({email: email});

            let passwordAccept = await User.comparePasswords(password,user.password_hash);

            // ! If accepted, create token
            

        }else{
            return res.status(404).send({
                status: "error",
                message: "Data invalid"
            })
        }
        
    },

    // * -----------------------------------------------------------

    // * ----------------------- ORDERS ----------------------------

    createOrder: (req, res) => {

        const order = req.body;

        res.send(order)

    },

    updateOrder: (req, res) => {

    },

    getOrder: async (req, res) => {



    },

    getOrderProccess: async (req, res) => {

        let token = req.get('Authorization');
        token = token.split(" ");

        try {
            var user = await jwt.decode(token[1]);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Token invalid"
            })
        }

        let userFind = await User.findById(user.id);

        if (userFind.cart.length != 0) {

        } else {
            return res.status(404).send({
                status: "error",
                message: "This user has no orders"
            })
        }

    },

    getAllOrders: (req, res) => {

    },

    // * -----------------------------------------------------------
    // * ----------------------- CARD ----------------------------

    createCard: async (req, res) => {

        let data = req.body;

        let token = req.get('Authorization');
        token = token.split(" ");

        try {
            var user = jwt.decode(token[1]);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Token invalid"
            });
        }

        let userFind = await User.findById(user.id);

        const regexNumber = /^[0-9]{16}$/;

        try {
            var validateName = !validator.isEmpty(data.card_name);
            var validateDate = !validator.isEmpty(data.expiration_date);
            var validateNumber = (regexNumber.test(data.number_card) || !validator.isEmpty(data.number_card));
        } catch (error) {
            return res.status(400).send({
                status: "error",
                message: "Data not found"
            })
        }

        if (validateName && validateDate && validateNumber) {

            let newCard = new Billing();

            let card_hash = await User.encrypt(data.number_card);

            let cardSplit = data.expiration_date.split("/");
            let newDate = `20${cardSplit[1]}-${cardSplit[0]}-01`;
            newDate = new Date(newDate);


            newCard.user_id = userFind._id;
            newCard.card_name = data.card_name;
            newCard.last_4_digits = data.number_card.slice(12, 16);
            newCard.encrypt_card = card_hash;
            newCard.expiration_date = newDate;

            newCard.save((err, card) => {

                if (err || !card) {
                    res.status(500).send({
                        status: "error",
                        message: "The card has not been saved"
                    })
                }

                let cards = userFind.billing;
                cards.push(card._id);

                User.findByIdAndUpdate(userFind._id, { billing: cards }, { new: true }, (err, user) => {

                    if (err, !user) {
                        return res.status(404).send({
                            status: "error",
                            message: "The card not add in the user data"
                        })
                    }

                    return res.status(201).send({
                        status: "success",
                        message: "The card has been save correctly"
                    });

                });

            });

        } else {
            return res.status(404).send({
                status: "Error",
                message: "Data not valid"
            });
        }

    },

    getAllCards: (req, res) => {
        Billing.find((err, cards) => {

            if (err) {
                // ! ErrorHandler
            }

            if (!cards || cards.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Cards not found"
                })
            }

            return res.status(200).send({
                status: "success",
                cards
            })

        })
    },

    getLastCards: async (req, res) => {

        let token = req.get("Authorization");
        token = token.split(" ");

        try {
            var user = await jwt.decode(token[1]);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Token not valid"
            })
        }

        let userFind = await User.findById(user.id);

        Billing.find({user_id: userFind._id}, (err, cards) => {

            return res.status(200).send({
                status: "success",
                cards
            })
            
        }).limit(2);
        
    }

    // * -----------------------------------------------------------

}

module.exports = controller;