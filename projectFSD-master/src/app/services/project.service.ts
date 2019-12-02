import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import { Projectmongo } from '../models/projectmongo';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl: string;

  constructor(private http: HttpClient) {
    this.projectUrl = 'http://localhost:9090/api/getProjects';
  }

  public getAllProjectDetails(): Observable<Project[]> {

    var valu= this.http.get<Project[]>( this.projectUrl);
    console.log(valu);
    return valu;
 }
  public findCompletedAll(): Observable<Project[]> {
     var comp="completed";
     const url = `${this. projectUrl}/${comp}`;

     var valu= this.http.get<Project[]>(url);
     console.log(valu);
     return valu;

// var valu=this.http.get<Project[]>('');
// console.log(valu);
// return valu;

  }

  public findOngoing(): Observable<Project[]> {
   var ong="ongoing";
    const url = `${this. projectUrl}/${ong}`;
   return this.http.get<Project[]>(url);
 
  }

 

  public getProjectById(id: number): Observable<Project[]> {
    const url = `${this. projectUrl}/${id}`;
    console.log(url);
     return this.http.get<Project[]>(url);
    }
    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }

      public findMongodata(id: number): Observable<Projectmongo[]> {
        var mong="mongodb";
        const url = `${this. projectUrl}/${mong}/${id}`;
        return this.http.get<Projectmongo[]>(url);
      }
  public getOngoingProjectByYear(yr:number):Observable<Project[]> {
    var pyr ="http://localhost:9090/api/OngoingByYear";
    const url = `${pyr}/${yr}`;
    return this.http.get<Project[]>(url);
  }

  public getCompletedProjectByYear(yr:number):Observable<Project[]> {
    var pyr ="http://localhost:9090/api/CompletedByYear";
    const url = `${pyr}/${yr}`;
    return this.http.get<Project[]>(url);
  }
  public getLatestProject():Observable<Project[]>{
    var latestUrl ="http://localhost:9090/api/getLatest";
  
    return this.http.get<Project[]>(latestUrl);
  }

  public getProjectCount():Observable<number[]>{
    var CountUrl ="http://localhost:9090/api/getByYear";
   
    return this.http.get<number[]>(CountUrl);
  }

    
}
