"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var BaseDB = (function () {
    function BaseDB() {
    }
    BaseDB.getDBConnection = function () {
        return mysql.createConnection({
            host: 'elvira0702.mysql.rds.aliyuncs.com',
            user: 'root',
            password: 'Kylin@0702',
            port: '3306',
            database: 'piotek'
        });
    };
    BaseDB.dealData = function (sql, param, callback) {
        var connection = BaseDB.getDBConnection();
        connection.connect();
        connection.query(sql, param, function (err, result) {
            callback(err, result);
        });
        connection.end();
    };
    return BaseDB;
}());
exports.BaseDB = BaseDB;
