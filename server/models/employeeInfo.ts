import {BaseDB} from '../dao/baseDB';

export class EmployeeInfo{
    userId: string;
    name: string;
    dep: string;
    hiredate: string;


    public static getEmployeesInfos(callback) {
        const sql = 'select * from Employeeinfo';
        BaseDB.dealData(sql,[],(err,result)=> {
            callback(err,result);
        })
    }
    public static getEmployeesInfo(userId,callback) {
        const params=[userId];
        const sql = 'select * from Employeeinfo where userId = ?';
        BaseDB.dealData(sql,params,(err,result)=> {
            callback(err,result);
        })
    }
}