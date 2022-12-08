import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private restApi: HttpClient) { }

  getEmployees() {
    return this.restApi.get<any>("http://localhost:8000/employeeDetail")
      .pipe(map((response) => {
        return response
      }))

  }

  getEmployee(id:any){
    return this.restApi.get<any>("http://localhost:8000/employee/" + id)
    .pipe(map((response)=>{
      return response
    }))
  }

  addEmployee(data:any){
    return this.restApi.post<any>("http://localhost:8000/addEmployee",data).pipe(map((response)=>{
      return response
    }))
  }

  deleteEmployee(id:any){
    return this.restApi.delete<any>("http://localhost:8000/deleteEmployee/" + id)
    .pipe(map((response)=>{
      return response
    }))
  }

  updateEmployee(data:any,id:any){
    return this.restApi.put<any>("http://localhost:8000/updateEmployee/" + id,data)
    .pipe(map((response)=>{
      return response
    }))
  }


}
