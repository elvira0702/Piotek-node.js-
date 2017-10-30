"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseDB_1 = require("../dao/baseDB");
var ToDoList = (function () {
    function ToDoList() {
    }
    ToDoList.addToDoList = function (toDo, callback) {
        var sql = 'insert into ToDoList(id,userId,date,time,thing,isDone) values(?,?,?,?,?,?)';
        var param = [toDo.id, toDo.userId, toDo.date, toDo.time, toDo.thing, toDo.isDone];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    ToDoList.deleteToDoList = function (id, callback) {
        var sql = 'delete from ToDoList where id=?';
        var param = [id];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    ToDoList.updateToDoList = function (toDo, callback) {
        var sql = 'update ToDoList set userId=?,date=?,time=?,thing=?,isDone=? where id=?';
        var param = [toDo.userId, toDo.date, toDo.time, toDo.thing, toDo.isDone, toDo.id];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    ToDoList.getToDoList = function (userId, callback) {
        var sql = 'select * from ToDoList where userId=?';
        var param = [userId];
        baseDB_1.BaseDB.dealData(sql, param, function (err, result) {
            callback(err, result);
        });
    };
    return ToDoList;
}());
exports.ToDoList = ToDoList;
