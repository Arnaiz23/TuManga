'use strict'

const Role = require("../models/Role");
const User = require("../models/User");
const config = require("../config/config");


const data = {
    createRoles: async () => {
        try {
            const cont = await Role.estimatedDocumentCount();

            if (cont > 0) return;

            const values = await Promise.all([
                new Role({ name: "usuario" }).save(),
                new Role({ name: "owner" }).save(),
                new Role({ name: "empleado" }).save(),
                new Role({ name: "admin" }).save()
            ]);

            console.log(values)

        } catch (error) {
            console.log(error);
        }
    },
    createAdmin: async () => {
        try {

            const cont = await User.estimatedDocumentCount();

            if (cont > 0) return;

            let role = await Role.findOne({name: {$in: "admin"}})
            role = role._id
            let password_hash = await User.encrypt(config.adminPassword)

            const values = await Promise.all([
                new User({
                    name: "Admin",
                    last_name: "Admin",
                    email: "admin@admin.com",
                    password_hash,
                    role
                }).save()
            ]);

            console.log(values)
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = data;