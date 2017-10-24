import {FormList} from '../models/formList';
import {Request, Response} from 'express';

export let getForms = (req: Request, res: Response) => {
    const userId = req.query.userId;
    FormList.getFormList(userId, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
};

export let getFormNumber = (req: Request, res: Response) => {
    const formDate = req.params.formDate;
    let number = 1;
    FormList.getFormLists((err, result) => {
        if (err) {
            res.json(err);
        } else {
            result.filter(form => form['id'].substr(0, 8) == formDate)
                .map(forms => number++);
            let formNumber;
            if (number < 10) {
                formNumber = formDate + '00' + '' + number;
            } else if (number >= 10 && number < 100) {
                formNumber = formDate + '0' + '' + number;
            } else {
                formNumber = formDate + '' + number
            }
            res.json(formNumber);
        }
    })
};

export let addForm = (req: Request, res: Response) => {
    const form = req.body;
    FormList.addFormList(form, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(form);
        }
    })
};

export let deleteForm = (req: Request, res: Response) => {
    const id = req.params.id;
    FormList.deleteFormList(id, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
};

