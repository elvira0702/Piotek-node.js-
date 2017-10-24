import {BaseDB} from '../dao/baseDB';

export class FormList {
    id: string;
    userId: string;
    type: string;
    state: string;
    time: string;
    reason: string;

    public static addFormList(form: FormList, callback) {
        const sql = 'insert into FormList(id,userId,type,state,time,reason) values(?,?,?,?,?,?)';
        const param = [form.id, form.userId, form.type, form.state, form.time, form.reason];
        BaseDB.dealData(sql, param, (err,result) => {
            callback(err,result);
        })
    }

    public static deleteFormList(id: string, callback) {
        const sql = 'delete from FormList where id=?';
        const param = [id];
        BaseDB.dealData(sql, param, (err,result) => {
            callback(err,result);
        })
    }


    public static updateFormList(form: FormList, callback) {
        const sql = 'update FormList set userId=?,type=?,state=?,time=?,reason=? where id=?';
        const param = [form.userId, form.type, form.state, form.time, form.reason, form.id];
        BaseDB.dealData(sql, param, (err,result)=> {
            callback(err,result);
        })
    }

    public static getFormList(userId, callback) {
        const sql = 'select * from FormList where userId=?';
        const param = [userId];
        BaseDB.dealData(sql, param, (err,result)=> {
            callback(err,result);
        })
    }

    public static getFormLists(callback) {
        const sql = 'select * from FormList';
        BaseDB.dealData(sql, [], (err,result)=> {
            callback(err,result);
        })
    }
}