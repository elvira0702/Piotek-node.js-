"use strict";

import * as express from 'express';
import * as mysql from 'mysql';
import * as path from 'path';
import * as userController from './controllers/user';
import * as formController from './controllers/form';

export let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});

export let dealData = (sql, callback) => {
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(sql + 'error:', err.message);
            return;
        }
        callback(result);
    });
};

const app = express();

app.use('/',express.static(path.join(__dirname,'..','dist')));
app.get('/api/formList',formController.getFormLists);
app.get('/api/formList/:id',formController.getFormList);
app.get('/api/userInfo', userController.getUsers);
app.get('/api/userInfo/:id', userController.getUser);

const server = app.listen(80, 'localhost', () => {
    console.log('服务器已启动，地址是http://localhost:80');
});