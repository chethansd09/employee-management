import { Injectable } from '@angular/core';
import { Employee } from './entity/employee';

@Injectable({
  providedIn: 'root'
})
export class ServicesemployeeserviceService {
  allEmployees:Employee[] = [
    {
      "id":"1",
      "firstname":"Lalit",
      "lastname":"Aggarwal",
      "age":26,
      "designation":"Associate Lead, Technology"
    }
  ];

  //return all the employee
  getAllEmployees():Employee[]{
    return this.allEmployees;
  }

  //add an emloyee to employe list
  addEmployee(employee:Employee){
    this.allEmployees.push(employee);
  }

  //update emloyee details
  updateEmployee(employee:Employee){
    var updateEmployee = this.allEmployees.find(emp => emp.id == employee.id);
    updateEmployee.firstname = employee.firstname;
    updateEmployee.lastname = employee.lastname;
    updateEmployee.age = employee.age;
    updateEmployee.designation = employee.designation;
  }
  deleteEmployee(id:string){
    this.allEmployees = this.allEmployees.filter(employee => employee.id !=id);
  }

  getEmployee(id:string):Employee{
    return this.allEmployees.find(emp =>emp.id == id);
  }
  constructor() { }
}
