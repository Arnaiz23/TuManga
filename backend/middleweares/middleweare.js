'use strict'

const User = require('../models/User')
const Role = require('../models/Role')
const globalFunctions = require('../globalFunctions/globalFunctions')

let middleweares = {
    isAdmin: async (req, res, next) => {

        try {

            let user = await globalFunctions.getUserToken(req, res)
            let role = await Role.findOne({ _id: user.role })

            if(!role){
                return res.status(404).send({
                    status: "error",
                    message: "This role doesn't exists"
                })
            }

            if (role.name === "admin") {
                next()
                return
            }

            return res.status(403).send({
                status: "error",
                message: "This user has no privileges"
            })

        } catch (error) {
            return res.status(500).send({ message: "No funciono" });
        }

    },

    isOwner: async (req, res, next) => {
        try {

            let user = await globalFunctions.getUserToken(req, res)
            let role = await Role.findOne({ _id: user.role })

            if(!role){
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
            return res.status(500).send({ message: "No funciono" });
        }
    },

    isEmployee: async (req, res, next) => {
        try {

            let user = await globalFunctions.getUserToken(req, res)
            let role = await Role.findOne({ _id: user.role })

            if(!role){
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
            return res.status(500).send({ message: "No funciono" });
        }
    },

    isUser: async (req, res, next) => {
        try {

            let user = await globalFunctions.getUserToken(req, res)
            let role = await Role.findOne({ _id: user.role })

            if(!role){
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
            return res.status(500).send({ message: "No funciono" });
        }
    }
}

module.exports = middleweares