const jwt = require('jsonwebtoken')
const User = require('../models/User')
const fs = require('fs')

let globalFunctions = {

    getUserToken: async (req, res) => {

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

        let userFind = await User.findById(userToken.id, {password_hash: false});

        if (!userFind) {
            return res.status(500).send({
                status: "error",
                message: "This user doesn't exists"
            })
        }

        return userFind

    },

    getImage: (req, res) => {

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
        
        return file_name

    },

    getPasswordHash: async (id) => {

        let userFind = await User.findById(id)

        if(!userFind){
            return res.status(404).send({
                status: "error",
                message: "This user doesn't exists"
            })
        }

        return userFind.password_hash
        
    }

}

module.exports = globalFunctions