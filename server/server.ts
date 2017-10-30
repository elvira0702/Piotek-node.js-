"use strict";

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
import * as userController from './controllers/user';
import * as formController from './controllers/form';
import * as todoController from './controllers/toDoList';
import * as employeeController from './controllers/employee';
import {Server} from 'ws';

const app = express();
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else next();
});
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use(bodyParser.json({limit: '3000kb'}));
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true, limit: '500kb'}));

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
app.get('/piotek/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

setInterval(formController.autoForm, 60 * 1000 *60);

let subscriptions = new Set<any>();

const wsServer = new Server({port: 85});
wsServer.on('connection', websocket => {
    subscriptions.add(websocket);
});
let messageCount = 1;
setInterval(() => {
    if (messageCount > 50) messageCount = 1;
    subscriptions.forEach(ws => {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({messageCount: messageCount++}));
        } else {
            subscriptions.delete(ws);
        }
    })
}, 5000);

const server = app.listen(8080);