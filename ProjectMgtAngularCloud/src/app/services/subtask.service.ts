import { Subtask } from './../models/subtask';

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  private subUrl: string;
  private subtaskURL: string;
  private saveSubTaskURL: string;
  constructor(private http: HttpClient) {
    this.subUrl = 'https://projectmanagementadminservice.cfapps.io/api/getsubtasks';
    this.subtaskURL = 'https://projectmanagementmanagerservice.cfapps.io/subtask/SubTaskByTaskId';
    this.saveSubTaskURL = 'https://projectmanagementmanagerservice.cfapps.io/subtask/SubTask';
  }

  public getSubtask(pid: number, tid: number): Observable<Subtask[]> {
    const url = `${this.subUrl}/${pid}/${tid}`;
    console.log(url);
    return this.http.get<Subtask[]>(url);
  }
  public findSubTask(taskId: number): Observable<Subtask[]> {

    return this.http.get<Subtask[]>(this.subtaskURL + '/' + taskId);
  }

  public save(subtask: Subtask) {
    return this.http.post<Subtask>(this.saveSubTaskURL, subtask);
  }
}