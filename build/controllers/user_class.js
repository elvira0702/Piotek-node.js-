"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeInfo = (function () {
    function EmployeeInfo(id, name, dep) {
        this.id = id;
        this.name = name;
        this.dep = dep;
    }
    return EmployeeInfo;
}());
exports.EmployeeInfo = EmployeeInfo;
var UserInfo = (function () {
    function UserInfo(id, name, dep, tel, email, password, photo) {
        this.id = id;
        this.name = name;
        this.dep = dep;
        this.tel = tel;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var AboutMe = (function () {
    function AboutMe(id, edu, loc, skill, motto) {
        this.id = id;
        this.edu = edu;
        this.loc = loc;
        this.skill = skill;
        this.motto = motto;
    }
    return AboutMe;
}());
exports.AboutMe = AboutMe;
var UserToDoList = (function () {
    function UserToDoList(id, userId, date, time, thing, isDone) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.time = time;
        this.thing = thing;
        this.isDone = isDone;
    }
    return UserToDoList;
}());
exports.UserToDoList = UserToDoList;
var FormList = (function () {
    function FormList(id, userId, type, state, time, reason) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.state = state;
        this.time = time;
        this.reason = reason;
    }
    return FormList;
}());
exports.FormList = FormList;
