import { Router } from "express";
import employeeController from "../controller/employeeController";


const router = Router()


router.post("/addEmployee",employeeController.addEmployee)
router.get("/employeeDetail",employeeController.getAllEmployee)
router.put('/updateEmployee/:id',employeeController.updateEmployee)
router.delete('/deleteEmployee/:id',employeeController.deleteEmployee)
router.get('/employee/:id',employeeController.employee)



export default router