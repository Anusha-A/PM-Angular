import { ProjectService } from './../../services/project.service';
import { Project } from 'src/app/models/project';
import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {
  allProjects:Project[];
  compProject:Project[];
  ongProject:Project[];
  allPorjectcount:number;
  Completedcount:number;
  Ongoingcount:number;
  constructor(private projectService:ProjectService ) { }

  ngOnInit() {
    this.projectService.getAllProjectDetails().subscribe(data=>{
      this.allProjects=data;
      console.log(this.allProjects);
     this.allPorjectcount= this.allProjects.length;      
    });
    this.projectService.findCompletedAll().subscribe(data2=>{
      this.compProject=data2;
      this.Completedcount=this.compProject.length;
    });

    this.projectService.findOngoing().subscribe(data3=>{
      this.ongProject=data3;
      this.Ongoingcount=this.ongProject.length;
    });
    }
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  
}
