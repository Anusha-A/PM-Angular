import { Chart } from 'chart.js';
import { ProjectService } from './../../../services/project.service';
import { Project } from 'src/app/models/project';
import { Task } from './../../../models/task';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-card-hr-chart',
  templateUrl: './card-hr-chart.component.html',
  styleUrls: ['./card-hr-chart.component.css']
})
export class CardHrChartComponent implements OnInit {
  allProjectcount: number;
  allProjects: Project[];
  barchart: any;
  projectCnt: number;

  labels = [];
  progress = [];
  c: number;
  maxvalu: number;
  ChartHeader = "Project Statistics of 5 years"

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.projectService.getLatestProject().subscribe(response => {
      this.allProjects = response;
      this.allProjectcount = this.allProjects.length;
      this.getTaskDetails();
      
    });


  }

  getTaskDetails() {

    console.log("GettaskDetails called" + new Date());
    this.maxvalu = 0;
    for (let i = 4; i >= 0; i--) {

      const now = new Date();
      now.setFullYear(now.getFullYear() - i);
      this.labels.push(now.toISOString().slice(0, 4));


      var y = now.toISOString().slice(0, 4);
      this.c = +y;


      this.projectService.getProjectCount(this.c).subscribe(cnt => {
        this.projectCnt = cnt;
        if (this.maxvalu < this.projectCnt) {
          this.maxvalu = this.projectCnt;
        }
        this.progress.push(this.projectCnt);
      });

    }
    this.populateChart();
    console.log("GettaskDetails ended" + new Date())
  }


  private populateChart() {
    
    console.log("populate called" + new Date());
    this.barchart = new Chart('barchart_canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Project Statistics of 5 years',
          data: this.progress,
          backgroundColor: [
            '#f0134d',  //pink
            '#5d1451', //purple
            '#233714', //green
            '#2a1a5e', //blue
            '#f45905'  //orange
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 100
            }
          }]
        }
      }
    });
  }

  refresh() {
    this.labels = [];
    this.progress = [];
    this.ngOnInit();
  }
}
