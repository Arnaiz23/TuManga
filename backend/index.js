'use strict'

var mongoose = require('mongoose');
var port = '3900';
var app = require('./app');

mongoose.Promise = global.Promise;

var {user_bbdd, password_bbdd} = require('./config/config');

mongoose.connect(`mongodb+srv://${user_bbdd}:${password_bbdd}@tumanga.1l58o.mongodb.net/TuManga?retryWrites=true&w=majority` , {useNewUrlParser : true} , () => {
    console.log("Connected to the database correctly");

    app.listen(port, () =>{
        console.log("Server running in http://localhost:"+port);
    })
})