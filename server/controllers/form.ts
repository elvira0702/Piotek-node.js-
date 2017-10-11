import {FormList} from './user_class';
import {Request,Response} from 'express';

const formList: FormList[] = [
    new FormList('20171009001', 's15801362', '请假单（年假）', [1, '申请中'], '10/10/2017 10:00 AM-10/11/2017 10:00 AM', '回家过年'),
    new FormList('20171009002', 's15801362', '请假单（病假）', [3, '已退回'], '10/10/2017 10:00 AM-10/11/2017 10:00 AM', '回家睡觉'),
    new FormList('20171009003', 's15801362', '离职单', [1, '申请中'], '10/10/2017', '不想干了'),
    new FormList('20171009004', 's15801362', '外出单', [2, '已成功'], '10/10/2017 10:00 AM-05:00 PM', '外出测试'),
];

export let getFormLists =(req:Request, res:Response)=> {
    let result = formList;
    const params = req.query;
    if (params.userId) {
        result = result.filter(function (form) { return form.userId === params.userId; });
    }
    res.json(result);
};

export let getFormList =(req:Request, res:Response)=> {
    let result = formList.find(function (formList) { return formList.id === req.params.id; });
    res.json(result);
};