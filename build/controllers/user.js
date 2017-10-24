"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersInfo_1 = require("../models/usersInfo");
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
            res.json(result);
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
            res.json(result);
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
            res.json(result);
        }
    });
};
