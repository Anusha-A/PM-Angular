import { Subtask } from './../models/subtask';

import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  private subUrl:string;
  constructor(private http: HttpClient) { 
    this.subUrl='http://b8java12.iiht.tech:9090/api/getsubtasks';
  }

  public getSubtask(pid: number,tid:number): Observable<Subtask[]> {
    const url = `${this. subUrl}/${pid}/${tid}`;
    console.log(url);
   
   /* return this.http.get<Subtaskmodel[]>(url);*/
   
    return this.http.get<Subtask[]>(url);
   
    }
}
