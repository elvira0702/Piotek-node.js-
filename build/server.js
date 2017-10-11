"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var path = require("path");
var userController = require("./controllers/user");
var formController = require("./controllers/form");
exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});
exports.dealData = function (sql, callback) {
    exports.connection.query(sql, function (err, result) {
        if (err) {
            console.log(sql + 'error:', err.message);
            return;
        }
        callback(result);
    });
};
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.get('/api/formList', formController.getFormLists);
app.get('/api/formList/:id', formController.getFormList);
app.get('/api/userInfo', userController.getUsers);
app.get('/api/userInfo/:id', userController.getUser);
var server = app.listen(80, 'localhost', function () {
    console.log('服务器已启动，地址是http://localhost:80');
});
