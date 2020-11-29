import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsComponent } from './patients/patients.component';
import { PollsComponent } from './polls/polls.component';
import { RespondentsComponent } from './respondents/respondents.component';
import { RespondentsListComponent } from './respondents-list/respondents-list.component';
import { RespondentComponent } from './respondent/respondent.component';
import { AnswersListComponent } from './answers-list/answers-list.component';


@NgModule({
  declarations: [DashboardComponent, AccountComponent, PatientListComponent, PatientsComponent, PollsComponent, RespondentsComponent, RespondentsListComponent, RespondentComponent, AnswersListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
