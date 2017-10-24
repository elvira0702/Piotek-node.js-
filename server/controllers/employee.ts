import {EmployeeInfo} from '../models/employeeInfo';
import {Request,Response} from 'express';

export let getEmployees = (req: Request, res: Response) => {
    EmployeeInfo.getEmployeesInfos((err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })

};

export let getEmployee = (req:Request,res:Response)=>{
    const userId = req.params.userId;
    EmployeeInfo.getEmployeesInfo(userId,(err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
}