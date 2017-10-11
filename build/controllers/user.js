"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
exports.getUsers = function (req, res) {
    server_1.connection.connect();
    var sql = 'SELECT * FROM UsersInfo';
    server_1.dealData(sql, function (result) {
        res.json(result);
    });
    server_1.connection.end();
};
exports.getUser = function (req, res) {
    server_1.connection.connect();
    var id = req.params.id;
    var sql = 'SELECT * FROM UsersInfo WHERE Id = ' + server_1.connection.escape(id);
    server_1.dealData(sql, function (result) {
        res.json(result);
    });
    server_1.connection.end();
};
exports.updateUser = function (req, res) {
    server_1.connection.connect();
    var sql = 'UPDATE UsersInfo SET ' + 'WHERE Id = ?';
    var data = req.query.user;
    server_1.connection.query(sql, data, function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('更新后返回的结果:' + result);
    });
    server_1.connection.end();
};
exports.addUser = function (req, res) {
    server_1.connection.connect();
    var sql = 'INSERT INTO UsersInfo(Id,name,dep,tel,email,password,photo) VALUES(?,?,?,?,?)';
    var data = req.query.user;
    server_1.connection.query(sql, data, function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('更新后返回的结果:' + result);
    });
    server_1.connection.end();
};
