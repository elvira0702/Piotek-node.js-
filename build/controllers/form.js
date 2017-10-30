"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formList_1 = require("../models/formList");
exports.getForms = function (req, res) {
    var userId = req.query.userId;
    formList_1.FormList.getFormList(userId, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
exports.getFormNumber = function (req, res) {
    var formDate = req.params.formDate;
    var number = 1;
    formList_1.FormList.getFormLists(function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            result.filter(function (form) { return form['id'].substr(0, 8) == formDate; })
                .map(function (forms) { return number++; });
            var formNumber = void 0;
            if (number < 10) {
                formNumber = formDate + '00' + '' + number;
            }
            else if (number >= 10 && number < 100) {
                formNumber = formDate + '0' + '' + number;
            }
            else {
                formNumber = formDate + '' + number;
            }
            res.json(formNumber);
        }
    });
};
exports.addForm = function (req, res) {
    var form = req.body;
    formList_1.FormList.addFormList(form, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(form);
        }
    });
};
exports.deleteForm = function (req, res) {
    var id = req.params.id;
    formList_1.FormList.deleteFormList(id, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
exports.autoForm = function () {
    formList_1.FormList.getNewForm(function (err, result) {
        if (err) {
            return;
        }
        var list = result;
        if (list.length === 0)
            return;
        var index = Math.floor(Math.random() * list.length);
        var random = Math.random() > 0.5 ? '已完成' : '已退回';
        list[index].state = random;
        formList_1.FormList.updateFormList(list[index], function (err, result) {
            if (err) {
                return;
            }
        });
    });
};
