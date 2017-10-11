"use strict";
import {connection, dealData} from '../server';
import {Request, Response} from "express";

export let getUsers = (req: Request, res: Response) => {
    connection.connect();
    const sql = 'SELECT * FROM UsersInfo';
    dealData(sql, function (result) {
        res.json(result);
    });
    connection.end();
};

export let getUser = (req: Request, res: Response) => {
    connection.connect();
    const id = req.params.id;
    const sql = 'SELECT * FROM UsersInfo WHERE Id = ' + connection.escape(id);
    dealData(sql, function (result) {
        res.json(result);
    });
    connection.end();
};

export let updateUser = (req: Request, res: Response) => {
    connection.connect();
    const sql = 'UPDATE UsersInfo SET ' + 'WHERE Id = ?';
    const data = req.query.user;
    connection.query(sql, data, function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('更新后返回的结果:' + result);
    });
    connection.end();
};

export let addUser = (req: Request, res: Response) => {
    connection.connect();
    const sql = 'INSERT INTO UsersInfo(Id,name,dep,tel,email,password,photo) VALUES(?,?,?,?,?)';
    const data = req.query.user;
    connection.query(sql, data, function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('更新后返回的结果:' + result);
    });
    connection.end();
};