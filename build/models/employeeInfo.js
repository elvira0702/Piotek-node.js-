"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseDB_1 = require("../dao/baseDB");
var EmployeeInfo = (function () {
    function EmployeeInfo() {
    }
    EmployeeInfo.getEmployeesInfos = function (callback) {
        var sql = 'select * from Employeeinfo';
        baseDB_1.BaseDB.dealData(sql, [], function (err, result) {
            callback(err, result);
        });
    };
    EmployeeInfo.getEmployeesInfo = function (userId, callback) {
        var params = [userId];
        var sql = 'select * from Employeeinfo where userId = ?';
        baseDB_1.BaseDB.dealData(sql, params, function (err, result) {
            callback(err, result);
        });
    };
    return EmployeeInfo;
}());
exports.EmployeeInfo = EmployeeInfo;
