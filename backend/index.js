'use strict'

var mongoose = require('mongoose');
var port = process.env.PORT || '3900';
var app = require('./app');

if (process.env.NODE_ENV === 'test') {
    port = '3901'
}

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${process.env.USER_BBDD}:${process.env.PASSWORD_BBDD}@tumanga.1l58o.mongodb.net/TuManga?retryWrites=true&w=majority` , {useNewUrlParser : true} , () => {
    console.log("Connected to the database correctly");

    app.listen(port, () =>{
        console.log("Server running in http://localhost:"+port);
    })
})

module.exports = {app}