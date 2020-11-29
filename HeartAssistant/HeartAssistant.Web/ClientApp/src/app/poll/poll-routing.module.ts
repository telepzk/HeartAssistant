import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollComponent } from './poll.component';

const routes: Routes = [
  {
    path: 'poll', redirectTo: '/', pathMatch: 'full'
  },
  { path: 'poll/:code', component: PollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
