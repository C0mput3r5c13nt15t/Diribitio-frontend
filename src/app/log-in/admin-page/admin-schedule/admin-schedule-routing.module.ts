import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSchedulePage } from './admin-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSchedulePageRoutingModule {}
