import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent implements OnInit {
  allProjects:Project[];
  count:number;
  constructor(private projectService:ProjectService ) { }

  ngOnInit() {
    this.projectService.getAllProjectDetails().subscribe(data=>{
      this.allProjects=data;
      console.log(this.allProjects);
     this.count= this.allProjects.length;      });

     
    }
   
}
