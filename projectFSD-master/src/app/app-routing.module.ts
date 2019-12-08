import { ErrorPageComponent } from './error-page/error-page.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { TaskComponent } from './components/task/task.component';
import { WorkforceComponent } from './layout/workforce/workforce.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'project', component: CardLayoutComponent},
  { path: 'workforce', component: WorkforceComponent},
  { path: 'task', component: TaskComponent},
  {path: 'subtask', component: SubtaskComponent},
  {path: 'completed', component:CompletedProjectComponent},
  {path:'ongoing',component:OngoingProjectComponent},
  {path: 'details', component:ProjectDetailsComponent},
  {path:'error', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
