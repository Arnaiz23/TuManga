'use strict'

var routes = require('./routes/apiRoutes');
const initialConfig = require("./libs/initialSetup");
require('dotenv').config();

const express = require('express');
var bodyParser = require("body-parser");

var app = express();

let init = async () => {
    await initialConfig.createRoles();
    await initialConfig.createAdmin();
    await initialConfig.createProducts()
}

init()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/v1', routes);

module.exports = app;