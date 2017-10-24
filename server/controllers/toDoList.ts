import {ToDoList} from '../models/toDoList';
import {Request,Response} from 'express';

export let getToDoList = (req:Request,res:Response)=>{
    const userId = req.query.userId;
  ToDoList.getToDoList(userId,(err,result)=> {
      if(err){
          res.json(err);
      }else{
          res.json(result);
      }
  })
};

export let addToDo = (req:Request,res:Response)=>{
  const toDo = req.body;
  ToDoList.addToDoList(toDo,(err,result)=> {
      if(err){
          res.json(err);
      }else{
          res.json(result.insertId);
      }
  })
};

export let deleteToDo = (req:Request,res:Response)=>{
  const id = req.params.id;
  ToDoList.deleteToDoList(id,(err,result)=> {
      if(err){
          res.json(err);
      }else{
          res.json(result);
      }
  })
};

export let updateToDoList = (req:Request,res:Response)=>{
    const toDo = req.body;
    ToDoList.updateToDoList(toDo,(err,result)=> {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
};