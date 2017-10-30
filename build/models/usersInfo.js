"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseDB_1 = require("../dao/baseDB");
var UsersInfo = (function () {
    function UsersInfo() {
    }
    UsersInfo.addUserInfo = function (user, callback) {
        var sql = 'insert into usersinfo(userId,name,dep,tel,email,password,photo,hiredate,edu,' +
            'loc,skill,motto) values(?,?,?,?,?,?,?,?,?,?,?,?)';
        var param = [user.userId, user.name, user.dep, user.tel, user.email,
            user.password, user.photo, user.hiredate, user.edu, user.loc, user.skill, user.motto];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    UsersInfo.deleteUserInfo = function (userId, callback) {
        var sql = 'delete from usersinfo where userId=?';
        var param = [userId];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    UsersInfo.updateUsersInfo = function (user, callback) {
        var sql = 'update usersinfo set name=?,dep=?,tel=?,email=?,password=?,photo=?,hiredate=?,' +
            'edu=?,loc=?,skill=?,motto=? where userId=?';
        var param = [user.name, user.dep, user.tel, user.email, user.password, user.photo, user.hiredate,
            user.edu, user.loc, user.skill, user.motto, user.userId];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    UsersInfo.getUserInfo = function (userId, callback) {
        var sql = 'select * from usersinfo where userId=?';
        var param = [userId];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    UsersInfo.getUsersInfo = function (callback) {
        var sql = 'select * from usersinfo';
        baseDB_1.BaseDB.dealData(sql, [], function (err, result) {
            callback(err, result);
        });
    };
    return UsersInfo;
}());
exports.UsersInfo = UsersInfo;
