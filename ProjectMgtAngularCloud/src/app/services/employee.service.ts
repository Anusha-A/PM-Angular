import { EmployeeSkill } from '../models/employeeskills';
import { Projectmember } from '../models/projectmember';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl;
  private memberUrl;
  dataTosearch: string;
  private managerURL: string;
  employeeURL: string;
  private skilledEmployeeURL: string;
  receivedFilter: EventEmitter<string>;
  private results: Observable<Employee[]>;


  constructor(private http: HttpClient) {
    this.employeeUrl = 'https://projectmanagementadminservice.cfapps.io/api/search';
    this.memberUrl = 'https://projectmanagementadminservice.cfapps.io/api/getteams';

    this.managerURL = 'https://projectmanagementmanagerservice.cfapps.io/employee/getManagersByAvailability';
    this.skilledEmployeeURL = 'https://projectmanagementmanagerservice.cfapps.io/employeeSkill/getEmployeesBySkills';


    // this.managerURL = 'spring-end/employee/getManagersByAvailability';
    // this.skilledEmployeeURL = 'spring-end/employeeSkill/getEmployeesBySkills';
    this.employeeURL = 'https://projectmanagementmanagerservice.cfapps.io/employee/getMembersByAvailability';

    this.receivedFilter = new EventEmitter<string>();
  }
  //fetch all employee detials
  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }
  //get employee details on search string
  public getEmployeeData(searchData: string): Observable<Employee[]> {
    const url = `${this.employeeUrl}/${searchData}`;

    var valu = this.http.get<Employee[]>(url);
    console.log(valu);
    return valu;
  }

  raiseEvent(dataTosearch: string): void {
    this.dataTosearch = dataTosearch;
    this.receivedFilter.emit(dataTosearch);
  }

  public getEmployeeDetails(empid: number): Observable<Projectmember[]> {

    const url = `${this.memberUrl}/${empid}`;
    return this.http.get<Projectmember[]>(url);
  }

  public getEmployeeSkills(empid: number): Observable<EmployeeSkill[]> {
    const skills = "skills";
    const url = `${this.memberUrl}/${skills}/${empid}`;
    return this.http.get<EmployeeSkill[]>(url);
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.managerURL);
  }


  public findSkilledEmployee(skill: String): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.skilledEmployeeURL + '/' + skill);
  }



}