import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { employeeDetail } from "../entity/employeeDetail";

class employeeController {
    static addEmployee = async (req:Request,res:Response) =>{
        const newEmployee = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            EmpId:req.body.EmpId,
            emailId:req.body.emailId
        }
        console.log(newEmployee)
        const employeeData = getRepository(employeeDetail).create(newEmployee)
        const result = await getRepository(employeeDetail).save(employeeData)
        return res.json(result)
    }
    static employee = async (req:Request,res:Response) =>{
        const id = {where: {id:parseInt(req.params.id,10)}}
        const result = await getRepository(employeeDetail).findOne(id)
        return res.json(result)
    }
    static getAllEmployee = async (req:Request,res:Response) =>{
        const result = await getRepository(employeeDetail).find()
        return res.json(result)
    }
    static updateEmployee = async (req:Request,res:Response) =>{
        const id = {where: {id: parseInt(req.params.id, 10)}}
        const putData = await getRepository(employeeDetail).findOne(id)
        if(putData){
            getRepository(employeeDetail).merge(putData,req.body);
            // console.log(newData)
            const result = await getRepository(employeeDetail).save(putData)
            return res.json(result)
        }
    }
    static deleteEmployee = async (req:Request,res:Response) =>{
        const result =  await getRepository(employeeDetail).delete(req.params.id)
        return res.json(result) 
    }
}


export default employeeController