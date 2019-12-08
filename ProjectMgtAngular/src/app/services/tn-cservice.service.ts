import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TnCServiceService {

  private findEmplByIdURL : string;
  private updateEulURL : string;

  constructor(private http: HttpClient) {
    this.findEmplByIdURL = 'https://projectmanagementmanagerservice.cfapps.io/employee/EmployeeById';
    this.updateEulURL = 'https://projectmanagementmanagerservice.cfapps.io/employee/updateEul';
    

  } 


  public findById(id:number): Observable<Employee> {
    return this.http.get<Employee>(this.findEmplByIdURL+'/'+id);
  }

  public updateEulValue(employee: Employee){
    return this.http.put<Employee>(this.updateEulURL, employee);  
  }


}