"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseDB_1 = require("../dao/baseDB");
var FormList = (function () {
    function FormList() {
    }
    FormList.addFormList = function (form, callback) {
        var sql = 'insert into FormList(id,userId,type,state,time,reason) values(?,?,?,?,?,?)';
        var param = [form.id, form.userId, form.type, form.state, form.time, form.reason];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    FormList.deleteFormList = function (id, callback) {
        var sql = 'delete from FormList where id=?';
        var param = [id];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    FormList.updateFormList = function (form, callback) {
        var sql = 'update FormList set userId=?,type=?,state=?,time=?,reason=? where id=?';
        var param = [form.userId, form.type, form.state, form.time, form.reason, form.id];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    FormList.getFormList = function (userId, callback) {
        var sql = 'select * from FormList where userId=?';
        var param = [userId];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    FormList.getFormLists = function (callback) {
        var sql = 'select * from FormList';
        baseDB_1.BaseDB.dealData(sql, [], function (err, result) {
            callback(err, result);
        });
    };
    FormList.getNewForm = function (callback) {
        var sql = 'select * from FormList where state ="申请中"';
        baseDB_1.BaseDB.dealData(sql, [], function (err, result) {
            callback(err, result);
        });
    };
    return FormList;
}());
exports.FormList = FormList;
