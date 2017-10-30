import {EmployeeInfo} from '../models/employeeInfo';
import {Request, Response} from 'express';

const notFound: EmployeeInfo = {
    userId: 'null',
    name: '',
    dep: '',
    hiredate: ''
};

export let getEmployees = (req: Request, res: Response) => {
    EmployeeInfo.getEmployeesInfos((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })

};

export let getEmployee = (req: Request, res: Response) => {
    const userId = req.params.userId;
    EmployeeInfo.getEmployeesInfo(userId, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            let employee = (result.length > 0) ? result[0] : notFound;
            res.json(employee);
        }
    })
}