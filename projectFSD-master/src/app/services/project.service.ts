import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './../models/project';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl: string;

  constructor(private http: HttpClient) {
    this.projectUrl = 'http://b8java12.iiht.tech:9090/api/getProjects';
  }
  public findAll(): Observable<Project[]> {
    var comp="completed";
    const url = `${this. projectUrl}/${comp}`;

    var valu= this.http.get<Project[]>(url);
    console.log(valu);
    return valu;
  }

  public findOngoing(): Observable<Project[]> {
    var ong="ongoing";
    const url = `${this. projectUrl}/${ong}`;
    return this.http.get<Project[]>(url);
  }

 

  public getProjectById(id: number): Promise<Array<Project>> {
    const url = `${this. projectUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
    .toPromise()
    .then(response => response as Project[])
    .catch(this.handleError);
    }
    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }

      public findMongodata(id: number): Observable<Project[]> {
        var mong="mongodb";
        const url = `${this. projectUrl}/${mong}/${id}`;
        return this.http.get<Project[]>(url);
      }
    
}
