import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getProjectProgressData(): Observable<Task[]>{
    return this.http.get<Task[]>('https://raw.githubusercontent.com/NidarshN/tutorial/master/task1.json');
  }

  getTaskData(): Observable<Task[]>{
    return this.http.get<Task[]>('https://raw.githubusercontent.com/NidarshN/tutorial/master/task1.json');
  }
}
