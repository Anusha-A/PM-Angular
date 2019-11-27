import { Observable } from 'rxjs';
import { Task } from './../models/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl:string;
  constructor(private http: HttpClient) {
    this.taskUrl='http://b8java12.iiht.tech:9090/api/getTasks';
   }

  public getTaskById(id: number): Observable<Task[]> {
    const url = `${this. taskUrl}/${id}`;
    console.log(url);
    return this.http.get<Task[]>(url);
    }
}
