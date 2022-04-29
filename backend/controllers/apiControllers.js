'use strict'

var Product = require('../models/Product');
var Address = require('../models/Address');
var Billing = require('../models/Billing');
var Comment = require('../models/Comment');
var Order = require('../models/Order');
var Role = require('../models/Role');
var User = require('../models/User');

const validator = require('validator');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
const { default: mongoose } = require('mongoose');
const fs = require('fs')
var path = require("path");

const crypto = require('crypto');

let globalFunctions = require('../globalFunctions/globalFunctions');

// * --------------------- VARIABLES ----------------------

// * ------------------------------------------------------

var controller = {
    test: (req, res) => {
        return res.status(200).send("Hello test");
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
    newProduct: async (req, res) => {

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
            return res.status(404).send({
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

    getAllUsers: async (req, res) => {

        let users = await User.find({}, { password_hash: false })

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
    },

    getUser: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let role = await Role.findById(userFind.role)

        role = role.name

        userFind.role = null

        let userInfo = {
            userFind,
            roleName: role
        }

        return res.status(200).send({
            status: "success",
            userInfo
        })

    },

    changeUserState: async (req, res) => {

        let userOld = await globalFunctions.getUserToken(req, res)

        let newState = "";

        if (userOld.state === "Active") {
            newState = "Disabled"
        } else {
            newState = "Active"
        }

        User.findByIdAndUpdate(userOld.id, { state: newState }, { fields: { password_hash: false }, new: true }, (err, userUpdate) => {
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

        const regexPassword = /^[a-zA-Z0-9\*\$\%\&\^\Ç]{6,17}$/;
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

        if (validateEmail && validatePassword) {

            let user = await User.findOne({ email: email });

            let passwordAccept;

            try {
                passwordAccept = await User.comparePasswords(password, user.password_hash);
            } catch (error) {
                return res.status(404).send({
                    status: "error",
                    message: "User data invalid"
                })
            }

            // ! If accepted, create token

            if (!passwordAccept) {
                return res.status(404).send({
                    status: "error",
                    message: "User data invalid"
                })
            }

            const payload = {
                id: user._id,
                email: user.email,
                register_date: user.register_date
            }

            let rememberTime;

            if (remember) {
                rememberTime = 60 * 60 * 24 * 1;
            } else {
                rememberTime = 60 * 60 * 2;
            }

            let token = jwt.sign(payload, config.JWT_key, { expiresIn: rememberTime });

            if (user.state === "Disabled") {
                res.status(200).send({
                    status: "success",
                    token,
                    "userState": "Disabled"
                })
            } else {
                res.status(200).send({
                    status: "success",
                    token
                })
            }


        } else {
            return res.status(404).send({
                status: "error",
                message: "Data invalid"
            })
        }

    },

    updateUser: async (req, res) => {

        const body = req.body

        let userFind = await globalFunctions.getUserToken(req, res)

        // Nombre apellidos password
        if (body.name) {
            userFind.name = body.name
        }

        if (body.last_name) {
            userFind.last_name = body.last_name
        }

        if (body.password && body.confirm_password) {
            const regex = /^[a-zA-Z0-9\*\/\$\^\Ç]{6,16}$/;

            if (body.password != body.confirm_password) {
                return res.status(404).send({
                    status: "error",
                    message: "The passwords don't match"
                })
            }

            if (!regex.test(body.password)) {
                return res.status(404).send({
                    status: "error",
                    message: "The passwords do not meet the requirements"
                })
            }

            let password_hash = await globalFunctions.getPasswordHash(userFind._id)

            let userCompare = await User.comparePasswords(body.password, password_hash)

            if (userCompare) {
                return res.status(404).send({
                    status: "error",
                    message: "The old password and the new are the same"
                })
            }

            let newPassword = await User.encrypt(body.password)

            userFind.password_hash = newPassword

        }

        let userUpdate = await User.findByIdAndUpdate(userFind._id, userFind, { fields: { password_hash: false }, new: true })

        if (!userUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            userUpdate
        })

    },

    deleteUser: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let userDelete = await User.findByIdAndDelete(userFind._id)

        if (!userDelete) {
            return res.status(404).send({
                status: "error",
                message: "The user has not been deleted"
            })
        }

        let addressUser = await Address.find({ user_id: userFind._id })

        if (addressUser.length > 0) {
            addressUser.forEach(async address => {
                await Address.findByIdAndDelete(address._id)
            })
        }

        let billingAddress = await Billing.find({ user_id: userFind._id })

        if (billingAddress.length > 0) {
            billingAddress.forEach(async bill => {
                await Billing.findByIdAndDelete(bill._id)
            })
        }

        let commentsUser = await Comment.find({ user_id: userFind._id })

        if (commentsUser.length > 0) {
            commentsUser.forEach(async comment => {
                await Comment.findByIdAndDelete(comment._id)
                let product = await Product.findById(comment.product_id)
                let comments = product.comments
                let indice = comments.indexOf(comment._id)
                comments.splice(indice, 1)
                await Product.findByIdAndUpdate(comment.product_id, { comments: comments })
            })
        }

        return res.status(200).send({
            status: "success",
            userDelete
        })

    },

    // * -----------------------------------------------------------

    // * ----------------------- ORDERS ----------------------------

    createOrder: async (req, res) => {

        const { id_product } = req.body;

        let user = await globalFunctions.getUserToken(req, res)

        let orderProcess = await Order.find({ id_client: user._id, state: "P" })

        if (orderProcess.length > 0) {
            return res.status(404).send({
                status: "error",
                message: "Sorry, this user already has one order in process"
            })
        }

        let newOrder = Order();

        try {
            var validateId = !validator.isEmpty(id_product);
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Data not found"
            })
        }

        const new_id_product = mongoose.Types.ObjectId(id_product);

        let product = await Product.findById(new_id_product);

        if (!validateId || !product) {
            return res.status(404).send({
                status: "error",
                message: "Invalid ID"
            })
        }

        newOrder.products.push(new_id_product);
        newOrder.state = "P"
        newOrder.send_date = null
        newOrder.id_client = user.id
        newOrder.total = product.price

        newOrder.save((err, saveOrder) => {
            if (err || !saveOrder) {
                return res.status(500).send({
                    status: "error",
                    message: "The order has not been saved"
                })
            }

            let userCart = user.cart;
            userCart.push(saveOrder._id)

            User.findByIdAndUpdate(user._id, { cart: userCart }, { new: true }, (err, userUpdate) => {
                if (err || !userUpdate) {
                    return res.status(500).send({
                        status: "error",
                        message: "The user has not been update"
                    })
                }

                return res.status(201).send({
                    status: "success",
                    saveOrder
                })

            });


        });

    },

    addProductOrder: async (req, res) => {

        const { id_product } = req.body;

        let userFind = await globalFunctions.getUserToken(req, res)

        let order = await Order.findOne({ id_client: userFind._id, state: "P" })

        if (!order || order.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't have orders in proccess"
            })
        }

        let newProduct = await Product.findById(id_product)

        if (!newProduct) {
            return res.status(404).send({
                status: "error",
                message: "This product doesn't exists"
            })
        }

        let ordersNew = order.products;
        ordersNew.push(id_product)

        let total = order.total + newProduct.price

        let orderUpdate = await Order.findByIdAndUpdate(order._id, { products: ordersNew, total: total }, { new: true })

        if (!orderUpdate) {
            return res.status(500).send({
                status: "error",
                message: "The order has not been update"
            })
        }

        return res.status(200).send({
            status: "success",
            orderUpdate
        })
    },

    updateOrder: async (req, res) => {

        let { delivery_address, billing, telephone } = req.body;

        let userFind = await globalFunctions.getUserToken(req, res)

        let orderProcess = await Order.findOne({ id_client: userFind._id, state: "P" });

        if (!orderProcess || orderProcess.length == 0) {
            return res.status(500).send({
                status: "error",
                message: "This user doesn't have orders in process"
            })
        }

        if (!userFind.billing.includes(billing)) {
            return res.status(500).send({
                status: "error",
                message: "Billing not valid"
            })
        }

        if (!userFind.address.includes(delivery_address)) {
            return res.status(500).send({
                status: "error",
                message: "Address not valid"
            })
        }

        let sendDate = new Date();
        sendDate.setDate(sendDate.getDate() + 3)

        orderProcess.send_date = sendDate
        orderProcess.delivery_address = mongoose.Types.ObjectId(delivery_address)
        orderProcess.billing = mongoose.Types.ObjectId(billing)
        orderProcess.state = "F"
        orderProcess.telephone = telephone

        let products = orderProcess.products

        let updateProducts = async () => {
            products.forEach(async id => {
                let productFind = await Product.findById(id)

                if (!productFind) {
                    return res.status(404).send({
                        status: "error",
                        message: "This product doesn't exists"
                    })
                }

                let number_sales = productFind.number_sales + 1
                let stock = productFind.stock - 1
                let productUpdate = await Product.findByIdAndUpdate(productFind._id, { number_sales: number_sales, stock: stock }, { new: true })

                if (!productUpdate) {
                    return res.status(404).send({
                        status: "error",
                        message: "This product has not been updated"
                    })
                }
            })
        }

        await updateProducts()

        let orderUpdate = await Order.findByIdAndUpdate(orderProcess._id, orderProcess, { new: true });

        if (!orderUpdate) {
            return res.status(500).send({
                status: "error",
                message: "The order has not been updated"
            })
        }

        return res.status(200).send({
            status: "Success",
            orderUpdate
        })

    },

    getOrderCart: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let cart = await Order.findOne({ id_client: userFind._id, state: "P" })

        if (!cart) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't has a shopping cart"
            })
        }

        return res.status(200).send({
            status: "success",
            cart
        })

    },

    getOrderProccess: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        if (userFind.cart.length != 0) {
            Order.findOne({ id_client: userFind._id, state: "P" }, (err, orders) => {

                if (err) {
                    // ! Errorhandler
                }

                if (!orders || orders.length == 0) {
                    return res.status(404).send({
                        status: "error",
                        message: "This user doesn't have orders in proccess"
                    })
                }

                return res.status(200).send({
                    status: "success",
                    orders
                })
            })
        } else {
            return res.status(404).send({
                status: "error",
                message: "This user has no orders"
            })
        }

    },

    getAllOrders: async (req, res) => {

        let orders = await Order.find()

        if (!orders || orders.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "Doesn't exists orders"
            })
        }

        return res.status(200).send({
            status: "success",
            orders
        })

    },

    getUserOrders: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let orders = await Order.find({ id_client: userFind._id, state: "F" });

        if (!orders || orders.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't have orders finished"
            })
        }

        res.status(200).send({
            status: "success",
            orders
        })

    },

    updateShoppingCart: async (req, res) => {

        let { id_product } = req.body
        let userFind = await globalFunctions.getUserToken(req, res)

        let cart = await Order.findOne({ id_client: userFind._id, state: "P" })

        if (!cart) {
            return res.status(404).send({
                status: "Error",
                message: "This user doesn't has a shopping cart"
            })
        }

        let products = cart.products

        if (products.includes(id_product)) {
            let indice = products.indexOf(id_product)
            if (indice != -1) {
                products.splice(indice, 1)
            }
        }

        let orderUpdate = await Order.findByIdAndUpdate(cart._id, { products: products }, { new: true })

        if (!orderUpdate) {
            return res.status(404).send({
                status: "Error",
                message: "This order has not been updated"
            })
        }

        return res.status(200).send({
            status: "Error",
            orderUpdate
        })

    },

    getOrderId: async (req, res) => {

        // IMG product, name product, address, payment method, total order

        const id_order = req.params.id

        let userFind = await globalFunctions.getUserToken(req, res)

        if (!userFind.cart.includes(id_order)) {
            return res.status(404).send({
                status: "error",
                message: "This id not match with the user orders"
            })
        }

        let order = await Order.findById(id_order)

        if (!order) {
            return res.status(404).send({
                status: "error",
                message: "This order doesn't exists"
            })
        }

        let billing = await Billing.findById(order.billing, { _id: false, user_id: false, encrypt_card: false })

        if (!billing) {
            return res.status(404).send({
                status: "error",
                message: "This card doesn't exists"
            })
        }

        let address = await Address.findById(order.delivery_address, { _id: false, user_id: false })

        if (!address) {
            return res.status(404).send({
                status: "error",
                message: "This address doesn't exists"
            })
        }

        let searchProducts = async () => {

            let productArray = []

            for await (let product of order.products) {
                let productData = await Product.findById(product._id, { name: true, _id: false, image: true })
                productArray.push(productData)
            }

            return productArray
        }

        let products = await searchProducts()

        let data = {
            products: products,
            address: address,
            payment: billing,
            total: order.total,
            telephone: order.telephone,
            delivered_date: order.send_date
        }

        return res.status(200).send({
            status: "success",
            data
        })

    },

    // * -----------------------------------------------------------
    // * ----------------------- CARD ----------------------------

    createCard: async (req, res) => {

        let data = req.body;

        let userFind = await globalFunctions.getUserToken(req, res)

        const regexNumber = /^[0-9]{16}$/;

        const $name_card = {
            "3": "American Express",
            "4": "Visa",
            "5": "MasterCard",
            "6": "Discovery"
        }

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

            let firstNumber = data.number_card.slice(0, 1)

            if (firstNumber <= 2 || firstNumber >= 7) {
                return res.status(404).send({
                    status: "error",
                    message: "This number card is invalid"
                })
            }

            newCard.type = $name_card[firstNumber]
            newCard.image = `${firstNumber}.png`

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

                    if (err || !user) {
                        return res.status(404).send({
                            status: "error",
                            message: "The card not add in the user data"
                        })
                    }

                    card.encrypt_card = null

                    return res.status(201).send({
                        status: "success",
                        message: "The card has been save correctly",
                        card
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
        Billing.find({}, { encrypt_card: false }, (err, cards) => {

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

        let userFind = await globalFunctions.getUserToken(req, res)

        Billing.find({ user_id: userFind._id }, { encrypt_card: false }, (err, cards) => {

            return res.status(200).send({
                status: "success",
                cards
            })

        }).limit(2);

    },

    getUserCards: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let cards = await Billing.find({ id_client: userFind._id }, { encrypt_card: false });

        if (!cards || cards.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't have cards"
            })
        }

        return res.status(200).send({
            status: "success",
            cards
        })

    },

    deleteCard: async (req, res) => {

        const id_card = req.params.id;

        let userFind = await globalFunctions.getUserToken(req, res)

        let cardDelete = await Billing.findByIdAndDelete(id_card);

        if (!cardDelete) {
            return res.status(404).send({
                status: "error",
                message: "This card has not been deleted"
            })
        }

        let cards = await Billing.find({ user_id: userFind._id });

        let userUpdate = await User.findByIdAndUpdate(userFind.id, { billing: cards }, { new: true, fields: { password_hash: false } });

        if (!userUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            userUpdate,
            cards
        })
    },

    // * -----------------------------------------------------------

    // * ----------------------- ADDRESS ----------------------------

    createAddress: async (req, res) => {

        const { name, number, name_person, location, floor } = req.body;

        let userFind = await globalFunctions.getUserToken(req, res)

        let newAddress = Address({
            name,
            number,
            name_person,
            location,
            user_id: userFind._id
        })

        if (floor) {
            newAddress.floor = floor
        }

        let addressSave = await newAddress.save();

        if (!addressSave) {
            return res.status(500).send({
                status: "error",
                message: "The address has not been saved"
            })
        }

        let address = userFind.address;
        address.push(addressSave._id);

        let userUpdate = await User.findByIdAndUpdate(userFind._id, { address: address });

        if (!userUpdate) {
            return res.status(500).send({
                status: "error",
                message: "The user has not been updated "
            })
        }

        return res.status(201).send({
            status: "success",
            addressSave
        })

    },

    getUserAddress: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let address = await Address.find({ user_id: userFind._id });

        if (!address || address.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't have address"
            })
        }

        return res.status(200).send({
            status: "success",
            address
        })
    },

    deleteAddress: async (req, res) => {

        let { id } = req.params

        let userFind = await globalFunctions.getUserToken(req, res)

        try {

            let addressDelete = await Address.findByIdAndDelete(id);

            if (!addressDelete) {
                return res.status(404).send({
                    status: "error",
                    message: "This address has not been delete"
                })
            }

            let newAddress = await Address.find({ user_id: userFind._id });

            let userUpdate = await User.findByIdAndUpdate(userFind._id, { address: newAddress }, { new: true, fields: { password_hash: false } });

            if (!userUpdate) {
                return res.status(404).send({
                    status: "error",
                    message: "This user has not been updated"
                })
            }

            return res.status(200).send({
                status: "error",
                newAddress,
                userUpdate
            })

        } catch (error) {
            return res.status(500).send({
                status: "error",
                error
            })
        }

    },

    updateAddress: async (req, res) => {

        const id_address = req.params.id;
        let body = req.body;

        let userFind = await globalFunctions.getUserToken(req, res)

        let address = await Address.findById(id_address)

        if (!address) {
            return res.status(404).send({
                status: "error",
                message: "This address doesn't exists"
            })
        }

        if (body.name) {
            address.name = body.name
        }

        if (body.number) {
            address.number = body.number
        }

        if (body.floor) {
            address.floor = body.floor
        }

        if (body.name_person) {
            address.name_person = body.name_person
        }

        if (body.location) {
            address.location = body.location
        }

        let addressUpdate = await Address.findByIdAndUpdate(address._id, address, { new: true });

        if (!addressUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This address has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            addressUpdate
        })

    },

    getLastAddress: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let address = await Address.find({ user_id: userFind._id }).limit(2)

        if (!address || address.length == 0) {
            return res.status(500).send({
                status: "error",
                message: "This user doesn't exists"
            })
        }

        return res.status(200).send({
            status: "success",
            address
        })

    },

    // * -----------------------------------------------------------

    // * ----------------------- COMMENTS ----------------------------

    getCommentsProduct: async (req, res) => {

        const id_product = req.params.idProduct;

        let comments = await Comment.find({ product_id: id_product })

        if (!comments || comments.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "This product doesn't has comments"
            })
        }

        return res.status(200).send({
            status: "success",
            comments
        })

    },

    createComment: async (req, res) => {

        let { message, product_id, score } = req.body

        let userFind = await globalFunctions.getUserToken(req, res)

        let newComment = Comment({
            user_id: userFind._id,
            message,
            product_id,
            score
        })

        let commentSave = await newComment.save()

        if (!commentSave) {
            return res.status(404).send({
                status: "error",
                message: "This comment has not been saved"
            })
        }

        product_id = mongoose.Types.ObjectId(product_id)

        let productFind = await Product.findById(product_id)

        if (!productFind) {
            return res.status(404).send({
                status: "error",
                message: "This product doesn't exists"
            })
        }

        let comments = productFind.comments

        comments.push(commentSave._id)

        let commentsUser = userFind.comments
        commentsUser.push(commentSave._id)

        let userUpdate = await User.findByIdAndUpdate(userFind._id, { comments: commentsUser }, { new: true })

        if (!userUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been updated"
            })
        }

        let productUpdate = await Product.findByIdAndUpdate(product_id, { comments: comments }, { new: true })

        if (!productUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This product has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            productUpdate
        })

    },

    getUserComments: async (req, res) => {

        let userFind = await globalFunctions.getUserToken(req, res)

        let comments = await Comment.find({ user_id: userFind._id })

        if (!comments || comments.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't has comments"
            })
        }

        return res.status(200).send({
            status: "success",
            comments
        })

    },

    deleteComment: async (req, res) => {

        const comment_id = req.params.idComment;

        let userFind = await globalFunctions.getUserToken(req, res)

        let commentDelete = await Comment.findByIdAndDelete(comment_id)

        if (!commentDelete) {
            return res.status(404).send({
                status: "error",
                message: "This comment has not been deleted"
            })
        }

        let newComments = await Comment.find({ user_id: userFind._id })

        let userUpdate = await User.findByIdAndUpdate(userFind._id, { comments: newComments }, { new: true, fields: { password_hash: false } })

        let commentsProducts = await Product.findById(commentDelete.product_id)

        commentsProducts = commentsProducts.comments

        let indexComment = commentsProducts.indexOf(comment_id)

        commentsProducts.splice(indexComment, 1)

        let productUpdate = await Product.findByIdAndUpdate(commentDelete.product_id, { comments: commentsProducts }, { new: true })

        if (!productUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This product has not been updated"
            })
        }

        if (!userUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            userUpdate
        })

    },

    getAllComments: async (req, res) => {

        let comments = await Comment.find()

        if (!comments || comments.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "Doesn't exists comments"
            })
        }

        return res.status(200).send({
            status: "success",
            comments
        })

    },

    // * -----------------------------------------------------------

    // * ----------------------- ADMIN ----------------------------

    totalOrders: async (req, res) => {

        let totalOrders = await Order.find()

        totalOrders = totalOrders.length

        return res.status(200).send({
            status: "success",
            totalOrders
        })

    },

    totalUsers: async (req, res) => {

        let totalUsers = await User.find()

        totalUsers = totalUsers.length

        return res.status(200).send({
            status: "success",
            totalUsers
        })

    },

    totalEarnings: async (req, res) => {

        let totalOrders = await Order.find({ state: "F" })
        let totalEarnings = 0

        totalOrders.forEach(order => {
            totalEarnings += order.total
        })

        return res.status(200).send({
            status: "success",
            totalEarnings
        })

    },

    mostBestsellers: async (req, res) => {

        const { limit } = req.params

        let products = await Product.find().sort({ number_sales: "desc" }).limit(limit)

        if (!products || products.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "Doesn't exists products"
            })
        }

        return res.status(200).send({
            status: "success",
            products
        })

    },

    updateUserAdmin: async (req, res) => {

        const id_user = req.params.id
        const body = req.body

        let userFind = await User.findById(id_user)

        if (!userFind) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't exists"
            })
        }


        // name, last_name, email, state, role

        // ? If user is admin
        // * req.admin = true (In the middleweare admin)
        if (req.admin && body.role) {
            let newRole = await Role.findOne({ name: { $in: body.role } })

            if (!newRole) {
                return res.status(404).send({
                    status: "error",
                    message: "This role doesn't exists"
                })
            }

            userFind.role = newRole._id
        }

        if (body.name) {
            userFind.name = body.name
        }

        if (body.last_name) {
            userFind.last_name = body.last_name
        }

        if (body.email) {
            userFind.email = body.email
        }

        if (body.state) {
            userFind.email = body.email
        }

        let userUpdate = await User.findByIdAndUpdate(id_user, userFind, { new: true, fields: { password_hash: false } })

        if (!userUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            userUpdate
        })

    },

    updateProductAdmin: async (req, res) => {

        const id_product = req.params.id
        const body = req.body

        const $state = ["new", "old"];
        const $numberValid = /^[0-9]+$/;
        const $categories = ["cyberpunk", "ecchi", "furry", "gekiga", "gore", "harem", "harem inverso", "hentai", "isekai", "kemono", "maho shojo", "mecha", "meitantei", "realidad virtual", "yuri", "yaoi", "spokon", "shota", "lolicon", "nendoroid", "funko"];
        const $type = ["manga", "novela ligera", "merchandising"];

        // name price description short_description state stock categories type number_sales authors editorial series

        let productFind = await Product.findById(id_product)

        if (!productFind) {
            return res.status(404).send({
                status: "error",
                message: "This product doesn't exists"
            })
        }

        if (body.name) {
            productFind.name = body.name
        }

        if (body.price && $numberValid.test(body.price)) {
            productFind.price = body.price
        }

        if (body.description) {
            productFind.description = body.description
        }

        if (body.short_description) {
            productFind.short_description = body.short_description
        }

        if (body.state && $state.includes(body.state)) {
            productFind.state = body.state
        }

        if (body.stock && $numberValid.test(body.stock)) {
            productFind.stock = body.stock
        }

        if (body.categories) {

            let validateCategories = body.categories.map(categorie => {
                if ($categories.includes(categorie)) {
                    return true
                } else {
                    return false
                }
            });

            let validateCategories2 = !validateCategories.includes(false);

            if (validateCategories2) {
                productFind.categories = body.categories
            }
        }

        if (body.type && $type.includes(body.type)) {
            productFind.type = body.type
        }

        if (body.number_sales && $numberValid.test(body.number_sales)) {
            productFind.number_sales = body.number_sales
        }

        if (body.authors) {
            productFind.authors = body.authors
        }

        if (body.editorial) {
            productFind.editorial = body.editorial
        }

        if (body.series) {
            productFind.series = body.series
        }

        let productUpdate = await Product.findByIdAndUpdate(id_product, productFind, { new: true })

        if (!productUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This product has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            productUpdate
        })

    },

    getUserAdmin: async (req, res) => {

        const id_user = req.params.id

        let userFind = await User.findById(id_user, { password_hash: false })

        if (!userFind) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't exists"
            })
        }

        return res.status(200).send({
            status: "success",
            userFind
        })

    },

    deleteUserAdmin: async (req, res) => {

        const id_user = req.params.id

        let userDelete = await User.findByIdAndDelete(id_user)

        if (!userDelete) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been deleted"
            })
        }

        return res.status(200).send({
            status: "success",
            userDelete
        })

    },

    createUserAdmin: async (req, res) => {

        const { name, last_name, email, password, state, role } = req.body

        const regexp = /^[a-zA-Z0-9\*\/\$\^\Ç]{6,16}$/;
        const $role = ["usuario", "admin", "owner", "empleado"]
        const $state = ["Active", "Disabled"]
        let validate_email, validate_password, validate_role

        try {
            validate_email = (!validator.isEmpty(email) && validator.isEmail(email))
            validate_password = regexp.test(password)
            validate_role = (!validator.isEmpty(role) && $role.includes(role))
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Data not found"
            })
        }

        if (validate_email && validate_password && validate_role) {

            let userMatch = await User.find({ email: email })

            if (userMatch.length > 0) {
                return res.status(404).send({
                    status: "error",
                    message: "This email already exists"
                })
            }

            // ! Create the user

            const password_hash = await User.encrypt(password)

            let newUser = new User({
                name,
                last_name,
                email,
                password_hash,
                role
            })

            if (state && $state.includes(state)) {
                newUser.state = state
            }

            let roleId = await Role.findOne({ name: { $in: role } })

            newUser.role = roleId._id

            let userSave = await newUser.save()

            if (!userSave) {
                return res.status(404).send({
                    status: "error",
                    message: "This user has not been saved"
                })
            }

            return res.status(200).send({
                status: "success",
                userSave
            })

        } else {
            return res.status(404).send({
                status: "error",
                message: "Data invalid"
            })
        }

    },

    searchAdmin: async (req, res) => {

        let { search, option } = req.params

        const $option = ["user", "product"]

        if (!$option.includes(option)) {
            return res.status(404).send({
                status: "error",
                message: "Option invalid"
            })
        }

        option = option.toLowerCase()

        if (option === "user") {

            let userSearch = await User.find({
                "$or": [
                    { "name": { "$regex": search, "$options": "i" } },
                    { "last_name": { "$regex": search, "$options": "i" } },
                    { "email": { "$regex": search, "$options": "i" } }
                ]
            }, { password_hash: false })

            if (!userSearch || userSearch.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Not exists users with these params"
                })
            }

            return res.status(200).send({
                status: "success",
                userSearch
            })

        } else {

            let productSearch = await Product.find({
                "$or": [
                    { "name": { "$regex": search, "$options": "i" } },
                    { "description": { "$regex": search, "$options": "i" } },
                    { "short_description": { "$regex": search, "$options": "i" } },
                    { "authors": { "$regex": search, "$options": "i" } },
                    { "editorial": { "$regex": search, "$options": "i" } },
                    { "series": { "$regex": search, "$options": "i" } },
                ]
            }, { password_hash: false })

            if (!productSearch || productSearch.length == 0) {
                return res.status(404).send({
                    status: "error",
                    message: "Not exists products with these params"
                })
            }

            return res.status(200).send({
                status: "success",
                productSearch
            })

        }

    },

    // * ----------------------------------------------------------

    // * -------------------------- ROLES ----------------------------

    getAllRoles: async (req, res) => {

        let roles = await Role.find()

        if (!roles || roles.length == 0) {
            return res.status(404).send({
                status: "error",
                message: "Roles doesn't found"
            })
        }

        return res.status(200).send({
            status: "success",
            roles
        })

    },

    // * -------------------------------------------------------------

    // * -------------------------- IMAGES ----------------------------

    getImage: async (req, res) => {

        const { image } = req.params

        const path_file = './upload/images/' + image

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: "error",
                    message: "The image doesn't exists"
                });
            }
        })

    },

    uploadImage: async (req, res) => {

        const id_product = req.params.id

        let productFind = await Product.findById(id_product)

        if (!productFind) {
            return res.status(404).send({
                status: "error",
                message: "This product doesn't exists"
            })
        }

        let file_name = "Image not uploaded..."

        if (!req.files) {
            return res.status(404).send({
                status: "error",
                message: file_name
            })
        }

        let file_path = req.files.file0.path
        file_name = file_path.split("/")[2]
        let file_extension = file_name.split(".")[1]

        if (file_extension != "png" && file_extension != "jpg" && file_extension != "jpeg") {
            fs.unlink(file_path, (err) => {
                return res.status(404).send({
                    status: "error",
                    message: "The extension of the image is invalid"
                })
            })
        }

        let productUpdate = await Product.findByIdAndUpdate(productFind._id, { image: file_name }, { new: true })

        if (!productUpdate) {
            fs.unlink(file_path, (err) => {
                return res.status(404).send({
                    status: "error",
                    message: "This product has not been updated"
                })
            })
        }

        return res.status(200).send({
            status: "success",
            productUpdate
        })

    },

    // * -------------------------------------------------------------

    // * ----------------------- RECOVER ----------------------------

    sendEmail: async (req, res) => {

        const { email } = req.body
        let validate_email

        try {
            validate_email = (!validator.isEmpty(email) && validator.isEmail(email))
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Data not found"
            })
        }

        if (!validate_email) {
            return res.status(404).send({
                status: "error",
                message: "Email invalid"
            })
        }

        let userFind = await User.findOne({ email: email })

        if (!userFind) {
            return res.status(404).send({
                status: "error",
                message: "Doesn't exists any user with this email"
            })
        }

        let tokenRecover = await crypto.randomBytes(128)

        tokenRecover = tokenRecover.toString('hex')

        let userUpdate = await User.findByIdAndUpdate(userFind._id, {tokenRecover: tokenRecover})

        if(!userUpdate){
            return res.status(404).send({
                status: "error",
                message: "Token could not be generated"
            })
        }

        /* let mailOptions = {
            from: 'tutsmake@gmail.com',
            to: email,
            subject: 'Reset Password Link - Tutsmake.com',
            html: '<p>You requested for reset password, kindly use this <a href="http://localhost:4000/reset-password?token=' + token + '">link</a> to reset your password</p>'
     
        }; */

        // ! Send email

        res.send(userUpdate)

    },

    recoverPassword: async (req, res) => {

        const { token } = req.params

        const { password, confirm_password } = req.body

        const reg_password = /^[a-zA-Z0-9\*\/\$\^\Ç]{6,16}$/;
        let validate_password, validate_confirm

        try {
            validate_password = (!validator.isEmpty(password) && reg_password.test(password))
            validate_confirm = (!validator.isEmpty(confirm_password) && reg_password.test(confirm_password))
        } catch (error) {
            return res.status(404).send({
                status: "error",
                message: "Data not found"
            })
        }

        if (!validate_password && !validate_confirm) {
            return res.status(404).send({
                status: "error",
                message: "Password invalids"
            })
        }

        if (password != confirm_password) {
            return res.status(404).send({
                status: "error",
                message: "Passwords do not match"
            })
        }

        let userFind = await User.findOne({ tokenRecover: token })

        if (!userFind) {
            return res.status(404).send({
                status: "error",
                message: "This user doesn't exists"
            })
        }

        let passMatch = await User.comparePasswords(password, userFind.password_hash)

        if (passMatch) {
            return res.status(404).send({
                status: "error",
                message: "The passwords agree"
            })
        }

        let newPassword = await User.encrypt(password)

        let userUpdate = await User.findByIdAndUpdate(userFind._id, { password_hash: newPassword, tokenRecover: null }, { new: true, fields: { password_hash: false, tokenRecover: false } })

        if (!userUpdate) {
            return res.status(404).send({
                status: "error",
                message: "This user has not been updated"
            })
        }

        return res.status(200).send({
            status: "success",
            userUpdate
        })

    }

    // * -----------------------------------------------------------

}

module.exports = controller;