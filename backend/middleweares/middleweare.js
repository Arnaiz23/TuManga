'use strict'

const User = require('../models/User')
const Role = require('../models/Role')
// const globalFunctions = require('../globalFunctions/globalFunctions')

const jwt = require('jsonwebtoken')

let middleweares = {
    isAdmin: async (req, res, next) => {

        try {

            let token = req.get('Authorization')
            token = token.split(" ")[1]
            let userToken;

            try {
                userToken = jwt.decode(token)
            } catch (error) {
                return res.status(404).send({
                    status: "error",
                    message: "Token invalid"
                })
            }

            let user = await User.findById(userToken.id, { password_hash: false, tokenRecover: false });

            if (!user) {
                return res.status(500).send({
                    status: "error",
                    message: "This user doesn't exists"
                })
            }

            let role = await Role.findOne({ _id: user.role })

            if (!role) {
                return res.status(404).send({
                    status: "error",
                    message: "This role doesn't exists"
                })
            }

            if (role.name === "admin") {
                req.admin = true
                next()
                return
            }

            return res.status(403).send({
                status: "error",
                message: "This user has no privileges"
            })

        } catch (error) {
            return res.status(500).send({ message: "Did not work" });
        }

    },

    isOwner: async (req, res, next) => {
        try {

            let token = req.get('Authorization')
            token = token.split(" ")[1]
            let userToken;

            try {
                userToken = jwt.decode(token)
            } catch (error) {
                return res.status(404).send({
                    status: "error",
                    message: "Token invalid"
                })
            }

            let user = await User.findById(userToken.id, { password_hash: false, tokenRecover: false });

            if (!user) {
                return res.status(500).send({
                    status: "error",
                    message: "This user doesn't exists"
                })
            }

            let role = await Role.findOne({ _id: user.role })

            if (!role) {
                return res.status(404).send({
                    status: "error",
                    message: "This role doesn't exists"
                })
            }

            if (role.name === "owner" || role.name === "admin") {
                next()
                return
            }

            return res.status(403).send({
                status: "error",
                message: "This user has no privileges"
            })

        } catch (error) {
            return res.status(500).send({ message: "Did not work" });
        }
    },

    isEmployee: async (req, res, next) => {
        try {

            let token = req.get('Authorization')
            token = token.split(" ")[1]
            let userToken;

            try {
                userToken = jwt.decode(token)
            } catch (error) {
                return res.status(404).send({
                    status: "error",
                    message: "Token invalid"
                })
            }

            let user = await User.findById(userToken.id, { password_hash: false, tokenRecover: false });

            if (!user) {
                return res.status(500).send({
                    status: "error",
                    message: "This user doesn't exists"
                })
            }
            
            let role = await Role.findOne({ _id: user.role })

            if (!role) {
                return res.status(404).send({
                    status: "error",
                    message: "This role doesn't exists"
                })
            }

            if (role.name === "empleado" || role.name === "owner" || role.name === "admin") {
                next()
                return
            }

            return res.status(403).send({
                status: "error",
                message: "This user has no privileges"
            })

        } catch (error) {
            return res.status(500).send({ message: "Did not work" });
        }
    },

    isUser: async (req, res, next) => {

        try {

            let token = req.get('Authorization')
            token = token.split(" ")[1]
            let userToken;

            try {
                userToken = jwt.decode(token)
            } catch (error) {
                return res.status(404).send({
                    status: "error",
                    message: "Token invalid"
                })
            }

            let user = await User.findById(userToken.id, { password_hash: false, tokenRecover: false });

            if (!user) {
                return res.status(500).send({
                    status: "error",
                    message: "This user doesn't exists"
                })
            }

            let role = await Role.findOne({ _id: user.role })

            if (!role) {
                return res.status(404).send({
                    status: "error",
                    message: "This role doesn't exists"
                })
            }

            if (role.name === "usuario" || role.name === "empleado" || role.name === "owner" || role.name === "admin") {
                next()
                return
            }

            return res.status(403).send({
                status: "error",
                message: "This user has no privileges"
            })

        } catch (error) {
            return res.status(500).send({
                message: "Did not work"
            });
        }
    }
}

module.exports = middleweares