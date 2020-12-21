"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) {
    response.send('Hello world');
});
var server = app.listen(8888, function () {
    console.log("服务器开启");
});
