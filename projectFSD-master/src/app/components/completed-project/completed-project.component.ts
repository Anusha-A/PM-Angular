import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Component, OnInit} from '@angular/core';





@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {
  projects : Project[];
  projectdata;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.findAll().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
      
    });
  }
  gotonext(proj)
  {
    this.projectdata = proj.getAttribute('data-project-id');
    sessionStorage.setItem('pid', this.projectdata);
  }

}
