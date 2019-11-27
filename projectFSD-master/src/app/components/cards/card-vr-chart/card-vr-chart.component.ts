import { Component, OnInit } from '@angular/core';
import { ChartService } from './../../../services/chart.service';
import { Chart } from 'chart.js';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-card-vr-chart',
  templateUrl: './card-vr-chart.component.html',
  styleUrls: ['./card-vr-chart.component.css']
})
export class CardVrChartComponent implements OnInit {

  doughnutchart: any;
  tasks: Task[];
  progress: number = 0;
  ProjectProgress: number;
  projectTitle: String;
  projectSubtitle = "Project Progress"
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getProjectProgressData().subscribe(response => {
      this.tasks = response;
      this.projectTitle = this.tasks[0].projectId.projectDesc;
      this.getTaskProgressDetails();
      this.populateChart();
    });
  }

  getTaskProgressDetails() {
    for (let task of this.tasks) {
      this.progress += task.progress;
    }
  }

  populateChart() {
    this.ProjectProgress = this.progress / this.tasks.length;
    this.doughnutchart = new Chart('doughnutchart_canvas', {
      type: 'doughnut',
      data: {
        labels: ['Progress', 'Progress Remaining'],
        datasets: [{
          label: "Points",
          data: [this.ProjectProgress, 100 - this.ProjectProgress], 
          backgroundColor: ['#1fd10f', '#e3e3e3']
        }]
      },
      options: {
        cutoutPercentage: 50,
        legend: {
          display: false
        },
        animation: {
          animateScale: true
        }
      }
      
    });
  }

}
