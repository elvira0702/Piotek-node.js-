import {BaseDB} from '../dao/baseDB';

export class ToDoList{
    id: number;
    userId: string;
    date: string;
    time: string;
    thing: string;
    isDone: boolean;

    public static addToDoList(toDo: ToDoList, callback) {
        const sql = 'insert into ToDoList(id,userId,date,time,thing,isDone) values(?,?,?,?,?,?)';
        const param = [toDo.id, toDo.userId, toDo.date, toDo.time, toDo.thing, toDo.isDone];
        BaseDB.dealData(sql, param, (err,result)=> {
            callback(err,result);
        })
    }

    public static deleteToDoList(id: string, callback) {
        const sql = 'delete from ToDoList where id=?';
        const param = [id];
        BaseDB.dealData(sql, param, (err,result)=> {
            callback(err,result);
        })
    }

    public static updateToDoList(toDo: ToDoList, callback) {
        const sql = 'update ToDoList set userId=?,date=?,time=?,thing=?,isDone=? where id=?';
        const param = [ toDo.userId, toDo.date, toDo.time, toDo.thing, toDo.isDone,toDo.id];
        BaseDB.dealData(sql, param, (err,result)=> {
            callback(err,result);
        })
    }

    public static getToDoList(userId, callback) {
        const sql = 'select * from ToDoList where userId=?';
        const param = [userId];
        BaseDB.dealData(sql, param, (err,result)=> {
            callback(err,result);
        })
    }
}