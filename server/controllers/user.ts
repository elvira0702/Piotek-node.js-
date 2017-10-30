"use strict";
import {Request, Response} from "express";
import {UsersInfo} from '../models/usersInfo';
import * as fs from 'fs';

const notFound: UsersInfo = {
    userId: 'null',
    name: '',
    dep: '',
    hiredate: '',
    password: '',
    tel: '',
    email: '',
    photo: '',
    edu: '',
    loc: '',
    skill: '',
    motto: ''
};

export let getUsers = (req: Request, res: Response) => {
    UsersInfo.getUsersInfo((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

export let getUser = (req: Request, res: Response) => {
    const id = req.params.userId;
    UsersInfo.getUserInfo(id, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            let user = (result.length) > 0 ? result[0] : notFound;
            res.json(user);
        }
    })
};

export let updateUsers = (req: Request, res: Response) => {
    const user = req.body;
    UsersInfo.updateUsersInfo(user, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    })
};

export let addUser = (req: Request, res: Response) => {
    const user = req.body;
    UsersInfo.addUserInfo(user, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    })
};

export let upLoadImg = (req: Request, res: Response) => {
    const imgData = req.body;
    const path = 'public/resource/' + imgData.name;
    const base64Data = imgData.url.replace(/^data:image\/\w+;base64,/, '');
    const dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile(path, dataBuffer, (err) => {
        if (err) {
            res.json(-1);
        } else {
            res.json('http://localhost:8080/' + path);
        }
    });
};