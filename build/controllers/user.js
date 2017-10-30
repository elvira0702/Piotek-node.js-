"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersInfo_1 = require("../models/usersInfo");
var fs = require("fs");
var notFound = {
    userId: 'null',
    name: '',
    dep: '',
    hiredate: '',
    password: '',
    tel: '',
    email: '',
    photo: '',
    edu: '',
    loc: '',
    skill: '',
    motto: ''
};
exports.getUsers = function (req, res) {
    usersInfo_1.UsersInfo.getUsersInfo(function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
exports.getUser = function (req, res) {
    var id = req.params.userId;
    usersInfo_1.UsersInfo.getUserInfo(id, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            var user = (result.length) > 0 ? result[0] : notFound;
            res.json(user);
        }
    });
};
exports.updateUsers = function (req, res) {
    var user = req.body;
    usersInfo_1.UsersInfo.updateUsersInfo(user, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(user);
        }
    });
};
exports.addUser = function (req, res) {
    var user = req.body;
    usersInfo_1.UsersInfo.addUserInfo(user, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(user);
        }
    });
};
exports.upLoadImg = function (req, res) {
    var imgData = req.body;
    var path = 'public/resource/' + imgData.name;
    var base64Data = imgData.url.replace(/^data:image\/\w+;base64,/, '');
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile(path, dataBuffer, function (err) {
        if (err) {
            res.json(-1);
        }
        else {
            res.json('http://localhost:8080/' + path);
        }
    });
};
