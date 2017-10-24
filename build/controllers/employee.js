"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employeeInfo_1 = require("../models/employeeInfo");
exports.getEmployees = function (req, res) {
    employeeInfo_1.EmployeeInfo.getEmployeesInfos(function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
exports.getEmployee = function (req, res) {
    var userId = req.params.userId;
    employeeInfo_1.EmployeeInfo.getEmployeesInfo(userId, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};
