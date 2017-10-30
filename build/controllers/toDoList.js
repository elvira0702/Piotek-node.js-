"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toDoList_1 = require("../models/toDoList");
exports.getToDoList = function (req, res) {
    var userId = req.query.userId;
    toDoList_1.ToDoList.getToDoList(userId, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
exports.addToDo = function (req, res) {
    var toDo = req.body;
    toDoList_1.ToDoList.addToDoList(toDo, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result.insertId);
        }
    });
};
exports.deleteToDo = function (req, res) {
    var id = req.params.id;
    toDoList_1.ToDoList.deleteToDoList(id, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
exports.updateToDoList = function (req, res) {
    var toDo = req.body;
    toDoList_1.ToDoList.updateToDoList(toDo, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
