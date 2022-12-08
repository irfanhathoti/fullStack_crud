import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { employeeData } from './employeeData';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  employeeDetail: any

  formValue!:FormGroup
  showUpdate !: boolean;
  showAdd !: boolean



  employee:employeeData = new employeeData()


  constructor(private formBuilder:FormBuilder ,private crudServices: CrudService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      lastName: ['',Validators.compose([Validators.required])],
      age: ['',Validators.compose([Validators.required])],
      EmpId:['',Validators.compose([Validators.required])],
      emailId:['',Validators.compose([Validators.required,Validators.email])]
    })

    this.getEmployeeDetail()
    console.log(this.employee)
  }



  showModal() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  getEmployeeDetail() {
    this.crudServices.getEmployees().subscribe(response => {
      this.employeeDetail = response
      console.log(this.employeeDetail)
    })
  }

  addEmployee(){
    this.showUpdate = false
    this.employee.firstName = this.formValue.value.firstName
    this.employee.lastName = this.formValue.value.lastName
    this.employee.age = this.formValue.value.age
    this.employee.EmpId = this.formValue.value.EmpId
    this.employee.emailId = this.formValue.value.emailId

    this.crudServices.addEmployee(this.employee).subscribe(response=>{
      console.log(response)
      this.formValue.reset()
      this.getEmployeeDetail()
    },error=>{
      console.log(error)
    })

  }


  deleteEmployee(id:any){
    this.crudServices.deleteEmployee(id).subscribe(response=>{
      console.log(response)
      this.getEmployeeDetail()
    },error=>{
      console.log(error)
    })
  }
  veiwEmployee(id:any){

    this.crudServices.getEmployee(id).subscribe(response=>{
      console.log(response)
    },error=>{
      console.log(error)
    })
  }

  onEdit(data:any){
    this.showAdd = false
    this.showUpdate = true
    console.log(data)
    this.formValue.controls['firstName'].setValue(data.firstName)
    this.formValue.controls['lastName'].setValue(data.lastName)
    this.formValue.controls['age'].setValue(data.age)
    this.formValue.controls['EmpId'].setValue(data.EmpId)
    this.formValue.controls['emailId'].setValue(data.emailId)
    this.employee.id = data.id
    console.log(this.employee)

  }
  updateEmployee(){
    this.employee.firstName = this.formValue.value.firstName
    this.employee.lastName = this.formValue.value.lastName
    this.employee.age = this.formValue.value.age
    this.employee.EmpId = this.formValue.value.EmpId
    this.employee.emailId = this.formValue.value.emailId

    this.crudServices.updateEmployee(this.employee,this.employee.id).subscribe(response=>{
      console.log(response)
      this.getEmployeeDetail()
      this.formValue.reset()
    },error=>{
      console.log(error)
    })
  }


  

 

  

}
