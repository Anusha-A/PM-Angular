import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-ongoing-project',
  templateUrl: './ongoing-project.component.html',
  styleUrls: ['./ongoing-project.component.css']
})
export class OngoingProjectComponent implements OnInit {
  projects :Project[];
  constructor(private projectService: ProjectService) { }
  projectdata;
  ngOnInit() {
    this.projectService.findOngoing().subscribe(data => {
      this.projects = data;
    });
    
  }
  gotonext(proj)
  {
    this.projectdata = proj.getAttribute('data-project-id');
    sessionStorage.setItem('pid', this.projectdata);
  }

}
