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

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

let subscriptions = new Set<any>();

const wsServer = new Server({port: 8000});
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