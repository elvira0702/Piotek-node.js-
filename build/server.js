"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var userController = require("./controllers/user");
var formController = require("./controllers/form");
var todoController = require("./controllers/toDoList");
var employeeController = require("./controllers/employee");
var ws_1 = require("ws");
var app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS")
        res.sendStatus(200); /*让options请求快速返回*/
    else
        next();
});
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use(bodyParser.json({ limit: '3000kb' }));
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, limit: '500kb' }));
app.get('/api/todo', todoController.getToDoList);
app.put('/api/todo', todoController.updateToDoList);
app.post('/api/todo', todoController.addToDo);
app.delete('/api/todo/:id', todoController.deleteToDo);
app.get('/api/employeeInfo', employeeController.getEmployees);
app.get('/api/employeeInfo/:userId', employeeController.getEmployee);
app.get('/api/formList', formController.getForms);
app.post('/api/formList', formController.addForm);
app.get('/api/formApply/:formDate', formController.getFormNumber);
app.get('/api/userInfo', userController.getUsers);
app.get('/api/userInfo/:userId', userController.getUser);
app.post('/api/userInfo', userController.addUser);
app.put('/api/userInfo', userController.updateUsers);
app.post('/api/imgData', userController.upLoadImg);
app.get('/piotek/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});
setInterval(formController.autoForm, 60 * 1000 * 60);
var subscriptions = new Set();
var wsServer = new ws_1.Server({ port: 85 });
wsServer.on('connection', function (websocket) {
    subscriptions.add(websocket);
});
var messageCount = 1;
setInterval(function () {
    if (messageCount > 50)
        messageCount = 1;
    subscriptions.forEach(function (ws) {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({ messageCount: messageCount++ }));
        }
        else {
            subscriptions.delete(ws);
        }
    });
}, 5000);
var server = app.listen(8080);
