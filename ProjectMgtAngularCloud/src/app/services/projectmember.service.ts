import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projectmember } from '../models/projectmember';

@Injectable({
  providedIn: 'root'
})
export class ProjectMemberService {
  private projectMemberUrl : string;
  private assignedMemberUrl : string;

  private findProjectlByEmpIdURL : string;


  constructor(private http: HttpClient) {
    this.projectMemberUrl = 'https://projectmanagementmanagerservice.cfapps.io/projectMember/saveProjectMember';
    this.assignedMemberUrl = 'https://projectmanagementmanagerservice.cfapps.io/projectMember/getAllMembersOfAProject';
    this.findProjectlByEmpIdURL = 'https://projectmanagementadminservice.cfapps.io/api/getteams';

  }


  public getProjectMembers(project: number): Observable<Projectmember[]> {

    return this.http.get<Projectmember[]>(this.assignedMemberUrl+'/'+ project);
  }

  public save(projectMember: Projectmember) {
    return this.http.post<Projectmember>(this.projectMemberUrl, projectMember);
  }

  
  public findProjectByEmpId(id:number): Observable<Projectmember[]> {
    return this.http.get<Projectmember[]>(this.findProjectlByEmpIdURL+'/'+id);
  }

}



