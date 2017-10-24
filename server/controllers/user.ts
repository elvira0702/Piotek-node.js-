"use strict";
import {Request, Response} from "express";
import {UsersInfo} from '../models/usersInfo';

export let getUsers = (req: Request, res: Response) => {
    UsersInfo.getUsersInfo((err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
};

export let getUser = (req: Request, res: Response) => {
    const id = req.params.userId;
    UsersInfo.getUserInfo(id,(err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
};

export let updateUsers = (req: Request, res: Response) => {
    const user = req.body;
    UsersInfo.updateUsersInfo(user,(err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
};

export let addUser = (req: Request, res: Response) => {
    const user = req.body;
    UsersInfo.addUserInfo(user,(err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
};