import { Task } from './../../../models/task';

import { ChartService } from './../../../services/chart.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-card-hr-chart',
  templateUrl: './card-hr-chart.component.html',
  styleUrls: ['./card-hr-chart.component.css']
})
export class CardHrChartComponent implements OnInit {

  barchart: any;
  tasks: Task[];
  labels = [];
  progress = [];
  taskCount: number;
  taskHeader = "Tasks"
  taskSubtitle = "Task Progress"
  constructor(private chartService: ChartService) { }

  ngOnInit() {

    this.chartService.getTaskData().subscribe(response => {
      this.tasks = response;
      console.log(this.tasks);
      this.getTaskDetails();
      this.populateChart();
    });

    
  }

  getTaskDetails(){
    for(let task of this.tasks){
      this.labels.push(task.taskDescription);
      this.progress.push(task.progress);
      console.log(task);
      console.log(task.progress);
    }
  }
  

  populateChart(){
    this.barchart = new Chart('barchart_canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Percentage of Task Completion',
          data: this.progress,
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(0,255,0,0.2)',
            'rgba(0,0,255,0.3)'
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
  

}
