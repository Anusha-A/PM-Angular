import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { ChartService } from './services/chart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardSmComponent } from './components/cards/card-sm/card-sm.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {ChartsModule} from 'ng2-charts';
import { CardHrChartComponent } from './components/cards/card-hr-chart/card-hr-chart.component';
import { CardVrChartComponent } from './components/cards/card-vr-chart/card-vr-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './layout/login/login.component';
import { WorkforceComponent } from './layout/workforce/workforce.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {ProgressBarModule} from "angular-progress-bar";
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardSmComponent,
    CardLayoutComponent,
    CardHrChartComponent,
    CardVrChartComponent,
    TaskComponent,
    LoginComponent,
    WorkforceComponent,
    SubtaskComponent,
    CompletedProjectComponent,
    OngoingProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatBadgeModule,
    ChartsModule,
    HttpClientModule,
    ProgressBarModule,
    MatPaginatorModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
      showInnerStroke: false,
      showSubtitle: false,
      maxPercent: 100,
      unitsFontSize: "50",
      titleFontSize: "50",
      responsive: true
    })
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
