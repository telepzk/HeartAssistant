import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { PollsComponent } from './polls/polls.component';
import { RespondentComponent } from './respondent/respondent.component';
import { RespondentsComponent } from './respondents/respondents.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'polls',
        component: PollsComponent
      },
      {
        path: 'respondents',
        component: RespondentsComponent
      },
      {
        path: 'respondents/:id',
        component: RespondentComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
