import {BaseDB} from '../dao/baseDB';

export class UsersInfo {
    userId: string;
    name: string;
    dep: string;
    hiredate: string;
    password: string;
    tel: string;
    email: string;
    photo: string;
    edu: string;
    loc: string;
    skill: string;
    motto: string;

    public static addUserInfo(user: UsersInfo, callback) {
        const sql = 'insert into usersinfo(userId,name,dep,tel,email,password,photo,hiredate,edu,' +
            'loc,skill,motto) values(?,?,?,?,?,?,?,?,?,?,?,?)';
        const param = [user.userId, user.name, user.dep, user.tel, user.email,
            user.password, user.photo,user.hiredate,user.edu,user.loc,user.skill,user.motto];
        BaseDB.dealData(sql, param, (err,result) => {
            callback(err,result);
        })
    }

    public static deleteUserInfo(userId: string, callback) {
        const sql = 'delete from usersinfo where userId=?';
        const param = [userId];
        BaseDB.dealData(sql, param, (err,result) => {
            callback(err,result);
        })
    }

    public static updateUsersInfo(user: UsersInfo, callback) {
        const sql = 'update usersinfo set name=?,dep=?,tel=?,email=?,password=?,photo=?,hiredate=?,' +
            'edu=?,loc=?,skill=?,motto=? where userId=?';
        const param = [user.name, user.dep, user.tel, user.email, user.password, user.photo, user.hiredate,
            user.edu, user.loc, user.skill, user.motto, user.userId];
        BaseDB.dealData(sql, param, (err,result) => {
            callback(err,result);
        })
    }

    public static getUserInfo(userId, callback) {
        const sql = 'select * from usersinfo where userId=?';
        const param = [userId];
        BaseDB.dealData(sql, param, (err,result) => {
            callback(err,result);
        })
    }

    public static getUsersInfo(callback) {
        const sql = 'select * from usersinfo';
        BaseDB.dealData(sql, [], (err,result) => {
            callback(err,result);
        })
    }
}