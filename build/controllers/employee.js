"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employeeInfo_1 = require("../models/employeeInfo");
var notFound = {
    userId: 'null',
    name: '',
    dep: '',
    hiredate: ''
};
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
            var employee = (result.length > 0) ? result[0] : notFound;
            res.json(employee);
        }
    });
};
